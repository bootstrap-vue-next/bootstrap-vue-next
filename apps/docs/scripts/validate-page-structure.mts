#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'
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
function validatePageStructure(html: string, filePath: string): {valid: boolean; error?: string} {
  const window = new Window()
  window.document.write(html)
  const document = window.document

  // Use the same query selector as the runtime Layout.vue
  // Note: We query from .doc-content and then filter out demo content
  const docContent = document.querySelector('.doc-content')
  if (!docContent) {
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
    return {
      valid: false,
      error: `Expected exactly 1 root header, found ${root.length}. Headers: ${JSON.stringify(
        headers.map((h) => ({tag: h.tag, level: h.level, text: h.text.substring(0, 50)})),
        null,
        2
      )}`,
    }
  }

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

/**
 * Main validation function
 */
function main() {
  if (!fs.existsSync(distDir)) {
    console.error(`❌ Build directory not found: ${distDir}`)
    console.error('   Run "pnpm --filter docs run build" first')
    process.exit(1)
  }

  console.log('🔍 Validating page header structure...')
  console.log(`   Scanning: ${distDir}\n`)

  const htmlFiles = findHtmlFiles(distDir)
  const errors: {file: string; error: string}[] = []
  const skipped: string[] = []

  // Files to skip validation (special pages that don't follow normal structure)
  const skipPatterns = ['404.html', 'index.html']

  for (const file of htmlFiles) {
    const relativePath = path.relative(distDir, file)
    const fileName = path.basename(file)

    // Skip special pages
    if (skipPatterns.includes(fileName)) {
      skipped.push(relativePath)
      continue
    }

    const html = fs.readFileSync(file, 'utf-8')
    const result = validatePageStructure(html, relativePath)

    if (!result.valid) {
      errors.push({file: relativePath, error: result.error || 'Unknown error'})
    }
  }

  console.log(`   Checked ${htmlFiles.length - skipped.length} HTML files`)
  if (skipped.length > 0) {
    console.log(`   Skipped ${skipped.length} special page(s)`)
  }

  if (errors.length > 0) {
    console.error(`\n❌ Found ${errors.length} page(s) with invalid header structure:\n`)
    for (const {file, error} of errors) {
      console.error(`   ${file}`)
      console.error(`   ${error}\n`)
    }
    process.exit(1)
  }

  console.log('\n✅ All pages have valid header structure!')
  process.exit(0)
}

main()
