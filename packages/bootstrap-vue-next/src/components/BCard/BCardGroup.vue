<template>
  <component :is="props.tag" class="card-group">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import type {BCardGroupProps} from '../../types/ComponentProps'
import type {BCardGroupSlots} from '../../types'

const _props = withDefaults(defineProps<BCardGroupProps>(), {
  tag: 'div',
})
const props = useDefaults(_props, 'BCardGroup')
defineSlots<BCardGroupSlots>()
</script>
