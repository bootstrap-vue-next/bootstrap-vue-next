<template>
  <div :id="computedId" class="accordion" :class="computedClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type {Booleanish} from '../../types'
import {computed, provide, ref, toRef} from 'vue'
import {accordionInjectionKey} from '../../utils'
import {useBooleanish, useId} from '../../composables'

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

const openItem = ref('')

const computedId = useId(toRef(props, 'id'), 'accordion')

const flushBoolean = useBooleanish(toRef(props, 'flush'))
const freeBoolean = useBooleanish(toRef(props, 'free'))

const computedClasses = computed(() => ({
  'accordion-flush': flushBoolean.value,
}))

if (!freeBoolean.value) {
  provide(accordionInjectionKey, {
    id: computedId,
    openItem,
    free: freeBoolean,
  })
}
</script>
