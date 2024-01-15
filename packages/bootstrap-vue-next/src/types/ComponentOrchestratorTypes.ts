import type {BModalProps, BToastProps, ContainerPosition} from '.'

export type OrchestratedToast = Omit<BToastProps, 'modelValue'> & {
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

export type OrchestratedModal = Omit<BModalProps, 'modelValue'>
