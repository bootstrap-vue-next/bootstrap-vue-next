<template>
  <tbody role="rowgroup" :class="classes">
    <slot />
  </tbody>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
  headVariant: {type: Boolean, default: false},
})

const classes = computed(() => ({
  [`thead-${props.headVariant}`]: props.headVariant,
}))
</script>
