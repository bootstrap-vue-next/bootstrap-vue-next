<template>
  <tbody role="rowgroup" :class="classes">
    <slot />
  </tbody>
</template>

<script setup lang="ts">
// import type {BTBodyProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'
import {computed, toRef} from 'vue'

interface BTBodyProps {
  headVariant?: Booleanish
}

const props = withDefaults(defineProps<BTBodyProps>(), {
  headVariant: false,
})

const headVariantBoolean = useBooleanish(toRef(props, 'headVariant'))

const classes = computed(() => ({
  // TODO this doesn't look right thead-false?
  // This also goes for BTfoot
  // BThead is string, not boolean. That is probably correct
  [`thead-${props.headVariant}`]: headVariantBoolean.value,
}))
</script>
