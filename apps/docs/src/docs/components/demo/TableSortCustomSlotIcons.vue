<template>
  <div>
    <BTable
      :fields="fields"
      :items="items"
      striped
      hover
      no-sortable-icon
      @head-clicked="onHeadClicked"
    >
      <!-- Custom header with sort icons for first_name -->
      <template #head(first_name)="data">
        <div style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer">
          {{ data.label }}
          <span
            v-if="getSortIcon(data.field)"
            v-html="getSortIcon(data.field)"
          />
        </div>
      </template>

      <!-- Custom header with sort icons for last_name -->
      <template #head(last_name)="data">
        <div style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer">
          {{ data.label }}
          <span
            v-if="getSortIcon(data.field)"
            v-html="getSortIcon(data.field)"
          />
        </div>
      </template>

      <!-- Custom header with sort icons for age -->
      <template #head(age)="data">
        <div style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer">
          {{ data.label }}
          <span
            v-if="getSortIcon(data.field)"
            v-html="getSortIcon(data.field)"
          />
        </div>
      </template>
    </BTable>
  </div>
</template>

<script setup lang="ts">
import type {TableField} from 'bootstrap-vue-next'

interface Person {
  first_name: string
  last_name: string
  age: number
}

const fields = [
  {key: 'first_name', label: 'First Name', sortable: true},
  {key: 'last_name', label: 'Last Name', sortable: true},
  {key: 'age', label: 'Age', sortable: true},
]

const items: Person[] = [
  {first_name: 'John', last_name: 'Doe', age: 42},
  {first_name: 'Jane', last_name: 'Smith', age: 36},
  {first_name: 'Bob', last_name: 'Wilson', age: 55},
  {first_name: 'Alice', last_name: 'Johnson', age: 28},
]

// Custom SVG icons (you could also use Bootstrap Icons, Font Awesome, etc.)
const icons = {
  none: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" style="opacity: 0.3" viewBox="0 0 16 16"><path d="M8 4l3 3H5l3-3zm0 8l-3-3h6l-3 3z"/></svg>',
  ascending:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 4l3 3H5l3-3z"/></svg>',
  descending:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 12l-3-3h6l-3 3z"/></svg>',
}

function getSortIcon(field: TableField<Person>): string {
  // thAttr can be an object or function, so check if it's an object first
  const ariaSort =
    typeof field.thAttr === 'object' && field.thAttr !== null
      ? field.thAttr['aria-sort']
      : undefined

  if (ariaSort === 'ascending') return icons.ascending
  if (ariaSort === 'descending') return icons.descending
  if (ariaSort === 'none') return icons.none

  return ''
}

function onHeadClicked(key: string, field: TableField<Person>, event: MouseEvent, isfoot: boolean) {
  // Sorting is handled automatically by BTable
  // This event is available if you need additional custom logic
  console.log('Header clicked:', key, field, isfoot)
}
</script>
