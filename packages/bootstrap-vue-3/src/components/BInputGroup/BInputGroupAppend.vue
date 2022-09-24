<template>
  <b-input-group-addon :is-text="isText">
    <slot />
  </b-input-group-addon>
</template>

<script setup lang="ts">
import type {Booleanish} from '../../types'
import BInputGroupAddon from './BInputGroupAddon.vue'

interface BInputGroupAppendProps {
  isText?: Booleanish
}

withDefaults(defineProps<BInputGroupAppendProps>(), {
  isText: false,
})
</script>
