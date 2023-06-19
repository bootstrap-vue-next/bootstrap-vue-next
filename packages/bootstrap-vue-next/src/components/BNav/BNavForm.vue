<template>
  <b-form v-bind="computedAttrs" class="d-flex" @submit.prevent="submitted">
    <slot />
  </b-form>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {Booleanish} from '../../types'
import BForm from '../BForm/BForm.vue'

interface BNavFormProps {
  role?: string
  id?: string // Extend BFormProps
  floating?: Booleanish
  novalidate?: Booleanish
  validated?: Booleanish
}

interface BNavFormEmits {
  (e: 'submit', value: Event): void
}

const props = withDefaults(defineProps<BNavFormProps>(), {
  role: undefined,
  id: undefined,
  floating: false,
  novalidate: false,
  validated: false,
})

const emit = defineEmits<BNavFormEmits>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedAttrs = computed(() => ({
  floating: props.floating,
  role: props.role,
  id: props.id,
  novalidate: props.novalidate,
  validated: props.validated,
}))

const submitted = (e: Event): void => emit('submit', e)
</script>
