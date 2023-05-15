import {type App, inject, reactive} from 'vue'
import type {BreadcrumbItem} from '../types'
import {breadcrumbInjectionKey} from '../utils/keys'

const BREADCRUMB_OBJECT = {
  items: reactive<BreadcrumbItem[]>([]),
  reset(): void {
    this.items = reactive<BreadcrumbItem[]>([])
  },
}

// TODO v1.0 this could be simplified and removed outright. Using some vueuse utility, we could just have useBreadcrumb be a global state
export const createBreadcrumb = (app: App) => {
  app.provide(breadcrumbInjectionKey, BREADCRUMB_OBJECT)
}

export const useBreadcrumb = () => inject(breadcrumbInjectionKey, null) ?? BREADCRUMB_OBJECT
