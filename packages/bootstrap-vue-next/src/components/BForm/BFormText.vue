<template>
  <component :is="props.tag" :id="props.id" :class="computedClasses">
    <slot>
      {{ props.text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {BFormTextProps} from '../../types/ComponentProps'
import {useDefaults} from '../../composables/useDefaults'
import {useColorVariantClasses} from '../../composables/useColorVariantClasses'
import type {BFormTextSlots} from '../../types'

const _props = withDefaults(defineProps<BFormTextProps>(), {
  id: undefined,
  inline: false,
  tag: 'small',
  text: undefined,
  textVariant: 'body-secondary',
})
const props = useDefaults(_props, 'BFormText')
defineSlots<BFormTextSlots>()

const colorClasses = useColorVariantClasses(props)
const computedClasses = computed(() => [
  colorClasses.value,
  {
    'form-text': !props.inline,
  },
])
</script>
