<template>
  <slot v-if="loadingBoolean" name="loading" />
  <slot v-else />
</template>

<script setup lang="ts">
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'
import {toRef} from 'vue'

interface BPlaceholderWrapperProps {
  loading?: Booleanish
}

const props = withDefaults(defineProps<BPlaceholderWrapperProps>(), {
  loading: false,
})

const loadingBoolean = useBooleanish(toRef(props, 'loading'))
</script>
