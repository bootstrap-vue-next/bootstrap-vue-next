import {ComponentPublicInstance, Ref, shallowReactive, h, ComputedRef, computed} from 'vue'
import {ContainerPosition} from '../../types/container'

export interface ToastVM {
  container: Ref<ComponentPublicInstance> | null
}

export interface ToastOptions {
  id: Symbol
  value: true // show or hide
  delay?: number
  pos: ContainerPosition
}

export class ToastInstance {
  vm: ToastVM
  toasts: Array<ToastOptions>
  containerPositions: ComputedRef<Iterable<ContainerPosition>>

  constructor() {
    this.vm = {container: null}
    this.toasts = shallowReactive([])

    this.containerPositions = computed<Iterable<ContainerPosition>>(() => {
      let s = new Set<ContainerPosition>([])
      this.toasts.map((toast) => {
        s.add(toast.pos)
      })

      return s
    })
  }

  setVmContainer(container: Ref<ComponentPublicInstance>): void {
    this.vm.container = container
  }

  toastexists(toast: ToastOptions): boolean {
    return this.toasts.indexOf(toast) != -1
  }

  show(title: String, body: string): ToastOptions {
    let toast: ToastOptions = {id: Symbol('toast'), value: true, pos: {to}}
    this.toasts.push(toast)
    return toast
    // h(BToastComponent, )
  }

  hide(): void {}
}

const toastInstance = new ToastInstance()

const useToast = () => {
  return {
    toastInstance,
  }
}

export {useToast}
