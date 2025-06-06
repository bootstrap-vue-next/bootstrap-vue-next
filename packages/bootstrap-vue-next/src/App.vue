<template>
  <BContainer class="rating-demo p-4">
    <h2>1. Default with Border</h2>
    <BFormRating v-model="valDefault" :no-border="false" />
    <p>Value: {{ valDefault }}</p>

    <h2>2. Default without Border</h2>
    <BFormRating v-model="valNoBorder" no-border />
    <p>Value: {{ valNoBorder }}</p>

    <h2>3. Sizes with Border</h2>
    <div class="d-flex flex-column gap-3">
      <div>
        <label class="form-label d-block">Small</label>
        <BFormRating v-model="valSizeSm" size="sm" :no-border="false" />
        <p>valSizeSm: {{ valSizeSm }}</p>
      </div>
      <div>
        <label class="form-label d-block">Default</label>
        <BFormRating v-model="valSizeDefault" :no-border="false" />
        <p>valSizeDefault: {{ valSizeDefault }}</p>
      </div>
      <div>
        <label class="form-label d-block">Large</label>
        <BFormRating v-model="valSizeLg" size="lg" :no-border="false" />
        <p>valSizeLg: {{ valSizeLg }}</p>
      </div>
    </div>

    <h2>4. Readonly with Border</h2>
    <BFormRating v-model="valRO" readonly :show-value="true" :no-border="false" />
    <p>valRO: {{ valRO }} (cannot change)</p>

    <h2>5. Variant with Border</h2>
    <BFormRating v-model="valVariant" variant="primary" :no-border="false" />
    <p>valVariant: {{ valVariant }}</p>

    <h2>6. Custom Color without Border</h2>
    <BFormRating v-model="valColor" color="#ff66cc" no-border :show-value="true" />
    <p>valColor: {{ valColor }}</p>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {BContainer, BFormRating} from './components'

const valDefault = ref(2)
const valNoBorder = ref(3)
const valSizeSm = ref(1)
const valSizeDefault = ref(3)
const valSizeLg = ref(4)
const valRO = ref(3.5)
const valVariant = ref(2)
const valColor = ref(2.5)
</script>

<style scoped>
.rating-demo h1 {
  margin-bottom: 1rem;
}
.rating-demo h2 {
  margin-top: 1.5rem;
  font-size: 1.25rem;
}
.rating-demo p {
  margin-top: 0.5rem;
}
</style>
