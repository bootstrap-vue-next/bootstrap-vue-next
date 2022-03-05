<template>
  <thead role="rowgroup" :class="classes">
    <slot />
  </thead>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
  headVariant: {type: String},
})

const classes = computed(() => ({
  [`table-${props.headVariant}`]: props.headVariant,
}))
</script>
