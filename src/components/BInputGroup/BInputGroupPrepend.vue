<template>
  <b-input-group-addon :id="id" :is-text="isText" :tag="tag" :append="false">
    <slot />
  </b-input-group-addon>
</template>

<script setup lang="ts">
// import type {BInputGroupPrependProps} from '../../types/components'
import BInputGroupAddon from './BInputGroupAddon.vue'

interface BInputGroupPrependProps {
  id?: string
  isText?: boolean
  tag?: string
}

withDefaults(defineProps<BInputGroupPrependProps>(), {
  tag: 'div',
})
</script>
