import type {Composables, Directives} from 'bootstrap-vue-next'

interface ModuleOptions {
  directives: Partial<Record<keyof typeof Directives, boolean>> & {all: boolean}
  composables: Partial<Record<keyof typeof Composables, boolean>> & {all: boolean}
}

export default ModuleOptions
