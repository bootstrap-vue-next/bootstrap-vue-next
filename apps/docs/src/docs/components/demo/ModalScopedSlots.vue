<template>
  <div>
    <BButton @click="show = true">Open Modal</BButton>

    <BModal v-model="show">
      <template #header="{close}">
        <!-- Emulate built in modal header close button action -->
        <BButton
          size="sm"
          variant="outline-danger"
          @click="close()"
        >
          Close Modal
        </BButton>
        <h5>Modal Header</h5>
      </template>

      <template #default="{hide}">
        <p>Modal Body with button</p>
        <BButton @click="hide()">Hide Modal</BButton>
      </template>

      <template #footer="{ok, cancel, hide}">
        <b>Custom Footer</b>
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <BButton
          size="sm"
          variant="success"
          @click="ok()"
        >
          OK
        </BButton>
        <BButton
          size="sm"
          variant="danger"
          @click="cancel()"
        >
          Cancel
        </BButton>
        <!-- Button with custom close trigger value -->
        <BButton
          size="sm"
          variant="outline-secondary"
          @click="hide('forget')"
        >
          Forget it
        </BButton>
      </template>
    </BModal>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
