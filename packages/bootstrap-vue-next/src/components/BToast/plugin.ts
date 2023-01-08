import type {BootstrapVueOptions, ColorVariant, ContainerPosition} from '../../types'
import {getId} from '../../utils'
import {
  type App,
  type ComponentPublicInstance,
  computed,
  type ComputedRef,
  inject,
  isReactive,
  type Plugin,
  reactive,
  type Ref,
  type VNode,
} from 'vue'

export interface ToastContent {
  title?: string
  body?: string | VNode
}

export interface ToastOptions {
  autoHide?: boolean
  delay?: number
  id?: string
  noCloseButton?: boolean
  pos?: ContainerPosition
  value?: boolean // show or hide
  variant?: ColorVariant
}

export interface Toast {
  options: ToastOptions
  content: ToastContent
}

/**
 * @external
 */
export type BodyProp = ToastContent['body']

// Toast ViewModel, Each toast instance controls one view model
export interface ToastVM {
  container: VMContainer | undefined
  toasts: Array<Toast>
  root: boolean
  id: symbol
}

type VMContainer = Ref<ComponentPublicInstance | null>

interface ToastContainers {
  [key: symbol]: ToastVM
}

const defaultToastOptions: ToastOptions = {
  autoHide: true,
  delay: 5000,
  noCloseButton: false,
  pos: 'top-right',
  value: true,
}

export class ToastInstance {
  vm: ToastVM
  containerPositions: ComputedRef<Set<ContainerPosition>>

  constructor(vm: ToastVM) {
    if (isReactive(vm)) {
      this.vm = vm
    } else {
      this.vm = reactive(vm) as ToastVM
    }

    this.containerPositions = computed<Set<ContainerPosition>>(() => {
      const s = new Set<ContainerPosition>([])
      this.vm.toasts.map((toast) => {
        if (toast.options.pos) {
          s.add(toast.options.pos)
        }
      })
      return s
    })
  }

  toasts(position?: ContainerPosition): ComputedRef<Array<Toast>> {
    if (position) {
      return computed<Array<Toast>>(() =>
        this.vm.toasts.filter((toast) => {
          if (toast.options.pos === position && toast.options.value) {
            return toast
          }
        })
      )
    }

    return computed(() => this.vm.toasts)
  }

  remove(...forDeletion: [string]): void {
    this.vm.toasts = this.vm.toasts.filter((item) => {
      if (item.options.id && !forDeletion.includes(item.options.id)) {
        return item
      }
    })
  }

  isRoot(): boolean {
    return this.vm.root ?? false
  }

  show(content: ToastContent, options: ToastOptions = defaultToastOptions): Toast {
    const topts: ToastOptions = {id: getId(), ...defaultToastOptions, ...options}

    const toast: Toast = {
      options: reactive(topts),
      content,
    }
    this.vm.toasts.push(toast)
    return toast
  }

  info(content: ToastContent, options: ToastOptions = defaultToastOptions): Toast {
    return this.show(content, {variant: 'info', ...options})
  }

  danger(content: ToastContent, options: ToastOptions = defaultToastOptions): Toast {
    return this.show(content, {variant: 'danger', ...options})
  }

  warning(content: ToastContent, options: ToastOptions = defaultToastOptions): Toast {
    return this.show(content, {variant: 'warning', ...options})
  }

  success(content: ToastContent, options: ToastOptions = defaultToastOptions): Toast {
    return this.show(content, {variant: 'success', ...options})
  }

  hide(): void {
    //empty...
  }
}

export class ToastController {
  vms: ToastContainers
  rootInstance?: symbol

  constructor() {
    this.vms = {}
  }

  // Assume Root Vm if no parameters are passed
  public getOrCreateViewModel(): ToastVM
  public getOrCreateViewModel(vm?: ToastVM): ToastVM
  public getOrCreateViewModel(vm?: any): ToastVM {
    if (!vm) {
      if (this.rootInstance) {
        return this.vms[this.rootInstance]
      }
      const vm: ToastVM = {root: true, toasts: [], container: undefined, id: Symbol('toast')}
      this.rootInstance = vm.id
      this.vms[vm.id] = vm
      return vm
    }
    if (vm.root) {
      // lets see if we have a root instance
      if (this.rootInstance) {
        return this.vms[this.rootInstance]
      }

      this.rootInstance = vm.id
    }
    this.vms[vm.id] = vm
    return vm
  }

  public getVM(): ToastVM | undefined
  public getVM(id?: symbol): ToastVM | undefined
  public getVM(id?: any): ToastVM | undefined {
    if (!id && this.rootInstance) {
      return this.vms[this.rootInstance]
    } else if (id) {
      return this.vms[id]
    }

    return undefined
  }

  useToast = useToast
}

// default global inject key to fetch the controller
const injectkey = Symbol()
const fetchKey = Symbol()

const rootkey = 'root' // TODO: I guess this variable is not used in any place...

const defaults = {
  container: undefined,
  toasts: [],
  root: false,
}

export function getKey(): any {
  return inject(fetchKey)
}

/**
 * @external
 */
export function useToast(): ToastInstance | undefined
export function useToast(vm: {id: symbol}, key?: symbol): ToastInstance | undefined
export function useToast(
  vm: {container: Ref<ComponentPublicInstance>; root: boolean},
  key?: symbol
): ToastInstance | undefined

export function useToast(vm?: any, key: symbol = injectkey): ToastInstance | undefined {
  //let's get our controller to fetch the toast instance
  const controller = inject(getKey()) as ToastController

  // not parameters passed, use root if defined
  if (!vm) {
    return new ToastInstance(controller.getOrCreateViewModel())
  }

  // use toast generically
  const vm_id = {id: Symbol('toastInstance')}
  const local_vm: ToastVM = {...defaults, ...vm_id, ...vm}
  const vm_instance = controller.getOrCreateViewModel(local_vm)
  return new ToastInstance(vm_instance)
}

/**
 * @external
 */
const BToastPlugin: Plugin = {
  install: (app: App, options: BootstrapVueOptions = {}) => {
    app.provide(fetchKey, options?.BToast?.injectkey ?? injectkey)
    app.provide(options?.BToast?.injectkey ?? injectkey, new ToastController())
  },
}

export {BToastPlugin}
export default BToastPlugin
