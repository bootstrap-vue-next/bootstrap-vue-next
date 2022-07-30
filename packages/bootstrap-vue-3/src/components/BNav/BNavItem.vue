<template>
  <li class="nav-item" :class="classes">
    <b-link
      :href="href"
      :to="to"
      class="nav-link"
      :class="classes"
      :tabindex="disabled ? -1 : undefined"
      :aria-disabled="disabled ? true : undefined"
    >
      <slot />
    </b-link>
  </li>
</template>

<script setup lang="ts">
// import type {BNavItemProps} from '../types/components'
import {computed} from 'vue'
import {RouteLocationRaw} from 'vue-router'
import BLink from '../BLink/BLink.vue'

interface BNavItemProps {
  active?: boolean
  disabled?: boolean
  href?: string
  to?: RouteLocationRaw
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
