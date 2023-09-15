import {createSharedComposable} from '@vueuse/core'
import {ref} from 'vue'
import type {Toast} from '../types'

const posDefault = 'top-right'

export default createSharedComposable(() => {
  const toasts = ref<(Toast & {self: symbol})[]>([])

  const show = (...[el, obj]: [el: string, obj?: Omit<Toast, 'body'>] | [el: Toast]) => {
    const payload: Toast = {pos: posDefault}
    if (typeof el === 'string') {
      Object.assign(payload, obj, {
        body: el,
        value: obj?.value || 5000,
      } satisfies Toast)
    } else {
      Object.assign(payload, el, {value: el.value || 5000} satisfies Toast)
    }
    toasts.value.push({...payload, self: Symbol()})
  }

  /**
   * It's not a good idea to call this method. It should only be used internally. First off, it requires a symbol. Second off, even if it supplied an index,
   * it could be out of order. You don't exactly know which order a Toast came in
   */
  const hide = (self: symbol) => {
    const ind = toasts.value.findIndex((el) => el.self === self)
    if (ind === -1) return
    toasts.value.splice(ind, 1)
  }

  return {toasts, show, hide}
})
