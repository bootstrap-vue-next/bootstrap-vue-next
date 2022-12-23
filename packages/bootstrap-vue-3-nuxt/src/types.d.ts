import {Composables, Directives} from 'bootstrap-vue-3'
import type {addImports} from '@nuxt/kit'

type Import = Exclude<Parameters<typeof addImports>[0], Array<unknown>>

interface Base {
  all?: boolean
}

type ReturnType = boolean | undefined

type PluginObject = Record<keyof typeof Directives, ReturnType>

type ComposableObject = Record<keyof typeof Composables, ReturnType>

type ModuleOption<T> = Base & Partial<T>

interface ModuleOptions {
  plugins: ModuleOption<PluginObject>
  composables: ModuleOption<ComposableObject>
}

export {Import, Base, PluginObject, ComposableObject, ModuleOptions}
