<template>
  <BFormTextarea
    id="textarea"
    ref="textArea"
    v-model="textSelectEx"
    placeholder="Enter something..."
    rows="3"
  />

  <button class="btn btn-primary mt-1" @click="selectText">Select text</button>
</template>

<script setup lang="ts">
import type {BFormTextarea} from 'bootstrap-vue-next'
import {ref} from 'vue'

const textSelectEx = ref('')
const textArea = ref<InstanceType<typeof BFormTextarea> | null>(null)

const selectText = () => {
  textArea?.value?.element?.select()
}
</script>
