import {Directives} from 'bootstrap-vue-3'
import {addImports} from '@nuxt/kit'
import type {ModuleOptions, PluginObject} from '../types'
import {activeResolver, pluginsBase, resolveImportObject} from '../utils'

export default (options: ModuleOptions['plugins']) => {
  const plugins = resolveImportObject<PluginObject>(Directives)

  addImports(activeResolver(options, pluginsBase, plugins))
}
