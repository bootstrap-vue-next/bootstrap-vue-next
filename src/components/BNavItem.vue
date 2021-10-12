<template>
  <li class="nav-item" :class="classes">
    <a
      :href="href"
      class="nav-link"
      :tabindex="disabled ? -1 : null"
      :aria-disabled="disabled ? true : null"
    >
      <slot />
    </a>
  </li>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BNavItem',
  props: {
    active: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    href: {type: String, required: false},
  },
  setup(props) {
    const classes = computed(() => ({
      active: props.active,
      disabled: props.disabled,
    }))

    return {
      classes,
    }
  },
})
</script>
