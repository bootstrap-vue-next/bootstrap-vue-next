<template>
  <b-input-group-addon :id="id" :is-text="isTextBoolean" :tag="tag" :append="false">
    <slot />
  </b-input-group-addon>
</template>

<script setup lang="ts">
// import type {BInputGroupPrependProps} from '../../types/components'
import BInputGroupAddon from './BInputGroupAddon.vue'
import {toRef} from 'vue'
import {useBooleanish} from '../../composables'
import type {Booleanish} from '../../types'

interface BInputGroupPrependProps {
  id?: string
  isText?: Booleanish
  tag?: string
}

const props = withDefaults(defineProps<BInputGroupPrependProps>(), {
  tag: 'div',
  isText: false,
})

const isTextBoolean = useBooleanish(toRef(props, 'isText'))
</script>
