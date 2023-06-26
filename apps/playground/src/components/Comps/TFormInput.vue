<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <h4>Form Input Types</h4>
        <div>type text</div>
        <BFormInput ref="input" type="text" class="mb-1" />
        <div>type number</div>
        <BFormInput type="number" />
        <div>type email</div>
        <BFormInput type="email" />
        <div>type password</div>
        <BFormInput v-model="password" :type="showPassword ? 'text' : 'password'" class="mb-1" />
        <BFormInput :type="showPassword ? 'text' : 'password'" class="mb-1" />
        <BFormCheckbox v-model="showPassword">Show password</BFormCheckbox>
        {{ password }}
        <div>type search</div>
        <BFormInput type="search" />
        <div>type url</div>
        <BFormInput type="url" />
        <div>type tel</div>
        <BFormInput type="tel" />
        <div>type date</div>
        <BFormInput type="date" />
        <div>type time</div>
        <BFormInput type="time" />
        <div>type datetime</div>
        <BFormInput type="datetime" />
        <div>type datetime-local</div>
        <BFormInput type="datetime-local" />
        <div>type month</div>
        <BFormInput type="month" />
        <div>type week</div>
        <BFormInput type="week" />
        <div>type range</div>
        <BFormInput v-model="formInputRangeValue" type="range" min="0" max="5" step="0.5" />
        <div>value : {{ formInputRangeValue }}</div>
        <div>type color</div>
        <BFormInput type="color" />
        <div>plaintext</div>
        <BFormInput type="text" plaintext value="a" />
        <div>Disabled</div>
        <BFormInput disabled value="disabled input" />
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h4>Form Input Sizes</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <div class="mb-1">small</div>
      </BCol>
      <BCol>
        <BFormInput type="text" size="sm" class="col" />
      </BCol>
      <BCol>
        <div>large</div>
      </BCol>
      <BCol>
        <BFormInput type="text" size="lg" class="col" />
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h4>Form Input Contextual states</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <div>null</div>
      </BCol>
      <BCol>
        <BFormInput type="text" :state="null" />
      </BCol>
      <BCol>
        <div>true</div>
      </BCol>
      <BCol>
        <BFormInput type="text" :state="true" />
      </BCol>
      <BCol>
        <div>false</div>
      </BCol>
      <BCol>
        <BFormInput type="text" :state="false" />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const password = ref('123')
const showPassword = ref(false)
const formInputRangeValue = ref(3)
</script>
