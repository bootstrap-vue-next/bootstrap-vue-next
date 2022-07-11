<template>
  <form :id="id" :novalidate="novalidate" :class="classes" @submit.prevent="submitted">
    <slot />
  </form>
</template>

<script setup lang="ts">
// import type {BFormEmits, BFormProps} from '../../types/components'
import {computed} from 'vue'

interface BFormProps {
  id?: string
  floating?: boolean
  novalidate?: boolean
  validated?: boolean
}

const props = withDefaults(defineProps<BFormProps>(), {
  floating: false,
  novalidate: false,
  validated: false,
})

interface BFormEmits {
  (e: 'submit', value: Event): void
}

const emit = defineEmits<BFormEmits>()

const classes = computed(() => ({
  'form-floating': props.floating,
  'was-validated': props.validated,
}))

const submitted = (e: Event): void => emit('submit', e)
</script>
