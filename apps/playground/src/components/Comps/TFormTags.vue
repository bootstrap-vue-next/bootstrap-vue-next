<template>
  <BContainer fluid >
    <BRow class="pt-3">
      <BCol>
        <h2>Basic usage</h2>

        <BFormTags v-model="formTagsBasic" separator="," />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const formTagsBasic = ref<string[]>(['apple', 'orange']);
</script>
