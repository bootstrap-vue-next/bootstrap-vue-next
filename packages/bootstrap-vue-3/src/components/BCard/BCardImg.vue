<template>
  <b-img :class="baseClass" v-bind="computedAttrs" @load="emit('load', $event)" />
</template>

<script setup lang="ts">
// import type {BCardImgProps} from '../../types/components'
import BImg from '../BImg.vue'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'
import {computed, toRef} from 'vue'

interface BCardImgProps {
  alt?: string
  blank?: Booleanish
  blankColor?: string
  bottom?: Booleanish
  lazy?: Booleanish
  height?: number | string
  left?: Booleanish
  start?: Booleanish
  right?: Booleanish
  end?: Booleanish
  sizes?: string | Array<string>
  src?: string
  srcset?: string | Array<string>
  top?: Booleanish
  width?: number | string
}

const props = withDefaults(defineProps<BCardImgProps>(), {
  bottom: false,
  end: false,
  left: false,
  right: false,
  lazy: false,
  start: false,
  top: false,
  blank: false,
})

interface Emits {
  (e: 'load', value: Event): void
}

const emit = defineEmits<Emits>()

const bottomBoolean = useBooleanish(toRef(props, 'bottom'))
const endBoolean = useBooleanish(toRef(props, 'end'))
const leftBoolean = useBooleanish(toRef(props, 'left'))
const rightBoolean = useBooleanish(toRef(props, 'right'))
const startBoolean = useBooleanish(toRef(props, 'start'))
const topBoolean = useBooleanish(toRef(props, 'top'))

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
