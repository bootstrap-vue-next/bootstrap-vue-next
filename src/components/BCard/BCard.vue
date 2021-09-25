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

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import Alignment from '../../types/Alignment'
import {ColorVariant} from '../../types'

export default defineComponent({
  name: 'BCard',
  props: {
    align: {type: String as PropType<Alignment>, required: false},
    bgVariant: {type: String as PropType<ColorVariant>, required: false},
    bodyBgVariant: {type: String as PropType<ColorVariant>, required: false},
    bodyClass: {type: [Array, Object, String], required: false},
    bodyTag: {type: String, default: 'div'},
    bodyTextVariant: {type: String as PropType<ColorVariant>, required: false},
    borderVariant: {type: String as PropType<ColorVariant>, required: false},
    footer: {type: String, required: false},
    footerBgVariant: {type: String as PropType<ColorVariant>, required: false},
    footerBorderVariant: {type: String as PropType<ColorVariant>, required: false},
    footerClass: {type: [Array, Object, String], required: false},
    footerHtml: {type: String, default: ''},
    footerTag: {type: String, default: 'div'},
    footerTextVariant: {type: String as PropType<ColorVariant>, required: false},
    header: {type: String, required: false},
    headerBgVariant: {type: String as PropType<ColorVariant>, required: false},
    headerBorderVariant: {type: String as PropType<ColorVariant>, required: false},
    headerClass: {type: [Array, Object, String], required: false},
    headerHtml: {type: String, default: ''},
    headerTag: {type: String, default: 'div'},
    headerTextVariant: {type: String as PropType<ColorVariant>, required: false},
    imgAlt: {type: String, required: false},
    imgBottom: {type: Boolean, default: false},
    imgEnd: {type: Boolean, default: false},
    imgHeight: {type: [String, Number], required: false},
    imgLeft: {type: Boolean, default: false},
    imgRight: {type: Boolean, default: false},
    imgSrc: {type: String, required: false},
    imgStart: {type: Boolean, default: false},
    imgTop: {type: Boolean, default: false},
    imgWidth: {type: [String, Number], required: false},
    noBody: {type: Boolean, default: false},
    overlay: {type: Boolean, default: false},
    subTitle: {type: String, required: false},
    subTitleTag: {type: String, default: 'h6'},
    subTitleTextVariant: {type: String as PropType<ColorVariant>, default: 'muted'},
    tag: {type: String, default: 'div'},
    textVariant: {type: String as PropType<ColorVariant>, required: false},
    title: {type: String, required: false},
    titleTag: {type: String, default: 'h4'},
  },
  setup(props) {
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

    return {
      classes,
      bodyClasses,
      footerClasses,
      headerClasses,
      imgClasses,
      imgAttr,
      subTitleClasses,
    }
  },
})
</script>
