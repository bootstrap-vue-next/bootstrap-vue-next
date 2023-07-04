<template>
  <BPopover ref="popover" tooltip>
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </BPopover>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import BPopover from './BPopover.vue'

const popover = ref<null | InstanceType<typeof BPopover>>(null)

defineExpose({
  hide: popover.value.hide,
  show: popover.value.show,
  toggle: popover.value.toggle,
})
</script>
