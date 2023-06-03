<template>
  <div>
    <b-offcanvas v-model="showOffcanvas" title="Title" header-class="bg-success">
      content
    </b-offcanvas>    

    <b-button @click="showOffcanvas = !showOffcanvas">Toggle Offcanvas</b-button>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const showOffcanvas = ref(false)
</script>
