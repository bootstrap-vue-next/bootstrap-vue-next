<template>
  <div role="group">
    <label for="input-live">Name:</label>
    <BFormInput
      id="input-live"
      v-model.trim="value"
      :state="state"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your name"
    />
    <!-- This will only be shown if the preceding input has an invalid state -->
    <BFormInvalidFeedback id="input-live-feedback"> Enter at least 3 letters </BFormInvalidFeedback>
    <!-- This is a form text block (formerly known as help block) -->
    <BFormText id="input-live-help">Your full name.</BFormText>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const value = ref('')

const state = computed(() => (value.value?.length > 2 ? true : false))
</script>
