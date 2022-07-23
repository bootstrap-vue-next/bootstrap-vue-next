<template>
  <div class="my-2">
    <h2>Modal</h2>
    <b-button @click="showModal = !showModal">Toggle modal v-model</b-button>
    {{ showModal }}
    <!-- <b-button v-b-modal:exampleModal>Launch demo modal</b-button> -->
    <b-modal id="exampleModal" v-model="showModal" size="xl" title="Modal title" fade>...</b-modal>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const showModal = ref(false)
</script>
