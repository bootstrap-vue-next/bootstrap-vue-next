<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BPagination
          v-model="paginationPageNumber"
          :limit="paginationLimit"
          :total-rows="paginationRows"
          :per-page="paginationPerPage"
          first-number
          last-number
          @page-click="handlePaginationPageClick"
        />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <span class="mx-3">Select page 7 is prevented</span>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BPagination
          v-model="paginationPageNumber"
          :limit="paginationLimit"
          :total-rows="paginationRows"
          :per-page="paginationPerPage"
        />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BPagination
          v-model="paginationPageNumber"
          :limit="paginationLimit"
          :total-rows="paginationRows"
          :per-page="paginationPerPage"
          prev-text="Prev"
          next-text="Next"
          first-text="First"
          last-text="Last"
        />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BPagination
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
            <BSpinner small type="grow" />
            <BSpinner small type="grow" />
            <BSpinner small type="grow" />
          </template>
          <template #page="{page, active}">
            <b v-if="active">{{ page }}</b>
            <i v-else>{{ page }}</i>
          </template>
        </BPagination>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BPagination
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
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BPagination
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
      </BCol>
    </BRow>
    <BRow>
      <BCol> Current page : {{ paginationPageNumber }} </BCol>
    </BRow>
    <BRow>
      <BCol>
        <button class="btn btn-primary" @click="paginationPageNumber = 4">Set to page 4</button>
      </BCol>
    </BRow>
  </BContainer>
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
