<template>
  <BForm>
    <div class="row">
      <label class="col-form-label col-lg-2 me-sm-2" for="inline-form-custom-select-pref"
        >Preference</label
      >
      <div class="col-lg-2">
        <BFormSelect
          id="inline-form-custom-select-pref"
          v-model="customSelect"
          class="mb-2 me-sm-2 mb-sm-0"
          :options="[{text: 'Choose...', value: null}, 'One', 'Two', 'Three']"
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

const customSelect = ref(null)
</script>
