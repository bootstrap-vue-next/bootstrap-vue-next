<template>
  <form :id="props.id" ref="_element" :novalidate="props.novalidate" :class="computedClasses">
    <slot />
  </form>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import type {BFormProps} from '../../types/ComponentProps'
import {computed, useTemplateRef} from 'vue'
import type {BFormSlots} from '../../types/ComponentSlots'

const _props = withDefaults(defineProps<BFormProps>(), {
  id: undefined,
  floating: false,
  novalidate: false,
  validated: false,
})
const props = useDefaults(_props, 'BForm')
defineSlots<BFormSlots>()

const element = useTemplateRef('_element')

const computedClasses = computed(() => ({
  'form-floating': props.floating,
  'was-validated': props.validated,
}))

defineExpose({
  element,
})
</script>
