<template>
  <component :is="bodyTag" class="card-body" :class="classes">
    <b-card-title v-if="title" :title-tag="titleTag" :title="title" />
    <b-card-sub-title
      v-if="subTitle"
      :sub-title-tag="subTitleTag"
      :sub-title="subTitle"
      :sub-title-text-variant="subTitleTextVariant"
    />
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BCardBodyProps} from '../../types/components'
import {computed, toRef} from 'vue'
import BCardTitle from './BCardTitle.vue'
import BCardSubTitle from './BCardSubTitle.vue'
import type {Booleanish, ColorVariant, TextColorVariant} from '../../types'
import {useBooleanish} from '../../composables'

interface BCardBodyProps {
  bodyBgVariant?: ColorVariant
  bodyClass?: Array<string> | Record<string, boolean> | string
  bodyTag?: string
  bodyTextVariant?: TextColorVariant
  overlay?: Booleanish
  subTitle?: string
  subTitleTag?: string
  subTitleTextVariant?: TextColorVariant
  title?: string
  titleTag?: string
}

const props = withDefaults(defineProps<BCardBodyProps>(), {
  bodyTag: 'div',
  overlay: false,
  titleTag: 'h4',
  subTitleTag: 'h4',
})

// TODO overlay is unused
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const overlayBoolean = useBooleanish(toRef(props, 'overlay'))

const classes = computed(() => ({
  [`text-${props.bodyTextVariant}`]: props.bodyTextVariant !== undefined,
  [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant !== undefined,
}))
</script>
