<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h4>Form Input Types</h4>
        <div>type text</div>
        <b-form-input ref="input" type="text" class="mb-1" />
        <div>type number</div>
        <b-form-input type="number" />
        <div>type email</div>
        <b-form-input type="email" />
        <div>type password</div>
        <b-form-input v-model="password" :type="showPassword ? 'text' : 'password'" class="mb-1" />
        <b-form-input :type="showPassword ? 'text' : 'password'" class="mb-1" />
        <b-form-checkbox v-model="showPassword">Show password</b-form-checkbox>
        {{ password }}
        <div>type search</div>
        <b-form-input type="search" />
        <div>type url</div>
        <b-form-input type="url" />
        <div>type tel</div>
        <b-form-input type="tel" />
        <div>type date</div>
        <b-form-input type="date" />
        <div>type time</div>
        <b-form-input type="time" />
        <div>type range</div>
        <b-form-input v-model="formInputRangeValue" type="range" min="0" max="5" step="0.5" />
        <div>value : {{ formInputRangeValue }}</div>
        <div>type color</div>
        <b-form-input type="color" />
        <div>plaintext</div>
        <b-form-input type="text" plaintext value="a" />
        <div>Disabled</div>
        <b-form-input disabled value="disabled input" />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h4>Form Input Sizes</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="mb-1">small</div>
      </b-col>
      <b-col>
        <b-form-input type="text" size="sm" class="col" />
      </b-col>
      <b-col>
        <div>large</div>
      </b-col>
      <b-col>
        <b-form-input type="text" size="lg" class="col" />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h4>Form Input Contextual states</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>null</div>
      </b-col>
      <b-col>
        <b-form-input type="text" :state="null" />
      </b-col>
      <b-col>
        <div>true</div>
      </b-col>
      <b-col>
        <b-form-input type="text" :state="true" />
      </b-col>
      <b-col>
        <div>false</div>
      </b-col>
      <b-col>
        <b-form-input type="text" :state="false" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const password = ref('123')
const showPassword = ref(false)
const formInputRangeValue = ref(3)
</script>
