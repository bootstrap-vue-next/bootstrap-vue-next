<template>
  <component :is="tag" class="card" :class="classes">
    <img v-if="imgSrc && !imgBottomBoolean" v-bind="imgAttr" :class="imgClasses" />
    <component
      :is="headerTag"
      v-if="header || $slots.header || headerHtml"
      class="card-header"
      :class="[headerClass, headerClasses]"
    >
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="!!headerHtml" v-html="headerHtml" />
      <slot v-else name="header">
        {{ header }}
      </slot>
    </component>

    <component :is="bodyTag" v-if="!noBodyBoolean" :class="[bodyClass, bodyClasses]">
      <component :is="titleTag" v-if="title && !noBodyBoolean" class="card-title">
        {{ title }}
      </component>
      <component
        :is="subTitleTag"
        v-if="subTitle && !noBodyBoolean"
        class="card-subtitle mb-2"
        :class="subTitleClasses"
      >
        {{ subTitle }}
      </component>
      <slot />
    </component>
    <slot v-if="noBodyBoolean" />
    <component
      :is="footerTag"
      v-if="footer || $slots.footer || footerHtml"
      class="card-footer"
      :class="[footerClass, footerClasses]"
    >
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="!!footerHtml" v-html="footerHtml" />
      <slot v-else name="footer">
        {{ footer }}
      </slot>
    </component>
    <img v-if="imgSrc && imgBottomBoolean" v-bind="imgAttr" :class="imgClasses" />
  </component>
</template>

<script setup lang="ts">
// import type {BCardProps} from '../../types/components'
import type {Alignment, Booleanish, ColorVariant, TextColorVariant} from '../../types'
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'

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

const imgBottomBoolean = useBooleanish(toRef(props, 'imgBottom'))
const imgEndBoolean = useBooleanish(toRef(props, 'imgEnd'))
const imgLeftBoolean = useBooleanish(toRef(props, 'imgLeft'))
const imgRightBoolean = useBooleanish(toRef(props, 'imgRight'))
const imgStartBoolean = useBooleanish(toRef(props, 'imgStart'))
const imgTopBoolean = useBooleanish(toRef(props, 'imgTop'))
const noBodyBoolean = useBooleanish(toRef(props, 'noBody'))
const overlayBoolean = useBooleanish(toRef(props, 'overlay'))

const classes = computed(() => ({
  [`text-${props.align}`]: props.align,
  [`text-${props.textVariant}`]: props.textVariant,
  [`bg-${props.bgVariant}`]: props.bgVariant,
  [`border-${props.borderVariant}`]: props.borderVariant,
  'flex-row': imgLeftBoolean.value || imgStartBoolean.value,
  'flex-row-reverse': imgEndBoolean.value || imgRightBoolean.value,
}))

const bodyClasses = computed(() => ({
  'card-body': !noBodyBoolean.value,
  'card-img-overlay': overlayBoolean.value,
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
    !imgEndBoolean.value &&
    !imgRightBoolean.value &&
    !imgStartBoolean.value &&
    !imgLeftBoolean.value &&
    !imgTopBoolean.value &&
    !imgTopBoolean.value,
  'card-img-right': imgEndBoolean.value || imgRightBoolean.value,
  'card-img-left': imgStartBoolean.value || imgLeftBoolean.value,
  'card-img-top': imgTopBoolean.value,
  'card-img-bottom': imgBottomBoolean.value,
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
