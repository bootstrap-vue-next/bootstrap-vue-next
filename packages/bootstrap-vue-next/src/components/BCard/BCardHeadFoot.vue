<template>
  <component :is="tag" :class="computedClasses">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="!!html" v-html="html" />
    <slot v-else>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {BackgroundColorExtendables, ColorVariant} from '../../types'
import {useBackgroundVariant} from '../../composables'

const props = withDefaults(
  defineProps<
    {
      text?: string
      borderVariant?: ColorVariant | null
      html?: string
      tag?: string
    } & BackgroundColorExtendables
  >(),
  {
    tag: 'div',
    text: undefined,
    bgVariant: null,
    borderVariant: null,
    html: undefined,
    textVariant: null,
    variant: null,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const resolvedBackgroundClasses = useBackgroundVariant(props)

const computedClasses = computed(() => [
  resolvedBackgroundClasses.value,
  {
    [`border-${props.borderVariant}`]: props.borderVariant !== null,
  },
])
</script>
