<template>
  <BCard :img-placement="props.imgPlacement">
    <template v-if="!props.noImg" #img>
      <slot name="img">
        <BCardImg
          :blank="!props.imgSrc ? true : false"
          :blank-color="props.imgBlankColor"
          :height="!props.imgSrc ? props.imgHeight : undefined"
          :src="props.imgSrc"
          :img-placement="props.imgPlacement"
          :style="{cursor: 'wait'}"
        />
      </slot>
    </template>

    <template v-if="!props.noHeader" #header>
      <slot name="header">
        <BPlaceholder
          :width="props.headerWidth"
          :variant="props.headerVariant"
          :animation="props.headerAnimation"
          :size="props.headerSize"
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
    <template v-if="!props.noFooter" #footer>
      <slot name="footer">
        <component
          :is="footerComponent"
          :width="props.footerWidth"
          :animation="props.footerAnimation"
          :size="props.noButton ? props.footerSize : undefined"
          :variant="props.footerVariant"
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
import type {BPlaceholderCardProps} from '../../types'
import {computed, toRef} from 'vue'
import {useDefaults} from '../../composables'

const _props = withDefaults(defineProps<BPlaceholderCardProps>(), {
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
  imgPlacement: 'top',
  imgHeight: 100,
  imgSrc: undefined,
  noButton: false,
  noFooter: false,
  noHeader: false,
  noImg: false,
  size: 'md',
  variant: undefined,
})
const props = useDefaults(_props, 'BPlaceholderCard')

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

const defaultAttrs = computed(() => ({
  animation: props.animation,
  size: props.size,
  variant: props.variant,
}))

const footerComponent = toRef(() => (!props.noButton ? BPlaceholderButton : BPlaceholder))
</script>
