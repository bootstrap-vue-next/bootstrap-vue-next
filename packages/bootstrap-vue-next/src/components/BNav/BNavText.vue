<template>
  <li class="navbar-text">
    <slot>
      {{ props.text }}
    </slot>
  </li>
</template>

<script setup lang="ts">
import type {BNavTextProps, BNavTextSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'

const _props = withDefaults(defineProps<BNavTextProps>(), {text: undefined})
const props = useDefaults(_props, 'BNavText')
defineSlots<BNavTextSlots>()
</script>
