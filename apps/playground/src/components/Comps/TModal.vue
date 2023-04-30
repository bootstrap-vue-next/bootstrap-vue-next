<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-button @click="showModal = !showModal">Toggle modal v-model</b-button>
        <b-button v-b-toggle.exampleModal>Toggle with v-b-toggle directive</b-button>
        <b-button v-b-modal.exampleModal>Toggle with v-b-modal directive</b-button>
        {{ showModal }}
        <!-- <b-button v-b-modal:exampleModal>Launch demo modal</b-button> -->
        <b-modal
          id="exampleModal"
          v-model="showModal"
          :no-close-on-backdrop="noClose"
          size="xl"
          title="Modal title"
          fade
          >...</b-modal
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <BModal
          v-model="isModalVisible"
          :no-close-on-esc="noClose"
          :no-close-on-backdrop="noClose"
          title="My Modal"
        >
          abc
        </BModal>

        <BButton @click="isModalVisible = true">Show Modal</BButton>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-modal v-model="showModal2">
          <b-button @click="showModal3 = true">Click me</b-button>
          <b-modal v-model="showModal3" />
        </b-modal>
        <b-button @click="showModal2 = true">Show Modal</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>noClose is {{ noClose }}</div>
        <BButton @click="noClose = true">Set noClose = true</BButton>
        <BButton @click="noClose = false">Set noClose = false</BButton>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const showModal = ref(false)
const showModal2 = ref(false)
const showModal3 = ref(false)

const noClose = ref(true)
const isModalVisible = ref(false)
</script>
