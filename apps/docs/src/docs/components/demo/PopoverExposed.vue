<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <BButton id="popover-expose" variant="primary">I have a popover</BButton>
    </div>

    <div class="p-2">
      <BButton class="mx-2" @click="show">Show</BButton>
      <BButton class="mx-2" @click="hide">Hide</BButton>
      <BButton class="mx-2" @click="toggle">Toggle</BButton>

      <BPopover ref="myPopover" v-model="model" target="popover-expose" title="Popover">
        Hello <strong>World!</strong>
      </BPopover>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type {BPopover} from 'bootstrap-vue-next'
const myPopover = ref<InstanceType<typeof BPopover> | null>(null)
const show = () => myPopover.value?.show()
const hide = () => myPopover.value?.hide()
const toggle = () => myPopover.value?.toggle()
const model = ref(false)
</script>
