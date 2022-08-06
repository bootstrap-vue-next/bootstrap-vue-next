<template>
  <tbody role="rowgroup" :class="classes">
    <slot />
  </tbody>
</template>

<script setup lang="ts">
// import type {BTBodyProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {resolveBooleanish} from '../../utils'
import {computed} from 'vue'

interface BTBodyProps {
  headVariant?: Booleanish
}

const props = withDefaults(defineProps<BTBodyProps>(), {
  headVariant: false,
})

const headVariantBoolean = computed<boolean>(() => resolveBooleanish(props.headVariant))

const classes = computed(() => ({
  // TODO this doesn't look right thead-false?
  // This also goes for BTfoot
  // BThead is string, not boolean. That is probably correct
  [`thead-${props.headVariant}`]: headVariantBoolean.value,
}))
</script>
