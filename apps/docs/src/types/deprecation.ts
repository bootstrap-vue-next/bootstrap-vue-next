/**
 * Reasons why a feature from BootstrapVue has been deprecated in BootstrapVueNext
 */
export enum DeprecationReason {
  /**
   * Feature has been deprecated by Bootstrap itself
   * Maps to reason 1a in the deprecation guide
   */
  BOOTSTRAP_DEPRECATED = 'bootstrap-deprecated',

  /**
   * Vue 3 or Bootstrap 5 changes made this feature less useful or impractical to implement
   * Maps to reason 1b in the deprecation guide
   */
  VUE3_BOOTSTRAP5_CHANGES = 'vue3-bootstrap5-changes',

  /**
   * The functionality can be easily achieved using Bootstrap classes natively
   * Maps to reason 1c in the deprecation guide
   */
  BOOTSTRAP_NATIVE = 'bootstrap-native',

  /**
   * A more modern alternative exists that solves the same problem
   * Maps to reason 1d in the deprecation guide
   */
  MODERN_ALTERNATIVE = 'modern-alternative',

  /**
   * There hasn't been enough demand to implement this feature for the initial release
   * Maps to reason 2 in the deprecation guide
   */
  INSUFFICIENT_DEMAND = 'insufficient-demand',
}

/**
 * Human-readable descriptions for each deprecation reason
 */
export const DEPRECATION_REASON_TEXT: Record<DeprecationReason, string> = {
  [DeprecationReason.BOOTSTRAP_DEPRECATED]: 'deprecated by Bootstrap',
  [DeprecationReason.VUE3_BOOTSTRAP5_CHANGES]:
    'Vue 3 or Bootstrap 5 changes made this less relevant',
  [DeprecationReason.BOOTSTRAP_NATIVE]: 'achievable using Bootstrap classes natively',
  [DeprecationReason.MODERN_ALTERNATIVE]: 'a modern alternative exists',
  [DeprecationReason.INSUFFICIENT_DEMAND]: 'insufficient demand for initial release',
}
