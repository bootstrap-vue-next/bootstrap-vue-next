import {createContentLoader} from 'vitepress'

interface Directive {
  name: string
  description: string
  path: string
  url: string
}

declare const data: Directive[]
export {data}

export default createContentLoader('docs/directives/*.md', {
  transform(rawData): Directive[] {
    return rawData
      .map((page) => {
        const name = page.url.split('/').pop()?.replace('.html', '') || ''
        const description = (page.frontmatter.description as string) || ''
        const path = (page.frontmatter.path as string) || ''
        return {
          name,
          description,
          path,
          url: page.url,
        }
      })
      .sort((a, b) => a.name.localeCompare(b.name))
  },
})
