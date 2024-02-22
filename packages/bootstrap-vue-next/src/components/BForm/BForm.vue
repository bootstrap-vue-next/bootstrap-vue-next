<template>
  <form
    :id="id"
    ref="element"
    :novalidate="novalidateBoolean"
    :class="computedClasses"
    @submit.prevent="submitted"
  >
    <slot />
  </form>
</template>

<script setup lang="ts">
import type {BFormProps} from '../../types'
import {computed, ref} from 'vue'

const props = withDefaults(defineProps<BFormProps>(), {
  floating: false,
  id: undefined,
  novalidate: false,
  validated: false,
})

const emit = defineEmits<{
  submit: [value: Event]
}>()

const element = ref<HTMLFormElement | null>(null)

const floatingBoolean = computed(() => props.floating)
const novalidateBoolean = computed(() => props.novalidate)
const validatedBoolean = computed(() => props.validated)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  'form-floating': floatingBoolean.value,
  'was-validated': validatedBoolean.value,
}))

const submitted = (e: Readonly<Event>) => {
  emit('submit', e)
}

defineExpose({
  element,
})
</script>
