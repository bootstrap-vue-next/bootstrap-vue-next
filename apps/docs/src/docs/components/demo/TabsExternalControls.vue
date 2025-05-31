<template>
  <div>
    <!-- Tabs with card integration -->
    <BCard no-body>
      <BTabs v-model:index="tabIndex" small card>
        <BTab title="General">I'm the first fading tab</BTab>
        <BTab title="Edit profile">
          I'm the second tab
          <BCard>I'm the card in tab</BCard>
        </BTab>
        <BTab title="Premium Plan" disabled>Sibzamini!</BTab>
        <BTab title="Info">I'm the last tab</BTab>
      </BTabs>
    </BCard>

    <!-- Control buttons-->
    <div class="text-center">
      <BButtonGroup class="mt-2">
        <BButton @click="tabIndex--">Previous</BButton>
        <BButton @click="tabIndex++">Next</BButton>
      </BButtonGroup>

      <div class="text-muted">Current Tab: {{ tabIndex }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tabIndex = ref(0)
</script>
