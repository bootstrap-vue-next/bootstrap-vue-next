import {describe, expect, it} from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {Window} from 'happy-dom'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distDir = path.resolve(__dirname, '../.vitepress/dist')

interface HeaderItem {
  tag: string
  level: number
  id: string
  text: string
}

/**
 * Validate that a page has exactly one root header (typically h1)
 * This matches the runtime validation in Layout.vue
 */
function validatePageStructure(html: string): {valid: boolean; error?: string} {
  const window = new Window({
    url: 'http://localhost/',
    settings: {
      disableJavaScriptFileLoading: true,
      disableJavaScriptEvaluation: true,
      disableCSSFileLoading: true,
      disableIframePageLoading: true,
      disableComputedStyleRendering: true,
    },
  })

  // Write HTML without executing scripts
  window.document.write(html)
  const {document} = window

  // Use the same query selector as the runtime Layout.vue
  // Note: We query from .doc-content and then filter out demo content
  const docContent = document.querySelector('.doc-content')
  if (!docContent) {
    window.close()
    return {valid: true} // No doc content, skip validation
  }

  const contentQuery = [
    'h1:not([class*="demo"] *):not(.card-body *)',
    'h2:not([class*="demo"] *):not(.card-body *)',
    'h3:not([class*="demo"] *):not(.card-body *)',
    'h4:not([class*="demo"] *):not(.card-body *)',
    'h5:not([class*="demo"] *):not(.card-body *)',
    'h6:not([class*="demo"] *):not(.card-body *)',
    '> div > [id]:not(.card)',
    '#component-reference',
    '.component-reference h3',
  ].join(', ')

  const elements = Array.from(docContent.querySelectorAll(contentQuery)).filter((el) => {
    // Additional filtering: exclude elements inside demo containers or card bodies
    let parent = el.parentElement
    while (parent && parent !== docContent) {
      const className = parent.className || ''
      if (className.includes('demo') || className.includes('card-body')) {
        return false
      }
      parent = parent.parentElement
    }
    return true
  })

  // Convert elements to header items (matching runtime logic)
  const headers: HeaderItem[] = elements.map((el) => {
    const rawTag = el.tagName.toUpperCase()
    const isHeading = /^H[1-6]$/.test(rawTag)
    const tag = isHeading ? rawTag : 'DIV'
    const level = tag.startsWith('H') ? parseInt(tag.replace('H', '')) : 3
    return {
      tag,
      level,
      id: el.id || '',
      text: el.textContent?.trim() || '',
    }
  })

  // Build the same tree structure as runtime
  const root: (HeaderItem & {children: HeaderItem[]})[] = []
  const stack: (HeaderItem & {children: HeaderItem[]})[] = []

  headers.forEach((header) => {
    const item = {...header, children: []}

    while (stack.length && stack[stack.length - 1].level >= item.level) {
      stack.pop()
    }

    if (stack.length === 0) {
      root.push(item)
    } else {
      stack[stack.length - 1].children.push(item)
    }

    stack.push(item)
  })

  // Validate: should have exactly 1 root item
  if (root.length !== 1) {
    window.close()
    return {
      valid: false,
      error: `Expected exactly 1 root header, found ${root.length}. Headers: ${JSON.stringify(
        headers.map((h) => ({tag: h.tag, level: h.level, text: h.text.substring(0, 50)})),
        null,
        2
      )}`,
    }
  }

  window.close()
  return {valid: true}
}

/**
 * Recursively find all HTML files in a directory
 */
function findHtmlFiles(dir: string): string[] {
  const files: string[] = []
  const entries = fs.readdirSync(dir, {withFileTypes: true})

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...findHtmlFiles(fullPath))
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath)
    }
  }

  return files
}

describe('Page Structure Validation', () => {
  it('should have a built docs directory', () => {
    expect(
      fs.existsSync(distDir),
      `Build directory not found: ${distDir}\nRun "pnpm --filter docs run build" first`
    ).toBe(true)
  })

  it('should validate all page header structures', {timeout: 30000}, () => {
    if (!fs.existsSync(distDir)) {
      // Skip if dist doesn't exist (covered by previous test)
      return
    }

    const htmlFiles = findHtmlFiles(distDir)
    const errors: {file: string; error: string}[] = []

    // Files to skip validation (special pages that don't follow normal structure)
    const skipPatterns = ['404.html', 'index.html']

    for (const file of htmlFiles) {
      const relativePath = path.relative(distDir, file)
      const fileName = path.basename(file)

      // Skip special pages
      if (skipPatterns.includes(fileName)) {
        continue
      }

      const html = fs.readFileSync(file, 'utf-8')
      const result = validatePageStructure(html)

      if (!result.valid) {
        errors.push({file: relativePath, error: result.error || 'Unknown error'})
      }
    }

    // Build detailed error message if there are failures
    if (errors.length > 0) {
      const errorMessage = [
        `Found ${errors.length} page(s) with invalid header structure:`,
        '',
        ...errors.map(({file, error}) => `  ${file}\n  ${error}`),
      ].join('\n')

      throw new Error(errorMessage)
    }

    // Assert that no errors were found
    expect(errors).toHaveLength(0)
  })
})
