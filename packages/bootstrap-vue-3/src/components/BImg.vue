<template>
  <img :class="classes" v-bind="attrs" @load="emit('load', $event)" />
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
  right?: Booleanish
  rounded?: boolean | string
  sizes?: string | Array<string>
  src?: string
  srcset?: string | Array<string>
  thumbnail?: Booleanish
  width?: number | string
}

const props = withDefaults(defineProps<BImgProps>(), {
  alt: undefined,
  blank: false,
  lazy: false,
  blankColor: 'transparent',
  block: false,
  center: false,
  fluid: false,
  fluidGrow: false,
  left: false,
  right: false,
  rounded: false,
  thumbnail: false,
})

interface Emits {
  (e: 'load', value: Event): void
}

const emit = defineEmits<Emits>()

const lazyBoolean = useBooleanish(toRef(props, 'lazy'))
const blankBoolean = useBooleanish(toRef(props, 'blank'))
const blockBoolean = useBooleanish(toRef(props, 'block'))
const centerBoolean = useBooleanish(toRef(props, 'center'))
const fluidBoolean = useBooleanish(toRef(props, 'fluid'))
const fluidGrowBoolean = useBooleanish(toRef(props, 'fluidGrow'))
const leftBoolean = useBooleanish(toRef(props, 'left'))
const rightBoolean = useBooleanish(toRef(props, 'right'))
const thumbnailBoolean = useBooleanish(toRef(props, 'thumbnail'))

const BLANK_TEMPLATE =
  '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' +
  '<rect width="100%" height="100%" style="fill:%{f};"></rect>' +
  '</svg>'

const makeBlankImgSrc = (width: any, height: any, color: string): string => {
  const src = encodeURIComponent(
    BLANK_TEMPLATE.replace('%{w}', String(width))
      .replace('%{h}', String(height))
      .replace('%{f}', color)
  )
  return `data:image/svg+xml;charset=UTF-8,${src}`
}

const attrs = computed(() => {
  let {src} = props
  let width =
    (typeof props.width === 'number' ? props.width : parseInt(props.width as string, 10)) ||
    undefined
  let height =
    (typeof props.height === 'number' ? props.height : parseInt(props.height as string, 10)) ||
    undefined

  let srcset = ''
  if (typeof props.srcset === 'string')
    srcset = props.srcset
      .split(',')
      .filter((x) => x)
      .join(',')
  else if (Array.isArray(props.srcset)) srcset = props.srcset.filter((x) => x).join(',')

  let sizes = ''
  if (typeof props.sizes === 'string')
    sizes = props.sizes
      .split(',')
      .filter((x) => x)
      .join(',')
  else if (Array.isArray(props.sizes)) sizes = props.sizes.filter((x) => x).join(',')

  if (blankBoolean.value) {
    if (!height && width) {
      height = width
    } else if (!width && height) {
      width = height
    }
    if (!width && !height) {
      width = 1
      height = 1
    }
    // Make a blank SVG image
    src = makeBlankImgSrc(width, height, props.blankColor || 'transparent')
    // Disable srcset and sizes
    srcset = ''
    sizes = ''
  }
  return {
    src,
    alt: props.alt,
    width: width || undefined,
    height: height || undefined,
    srcset: srcset || undefined,
    sizes: sizes || undefined,
    loading: lazyBoolean.value ? 'lazy' : 'eager',
  }
})

const alignment = computed(() =>
  leftBoolean.value
    ? 'float-start'
    : rightBoolean.value
    ? 'float-end'
    : centerBoolean.value
    ? 'mx-auto'
    : undefined
)

const classes = computed(() => ({
  'img-thumbnail': thumbnailBoolean.value,
  'img-fluid': fluidBoolean.value || fluidGrowBoolean.value,
  'w-100': fluidGrowBoolean.value,
  'rounded': props.rounded === '' || props.rounded === true,
  [`rounded-${props.rounded}`]: typeof props.rounded === 'string' && props.rounded !== '',
  [`${alignment.value}`]: alignment.value !== undefined,
  'd-block': blockBoolean.value || centerBoolean.value,
}))
</script>
