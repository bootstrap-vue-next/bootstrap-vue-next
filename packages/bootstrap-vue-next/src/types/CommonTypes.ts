import type {TeleportProps} from 'vue'
import type {ColorVariant} from './ColorTypes'

export type Numberish = string | number

export type TeleporterProps = {
  teleportDisabled?: TeleportProps['disabled']
  teleportTo?: TeleportProps['to']
}
