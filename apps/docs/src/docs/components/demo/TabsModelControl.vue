<template>
  <div>
    <!-- Tabs with card integration -->
    <BCard no-body>
      <BTabs
        v-model:index="tabIndex"
        v-model="tabId"
        small
        card
      >
        <BTab
          id="tab-general"
          title="General"
          >I'm the first fading tab</BTab
        >
        <BTab
          id="tab-edit-profile"
          title="Edit profile"
        >
          I'm the second tab
          <BCard>I'm the card in tab</BCard>
        </BTab>
        <BTab
          id="tab-premium"
          title="Premium Plan"
          disabled
          >Sibzamini!</BTab
        >
        <BTab
          id="tab-info"
          title="Info"
          >I'm the last tab</BTab
        >
      </BTabs>
    </BCard>

    <!-- Control buttons-->
    <div class="text-center">
      <BButtonGroup class="mt-2">
        <BButton @click="tabIndex--">Previous</BButton>
        <BButton @click="tabIndex++">Next</BButton>
      </BButtonGroup>

      <div class="text-muted mt-2">Current Tab: index = {{ tabIndex }}, id = {{ tabId }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tabIndex = ref(0)
const tabId = ref<string | undefined>(undefined)
</script>
