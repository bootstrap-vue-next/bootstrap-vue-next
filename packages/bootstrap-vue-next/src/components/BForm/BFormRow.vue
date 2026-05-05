<template>
  <component :is="props.tag" class="row d-flex flex-wrap">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {BFormRowProps, BFormRowSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'

const _props = withDefaults(defineProps<BFormRowProps>(), {
  tag: 'div',
})
const props = useDefaults(_props, 'BFormRow')
defineSlots<BFormRowSlots>()
</script>
