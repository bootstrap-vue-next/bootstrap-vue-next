<template>
  <b-input-group-addon :is-text="isText">
    <slot />
  </b-input-group-addon>
</template>

<script setup lang="ts">
// import type {BInputGroupAppendProps} from '../../types/components'
import BInputGroupAddon from './BInputGroupAddon.vue'
import type {Booleanish} from '../../types'

interface BInputGroupAppendProps {
  isText?: Booleanish
}

withDefaults(defineProps<BInputGroupAppendProps>(), {
  isText: false,
})
</script>
