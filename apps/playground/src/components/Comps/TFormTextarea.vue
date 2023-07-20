<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BFormTextarea v-model="description" class="my-3" />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const description = ref('This is a description')
</script>
