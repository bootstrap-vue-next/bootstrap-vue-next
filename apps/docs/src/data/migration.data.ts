import {createContentLoader} from 'vitepress'

export interface MigrationDataItem {
  id: string
  title: string
  category: 'patterns' | 'props' | 'components' | 'directives'
  url: string
}

declare const data: MigrationDataItem[]
export {data}

const categoryOrder: Record<MigrationDataItem['category'], number> = {
  patterns: 0,
  props: 1,
  components: 2,
  directives: 3,
}

export default createContentLoader('docs/migration-data/**/*.md', {
  transform(rawData): MigrationDataItem[] {
    return rawData
      .map((page) => {
        const id = page.frontmatter.id
        const title = page.frontmatter.title
        const category = page.frontmatter.category

        if (
          typeof id !== 'string' ||
          typeof title !== 'string' ||
          (category !== 'patterns' &&
            category !== 'props' &&
            category !== 'components' &&
            category !== 'directives')
        ) {
          return null
        }

        return {
          id,
          title,
          category,
          url: page.url,
        } satisfies MigrationDataItem
      })
      .filter((item): item is MigrationDataItem => item !== null)
      .sort((a, b) => {
        const categoryDiff = categoryOrder[a.category] - categoryOrder[b.category]
        if (categoryDiff !== 0) return categoryDiff
        if (a.id === 'migration-overview') return -1
        if (b.id === 'migration-overview') return 1
        return a.title.localeCompare(b.title)
      })
  },
})
