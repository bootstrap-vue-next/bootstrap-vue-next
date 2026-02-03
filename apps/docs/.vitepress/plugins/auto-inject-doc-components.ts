import type MarkdownIt from 'markdown-it'
import {parse} from 'yaml'
import {kebabToTitleCase} from '../../src/utils/dataLoaderUtils'

/**
 * Convert kebab-case filename to Title Case.
 * Examples:
 *   button-group → Button Group
 *   useColorMode → useColorMode (composables keep camelCase)
 *   BTooltip → BTooltip (directives keep PascalCase)
 */
function filenameToTitle(filename: string, directory: string): string {
  // For composables and directives (both in subdirectories and root level), keep the original casing
  if (
    directory === 'composables' ||
    directory === 'directives' ||
    directory.endsWith('/composables') ||
    directory.endsWith('/directives')
  ) {
    return filename
  }

  // For components and configurations (and other files), convert kebab-case to Title Case using shared utility
  return kebabToTitleCase(filename)
}

/**
 * Convert kebab-case filename to camelCase for data file imports.
 * Examples:
 *   button-group → buttonGroup
 *   form-input → formInput
 *   badge → badge
 */
function filenameToCamelCase(filename: string): string {
  return filename.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}

/**
 * Auto-inject page header and footer for component/composable/directive documentation files.
 *
 * This plugin automatically adds:
 * 1. An h1 heading with the filename converted to proper case (for proper document structure)
 * 2. A <PageHeader /> component (for description and source links)
 * 3. For components only: A <ComponentReference /> component with data import (before any <style> section)
 *
 * Only applies to files in /components/, /composables/, /directives/, or /configurations/ directories
 * that have a `description` in their frontmatter.
 */
export function autoInjectDocComponents(md: MarkdownIt) {
  const defaultRender = md.render.bind(md)

  md.render = function (
    src: string,
    env: {
      relativePath?: string
      path?: string
      frontmatter?: {description?: string; title?: string}
    }
  ) {
    // Check if this is a documentation file that should get auto-injection
    const rawPath = env?.relativePath || env?.path || ''
    // Normalize path separators for cross-platform compatibility
    const path = rawPath.replace(/\\/g, '/')
    // Match docs/*.md files OR root-level .md files (with or without src/ prefix, with or without leading slash)
    const docsMatch = path.match(/(?:src\/)?docs\/(.+)\.md$/)
    const rootMatch = path.match(/(?:src\/)?([^\/]+)\.md$/)

    if (!docsMatch && !rootMatch) {
      return defaultRender(src, env)
    }

    // Extract the filename and directory from the path
    let fullPath: string
    let directory: string
    let filename: string

    if (docsMatch) {
      fullPath = docsMatch[1]
      const lastSlashIndex = fullPath.lastIndexOf('/')
      directory = lastSlashIndex >= 0 ? fullPath.substring(0, lastSlashIndex) : ''
      filename = lastSlashIndex >= 0 ? fullPath.substring(lastSlashIndex + 1) : fullPath
    } else if (rootMatch) {
      // Root-level file
      fullPath = rootMatch[1]
      directory = ''
      filename = fullPath
    } else {
      // This should never happen due to the check on line 68
      return defaultRender(src, env)
    }

    // Extract frontmatter using simple regex and parse with YAML
    const trimmedSrc = src.trim()
    const frontmatterMatch = trimmedSrc.match(/^---\r?\n([\s\S]*?)\r?\n---/)

    if (!frontmatterMatch) {
      return defaultRender(src, env)
    }

    // Parse frontmatter to check for description
    let frontmatter: {description?: string; title?: string}
    try {
      frontmatter = parse(frontmatterMatch[1])
    } catch {
      return defaultRender(src, env)
    }

    if (!frontmatter?.description) {
      return defaultRender(src, env)
    }

    // Use frontmatter title if available, otherwise generate from filename
    const title = frontmatter.title || filenameToTitle(filename, directory)

    // Build the expected header pattern
    const expectedHeader = `# ${title}\n\n<PageHeader />`

    // Get the content after frontmatter
    let afterFrontmatter = trimmedSrc.slice(frontmatterMatch[0].length).trim()

    // Inject header if it doesn't already have it
    if (!afterFrontmatter.startsWith(`# ${title}`)) {
      afterFrontmatter = `${expectedHeader}\n\n${afterFrontmatter}`
    }

    // For components, inject ComponentReference footer if it doesn't already exist
    if (directory === 'components') {
      const componentReferencePattern = /<ComponentReference\s+:data=["']data["']\s*\/?>/
      const scriptSetupPattern = /<script setup lang=["']ts["']>/
      const dataImportPattern =
        /import\s*\{\s*data\s*\}\s*from\s*['"]\.\.\/\.\.\/data\/components\//

      // Check if ComponentReference is missing
      const needsComponentReference = !componentReferencePattern.test(afterFrontmatter)

      // Check if script setup exists and if data import is missing
      const hasScriptSetup = scriptSetupPattern.test(afterFrontmatter)
      const hasDataImport = dataImportPattern.test(afterFrontmatter)

      if (needsComponentReference) {
        const dataFilename = filenameToCamelCase(filename)

        // Inject ComponentReference
        const componentReferenceBlock = `\n\n<ComponentReference :data="data" />`

        // Check if there's a <style> section to insert before
        const firstStyleOpen = afterFrontmatter.search(/<style[^>]*>/)

        if (firstStyleOpen !== -1) {
          afterFrontmatter = `${afterFrontmatter.slice(0, firstStyleOpen)}${componentReferenceBlock}\n${afterFrontmatter.slice(firstStyleOpen)}`
        } else {
          afterFrontmatter = afterFrontmatter + componentReferenceBlock
        }

        // Handle script block
        if (!hasScriptSetup) {
          // No script setup exists, add full script block
          const scriptBlock = `\n\n<script setup lang="ts">\nimport {data} from '../../data/components/${dataFilename}.data'\n</script>`
          afterFrontmatter = afterFrontmatter + scriptBlock
        } else if (!hasDataImport) {
          // Script setup exists but data import is missing, inject the import
          const dataImport = `import {data} from '../../data/components/${dataFilename}.data'\n`
          afterFrontmatter = afterFrontmatter.replace(
            scriptSetupPattern,
            `<script setup lang="ts">\n${dataImport}`
          )
        }
      }
    }

    // Combine frontmatter with processed content
    src = `${frontmatterMatch[0]}\n\n${afterFrontmatter}`

    return defaultRender(src, env)
  }
}
