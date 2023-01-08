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
})
</script>
