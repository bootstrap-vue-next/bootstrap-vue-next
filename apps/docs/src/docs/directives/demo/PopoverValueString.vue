<template>
  <div class="d-flex gap-2 flex-wrap">
    <!-- #region template -->
    <BButton
      v-b-popover="'Simple string content'"
      title="String Value"
    >
      String Value
    </BButton>
    <BButton
      v-b-popover="userName"
      title="Reactive Variable"
    >
      Reactive Value: {{ userName }}
    </BButton>
    <!-- #endregion template -->
    <BFormInput
      v-model="userName"
      placeholder="Change name"
      class="mt-2"
    />
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const userName = ref('John Doe')
</script>
