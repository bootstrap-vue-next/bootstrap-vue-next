<template>
  <BRow
    v-for="type in inputTypes"
    :key="type"
    class="my-1"
  >
    <BCol sm="3">
      <label :for="`type-${type}`"
        >Type <code>{{ type }}</code
        >:</label
      >
    </BCol>
    <BCol sm="9">
      <BFormInput
        :id="`type-${type}`"
        :type="type"
      />
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
import {type InputType} from 'bootstrap-vue-next'

const inputTypes = [
  'text',
  'number',
  'email',
  'password',
  'search',
  'url',
  'tel',
  'date',
  'time',
  'range',
  'color',
  'datetime-local',
  'month',
  'week',
] as InputType[]
</script>
