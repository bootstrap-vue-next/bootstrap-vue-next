<template>
  <BCardHeadFoot class="card-footer" v-bind="props">
    <slot>
      {{ text }}
    </slot>
  </BCardHeadFoot>
</template>

<script setup lang="ts">
import type {BCardHeadFootProps} from '../../types'
import BCardHeadFoot from './BCardHeadFoot.vue'

const props = withDefaults(defineProps<BCardHeadFootProps>(), {
  borderVariant: undefined,
  html: undefined,
  tag: 'div',
  text: undefined,
  // ColorExtendables props
  bgVariant: undefined,
  textVariant: undefined,
  variant: undefined,
  // End ColorExtendables props
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
