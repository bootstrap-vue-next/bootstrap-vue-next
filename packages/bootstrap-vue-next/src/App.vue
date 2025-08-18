<template>
  <BContainer>
    <BRow>
      <BCol>
        <BTable
          :items="[
            {a: 1, b: 2},
            {a: 3, b: 4},
          ]"
          @head-clicked="(a) => console.log('head-clicked', a)"
        />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {BCol, BContainer, BRow, BTable} from './components'
</script>
