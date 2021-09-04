<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <slot name="prepend" />
      <b-breadcrumb-item v-for="(item, i) in computedItems" :key="i" v-bind="item">
        {{ item.text }}
      </b-breadcrumb-item>
      <slot name="append" />
    </ol>
  </nav>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {useBreadcrumb} from '../composables/useBreadcrumb'
import {BreadcrumbItem} from '../types'
import BBreadcrumbItem from './BBreadcrumbItem.vue'

export default defineComponent({
  name: 'BBreadcrumb',
  components: {
    BBreadcrumbItem,
  },
  props: {
    items: {type: Array as PropType<BreadcrumbItem[]>},
  },
  setup(props) {
    const breadcrumb = useBreadcrumb()

    const computedItems = computed(() => props.items || breadcrumb?.items || [])

    return {
      computedItems,
    }
  },
})
</script>
