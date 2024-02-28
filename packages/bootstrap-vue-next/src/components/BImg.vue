<template>
  <img
    :class="computedClasses"
    :src="!props.blank ? src : computedBlankImgSrc"
    :width="computedDimentions.width || undefined"
    :height="computedDimentions.height || undefined"
    :srcset="!props.blank ? computedSrcset : undefined"
    :sizes="!props.blank ? computedSizes : undefined"
    :loading="props.lazy ? 'lazy' : 'eager'"
  />
</template>

<script setup lang="ts">
import type {BImgProps} from '../types'
import {useRadiusElementClasses} from '../composables'
import {computed, toRef} from 'vue'
import {useToNumber} from '@vueuse/core'

const props = withDefaults(defineProps<BImgProps>(), {
  blank: false,
  blankColor: 'transparent',
  block: false,
  center: false,
  end: false,
  fluid: false,
  fluidGrow: false,
  height: undefined,
  lazy: false,
  sizes: undefined,
  src: undefined,
  srcset: undefined,
  start: false,
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
    if (width !== undefined && height === undefined) {
      return {height: width, width}
    }
    if (width === undefined && height !== undefined) {
      return {height, width: height}
    }
    return {height: 1, width: 1}
  }
  return {
    width,
    height,
  }
})

const computedBlankImgSrc = toRef(() =>
  makeBlankImgSrc(computedDimentions.value.width, computedDimentions.value.height, props.blankColor)
)

const alignment = toRef(() =>
  props.start ? 'float-start' : props.end ? 'float-end' : props.center ? 'mx-auto' : undefined
)

const computedClasses = computed(() => [
  radiusElementClasses.value,
  {
    'img-thumbnail': props.thumbnail,
    'img-fluid': props.fluid || props.fluidGrow,
    'w-100': props.fluidGrow,
    [`${alignment.value}`]: alignment.value !== undefined,
    'd-block': props.block || props.center,
  },
])

const makeBlankImgSrc = (width: number | undefined, height: number | undefined, color: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
    <rect width="100%" height="100%" style="fill:${color};"></rect>
    </svg>`)}`
</script>
