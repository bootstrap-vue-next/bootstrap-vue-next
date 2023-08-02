<template>
  <component :is="tag" :id="id" :class="computedClasses">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {Booleanish, TextColorVariant} from '../../types'
import {useBooleanish} from '../../composables'

const props = withDefaults(
  defineProps<{
    id?: string
    inline?: Booleanish
    tag?: string
    text?: string
    textVariant?: TextColorVariant | null
  }>(),
  {
    inline: false,
    id: undefined,
    text: undefined,
    tag: 'small',
    textVariant: 'body-secondary',
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const inlineBoolean = useBooleanish(() => props.inline)

const computedClasses = computed(() => ({
  [`text-${props.textVariant}`]: props.textVariant !== null,
  'form-text': !inlineBoolean.value,
}))
</script>
