import type MarkdownIt from 'markdown-it'
import {parse} from 'yaml'

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

  // For components, convert kebab-case to Title Case
  return filename
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Auto-inject page header for component/composable/directive documentation files.
 *
 * This plugin automatically adds:
 * 1. An h1 heading with the filename converted to proper case (for proper document structure)
 * 2. A <PageHeader /> component (for description and source links)
 *
 * Only applies to files in /components/, /composables/, or /directives/ directories
 * that have a `description` in their frontmatter.
 */
export function autoInjectHeader(md: MarkdownIt) {
  const defaultRender = md.render.bind(md)

  md.render = function (
    src: string,
    env: {relativePath?: string; path?: string; frontmatter?: {description?: string}}
  ) {
    // Check if this is a documentation file that should get auto-injection
    const path = env?.relativePath || env?.path || ''
    const match = path.match(/\/(components|composables|directives)\/([^/]+)\.md$/)

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
    const afterFrontmatter = trimmedSrc.slice(frontmatterMatch[0].length).trim()

    // Only inject if it doesn't already have the pattern
    if (!afterFrontmatter.startsWith(`# ${title}`)) {
      // Inject the header and PageHeader component after frontmatter
      src = `${frontmatterMatch[0]}\n\n${expectedHeader}\n\n${afterFrontmatter}`
    }

    return defaultRender(src, env)
  }
}
