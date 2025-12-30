<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    :class="iconClass"
    :style="{opacity: iconOpacity}"
    viewBox="0 0 16 16"
    aria-hidden="true"
  >
    <path fill-rule="evenodd" :d="iconPath" />
  </svg>
</template>

<script setup lang="ts" generic="Items">
import {computed} from 'vue'
import type {BTableInitialSortDirection, BTableSortBy, TableField} from '../types/TableTypes'

const props = defineProps<{
  fieldInfo: TableField<Items>
  sortBy?: readonly BTableSortBy[]
  initialSortDirection?: BTableInitialSortDirection
}>()

const currentSort = computed(() => props.sortBy?.find((el) => el.key === props.fieldInfo.key))

const ascPath =
  'M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z'
const descPath =
  'M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z'

const resolvedDirection = computed(() => {
  if (currentSort.value?.order) return currentSort.value.order

  const fieldInitialDirection = props.fieldInfo.initialSortDirection || props.initialSortDirection

  if (fieldInitialDirection === 'last') {
    const lastSorted = [...(props.sortBy ?? [])].reverse().find((sort) => sort.order !== undefined)
    return lastSorted?.order || 'asc'
  }

  return fieldInitialDirection === 'desc' ? 'desc' : 'asc'
})

const iconPath = computed(() => (resolvedDirection.value === 'desc' ? descPath : ascPath))

const iconClass = computed(() =>
  resolvedDirection.value === 'desc' ? 'bi bi-arrow-down-short' : 'bi bi-arrow-up-short'
)

const iconOpacity = computed(() => (currentSort.value?.order ? 1 : 0.4))
</script>
