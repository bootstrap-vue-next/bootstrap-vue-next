<template>
  <BForm
    :id="id"
    :floating="floating"
    :role="role"
    :novalidate="novalidate"
    :validated="validated"
    class="d-flex"
    @submit.prevent="submitted"
  >
    <slot />
  </BForm>
</template>

<script setup lang="ts">
import type {BFormProps} from '../../types'
import BForm from '../BForm/BForm.vue'

withDefaults(
  defineProps<
    {
      role?: string
    } & BFormProps
  >(),
  {
    role: undefined,
    id: undefined,
    floating: false,
    novalidate: false,
    validated: false,
  }
)

const emit = defineEmits<{
  submit: [value: Event]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const submitted = (e: Event) => {
  emit('submit', e)
}
</script>
