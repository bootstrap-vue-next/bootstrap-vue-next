<template>
  <BCardHeadFoot class="card-footer" v-bind="props">
    <slot>
      {{ props.text }}
    </slot>
  </BCardHeadFoot>
</template>

<script setup lang="ts">
import type {BCardFooterSlots, BCardHeaderProps} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import BCardHeadFoot from '../BCardHeadFoot.vue'

const _props = withDefaults(defineProps<BCardHeaderProps>(), {
  borderVariant: undefined,
  tag: 'div',
  text: undefined,
  // ColorExtendables props
  bgVariant: undefined,
  textVariant: undefined,
  variant: undefined,
  // End ColorExtendables props
})
const props = useDefaults(_props, 'BCardFooter')
defineSlots<BCardFooterSlots>()
</script>
