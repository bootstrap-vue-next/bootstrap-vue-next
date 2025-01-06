<template>
  <BFormGroup
    id="fieldset-4"
    description="Let us know your name."
    label="Name"
    label-for="input-floating-4"
    valid-feedback="Thank you!"
    :invalid-feedback="floatingInvalidFeedback"
    :state="floatingState"
    floating
  >
    <BFormInput
      id="input-floating-4"
      v-model="floatingName"
      :state="floatingState"
      trim
      placeholder="Enter your name please"
    />
  </BFormGroup>
  <div>
    Name: <strong>{{ floatingName }}</strong>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const floatingName = ref('')

const floatingState = computed(() => floatingName.value.length >= 4)
const floatingInvalidFeedback = computed(() =>
  floatingName.value.length > 0 ? 'Enter at least 4 characters.' : 'Please enter something.'
)
</script>
