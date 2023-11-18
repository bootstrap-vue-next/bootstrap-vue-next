<template>
  <BCard :img-bottom="imgBottom">
    <template v-if="!noImgBoolean" #img>
      <slot name="img">
        <BCardImg
          :blank="!imgSrc ? true : false"
          :blank-color="imgBlankColor"
          :height="!imgSrc ? imgHeight : undefined"
          :src="imgSrc"
          :top="!imgBottom"
          :bottom="imgBottom"
          :style="{cursor: 'wait'}"
        />
      </slot>
    </template>

    <template v-if="!noHeaderBoolean" #header>
      <slot name="header">
        <BPlaceholder
          :width="headerWidth"
          :variant="headerVariant"
          :animation="headerAnimation"
          :size="headerSize"
        />
      </slot>
    </template>
    <slot>
      <BPlaceholder cols="7" v-bind="defaultAttrs" />
      <BPlaceholder cols="4" v-bind="defaultAttrs" />
      <BPlaceholder cols="4" v-bind="defaultAttrs" />
      <BPlaceholder cols="6" v-bind="defaultAttrs" />
      <BPlaceholder cols="8" v-bind="defaultAttrs" />
    </slot>
    <template v-if="!noFooterBoolean" #footer>
      <slot name="footer">
        <component
          :is="footerComponent"
          :width="footerWidth"
          :animation="footerAnimation"
          :size="noButtonBoolean ? footerSize : undefined"
          :variant="footerVariant"
        />
      </slot>
    </template>
  </BCard>
</template>

<script setup lang="ts">
import BCard from '../BCard/BCard.vue'
import BCardImg from '../BCard/BCardImg.vue'
import BPlaceholder from './BPlaceholder.vue'
import BPlaceholderButton from './BPlaceholderButton.vue'
import type {Booleanish, ColorVariant, PlaceholderAnimation, PlaceholderSize} from '../../types'
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'

const props = withDefaults(
  defineProps<{
    animation?: PlaceholderAnimation
    footerAnimation?: PlaceholderAnimation
    footerSize?: PlaceholderSize
    footerVariant?: ColorVariant | null
    footerWidth?: string | number
    headerAnimation?: PlaceholderAnimation
    headerSize?: PlaceholderSize
    headerVariant?: ColorVariant | null
    headerWidth?: string | number
    imgBlankColor?: string
    imgBottom?: Booleanish
    imgHeight?: string | number
    imgSrc?: string
    noButton?: Booleanish
    noFooter?: Booleanish
    noHeader?: Booleanish
    noImg?: Booleanish
    size?: PlaceholderSize
    variant?: ColorVariant | null
  }>(),
  {
    animation: undefined,
    footerAnimation: undefined,
    footerSize: 'md',
    footerVariant: undefined,
    footerWidth: 100,
    headerAnimation: undefined,
    headerSize: 'md',
    headerVariant: undefined,
    headerWidth: 100,
    imgBlankColor: '#868e96',
    imgBottom: false,
    imgHeight: 100,
    imgSrc: undefined,
    noButton: false,
    noFooter: false,
    noHeader: false,
    noImg: false,
    size: 'md',
    variant: undefined,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  footer?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  header?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img?: (props: Record<string, never>) => any
}>()

const noButtonBoolean = useBooleanish(() => props.noButton)
const noHeaderBoolean = useBooleanish(() => props.noHeader)
const noFooterBoolean = useBooleanish(() => props.noFooter)
const noImgBoolean = useBooleanish(() => props.noImg)

const defaultAttrs = computed(() => ({
  animation: props.animation,
  size: props.size,
  variant: props.variant,
}))

const footerComponent = toRef(() => (!noButtonBoolean.value ? BPlaceholderButton : BPlaceholder))
</script>
