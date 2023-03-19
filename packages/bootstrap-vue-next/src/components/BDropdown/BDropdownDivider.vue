<template>
  <li role="presentation">
    <component :is="tag" class="dropdown-divider" role="separator" aria-orientation="horizontal" />
  </li>
</template>

<script setup lang="ts">
interface BDropdownDividerProps {
  tag?: string
}

withDefaults(defineProps<BDropdownDividerProps>(), {
  tag: 'hr',
})
</script>
