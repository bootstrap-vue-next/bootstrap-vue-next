<template>
  <BContainer>
    <BRow>
      <BCol>
        <BDropdown split text="Dropdown" variant="info">
          <BDropdownItem>Action A</BDropdownItem>
          <BDropdownItem>Action B</BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>
    <BRow>
      <BCol class="mt-5">
        <BDropdown text="Dropdown" variant="info">
          <BDropdownItem>Action A</BDropdownItem>
          <BDropdownItem>Action B</BDropdownItem>
        </BDropdown>
      </BCol></BRow
    >
    <BRow>
      <BCol class="mt-5">
        <BInputGroup>
          <template #prepend>
            <BDropdown text="Dropdown" variant="info">
              <BDropdownItem>Action A</BDropdownItem>
              <BDropdownItem>Action B</BDropdownItem>
            </BDropdown>
          </template>
          <BFormInput />
          <template #append>
            <BDropdown v-for="i in 2" :key="i" text="Dropdown" variant="outline-secondary">
              <BDropdownItem>Action C</BDropdownItem>
              <BDropdownItem>Action D</BDropdownItem>
            </BDropdown>
          </template>
        </BInputGroup>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
</script>
