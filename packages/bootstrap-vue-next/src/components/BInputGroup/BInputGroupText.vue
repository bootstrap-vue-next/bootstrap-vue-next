<template>
  <component :is="tag" class="input-group-text">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
interface BInputGroupTextProps {
  tag?: string
  text?: string
}

withDefaults(defineProps<BInputGroupTextProps>(), {
  tag: 'div',
  text: undefined,
})
</script>
