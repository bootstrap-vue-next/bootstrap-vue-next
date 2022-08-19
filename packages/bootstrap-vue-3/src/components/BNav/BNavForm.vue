<template>
  <BForm v-bind="attrs" class="d-flex">
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

const attrs = computed(() => ({
  floating: props.floating,
  role: props.role,
  id: props.id,
  novalidate: props.novalidate,
  validated: props.validated,
}))
</script>
