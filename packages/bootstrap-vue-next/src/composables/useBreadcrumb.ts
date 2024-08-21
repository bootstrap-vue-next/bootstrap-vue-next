import {inject} from 'vue'
import {breadcrumbPluginKey} from '../utils'

export const useBreadcrumb = () => ({...inject(breadcrumbPluginKey)})
