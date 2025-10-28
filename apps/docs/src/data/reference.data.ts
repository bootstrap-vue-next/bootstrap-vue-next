import {createContentLoader} from 'vitepress'
import {type DocItem, transformDocData} from '../utils/dataLoaderUtils'

export type ReferenceData = DocItem

declare const data: ReferenceData[]
export {data}

export default createContentLoader('docs/reference/*.md', {
  transform(rawData): ReferenceData[] {
    return transformDocData(rawData, 'reference', {
      filterByDescription: true,
      useTitleCase: true, // Use title case for reference docs (e.g., Color Variants)
    })
  },
})
