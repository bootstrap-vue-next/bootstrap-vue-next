<template>
  <div>
    <BFormGroup
      v-slot="{ariaDescribedby}"
      label="Table Options"
      label-cols-lg="2"
    >
      <BFormCheckbox
        v-model="striped"
        :aria-describedby="ariaDescribedby"
        inline
        >Striped</BFormCheckbox
      >
      <BFormCheckbox
        v-model="stripedColumns"
        :aria-describedby="ariaDescribedby"
        inline
        >Striped Columns</BFormCheckbox
      >
      <BFormCheckbox
        v-model="bordered"
        :aria-describedby="ariaDescribedby"
        inline
        >Bordered</BFormCheckbox
      >
      <BFormCheckbox
        v-model="borderless"
        :aria-describedby="ariaDescribedby"
        inline
        >Borderless</BFormCheckbox
      >
      <BFormCheckbox
        v-model="outlined"
        :aria-describedby="ariaDescribedby"
        inline
        >Outlined</BFormCheckbox
      >
      <BFormCheckbox
        v-model="small"
        :aria-describedby="ariaDescribedby"
        inline
        >Small</BFormCheckbox
      >
      <BFormCheckbox
        v-model="hover"
        :aria-describedby="ariaDescribedby"
        inline
        >Hover</BFormCheckbox
      >
      <BFormCheckbox
        v-model="dark"
        :aria-describedby="ariaDescribedby"
        inline
        >Dark</BFormCheckbox
      >
      <BFormCheckbox
        v-model="fixed"
        :aria-describedby="ariaDescribedby"
        inline
        >Fixed</BFormCheckbox
      >
      <BFormCheckbox
        v-model="footClone"
        :aria-describedby="ariaDescribedby"
        inline
        >Foot Clone</BFormCheckbox
      >
      <BFormCheckbox
        v-model="noCollapse"
        :aria-describedby="ariaDescribedby"
        inline
        >No border collapse</BFormCheckbox
      >
    </BFormGroup>

    <BFormGroup
      label="Variant"
      label-for="table-style-variant"
      label-cols-lg="2"
      class="my-2"
    >
      <BFormSelect
        id="table-style-variant"
        v-model="variant"
        :options="variants"
      >
        <template #first>
          <option :value="null">-- None --</option>
        </template>
      </BFormSelect>
    </BFormGroup>

    <BFormGroup
      label="Head Variant"
      label-for="head-style-variant"
      label-cols-lg="2"
      class="my-2"
    >
      <BFormSelect
        id="head-style-variant"
        v-model="headVariant"
        :options="variants"
      >
        <template #first>
          <option :value="null">-- None --</option>
        </template>
      </BFormSelect>
    </BFormGroup>

    <BFormGroup
      label="Foot Variant"
      label-for="foot-style-variant"
      label-cols-lg="2"
      class="my-2"
    >
      <BFormSelect
        id="foot-style-variant"
        v-model="footVariant"
        :options="variants"
      >
        <template #first>
          <option :value="null">-- None --</option>
        </template>
      </BFormSelect>
    </BFormGroup>

    <BTable
      :striped="striped"
      :striped-columns="stripedColumns"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :items="items"
      :fields="fields"
      :variant="variant"
      :head-variant="headVariant"
      :foot-variant="footVariant"
    />
  </div>
</template>

<script setup lang="ts">
import type {ColorVariant} from 'bootstrap-vue-next'
import {ref} from 'vue'

const fields = ['first_name', 'last_name', 'age']
const items = [
  {age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {age: 89, first_name: 'Geneva', last_name: 'Wilson'},
]

const striped = ref(false)
const stripedColumns = ref(false)
const bordered = ref(false)
const borderless = ref(false)
const outlined = ref(false)
const small = ref(false)
const hover = ref(false)
const dark = ref(false)
const fixed = ref(false)
const footClone = ref(false)
const variant = ref<ColorVariant | null>(null)
const headVariant = ref<ColorVariant | null>(null)
const footVariant = ref<ColorVariant | null>(null)
const noCollapse = ref(false)

const variants = [
  'primary',
  'secondary',
  'info',
  'danger',
  'warning',
  'success',
  'light',
  'dark',
] as string[]
</script>
