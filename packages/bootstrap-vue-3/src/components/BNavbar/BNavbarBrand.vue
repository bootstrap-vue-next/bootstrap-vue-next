<template>
  <component :is="computedTag" class="navbar-brand" v-bind="props">
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
    const link = computed<boolean>(() => isLink(props))
    const computedTag = computed<string | typeof BLink>(() => (link.value ? BLink : props.tag))

    return {
      props: link.value ? pluckProps(props, linkProps) : {},
      computedTag,
    }
  },
})
</script>
