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
import {computed, toRef} from 'vue'
import BCardTitle from './BCardTitle.vue'
import {isEmptySlot} from '../../utils'
import BCardSubtitle from './BCardSubtitle.vue'
import type {Booleanish, ColorExtendables, TextColorVariant} from '../../types'
import {useBooleanish, useColorVariantClasses} from '../../composables'

const props = withDefaults(
  defineProps<
    {
      overlay?: Booleanish
      subtitle?: string
      subtitleTag?: string
      subtitleTextVariant?: TextColorVariant | null
      tag?: string
      text?: string
      title?: string
      titleTag?: string
    } & ColorExtendables
  >(),
  {
    overlay: false,
    subtitle: undefined,
    subtitleTag: 'h4',
    subtitleTextVariant: undefined,
    tag: 'div',
    text: undefined,
    title: undefined,
    titleTag: 'h4',
    // ColorExtendables props
    bgVariant: null,
    textVariant: null,
    variant: null,
    // End ColorExtendables props
  }
)

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subtitle?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title?: (props: Record<string, never>) => any
}>()

const overlayBoolean = useBooleanish(() => props.overlay)
const resolvedBackgroundClasses = useColorVariantClasses(props)

const hasTitleSlot = toRef(() => !isEmptySlot(slots.title))
const hasSubtitleSlot = toRef(() => !isEmptySlot(slots.subtitle))

const computedClasses = computed(() => [
  resolvedBackgroundClasses.value,
  {
    'card-img-overlay': overlayBoolean.value,
  },
])
</script>
