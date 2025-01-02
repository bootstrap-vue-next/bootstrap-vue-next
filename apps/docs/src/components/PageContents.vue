<template>
  <BNav v-if="headers.length > 0" vertical small class="otp-nav">
    <PageContentsItem v-for="header in headers" :key="header.slug" :item="header" />
    <BNavItem v-if="isComponentPage" href="#component-reference" link-class="otp-link"
      >Component Reference</BNavItem
    >
  </BNav>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useData} from 'vitepress'

const data = useData()
const headers = computed(() => data.page.value.headers)
const isComponentPage = computed(() => data.page.value.relativePath.includes('/components/'))
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
    font-weight: bold;
  }

  &:hover {
    color: var(--bs-primary-text-emphasis);
    border-left-color: var(--bs-primary-text-emphasis);
    font-weight: bold;
  }
}
</style>
