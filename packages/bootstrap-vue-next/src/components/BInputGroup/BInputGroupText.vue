<template>
  <component :is="props.tag" class="input-group-text">
    <slot>
      {{ props.text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import type {BInputGroupTextSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import type {BInputGroupTextProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<BInputGroupTextProps>(), {
  tag: 'div',
  text: undefined,
})
const props = useDefaults(_props, 'BInputGroupText')
defineSlots<BInputGroupTextSlots>()
</script>
