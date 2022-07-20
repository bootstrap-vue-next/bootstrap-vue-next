<template>
  <img :class="classes" v-bind="attrs" />
</template>

<script setup lang="ts">
// import type {BCardImgProps} from '../../types/components'
import {computed} from 'vue'

interface BCardImgProps {
  alt?: string
  bottom?: boolean
  end?: boolean
  height?: number | string
  left?: boolean
  right?: boolean
  src?: string
  start?: boolean
  top?: boolean
  width?: number | string
}

const props = withDefaults(defineProps<BCardImgProps>(), {
  alt: undefined,
  bottom: false,
  end: false,
  left: false,
  right: false,
  start: false,
  top: false,
})

const attrs = computed(() => ({
  src: props.src,
  alt: props.alt,
  width:
    (typeof props.width === 'number' ? props.width : parseInt(props.width as string, 10)) ||
    undefined,
  height:
    (typeof props.height === 'number' ? props.height : parseInt(props.height as string, 10)) ||
    undefined,
}))

const classes = computed(() => {
  const align = props.left ? 'float-left' : props.right ? 'float-right' : ''

  let baseClass = 'card-img'

  if (props.top) {
    baseClass += '-top'
  } else if (props.right || props.end) {
    baseClass += '-right'
  } else if (props.bottom) {
    baseClass += '-bottom'
  } else if (props.left || props.start) {
    baseClass += '-left'
  }

  return {
    [align]: !!align,
    [baseClass]: true,
  }
})
</script>
