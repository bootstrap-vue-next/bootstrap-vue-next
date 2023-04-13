<template>
  <b-container fluid >
    <b-row class="pt-3">
      <b-col>
        <h2>Basic usage</h2>

        <b-form-tags v-model="formTagsBasic" separator="," />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const formTagsBasic = ref<string[]>(['apple', 'orange']);
</script>
