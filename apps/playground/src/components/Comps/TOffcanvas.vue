<template>
  <div>
    <BOffcanvas v-model="showOffcanvas" title="Title">
      content
    </BOffcanvas>    

    <BButton @click="showOffcanvas = !showOffcanvas">Toggle Offcanvas</BButton>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const showOffcanvas = ref(false)
</script>
