<template>
  <BNavItemDropdown toggle-class="px-0" no-caret>
    <template #button-content>
      <span class="version-text">{{ currentVersion }}</span>
      <ChevronDown height="0.8em" class="ms-1" />
    </template>
    <BDropdownItem
      v-for="ver in versions"
      :key="ver.version"
      :active="ver.version === currentVersion"
      :href="getVersionUrl(ver.version)"
    >
      {{ ver.version }}
      <span v-if="ver.isLatest" class="badge bg-primary ms-2">Current</span>
    </BDropdownItem>
  </BNavItemDropdown>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {data as versionsData} from '../data/versions.data'
import ChevronDown from '~icons/bi/chevron-down'
import {useData} from 'vitepress'

const {site} = useData()

// Detect current version from the URL path
// Extracts version from the site base path
const currentVersion = computed(() => {
  const currentBase = site.value.base
  // Match version in format: /some-path/v0.43.1/ or /some-path/latest/
  const match = currentBase.match(/\/(v\d+\.\d+\.\d+|latest)\/$/)
  return match ? match[1] : 'latest'
})

const versions = computed(() => versionsData)

/**
 * Generate URL for a specific version
 * Returns version-specific paths for deployed documentation
 * Derives the base path from the current site config
 */
const getVersionUrl = (version: string): string => {
  // Extract base without version: /bootstrap-vue-next/latest/ -> /bootstrap-vue-next/
  const currentBase = site.value.base
  const baseWithoutVersion = currentBase.replace(/\/(v\d+\.\d+\.\d+|latest)\/$/, '/')
  
  return `${baseWithoutVersion}${version}/`
}
</script>

<style scoped>
.version-text {
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
