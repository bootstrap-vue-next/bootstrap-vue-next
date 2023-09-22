<template>
  <component :is="tag" class="card-body" :class="computedClasses">
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
import {computed, toRef, useSlots} from 'vue'
import BCardTitle from './BCardTitle.vue'
import {isEmptySlot} from '../../utils'
import BCardSubtitle from './BCardSubtitle.vue'
import type {BackgroundColorExtendables, Booleanish, TextColorVariant} from '../../types'
import {useBackgroundVariant, useBooleanish} from '../../composables'

const props = withDefaults(
  defineProps<
    {
      tag?: string
      overlay?: Booleanish
      subtitle?: string
      subtitleTag?: string
      subtitleTextVariant?: TextColorVariant | null
      title?: string
      titleTag?: string
      text?: string
    } & BackgroundColorExtendables
  >(),
  {
    variant: null,
    tag: 'div',
    overlay: false,
    titleTag: 'h4',
    subtitleTag: 'h4',
    bgVariant: null,
    textVariant: null,
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
const resolvedBackgroundClasses = useBackgroundVariant(props)

const hasTitleSlot = toRef(() => !isEmptySlot(slots.title))
const hasSubtitleSlot = toRef(() => !isEmptySlot(slots.subtitle))

const computedClasses = computed(() => [
  resolvedBackgroundClasses.value,
  {
    'card-img-overlay': overlayBoolean.value,
  },
])
</script>
