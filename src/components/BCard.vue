<!-- eslint-disable vue/no-v-html -->
<template>
  <component
    :is="tag"
    class="card"
    :class="classes"
    v-bind="$attrs"
  >
    <img
      v-if="imgSrc && !imgBottom"
      v-bind="imgAttr"
      :class="imgClasses"
    >
    <div
      v-if="header || $slots.header || headerHtml"
      class="card-header"
      :class="[headerClass, headerClasses]"
    >
      <div
        v-if="!!headerHtml"
        v-html="headerHtml"
      />
      <slot
        v-else
        name="header"
      >
        {{ header }}
      </slot>
    </div>

    <component
      :is="bodyTag"
      :class="[bodyClass, bodyClasses]"
    >
      <component
        :is="titleTag"
        v-if="title && !noBody"
        class="card-title"
      >
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

    <component
      :is="footerTag"
      v-if="footer || $slots.footer || footerHtml"
      class="card-footer"
      :class="[footerClass, footerClasses]"
    >
      <div
        v-if="!!footerHtml"
        v-html="footerHtml"
      />
      <slot
        v-else
        name="footer"
      >
        {{ footer }}
      </slot>
    </component>
    <img
      v-if="imgSrc && imgBottom"
      v-bind="imgAttr"
      :class="imgClasses"
    >
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import Alignment from '../types/Alignment';
import {ColorVariant} from "../types";

export default defineComponent({
    name: 'BCard',
    props: {
        align: { type: String as PropType<Alignment> },
        bgVariant: { type: String as PropType<ColorVariant> },
        bodyBgVariant: { type: String as PropType<ColorVariant> },
        bodyBorderVariant: { type: String as PropType<ColorVariant> },
        bodyClass: { type: [Array, Object, String] },
        bodyTag: { type: String, default: 'div' },
        bodyTextVariant: { type: String as PropType<ColorVariant> },
        borderVariant: { type: String as PropType<ColorVariant> },
        footer: { type: String },
        footerBgVariant: { type: String as PropType<ColorVariant> },
        footerBorderVariant: { type: String as PropType<ColorVariant> },
        footerClass: { type: [Array, Object, String] },
        footerHtml: { type: String, default: '' },
        footerTag: { type: String, default: 'div' },
        footerTextVariant: { type: String as PropType<ColorVariant> },
        header: { type: String },
        headerBgVariant: { type: String as PropType<ColorVariant> },
        headerBorderVariant: { type: String as PropType<ColorVariant> },
        headerClass: { type: [Array, Object, String] },
        headerHtml: { type: String, default: '' },
        headerTag: { type: String, default: 'div' },
        headerTextVariant: { type: String as PropType<ColorVariant> },
        imgAlt: { type: String },
        imgBottom: { type: Boolean, default: false },
        imgEnd: { type: Boolean, default: false },
        imgHeight: { type: [String, Number] },
        imgLeft: { type: Boolean, default: false },
        imgRight: { type: Boolean, default: false },
        imgSrc: { type: String },
        imgStart: { type: Boolean, default: false },
        imgTop: { type: Boolean, default: false },
        imgWidth: { type: [String, Number] },
        noBody: { type: Boolean, default: false },
        overlay: { type: Boolean, default: false },
        subTitle: { type: String },
        subTitleTag: { type: String, default: 'h6' },
        subTitleTextVariant: { type: String as PropType<ColorVariant> , default: 'muted' },
        tag: { type: String, default: 'div' },
        textVariant: { type: String as PropType<ColorVariant> },
        title: { type: String },
        titleTag: { type: String, default: 'h4' },
    },
    setup(props) {

      const classes = computed(() => ({
        [`text-${props.align}`]: props.align,
        [`text-${props.textVariant}`]: props.textVariant,
        [`bg-${props.bgVariant}`]: props.bgVariant,
        [`border-${props.borderVariant}`]: props.borderVariant,
        'flex-row': props.imgLeft || props.imgStart,
        'flex-row-reverse': props.imgEnd || props.imgRight
      }));

      const bodyClasses = computed(() => ({
        'card-body': !props.noBody,
        'card-img-overlay': props.overlay,
        [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant,
        [`border-${props.bodyBorderVariant}`]: props.bodyBorderVariant,
        [`text-${props.bodyTextVariant}`]: props.bodyTextVariant,
      }));

      const footerClasses = computed(() => ({
        [`bg-${props.footerBgVariant}`]: props.footerBgVariant,
        [`border-${props.footerBorderVariant}`]: props.footerBorderVariant,
        [`text-${props.footerTextVariant}`]: props.footerTextVariant,
      }));

      const headerClasses = computed(() => ({
        [`bg-${props.headerBgVariant}`]: props.headerBgVariant,
        [`border-${props.headerBorderVariant}`]: props.headerBorderVariant,
        [`text-${props.headerTextVariant}`]: props.headerTextVariant,
      }));

      const imgClasses = computed(() => ({
        'card-img': !props.imgEnd && !props.imgRight && !props.imgStart && !props.imgLeft && !props.imgTop && !props.imgTop,
        'card-img-right': props.imgEnd || props.imgRight,
        'card-img-left': props.imgStart || props.imgLeft,
        'card-img-top': props.imgTop,
        'card-img-bottom': props.imgBottom,
      }));

      const imgAttr = computed(() => ({
        'src': props.imgSrc,
        'alt': props.imgAlt,
        'height': props.imgHeight,
        'width': props.imgWidth,
      }));

      const subTitleClasses = computed(() => ({
        [`text-${props.subTitleTextVariant}`]: props.subTitleTextVariant,
      }));

      return {
        classes,
        bodyClasses,
        footerClasses,
        headerClasses,
        imgClasses,
        imgAttr,
        subTitleClasses,
      };
    }
})
</script>
