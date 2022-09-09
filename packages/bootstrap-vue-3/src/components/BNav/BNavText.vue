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

defineProps<BNavTextProps>()
</script>
