<template>
  <div class="my-2">
    <h2>Pagination</h2>
    <div class="d-flex">
      <b-pagination
        v-model="paginationPageNumber"
        :limit="paginationLimit"
        :total-rows="paginationRows"
        :per-page="paginationPerPage"
        first-number
        last-number
        @page-click="handlePaginationPageClick"
      ></b-pagination>
      <span class="mx-3">Select page 7 is prevented</span>
    </div>
    <b-pagination
      v-model="paginationPageNumber"
      :limit="paginationLimit"
      :total-rows="paginationRows"
      :per-page="paginationPerPage"
    ></b-pagination>
    <b-pagination
      v-model="paginationPageNumber"
      :limit="paginationLimit"
      :total-rows="paginationRows"
      :per-page="paginationPerPage"
      prev-text="Prev"
      next-text="Next"
      first-text="First"
      last-text="Last"
    ></b-pagination>
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
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
      </template>
      <template #page="{page, active}">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </b-pagination>
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
    ></b-pagination>
    <div class="overflow-auto">
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
      ></b-pagination>
    </div>
    Current page : {{ paginationPageNumber }}
    <div>
      <button class="btn btn-primary" @click="paginationPageNumber = 4">Set to page 4</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {BvEvent} from 'bootstrap-vue-3'
import {ref} from 'vue'

const paginationPageNumber = ref(19)
const paginationLimit = ref(8)
const paginationPerPage = ref(2)
const paginationRows = ref(40)
const paginationDangerClasses = ref(['border-danger', 'border-5', 'border'])

const handlePaginationPageClick = (event: BvEvent, page: number) => {
  if (page === 7) {
    event.preventDefault()
  }
}
</script>
