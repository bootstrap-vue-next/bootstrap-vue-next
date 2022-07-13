<template>
  <component :is="computedTag" class="list-group" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BListGroupProps} from '../../types/components'
import {computed, InjectionKey, provide} from 'vue'
import type {Breakpoint} from '../../types'

interface BListGroupProps {
  flush?: boolean
  horizontal?: boolean | Breakpoint
  numbered?: boolean
  tag?: string
}

const props = withDefaults(defineProps<BListGroupProps>(), {
  flush: false,
  horizontal: false,
  numbered: false,
  tag: 'div',
})

const classes = computed(() => {
  const horizontal = props.flush ? false : props.horizontal
  return {
    'list-group-flush': props.flush,
    'list-group-horizontal': horizontal === true,
    [`list-group-horizontal-${horizontal}`]: typeof horizontal === 'string',
    'list-group-numbered': props.numbered,
  }
})

const computedTag = computed<string>(() => (props.numbered === true ? 'ol' : props.tag))

provide(injectionKey, {
  numbered: props.numbered,
})
</script>

<script lang="ts">
import type {BListGroupParentData} from '../../types/components'
export const injectionKey: InjectionKey<BListGroupParentData> = Symbol()
</script>
