<template>
  <li class="d-flex flex-row align-items-center flex-wrap">
    <BForm
      v-bind="$attrs"
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
  </li>
</template>

<script setup lang="ts">
import type {BNavFormProps} from '../../types'
import BForm from '../BForm/BForm.vue'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<BNavFormProps>(), {
  role: undefined,
  // BForm props
  floating: undefined,
  id: undefined,
  novalidate: undefined,
  validated: undefined,
  // End BForm props
})

const emit = defineEmits<{
  submit: [value: Event]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const submitted = (e: Readonly<Event>) => {
  emit('submit', e)
}
</script>
