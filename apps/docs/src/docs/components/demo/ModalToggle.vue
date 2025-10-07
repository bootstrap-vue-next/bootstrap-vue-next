<template>
  <BButton @click="show()">Click me</BButton>
  <BModal
    id="toggle-modal"
    title="Modal Controlled by useToggle"
  >
    <BButton @click="hide()">Hide me</BButton>
  </BModal>
</template>

<script setup lang="ts">
import {useToggle} from 'bootstrap-vue-next'

const {show, hide} = useToggle('toggle-modal')
</script>
