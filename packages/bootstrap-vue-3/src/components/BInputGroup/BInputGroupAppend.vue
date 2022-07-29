<template>
  <b-input-group-addon :id="id" :is-text="isText" :tag="tag" append>
    <slot />
  </b-input-group-addon>
</template>

<script setup lang="ts">
// import type {BInputGroupAppendProps} from '../../types/components'
import BInputGroupAddon from './BInputGroupAddon.vue'

interface BInputGroupAppendProps {
  id?: string
  isText?: boolean
  tag?: string
}

withDefaults(defineProps<BInputGroupAppendProps>(), {
  tag: 'div',
})
</script>
