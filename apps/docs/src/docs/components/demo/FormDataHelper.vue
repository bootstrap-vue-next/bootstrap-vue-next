<template>
  <div>
    <label for="input-with-list">Input with datalist</label>
    <BFormInput id="input-with-list" list="input-list" />
    <BFormDatalist id="input-list" :options="datalistOptions" />
  </div>
</template>

<script setup lang="ts">
const datalistOptions = ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange']
</script>
