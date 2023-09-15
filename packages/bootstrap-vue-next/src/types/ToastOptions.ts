import type {ContainerPosition} from './ContainerPosition'
import type {BToastProps} from './ComponentProps'

export type Toast = Omit<BToastProps, 'modelValue'> & {
  /**
   * Position
   * @default 'top-right'
   */
  pos?: ContainerPosition
  /**
   * A proxy for the modelValue, essentially, you set this once, and it mimics the modelValue.
   *
   * Falsy values default to 5000
   *
   * @default 5000
   */
  value?: boolean | number // show or hide
}
