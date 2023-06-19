<template>
  <component :is="computedTag" class="navbar-brand" v-bind="computedLinkProps">
    <slot />
  </component>
</template>

<script lang="ts">
import {isLink, omit, pluckProps} from '../../utils'
import {computed, defineComponent, type SlotsType} from 'vue'
import BLink, {BLINK_PROPS} from '../BLink/BLink.vue'

const linkProps = omit(BLINK_PROPS, ['event', 'routerTag'] as const)

export default defineComponent({
  slots: Object as SlotsType<{
    default?: Record<string, never>
  }>,
  components: {
    BLink,
  },
  props: {
    ...linkProps,
    tag: {type: String, default: 'div'},
  },
  setup(props) {
    const computedLink = computed<boolean>(() => isLink(props))
    const computedTag = computed<string | typeof BLink>(() =>
      computedLink.value ? BLink : props.tag
    )

    const computedLinkProps = computed(() =>
      computedLink.value ? pluckProps(props, linkProps) : {}
    )

    return {
      computedLinkProps,
      computedTag,
    }
  },
})
</script>
