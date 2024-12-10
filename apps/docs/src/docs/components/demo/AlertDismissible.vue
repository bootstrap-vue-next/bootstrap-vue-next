<template>
  <BAlert v-model="showDismissibleAlert" dismissible>
    Dismissible Alert! Click the close button over there <b>&rArr;</b>
  </BAlert>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const showDismissibleAlert = ref(true)
</script>
