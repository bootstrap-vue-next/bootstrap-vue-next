<template>
  <li class="navbar-text">
    <slot>
      {{ text }}
    </slot>
  </li>
</template>

<script setup lang="ts">
interface BNavTextProps {
  text?: string
}

withDefaults(defineProps<BNavTextProps>(), {text: undefined})
</script>
