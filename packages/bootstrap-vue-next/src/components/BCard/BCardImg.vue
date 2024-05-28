<template>
  <BImg v-bind="computedImgProps" :class="baseAlignmentClasses" />
</template>

<script setup lang="ts">
import BImg from '../BImg.vue'
import type {BCardImgProps} from '../../types'
import {omit} from '../../utils'
import {computed} from 'vue'
import {useDefaults} from '../../composables'

const _props = withDefaults(defineProps<BCardImgProps>(), {
  placement: 'top',
  // BImg props
  blank: undefined,
  blankColor: undefined,
  block: undefined,
  fluid: undefined,
  fluidGrow: undefined,
  height: undefined,
  lazy: undefined,
  rounded: undefined,
  roundedBottom: undefined,
  roundedEnd: undefined,
  roundedStart: undefined,
  roundedTop: undefined,
  sizes: undefined,
  src: undefined,
  srcset: undefined,
  thumbnail: undefined,
  width: undefined,
  // End BImg props
})
const props = useDefaults(_props, 'BCardImg')

const baseAlignmentClasses = computed(() => ({
  'card-img-top': props.placement === 'top',
  // TODO implement this class
  'card-img-end': props.placement === 'end',
  'card-img-bottom': props.placement === 'bottom',
  // TODO implement this class
  'card-img-start': props.placement === 'start',
  'card-img': props.placement === 'overlay',
}))

const computedImgProps = computed(() => omit(props, ['placement']))
</script>
