<template>
  <component :is="tag" :id="id" :class="computedClasses">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {BFormTextProps} from '../../types'

const props = withDefaults(defineProps<BFormTextProps>(), {
  id: undefined,
  inline: false,
  tag: 'small',
  text: undefined,
  textVariant: 'body-secondary',
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  [`text-${props.textVariant}`]: props.textVariant !== null,
  'form-text': !props.inline,
}))
</script>
