<template>
  <tfoot role="rowgroup" :class="classes">
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
// import type {BTfootProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'
import {computed, Ref, toRef} from 'vue'

interface BTfootProps {
  // TODO BThead is string
  footVariant?: Booleanish
}

const props = defineProps<BTfootProps>()

const footVariantBoolean =
  props.footVariant !== undefined
    ? useBooleanish(toRef(props, 'footVariant') as Ref<Booleanish>)
    : computed(() => undefined)

const classes = computed(() => ({
  [`table-${props.footVariant}`]: footVariantBoolean.value,
}))
</script>
