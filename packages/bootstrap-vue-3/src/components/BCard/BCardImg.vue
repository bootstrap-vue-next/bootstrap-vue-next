<template>
  <img :class="classes" v-bind="attrs" />
</template>

<script setup lang="ts">
// import type {BCardImgProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'
import {computed, toRef} from 'vue'

// TODO how does this separate from a simple b-img?

interface BCardImgProps {
  alt?: string
  bottom?: Booleanish
  end?: Booleanish
  height?: number | string
  left?: Booleanish
  right?: Booleanish
  src?: string
  lazy?: Booleanish
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
  lazy: false,
  start: false,
  top: false,
})

const bottomBoolean = useBooleanish(toRef(props, 'bottom'))
const endBoolean = useBooleanish(toRef(props, 'end'))
const leftBoolean = useBooleanish(toRef(props, 'left'))
const rightBoolean = useBooleanish(toRef(props, 'right'))
const startBoolean = useBooleanish(toRef(props, 'start'))
const topBoolean = useBooleanish(toRef(props, 'top'))
const lazyBoolean = useBooleanish(toRef(props, 'lazy'))

const attrs = computed(() => ({
  loading: lazyBoolean.value ? 'lazy' : 'eager',
  src: props.src,
  alt: props.alt,
  width:
    (typeof props.width === 'number' ? props.width : parseInt(props.width as string, 10)) ||
    undefined,
  height:
    (typeof props.height === 'number' ? props.height : parseInt(props.height as string, 10)) ||
    undefined,
}))

const alignment = computed(() =>
  leftBoolean.value ? 'float-start' : rightBoolean.value ? 'float-end' : ''
)

const baseClass = computed(() =>
  topBoolean.value
    ? 'card-img-top'
    : rightBoolean.value || endBoolean.value
    ? 'card-img-right'
    : bottomBoolean.value
    ? 'card-img-bottom'
    : leftBoolean.value || startBoolean.value
    ? 'card-img-left'
    : 'card-img'
)

const classes = computed(() => ({
  [alignment.value]: !!alignment.value,
  [baseClass.value]: !!baseClass.value,
}))
</script>
