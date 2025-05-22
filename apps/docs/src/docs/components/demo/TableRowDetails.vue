<template>
  <div>
    <BTable :items="items" :fields="fields" striped responsive="sm">
      <template #cell(show_details)="row">
        <BButton size="sm" class="mr-2" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </BButton>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <BFormCheckbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Details via check
        </BFormCheckbox>
      </template>

      <template #row-details="row">
        <BCard>
          <BRow class="mb-2">
            <BCol sm="3" class="text-sm-right"><b>Age:</b></BCol>
            <BCol>{{ row.item.age }}</BCol>
          </BRow>

          <BRow class="mb-2">
            <BCol sm="3" class="text-sm-right"><b>Is Active:</b></BCol>
            <BCol>{{ row.item.isActive }}</BCol>
          </BRow>

          <BButton size="sm" @click="row.toggleDetails">Hide Details</BButton>
        </BCard>
      </template>
    </BTable>
  </div>
</template>

<script setup lang="ts">
const fields = ['first_name', 'last_name', 'show_details']
const items = [
  {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {
    isActive: false,
    age: 89,
    first_name: 'Geneva',
    last_name: 'Wilson',
    _showDetails: true,
  },
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'},
]
</script>
