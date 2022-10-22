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
// import type {BFormEmits, BFormProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'
import {computed, toRef} from 'vue'

interface BFormProps {
  id?: string
  floating?: Booleanish
  novalidate?: Booleanish
  validated?: Booleanish
}

const props = withDefaults(defineProps<BFormProps>(), {
  floating: false,
  novalidate: false,
  validated: false,
})

const floatingBoolean = useBooleanish(toRef(props, 'floating'))
const novalidateBoolean = useBooleanish(toRef(props, 'novalidate'))
const validatedBoolean = useBooleanish(toRef(props, 'validated'))

interface BFormEmits {
  (e: 'submit', value: Event): void
}

const emit = defineEmits<BFormEmits>()

const computedClasses = computed(() => ({
  'form-floating': floatingBoolean.value,
  'was-validated': validatedBoolean.value,
}))

const submitted = (e: Event): void => emit('submit', e)
</script>
