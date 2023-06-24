<template>
  <component :is="bodyTag" class="card-body" :class="computedClasses">
    <BCardTitle v-if="!!title || hasTitleSlot" :tag="titleTag">
      <slot name="title">
        {{ title }}
      </slot>
    </BCardTitle>

    <BCardSubtitle
      v-if="!!subtitle || hasSubtitleSlot"
      :tag="subtitleTag"
      :text-variant="subtitleTextVariant"
    >
      <slot name="subtitle">
        {{ subtitle }}
      </slot>
    </BCardSubtitle>

    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {computed, useSlots} from 'vue'
import BCardTitle from './BCardTitle.vue'
import {isEmptySlot} from '../../utils'
import BCardSubtitle from './BCardSubtitle.vue'
import type {Booleanish, ColorVariant, TextColorVariant} from '../../types'
import {useBooleanish} from '../../composables'

const props = withDefaults(
  defineProps<{
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
  }>(),
  {
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
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subtitle?: (props: Record<string, never>) => any
}>()

const slots = useSlots()

const overlayBoolean = useBooleanish(() => props.overlay)

const hasTitleSlot = computed<boolean>(() => !isEmptySlot(slots.title))
const hasSubtitleSlot = computed<boolean>(() => !isEmptySlot(slots.subtitle))

const computedClasses = computed(() => ({
  'card-img-overlay': overlayBoolean.value,
  [`text-${props.bodyTextVariant}`]: props.bodyTextVariant !== null,
  [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant !== null,
}))
</script>
