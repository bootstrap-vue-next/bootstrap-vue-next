import {type Plugin, ref} from 'vue'
import type {BreadcrumbItemRaw} from '../types/BreadcrumbTypes'
import {breadcrumbPluginKey} from '../utils/keys'

export const breadcrumbPlugin: Plugin = {
  install(app) {
    const items = ref<BreadcrumbItemRaw[]>([])
    const reset = () => {
      items.value.splice(0, items.value.length)
    }

    app.provide(breadcrumbPluginKey, {items, reset})
  },
}
