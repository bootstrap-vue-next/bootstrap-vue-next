import {addComponent} from '@nuxt/kit'
import {componentsWithExternalPath} from 'bootstrap-vue-next'

export default () => {
  for (const [name, path] of Object.entries(componentsWithExternalPath)) {
    addComponent({
      name,
      export: name,
      filePath: `bootstrap-vue-next${path}`,
    })
  }
}
