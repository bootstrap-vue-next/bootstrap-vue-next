import {addComponent} from '@nuxt/kit'
import {Components} from 'bootstrap-vue-3'

export default () => {
  Object.keys(Components).forEach((key) => {
    addComponent({
      name: key,
      export: key,
      filePath: 'bootstrap-vue-3',
    })
  })
}
