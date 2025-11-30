<template>
  <div>
    <BButton @click="toggleBusy">Toggle Busy State</BButton>

    <BTable :items="items" :busy="isBusy" class="mt-3" outlined>
      <!-- <template #table-busy>
        <div class="text-center text-danger my-2">
          <BSpinner class="align-middle" />
          <strong>Loading...</strong>
        </div>
      </template> -->
    </BTable>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const isBusy = ref(false)
const items = [
  {first_name: 'Dickerson', last_name: 'MacDonald', age: 40},
  {first_name: 'Larsen', last_name: 'Shaw', age: 21},
  {first_name: 'Geneva', last_name: 'Wilson', age: 89},
  {first_name: 'Jami', last_name: 'Carney', age: 38},
]

const toggleBusy = () => {
  isBusy.value = !isBusy.value
}
</script>
