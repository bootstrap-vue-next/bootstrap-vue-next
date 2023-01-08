<template>
  <div :id="computedId" class="accordion" :class="computedClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
// https://vuejs.org/guide/typescript/composition-api.html#syntax-limitations , may be possible in a future release
// import type {BAccordionProps} from '../types/components'
import type {Booleanish} from '../../types'
import {computed, InjectionKey, provide, toRef} from 'vue'
import {useBooleanish, useId} from '../../composables'

interface BAccordionProps {
  flush?: Booleanish
  free?: Booleanish
  id?: string
}

const props = withDefaults(defineProps<BAccordionProps>(), {
  flush: false,
  free: false,
})

const computedId = useId(toRef(props, 'id'), 'accordion')

const flushBoolean = useBooleanish(toRef(props, 'flush'))
const freeBoolean = useBooleanish(toRef(props, 'free'))

const computedClasses = computed(() => ({
  'accordion-flush': flushBoolean.value,
}))

if (!freeBoolean.value) {
  provide(injectionKey, computedId.value)
}
</script>

<script lang="ts">
export const injectionKey: InjectionKey<string> = Symbol()
</script>
