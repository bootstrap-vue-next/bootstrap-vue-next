<template>
  <b-input-group-text v-if="isTextBoolean">
    <slot />
  </b-input-group-text>
  <slot v-else />
</template>

<script setup lang="ts">
// import type {BInputGroupAddonProps} from '../../types/components'
import {toRef} from 'vue'
import {useBooleanish} from '../../composables'
import type {Booleanish} from '../../types'
import BInputGroupText from './BInputGroupText.vue'

interface BInputGroupAddonProps {
  isText?: Booleanish
}

const props = withDefaults(defineProps<BInputGroupAddonProps>(), {
  isText: false,
})

const isTextBoolean = useBooleanish(toRef(props, 'isText'))
</script>
