<template>
  <!-- #region template -->
  <div
    ref="container"
    class="overflow-auto border"
    style="height: 200px; width: 100%"
  >
    <div style="height: 400px; padding: 100px">
      <BPopover
        hover
        boundary="clippingAncestors"
        :boundary-padding="10"
        title="Constrained Popover"
      >
        <template #target>
          <BButton variant="primary">Scroll to see boundary</BButton>
        </template>
        This popover is constrained within its scrollable container
      </BPopover>
    </div>
  </div>
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'

const container = ref<HTMLElement | null>(null)
</script>
