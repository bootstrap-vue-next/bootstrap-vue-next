<template>
  <component :is="tag" :class="classes" v-bind="attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BFormTextProps} from '../../types/components'
import {computed, toRef} from 'vue'
import type {Booleanish, TextColorVariant} from '../../types'
import {useBooleanish} from '../../composables'

interface BFormTextProps {
  id?: string
  inline?: Booleanish
  tag?: string
  textVariant?: TextColorVariant
}

const props = withDefaults(defineProps<BFormTextProps>(), {
  inline: false,
  tag: 'small',
  textVariant: 'muted',
})

const inlineBoolean = useBooleanish(toRef(props, 'inline'))

const classes = computed(() => ({
  'form-text': !inlineBoolean.value,
  [`text-${props.textVariant}`]: props.textVariant,
}))

const attrs = computed(() => ({
  id: props.id || null,
}))
</script>
