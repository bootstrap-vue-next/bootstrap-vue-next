import {createContentLoader} from 'vitepress'

interface Directive {
  name: string
  description: string
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
        return {
          name,
          description,
          url: page.url,
        }
      })
      .sort((a, b) => a.name.localeCompare(b.name))
  },
})
