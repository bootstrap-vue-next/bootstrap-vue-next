import {defineComponent, h} from 'vue'
import {mount} from '@vue/test-utils'

export const createContainer = (tag = 'div'): HTMLElement => {
  const container = document.createElement(tag)
  document.body.appendChild(container)
  return container
}
export const waitRAF = (): Promise<number> =>
  new Promise((resolve) => requestAnimationFrame(resolve))
export const asyncTimeout = (timeout: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve.bind(null), timeout))
export const useSetup = <V>(setup: () => V) => {
  const Comp = defineComponent({
    setup,
    render() {
      return h('div')
    },
  })

  return mount(Comp)
}
