<template>
  <component :is="computedTag" class="list-group" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed, provide, toRef} from 'vue'
import {listGroupInjectionKey} from '../../utils'
import type {Booleanish, Breakpoint} from '../../types'
import {useBooleanish} from '../../composables'

const props = withDefaults(
  defineProps<{
    flush?: Booleanish
    horizontal?: Booleanish | Breakpoint
    numbered?: Booleanish
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

const flushBoolean = useBooleanish(() => props.flush)
const numberedBoolean = useBooleanish(() => props.numbered)
const computedHorizontal = useBooleanish(() => props.horizontal)

const computedClasses = computed(() => {
  const horizontal = flushBoolean.value ? false : computedHorizontal.value
  return {
    'list-group-flush': flushBoolean.value,
    'list-group-horizontal': horizontal === true,
    [`list-group-horizontal-${horizontal}`]: typeof horizontal === 'string',
    'list-group-numbered': numberedBoolean.value,
  }
})
const computedTag = toRef(() => (numberedBoolean.value === true ? 'ol' : props.tag))

provide(listGroupInjectionKey, {
  numbered: numberedBoolean,
})
</script>
