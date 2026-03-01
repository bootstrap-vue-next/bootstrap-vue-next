<template>
  <BContainer>
    <BRow>
      <BCol>
        <BLink to="/test">test</BLink>
        <BLink to="/">home</BLink>
        <RouterView />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {BCol, BContainer, BRow} from './components'
</script>
