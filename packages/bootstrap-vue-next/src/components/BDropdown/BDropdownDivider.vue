<template>
  <li role="presentation">
    <component :is="tag" class="dropdown-divider" role="separator" aria-orientation="horizontal" />
  </li>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tag?: string
  }>(),
  {
    tag: 'hr',
  }
)
</script>
