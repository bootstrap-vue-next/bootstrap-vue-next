import {inject} from 'vue'
import {tooltipPluginKey} from '../../utils/keys'

export const useTooltipController = () => ({...inject(tooltipPluginKey)})
