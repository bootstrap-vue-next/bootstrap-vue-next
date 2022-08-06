<template>
  <tfoot role="rowgroup" :class="classes">
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
// import type {BTfootProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {resolveBooleanish} from '../../utils'
import {computed} from 'vue'

interface BTfootProps {
  // TODO BThead is string
  footVariant?: Booleanish
}

const props = defineProps<BTfootProps>()

const footVariantBoolean = computed<boolean | undefined>(() =>
  props.footVariant !== undefined ? resolveBooleanish(props.footVariant) : undefined
)

const classes = computed(() => ({
  [`table-${props.footVariant}`]: footVariantBoolean.value,
}))
</script>
