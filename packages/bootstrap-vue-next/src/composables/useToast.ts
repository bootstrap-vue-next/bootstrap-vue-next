import {createGlobalState} from '@vueuse/core'
import {ref} from 'vue'
import type {Toast} from '../types'

const posDefault = 'top-right'

export default createGlobalState(() => {
  const toasts = ref<(Toast & {self: symbol})[]>([])

  /**
   * @returns {symbol} A symbol that corresponds to its unique id. You can pass this id to the hide function to force a Toast to hide
   */
  const show = (...[el, obj]: [el: string, obj?: Omit<Toast, 'body'>] | [el: Toast]): symbol => {
    const payload: Toast = {pos: posDefault}
    if (typeof el === 'string') {
      Object.assign(payload, obj, {
        body: el,
        value: obj?.value || 5000,
      } satisfies Toast)
    } else {
      Object.assign(payload, el, {value: el.value || 5000} satisfies Toast)
    }
    const self = Symbol()

    toasts.value.push({...payload, self})

    return self
  }

  /**
   * You can get the symbol param from the return value from the show method
   */
  const hide = (self: symbol) => {
    const ind = toasts.value.findIndex((el) => el.self === self)
    if (ind === -1) return
    toasts.value.splice(ind, 1)
  }

  return {toasts, show, hide}
})
