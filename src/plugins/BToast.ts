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
  watchEffect,
  ComponentPublicInstance,
  watch,
  reactive,
} from 'vue'
import {
  ComponentPublicInstance,
  Ref,
  shallowReactive,
  ComputedRef,
  computed,
  isReactive,
  watchEffect,
  Reactive,
  VNode,
  ref,
} from 'vue'

import {BootstrapVueOptions} from '../types'
import {ContainerPosition} from '../types/container'

export interface ToastContent {
  title?: String
  body?: String
  vnode?: VNode
}

export interface ToastOptions {
  id?: Symbol
  value?: boolean // show or hide
  delay?: number
  pos?: ContainerPosition
}

export interface Toast {
  options: Reactive<ToastOptions>
  content: ToastContent
}

type VMContainer = Ref<ComponentPublicInstance | null>

interface ToastContainers {
  [key: symbol]: ToastVM
}

// Toast ViewModel, Each toast instance controls one view model
export interface ToastVM {
  container: VMContainer | undefined
  toasts: Array<Toast>
  root: Boolean
  id: symbol
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

  isRoot(): Boolean {
    return this.vm.root ?? false
  }

  show(
    content: ToastContent,
    options: ToastOptions = {delay: 5000, value: true, pos: 'top-right'}
  ): Toast {
    let topts: ToastOptions = {id: Symbol('toast'), ...options}

    let toast: Toast = {
      options: reactive({id: Symbol('toast'), ...options}),
      content: content,
    }

    this.vm.toasts.push(toast)

    return toast
  }

  hide(): void {}
}

export class ToastController {
  vms: ToastContainers
  rootInstance?: symbol

  constructor() {
    this.vms = {}
  }

  getOrCreateViewModel(vm: ToastVM): ToastVM {
    // if (vm.container === undefined) return

    if (vm.root) {
      this.rootInstance = vm.id
    }
    this.vms[vm.id] = vm
    return vm
  }

  getVM(): ToastVM | undefined
  getVM(id?: symbol): ToastVM | undefined {
    if (!id && this.rootInstance) {
      return this.vms[this.rootInstance]
    } else if (id) {
      return this.vms[id]
    }

    return undefined
  }

  //fetch a toast instance given a  a ToastVM
  useMethods(container?: ToastVM): ToastInstance | undefined {
    // if (container){
    //   let instance = this.vms[container.id]
    //   return new ToastInstance(instance)
    // }
    // if (this.rooInstance){
    //   return new ToastInstance(this.vms[this.rooInstance])
    // }
    // return undefined
  }
}

// default global inject key to fetch the controller
let injectkey: symbol = Symbol('toast')

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
    let local_vm = controller.getVM()
    return local_vm ? new ToastInstance(local_vm) : undefined
  }

  // use toast generically
  let vm_id = {id: Symbol('toastInstance')}
  let local_vm = {...defaults, ...vm_id, ...vm}
  let vm_instance = controller.getOrCreateViewModel(local_vm)
  return new ToastInstance(vm_instance)
}

const BToastPlugin: Plugin = {
  install: (app: App, options: BootstrapVueOptions = {}) => {
    app.provide(options?.BToast?.injectkey ?? injectkey, new ToastController())
  },
}

export default BToastPlugin
