<template>
  <div>
    {{ msg }}
  </div>
</template>
<script setup>
import { ref } from 'vue';
const msg = ref('Comp');
</script>
