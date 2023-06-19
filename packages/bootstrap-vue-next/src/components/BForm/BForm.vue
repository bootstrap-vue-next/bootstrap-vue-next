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

interface BFormProps {
  id?: string
  floating?: Booleanish
  novalidate?: Booleanish
  validated?: Booleanish
}

interface BFormEmits {
  (e: 'submit', value: Event): void
}

const props = withDefaults(defineProps<BFormProps>(), {
  floating: false,
  id: undefined,
  novalidate: false,
  validated: false,
})

const emit = defineEmits<BFormEmits>()

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

const submitted = (e: Event): void => emit('submit', e)
</script>
