<template>
  <component :is="tag" class="card-title">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
interface BCardTitleProps {
  text?: string
  tag?: string
}

withDefaults(defineProps<BCardTitleProps>(), {
  tag: 'h4',
  text: undefined,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
