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
import {computed} from 'vue'
import BCardTitle from './BCardTitle.vue'
import BCardSubTitle from './BCardSubTitle.vue'
import type {Booleanish, ColorVariant, TextColorVariant} from '../../types'
import {resolveBooleanish} from '../../utils'

interface BCardBodyProps {
  bodyBgVariant?: ColorVariant
  bodyClass?: Array<unknown> | Record<string, unknown> | string
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
const overlayBoolean = computed<boolean>(() => resolveBooleanish(props.overlay))

const classes = computed(() => ({
  [`text-${props.bodyTextVariant}`]: props.bodyTextVariant,
  [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant,
}))
</script>
