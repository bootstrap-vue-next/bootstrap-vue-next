<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <slot name="prepend" />
      <b-breadcrumb-item v-for="(item, i) in computedItems" :key="i" v-bind="item">
        {{ item.text }}
      </b-breadcrumb-item>
      <slot />
      <slot name="append" />
    </ol>
  </nav>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {useBreadcrumb} from '../../composables/useBreadcrumb'
import {BreadcrumbItem} from '../../types'
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

    const computedItems = computed(() => {
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
      return items as BreadcrumbItem[]
    })

    return {
      computedItems,
    }
  },
})
</script>
