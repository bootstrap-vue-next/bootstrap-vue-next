<template>
  <div>
    <BContainer class="lead mb-5">
      <BRow>
        <BCol>
          <slot><p v-html="renderedDescription" /></slot>
        </BCol>
      </BRow>
      <BRow v-if="showButtons">
        <BCol>
          <ViewSourceButton v-if="sourceHref" :href="sourceHref" class="me-2">
            View Source
          </ViewSourceButton>
          <ViewSourceButton v-if="editHref" :href="editHref">
            Edit this page on GitHub
          </ViewSourceButton>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import {computed, inject} from 'vue'
import {useData} from 'vitepress'
import {useEditThisPageOnGithub} from '../composables/useEditLink'
import {useMarkdownRenderer} from '../composables/useMarkdownRenderer'
import ViewSourceButton from './ViewSourceButton.vue'
import {appInfoKey} from '../../.vitepress/theme/keys'

const globalData = inject(appInfoKey)

type Base = Extract<
  keyof Exclude<typeof globalData, undefined>,
  'githubComposablesDirectory' | 'githubDirectivesDirectory'
>

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: Record<string, never>) => any
}>()

const props = withDefaults(
  defineProps<{
    withPageHeader?: boolean
    // Optional prop to specify which base directory to use for source links
    base?: Base
  }>(),
  {
    withPageHeader: true,
    base: undefined,
  }
)

const {frontmatter} = useData()
const description = computed(() => (frontmatter.value?.description as string) || '')
const renderedDescription = useMarkdownRenderer(description)

// Read path from frontmatter
const path = computed(() => (frontmatter.value?.path as string | null) ?? null)

const editHref = useEditThisPageOnGithub()
const sourceHref = computed(() =>
  path.value && props.base && globalData ? `${globalData[props.base]}/${path.value}` : null
)

const showButtons = computed(() => props.withPageHeader && (editHref.value || sourceHref.value))
</script>
