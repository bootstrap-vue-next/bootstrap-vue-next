<template>
  <BFormGroup>
    <template #label>
      <b>Choose your flavors:</b><br />
      <BFormCheckbox
        v-model="allSelected"
        v-model:indeterminate="asIndeterminate"
        aria-describedby="flavors"
        aria-controls="flavors"
        @update:model-value="toggleAll"
      >
        {{ allSelected ? 'Un-select All' : 'Select All' }}
      </BFormCheckbox>
    </template>

    <template #default="{ariaDescribedby}">
      <BFormCheckboxGroup
        id="flavors"
        v-model="flavorSelected"
        :options="flavors"
        :aria-describedby="ariaDescribedby"
        name="flavors"
        class="ms-4"
        aria-label="Individual flavors"
        stacked
      />
    </template>
  </BFormGroup>

  <div>
    Selected: <strong>{{ flavorSelected }}</strong
    ><br />
    All Selected: <strong>{{ allSelected }}</strong
    ><br />
    Indeterminate: <strong>{{ asIndeterminate }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import {type CheckboxValue} from 'bootstrap-vue-next'

const flavors = ['Orange', 'Grape', 'Apple', 'Lime', 'Very Berry']
const flavorSelected = ref<string[]>([])
const allSelected = ref(false)
const asIndeterminate = ref(false)

const toggleAll = (checked?: CheckboxValue | CheckboxValue[]) => {
  flavorSelected.value = checked ? flavors.slice() : []
}

watch(flavorSelected, (newValue: string[]) => {
  // Handle changes in individual flavor checkboxes
  if (newValue.length === 0) {
    asIndeterminate.value = false
    allSelected.value = false
  } else if (newValue.length === flavors.length) {
    asIndeterminate.value = false
    allSelected.value = true
  } else {
    asIndeterminate.value = true
    allSelected.value = false
  }
})
</script>
