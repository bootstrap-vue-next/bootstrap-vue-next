<template>
  <BNavItem :href="buildLink(item)" link-class="otp-link" :active="item.id === activeId">
    <template #default>{{ props.item.text }}</template>
    <template #after>
      <BNav v-show="isVisible" vertical small class="otp-nav">
        <PageContentsItem
          v-for="child in item.children"
          :key="child.id!"
          :item="child"
          :active-id="filteredActiveId(item, activeId)"
        />
      </BNav>
    </template>
  </BNavItem>
</template>

<script setup lang="ts">
import type {ContentsItem} from '../types'
import {filteredActiveId} from '../utils'
import {computed} from 'vue'

const props = defineProps<{
  item: ContentsItem
  activeId: string | null
}>()

const buildLink = (item: ContentsItem): string => `#${item.id}`

const childrenVisible = (item: ContentsItem): boolean =>
  !!item.children?.length &&
  item.children.some((child) => child.id === props.activeId || childrenVisible(child))

const isVisible = computed(() => props.item.id === props.activeId || childrenVisible(props.item))
</script>
