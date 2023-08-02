<template>
  <BImg v-bind="computedImgProps" :class="baseClass" />
</template>

<script setup lang="ts">
import BImg from '../BImg.vue'
import type {BImgProps, Booleanish} from '../../types'
import {useBooleanish} from '../../composables'
import {omit} from '../../utils'
import {computed} from 'vue'

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
  }
)

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

const computedImgProps = computed(() => omit(props, ['bottom', 'top', 'end', 'start']))
</script>
