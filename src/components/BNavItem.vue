<template>
  <li class="nav-item" :class="classes">
    <a
      :href="href"
      class="nav-link"
      :tabindex="disabled ? -1 : undefined"
      :aria-disabled="disabled ? true : undefined"
    >
      <slot />
    </a>
  </li>
</template>

<script setup lang="ts">
// import type {BNavItemProps} from '../types/components'
import {computed} from 'vue'

interface BNavItemProps {
  active?: boolean
  disabled?: boolean
  href?: string
}

const props = withDefaults(defineProps<BNavItemProps>(), {
  active: false,
  disabled: false,
})

const classes = computed(() => ({
  active: props.active,
  disabled: props.disabled,
}))
</script>
