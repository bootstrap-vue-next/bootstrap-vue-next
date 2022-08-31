<template>
  <component :is="tag" class="card" :class="classes">
    <!-- replace with BCardImg -->
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
  [`text-${props.align}`]: props.align !== undefined,
  [`text-${props.textVariant}`]: props.textVariant !== undefined,
  [`bg-${props.bgVariant}`]: props.bgVariant !== undefined,
  [`border-${props.borderVariant}`]: props.borderVariant !== undefined,
  'flex-row': imgLeftBoolean.value || imgStartBoolean.value,
  'flex-row-reverse': imgEndBoolean.value || imgRightBoolean.value,
}))

const bodyClasses = computed(() => ({
  'card-body': !noBodyBoolean.value,
  'card-img-overlay': overlayBoolean.value,
  [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant !== undefined,
  [`text-${props.bodyTextVariant}`]: props.bodyTextVariant !== undefined,
}))

const footerClasses = computed(() => ({
  [`bg-${props.footerBgVariant}`]: props.footerBgVariant !== undefined,
  [`border-${props.footerBorderVariant}`]: props.footerBorderVariant !== undefined,
  [`text-${props.footerTextVariant}`]: props.footerTextVariant !== undefined,
}))

const headerClasses = computed(() => ({
  [`bg-${props.headerBgVariant}`]: props.headerBgVariant !== undefined,
  [`border-${props.headerBorderVariant}`]: props.headerBorderVariant !== undefined,
  [`text-${props.headerTextVariant}`]: props.headerTextVariant !== undefined,
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
  height:
    (typeof props.imgHeight === 'number'
      ? props.imgHeight
      : parseInt(props.imgHeight as string, 10)) || undefined,
  width:
    (typeof props.imgWidth === 'number'
      ? props.imgWidth
      : parseInt(props.imgWidth as string, 10)) || undefined,
}))

const subTitleClasses = computed(() => ({
  [`text-${props.subTitleTextVariant}`]: !!props.subTitleTextVariant,
}))
</script>
