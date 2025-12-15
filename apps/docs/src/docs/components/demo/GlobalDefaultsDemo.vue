<template>
  <!-- #region template -->
  <BApp
    :defaults="{
      BFormCheckboxGroup: {
        buttonVariant: 'primary',
        size: 'lg',
        state: true,
      },
      BFormRadioGroup: {
        buttonVariant: 'primary',
        size: 'lg',
        state: true,
      },
    }"
  >
    <div class="mb-4">
      <h5>Global Defaults Demo</h5>
      <p class="text-muted">
        This demo shows how BFormCheckboxGroup and BFormRadioGroup respect component defaults using
        BApp. The BApp component is configured with <code>buttonVariant: 'primary'</code>,
        <code>size: 'lg'</code>, and <code>state: true</code> as defaults for both components.
      </p>
    </div>

    <h6 class="mb-3">Checkbox Group</h6>

    <div class="mb-4">
      <label class="form-label">Using Global Defaults (no explicit props)</label>
      <BFormCheckboxGroup
        id="checkbox-global-defaults"
        v-model="selectedOptions1"
        :options="options"
        buttons
      />
      <small class="text-muted d-block mt-1">
        Should show: primary variant, large size, valid state (green)
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
        Should show: danger variant, small size, invalid state (red)
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
        Should show: success variant (overridden), large size (from global), valid state (from
        global)
      </small>
    </div>

    <h6 class="mb-3 mt-5">Radio Group</h6>

    <div class="mb-4">
      <label class="form-label">Using Global Defaults (no explicit props)</label>
      <BFormRadioGroup
        id="radio-global-defaults"
        v-model="selectedOption1"
        :options="options"
        buttons
      />
      <small class="text-muted d-block mt-1">
        Should show: primary variant, large size, valid state (green)
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
        Should show: warning variant, small size, invalid state (red)
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
        Should show: primary variant (from global), medium size (overridden), valid state (from
        global)
      </small>
    </div>

    <div class="mt-5">
      <h6>Selected Values</h6>
      <pre class="bg-light p-3 rounded">{{
        JSON.stringify(
          {
            checkboxGroup1: selectedOptions1,
            checkboxGroup2: selectedOptions2,
            checkboxGroup3: selectedOptions3,
            radioGroup1: selectedOption1,
            radioGroup2: selectedOption2,
            radioGroup3: selectedOption3,
          },
          null,
          2
        )
      }}</pre>
    </div>
  </BApp>
  <!-- #endregion template -->
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

const selectedOption1 = ref('a')
const selectedOption2 = ref('b')
const selectedOption3 = ref('c')
</script>

<style scoped>
pre {
  font-size: 0.875rem;
}
</style>
