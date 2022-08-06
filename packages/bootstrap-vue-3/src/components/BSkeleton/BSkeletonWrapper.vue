<template>
  <slot v-if="loadingBoolean" name="loading" />
  <slot v-else />
</template>

<script setup lang="ts">
// import type {BSkeletonWrapperProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {resolveBooleanish} from '../../utils'
import {computed} from 'vue'

interface BSkeletonWrapperProps {
  loading?: Booleanish
}

const props = withDefaults(defineProps<BSkeletonWrapperProps>(), {
  loading: false,
})

const loadingBoolean = computed<boolean>(() => resolveBooleanish(props.loading))
</script>
