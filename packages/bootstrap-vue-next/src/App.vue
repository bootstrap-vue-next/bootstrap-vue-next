<template>
  <div>
    <b-form-radio-group v-model="selected" label="Individual radios">
      <b-form-radio name="some-radios" value="A">Option A</b-form-radio>
      <b-form-radio name="some-radios" value="B">Option B</b-form-radio>
    </b-form-radio-group>
    <b-form-radio v-model="selected2" value="A">Option A</b-form-radio>
    <div class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </div>
    <div class="mt-3">
      Selected2: <strong>{{ selected2 }}</strong>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      selected: 'A',
      selected2: '',
    }
  },
}
</script>
