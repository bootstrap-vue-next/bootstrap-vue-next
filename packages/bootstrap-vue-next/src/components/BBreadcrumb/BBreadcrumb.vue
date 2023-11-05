<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <slot name="prepend" />
      <BBreadcrumbItem v-for="(item, i) in breadcrumbItemObjects" :key="i" v-bind="item">
        {{ item.text }}
      </BBreadcrumbItem>
      <slot />
      <slot name="append" />
    </ol>
  </nav>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useBreadcrumb} from '../../composables'
import type {BreadcrumbItem, BreadcrumbItemObject} from '../../types'
import BBreadcrumbItem from './BBreadcrumbItem.vue'

const props = withDefaults(
  defineProps<{
    items?: BreadcrumbItem[]
  }>(),
  {items: undefined}
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  append?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prepend?: (props: Record<string, never>) => any
}>()

const breadcrumb = useBreadcrumb()

const breadcrumbItemObjects = computed<BreadcrumbItemObject[]>(() => {
  const localItems = props.items || breadcrumb?.items || []
  let activeDefined = false
  const items = localItems.map((item, idx) => {
    if (typeof item === 'string') {
      item = {text: item}
      if (idx < localItems.length - 1) item.href = '#'
    }
    if (item.active) activeDefined = true

    // Auto-detect active by position in list
    if (!item.active && !activeDefined) {
      item.active = idx + 1 === localItems.length
    }
    return item
  })
  return items
})
</script>
