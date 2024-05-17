<template>
  <li class="d-flex flex-row align-items-center flex-wrap">
    <BForm
      v-bind="$attrs"
      :id="props.id"
      :floating="props.floating"
      :role="props.role"
      :novalidate="props.novalidate"
      :validated="props.validated"
      class="d-flex"
      @submit.prevent="submitted"
    >
      <slot />
    </BForm>
  </li>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BNavFormProps} from '../../types'
import BForm from '../BForm/BForm.vue'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BNavFormProps>(), {
  role: undefined,
  // BForm props
  floating: undefined,
  id: undefined,
  novalidate: undefined,
  validated: undefined,
  // End BForm props
})
const props = useDefaults(_props, 'BNavForm')

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
