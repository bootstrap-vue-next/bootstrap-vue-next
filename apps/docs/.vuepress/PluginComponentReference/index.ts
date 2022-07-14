import {fs} from '@vuepress/utils'
import type {Page, Plugin, App, PageData} from '@vuepress/core'
import {path} from '@vuepress/utils'

export interface ComponentReferenceOptions {
  baseDir: string
}

function resolvePageComponentReferencePath(baseDir: string, page, app: App): {filePath: string} {
  const filePath = path.resolve(app.dir.source(), baseDir, path.addExt(page.slug, '.json'))
  if (!filePath) {
    return {
      filePath: null,
    }
  }

  return {
    filePath: filePath,
  }
}

export const componentReference: Plugin<ComponentReferenceOptions> = ({
  baseDir = 'component-references',
}) => ({
  name: 'plugin-object',
  clientConfigFile: path.resolve(__dirname, './client.ts'),
  extendsPage(page, app: App) {
    const {filePath} = resolvePageComponentReferencePath(baseDir, page, app)
    let componentReference = null
    if (fs.existsSync(filePath)) {
      componentReference = require(filePath)
    }
    page.data.componentReference = componentReference
  },
})
