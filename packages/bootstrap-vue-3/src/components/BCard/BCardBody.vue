<template>
  <component :is="bodyTag" class="card-body" :class="classes">
    <b-card-title v-if="!!title || $slots.title" :tag="titleTag">
      <slot name="title">
        {{ title }}
      </slot>
    </b-card-title>

    <b-card-subtitle
      v-if="!!subtitle || !!$slots.subtitle"
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
// import type {BCardBodyProps} from '../../types/components'
import {computed, toRef} from 'vue'
import BCardTitle from './BCardTitle.vue'
import BCardSubtitle from './BCardSubtitle.vue'
import type {Booleanish, ColorVariant, TextColorVariant} from '../../types'
import {useBooleanish} from '../../composables'

interface BCardBodyProps {
  bodyBgVariant?: ColorVariant
  bodyTag?: string
  bodyTextVariant?: TextColorVariant
  overlay?: Booleanish
  subtitle?: string
  subtitleTag?: string
  subtitleTextVariant?: TextColorVariant
  title?: string
  titleTag?: string
  text?: string
}

const props = withDefaults(defineProps<BCardBodyProps>(), {
  bodyTag: 'div',
  overlay: false,
  titleTag: 'h4',
  subtitleTag: 'h4',
})

const overlayBoolean = useBooleanish(toRef(props, 'overlay'))

const classes = computed(() => ({
  'card-img-overlay': overlayBoolean.value,
  [`text-${props.bodyTextVariant}`]: props.bodyTextVariant !== undefined,
  [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant !== undefined,
}))
</script>
