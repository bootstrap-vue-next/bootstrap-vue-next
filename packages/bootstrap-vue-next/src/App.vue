<template>
  <b-container>
    <b-row>
      <b-col> foo </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>
          <b-dropdown id="dropdown-1" v-model="a" text="Dropdown Button" class="m-md-2">
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item active>Active action</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {ref} from 'vue'
const a = ref(false)
</script>
