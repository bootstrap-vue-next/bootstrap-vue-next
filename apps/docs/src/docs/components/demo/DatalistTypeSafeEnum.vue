<template>
  <!-- #region template -->
  <div>
    <BFormInput
      v-model="selectedCountry"
      type="text"
      list="country-list"
      placeholder="Select country..."
    />
    <BFormDatalist
      id="country-list"
      :options="countryOptions"
      value-field="code"
      text-field="name"
    />
    <div class="mt-3">
      Selected: <strong>{{ selectedCountry }}</strong>
    </div>
  </div>
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {Country} from './DatalistTypeSafeEnumTypes'

interface CountryOption {
  code: Country
  name: string
}

const countryOptions: CountryOption[] = [
  {code: Country.US, name: 'United States'},
  {code: Country.UK, name: 'United Kingdom'},
  {code: Country.CA, name: 'Canada'},
  {code: Country.AU, name: 'Australia'},
]

// TypeScript knows selectedCountry is a Country enum value
const selectedCountry = ref<Country>(Country.US)
</script>
