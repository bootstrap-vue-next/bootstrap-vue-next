import type {TeleportProps} from 'vue'

export type Numberish = string | number

export type TeleporterProps = {
  teleportDisabled?: TeleportProps['disabled']
  teleportTo?: TeleportProps['to']
}
