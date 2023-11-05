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
import type {BCardHeadFootProps} from '../../types'
import {useColorVariantClasses} from '../../composables'

const props = withDefaults(defineProps<BCardHeadFootProps>(), {
  borderVariant: null,
  html: undefined,
  tag: 'div',
  text: undefined,
  // ColorExtendables props
  bgVariant: null,
  textVariant: null,
  variant: null,
  // End ColorExtendables props
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const resolvedBackgroundClasses = useColorVariantClasses(props)

const computedClasses = computed(() => [
  resolvedBackgroundClasses.value,
  {
    [`border-${props.borderVariant}`]: props.borderVariant !== null,
  },
])
</script>
