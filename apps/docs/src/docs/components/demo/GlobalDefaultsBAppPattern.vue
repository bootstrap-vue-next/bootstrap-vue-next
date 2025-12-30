<template>
  <BApp
    :defaults="{
      global: {
        buttonVariant: 'primary', // Applied to all components
        size: 'lg',
      },
      BFormCheckboxGroup: {
        buttonVariant: 'danger', // Specific to checkbox groups
        size: 'sm',
      },
    }"
  >
    <!-- Uses component defaults: danger variant, sm size -->
    <BFormCheckboxGroup
      :options="options"
      buttons
    />

    <!-- Explicit prop overrides everything: success variant -->
    <BFormCheckboxGroup
      :options="options"
      buttons
      button-variant="success"
    />

    <!-- Individual checkboxes outside a group use global defaults: primary variant -->
    <BFormCheckbox
      button
      value="a"
      >Option A</BFormCheckbox
    >
  </BApp>
</template>

<script setup lang="ts">
const options = [
  {text: 'Option 1', value: 1},
  {text: 'Option 2', value: 2},
]
</script>
