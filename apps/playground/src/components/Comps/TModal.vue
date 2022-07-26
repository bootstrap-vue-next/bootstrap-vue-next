<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-button @click="showModal = !showModal">Toggle modal v-model</b-button>
        {{ showModal }}
        <!-- <b-button v-b-modal:exampleModal>Launch demo modal</b-button> -->
        <b-modal id="exampleModal" v-model="showModal" size="xl" title="Modal title" fade
          >...</b-modal
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const showModal = ref(false)
</script>
