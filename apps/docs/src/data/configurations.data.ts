import {createContentLoader} from 'vitepress'
import {type DocItem, transformDocData} from '../utils/dataLoaderUtils'

export type ConfigurationData = DocItem

declare const data: ConfigurationData[]
export {data}

export default createContentLoader('docs/configurations/*.md', {
  transform(rawData): ConfigurationData[] {
    return transformDocData(rawData, 'configurations', {
      filterByDescription: true,
      useTitleCase: true,
    })
  },
})
