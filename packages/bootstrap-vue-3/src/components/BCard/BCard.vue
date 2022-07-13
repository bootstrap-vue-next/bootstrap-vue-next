<!-- eslint-disable vue/no-v-html -->
<template>
  <component :is="tag" class="card" :class="classes">
    <img v-if="imgSrc && !imgBottom" v-bind="imgAttr" :class="imgClasses" />
    <component
      :is="headerTag"
      v-if="header || $slots.header || headerHtml"
      class="card-header"
      :class="[headerClass, headerClasses]"
    >
      <div v-if="!!headerHtml" v-html="headerHtml" />
      <slot v-else name="header">
        {{ header }}
      </slot>
    </component>

    <component :is="bodyTag" v-if="!noBody" :class="[bodyClass, bodyClasses]">
      <component :is="titleTag" v-if="title && !noBody" class="card-title">
        {{ title }}
      </component>
      <component
        :is="subTitleTag"
        v-if="subTitle && !noBody"
        class="card-subtitle mb-2"
        :class="subTitleClasses"
      >
        {{ subTitle }}
      </component>
      <slot />
    </component>
    <slot v-if="noBody" />
    <component
      :is="footerTag"
      v-if="footer || $slots.footer || footerHtml"
      class="card-footer"
      :class="[footerClass, footerClasses]"
    >
      <div v-if="!!footerHtml" v-html="footerHtml" />
      <slot v-else name="footer">
        {{ footer }}
      </slot>
    </component>
    <img v-if="imgSrc && imgBottom" v-bind="imgAttr" :class="imgClasses" />
  </component>
</template>

<script setup lang="ts">
// import type {BCardProps} from '../../types/components'
import type {Alignment, ColorVariant, TextColorVariant} from '../../types'
import {computed} from 'vue'

interface BCardProps {
  align?: Alignment
  bgVariant?: ColorVariant
  bodyBgVariant?: ColorVariant
  bodyClass?: Array<unknown> | Record<string, unknown> | string // TODO record<string, unknown> can be replaced as a known object
  bodyTag?: string // Above todo, also Array can be explicit
  bodyTextVariant?: ColorVariant
  borderVariant?: ColorVariant
  footer?: string
  footerBgVariant?: ColorVariant
  footerBorderVariant?: ColorVariant
  footerClass?: Array<unknown> | Record<string, unknown> | string
  footerHtml?: string
  footerTag?: string
  footerTextVariant?: ColorVariant
  header?: string
  headerBgVariant?: ColorVariant
  headerBorderVariant?: ColorVariant
  headerClass?: Array<unknown> | Record<string, unknown> | string
  headerHtml?: string
  headerTag?: string
  headerTextVariant?: ColorVariant
  imgAlt?: string
  imgBottom?: boolean
  imgEnd?: boolean
  imgHeight?: string | number
  imgLeft?: boolean
  imgRight?: boolean
  imgSrc?: string
  imgStart?: boolean
  imgTop?: boolean
  imgWidth?: string | number
  noBody?: boolean
  overlay?: boolean
  subTitle?: string
  subTitleTag?: string
  subTitleTextVariant?: TextColorVariant
  tag?: string
  textVariant?: TextColorVariant
  title?: string
  titleTag?: string
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
  imgTop: false,
  noBody: false,
  overlay: false,
  subTitleTag: 'h6',
  subTitleTextVariant: 'muted',
  tag: 'div',
  titleTag: 'h4',
})

const classes = computed(() => ({
  [`text-${props.align}`]: props.align,
  [`text-${props.textVariant}`]: props.textVariant,
  [`bg-${props.bgVariant}`]: props.bgVariant,
  [`border-${props.borderVariant}`]: props.borderVariant,
  'flex-row': props.imgLeft || props.imgStart,
  'flex-row-reverse': props.imgEnd || props.imgRight,
}))

const bodyClasses = computed(() => ({
  'card-body': !props.noBody,
  'card-img-overlay': props.overlay,
  [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant,
  [`text-${props.bodyTextVariant}`]: props.bodyTextVariant,
}))

const footerClasses = computed(() => ({
  [`bg-${props.footerBgVariant}`]: props.footerBgVariant,
  [`border-${props.footerBorderVariant}`]: props.footerBorderVariant,
  [`text-${props.footerTextVariant}`]: props.footerTextVariant,
}))

const headerClasses = computed(() => ({
  [`bg-${props.headerBgVariant}`]: props.headerBgVariant,
  [`border-${props.headerBorderVariant}`]: props.headerBorderVariant,
  [`text-${props.headerTextVariant}`]: props.headerTextVariant,
}))

const imgClasses = computed(() => ({
  'card-img':
    !props.imgEnd &&
    !props.imgRight &&
    !props.imgStart &&
    !props.imgLeft &&
    !props.imgTop &&
    !props.imgTop,
  'card-img-right': props.imgEnd || props.imgRight,
  'card-img-left': props.imgStart || props.imgLeft,
  'card-img-top': props.imgTop,
  'card-img-bottom': props.imgBottom,
}))

const imgAttr = computed(() => ({
  src: props.imgSrc,
  alt: props.imgAlt,
  height: props.imgHeight,
  width: props.imgWidth,
}))

const subTitleClasses = computed(() => ({
  [`text-${props.subTitleTextVariant}`]: props.subTitleTextVariant,
}))
</script>
