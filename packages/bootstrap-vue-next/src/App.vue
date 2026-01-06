<template>
  <BContainer>
    <BRow>
      <BCol>
        <BTable :items="item1" :primary-key="(o) => o.id" />
        <BTable :items="item1" :primary-key="'id'" />
        <BTable :items="item2" />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {ref} from 'vue'
import {BCol, BContainer, BRow} from './components'

const item1 = ref([{id: '1', foo: '3'}, {id: '2'}])
const item2 = ref([1, 2, 3, 4])
</script>
