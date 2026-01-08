<template>
  <BAlert variant="warning" show class="deprecation-warning">
    <strong v-html="deprecatedLabel" /> {{ reasonText }}.
    <BLink :href="learnMoreUrl">Learn more about deprecation reasons</BLink
    ><template v-if="$slots.default"> – <slot /></template>
  </BAlert>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {withBase} from 'vitepress'
import {BAlert, BLink} from 'bootstrap-vue-next'
import {DEPRECATION_REASON_TEXT, DeprecationReason} from '../types/deprecation'

/**
 * Component for displaying deprecation warnings throughout the documentation.
 *
 * Displays a compact warning alert that explains why a feature is deprecated
 * and links to the full deprecation rationale in the migration guide.
 *
 * @example Basic usage
 * ```vue
 * <DeprecatedFeature reason="bootstrap-deprecated" />
 * ```
 *
 * @example With what is deprecated (singular)
 * ```vue
 * <DeprecatedFeature what="The `block` prop" reason="bootstrap-native" />
 * ```
 *
 * @example With what is deprecated (plural)
 * ```vue
 * <DeprecatedFeature
 *   what="The following properties"
 *   reason="insufficient-demand"
 *   plural
 * />
 * ```
 *
 * @example With additional context
 * ```vue
 * <DeprecatedFeature reason="insufficient-demand">
 *   <BLink href="https://github.com/.../issues/123">See issue #123</BLink>
 * </DeprecatedFeature>
 * ```
 */

interface DeprecatedFeatureProps {
  /**
   * The reason this feature is deprecated.
   * Each reason corresponds to an item in the deprecation guide.
   */
  reason: DeprecationReason
  /**
   * Optional description of what is deprecated (e.g., "The `block` prop", "The following properties").
   * If not provided, defaults to "Deprecated:"
   */
  what?: string
  /**
   * Whether the `what` description is plural (uses "are" instead of "is").
   * Only applies when `what` is provided.
   * @default false
   */
  plural?: boolean
}

const props = defineProps<DeprecatedFeatureProps>()

defineSlots<{
  /**
   * Additional context about this specific deprecation
   * (e.g., issue links, parity features, alternatives)
   */
  default?: () => unknown
}>()

/**
 * Human-readable text describing the deprecation reason
 */
const reasonText = computed(() => DEPRECATION_REASON_TEXT[props.reason])

/**
 * Label describing what is deprecated
 * Uses "is" for singular or "are" for plural based on the `plural` prop
 * Converts backtick-wrapped text to <code> elements for inline code display
 */
const deprecatedLabel = computed(() => {
  if (!props.what) return 'Deprecated:'
  const verb = props.plural ? 'are' : 'is'
  // Convert `text` to <code>text</code> for inline code rendering
  const processedWhat = props.what.replace(/`([^`]+)`/g, '<code>$1</code>')
  return `${processedWhat} ${verb} deprecated:`
})

/**
 * URL to the deprecation section in the migration guide
 * Uses withBase to ensure the correct path including the base URL
 */
const learnMoreUrl = withBase('/docs/migration-guide#deprecation')
</script>

<style scoped>
.deprecation-warning {
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.deprecation-warning :deep(a) {
  white-space: nowrap;
}
</style>
