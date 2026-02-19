<template>
  <BContainer class="rating-demo p-4">
    <h2>1. Default</h2>
    <BFormRating v-model="valDefault" />
    <p>Value: {{ valDefault }}</p>

    <h2>2. show-value</h2>
    <BFormRating v-model="valShow" :show-value="true" />
    <p>valShow: {{ valShow }}</p>

    <h2>3. show-value-max</h2>
    <BFormRating v-model="valShowMax" show-value-max />
    <p>valShowMax: {{ valShowMax }}</p>

    <h2>4. show-value & show-value-max</h2>
    <BFormRating v-model="valShowBoth" :show-value="true" show-value-max />
    <p>valShowBoth: {{ valShowBoth }}</p>

    <h2>5. precision (2 decimals)</h2>
    <BFormRating v-model="valPrecise" :precision="2" :show-value="true" />
    <p>valPrecise: {{ valPrecise }}</p>

    <h2>6. stars (8 total)</h2>
    <BFormRating v-model="valStars" :stars="8" :show-value="true" />
    <p>valStars: {{ valStars }}</p>

    <h2>7. Bootstrap variants</h2>
    <div class="d-flex gap-3">
      <BFormRating v-model="valVar1" variant="primary" />
      <BFormRating v-model="valVar2" variant="success" />
      <BFormRating v-model="valVar3" variant="warning" />
      <BFormRating v-model="valVar4" variant="danger" />
    </div>
    <p>primary={{ valVar1 }}, success={{ valVar2 }}, warning={{ valVar3 }}, danger={{ valVar4 }}</p>

    <h2>8. custom color</h2>
    <BFormRating v-model="valColor" color="rgba(64, 192, 128, 0.75)" :show-value="true" />
    <p>valColor: {{ valColor }}</p>

    <h2>9. custom color + value/max</h2>
    <BFormRating v-model="valColorMax" color="#ff66cc" :show-value="true" :show-value-max="true" />
    <p>valColorMax: {{ valColorMax }}</p>

    <h2>10. sizes (sm / default / lg)</h2>
    <div class="d-flex align-items-center gap-4">
      <div>
        <label class="form-label d-block">Small</label>
        <BFormRating v-model="valSizeSm" size="sm" />
      </div>
      <div>
        <label class="form-label d-block">Default</label>
        <BFormRating v-model="valSizeDefault" />
      </div>
      <div>
        <label class="form-label d-block">Large</label>
        <BFormRating v-model="valSizeLg" size="lg" />
      </div>
    </div>
    <p>sizes: small={{ valSizeSm }}, default={{ valSizeDefault }}, large={{ valSizeLg }}</p>

    <h2>11. readonly mode</h2>
    <BFormRating v-model="valRO" readonly :show-value="true" show-value-max />
    <p>valRO: {{ valRO }} (cannot change)</p>

    <h2>12. Input Group</h2>
    <BInputGroup>
      <template #prepend>
        <BInputGroupText>Rating</BInputGroupText>
      </template>
      <BFormRating v-model="valInputGroup" color="#ff8800" />
      <template #append>
        <BInputGroupText style="min-width: 3em" class="justify-content-center">
          {{ valInputGroup }}
        </BInputGroupText>
      </template>
    </BInputGroup>
    <p>valInputGroup: {{ valInputGroup }}</p>

    <h2>13. Input Group (lg)</h2>
    <BInputGroup size="lg">
      <template #prepend>
        <BInputGroupText>Rating</BInputGroupText>
      </template>
      <BFormRating v-model="valInputGroupLg" variant="success" />
      <template #append>
        <BInputGroupText style="min-width: 3em" class="justify-content-center">
          {{ valInputGroupLg }}
        </BInputGroupText>
      </template>
    </BInputGroup>
    <p>valInputGroupLg: {{ valInputGroupLg }}</p>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const valDefault = ref(2)
const valShow = ref(3)
const valShowMax = ref(4)
const valShowBoth = ref(2)
const valPrecise = ref(3.1464343)
const valStars = ref(5)
const valVar1 = ref(2)
const valVar2 = ref(3)
const valVar3 = ref(1)
const valVar4 = ref(4)
const valColor = ref(2.5)
const valColorMax = ref(3)
const valSizeSm = ref(1)
const valSizeDefault = ref(3)
const valSizeLg = ref(4)
const valRO = ref(3.5)
const valInputGroup = ref(2)
const valInputGroupLg = ref(3)
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
