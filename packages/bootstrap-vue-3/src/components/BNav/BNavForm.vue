<template>
  <BForm v-bind="computedAttrs" class="d-flex" @submit.prevent="submitted">
    <slot />
  </BForm>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {Booleanish} from '../../types'
import BForm from '../BForm/BForm.vue'

interface Props {
  role?: string
  id?: string // Extend BFormProps
  floating?: Booleanish
  novalidate?: Booleanish
  validated?: Booleanish
}

const props = withDefaults(defineProps<Props>(), {
  floating: false,
  novalidate: false,
  validated: false,
})

interface BNavFormEmits {
  (e: 'submit', value: Event): void
}

const emit = defineEmits<BNavFormEmits>()

const computedAttrs = computed(() => ({
  floating: props.floating,
  role: props.role,
  id: props.id,
  novalidate: props.novalidate,
  validated: props.validated,
}))

const submitted = (e: Event): void => emit('submit', e)
</script>
