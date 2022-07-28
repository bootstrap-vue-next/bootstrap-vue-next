<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-form-textarea v-model="description" class="my-3" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const description = ref('This is a description')
</script>
