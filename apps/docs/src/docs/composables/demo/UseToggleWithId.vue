<template>
  <BButton @click="show()">Click me</BButton>
  <BModal
    v-if="someConditions"
    id="my-modal"
    v-model="programmaticModal"
  >
    <BButton @click="hide()">Hide me</BButton>
  </BModal>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {BButton, BModal, useToggle} from 'bootstrap-vue-next'

const someConditions = ref(false)
const programmaticModal = ref(false)

onMounted(() => {
  someConditions.value = true
})

const {show, hide} = useToggle('my-modal')
</script>
