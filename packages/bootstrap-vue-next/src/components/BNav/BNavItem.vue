<template>
  <li class="nav-item">
    <b-link
      class="nav-link"
      v-bind="$props"
      active-class="active"
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
import {defineComponent, type SlotsType} from 'vue'

export default defineComponent({
  slots: Object as SlotsType<{
    default?: Record<string, never>
  }>,
  components: {BLink},
  props: {
    ...omit(BLINK_PROPS, ['event', 'routerTag'] as const),
  },
  setup(props) {
    const disabledBoolean = useBooleanish(() => props.disabled)

    return {disabledBoolean}
  },
})
</script>
