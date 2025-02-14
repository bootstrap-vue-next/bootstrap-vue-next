<!-- eslint-disable vue/no-deprecated-v-bind-sync -->
<template>
  <!-- #region template -->
  <BFormCheckbox v-model="checked" :indeterminate.sync="indeterminate"
    >Click me to see what happens</BFormCheckbox
  >
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'
const checked = ref(false)
const indeterminate = ref(false)
</script>
