import {createContentLoader} from 'vitepress'

export interface ComponentData {
  name: string
  description: string
  url: string
}

declare const data: ComponentData[]
export {data}

export default createContentLoader('docs/components/*.md', {
  transform(rawData): ComponentData[] {
    return rawData
      .map((page) => ({
        name: page.frontmatter.title || extractTitleFromUrl(page.url),
        description: page.frontmatter.description || '',
        url: page.url,
      }))
      .filter((component) => component.description) // Only include components with descriptions
      .sort((a, b) => a.name.localeCompare(b.name))
  },
})

function extractTitleFromUrl(url: string): string {
  const match = url.match(/\/components\/([^/]+)$/)
  if (!match) return ''

  // Convert kebab-case to Title Case
  return match[1]
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
