import {
  App,
  Plugin,
  provide,
  getCurrentInstance,
  resolveComponent,
  h,
  render,
  onMounted,
  onUpdated,
  nextTick,
  inject,
  ComponentPublicInstance,
  watch,
  VNode,
  Ref,
  shallowReactive,
  ComputedRef,
  computed,
  isReactive,
  watchEffect,
  ref,
  Reactive,
  reactive,
} from 'vue'

import {ColorVariant} from '../../types'
import {BootstrapVueOptions} from '../../types'
import {ContainerPosition} from '../../types/container'
import getID from '../../utils/getID'

export interface ToastContent {
  title?: String
  body?: String | VNode
}

export interface ToastOptions {
  id?: String
  value?: boolean // show or hide
  delay?: number
  pos?: ContainerPosition
  variant?: ColorVariant
}

export interface Toast {
  options: Reactive<ToastOptions>
  content: ToastContent
}

export type BodyProp = ToastContent['body']

// Toast ViewModel, Each toast instance controls one view model
export interface ToastVM {
  container: VMContainer | undefined
  toasts: Array<Toast>
  root: Boolean
  id: symbol
}

type VMContainer = Ref<ComponentPublicInstance | null>

interface ToastContainers {
  [key: symbol]: ToastVM
}

let defaultToastOptions: ToastOptions = {delay: 5000, value: true, pos: 'top-right'}

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
      let s = new Set<ContainerPosition>([])
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
      return computed<Array<Toast>>(() => {
        return this.vm.toasts.filter((toast) => {
          if (toast.options.pos == position) {
            return toast
          }
        })
      })
    }

    return computed(() => {
      return this.vm.toasts
    })
  }

  remove(...forDeletion: [String]): void {
    this.vm.toasts = this.vm.toasts.filter((item) => {
      if (!forDeletion.includes(item.options.id)) {
        return item
      }
    })
  }

  isRoot(): Boolean {
    return this.vm.root ?? false
  }

  show(content: ToastContent, options: ToastOptions = defaultToastOptions): Toast {
    let topts: ToastOptions = {id: getID(), ...defaultToastOptions, ...options}

    let toast: Toast = {
      options: reactive(topts),
      content: content,
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

  hide(): void {}
}

export class ToastController {
  vms: ToastContainers
  rootInstance?: symbol

  constructor() {
    this.vms = {}
  }

  // Assume Root Vm if no paramters are passed
  public getOrCreateViewModel(): ToastVM
  public getOrCreateViewModel(vm?: ToastVM): ToastVM
  public getOrCreateViewModel(vm?: any): ToastVM {
    if (!vm) {
      if (this.rootInstance) {
        return this.vms[this.rootInstance]
      } else {
        let vm: ToastVM = {root: true, toasts: [], container: undefined, id: Symbol('toast')}
        this.rootInstance = vm.id
        this.vms[vm.id] = vm
        return vm
      }
    } else {
      if (vm.root) {
        // lets see if we have a root instance
        if (this.rootInstance) {
          return this.vms[this.rootInstance]
        } else {
        }
        this.rootInstance = vm.id
      }
      this.vms[vm.id] = vm
      return vm
    }
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
let injectkey: symbol = Symbol()
let rootkey = 'root'

let defaults = {
  container: undefined,
  toasts: [],
  root: false,
}
export function useToast(): ToastInstance | undefined
export function useToast(vm: {id: symbol}, key?: symbol): ToastInstance | undefined
export function useToast(
  vm: {container: Ref<ComponentPublicInstance>; root: Boolean},
  key?: symbol
): ToastInstance | undefined

export function useToast(vm?: any, key: symbol = injectkey): ToastInstance | undefined {
  //lets get our controller to fetch the toast instance
  let controller = inject(key !== null ? key : injectkey) as ToastController

  // not paramters passed, use root if defined
  if (!vm) {
    let local_vm = new ToastInstance(controller.getOrCreateViewModel())
    return local_vm
  }

  // use toast generically
  let vm_id = {id: Symbol('toastInstance')}
  let local_vm: ToastVM = {...defaults, ...vm_id, ...vm}
  let vm_instance = controller.getOrCreateViewModel(local_vm)
  return new ToastInstance(vm_instance)
}

export const BToastPlugin: Plugin = {
  install: (app: App, options: BootstrapVueOptions = {}) => {
    app.provide(options?.BToast?.injectkey ?? injectkey, new ToastController())
  },
}

export default BToastPlugin
