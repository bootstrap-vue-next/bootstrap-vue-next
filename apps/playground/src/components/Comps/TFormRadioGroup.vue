<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <h4 class="m-2">Grouped (with options or slots)</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormRadioGroup
          id="radio-group-1"
          v-model="radios.ex1.selected"
          :options="radios.ex1.options"
          name="radio-options"
        />

        <BFormRadioGroup
          id="radio-group-2"
          v-model="radios.ex1.selected"
          name="radio-sub-component"
        >
          <BFormRadio value="first">Toggle this custom radio</BFormRadio>
          <BFormRadio value="second">Or toggle this other custom radio</BFormRadio>
          <BFormRadio value="third" disabled>This one is Disabled</BFormRadio>
          <BFormRadio :value="{fourth: 4}">This is the 4th radio</BFormRadio>
          <BFormRadio :value="{fifth: 5}">This is the 5th radio</BFormRadio>
        </BFormRadioGroup>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Selected:
        <strong>{{ radios.ex1.selected }}</strong>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">Changing the option field names</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormRadioGroup
          v-model="radios.ex2.selected"
          :options="radios.ex2.options"
          class="mb-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Selected:
        <strong>{{ radios.ex2.selected }}</strong>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">Button styles radios</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Selected:
        <strong>{{ radios.ex3.selected }}</strong>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormRadioGroup
          id="btn-radios-1"
          v-model="radios.ex3.selected"
          :options="radios.ex3.options"
          name="radios-btn-default"
          buttons
        />

        <BFormRadioGroup
          id="btn-radios-2"
          v-model="radios.ex3.selected"
          :options="radios.ex3.options"
          button-variant="outline-primary"
          size="lg"
          name="radio-btn-outline"
          buttons
        />

        <BFormRadioGroup
          id="btn-radios-3"
          v-model="radios.ex3.selected"
          :options="radios.ex3.options"
          name="radio-btn-stacked"
          buttons
          stacked
        />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

const radios = reactive({
  ex1: {
    selected: {fifth: 5},
    options: [
      {text: 'Toggle this custom radio', value: 'first'},
      {text: 'Or toggle this other custom radio', value: 'second'},
      {text: 'This one is Disabled', value: 'third', disabled: true},
      {text: 'This is the 4th radio', value: {fourth: 4}},
      {text: 'This is the 5th radio', value: {fifth: 5}},
    ],
  },
  ex2: {
    selected: {e: 1},
    options: [
      {item: 'A', name: 'Option A'},
      {item: 'B', name: 'Option B'},
      {item: 'D', name: 'Option C', notEnabled: true},
      {item: {d: 1}, name: 'Option D'},
      {item: {e: 1}, name: 'Option E'},
    ],
  },
  ex3: {
    selected: {e: 1},
    options: [
      {text: 'Radio 1', value: 'radio1'},
      {text: 'Radio 3', value: 'radio2'},
      {text: 'Radio 3 (disabled)', value: 'radio3', disabled: true},
      {text: 'Radio 4', value: 'radio4'},
      {value: {d: 1}, text: 'Option D'},
      {value: {e: 1}, text: 'Option E'},
    ],
  },
})
</script>
