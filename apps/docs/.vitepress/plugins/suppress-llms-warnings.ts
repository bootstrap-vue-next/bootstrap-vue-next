import type { Plugin } from 'vite'

/**
 * Suppresses known harmless warnings from vitepress-plugin-llms remark-include.
 *
 * The llms plugin internally uses remark-include which attempts to resolve
 * custom `<<< DEMO` / `<<< FRAGMENT` directives as file snippets.
 * These directives are handled by our own materialize-llms-snippets plugin
 * at a later stage, so the "Snippet file not found" warnings are expected
 * and should be silenced.
 */
export const suppressLlmsWarnings = (): Plugin => {
  const originalWarn = console.warn
  let patched = false

  const suppressedPatterns = [
    '[remark-include] Snippet file not found:',
    '[remark-include] Include file not found:',
  ]

  const patch = () => {
    if (patched) return
    patched = true
    console.warn = (...args: unknown[]) => {
      const msg = typeof args[0] === 'string' ? args[0] : ''
      if (suppressedPatterns.some((pattern) => msg.includes(pattern))) return
      originalWarn.apply(console, args)
    }
  }

  const restore = () => {
    if (patched) {
      console.warn = originalWarn
      patched = false
    }
  }

  return {
    name: 'suppress-llms-warnings',
    enforce: 'pre',
    buildStart() {
      patch()
    },
    closeBundle() {
      restore()
    },
  }
}
