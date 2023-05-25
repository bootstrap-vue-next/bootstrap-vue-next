import type {Composables} from 'bootstrap-vue-next'

export interface ModuleOptions {
  composables: (Partial<Record<keyof typeof Composables, boolean>> & {all: boolean}) | boolean
}
