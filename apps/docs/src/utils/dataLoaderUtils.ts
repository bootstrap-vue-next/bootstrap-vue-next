/**
 * Shared utilities for VitePress data loaders
 */

export interface DocItem {
  name: string
  description: string
  url: string
}

/**
 * Extract the filename from a VitePress URL
 * @param url - The page URL (e.g., "/docs/components/button.html")
 * @returns The filename without extension (e.g., "button")
 */
export function extractFilenameFromUrl(url: string): string {
  return url.split('/').pop()?.replace('.html', '') || ''
}

/**
 * Convert kebab-case to Title Case
 * @param str - The kebab-case string (e.g., "button-group")
 * @returns Title Case string (e.g., "Button Group")
 */
export function kebabToTitleCase(str: string): string {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Extract title from URL using kebab-case to Title Case conversion
 * @param url - The page URL
 * @param directory - The directory name (e.g., "components", "composables")
 * @returns Title Case string
 */
export function extractTitleFromUrl(url: string, directory: string): string {
  const regex = new RegExp(`\\/${directory}\\/([^/]+)\\.html$`)
  const match = url.match(regex)
  if (!match) return ''

  return kebabToTitleCase(match[1] ?? '')
}

/**
 * Transform raw VitePress page data into a sorted list of doc items
 * @param rawData - Raw page data from VitePress content loader
 * @param directory - The directory name (e.g., "components", "composables")
 * @param options - Optional configuration
 * @returns Sorted array of doc items
 */
export function transformDocData(
  rawData: Array<{url: string; frontmatter: Record<string, unknown>}>,
  directory: string,
  options: {
    filterByDescription?: boolean
    useTitleCase?: boolean
  } = {}
): DocItem[] {
  const {filterByDescription = true, useTitleCase = true} = options

  let items = rawData.map((page) => {
    let name: string
    if (useTitleCase) {
      name = (page.frontmatter.title as string) || extractTitleFromUrl(page.url, directory)
    } else {
      // For composables/directives that should keep their original casing
      name = extractFilenameFromUrl(page.url)
    }

    return {
      name,
      description: (page.frontmatter.description as string) || '',
      url: page.url,
    }
  })

  if (filterByDescription) {
    items = items.filter((item) => item.description)
  }

  return items.sort((a, b) => a.name.localeCompare(b.name))
}
