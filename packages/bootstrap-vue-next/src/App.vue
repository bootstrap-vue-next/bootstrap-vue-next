<template>
  <BContainer>
    <BRow>
      <BCol>
        <BButton @click="showModal">Modal button</BButton>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {BButton, BCol, BContainer, BRow} from './components'
import {useModal} from './composables'

const modal = useModal()

const showModal = async () => {
  await modal.create({title: 'Hello World!'}).show()
}
</script>

