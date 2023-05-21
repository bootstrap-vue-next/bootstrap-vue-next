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
import type {
  AlignmentTextHorizontal,
  Booleanish,
  ClassValue,
  ColorVariant,
  TextColorVariant,
} from '../../types'
import {isEmptySlot} from '../../utils'
import {computed, toRef, useSlots} from 'vue'
import {useBooleanish} from '../../composables'
import BCardImg from './BCardImg.vue'
import BCardHeader from './BCardHeader.vue'
import BCardBody from './BCardBody.vue'
import BCardFooter from './BCardFooter.vue'

interface BCardProps {
  align?: AlignmentTextHorizontal
  bgVariant?: ColorVariant | null
  bodyBgVariant?: ColorVariant | null
  bodyClass?: ClassValue
  bodyTag?: string
  bodyTextVariant?: TextColorVariant | null
  borderVariant?: ColorVariant | null
  footer?: string
  footerBgVariant?: ColorVariant | null
  footerBorderVariant?: ColorVariant | null
  footerClass?: ClassValue
  footerHtml?: string
  footerTag?: string
  footerTextVariant?: TextColorVariant | null
  header?: string
  headerBgVariant?: ColorVariant | null
  headerBorderVariant?: ColorVariant | null
  headerClass?: ClassValue
  headerHtml?: string
  headerTag?: string
  headerTextVariant?: TextColorVariant | null
  imgAlt?: string
  imgBottom?: Booleanish
  imgEnd?: Booleanish
  imgHeight?: string | number
  imgSrc?: string
  imgStart?: Booleanish
  imgTop?: Booleanish
  imgWidth?: string | number
  noBody?: Booleanish
  overlay?: Booleanish
  subtitle?: string
  subtitleTag?: string
  subtitleTextVariant?: TextColorVariant | null
  tag?: string
  textVariant?: TextColorVariant | null
  title?: string
  titleTag?: string
  bodyText?: string
}

const props = withDefaults(defineProps<BCardProps>(), {
  align: undefined,
  bgVariant: null,
  bodyBgVariant: null,
  bodyClass: undefined,
  bodyTextVariant: null,
  borderVariant: null,
  footer: undefined,
  footerBgVariant: null,
  footerBorderVariant: null,
  footerClass: undefined,
  footerTextVariant: null,
  header: undefined,
  headerBgVariant: null,
  headerBorderVariant: null,
  headerClass: undefined,
  textVariant: null,
  headerTextVariant: null,
  imgAlt: undefined,
  title: undefined,
  subtitle: undefined,
  imgWidth: undefined,
  imgHeight: undefined,
  imgSrc: undefined,
  bodyTag: 'div',
  footerHtml: '',
  footerTag: 'div',
  headerHtml: '',
  headerTag: 'div',
  imgBottom: false,
  imgEnd: false,
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
const imgStartBoolean = useBooleanish(toRef(props, 'imgStart'))
const noBodyBoolean = useBooleanish(toRef(props, 'noBody'))

const hasHeaderSlot = computed<boolean>(() => !isEmptySlot(slots.header))
const hasFooterSlot = computed<boolean>(() => !isEmptySlot(slots.footer))

const computedClasses = computed(() => ({
  [`text-${props.align}`]: props.align !== undefined,
  [`text-${props.textVariant}`]: props.textVariant !== null,
  [`bg-${props.bgVariant}`]: props.bgVariant !== null,
  [`border-${props.borderVariant}`]: props.borderVariant !== null,
  'flex-row': imgStartBoolean.value,
  'flex-row-reverse': imgEndBoolean.value,
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
  start: props.imgStart,
  top: props.imgTop,
}))
</script>
