<template>
  <component :is="subTitleTag" class="card-subtitle mb-2" :class="classes">
    <slot>
      {{ subTitle }}
    </slot>
  </component>
</template>

<script setup lang="ts">
// import type {BCardSubtitleProps} from '../../types/components'
import type {TextColorVariant} from '../../types'
import {computed} from 'vue'

interface BCardSubtitleProps {
  subTitle?: string
  subTitleTag?: string
  subTitleTextVariant?: TextColorVariant
}

const props = withDefaults(defineProps<BCardSubtitleProps>(), {
  subTitleTag: 'h6',
  subTitleTextVariant: 'muted',
})

const classes = computed(() => ({
  [`text-${props.subTitleTextVariant}`]: props.subTitleTextVariant,
}))
</script>
