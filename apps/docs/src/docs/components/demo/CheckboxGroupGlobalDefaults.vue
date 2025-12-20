<template>
  <BApp
    :defaults="{
      BFormCheckboxGroup: {
        buttonVariant: 'primary',
        size: 'lg',
        state: true,
      },
    }"
  >
    <div class="mb-4">
      <label class="form-label">Using Global Defaults (no explicit props)</label>
      <BFormCheckboxGroup
        id="checkbox-global-defaults"
        v-model="selectedOptions1"
        :options="options"
        buttons
      />
      <small class="text-muted d-block mt-1">
        Shows: primary variant, large size, valid state (green border)
      </small>
    </div>

    <div class="mb-4">
      <label class="form-label">Overriding with Explicit Props</label>
      <BFormCheckboxGroup
        id="checkbox-explicit-override"
        v-model="selectedOptions2"
        :options="options"
        buttons
        button-variant="danger"
        size="sm"
        :state="false"
      />
      <small class="text-muted d-block mt-1">
        Shows: danger variant, small size, invalid state (red border)
      </small>
    </div>

    <div class="mb-4">
      <label class="form-label">Partial Override (only buttonVariant)</label>
      <BFormCheckboxGroup
        id="checkbox-partial-override"
        v-model="selectedOptions3"
        :options="options"
        buttons
        button-variant="success"
      />
      <small class="text-muted d-block mt-1">
        Shows: success variant (overridden), large size (from default), valid state (from default)
      </small>
    </div>

    <div class="mt-4">
      <h6>Selected Values</h6>
      <pre class="bg-light p-3 rounded">{{
        JSON.stringify(
          {
            example1: selectedOptions1,
            example2: selectedOptions2,
            example3: selectedOptions3,
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

const selectedOptions1 = ref(['a'])
const selectedOptions2 = ref(['b'])
const selectedOptions3 = ref(['a', 'c'])
</script>

<style scoped>
pre {
  font-size: 0.875rem;
}
</style>
