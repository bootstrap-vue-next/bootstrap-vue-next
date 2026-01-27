<template>
  <div class="row">
    <div
      class="col-lg-6"
      aria-controls="overlay-background"
    >
      <label for="bg-variant">Variant</label>
      <BFormSelect
        id="bg-variant"
        v-model="variant"
        :options="variants"
      />

      <label for="bg-opacity">Opacity</label>
      <div class="d-inline">
        <BFormInput
          id="bg-opacity"
          v-model.number="opacity"
          type="range"
          min="0"
          max="1"
          step="0.01"
          class="d-inline"
        />
      </div>

      {{ opacity.toFixed(2) }}

      <div>
        <label for="bg-blur"
          >Blur (does not work if variant is anything other than 'transparent' or 'white' or if
          bgColor is defined)</label
        >
        <BFormSelect
          id="bg-blur"
          v-model="blur"
          :options="blurs"
        />
      </div>
    </div>

    <BCol lg="6">
      <BOverlay
        id="overlay-background"
        show
        :variant="variant"
        :opacity="opacity"
        :blur="blur"
        rounded="sm"
      >
        <BCard
          title="Card with overlay"
          aria-hidden="true"
        >
          <BCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </BCardText>
          <BButton
            disabled
            variant="primary"
            >Button</BButton
          >
        </BCard>
      </BOverlay>
    </BCol>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const variants = [
  'transparent',
  'white',
  'light',
  'dark',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
] as const
const blurs = [{text: 'None', value: ''}, '1px', '2px', '5px', '0.5em', '1rem']

const variant = ref<(typeof variants)[number]>('light')
const opacity = ref(0.85)
const blur = ref('2px')
</script>
