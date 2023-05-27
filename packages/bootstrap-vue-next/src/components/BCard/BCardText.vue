<template>
  <component :is="tag" class="card-text">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
interface BCardTextProps {
  text?: string
  tag?: string
}

withDefaults(defineProps<BCardTextProps>(), {
  tag: 'p',
  text: undefined,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
