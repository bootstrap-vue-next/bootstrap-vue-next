<template>
  <component :is="computedTag" class="navbar-brand" v-bind="computedLinkProps">
    <slot />
  </component>
</template>

<script lang="ts">
import {isLink, omit, pluckProps} from '../../utils'
import {computed, defineComponent} from 'vue'
import BLink, {BLINK_PROPS} from '../BLink/BLink.vue'

const linkProps = omit(BLINK_PROPS, ['event', 'routerTag'] as const)

export default defineComponent({
  components: {
    BLink,
  },
  props: {
    tag: {type: String, default: 'div'},
    ...linkProps,
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
