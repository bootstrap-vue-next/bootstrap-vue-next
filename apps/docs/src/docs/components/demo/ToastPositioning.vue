<template>
  <template
    v-for="(pos, index) in values"
    :key="index"
  >
    <BButton @click="values[index] = !values[index]">
      {{ locations[index] }}
    </BButton>
    <Teleport to="body">
      <div
        :class="locations[index]"
        class="toast-container position-fixed p-3"
      >
        <BToast v-model="values[index]">
          <template #title> Title </template>
          {{ locations[index] }}
        </BToast>
      </div>
    </Teleport>
  </template>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const locations = [
  'top-0 start-0',
  'top-0 start-50 translate-middle-x',
  'top-0 end-0',
  'top-50 start-0 translate-middle-y',
  'top-50 start-50 translate-middle',
  'top-50 end-0 translate-middle-y',
  'bottom-0 start-0',
  'bottom-0 start-50 translate-middle-x',
  'bottom-0 end-0',
]

const values = ref(Array.from({length: locations.length}, () => false))
</script>
