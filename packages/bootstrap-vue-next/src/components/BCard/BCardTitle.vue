<template>
  <component :is="tag" class="card-title">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
// import type {BCardTitleProps} from '../../types/components'

interface BCardTitleProps {
  text?: string
  tag?: string
}

withDefaults(defineProps<BCardTitleProps>(), {
  tag: 'h4',
})
</script>
