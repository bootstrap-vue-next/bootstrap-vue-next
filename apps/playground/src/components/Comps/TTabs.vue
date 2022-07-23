<template>
  <div class="my-2">
    <h2 class="my-3">Tabs</h2>
    <div>
      <b-tabs v-model="tabIndex" small>
        <b-tab title="First">
          <p>I'm the first tab</p>
        </b-tab>
        <b-tab title="Second">
          <p>I'm the second tab</p>
        </b-tab>
        <b-tab title="Third" disabled>
          <p>I'm a disabled tab!</p>
        </b-tab>
        <b-tab title="Fourth" disabled>
          <p>I'm a disabled tab!</p>
        </b-tab>
        <b-tab title="Fifth">
          <p>I'm the fifth tab</p>
        </b-tab>
        <b-tab title="Sixth" :disabled="true">
          <p>I'm a disabled tab!</p>
        </b-tab>
      </b-tabs>

      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--">Previous</b-button>
          <b-button @click="tabIndex++">Next</b-button>
        </b-button-group>

        <div class="text-muted">Current Tab: {{ tabIndex }}</div>
      </div>
    </div>
    <div>
      <h4 class="my-3">Tabs with custom title</h4>
      <b-tabs>
        <b-tab active>
          <template #title>
            <b-spinner type="grow" small></b-spinner>I'm
            <i>custom</i>
            <strong>title</strong>
          </template>
          <p class="p-3">Tab contents 1</p>
        </b-tab>

        <b-tab>
          <template #title> <b-spinner type="border" small></b-spinner>Tab 2 </template>
          <p class="p-3">Tab contents 2</p>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tabIndex = ref(1)
</script>
