import {createContentLoader} from 'vitepress'
import {type DocItem, transformDocData} from '../utils/dataLoaderUtils'

export type ComponentData = DocItem

declare const data: ComponentData[]
export {data}

export default createContentLoader('docs/components/*.md', {
  transform(rawData): ComponentData[] {
    return transformDocData(rawData, 'components', {
      filterByDescription: true,
      useTitleCase: true,
    })
  },
})
