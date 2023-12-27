import {reactive} from 'vue'
import type {BreadcrumbItemRaw} from '../types'
import {createGlobalState} from '@vueuse/core'

export default createGlobalState(() => {
  const items = reactive<BreadcrumbItemRaw[]>([])
  const reset = (): void => {
    items.splice(0, items.length)
  }

  return {items, reset}
})
