import { addImports } from '@nuxt/kit'
import type {ModuleOptions} from '../module'
import parseActiveImports from '../utils/parseActiveImports'

export default (options: ModuleOptions['composables']) => {
  addImports(
    parseActiveImports(
      {
        createBreadcrumb: false,
        useBreadcrumb: false,
        useColorMode: false,
      }, 
      options
    )
  )
}
