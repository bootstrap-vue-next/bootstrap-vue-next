<template>
  <div :id="computedId" class="accordion" :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
// https://vuejs.org/guide/typescript/composition-api.html#syntax-limitations , may be possible in a future release
// import type {BAccordionProps} from '../types/components'
import {computed, InjectionKey, provide} from 'vue'
import useId from '../../composables/useId'

interface BAccordionProps {
  flush?: boolean
  free?: boolean
  id?: string
}

const props = withDefaults(defineProps<BAccordionProps>(), {
  flush: false,
  free: false,
  id: undefined,
})

const computedId = useId(props.id, 'accordion')

const classes = computed(() => ({
  'accordion-flush': props.flush,
}))

if (!props.free) {
  provide(injectionKey, computedId.value.toString())
}
</script>

<script lang="ts">
export const injectionKey: InjectionKey<string> = Symbol()
</script>
