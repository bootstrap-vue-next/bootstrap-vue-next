<template>
  <component :is="tag" class="card-subtitle mb-2" :class="classes">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
// import type {BCardSubtitleProps} from '../../types/components'
import type {TextColorVariant} from '../../types'
import {computed} from 'vue'

interface BCardSubtitleProps {
  text?: string
  tag?: string
  textVariant?: TextColorVariant
}

const props = withDefaults(defineProps<BCardSubtitleProps>(), {
  tag: 'h6',
  textVariant: 'muted',
})

const classes = computed(() => ({
  [`text-${props.textVariant}`]: !!props.textVariant,
}))
</script>
