<template>
  <component :is="computedTag" class="list-group" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed, provide, toRef} from 'vue'
import {listGroupInjectionKey} from '../../utils'
import type {Breakpoint} from '../../types'

const props = withDefaults(
  defineProps<{
    flush?: boolean
    horizontal?: boolean | Breakpoint
    numbered?: boolean
    tag?: string
  }>(),
  {
    flush: false,
    horizontal: false,
    numbered: false,
    tag: 'div',
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedHorizontal = computed(() => props.horizontal)

const computedClasses = computed(() => {
  const horizontal = props.flush ? false : computedHorizontal.value
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
