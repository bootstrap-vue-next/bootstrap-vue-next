import {inject} from 'vue'
import {breadcrumbPluginKey} from '../utils/keys'

export const useBreadcrumb = () => ({...inject(breadcrumbPluginKey)})
