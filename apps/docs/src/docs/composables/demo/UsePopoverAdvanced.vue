<template>
  <BButton id="advanced-popover-target" @click="showAdvancedPopover">
    Toggle advanced popover
  </BButton>
</template>

<script setup lang="ts">
import { h, markRaw } from 'vue'
import { BButton } from 'bootstrap-vue-next/components/BButton'
import { usePopover } from 'bootstrap-vue-next/composables/usePopover'

const { popover } = usePopover()

const showAdvancedPopover = async () => {
  await using _ = await popover({
    slots: {
      default: (scope) => markRaw(h('div', null, `Custom content - Visible: ${scope.visible}`)),
    },
    target: 'advanced-popover-target',
    title: 'Advanced Popover',
  }).show()
}
</script>
