<template>
  <b-input-group-addon v-bind="computedAttrs">
    <slot />
  </b-input-group-addon>
</template>

<script setup lang="ts">
// import type {BInputGroupAppendProps} from '../../types/components'
import BInputGroupAddon from './BInputGroupAddon.vue'
import {computed} from 'vue'
import type {Booleanish} from '../../types'

interface BInputGroupAppendProps {
  id?: string
  isText?: Booleanish
  tag?: string
}

const props = withDefaults(defineProps<BInputGroupAppendProps>(), {
  tag: 'div',
  isText: false,
})

const computedAttrs = computed(() => ({
  id: props.id,
  isText: props.isText,
  tag: props.tag,
  append: true,
}))
</script>
