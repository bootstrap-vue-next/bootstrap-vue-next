<template>
  <li :class="liClasses" v-bind="wrapperAttrs">
    <BForm
      v-bind="attrs"
      :id="props.id"
      :floating="props.floating"
      :role="props.role"
      :novalidate="props.novalidate"
      :validated="props.validated"
      class="d-flex"
      :class="props.formClass"
      @submit.prevent="submitted"
    >
      <slot />
    </BForm>
  </li>
</template>

<script setup lang="ts">
import {computed, useAttrs} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import type {BNavFormProps} from '../../types/ComponentProps'
import BForm from '../BForm/BForm.vue'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BNavFormProps>(), {
  role: undefined,
  wrapperAttrs: undefined,
  formClass: undefined,
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

const {class: wrapperClass, ...attrs} = useAttrs()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const submitted = (e: Readonly<Event>) => {
  emit('submit', e)
}

const liClasses = computed(() => [
  'd-flex',
  'flex-row',
  'align-items-center',
  'flex-wrap',
  wrapperClass,
])
</script>
