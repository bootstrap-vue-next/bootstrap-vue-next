<template>
  <div :id="computedId" class="accordion" :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
// https://vuejs.org/guide/typescript/composition-api.html#syntax-limitations , may be possible in a future release
// import type {BAccordionProps} from '../types/components'
import {Booleanish} from '../../types'
import {computed, InjectionKey, provide} from 'vue'
import {useId} from '../../composables'
import {resolveBooleanish} from '../../utils'

interface BAccordionProps {
  flush?: Booleanish
  free?: Booleanish
  id?: string
}

const props = withDefaults(defineProps<BAccordionProps>(), {
  flush: false,
  free: false,
  id: undefined,
})

const computedId = useId(props.id, 'accordion')

const flushBoolean = computed<boolean>(() => resolveBooleanish(props.flush))
const freeBoolean = computed<boolean>(() => resolveBooleanish(props.free))

const classes = computed(() => ({
  'accordion-flush': flushBoolean.value,
}))

if (!freeBoolean.value) {
  provide(injectionKey, computedId.value.toString())
}
</script>

<script lang="ts">
export const injectionKey: InjectionKey<string> = Symbol()
</script>
