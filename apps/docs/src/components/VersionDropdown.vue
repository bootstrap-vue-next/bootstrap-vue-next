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
import {computed, onMounted, ref} from 'vue'
import {data as versionsData} from '../data/versions.data'
import ChevronDown from '~icons/bi/chevron-down'
import {useData} from 'vitepress'

const {site} = useData()

// Detect current version from the URL path
const currentVersion = ref('latest')

onMounted(() => {
  // Parse version from URL: /bootstrap-vue-next/v0.43.1/ or /bootstrap-vue-next/latest/
  const match = window.location.pathname.match(/\/bootstrap-vue-next\/(v\d+\.\d+\.\d+|latest)\//)
  if (match) {
    currentVersion.value = match[1]
  }
})

const versions = computed(() => versionsData)

/**
 * Generate URL for a specific version
 * Returns version-specific paths for deployed documentation
 */
const getVersionUrl = (version: string): string => {
  // Get the base without the version part
  const baseWithoutVersion = '/bootstrap-vue-next/'
  return `${baseWithoutVersion}${version}/`
}
</script>

<style scoped>
.version-text {
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
