<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BTabs v-model="tabIndex" small>
          <BTab title="First">
            <p>I'm the first tab</p>
          </BTab>
          <BTab title="Second">
            <p>I'm the second tab</p>
          </BTab>
          <BTab title="Third" disabled>
            <p>I'm a disabled tab!</p>
          </BTab>
          <BTab title="Fourth" disabled>
            <p>I'm a disabled tab!</p>
          </BTab>
          <BTab title="Fifth">
            <p>I'm the fifth tab</p>
          </BTab>
          <BTab title="Sixth" :disabled="true">
            <p>I'm a disabled tab!</p>
          </BTab>
        </BTabs>

        <div class="text-center">
          <BButtonGroup class="mt-2">
            <BButton @click="tabIndex--">Previous</BButton>
            <BButton @click="tabIndex++">Next</BButton>
          </BButtonGroup>

          <div class="text-body-secondary">Current Tab: {{ tabIndex }}</div>
        </div>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h4 class="my-3">Tabs with custom title</h4>
        <BTabs>
          <BTab active>
            <template #title>
              <BSpinner type="grow" small />I'm
              <i>custom</i>
              <strong>title</strong>
            </template>
            <p class="p-3">Tab contents 1</p>
          </BTab>

          <BTab>
            <template #title> <BSpinner type="border" small />Tab 2 </template>
            <p class="p-3">Tab contents 2</p>
          </BTab>
        </BTabs>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tabIndex = ref(1)
</script>
