<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <h4>Input Focus Test</h4>
        <p>
          This test validates that input fields do not lose focus during typing, especially during
          the first two keystrokes.
        </p>

        <h5>Test 1: Basic v-model</h5>
        <BFormInput v-model="value1" placeholder="Type here - focus should stay" />
        <p>Value: "{{ value1 }}" (length: {{ value1.length }})</p>

        <h5>Test 2: With autofocus</h5>
        <BFormInput v-model="value2" autofocus placeholder="Auto-focused input" />
        <p>Value: "{{ value2 }}" (length: {{ value2.length }})</p>

        <h5>Test 3: With trim modifier</h5>
        <BFormInput v-model.trim="value3" placeholder="Type with spaces - focus should stay" />
        <p>Value: "{{ value3 }}" (length: {{ value3.length }})</p>
        <p><small>Note: Trim modifier removes leading/trailing spaces on blur</small></p>

        <h5>Test 4: With formatter</h5>
        <BFormInput
          v-model="value4"
          :formatter="upperCaseFormatter"
          placeholder="Type here - will be uppercased"
        />
        <p>Value: "{{ value4 }}" (length: {{ value4.length }})</p>

        <h5>Test 5: Empty initial value (most common issue)</h5>
        <BFormInput v-model="value5" placeholder="Start typing from empty" />
        <p>Value: "{{ value5 }}" (length: {{ value5.length }})</p>

        <h5>Test 6: BFormTextarea with trim</h5>
        <BFormTextarea v-model.trim="value6" placeholder="Textarea with trim modifier" rows="3" />
        <p>Value: "{{ value6 }}" (length: {{ value6.length }})</p>

        <BButton variant="secondary" class="mt-3" @click="resetAll">Reset All Values</BButton>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')

const upperCaseFormatter = (value: string) => value.toUpperCase()

const resetAll = () => {
  value1.value = ''
  value2.value = ''
  value3.value = ''
  value4.value = ''
  value5.value = ''
  value6.value = ''
}
</script>
