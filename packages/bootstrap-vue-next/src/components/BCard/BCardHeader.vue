<template>
  <BCardHeadFoot class="card-header" v-bind="props">
    <slot />
  </BCardHeadFoot>
</template>

<script setup lang="ts">
import type {BCardHeaderSlots, BCardHeadFootProps} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import BCardHeadFoot from '../BCardHeadFoot.vue'

const _props = withDefaults(defineProps<BCardHeadFootProps>(), {
  borderVariant: undefined,
  tag: 'div',
  text: undefined,
  // ColorExtendables props
  bgVariant: undefined,
  textVariant: undefined,
  variant: undefined,
  // End ColorExtendables props
})
const props = useDefaults(_props, 'BCardHeader')
defineSlots<BCardHeaderSlots>()
</script>
