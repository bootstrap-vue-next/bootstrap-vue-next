<template>
  <BForm @submit.stop.prevent>
    <label for="feedback-user">User Id</label>
    <BFormInput
      id="feedback-user"
      v-model="userId"
      :state="validation"
    />
    <BFormInvalidFeedback :state="validation">
      Your user Id must be 5-12 characters long.
    </BFormInvalidFeedback>
    <BFormValidFeedback :state="validation"> Looks Good. </BFormValidFeedback>
  </BForm>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const userId = ref('')

const validation = computed(() => userId.value.length > 4 && userId.value.length < 13)
</script>
