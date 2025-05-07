<template>
  <BNav vertical small class="otp-nav">
    <PageContentsItem
      v-for="item in contents?.children"
      :key="item.id!"
      :item="item"
      :active-id="filteredActiveId(item, activeId)"
    />
  </BNav>
</template>

<script setup lang="ts">
import type {ContentsItem} from '../types'
import {filteredActiveId} from '../utils'

defineProps<{contents?: ContentsItem; activeId: string | null}>()
</script>

<style lang="scss">
.nav.otp-nav {
  padding-left: 0.5rem;
}

a.nav-link.otp-link {
  padding: 0;
  padding-left: 0.25rem;
  color: var(--bs-secondary-color);
  font-size: 0.75rem;
  border-left: 0.125rem solid transparent;

  &.active {
    color: var(--bs-primary-text-emphasis);
    border-left-color: var(--bs-primary-text-emphasis);
  }

  &:hover {
    font-weight: bold;
  }
}
</style>
