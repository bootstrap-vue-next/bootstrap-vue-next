<template>
  <li role="presentation">
    <p class="px-4 py-1 mb-0 text-body-secondary">
      <slot>
        {{ text }}
      </slot>
    </p>
  </li>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string
  }>(),
  {
    text: '',
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
