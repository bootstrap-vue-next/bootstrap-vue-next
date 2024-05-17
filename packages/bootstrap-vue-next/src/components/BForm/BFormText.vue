<template>
  <component :is="props.tag" :id="props.id" :class="computedClasses">
    <slot>
      {{ props.text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {BFormTextProps} from '../../types'
import {useDefaults} from '../../composables'

const _props = withDefaults(defineProps<BFormTextProps>(), {
  id: undefined,
  inline: false,
  tag: 'small',
  text: undefined,
  textVariant: 'body-secondary',
})
const props = useDefaults(_props, 'BFormText')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  [`text-${props.textVariant}`]: props.textVariant !== null,
  'form-text': !props.inline,
}))
</script>
