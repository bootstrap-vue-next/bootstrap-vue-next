<template>
  <component :is="props.tag" class="card-text">
    <slot>
      {{ props.text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import type {BCardTextProps, BCardTextSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'

const _props = withDefaults(defineProps<BCardTextProps>(), {
  tag: 'p',
  text: undefined,
})
const props = useDefaults(_props, 'BCardText')
defineSlots<BCardTextSlots>()
</script>
