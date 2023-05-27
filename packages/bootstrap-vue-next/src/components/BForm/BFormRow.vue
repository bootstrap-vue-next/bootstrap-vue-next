<template>
  <component :is="tag" class="row d-flex flex-wrap">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface BFormRowProps {
  tag?: string
}

withDefaults(defineProps<BFormRowProps>(), {
  tag: 'div',
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
