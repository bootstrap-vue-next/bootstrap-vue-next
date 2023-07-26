<template>
  <form
    :id="id"
    :novalidate="novalidateBoolean"
    :class="computedClasses"
    @submit.prevent="submitted"
  >
    <slot />
  </form>
</template>

<script setup lang="ts">
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'
import {computed} from 'vue'

const props = withDefaults(
  defineProps<{
    id?: string
    floating?: Booleanish
    novalidate?: Booleanish
    validated?: Booleanish
  }>(),
  {
    floating: false,
    id: undefined,
    novalidate: false,
    validated: false,
  }
)

const emit = defineEmits<{
  submit: [value: Event]
}>()

const floatingBoolean = useBooleanish(() => props.floating)
const novalidateBoolean = useBooleanish(() => props.novalidate)
const validatedBoolean = useBooleanish(() => props.validated)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  'form-floating': floatingBoolean.value,
  'was-validated': validatedBoolean.value,
}))

const submitted = (e: Event) => {
  emit('submit', e)
}
</script>
