<template>
  <div class="my-2">
    <label>Individual radios</label>
  </div>

  <div>
    <BFormRadio v-model="selected" name="some-radios" value="A">Option A </BFormRadio>
    <BFormRadio v-model="selected" name="some-radios" value="B">Option B </BFormRadio>
  </div>

  <div class="mt-3">
    Selected: <strong>{{ selected }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const selected = ref()
</script>
