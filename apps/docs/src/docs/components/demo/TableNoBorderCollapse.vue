<template>
  <div>
    <BFormCheckbox
      v-model="noBorderCollapse"
      class="mb-3"
    >
      Disable border collapse (<code>border-collapse: separate</code>)
    </BFormCheckbox>

    <div
      class="table-responsive"
      style="max-height: 300px; overflow-y: auto"
    >
      <BTable
        :items="items"
        :fields="fields"
        :no-border-collapse="noBorderCollapse"
        :sticky-header="true"
        bordered
        striped
      />
    </div>

    <BAlert
      variant="info"
      show
      class="mt-3"
    >
      <strong>No border collapse</strong> is mainly useful with sticky headers or sticky columns to
      prevent borders from appearing incorrectly. Toggle the checkbox to see how borders behave
      differently when scrolling with sticky headers.
    </BAlert>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const noBorderCollapse = ref(false)

const fields = [
  {key: 'id', label: 'ID', stickyColumn: true},
  {key: 'name', label: 'Name'},
  {key: 'email', label: 'Email'},
  {key: 'phone', label: 'Phone'},
  {key: 'city', label: 'City'},
]

const items = Array.from({length: 20}, (_, i) => ({
  id: i + 1,
  name: `Person ${i + 1}`,
  email: `person${i + 1}@example.com`,
  phone: `555-${String(i + 1).padStart(4, '0')}`,
  city: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'][i % 5],
}))
</script>
