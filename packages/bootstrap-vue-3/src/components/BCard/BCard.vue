<template>
  <component :is="tag" class="card" :class="computedClasses">
    <slot v-if="!imgBottomBoolean" name="img">
      <b-card-img v-if="imgSrc" v-bind="imgAttr" />
    </slot>
    <b-card-header
      v-if="header || hasHeaderSlot || headerHtml"
      v-bind="headerAttrs"
      :class="headerClass"
    >
      <slot name="header">
        {{ header }}
      </slot>
    </b-card-header>
    <b-card-body v-if="!noBodyBoolean" v-bind="bodyAttrs" :class="bodyClass">
      <slot>
        {{ bodyText }}
      </slot>
    </b-card-body>
    <slot v-else>
      {{ bodyText }}
    </slot>
    <b-card-footer
      v-if="footer || hasFooterSlot || footerHtml"
      v-bind="footerAttrs"
      :class="footerClass"
    >
      <slot name="footer">
        {{ footer }}
      </slot>
    </b-card-footer>
    <slot v-if="imgBottomBoolean" name="img">
      <b-card-img v-if="imgSrc" v-bind="imgAttr" />
    </slot>
  </component>
</template>

<script setup lang="ts">
// import type {BCardProps} from '../../types/components'
import type {Alignment, Booleanish, ClassValue, ColorVariant, TextColorVariant} from '../../types'
import {computed, toRef, useSlots} from 'vue'
import {useBooleanish} from '../../composables'
import BCardImg from './BCardImg.vue'
import BCardHeader from './BCardHeader.vue'
import BCardBody from './BCardBody.vue'
import BCardFooter from './BCardFooter.vue'
import {isEmptySlot} from '../../utils'

interface BCardProps {
  align?: Alignment.TextHorizontal
  bgVariant?: ColorVariant
  bodyBgVariant?: ColorVariant
  bodyClass?: ClassValue
  bodyTag?: string
  bodyTextVariant?: TextColorVariant
  borderVariant?: ColorVariant
  footer?: string
  footerBgVariant?: ColorVariant
  footerBorderVariant?: ColorVariant
  footerClass?: ClassValue
  footerHtml?: string
  footerTag?: string
  footerTextVariant?: TextColorVariant
  header?: string
  headerBgVariant?: ColorVariant
  headerBorderVariant?: ColorVariant
  headerClass?: ClassValue
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
  subtitle?: string
  subtitleTag?: string
  subtitleTextVariant?: TextColorVariant
  tag?: string
  textVariant?: TextColorVariant
  title?: string
  titleTag?: string
  bodyText?: string
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
  bodyText: '',
  imgTop: false,
  noBody: false,
  overlay: false,
  subtitleTag: 'h6',
  subtitleTextVariant: 'muted',
  tag: 'div',
  titleTag: 'h4',
})

const slots = useSlots()

const imgBottomBoolean = useBooleanish(toRef(props, 'imgBottom'))
const imgEndBoolean = useBooleanish(toRef(props, 'imgEnd'))
const imgLeftBoolean = useBooleanish(toRef(props, 'imgLeft'))
const imgRightBoolean = useBooleanish(toRef(props, 'imgRight'))
const imgStartBoolean = useBooleanish(toRef(props, 'imgStart'))
const noBodyBoolean = useBooleanish(toRef(props, 'noBody'))

const hasHeaderSlot = computed<boolean>(() => !isEmptySlot(slots.header))
const hasFooterSlot = computed<boolean>(() => !isEmptySlot(slots.footer))

const computedClasses = computed(() => ({
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
  subtitle: props.subtitle,
  subtitleTag: props.subtitleTag,
  subtitleTextVariant: props.subtitleTextVariant,
  title: props.title,
  titleTag: props.titleTag,
}))

const footerAttrs = computed(() => ({
  bgVariant: props.footerBgVariant,
  borderVariant: props.footerBorderVariant,
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
