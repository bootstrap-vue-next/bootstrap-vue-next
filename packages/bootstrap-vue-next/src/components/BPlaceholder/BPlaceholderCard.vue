<template>
  <b-card :img-bottom="imgBottom">
    <template v-if="!noImgBoolean" #img>
      <slot name="img">
        <b-card-img v-bind="imgAttrs" />
      </slot>
    </template>

    <template v-if="!noHeaderBoolean" #header>
      <slot name="header">
        <b-placeholder v-bind="headerAttrs" />
      </slot>
    </template>
    <slot>
      <b-placeholder cols="7" />
      <b-placeholder cols="4" />
      <b-placeholder cols="4" />
      <b-placeholder cols="6" />
      <b-placeholder cols="8" />
    </slot>
    <template v-if="!noFooterBoolean" #footer>
      <slot name="footer">
        <b-placeholder-button v-if="!noButtonBoolean" v-bind="footerAttrs" />
        <b-placeholder v-else v-bind="footerAttrs" />
      </slot>
    </template>
  </b-card>
</template>

<script setup lang="ts">
import BCard from '../BCard/BCard.vue'
import BCardImg from '../BCard/BCardImg.vue'
import BPlaceholder from './BPlaceholder.vue'
import BPlaceholderButton from './BPlaceholderButton.vue'
import type {Booleanish, ColorVariant, PlaceholderAnimation, PlaceholderSize} from '../../types'
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'

interface Props {
  noHeader?: Booleanish
  headerWidth?: string | number
  headerVariant?: ColorVariant
  headerAnimation?: PlaceholderAnimation
  headerSize?: PlaceholderSize
  noFooter?: Booleanish
  footerWidth?: string | number
  footerVariant?: ColorVariant
  footerAnimation?: PlaceholderAnimation
  footerSize?: PlaceholderSize
  animation?: PlaceholderAnimation
  size?: PlaceholderSize
  variant?: ColorVariant
  noButton?: Booleanish
  imgBottom?: Booleanish
  imgSrc?: string
  imgBlankColor?: string
  imgHeight?: string | number
  noImg?: Booleanish
}

const props = withDefaults(defineProps<Props>(), {
  noButton: false,
  headerWidth: 100,
  footerWidth: 100,
  noHeader: false,
  noFooter: false,
  imgBlankColor: '#868e96',
  imgHeight: 100,
  imgBottom: false,
  noImg: false,
})

const noButtonBoolean = useBooleanish(toRef(props, 'noButton'))
const noHeaderBoolean = useBooleanish(toRef(props, 'noHeader'))
const noFooterBoolean = useBooleanish(toRef(props, 'noFooter'))
const noImgBoolean = useBooleanish(toRef(props, 'noImg'))

const headerAttrs = computed(() => ({
  width: props.headerWidth,
  variant: props.headerVariant,
  animation: props.headerAnimation,
  size: props.headerSize,
}))

const footerAttrs = computed(() => ({
  width: props.footerWidth,
  animation: props.footerAnimation,
  size: noButtonBoolean.value ? props.footerSize : undefined,
  variant: props.footerVariant,
}))

const imgAttrs = computed(() => ({
  blank: !props.imgSrc ? true : false,
  blankColor: props.imgBlankColor,
  height: !props.imgSrc ? props.imgHeight : undefined,
  src: props.imgSrc,
  top: !props.imgBottom,
  bottom: props.imgBottom,
}))
</script>
