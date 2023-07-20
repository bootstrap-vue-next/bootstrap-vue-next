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
  variant?: ColorVariant | null
}

export interface Toast {
  options: ToastOptions
  content: ToastContent
}

export type BodyProp = ToastContent['body']

// Toast ViewModel, Each toast instance controls one view model
export interface ToastVM {
  container: VMContainer | undefined
  toasts: Toast[]
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

  toasts(position?: ContainerPosition): ComputedRef<Toast[]> {
    if (position) {
      return computed<Toast[]>(() =>
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
}

export class ToastController {
  vms: ToastContainers
  rootInstance?: symbol

  constructor() {
    this.vms = {}
  }

  // Assume default toast VM if no parameters are passed
  public getOrCreateViewModel(id: symbol = injectkey): ToastVM {
    if (this.vms[id]) {
      return this.vms[id]
    }

    const toastModel: ToastVM = {
      root: true,
      toasts: [],
      container: undefined,
      id,
    }

    this.vms[toastModel.id] = toastModel

    return toastModel
  }
}

// default global inject key to fetch the controller
const injectkey = Symbol('toast')

export function getKey(): symbol {
  return injectkey
}

export const useToast = (): ToastInstance | undefined => {
  //let's get our controller to fetch the toast instance
  const controller = inject(getKey()) as ToastController

  if (controller === undefined) {
    return undefined
  }
  // not parameters passed, use root if defined
  return new ToastInstance(controller.getOrCreateViewModel())
}

const BToastPlugin: Plugin = {
  install: (app: App, options?: BootstrapVueOptions) => {
    const key =
      typeof options?.BToast === 'object' ? options?.BToast?.injectkey ?? injectkey : injectkey
    app.provide(fetchKey, key)
    app.provide(key, new ToastController())
  },
}

export {BToastPlugin}
export default BToastPlugin
