// import type {Composables, Directives} from 'bootstrap-vue-next'
import type {Composables} from 'bootstrap-vue-next'

interface ModuleOptions {
  // directives: (Partial<Record<keyof typeof Directives, boolean>> & {all: boolean}) | boolean
  composables: (Partial<Record<keyof typeof Composables, boolean>> & {all: boolean}) | boolean
}

export default ModuleOptions
