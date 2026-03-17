import {defineWorkspace} from 'vitest/config'

export default defineWorkspace([
  './apps/docs/vite.config.ts',
  './apps/playground/vite.config.ts',
  './packages/bootstrap-vue-next/vite.config.ts',
  './templates/vite/vite.config.ts',
])
