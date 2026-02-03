<template>
  <BButton @click="showRoundedEx = !showRoundedEx">Toggle overlay</BButton>

  <BRow class="text-center mt-3">
    <BCol md="6">
      <p>With rounding</p>
      <BOverlay
        :show="showRoundedEx"
        class="d-inline-block"
        rounded="circle"
      >
        <BImg
          thumbnail
          rounded="circle"
          fluid
          src="https://picsum.photos/200/200/?image=54"
          alt="Image 1"
        />
      </BOverlay>
    </BCol>

    <BCol md="6">
      <p>Without rounding</p>
      <BOverlay
        :show="showRoundedEx"
        class="d-inline-block"
      >
        <BImg
          thumbnail
          rounded="circle"
          fluid
          src="https://picsum.photos/200/200/?image=54"
          alt="Image 1"
        />
      </BOverlay>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const showRoundedEx = ref(false)
</script>
