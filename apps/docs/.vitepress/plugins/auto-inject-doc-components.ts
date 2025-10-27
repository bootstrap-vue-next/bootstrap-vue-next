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
  // For composables and directives, keep the original casing
  if (directory === 'composables' || directory === 'directives') {
    return filename
  }

  // For components and configurations, convert kebab-case to Title Case using shared utility
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
    env: {relativePath?: string; path?: string; frontmatter?: {description?: string}}
  ) {
    // Check if this is a documentation file that should get auto-injection
    const rawPath = env?.relativePath || env?.path || ''
    // Normalize path separators for cross-platform compatibility
    const path = rawPath.replace(/\\/g, '/')
    const match = path.match(/\/(components|composables|directives|configurations)\/([^/]+)\.md$/)

    if (!match) {
      return defaultRender(src, env)
    }

    // Extract frontmatter using simple regex and parse with YAML
    const trimmedSrc = src.trim()
    const frontmatterMatch = trimmedSrc.match(/^---\r?\n([\s\S]*?)\r?\n---/)

    if (!frontmatterMatch) {
      return defaultRender(src, env)
    }

    // Parse frontmatter to check for description
    let frontmatter: {description?: string}
    try {
      frontmatter = parse(frontmatterMatch[1])
    } catch {
      return defaultRender(src, env)
    }

    if (!frontmatter?.description) {
      return defaultRender(src, env)
    }

    const [, directory, filename] = match
    const title = filenameToTitle(filename, directory)

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
      const componentReferencePattern = /<ComponentReference :data="data" \/>/
      const scriptPattern =
        /<script setup lang="ts">\s*import\s*\{\s*data\s*\}\s*from\s*'\.\.\/\.\.\/data\/components\//

      // Only inject if both ComponentReference and script are missing
      if (
        !componentReferencePattern.test(afterFrontmatter) &&
        !scriptPattern.test(afterFrontmatter)
      ) {
        const dataFilename = filenameToCamelCase(filename)
        const footer = `\n\n<ComponentReference :data="data" />\n\n<script setup lang="ts">\nimport {data} from '../../data/components/${dataFilename}.data'\n</script>`

        // Check if there's a <style> section anywhere in the content
        const firstStyleOpen = afterFrontmatter.search(/<style[^>]*>/)

        if (firstStyleOpen !== -1) {
          // Insert footer before the first <style> section
          afterFrontmatter = `${afterFrontmatter.slice(0, firstStyleOpen)}${footer}\n${afterFrontmatter.slice(firstStyleOpen)}`
        } else {
          // No <style> section, append footer at the end
          afterFrontmatter = afterFrontmatter + footer
        }
      }
    }

    // Combine frontmatter with processed content
    src = `${frontmatterMatch[0]}\n\n${afterFrontmatter}`

    return defaultRender(src, env)
  }
}
