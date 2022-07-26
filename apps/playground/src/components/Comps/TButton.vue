<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-button v-model:pressed="buttonIsPressed" variant="primary" class="mt-3"
          >Toggle Me</b-button
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        Pressed State:
        <strong>{{ buttonIsPressed }}</strong>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const buttonIsPressed = ref(false)
</script>
