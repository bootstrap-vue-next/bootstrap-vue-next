<template>
  <component :is="computedTag" class="list-group" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed, provide, toRef} from 'vue'
import {listGroupInjectionKey} from '../../utils'
import type {BListGroupProps} from '../../types'
import {useDefaults} from '../../composables'

const _props = withDefaults(defineProps<BListGroupProps>(), {
  flush: false,
  horizontal: false,
  numbered: false,
  tag: 'div',
})
const props = useDefaults(_props, 'BListGroup')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => {
  const horizontal = props.flush ? false : props.horizontal
  return {
    'list-group-flush': props.flush,
    'list-group-horizontal': horizontal === true,
    [`list-group-horizontal-${horizontal}`]: typeof horizontal === 'string',
    'list-group-numbered': props.numbered,
  }
})
const computedTag = toRef(() => (props.numbered === true ? 'ol' : props.tag))

provide(listGroupInjectionKey, {
  numbered: toRef(() => props.numbered),
})
</script>
