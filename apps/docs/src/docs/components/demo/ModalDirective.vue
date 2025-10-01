<template>
  <div>
    <div class="d-flex gap-2">
      <!-- Using modifiers -->
      <BButton v-b-modal.directive-modal>Show Modal</BButton>

      <!-- Using value -->
      <BButton v-b-modal="'directive-modal'">Show Modal</BButton>
    </div>
    <!-- The modal -->
    <BModal id="directive-modal">Hello From My Modal!</BModal>
  </div>
</template>

<script setup lang="ts">
import {vBModal} from 'bootstrap-vue-next/directives/BModal'
</script>
