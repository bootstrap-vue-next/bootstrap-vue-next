<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-pagination
          v-model="paginationPageNumber"
          :limit="paginationLimit"
          :total-rows="paginationRows"
          :per-page="paginationPerPage"
          first-number
          last-number
          @page-click="handlePaginationPageClick"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <span class="mx-3">Select page 7 is prevented</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-pagination
          v-model="paginationPageNumber"
          :limit="paginationLimit"
          :total-rows="paginationRows"
          :per-page="paginationPerPage"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-pagination
          v-model="paginationPageNumber"
          :limit="paginationLimit"
          :total-rows="paginationRows"
          :per-page="paginationPerPage"
          prev-text="Prev"
          next-text="Next"
          first-text="First"
          last-text="Last"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-pagination
          v-model="paginationPageNumber"
          :total-rows="paginationRows"
          :per-page="paginationPerPage"
          class="mt-4"
        >
          <template #first-text>
            <span class="text-success">First</span>
          </template>
          <template #prev-text>
            <span class="text-danger">Prev</span>
          </template>
          <template #next-text>
            <span class="text-warning">Next</span>
          </template>
          <template #last-text>
            <span class="text-info">Last</span>
          </template>
          <template #ellipsis-text>
            <b-spinner small type="grow" />
            <b-spinner small type="grow" />
            <b-spinner small type="grow" />
          </template>
          <template #page="{page, active}">
            <b v-if="active">{{ page }}</b>
            <i v-else>{{ page }}</i>
          </template>
        </b-pagination>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-pagination
          v-model="paginationPageNumber"
          :limit="paginationLimit"
          :total-rows="paginationRows"
          :per-page="paginationPerPage"
          prev-text="Prev"
          next-text="Next"
          :first-class="paginationDangerClasses"
          first-text="First"
          last-text="Last"
          last-class="border border-4 border-info"
          ellipsis-class="border border-3 border-success"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-pagination
          v-model="paginationPageNumber"
          :limit="paginationLimit"
          :total-rows="paginationRows"
          :per-page="paginationPerPage"
          prev-text="Prev"
          next-text="Next"
          first-text="First"
          last-text="Last"
          align="end"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col> Current page : {{ paginationPageNumber }} </b-col>
    </b-row>
    <b-row>
      <b-col>
        <button class="btn btn-primary" @click="paginationPageNumber = 4">Set to page 4</button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {BvEvent} from 'bootstrap-vue-next'
import {ref} from 'vue'

const paginationPageNumber = ref(19)
const paginationLimit = ref(8)
const paginationPerPage = ref(2)
const paginationRows = ref(40)
const paginationDangerClasses = ['border-danger', 'border-5', 'border']

const handlePaginationPageClick = (event: BvEvent, page: number) => {
  if (page === 7) {
    event.preventDefault()
  }
}
</script>
