import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    root: fileURLToPath(new URL('./', import.meta.url)),
    testTimeout: 60_000,
    hookTimeout: 60_000,
  },
})
