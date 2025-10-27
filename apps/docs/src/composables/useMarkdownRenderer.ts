import {computed, type ComputedRef} from 'vue'
import {withBase} from 'vitepress'
import MarkdownIt from 'markdown-it'

// Create a shared markdown-it instance
const md = new MarkdownIt({
  html: false, // Disable HTML tags in source for security
  breaks: false,
  linkify: true,
})

// Override the default link renderer to add base path
const defaultRender =
  md.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  const token = tokens[idx]
  const hrefIndex = token.attrIndex('href')

  if (hrefIndex >= 0 && token.attrs) {
    const [, href] = token.attrs[hrefIndex]
    // Only add base to internal links (starting with /)
    if (href.startsWith('/') && !href.startsWith('//')) {
      token.attrs[hrefIndex][1] = withBase(href)
    }
  }

  return defaultRender(tokens, idx, options, env, self)
}

/**
 * Composable for rendering markdown with VitePress base path support
 */
export function useMarkdownRenderer(text: ComputedRef<string> | string): ComputedRef<string> {
  const textRef = typeof text === 'string' ? computed(() => text) : text

  return computed(() => {
    if (!textRef.value) return ''
    // Use renderInline to avoid wrapping in <p> tags
    return md.renderInline(textRef.value)
  })
}
