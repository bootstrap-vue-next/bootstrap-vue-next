<template>
  <component :is="tag" :id="id" class="d-flex" :class="computedClasses">
    <b-input-group-text v-if="isText">
      <slot></slot>
    </b-input-group-text>
    <slot v-if="!isText" />
  </component>
</template>

<script setup lang="ts">
// import type {BInputGroupAddonProps} from '../../types/components'
import {computed} from 'vue'
import BInputGroupText from './BInputGroupText.vue'

interface BInputGroupAddonProps {
  append?: boolean
  id?: string
  isText?: boolean
  tag?: string
}

const props = withDefaults(defineProps<BInputGroupAddonProps>(), {
  append: false,
  tag: 'div',
})

const computedClasses = computed(() => ({
  'input-group-append': props.append,
  'input-group-prepend': !props.append,
}))
</script>
