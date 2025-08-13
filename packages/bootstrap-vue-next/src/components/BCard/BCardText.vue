<template>
  <component :is="props.tag" class="card-text">
    <slot>
      {{ props.text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import type {BCardTextSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import type {BCardTextProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<BCardTextProps>(), {
  tag: 'p',
  text: undefined,
})
const props = useDefaults(_props, 'BCardText')
defineSlots<BCardTextSlots>()
</script>
