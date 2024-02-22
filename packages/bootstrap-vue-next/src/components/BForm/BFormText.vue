<template>
  <component :is="tag" :id="id" :class="computedClasses">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {TextColorVariant} from '../../types'

const props = withDefaults(
  defineProps<{
    id?: string
    inline?: boolean
    tag?: string
    text?: string
    textVariant?: TextColorVariant | null
  }>(),
  {
    id: undefined,
    inline: false,
    tag: 'small',
    text: undefined,
    textVariant: 'body-secondary',
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const inlineBoolean = computed(() => props.inline)

const computedClasses = computed(() => ({
  [`text-${props.textVariant}`]: props.textVariant !== null,
  'form-text': !inlineBoolean.value,
}))
</script>
