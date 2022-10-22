import type {Animation, ColorVariant, IconSize} from '../..'

// Props
export interface Props {
  animation?: Animation
  flipH?: boolean
  flipV?: boolean
  fontScale?: string | number
  icon: string
  rotate?: string | number
  scale?: string | number
  shiftH?: string | number
  shiftV?: string | number
  size?: IconSize
  stacked?: boolean
  title?: string
  variant?: ColorVariant
}
