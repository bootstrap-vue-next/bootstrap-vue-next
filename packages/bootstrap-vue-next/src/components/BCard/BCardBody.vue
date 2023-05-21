<template>
  <component :is="bodyTag" class="card-body" :class="computedClasses">
    <b-card-title v-if="!!title || hasTitleSlot" :tag="titleTag">
      <slot name="title">
        {{ title }}
      </slot>
    </b-card-title>

    <b-card-subtitle
      v-if="!!subtitle || hasSubtitleSlot"
      :tag="subtitleTag"
      :text-variant="subtitleTextVariant"
    >
      <slot name="subtitle">
        {{ subtitle }}
      </slot>
    </b-card-subtitle>

    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {computed, toRef, useSlots} from 'vue'
import BCardTitle from './BCardTitle.vue'
import {isEmptySlot} from '../../utils'
import BCardSubtitle from './BCardSubtitle.vue'
import type {Booleanish, ColorVariant, TextColorVariant} from '../../types'
import {useBooleanish} from '../../composables'

interface BCardBodyProps {
  bodyBgVariant?: ColorVariant | null
  bodyTag?: string
  bodyTextVariant?: TextColorVariant | null
  overlay?: Booleanish
  subtitle?: string
  subtitleTag?: string
  subtitleTextVariant?: TextColorVariant | null
  title?: string
  titleTag?: string
  text?: string
}

const props = withDefaults(defineProps<BCardBodyProps>(), {
  bodyTag: 'div',
  overlay: false,
  titleTag: 'h4',
  subtitleTag: 'h4',
  bodyBgVariant: null,
  bodyTextVariant: null,
  subtitleTextVariant: undefined,
  subtitle: undefined,
  title: undefined,
  text: undefined,
})

const slots = useSlots()

const overlayBoolean = useBooleanish(toRef(props, 'overlay'))

const hasTitleSlot = computed<boolean>(() => !isEmptySlot(slots.title))
const hasSubtitleSlot = computed<boolean>(() => !isEmptySlot(slots.subtitle))

const computedClasses = computed(() => ({
  'card-img-overlay': overlayBoolean.value,
  [`text-${props.bodyTextVariant}`]: props.bodyTextVariant !== null,
  [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant !== null,
}))
</script>
