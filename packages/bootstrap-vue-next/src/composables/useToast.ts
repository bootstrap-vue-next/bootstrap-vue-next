import {inject} from 'vue'
import {toastPluginKey} from '../utils'

export default () => ({...inject(toastPluginKey)})
