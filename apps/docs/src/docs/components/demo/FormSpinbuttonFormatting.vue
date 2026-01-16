<template>
  <label for="sb-locales">Locale</label>
  <BFormSelect
    id="sb-locales"
    v-model="locale"
    :options="locales"
  />
  <label
    for="sb-local"
    class="mt-2"
    >Spin button with locale</label
  >
  <BFormSpinbutton
    id="sb-locale"
    v-model="value"
    :locale="locale"
    min="0"
    max="10"
    step="0.125"
  />
  <p>Value: {{ value }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref(0)

const locale = ref('fr-CA')
const locales = [
  {value: 'en', text: 'English'},
  {value: 'de', text: 'German'},
  {value: 'fr-CA', text: 'French (Canadian)'},
  {value: 'fa', text: 'Persian'},
  {value: 'ar-EG', text: 'Arabic (Egyptian)'},
] as const
</script>
