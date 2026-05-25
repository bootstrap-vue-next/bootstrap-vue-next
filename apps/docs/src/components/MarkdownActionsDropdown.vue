<template>
  <BDropdown
    split
    class="me-2"
    variant="outline-info"
    split-variant="outline-info"
    toggle-text="More markdown actions"
    :disabled="!actionsReady"
    :split-disabled="!actionsReady"
    @split-click="onSplitClick"
  >
    <template #button-content>
      {{ copied ? 'Copied as Markdown' : 'Copy as Markdown' }}
    </template>

    <BDropdownItemButton :disabled="!actionsReady" @click="onDownloadClick">
      Download Markdown
    </BDropdownItemButton>
    <BDropdownItemButton :disabled="!actionsReady" @click="onViewClick">
      View as Markdown
    </BDropdownItemButton>
    <BDropdownDivider />
    <BDropdownItemButton
      v-for="provider in aiProviders"
      :key="provider.name"
      :disabled="!actionsReady"
      @click="onOpenInAI(provider)"
    >
      Open in {{ provider.name }}
    </BDropdownItemButton>
  </BDropdown>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import {
  defaultAiProviders,
  useCopyOrDownloadAsMarkdownButtons,
  type MarkdownAiProvider,
} from 'vitepress-plugin-llms/vitepress-components'

const supportedAiProviderNames = new Set(['ChatGPT', 'Claude'])

const aiProviders = defaultAiProviders.filter(({ name }) => supportedAiProviderNames.has(name))

const { copied, copyAsMarkdown, downloadMarkdown, markdownPageURL, openInAI, viewAsMarkdown } =
  useCopyOrDownloadAsMarkdownButtons({
    aiProviders,
  })

const isMounted = ref(false)

const actionsReady = computed(() => isMounted.value && Boolean(markdownPageURL.value))

const onSplitClick = async () => {
  if (!actionsReady.value) return
  await copyAsMarkdown()
}

const onDownloadClick = async () => {
  if (!actionsReady.value) return
  await downloadMarkdown()
}

const onViewClick = () => {
  if (!actionsReady.value) return
  viewAsMarkdown()
}

const onOpenInAI = (provider: MarkdownAiProvider) => {
  if (!actionsReady.value) return
  openInAI(provider)
}

onMounted(() => {
  isMounted.value = true
})
</script>
