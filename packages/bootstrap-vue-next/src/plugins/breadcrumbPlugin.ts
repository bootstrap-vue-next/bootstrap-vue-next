import {type Plugin, ref} from 'vue'
import type {BreadcrumbItemRaw} from '../types'
import {breadcrumbPluginKey} from '../utils'

export default {
  install(app) {
    const items = ref<BreadcrumbItemRaw[]>([])
    const reset = () => {
      items.value.splice(0, items.value.length)
    }

    app.provide(breadcrumbPluginKey, {items, reset})
  },
} satisfies Plugin
