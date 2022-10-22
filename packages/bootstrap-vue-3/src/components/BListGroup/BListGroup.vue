<template>
  <component :is="computedTag" class="list-group" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BListGroupProps} from '../../types/components'
import {computed, InjectionKey, provide, toRef} from 'vue'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'
// import type {Breakpoint} from '../../types'

interface BListGroupProps {
  flush?: Booleanish
  horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  numbered?: Booleanish
  tag?: string
}

const props = withDefaults(defineProps<BListGroupProps>(), {
  flush: false,
  horizontal: false,
  numbered: false,
  tag: 'div',
})

const flushBoolean = useBooleanish(toRef(props, 'flush'))
const numberedBoolean = useBooleanish(toRef(props, 'numbered'))

const computedClasses = computed(() => {
  const horizontal = flushBoolean.value ? false : props.horizontal
  return {
    'list-group-flush': flushBoolean.value,
    'list-group-horizontal': horizontal === true,
    [`list-group-horizontal-${horizontal}`]: typeof horizontal === 'string',
    'list-group-numbered': numberedBoolean.value,
  }
})

const computedTag = computed<string>(() => (numberedBoolean.value === true ? 'ol' : props.tag))

provide(injectionKey, {
  numbered: numberedBoolean.value,
})
</script>

<script lang="ts">
import type {BListGroupParentData} from '../../types/components'
export const injectionKey: InjectionKey<BListGroupParentData> = Symbol()
</script>
