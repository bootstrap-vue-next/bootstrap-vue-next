<template>
  <BButton @click="preventableModal = !preventableModal"> Toggle modal </BButton>

  <BModal
    v-model="preventableModal"
    title="Hello, World!"
    @hide="preventFn"
  >
    Foobar?
    <BFormCheckbox v-model="preventModal">Prevent close</BFormCheckbox>
  </BModal>
</template>

<script setup lang="ts">
import type {BvTriggerableEvent} from 'bootstrap-vue-next'
import {ref} from 'vue'

const preventableModal = ref(false)
const preventModal = ref(true)
const preventFn = (e: BvTriggerableEvent) => {
  if (preventModal.value) e.preventDefault()
}
</script>
