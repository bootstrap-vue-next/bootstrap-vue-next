<template>
  <img :class="computedClasses" v-bind="computedAttrs" @load="emit('load', $event)" />
</template>

<script setup lang="ts">
// import type {BImgProps} from '../types/components'
import type {Booleanish} from '../types'
import {useBooleanish} from '../composables'
import {computed, toRef} from 'vue'

interface BImgProps {
  alt?: string
  blank?: Booleanish
  blankColor?: string
  block?: Booleanish
  center?: Booleanish
  fluid?: Booleanish
  lazy?: Booleanish
  fluidGrow?: Booleanish
  height?: number | string
  left?: Booleanish
  start?: Booleanish
  right?: Booleanish
  end?: Booleanish
  rounded?: boolean | string
  sizes?: string | Array<string>
  src?: string
  srcset?: string | Array<string>
  thumbnail?: Booleanish
  width?: number | string
}

const props = withDefaults(defineProps<BImgProps>(), {
  blank: false,
  lazy: false,
  blankColor: 'transparent',
  block: false,
  center: false,
  fluid: false,
  fluidGrow: false,
  left: false,
  right: false,
  end: false,
  start: false,
  rounded: false,
  thumbnail: false,
})

interface Emits {
  (e: 'load', value: Event): void
}

const emit = defineEmits<Emits>()

const BLANK_TEMPLATE =
  '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' +
  '<rect width="100%" height="100%" style="fill:%{f};"></rect>' +
  '</svg>'

const lazyBoolean = useBooleanish(toRef(props, 'lazy'))
const blankBoolean = useBooleanish(toRef(props, 'blank'))
const blockBoolean = useBooleanish(toRef(props, 'block'))
const centerBoolean = useBooleanish(toRef(props, 'center'))
const fluidBoolean = useBooleanish(toRef(props, 'fluid'))
const fluidGrowBoolean = useBooleanish(toRef(props, 'fluidGrow'))
const leftBoolean = useBooleanish(toRef(props, 'left'))
const startBoolean = useBooleanish(toRef(props, 'start'))
const rightBoolean = useBooleanish(toRef(props, 'right'))
const endBoolean = useBooleanish(toRef(props, 'end'))
const thumbnailBoolean = useBooleanish(toRef(props, 'thumbnail'))

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

const computedAttrs = computed(() => ({
  src: !blankBoolean.value ? props.src : computedBlankImgSrc.value,
  alt: props.alt,
  width: computedDimentions.value.width || undefined,
  height: computedDimentions.value.height || undefined,
  srcset: !blankBoolean.value ? computedSrcset.value : undefined,
  sizes: !blankBoolean.value ? computedSizes.value : undefined,
  loading: lazyBoolean.value ? 'lazy' : 'eager',
}))

const alignment = computed<'float-start' | 'float-end' | 'mx-auto' | undefined>(() =>
  leftBoolean.value || startBoolean.value
    ? 'float-start'
    : rightBoolean.value || endBoolean.value
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
