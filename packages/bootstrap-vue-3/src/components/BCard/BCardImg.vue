<template>
  <img :class="classes" v-bind="attrs" />
</template>

<script setup lang="ts">
// import type {BCardImgProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {resolveBooleanish} from '../../utils'
import {computed} from 'vue'

interface BCardImgProps {
  alt?: string
  bottom?: Booleanish
  end?: Booleanish
  height?: number | string
  left?: Booleanish
  right?: Booleanish
  src?: string
  start?: Booleanish
  top?: Booleanish
  width?: number | string
}

const props = withDefaults(defineProps<BCardImgProps>(), {
  bottom: false,
  end: false,
  left: false,
  right: false,
  alt: undefined,
  start: false,
  top: false,
})

const bottomBoolean = computed<boolean>(() => resolveBooleanish(props.bottom))
const endBoolean = computed<boolean>(() => resolveBooleanish(props.end))
const leftBoolean = computed<boolean>(() => resolveBooleanish(props.left))
const rightBoolean = computed<boolean>(() => resolveBooleanish(props.right))
const startBoolean = computed<boolean>(() => resolveBooleanish(props.start))
const topBoolean = computed<boolean>(() => resolveBooleanish(props.top))

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
  const align = leftBoolean.value ? 'float-left' : rightBoolean.value ? 'float-right' : ''

  let baseClass = 'card-img'

  if (topBoolean.value) {
    baseClass += '-top'
  } else if (rightBoolean.value || endBoolean.value) {
    baseClass += '-right'
  } else if (bottomBoolean.value) {
    baseClass += '-bottom'
  } else if (leftBoolean.value || startBoolean.value) {
    baseClass += '-left'
  }

  return {
    [align]: !!align,
    [baseClass]: true,
  }
})
</script>
