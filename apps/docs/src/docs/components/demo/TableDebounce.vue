<template>
  <div>
    <BFormGroup
      label="Filter"
      label-for="filter-input"
      class="mb-3"
    >
      <BFormInput
        id="filter-input"
        v-model="filter"
        type="search"
        placeholder="Type to search (with 500ms debounce)..."
      />
    </BFormGroup>

    <p class="text-muted">
      Debounce delays filtering by 500ms after you stop typing. Without debounce, every keystroke
      would trigger filtering immediately.
    </p>

    <BTable
      :items="items"
      :fields="fields"
      :filter="filter"
      :debounce="500"
      :debounce-max-wait="2000"
      :per-page="10"
      :current-page="1"
      striped
      hover
    />
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface Person {
  name: string
  age: number
  city: string
}

const filter = ref('')

const fields = [
  {key: 'name', sortable: true},
  {key: 'age', sortable: true},
  {key: 'city', sortable: true},
]

const items: Person[] = [
  {name: 'Alice Johnson', age: 28, city: 'New York'},
  {name: 'Bob Smith', age: 34, city: 'Los Angeles'},
  {name: 'Charlie Brown', age: 22, city: 'Chicago'},
  {name: 'Diana Prince', age: 29, city: 'San Francisco'},
  {name: 'Eve Davis', age: 31, city: 'Boston'},
  {name: 'Frank Miller', age: 45, city: 'Seattle'},
  {name: 'Grace Lee', age: 27, city: 'Austin'},
  {name: 'Henry Wilson', age: 38, city: 'Denver'},
  {name: 'Ivy Chen', age: 25, city: 'Portland'},
  {name: 'Jack Taylor', age: 42, city: 'Miami'},
]
</script>
