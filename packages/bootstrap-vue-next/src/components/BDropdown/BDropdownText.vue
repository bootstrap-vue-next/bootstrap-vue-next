<template>
  <li role="presentation">
    <span class="dropdown-item-text" v-bind="$attrs">
      <slot>
        {{ text }}
      </slot>
    </span>
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
