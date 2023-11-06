<template>
  <BImg v-bind="computedImgProps" :class="baseClass" />
</template>

<script setup lang="ts">
import BImg from '../BImg.vue'
import type {BImgProps, Booleanish} from '../../types'
import {useBooleanish} from '../../composables'
import {omit} from '../../utils'
import {computed, toRef} from 'vue'

const props = withDefaults(
  defineProps<
    {
      bottom?: Booleanish
      top?: Booleanish
    } & BImgProps
  >(),
  {
    bottom: false,
    top: false,
    // BImg props
    blank: undefined,
    blankColor: undefined,
    block: undefined,
    center: undefined,
    end: undefined,
    fluid: undefined,
    fluidGrow: undefined,
    height: undefined,
    lazy: undefined,
    rounded: undefined,
    roundedBottom: undefined,
    roundedEnd: undefined,
    roundedStart: undefined,
    roundedTop: undefined,
    sizes: undefined,
    src: undefined,
    srcset: undefined,
    start: undefined,
    thumbnail: undefined,
    width: undefined,
    // End BImg props
  }
)

const bottomBoolean = useBooleanish(() => props.bottom)
const endBoolean = useBooleanish(() => props.end)
const startBoolean = useBooleanish(() => props.start)
const topBoolean = useBooleanish(() => props.top)

const baseClass = toRef(() =>
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

const computedImgProps = computed(() => omit(props, ['bottom', 'top', 'end', 'start']))
</script>
