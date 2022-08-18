<template>
  <li class="nav-item">
    <b-link
      class="nav-link"
      v-bind="props"
      :tabindex="disabledBoolean ? -1 : undefined"
      :aria-disabled="disabledBoolean ? true : undefined"
    >
      <slot />
    </b-link>
  </li>
</template>

<script lang="ts">
import BLink, {BLINK_PROPS} from '../BLink/BLink.vue'
import {omit} from '../../utils'
import {useBooleanish} from '../../composables'
import {defineComponent, toRef} from 'vue'

const linkProps = omit(BLINK_PROPS, ['event', 'routerTag'])

export default defineComponent({
  components: {BLink},
  props: {
    ...linkProps,
  },
  setup(props) {
    const disabledBoolean = useBooleanish(toRef(props, 'disabled'))

    return {disabledBoolean, props}
  },
})
</script>
