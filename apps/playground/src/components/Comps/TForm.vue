<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BForm @submit.stop.prevent>
          <label for="text-password">Password</label>
          <BFormInput
            id="text-password"
            type="password"
            aria-describedby="password-help-block"
            aria-invalid
          />
          <BFormText id="password-help-block">
            Your password must be 8-20 characters long, contain letters and numbers, and must not
            contain spaces, special characters, or emoji.
          </BFormText>
        </BForm>
      </BCol>
    </BRow>
    <BRow
      ><BCol><h4 class="mt-2">floating labels</h4></BCol></BRow
    >
    <BRow
      ><BCol>
        <BForm>
          <BFormFloatingLabel label="Email address" label-for="floatingEmail" class="my-2">
            <BFormInput id="floatingEmail" type="email" placeholder="Email address" />
          </BFormFloatingLabel>
          <BFormFloatingLabel label="Password" label-for="floatingPassword" class="my-2">
            <BFormInput id="floatingPassword" type="password" placeholder="Password" />
          </BFormFloatingLabel>
        </BForm> </BCol
    ></BRow>
    <BRow
      ><BCol> <h4 class="mt-2">datalist — string primitives</h4> </BCol></BRow
    >
    <BRow
      ><BCol>
        <div>
          <label for="input-strings">Fruits (string[])</label>
          <BFormInput id="input-strings" list="list-strings" />
          <BFormDatalist id="list-strings" :options="stringOptions" />
          <small class="text-body-secondary">Options: {{ stringOptions }}</small>
        </div>
      </BCol></BRow
    >
    <BRow
      ><BCol> <h4 class="mt-2">datalist — object options (value/text)</h4> </BCol></BRow
    >
    <BRow
      ><BCol>
        <div>
          <label for="input-objects">Users (object with value/text)</label>
          <BFormInput id="input-objects" list="list-objects" />
          <BFormDatalist id="list-objects" :options="objectOptions" />
          <small class="text-body-secondary">Options: {{ objectOptions }}</small>
        </div>
      </BCol></BRow
    >
    <BRow
      ><BCol> <h4 class="mt-2">datalist — custom fields</h4> </BCol></BRow
    >
    <BRow
      ><BCol>
        <div>
          <label for="input-custom">Countries (custom field names)</label>
          <BFormInput id="input-custom" list="list-custom" />
          <BFormDatalist
            id="list-custom"
            :options="customFieldOptions"
            value-field="code"
            text-field="label"
            disabled-field="unavailable"
          />
          <small class="text-body-secondary">Options: {{ customFieldOptions }}</small>
        </div>
      </BCol></BRow
    >
    <BRow
      ><BCol> <h4 class="mt-2">datalist — mixed primitives &amp; objects</h4> </BCol></BRow
    >
    <BRow
      ><BCol>
        <div>
          <label for="input-mixed">Mixed (strings + objects)</label>
          <BFormInput id="input-mixed" list="list-mixed" />
          <BFormDatalist id="list-mixed" :options="mixedOptions" />
          <small class="text-body-secondary">Options: {{ mixedOptions }}</small>
        </div>
      </BCol></BRow
    >
  </BContainer>
</template>

<script setup lang="ts">
import {BFormDatalist} from 'bootstrap-vue-next/components/BForm'
import {BFormInput} from 'bootstrap-vue-next/components/BFormInput'

// String primitives
const stringOptions = ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange']

// Object options with standard value/text fields
const objectOptions = [
  {value: 'us', text: 'United States'},
  {value: 'ca', text: 'Canada'},
  {value: 'uk', text: 'United Kingdom'},
]

// Object options with custom field names
const customFieldOptions = [
  {code: 'fr', label: 'France', unavailable: false},
  {code: 'de', label: 'Germany', unavailable: false},
  {code: 'jp', label: 'Japan', unavailable: true},
]

// Mixed primitives and objects
const mixedOptions = [
  'Other',
  {value: 'red', text: 'Red'},
  {value: 'green', text: 'Green'},
  {value: 'blue', text: 'Blue'},
]
</script>
