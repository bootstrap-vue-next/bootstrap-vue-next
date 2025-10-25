import {createContentLoader} from 'vitepress'

export interface ComposableData {
  name: string
  description: string
  url: string
}

declare const data: ComposableData[]
export {data}

export default createContentLoader('docs/composables/*.md', {
  transform(rawData): ComposableData[] {
    return rawData
      .map((page) => {
        const name = page.url.split('/').pop()?.replace('.html', '') || ''
        const description = (page.frontmatter.description as string) || ''

        return {
          name,
          description,
          url: page.url,
        }
      })
      .filter((item) => item.description) // Only include composables with descriptions
      .sort((a, b) => a.name.localeCompare(b.name))
  },
})
