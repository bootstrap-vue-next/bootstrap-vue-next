<template>
  <component :is="props.tag" class="card-subtitle mb-2" :class="computedClasses">
    <slot>
      {{ props.text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import type {BCardSubtitleProps, BCardSubtitleSlots} from '../../types'
import {useColorVariantClasses} from '../../composables/useColorVariantClasses'
import {useDefaults} from '../../composables/useDefaults'

const _props = withDefaults(defineProps<BCardSubtitleProps>(), {
  tag: 'h6',
  text: undefined,
  textVariant: 'body-secondary',
})
const props = useDefaults(_props, 'BCardSubtitle')
defineSlots<BCardSubtitleSlots>()

const computedClasses = useColorVariantClasses(props)
</script>
