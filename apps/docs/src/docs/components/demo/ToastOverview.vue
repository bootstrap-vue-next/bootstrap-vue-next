<template>
  <div
    class="p-3"
    style="
      min-height: 170px;
      background: repeating-linear-gradient(
        45deg,
        #f8f9fa 0px,
        #f8f9fa 10px,
        #e9ecef 10px,
        #e9ecef 20px
      );
    "
  >
    <BButton
      class="mb-2"
      @click="showToast"
    >
      Show Toast
    </BButton>
    <BToast
      v-model="show"
      variant="info"
      solid
    >
      <template #title> Example toast </template>
      This is a toast with a title.
    </BToast>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)

const showToast = () => {
  show.value = true
}
</script>
