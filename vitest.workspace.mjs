import {defineWorkspace} from 'vitest/config'

export default defineWorkspace([
  './apps/docs/vite.config.mts',
  './apps/playground/vite.config.mts',
  './packages/bootstrap-vue-next/vite.config.mts',
  './templates/vite/vite.config.mts',
])
