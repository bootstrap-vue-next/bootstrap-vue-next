<template>
  <component :is="tag" :id="id" :class="computedClasses">
    <slot>
      {{ text }}
    </slot>
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
  text?: string
  textVariant?: TextColorVariant
}

const props = withDefaults(defineProps<BFormTextProps>(), {
  inline: false,
  tag: 'small',
  textVariant: 'muted',
})

const inlineBoolean = useBooleanish(toRef(props, 'inline'))

const computedClasses = computed(() => [
  [`text-${props.textVariant}`],
  {
    'form-text': !inlineBoolean.value,
  },
])
</script>
