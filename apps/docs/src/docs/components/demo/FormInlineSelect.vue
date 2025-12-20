<template>
  <BForm>
    <div class="row">
      <label
        class="col-form-label col-lg-2 me-sm-2"
        for="inline-form-custom-select-pref"
        >Preference</label
      >
      <div class="col-lg-2">
        <BFormSelect
          id="inline-form-custom-select-pref"
          v-model="customSelect"
          class="mb-2 me-sm-2 mb-sm-0"
          :options="options"
        />
      </div>
      <BFormCheckbox class="col-form-label col-lg-3 mb-2 me-sm-2 mb-sm-0"
        >Remember my preference</BFormCheckbox
      >
      <div class="col-lg-2 col-form-label">
        <BButton variant="primary">Save</BButton>
      </div>
    </div>
  </BForm>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const options = [
  {text: 'Choose...', value: null as string | null},
  {text: 'One', value: 'One'},
  {text: 'Two', value: 'Two'},
  {text: 'Three', value: 'Three'},
]

const customSelect = ref<string | null>(null)
</script>
