<template>
  <img
    :class="computedClasses"
    :src="!blankBoolean ? props.src : computedBlankImgSrc"
    :width="computedDimentions.width || undefined"
    :height="computedDimentions.height || undefined"
    :srcset="!blankBoolean ? computedSrcset : undefined"
    :sizes="!blankBoolean ? computedSizes : undefined"
    :loading="lazyBoolean ? 'lazy' : 'eager'"
  />
</template>

<script setup lang="ts">
import type {BImgProps} from '../types'
import {useBooleanish} from '../composables'
import {computed} from 'vue'

const props = withDefaults(defineProps<BImgProps>(), {
  sizes: undefined,
  src: undefined,
  srcset: undefined,
  width: undefined,
  height: undefined,
  blank: false,
  lazy: false,
  blankColor: 'transparent',
  block: false,
  center: false,
  fluid: false,
  fluidGrow: false,
  end: false,
  start: false,
  rounded: false,
  thumbnail: false,
})

const BLANK_TEMPLATE =
  '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' +
  '<rect width="100%" height="100%" style="fill:%{f};"></rect>' +
  '</svg>'

const lazyBoolean = useBooleanish(() => props.lazy)
const blankBoolean = useBooleanish(() => props.blank)
const blockBoolean = useBooleanish(() => props.block)
const centerBoolean = useBooleanish(() => props.center)
const fluidBoolean = useBooleanish(() => props.fluid)
const fluidGrowBoolean = useBooleanish(() => props.fluidGrow)
const startBoolean = useBooleanish(() => props.start)
const endBoolean = useBooleanish(() => props.end)
const thumbnailBoolean = useBooleanish(() => props.thumbnail)

const computedSrcset = computed<string | undefined>(() =>
  typeof props.srcset === 'string'
    ? props.srcset
        .split(',')
        .filter((x) => x)
        .join(',')
    : Array.isArray(props.srcset)
    ? props.srcset.filter((x) => x).join(',')
    : undefined
)

const computedSizes = computed<string | undefined>(() =>
  typeof props.sizes === 'string'
    ? props.sizes
        .split(',')
        .filter((x) => x)
        .join(',')
    : Array.isArray(props.sizes)
    ? props.sizes.filter((x) => x).join(',')
    : undefined
)

// TODO go through an makes number props type string | number
// May be able to replace the internal util function with vueuse useToString/useToNumber utils
const computedDimentions = computed<{height: number | undefined; width: number | undefined}>(() => {
  const parser = (str: string | number | undefined): number | undefined =>
    str === undefined
      ? undefined
      : typeof str === 'number'
      ? str
      : Number.parseInt(str, 10) || undefined
  const width = parser(props.width)
  const height = parser(props.height)
  if (blankBoolean.value) {
    if (width !== undefined && height === undefined) {
      return {height: width, width}
    }
    if (width === undefined && height !== undefined) {
      return {height, width: height}
    }
    if (width === undefined && height === undefined) {
      return {height: 1, width: 1}
    }
  }
  return {
    width,
    height,
  }
})

const computedBlankImgSrc = computed(() =>
  makeBlankImgSrc(computedDimentions.value.width, computedDimentions.value.height, props.blankColor)
)

const alignment = computed<'float-start' | 'float-end' | 'mx-auto' | undefined>(() =>
  startBoolean.value
    ? 'float-start'
    : endBoolean.value
    ? 'float-end'
    : centerBoolean.value
    ? 'mx-auto'
    : undefined
)

const computedClasses = computed(() => ({
  'img-thumbnail': thumbnailBoolean.value,
  'img-fluid': fluidBoolean.value || fluidGrowBoolean.value,
  'w-100': fluidGrowBoolean.value,
  'rounded': props.rounded === '' || props.rounded === true,
  [`rounded-${props.rounded}`]: typeof props.rounded === 'string' && props.rounded !== '',
  [`${alignment.value}`]: alignment.value !== undefined,
  'd-block': blockBoolean.value || centerBoolean.value,
}))

const makeBlankImgSrc = (
  width: number | undefined,
  height: number | undefined,
  color: string
): string => {
  const src = encodeURIComponent(
    BLANK_TEMPLATE.replace('%{w}', String(width))
      .replace('%{h}', String(height))
      .replace('%{f}', color)
  )
  return `data:image/svg+xml;charset=UTF-8,${src}`
}
</script>
