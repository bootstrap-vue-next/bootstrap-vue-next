<template>
  <BFormGroup
    id="fieldset-1"
    description="Let us know your name."
    label="Enter your name"
    label-for="input-1"
    valid-feedback="Thank you!"
    :invalid-feedback="invalidFeedback"
    :state="state"
    label-class="mb-1"
  >
    <BFormInput id="input-1" v-model="name" :state="state" trim />
  </BFormGroup>
  <div>
    Name: <strong>{{ name }}</strong>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const name = ref('')

const state = computed(() => name.value.length >= 4)
const invalidFeedback = computed(() =>
  name.value.length > 0 ? 'Enter at least 4 characters.' : 'Please enter something.'
)
</script>
