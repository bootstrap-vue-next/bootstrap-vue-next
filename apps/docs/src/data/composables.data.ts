import {createContentLoader} from 'vitepress'
import {type DocItem, transformDocData} from '../utils/dataLoaderUtils'

export type ComposableData = DocItem

declare const data: ComposableData[]
export {data}

export default createContentLoader('docs/composables/*.md', {
  transform(rawData): ComposableData[] {
    return transformDocData(rawData, 'composables', {
      filterByDescription: true,
      useTitleCase: false, // Keep original casing for composables (e.g., useColorMode)
    })
  },
})
