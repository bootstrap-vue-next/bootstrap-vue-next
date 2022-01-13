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
} from 'vue'
import {
  ComponentPublicInstance,
  Ref,
  shallowReactive,
  ComputedRef,
  computed,
  watchEffect,
  ref,
} from 'vue'

import {BootstrapVueOptions} from '../types'
import {ContainerPosition} from '../types/container'

export interface ToastOptions {
  id?: Symbol
  value?: true // show or hide
  delay?: number
  pos?: ContainerPosition
}

type VMContainer = Ref<ComponentPublicInstance | null>

interface ToastVM {
  container: VMContainer | undefined
  root?: Boolean
}

export class ToastInstance {
  vms: Array<VMContainer>
  rootContainer?: VMContainer
  toasts: Array<ToastOptions>
  containerPositions: ComputedRef<Iterable<ContainerPosition>>

  constructor() {
    this.vms = []
    this.toasts = shallowReactive([])

    this.containerPositions = computed<Iterable<ContainerPosition>>(() => {
      let s = new Set<ContainerPosition>([])
      console.log(this.toasts[0].pos)
      this.toasts.map((toast) => {
        if (toast.pos) {
          s.add(toast.pos)
        }
      })
      return s
    })
  }

  watchContainerMount = watchEffect(
    () => {
      // watch the component get mounted so we can show the toasts
      // this.rootContainer?.value?.show()
      // if(c){
      //   watch(c, () => {
      //   console.log("params were changed")
      // })
      // }
    },
    {
      flush: 'post',
    }
  )

  setVmContainer(vm: ToastVM): void {
    if (vm.container === undefined) return

    if (vm.root) {
      this.rootContainer = vm.container
      return
    }

    this.vms.push(vm.container)
  }

  toastexists(toast: ToastOptions): boolean {
    return this.toasts.indexOf(toast) != -1
  }

  useMethods(): any {
    return {show: this.show, hide: this.hide}
  }

  show(
    title: String,
    body: string,
    toast: ToastOptions = {delay: 5000, value: true, pos: 'top-right'}
  ): ToastOptions {
    let newToast: ToastOptions = {id: Symbol('toast'), value: true}
    this.toasts.push(toast)
    return toast
    // h(BToastComponent, )
  }

  hide(): void {}
}

let injectkey: Symbol = Symbol('toast')

export const useToast = (vm: ToastVM = {container: undefined}, key = null) => {
  let instance = inject(key !== null ? key : injectkey) as ToastInstance
  instance.setVmContainer(vm)
  return instance
}

const BToastPlugin: Plugin = {
  install: (app: App, options: BootstrapVueOptions = {}) => {
    app.provide(options?.BToast?.injectkey ?? injectkey, new ToastInstance())
  },
}

export default BToastPlugin
