import {inject} from 'vue'
import {tooltipPluginKey} from '../../utils/keys'

export const useTooltip = () => ({...inject(tooltipPluginKey)})
