<template>
  <form
    :id="props.id"
    ref="element"
    :novalidate="props.novalidate"
    :class="computedClasses"
    @submit.prevent="submitted"
  >
    <slot />
  </form>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BFormProps} from '../../types'
import {computed, ref} from 'vue'

const _props = withDefaults(defineProps<BFormProps>(), {
  floating: false,
  id: undefined,
  novalidate: false,
  validated: false,
})
const props = useDefaults(_props, 'BForm')

const emit = defineEmits<{
  submit: [value: Event]
}>()

const element = ref<HTMLFormElement | null>(null)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  'form-floating': props.floating,
  'was-validated': props.validated,
}))

const submitted = (e: Readonly<Event>) => {
  emit('submit', e)
}

defineExpose({
  element,
})
</script>
