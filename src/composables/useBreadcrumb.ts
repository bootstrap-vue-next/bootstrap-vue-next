import {App, inject, InjectionKey, reactive} from 'vue'
import BreadcrumbItem from '../types/BreadcrumbItem'

interface UseBreadcrumbI {
  items: BreadcrumbItem[]
  readonly reset: () => void
}

const BREADCRUMB_SYMBOL: InjectionKey<UseBreadcrumbI> = Symbol()

const BREADCRUMB_OBJECT: UseBreadcrumbI = {
  items: reactive<BreadcrumbItem[]>([]),
  reset(): void {
    this.items = reactive<BreadcrumbItem[]>([])
  },
}

export function createBreadcrumb(app: App): void {
  app.provide(BREADCRUMB_SYMBOL, BREADCRUMB_OBJECT)
}

export function useBreadcrumb(): UseBreadcrumbI {
  const context = inject(BREADCRUMB_SYMBOL)

  if (!context) {
    return BREADCRUMB_OBJECT
  }

  return context
}
