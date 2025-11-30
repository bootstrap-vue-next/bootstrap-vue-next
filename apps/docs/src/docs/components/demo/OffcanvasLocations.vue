<template>
  <BButton
    class="m-2"
    aria-controls="offcanvas-locations"
    :aria-expanded="show ? 'true' : 'false'"
    @click="click('start')"
    >Show start</BButton
  >
  <BButton
    class="m-2"
    aria-controls="offcanvas-locations"
    :aria-expanded="show ? 'true' : 'false'"
    @click="click('end')"
    >Show end</BButton
  >
  <BButton
    class="m-2"
    aria-controls="offcanvas-locations"
    :aria-expanded="show ? 'true' : 'false'"
    @click="click('bottom')"
    >Show bottom</BButton
  >
  <BButton
    class="m-2"
    aria-controls="offcanvas-locations"
    :aria-expanded="show ? 'true' : 'false'"
    @click="click('top')"
    >Show top</BButton
  >

  <BOffcanvas
    id="offcanvas-locations"
    v-model="show"
    :title="`Offcanvas ${placement}`"
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
