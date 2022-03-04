<template>
  <tfoot role="rowgroup" :class="classes">
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
  footVariant: {type: String},
})

const classes = computed(() => ({
  [`table-${props.footVariant}`]: props.footVariant,
}))
</script>
