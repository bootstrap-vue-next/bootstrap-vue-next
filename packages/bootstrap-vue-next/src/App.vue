<template>
  <b-form-input class="w-md me-2" />
  <b-alert dismissible="" close-variant="outline-danger" :model-value="true" />
  <b-form-checkbox v-model="active" switch @change="onActiveChange2()" />
  <b-button @click="show = !show">clic</b-button>
  <b-offcanvas v-model="show" />
  <b-form-radio-group
    id="btn-radios-2"
    button-variant="outline-primary"
    :options="[1, 2, 3]"
    size="lg"
    name="radio-btn-outline"
    buttons
  >
    <b-form-radio button-variant="danger"> foo </b-form-radio>
    <b-form-radio button-variant="secondary"> foo </b-form-radio>
  </b-form-radio-group>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {nextTick, ref} from 'vue'

const show = ref(false)

const active = ref(true)

function onActiveChange2() {
  console.log(`active 1 ${active.value}`)
  console.log(`active 2 ${active.value}`)
}
</script>
