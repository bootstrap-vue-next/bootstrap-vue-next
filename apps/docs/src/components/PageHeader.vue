<template>
  <BContainer class="lead mb-5">
    <BRow>
      <BCol>
        <slot><p v-html="renderedDescription" /></slot>
      </BCol>
    </BRow>
    <BRow v-if="withPageHeader">
      <BCol>
        <ViewSourceButton :href> Edit this page on GitHub </ViewSourceButton>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useData} from 'vitepress'
import {useEditThisPageOnGithub} from '../composables/useEditLink'
import {useMarkdownRenderer} from '../composables/useMarkdownRenderer'
import ViewSourceButton from './ViewSourceButton.vue'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: Record<string, never>) => any
}>()

withDefaults(
  defineProps<{
    withPageHeader?: boolean
  }>(),
  {
    withPageHeader: true,
  }
)

const {frontmatter} = useData()
const description = computed(() => frontmatter.value.description || '')
const renderedDescription = useMarkdownRenderer(description)

const href = useEditThisPageOnGithub()
</script>
