import {defineComponent, h, type Ref} from 'vue'
import {mount} from '@vue/test-utils'
import {formGroupKey} from '../src/utils/keys'
import type {ValidationState} from '../src/types/CommonTypes'

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

export const provideFormGroupStub = (
  state: Ref<ValidationState | undefined>,
  disabled: Ref<boolean>
) => ({
  [formGroupKey as unknown as symbol]: () => ({state, disabled, track: () => {}}),
})
