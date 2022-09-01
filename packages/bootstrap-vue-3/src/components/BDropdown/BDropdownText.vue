<template>
  <li role="presentation">
    <p class="px-4 py-1 mb-0 text-muted">
      <slot>
        {{ text }}
      </slot>
    </p>
  </li>
</template>

<script setup lang="ts">
interface BDropdownTextProps {
  text?: string
}

withDefaults(defineProps<BDropdownTextProps>(), {
  text: '',
})
</script>
