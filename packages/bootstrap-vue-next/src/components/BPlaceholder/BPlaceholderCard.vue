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
      <b-placeholder cols="7" v-bind="defaultAttrs" />
      <b-placeholder cols="4" v-bind="defaultAttrs" />
      <b-placeholder cols="4" v-bind="defaultAttrs" />
      <b-placeholder cols="6" v-bind="defaultAttrs" />
      <b-placeholder cols="8" v-bind="defaultAttrs" />
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
import {computed} from 'vue'
import {useBooleanish} from '../../composables'

interface BPlaceholderCardProps {
  noHeader?: Booleanish
  headerWidth?: string | number
  headerVariant?: ColorVariant | null
  headerAnimation?: PlaceholderAnimation
  headerSize?: PlaceholderSize
  noFooter?: Booleanish
  footerWidth?: string | number
  footerVariant?: ColorVariant | null
  footerAnimation?: PlaceholderAnimation
  footerSize?: PlaceholderSize
  animation?: PlaceholderAnimation
  size?: PlaceholderSize
  variant?: ColorVariant | null
  noButton?: Booleanish
  imgBottom?: Booleanish
  imgSrc?: string
  imgBlankColor?: string
  imgHeight?: string | number
  noImg?: Booleanish
}

const props = withDefaults(defineProps<BPlaceholderCardProps>(), {
  footerVariant: undefined,
  footerAnimation: undefined,
  footerSize: 'md',
  animation: undefined,
  size: 'md',
  variant: undefined,
  imgSrc: undefined,
  headerAnimation: undefined,
  headerSize: 'md',
  headerVariant: undefined,
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

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  header?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  footer?: (props: Record<string, never>) => any
}>()

const noButtonBoolean = useBooleanish(() => props.noButton)
const noHeaderBoolean = useBooleanish(() => props.noHeader)
const noFooterBoolean = useBooleanish(() => props.noFooter)
const noImgBoolean = useBooleanish(() => props.noImg)

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

const defaultAttrs = computed(() => ({
  animation: props.animation,
  size: props.size,
  variant: props.variant,
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
