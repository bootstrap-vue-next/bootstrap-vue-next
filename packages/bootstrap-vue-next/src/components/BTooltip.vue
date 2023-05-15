<template>
  <b-popover tooltip>
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </b-popover>
</template>

<script setup lang="ts">
import BPopover from './BPopover.vue'
</script>
