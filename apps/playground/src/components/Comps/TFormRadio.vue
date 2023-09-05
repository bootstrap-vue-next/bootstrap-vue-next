<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <h4 class="m-2">Individual</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormRadio v-model="radioDefault">Default</BFormRadio>
      </BCol>
      <BCol>Checked: {{ radioDefault }}</BCol>
    </BRow>

    <BRow>
      <BCol>
        <BFormRadio v-model="radioButton" button>Button format</BFormRadio>
      </BCol>
      <BCol> Checked: {{ radioButton }} </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormRadio v-model="radioRequired" required>Required</BFormRadio>
      </BCol>
      <BCol>Checked: {{ radioRequired }}</BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormRadio disabled>Disabled</BFormRadio>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormRadio v-model="radioIndeterminate" indeterminate>Indeterminate</BFormRadio>
      </BCol>
      <BCol>Checked: {{ radioIndeterminate }}</BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormRadio v-model="radioString" value="correct" unchecked-value="incorrect"
          >Bound to string</BFormRadio
        >
      </BCol>
      <BCol>Value: {{ radioString }}</BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormRadio v-model="radioPlain" plain>Plain</BFormRadio>
      </BCol>
      <BCol>Checked: {{ radioPlain }}</BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4>Individual radios grouped</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormRadio v-model="radioSelected" name="some-radios" value="A">Option A</BFormRadio>
      </BCol>
      <BCol>
        <BFormRadio v-model="radioSelected" name="some-radios" value="B">Option B</BFormRadio>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Selected:
        <strong>{{ radioSelected }}</strong>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <button class="btn btn-primary mx-1" @click="radioSelected = 'A'">Set value A</button>
      </BCol>
      <BCol>
        <button class="btn btn-primary mx-1" @click="radioSelected = 'B'">Set value B</button>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4>Radio with primitives</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <strong>Select</strong>
      </BCol>
      <BCol>
        <strong>Selected</strong>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormRadio v-model="radioPrimitives" :value="true">Yes</BFormRadio>
        <BFormRadio v-model="radioPrimitives" :value="false">No</BFormRadio>
      </BCol>
      <BCol>
        <strong>{{ radioPrimitives }}</strong>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const radioDefault = ref(false)
const radioButton = ref(false)
const radioRequired = ref(false)
const radioIndeterminate = ref(false)
const radioString = ref('incorrect')
const radioPlain = ref(false)
const radioSelected = ref()
const radioPrimitives = ref(false)
</script>
