import {type App, inject, reactive} from 'vue'
import type {BreadcrumbItem} from '../types'
import {breadcrumbInjectionKey} from '../utils'

export interface UseBreadcrumbOptions {
  items: BreadcrumbItem[]
  readonly reset: () => void
}

const BREADCRUMB_OBJECT: UseBreadcrumbOptions = {
  items: reactive<BreadcrumbItem[]>([]),
  reset(): void {
    this.items = reactive<BreadcrumbItem[]>([])
  },
}

/**
 * @param app
 */
export const createBreadcrumb = (app: App): void => {
  app.provide(breadcrumbInjectionKey, BREADCRUMB_OBJECT)
}

/**
 * @external
 *
 * @returns
 */
export const useBreadcrumb = (): UseBreadcrumbOptions =>
  inject(breadcrumbInjectionKey) ?? BREADCRUMB_OBJECT
