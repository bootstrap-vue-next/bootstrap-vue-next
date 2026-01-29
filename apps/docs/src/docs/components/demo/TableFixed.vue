<template>
  <div>
    <BFormCheckbox
      v-model="useFixed"
      class="mb-3"
    >
      Use fixed table layout (<code>table-layout: fixed</code>)
    </BFormCheckbox>

    <BTable
      :items="items"
      :fields="fields"
      :fixed="useFixed"
      bordered
    >
      <template #cell(longText)="data">
        {{ data.value }}
      </template>
    </BTable>

    <p class="text-muted mt-3">
      <strong>Fixed layout:</strong> All columns have equal width regardless of content length. This
      is useful when you want predictable column widths. Notice how the "Long Text" column doesn't
      expand to fit its content when fixed layout is enabled.
    </p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const useFixed = ref(false)

const fields = [
  {key: 'id', label: 'ID'},
  {key: 'name', label: 'Name'},
  {key: 'status', label: 'Status'},
  {key: 'longText', label: 'Long Text'},
]

const items = [
  {
    id: 1,
    name: 'Item 1',
    status: 'Active',
    longText:
      'This is a very long text that demonstrates how fixed table layout affects column width. In fixed mode, this column will not expand.',
  },
  {
    id: 2,
    name: 'Item 2',
    status: 'Inactive',
    longText: 'Short text',
  },
  {
    id: 3,
    name: 'Item 3',
    status: 'Active',
    longText:
      'Another example of longer content that would normally cause the column to expand in auto layout mode.',
  },
]
</script>
