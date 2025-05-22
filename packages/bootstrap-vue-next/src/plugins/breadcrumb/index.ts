import {type Plugin, ref} from 'vue'
import type {BreadcrumbItemRaw} from '../../types/BreadcrumbTypes'
import {breadcrumbGlobalIndexKey, breadcrumbPluginKey} from '../../utils/keys'

export const breadcrumbPlugin: Plugin = {
  install(app) {
    const items = ref<Record<string, BreadcrumbItemRaw[]>>({
      [breadcrumbGlobalIndexKey]: [],
    })
    const reset = (key: string = breadcrumbGlobalIndexKey) => {
      items.value[key] = []
    }

    app.provide(breadcrumbPluginKey, {items, reset})
  },
}
