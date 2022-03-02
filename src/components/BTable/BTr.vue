<template>
  <tr role="row" :class="classes">
    <slot />
  </tr>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
  variant: {type: String},
})

const classes = computed(() => ({
  [`table-${props.variant}`]: props.variant,
}))
</script>
