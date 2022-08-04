<template>
  <form :id="id" :novalidate="novalidateBoolean" :class="classes" @submit.prevent="submitted">
    <slot />
  </form>
</template>

<script setup lang="ts">
// import type {BFormEmits, BFormProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {resolveBooleanish} from '../../utils'
import {computed} from 'vue'

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

const floatingBoolean = computed(() => resolveBooleanish(props.floating))
const novalidateBoolean = computed(() => resolveBooleanish(props.novalidate))
const validatedBoolean = computed(() => resolveBooleanish(props.validated))

interface BFormEmits {
  (e: 'submit', value: Event): void
}

const emit = defineEmits<BFormEmits>()

const classes = computed(() => ({
  'form-floating': floatingBoolean.value,
  'was-validated': validatedBoolean.value,
}))

const submitted = (e: Event): void => emit('submit', e)
</script>
