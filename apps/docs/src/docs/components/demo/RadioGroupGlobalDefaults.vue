<template>
  <BApp
    :defaults="{
      BFormRadioGroup: {
        buttonVariant: 'primary',
        size: 'lg',
        state: true,
      },
    }"
  >
    <div class="mb-4">
      <label class="form-label">Using Global Defaults (no explicit props)</label>
      <BFormRadioGroup
        id="radio-global-defaults"
        v-model="selectedOption1"
        :options="options"
        buttons
      />
      <small class="text-muted d-block mt-1">
        Shows: primary variant, large size, valid state (green border)
      </small>
    </div>

    <div class="mb-4">
      <label class="form-label">Overriding with Explicit Props</label>
      <BFormRadioGroup
        id="radio-explicit-override"
        v-model="selectedOption2"
        :options="options"
        buttons
        button-variant="warning"
        size="sm"
        :state="false"
      />
      <small class="text-muted d-block mt-1">
        Shows: warning variant, small size, invalid state (red border)
      </small>
    </div>

    <div class="mb-4">
      <label class="form-label">Partial Override (only size)</label>
      <BFormRadioGroup
        id="radio-partial-override"
        v-model="selectedOption3"
        :options="options"
        buttons
        size="md"
      />
      <small class="text-muted d-block mt-1">
        Shows: primary variant (from default), medium size (overridden), valid state (from default)
      </small>
    </div>

    <div class="mt-4">
      <h6>Selected Values</h6>
      <pre class="bg-light p-3 rounded">{{
        JSON.stringify(
          {
            example1: selectedOption1,
            example2: selectedOption2,
            example3: selectedOption3,
          },
          null,
          2
        )
      }}</pre>
    </div>
  </BApp>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const options = [
  {text: 'Option A', value: 'a'},
  {text: 'Option B', value: 'b'},
  {text: 'Option C', value: 'c'},
]

const selectedOption1 = ref('a')
const selectedOption2 = ref('b')
const selectedOption3 = ref('c')
</script>

<style scoped>
pre {
  font-size: 0.875rem;
}
</style>
