import {inject} from 'vue'
import {breadcrumbPluginKey} from '../utils'

export default () => ({...inject(breadcrumbPluginKey)})
