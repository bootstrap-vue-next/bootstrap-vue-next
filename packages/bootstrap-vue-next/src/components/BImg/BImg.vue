<template>
  <component
    :is="props.tag"
    :class="computedClasses"
    :src="!props.blank ? props.src : computedBlankImgSrc"
    :width="computedDimentions.width || undefined"
    :height="computedDimentions.height || undefined"
    :srcset="!props.blank ? computedSrcset : undefined"
    :sizes="!props.blank ? computedSizes : undefined"
    :loading="props.lazy ? 'lazy' : 'eager'"
  />
</template>

<script setup lang="ts">
import type {BImgProps} from '../types'
import {useDefaults, useRadiusElementClasses} from '../composables'
import {computed, toRef} from 'vue'
import {useToNumber} from '@vueuse/core'

const _props = withDefaults(defineProps<BImgProps>(), {
  blank: false,
  blankColor: 'transparent',
  block: false,
  fluid: false,
  fluidGrow: false,
  height: undefined,
  lazy: false,
  sizes: undefined,
  tag: 'img',
  src: undefined,
  srcset: undefined,
  placement: undefined,
  thumbnail: false,
  width: undefined,
  // RadiusElementExtendables props
  rounded: false,
  roundedBottom: undefined,
  roundedEnd: undefined,
  roundedStart: undefined,
  roundedTop: undefined,
  // End RadiusElementExtendables props
})
const props = useDefaults(_props, 'BImg')

const heightNumber = useToNumber(() => props.height ?? NaN)
const widthNumber = useToNumber(() => props.width ?? NaN)

const radiusElementClasses = useRadiusElementClasses(() => ({
  rounded: props.rounded,
  roundedTop: props.roundedTop,
  roundedBottom: props.roundedBottom,
  roundedStart: props.roundedStart,
  roundedEnd: props.roundedEnd,
}))

const computedSrcset = computed(() =>
  typeof props.srcset === 'string'
    ? props.srcset
        .split(',')
        .filter((x) => x)
        .join(',')
    : Array.isArray(props.srcset)
      ? props.srcset.filter((x) => x).join(',')
      : undefined
)

const computedSizes = computed(() =>
  typeof props.sizes === 'string'
    ? props.sizes
        .split(',')
        .filter((x) => x)
        .join(',')
    : Array.isArray(props.sizes)
      ? props.sizes.filter((x) => x).join(',')
      : undefined
)

const computedDimentions = computed<{height: number | undefined; width: number | undefined}>(() => {
  const width = Number.isNaN(widthNumber.value) ? undefined : widthNumber.value
  const height = Number.isNaN(heightNumber.value) ? undefined : heightNumber.value
  if (props.blank) {
    if (width !== undefined && height === undefined) return {height: width, width}
    if (width === undefined && height !== undefined) return {height, width: height}
    if (width === undefined && height === undefined) return {height: 1, width: 1}
  }
  return {
    width,
    height,
  }
})

const computedBlankImgSrc = toRef(() =>
  makeBlankImgSrc(computedDimentions.value.width, computedDimentions.value.height, props.blankColor)
)

const computedAlignment = computed(() => ({
  'float-start': props.placement === 'start',
  'float-end': props.placement === 'end',
  'mx-auto': props.placement === 'center',
}))

const computedClasses = computed(() => [
  radiusElementClasses.value,
  computedAlignment.value,
  {
    'img-thumbnail': props.thumbnail,
    'img-fluid': props.fluid || props.fluidGrow,
    'w-100': props.fluidGrow,
    'd-block': props.block || props.placement === 'center',
  },
])

const makeBlankImgSrc = (width: number | undefined, height: number | undefined, color: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
    <rect width="100%" height="100%" style="fill:${color};"></rect>
    </svg>`)}`
</script>
