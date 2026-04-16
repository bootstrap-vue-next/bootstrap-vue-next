<template>
  <div>
    <label for="autocomplete-async">Search users (simulated async)</label>
    <BAutocomplete
      id="autocomplete-async"
      v-model="selectedUser"
      v-model:search="searchQuery"
      :options="filteredUsers"
      :debounce="300"
      text-field="name"
      value-field="id"
      placeholder="Type to search users..."
      :filter-function="noFilter"
    />
    <p class="mt-2">
      <span v-if="loading">Loading...</span>
      <span v-else-if="selectedUser">Selected user ID: {{ selectedUser }}</span>
      <span v-else>No user selected</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import type {SelectOption} from 'bootstrap-vue-next'

// Full local dataset — in a real app this would come from an API
const allUsers = [
  {id: 1, name: 'Leanne Graham'},
  {id: 2, name: 'Ervin Howell'},
  {id: 3, name: 'Clementine Bauch'},
  {id: 4, name: 'Patricia Lebsack'},
  {id: 5, name: 'Chelsey Dietrich'},
  {id: 6, name: 'Dennis Schulist'},
  {id: 7, name: 'Kurtis Weissnat'},
  {id: 8, name: 'Nicholas Runolfsdottir'},
  {id: 9, name: 'Glenna Reichert'},
  {id: 10, name: 'Clementina DuBuque'},
]

const selectedUser = ref<number | undefined>(undefined)
const searchQuery = ref('')
const filteredUsers = ref<{id: number; name: string}[]>([])
const loading = ref(false)

let abortController: AbortController | null = null

// Bypass built-in filter since the async lookup handles filtering
const noFilter = (options: SelectOption[]) => options

// Simulate an async search (e.g. an API call) with AbortController support
function searchUsers(query: string, signal: AbortSignal): Promise<{id: number; name: string}[]> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      const term = query.toLowerCase()
      resolve(allUsers.filter((u) => u.name.toLowerCase().includes(term)))
    }, 500)

    signal.addEventListener('abort', () => {
      clearTimeout(timeoutId)
      reject(new DOMException('Aborted', 'AbortError'))
    })
  })
}

watch(searchQuery, async (query) => {
  // Cancel any in-flight request
  if (abortController) {
    abortController.abort()
  }

  if (!query || query.length < 2) {
    filteredUsers.value = []
    return
  }

  abortController = new AbortController()
  loading.value = true

  try {
    filteredUsers.value = await searchUsers(query, abortController.signal)
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return
    }
    filteredUsers.value = []
  } finally {
    loading.value = false
  }
})
</script>
