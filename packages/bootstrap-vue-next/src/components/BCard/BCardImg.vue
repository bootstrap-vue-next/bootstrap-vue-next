<template>
  <BImg :class="baseClass" v-bind="computedAttrs" @load="emit('load', $event)" />
</template>

<script setup lang="ts">
import BImg from '../BImg.vue'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'
import {computed} from 'vue'

const props = withDefaults(
  defineProps<{
    alt?: string
    blank?: Booleanish
    blankColor?: string
    bottom?: Booleanish
    lazy?: Booleanish
    height?: number | string
    start?: Booleanish
    end?: Booleanish
    sizes?: string | string[]
    src?: string
    srcset?: string | string[]
    top?: Booleanish
    width?: number | string
  }>(),
  {
    sizes: undefined,
    src: undefined,
    height: undefined,
    alt: undefined,
    blankColor: undefined,
    width: undefined,
    srcset: undefined,
    bottom: false,
    end: false,
    lazy: false,
    start: false,
    top: false,
    blank: false,
  }
)

const emit = defineEmits<{
  load: [value: Event]
}>()

const bottomBoolean = useBooleanish(() => props.bottom)
const endBoolean = useBooleanish(() => props.end)
const startBoolean = useBooleanish(() => props.start)
const topBoolean = useBooleanish(() => props.top)

const baseClass = computed(() =>
  topBoolean.value
    ? 'card-img-top'
    : endBoolean.value
    ? 'card-img-right'
    : bottomBoolean.value
    ? 'card-img-bottom'
    : startBoolean.value
    ? 'card-img-left'
    : 'card-img'
)

/**
 * Does not include the above baseClass used props so it does not cause potential issues
 */
const computedAttrs = computed(() => ({
  alt: props.alt,
  height: props.height,
  src: props.src,
  lazy: props.lazy,
  width: props.width,
  blank: props.blank,
  blankColor: props.blankColor,
  sizes: props.sizes,
  srcset: props.srcset,
}))
</script>
