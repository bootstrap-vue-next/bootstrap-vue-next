import {inject} from 'vue'
import {popoverPluginKey} from '../utils/keys'

export const usePopover = () => ({...inject(popoverPluginKey)})
