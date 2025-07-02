<template>
  <BCard
    header="Card header"
    footer="Card footer"
  >
    <BImg
      thumbnail
      rounded="circle"
      src="https://picsum.photos/72/72/?image=58"
      alt="Image"
      class="d-inline"
    />
    <p class="d-inline align-top mb-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <BOverlay
      :show="show"
      no-wrap
    />
  </BCard>
  <BButton
    class="mt-3"
    @click="show = !show"
    >Toggle overlay</BButton
  >
</template>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
