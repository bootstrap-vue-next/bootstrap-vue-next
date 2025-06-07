<template>
  <div>
    <BFormInput list="my-list-id" />

    <datalist id="my-list-id">
      <option>Manual Option</option>
      <option
        v-for="size in datalistSizes"
        :key="size"
      >
        {{ size }}
      </option>
    </datalist>
  </div>
</template>

<script setup lang="ts">
const datalistSizes = ['Small', 'Medium', 'Large', 'Extra Large']
</script>
