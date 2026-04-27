<template>
  <nav :id="props.id" aria-label="breadcrumb">
    <ol class="breadcrumb" :class="props.olClass" v-bind="props.olAttrs">
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
import {useBreadcrumb} from '../../composables/useBreadcrumb'
import {useDefaults} from '../../composables/useDefaults'
import BBreadcrumbItem from './BBreadcrumbItem.vue'
import type {BBreadcrumbProps, BBreadcrumbSlots, BreadcrumbItem} from '../../types'

const _props = withDefaults(defineProps<BBreadcrumbProps>(), {
  items: undefined,
  id: undefined,
  olAttrs: undefined,
  olClass: undefined,
})
const props = useDefaults(_props, 'BBreadcrumb')
defineSlots<BBreadcrumbSlots>()

const breadcrumb = useBreadcrumb(() => props.id || null)

const breadcrumbItemObjects = computed<BreadcrumbItem[]>(() => {
  const localItems = props.items || breadcrumb.items?.value || []
  let activeDefined = false
  return localItems.map((item, idx) => {
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
})
</script>
