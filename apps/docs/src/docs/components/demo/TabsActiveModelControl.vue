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
          v-model:active="general"
          title="General"
          >I'm the first fading tab</BTab
        >
        <BTab
          id="tab-edit-profile"
          v-model:active="editProfile"
          title="Edit profile"
        >
          I'm the second tab
          <BCard>I'm the card in tab</BCard>
        </BTab>
        <BTab
          id="tab-premium"
          v-model:active="premium"
          title="Premium Plan"
          disabled
          >Sibzamini!</BTab
        >
        <BTab
          id="tab-info"
          v-model:active="info"
          title="Info"
          >I'm the last tab</BTab
        >
      </BTabs>
    </BCard>

    <!-- Control buttons-->
    <div class="text-center">
      <BButtonGroup class="mt-2">
        <BButton @click="general = true">General</BButton>
        <BButton @click="editProfile = true">Edit Profile</BButton>
        <BButton @click="premium = true">Premium</BButton>
        <BButton @click="info = true">Info</BButton>
      </BButtonGroup>

      <div class="text-muted mt-2">Current Tab: index = {{ tabIndex }}, id = {{ tabId }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tabIndex = ref(0)
const tabId = ref(undefined)

const general = ref(true)
const editProfile = ref(false)
const premium = ref(false)
const info = ref(false)
</script>
