import {Composables} from 'bootstrap-vue-3'
import {addImports} from '@nuxt/kit'
import type {ComposableObject, ModuleOptions} from '../types'
import {activeResolver, composablesBase, resolveImportObject} from '../utils'

export default (options: ModuleOptions['composables']) => {
  const composables = resolveImportObject<ComposableObject>(Composables)

  addImports(activeResolver(options, composablesBase, composables))
}
