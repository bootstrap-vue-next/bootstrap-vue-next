import {addComponent} from '@nuxt/kit'
import {Components} from 'bootstrap-vue-next'

export default () => {
  Object.keys(Components).forEach((name) => {
    addComponent({
      name,
      export: name,
      filePath: 'bootstrap-vue-next',
    })
  })
}
