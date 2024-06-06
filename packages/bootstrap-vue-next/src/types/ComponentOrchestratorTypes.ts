import type {BModalProps, BToastProps, ContainerPosition} from '.'

export type OrchestratedToast = Omit<BToastProps, 'modelValue'> & {
  /**
   * Position
   * @default 'top-end'
   */
  pos?: ContainerPosition
  /**
   * Sets whether or not the toast should be appended to the container
   * @default undefined Implicitly defualts to the BToastOrchestrator's appendToast value
   */
  appendToast?: boolean
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
