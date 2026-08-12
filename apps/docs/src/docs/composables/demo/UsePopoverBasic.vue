<template>
  <BButton id="popover-basic-target" @click="showPopover"> Toggle popover </BButton>
</template>

<script setup lang="ts">
import { BButton } from 'bootstrap-vue-next/components/BButton'
import { usePopover } from 'bootstrap-vue-next/composables/usePopover'

const { popover } = usePopover()

const showPopover = async () => {
  await using _ = await popover({
    title: 'Hello World!',
    body: 'This is a popover.',
    target: 'popover-basic-target',
  }).show()
}
</script>
