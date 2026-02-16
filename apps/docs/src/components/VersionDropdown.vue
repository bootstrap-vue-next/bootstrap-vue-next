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

// Get current version from the URL or config
// In the future, this could be enhanced to read from the URL path
// e.g., /v0.40.0/docs or /latest/docs
const currentVersion = computed(() => {
  // For now, we're always on "latest" since we haven't implemented
  // multi-version deployment yet. This sets up the infrastructure.
  return 'latest'
})

const versions = computed(() => versionsData)

/**
 * Generate URL for a specific version
 * For now, all versions point to the same documentation
 * In the future, this should point to version-specific deployments
 * e.g., /v0.40.0/ or /latest/
 */
const getVersionUrl = (version: string): string => {
  // Current implementation: all versions point to same docs
  // since multi-version deployment is not yet implemented
  const baseUrl = site.value.base || '/'
  
  // TODO: When multi-version deployment is implemented:
  // if (version === 'latest') {
  //   return `${baseUrl}latest/`
  // }
  // return `${baseUrl}${version}/`
  
  return baseUrl
}
</script>

<style scoped>
.version-text {
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
