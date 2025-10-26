import {createContentLoader} from 'vitepress'
import {type DocItem, transformDocData} from '../utils/dataLoaderUtils'

export type Directive = DocItem

declare const data: Directive[]
export {data}

export default createContentLoader('docs/directives/*.md', {
  transform(rawData): Directive[] {
    return transformDocData(rawData, 'directives', {
      filterByDescription: false, // Directives don't filter by description
      useTitleCase: false, // Keep original casing for directives (e.g., BTooltip)
    })
  },
})
