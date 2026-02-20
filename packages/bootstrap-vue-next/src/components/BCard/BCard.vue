<template>
  <component :is="props.tag" class="card" :class="computedClasses">
    <ReusableImg.define>
      <slot name="img">
        <BCardImg v-if="props.imgSrc" v-bind="imgAttr" />
      </slot>
    </ReusableImg.define>

    <ReusableImg.reuse v-if="props.imgPlacement !== 'bottom'" />
    <BCardHeader
      v-if="props.header || hasHeaderSlot"
      :bg-variant="props.headerBgVariant"
      :variant="props.headerVariant"
      :border-variant="props.headerBorderVariant"
      :tag="props.headerTag"
      :text-variant="props.headerTextVariant"
      :class="props.headerClass"
    >
      <slot name="header">
        {{ props.header }}
      </slot>
    </BCardHeader>
    <BCardBody
      v-if="!props.noBody"
      :overlay="props.imgPlacement === 'overlay'"
      :bg-variant="props.bodyBgVariant"
      :border-variant="props.bodyBorderVariant"
      :tag="props.bodyTag"
      :text-variant="props.bodyTextVariant"
      :subtitle="props.subtitle"
      :subtitle-tag="props.subtitleTag"
      :subtitle-text-variant="props.subtitleTextVariant"
      :title="props.title"
      :title-tag="props.titleTag"
      :class="props.bodyClass"
    >
      <slot>
        {{ props.bodyText }}
      </slot>
    </BCardBody>
    <slot v-else>
      {{ props.bodyText }}
    </slot>
    <BCardFooter
      v-if="props.footer || hasFooterSlot"
      :bg-variant="props.footerBgVariant"
      :border-variant="props.footerBorderVariant"
      :variant="props.footerVariant"
      :tag="props.footerTag"
      :text-variant="props.footerTextVariant"
      :class="props.footerClass"
    >
      <slot name="footer">
        {{ props.footer }}
      </slot>
    </BCardFooter>
    <ReusableImg.reuse v-if="props.imgPlacement === 'bottom'" />
  </component>
</template>

<script setup lang="ts">
import type {BCardProps} from '../../types/ComponentProps'
import {isEmptySlot} from '../../utils/dom'
import {computed} from 'vue'
import {useColorVariantClasses} from '../../composables/useColorVariantClasses'
import {useDefaults} from '../../composables/useDefaults'
import BCardImg from './BCardImg.vue'
import BCardHeader from './BCardHeader.vue'
import BCardBody from './BCardBody.vue'
import BCardFooter from './BCardFooter.vue'
import {createReusableTemplate} from '@vueuse/core'
import type {BCardSlots} from '../../types'

const _props = withDefaults(defineProps<BCardProps>(), {
  align: undefined,
  bodyBgVariant: undefined,
  bodyBorderVariant: undefined,
  bodyClass: undefined,
  bodyTag: 'div',
  bodyText: '',
  bodyTextVariant: undefined,
  borderVariant: null,
  footer: undefined,
  footerBgVariant: undefined,
  footerBorderVariant: undefined,
  footerClass: undefined,
  footerTag: 'div',
  footerTextVariant: undefined,
  footerVariant: null,
  header: undefined,
  headerBgVariant: undefined,
  headerBorderVariant: undefined,
  headerClass: undefined,
  headerTag: 'div',
  headerTextVariant: undefined,
  headerVariant: null,
  imgAlt: undefined,
  imgPlacement: 'top',
  imgHeight: undefined,
  imgSrc: undefined,
  imgWidth: undefined,
  noBody: false,
  subtitle: undefined,
  subtitleTag: 'h6',
  subtitleTextVariant: 'body-secondary',
  tag: 'div',
  title: undefined,
  titleTag: 'h4',
  // ColorExtendables props
  bgVariant: null,
  textVariant: null,
  variant: null,
  // End ColorExtendables props
})
const props = useDefaults(_props, 'BCard')
const slots = defineSlots<BCardSlots>()

const hasHeaderSlot = computed(() => !isEmptySlot(slots.header))
const hasFooterSlot = computed(() => !isEmptySlot(slots.footer))

const colorClasses = useColorVariantClasses(props)
const computedClasses = computed(() => [
  colorClasses.value,
  {
    [`text-${props.align}`]: props.align !== undefined,
    'flex-row': props.imgPlacement === 'start',
    'flex-row-reverse': props.imgPlacement === 'end',
  },
])

const imgAttr = computed(() => ({
  src: props.imgSrc,
  alt: props.imgAlt,
  height: props.imgHeight,
  width: props.imgWidth,
  placement: props.imgPlacement,
}))

const ReusableImg = createReusableTemplate()
</script>
