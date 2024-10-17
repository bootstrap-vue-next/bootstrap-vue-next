<template>
  <BContainer>
    <BRow>
      <BCol>
        <b-form-textarea
          id="textarea-no-auto-shrink"
          placeholder="Auto height (no-shrink) textarea"
          rows="1"
          max-rows="8"
        />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckbox v-model="intermChecked" v-model:indeterminate="indeterminate"
          >Click me to see what happens</BFormCheckbox
        >
        <BButton class="mt-2" :disabled="indeterminate" @click="indeterminate = true"
          >Reset Indeterminate</BButton
        >
        <div class="mt-2">
          Checked: <strong>{{ intermChecked }}</strong
          ><br />
          Indeterminate: <strong>{{ indeterminate }}</strong>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {ref} from 'vue'

const intermChecked = ref(true)
const indeterminate = ref(true)
</script>
