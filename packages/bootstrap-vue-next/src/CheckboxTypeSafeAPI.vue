<template>
  <div>
    <h3>Type-Safe Checkbox Groups - Simplified Approach</h3>

    <!-- Primitives: Zero configuration needed -->
    <div>
      <h4>Primitives (string[])</h4>
      <BFormCheckboxGroup
        v-model="selectedPrimitives"
        :options="['Option A', 'Option B', 'Option C']"
      />
      <p>Selected: {{ selectedPrimitives }}</p>
    </div>

    <!-- Standard format: No field mapping needed -->
    <div>
      <h4>Standard Format ({value: V; text?: string})</h4>
      <BFormCheckboxGroup v-model="selectedStandard" :options="standardOptions" />
      <p>Selected: {{ selectedStandard }}</p>
    </div>

    <!-- Explicit field props: Type-safe for this case -->
    <div>
      <h4>Explicit Field Props (Custom Field Names)</h4>
      <BFormCheckboxGroup
        v-model="selectedCustom"
        :options="customFieldOptions"
        value-field="id"
        text-field="name"
        disabled-field="inactive"
      />
      <p>Selected IDs: {{ selectedCustom }}</p>
    </div>

    <!-- Named interface with mapping: Type-safe the right way -->
    <div>
      <h4>Named Interface (with Computed Mapping)</h4>
      <BFormCheckboxGroup v-model="selectedMapped" :options="mappedOptions" />
      <p>Selected UserIDs: {{ selectedMapped }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {BFormCheckboxGroup} from './components'
import {computed, ref} from 'vue'

// 1. PRIMITIVES: Works directly, fully type-safe
const selectedPrimitives = ref<string[]>([])

// 2. STANDARD FORMAT: Works directly, fully type-safe
const standardOptions: Array<{value: string; text?: string; disabled?: boolean}> = [
  {value: 'a', text: 'Option A'},
  {value: 'b', text: 'Option B'},
  {value: 'c', text: 'Option C'},
]
const selectedStandard = ref<string[]>([])

// 3. CUSTOM FIELD NAMES: Use explicit field props at runtime
// TypeScript sees this as {id: number, name: string, inactive: boolean}
// but field props extract values, text, and disabled at runtime
const customFieldOptions: Array<{id: number; name: string; inactive: boolean}> = [
  {id: 1, name: 'Option 1', inactive: false},
  {id: 2, name: 'Option 2', inactive: false},
  {id: 3, name: 'Option 3', inactive: true},
]
const selectedCustom = ref<number[]>([])

// 4. NAMED INTERFACE: Map to standard format for full type safety
interface ApiUser {
  userId: number
  userName: string
  isActive: boolean
}
const usersFromAPI: ApiUser[] = [
  {userId: 101, userName: 'Alice', isActive: true},
  {userId: 102, userName: 'Bob', isActive: true},
  {userId: 103, userName: 'Charlie', isActive: false},
]

// Map to standard format - this gives us full type safety!
const mappedOptions = computed(() =>
  usersFromAPI.map((user) => ({
    value: user.userId,
    text: user.userName,
    disabled: !user.isActive,
  }))
)
const selectedMapped = ref<number[]>([])
</script>

<style scoped>
h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

h4 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

div > div {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 0.25rem;
}

p {
  margin: 0.5rem 0 0 0;
  color: #666;
  font-size: 0.9rem;
}
</style>
