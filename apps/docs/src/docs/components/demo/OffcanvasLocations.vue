<template>
  <BButton
    class="m-2"
    @click="click('start')"
    >Show start</BButton
  >
  <BButton
    class="m-2"
    @click="click('end')"
    >Show end</BButton
  >
  <BButton
    class="m-2"
    @click="click('bottom')"
    >Show bottom</BButton
  >
  <BButton
    class="m-2"
    @click="click('top')"
    >Show top</BButton
  >

  <BOffcanvas
    v-model="show"
    :placement="placement"
  />
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type {Placement} from 'bootstrap-vue-next'

const show = ref(false)
const placement = ref<Placement>('start')

const click = (place: Placement = 'start') => {
  placement.value = place
  show.value = !show.value
}
</script>
