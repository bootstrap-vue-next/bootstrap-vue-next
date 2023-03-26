import {type App, inject, reactive} from 'vue'
import type {BreadcrumbItem} from '../types'
import {breadcrumbInjectionKey} from '../utils/keys'

const BREADCRUMB_OBJECT = {
  items: reactive<BreadcrumbItem[]>([]),
  reset(): void {
    this.items = reactive<BreadcrumbItem[]>([])
  },
}

export const createBreadcrumb = (app: App) => {
  app.provide(breadcrumbInjectionKey, BREADCRUMB_OBJECT)
}

export const useBreadcrumb = () => inject(breadcrumbInjectionKey, null) ?? BREADCRUMB_OBJECT
