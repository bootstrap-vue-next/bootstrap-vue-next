<template>
  <component :is="props.tag" class="card-subtitle mb-2" :class="computedClasses">
    <slot>
      {{ props.text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BCardSubtitleProps} from '../../types'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BCardSubtitleProps>(), {
  tag: 'h6',
  text: undefined,
  textVariant: 'body-secondary',
})
const props = useDefaults(_props, 'BCardSubtitle')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  [`text-${props.textVariant}`]: props.textVariant !== null,
}))
</script>
