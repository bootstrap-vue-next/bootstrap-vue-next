import {type App, inject, type InjectionKey, reactive} from 'vue'
import type {BreadcrumbItem} from '../types'

export interface UseBreadcrumbOptions {
  items: BreadcrumbItem[]
  readonly reset: () => void
}

export const BREADCRUMB_SYMBOL: InjectionKey<UseBreadcrumbOptions> = Symbol()

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
  app.provide(BREADCRUMB_SYMBOL, BREADCRUMB_OBJECT)
}

/**
 * @external
 *
 * @returns
 */
export const useBreadcrumb = (): UseBreadcrumbOptions =>
  inject(BREADCRUMB_SYMBOL) ?? BREADCRUMB_OBJECT
