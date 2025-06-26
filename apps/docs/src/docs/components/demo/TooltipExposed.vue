<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <BButton
        id="tooltip-expose"
        variant="primary"
        >I have a tooltip</BButton
      >
    </div>

    <div class="p-2">
      <BButton
        class="mx-2"
        @click="show"
        >Show</BButton
      >
      <BButton
        class="mx-2"
        @click="hide"
        >Hide</BButton
      >
      <BButton
        class="mx-2"
        @click="toggle"
        >Toggle</BButton
      >

      <BTooltip
        ref="myTooltip"
        v-model="model"
        target="tooltip-expose"
        title="Tooltip"
      >
        Hello <strong>World!</strong>
      </BTooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {BTooltip} from 'bootstrap-vue-next/components/BTooltip'
const myTooltip = ref<InstanceType<typeof BTooltip> | null>(null)
const show = () => myTooltip.value?.show()
const hide = () => myTooltip.value?.hide()
const toggle = () => myTooltip.value?.toggle()
const model = ref(false)
</script>
