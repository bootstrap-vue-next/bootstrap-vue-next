import {inject} from 'vue'
import {toastPluginKey} from '../utils/keys'

export const useToast = () => ({...inject(toastPluginKey)})
