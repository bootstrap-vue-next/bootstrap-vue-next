<template>
  <BContainer>
    <BRow>
      <BCol>
        <b-form-rating v-model="value"></b-form-rating>
        <p class="mt-2">Value: {{ value }}</p>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {BCol, BContainer, BRow} from './components'
import {ref} from 'vue'

const value = ref(1)
</script>
