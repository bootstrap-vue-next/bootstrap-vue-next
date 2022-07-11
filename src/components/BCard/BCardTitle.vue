<template>
  <component :is="titleTag" class="card-title">
    <slot>
      {{ title }}
    </slot>
  </component>
</template>

<script setup lang="ts">
// import type {BCardTitleProps} from '../../types/components'

interface BCardTitleProps {
  title?: string
  titleTag?: string
}

withDefaults(defineProps<BCardTitleProps>(), {
  titleTag: 'h4',
})
</script>
