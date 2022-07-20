<template>
  <component :is="tag" :class="classes" v-bind="attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BFormTextProps} from '../../types/components'
import {computed} from 'vue'
import type {TextColorVariant} from '../../types'

interface BFormTextProps {
  id?: string
  inline?: boolean
  tag?: string
  textVariant?: TextColorVariant
}

const props = withDefaults(defineProps<BFormTextProps>(), {
  inline: false,
  tag: 'small',
  textVariant: 'muted',
})

const classes = computed(() => ({
  'form-text': !props.inline,
  [`text-${props.textVariant}`]: props.textVariant,
}))

const attrs = computed(() => ({
  id: props.id || null,
}))
</script>
