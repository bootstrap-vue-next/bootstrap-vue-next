<template>
  <div>
    <BTable
      v-model:expanded-items="expandedItems"
      :items="items"
      :fields="fields"
      striped
      responsive="sm"
    >
      <template #cell(show_details)="row">
        <BButton
          size="sm"
          class="mr-2"
          @click="row.toggleExpansion"
        >
          {{ row.expansionShowing ? 'Hide' : 'Show' }} Details
        </BButton>

        <!-- As `row.expansionShowing` is one-way, we call the toggleExpansion function on @change -->
        <BFormCheckbox
          v-model="row.expansionShowing"
          @change="row.toggleExpansion"
        >
          Details via check
        </BFormCheckbox>
      </template>

      <template #row-expansion="row">
        <BCard>
          <BRow class="mb-2">
            <BCol
              sm="3"
              class="text-sm-right"
              ><b>Age:</b></BCol
            >
            <BCol>{{ row.item.age }}</BCol>
          </BRow>

          <BRow class="mb-2">
            <BCol
              sm="3"
              class="text-sm-right"
              ><b>Is Active:</b></BCol
            >
            <BCol>{{ row.item.isActive }}</BCol>
          </BRow>

          <BButton
            size="sm"
            @click="row.toggleExpansion"
            >Hide Details</BButton
          >
        </BCard>
      </template>
    </BTable>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const fields = ['first_name', 'last_name', 'show_details']
const items = [
  {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {
    isActive: false,
    age: 89,
    first_name: 'Geneva',
    last_name: 'Wilson',
  },
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'},
]
// The third row (Geneva Wilson) defaults to having details shown
const expandedItems = ref([items[2]])
// If we were using primary keys we would need the following
/*
const table = useTemplateRef<ComponentExposed<typeof BTable>>('table')
const expandedItems = ref([])

onMounted(() => {
  expandedItems.value.push(table.value?.expansion.get(items[2])) // Geneva Wilson
})

// The get function simply looks up by primary key
 */
</script>
