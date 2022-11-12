<template>
  <component :is="computedTag" class="badge" :class="computedClasses" v-bind="computedLinkProps">
    <slot />
  </component>
</template>

<script lang="ts">
import {isLink, omit, pluckProps, textVariantDarkTypes} from '../../utils'
import {useBooleanish} from '../../composables'
import {computed, defineComponent, PropType, toRef} from 'vue'
import type {BgColorVariant, Booleanish} from '../../types'
import BLink, {BLINK_PROPS} from '../BLink/BLink.vue'

const linkProps = omit(BLINK_PROPS, ['event', 'routerTag'] as const)

export default defineComponent({
  components: {BLink},
  props: {
    pill: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    tag: {type: String, default: 'span'},
    variant: {type: String as PropType<BgColorVariant | undefined>, default: 'secondary'},
    textIndicator: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    dotIndicator: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    ...linkProps,
  },
  setup(props) {
    const pillBoolean = useBooleanish(toRef(props, 'pill'))
    const textIndicatorBoolean = useBooleanish(toRef(props, 'textIndicator'))
    const dotIndicatorBoolean = useBooleanish(toRef(props, 'dotIndicator'))
    const activeBoolean = useBooleanish(toRef(props, 'active'))
    const disabledBoolean = useBooleanish(toRef(props, 'disabled'))

    const computedLink = computed<boolean>(() => isLink(props))

    const computedTag = computed<string | typeof BLink>(() =>
      computedLink.value ? BLink : props.tag
    )

    const computedClasses = computed(() => [
      [`bg-${props.variant}`],
      {
        'active': activeBoolean.value,
        'disabled': disabledBoolean.value,
        'text-dark': props.variant && textVariantDarkTypes.includes(props.variant),
        'rounded-pill': pillBoolean.value,
        'position-absolute top-0 start-100 translate-middle':
          textIndicatorBoolean.value || dotIndicatorBoolean.value,
        'p-2 border border-light rounded-circle': dotIndicatorBoolean.value,
        'text-decoration-none': computedLink.value,
      },
    ])

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
