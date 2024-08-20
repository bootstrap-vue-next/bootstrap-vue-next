import type {TeleportProps} from 'vue'
import type {ColorVariant} from './ColorTypes'

export type Numberish = string | number

export type TeleporterProps = {
  teleportDisabled?: TeleportProps['disabled']
  teleportTo?: TeleportProps['to']
}

export interface LinkUnderlineProps {
  underlineOffset?: 1 | 2 | 3 | '1' | '2' | '3'
  underlineOffsetHover?: 1 | 2 | 3 | '1' | '2' | '3'
  underlineOpacity?: 0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'
  underlineOpacityHover?: 0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'
  underlineVariant?: ColorVariant | null
}

export interface LinkOpacityProps {
  opacity?: 10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'
  opacityHover?: 10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'
}

export interface LinkIconProps {
  icon?: boolean
}

export interface LinkVariantProps {
  variant?: ColorVariant | null
}
