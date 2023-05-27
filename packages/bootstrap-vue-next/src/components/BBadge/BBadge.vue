<template>
  <component :is="computedTag" class="badge" :class="computedClasses" v-bind="computedLinkProps">
    <slot />
  </component>
</template>

<script lang="ts">
import {isLink, omit, pluckProps} from '../../utils'
import {useBooleanish} from '../../composables'
import {computed, defineComponent, type PropType, type SlotsType} from 'vue'
import type {Booleanish, ColorVariant} from '../../types'
import BLink, {BLINK_PROPS} from '../BLink/BLink.vue'

const linkProps = omit(BLINK_PROPS, ['event', 'routerTag'] as const)

export default defineComponent({
  slots: Object as SlotsType<{
    default?: Record<string, never>
  }>,
  components: {BLink},
  props: {
    ...linkProps,
    pill: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    tag: {type: String, default: 'span'},
    textIndicator: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    dotIndicator: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    variant: {type: String as PropType<ColorVariant | null>, default: 'secondary'},
  },
  setup(props) {
    const pillBoolean = useBooleanish(() => props.pill)
    const textIndicatorBoolean = useBooleanish(() => props.textIndicator)
    const dotIndicatorBoolean = useBooleanish(() => props.dotIndicator)
    const activeBoolean = useBooleanish(() => props.active)
    const disabledBoolean = useBooleanish(() => props.disabled)

    const computedLink = computed<boolean>(() => isLink(props))

    const computedTag = computed<string | typeof BLink>(() =>
      computedLink.value ? BLink : props.tag
    )

    const computedClasses = computed(() => ({
      [`bg-${props.variant}`]: props.variant !== null,
      'active': activeBoolean.value,
      'disabled': disabledBoolean.value,
      'text-dark': props.variant !== null && ['warning', 'info', 'light'].includes(props.variant),
      'rounded-pill': pillBoolean.value,
      'position-absolute top-0 start-100 translate-middle':
        textIndicatorBoolean.value || dotIndicatorBoolean.value,
      'p-2 border border-light rounded-circle': dotIndicatorBoolean.value,
      'text-decoration-none': computedLink.value,
    }))

    const computedLinkProps = computed(() =>
      computedLink.value ? pluckProps(props, linkProps) : {}
    )

    return {
      computedClasses,
      computedLinkProps,
      computedTag,
    }
  },
})
</script>
