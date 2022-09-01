<template>
  <component :is="tag" class="card" :class="classes">
    <!-- Img if on top -->
    <b-card-img v-if="imgSrc && !imgBottomBoolean" v-bind="imgAttr" />
    <!-- Header -->
    <b-card-header
      v-if="header || $slots.header || headerHtml"
      v-bind="headerAttrs"
      :class="headerClass"
    >
      <slot name="header">
        {{ header }}
      </slot>
    </b-card-header>
    <!-- Body -->
    <b-card-body v-if="!noBodyBoolean" v-bind="bodyAttrs" :class="bodyClass">
      <slot>
        {{ text }}
      </slot>
    </b-card-body>
    <slot v-else>
      {{ text }}
    </slot>
    <!-- Footer -->
    <b-card-footer
      v-if="footer || $slots.footer || footerHtml"
      v-bind="footerAttrs"
      :class="footerClass"
    >
      <slot name="footer">
        {{ footer }}
      </slot>
    </b-card-footer>
    <!-- Img if on bottom -->
    <b-card-img v-if="imgSrc && imgBottomBoolean" v-bind="imgAttr" />
  </component>
</template>

<script setup lang="ts">
// import type {BCardProps} from '../../types/components'
import type {Alignment, Booleanish, ColorVariant, TextColorVariant} from '../../types'
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'
import BCardImg from './BCardImg.vue'
import BCardHeader from './BCardHeader.vue'
import BCardBody from './BCardBody.vue'
import BCardFooter from './BCardFooter.vue'

interface BCardProps {
  align?: Alignment
  bgVariant?: ColorVariant
  bodyBgVariant?: ColorVariant
  bodyClass?: Array<string> | Record<string, boolean | undefined | null> | string
  bodyTag?: string
  bodyTextVariant?: TextColorVariant
  borderVariant?: ColorVariant
  footer?: string
  footerBgVariant?: ColorVariant
  footerBorderVariant?: ColorVariant
  footerClass?: Array<string> | Record<string, boolean | undefined | null> | string
  footerHtml?: string
  footerTag?: string
  footerTextVariant?: TextColorVariant
  header?: string
  headerBgVariant?: ColorVariant
  headerBorderVariant?: ColorVariant
  headerClass?: Array<string> | Record<string, boolean | undefined | null> | string
  headerHtml?: string
  headerTag?: string
  headerTextVariant?: TextColorVariant
  imgAlt?: string
  imgBottom?: Booleanish
  imgEnd?: Booleanish
  imgHeight?: string | number
  imgLeft?: Booleanish
  imgRight?: Booleanish
  imgSrc?: string
  imgStart?: Booleanish
  imgTop?: Booleanish
  imgWidth?: string | number
  noBody?: Booleanish
  overlay?: Booleanish
  subTitle?: string
  subTitleTag?: string
  subTitleTextVariant?: TextColorVariant
  tag?: string
  textVariant?: TextColorVariant
  title?: string
  titleTag?: string
  text?: string
}

const props = withDefaults(defineProps<BCardProps>(), {
  bodyTag: 'div',
  footerHtml: '',
  footerTag: 'div',
  headerHtml: '',
  headerTag: 'div',
  imgBottom: false,
  imgEnd: false,
  imgLeft: false,
  imgRight: false,
  imgStart: false,
  text: '',
  imgTop: false,
  noBody: false,
  overlay: false,
  subTitleTag: 'h6',
  subTitleTextVariant: 'muted',
  tag: 'div',
  titleTag: 'h4',
})

const imgBottomBoolean = useBooleanish(toRef(props, 'imgBottom'))
const imgEndBoolean = useBooleanish(toRef(props, 'imgEnd'))
const imgLeftBoolean = useBooleanish(toRef(props, 'imgLeft'))
const imgRightBoolean = useBooleanish(toRef(props, 'imgRight'))
const imgStartBoolean = useBooleanish(toRef(props, 'imgStart'))
const noBodyBoolean = useBooleanish(toRef(props, 'noBody'))

const classes = computed(() => ({
  [`text-${props.align}`]: props.align !== undefined,
  [`text-${props.textVariant}`]: props.textVariant !== undefined,
  [`bg-${props.bgVariant}`]: props.bgVariant !== undefined,
  [`border-${props.borderVariant}`]: props.borderVariant !== undefined,
  'flex-row': imgLeftBoolean.value || imgStartBoolean.value,
  'flex-row-reverse': imgEndBoolean.value || imgRightBoolean.value,
}))

const headerAttrs = computed(() => ({
  bgVariant: props.headerBgVariant,
  borderVariant: props.headerBorderVariant,
  html: props.headerHtml,
  tag: props.headerTag,
  textVariant: props.headerTextVariant,
}))

const bodyAttrs = computed(() => ({
  overlay: props.overlay,
  bodyBgVariant: props.bodyBgVariant,
  bodyTag: props.bodyTag,
  bodyTextVariant: props.bodyTextVariant,
  subTitle: props.subTitle,
  subTitleTag: props.subTitleTag,
  subTitleTextVariant: props.subTitleTextVariant,
  title: props.title,
  titleTag: props.titleTag,
}))

const footerAttrs = computed(() => ({
  bgVariant: props.footerBgVariant,
  borderVariant: props.borderVariant,
  html: props.footerHtml,
  tag: props.footerTag,
  textVariant: props.footerTextVariant,
}))

const imgAttr = computed(() => ({
  src: props.imgSrc,
  alt: props.imgAlt,
  height: props.imgHeight,
  width: props.imgWidth,
  bottom: props.imgBottom,
  end: props.imgEnd,
  left: props.imgLeft,
  right: props.imgRight,
  start: props.imgStart,
  top: props.imgTop,
}))
</script>
