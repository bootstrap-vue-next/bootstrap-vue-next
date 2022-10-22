<template>
  <ul class="navbar-nav" :class="computedClasses">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import type {Alignment, Booleanish} from '../../types'
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'

interface Props {
  align?: Alignment
  fill?: Booleanish
  justified?: Booleanish
  small?: Booleanish
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  fill: false,
  justified: false,
  small: false,
  tag: 'ul',
})

const fillBoolean = useBooleanish(toRef(props, 'fill'))
const justifiedBoolean = useBooleanish(toRef(props, 'justified'))
const smallBoolean = useBooleanish(toRef(props, 'small'))

const computedClasses = computed(() => ({
  'nav-fill': fillBoolean.value,
  'nav-justified': justifiedBoolean.value,
  [`justify-content-${props.align}`]: props.align !== undefined,
  'small': smallBoolean.value,
}))
</script>
