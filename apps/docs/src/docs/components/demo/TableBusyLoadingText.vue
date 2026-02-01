<!-- `#region` template -->
<template>
  <div>
    <BButton
      id="table-busy-toggle"
      class="mb-3"
      @click="toggleBusy"
    >
      {{ busy ? 'Hide' : 'Show' }} Loading State
    </BButton>

    <BTable
      id="table-busy-table"
      :items="items"
      :fields="fields"
      :busy="busy"
      busy-loading-text="Fetching data, please wait..."
      striped
      hover
    />

    <p class="text-muted mt-3">
      The <code>busyLoadingText</code> prop displays default loading text when the table is busy and
      no custom <code>table-busy</code> slot is provided. You can still override it with a custom
      slot for more complex loading states.
    </p>
  </div>
</template>
<!-- `#endregion` template -->

<script setup lang="ts">
import {ref} from 'vue'

const busy = ref(false)

const fields = [{key: 'name', sortable: true}, {key: 'age', sortable: true}, {key: 'email'}]

const items = [
  {name: 'Alice', age: 28, email: 'alice@example.com'},
  {name: 'Bob', age: 34, email: 'bob@example.com'},
  {name: 'Charlie', age: 22, email: 'charlie@example.com'},
]

const toggleBusy = () => {
  busy.value = !busy.value
}
</script>
