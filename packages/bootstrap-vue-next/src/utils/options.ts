import type {App} from 'vue'
// eslint-disable-next-line no-duplicate-imports
import {hasInjectionContext, inject, provide} from 'vue'
import type {BootstrapVueOptions} from '../types'

export enum ComponentName {
  BAccordion = 'BAccordion',
  BAlert = 'BAlert',
  BBadge = 'BBadge',
  BButton = 'BButton',
  BButtonGroup = 'BButtonGroup',
  BButtonToolbar = 'BButtonToolbar',
  BCard = 'BCard',
  BCollapse = 'BCollapse',
  BDropdown = 'BDropdown',
  BListGroup = 'BListGroup',
  BModal = 'BModal',
  BOffcanvas = 'BOffcanvas',
  BProgress = 'BProgress',
  BSpinner = 'BSpinner',
  BTab = 'BTab',
  BToast = 'BToast',
}

const symbol = Symbol.for('BOptions')

export function injectOptions(): Record<string, any> {
  if (!hasInjectionContext()) {
    return {}
  }

  const instance = inject(symbol)
  if (!instance) {
    return {}
  }

  return instance as BootstrapVueOptions
}

export function injectComponentOptions<T extends Record<string, any> = Record<string, any>>(
  key: `${ComponentName}`
): T {
  return injectOptions()[key] || {}
}

const extendOptions = (
  target: Record<string, Record<string, any>>,
  source: Record<string, Record<string, any>>
) => {
  const keys = Object.keys(source)
  for (let i = 0; i < keys.length; i++) {
    target[keys[i]] = {
      ...(target[keys[i]] || {}),
      ...source[keys[i]],
    }
  }
}
export function provideOptions(app: App, options: Record<string, Record<string, any>>) {
  if (app && app._context && app._context.provides && app._context.provides[symbol]) {
    extendOptions(app._context.provides[symbol], options)
    return
  }

  if (app) {
    app.provide(symbol, options)
    return
  }

  provide(symbol, options)
}

export function provideComponentOptions<T extends Record<string, any>>(
  app: App,
  component: `${ComponentName}`,
  options: T
): T {
  if (app && app._context && app._context.provides && app._context.provides[symbol]) {
    const instance = app._context.provides[symbol]
    instance[component] = {
      ...(instance[component] || {}),
      ...options,
    }

    return instance[component]
  }

  const instance = {
    [component]: options,
  }

  if (app) {
    app.provide(symbol, instance)
    return instance[component]
  }

  provide(symbol, instance)
  return instance[component]
}
