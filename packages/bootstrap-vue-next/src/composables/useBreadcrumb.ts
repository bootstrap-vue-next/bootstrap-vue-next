import {reactive} from 'vue'
import type {BreadcrumbItem} from '../types'
import {createGlobalState} from '@vueuse/core'

export default createGlobalState(() => {
  const items = reactive<BreadcrumbItem[]>([])
  const reset = (): void => {
    items.splice(0, items.length)
  }

  return {items, reset}
})
