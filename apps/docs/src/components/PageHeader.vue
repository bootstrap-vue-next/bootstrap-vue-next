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
  'githubComponentsDirectory' | 'githubComposablesDirectory' | 'githubDirectivesDirectory'
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

const {frontmatter, page} = useData()
const description = computed(() => (frontmatter.value?.description as string) || '')
const renderedDescription = useMarkdownRenderer(description)

// Derive the source path from the current page URL and base
const derivedPath = computed(() => {
  if (!props.base || !page.value?.relativePath) return null

  const segments = page.value.relativePath.split('/')
  const filename = segments[segments.length - 1]?.replace('.md', '')

  if (!filename) return null

  if (props.base === 'githubComponentsDirectory') {
    // Convert filename (e.g., 'button', 'form-input') to component name (e.g., 'BButton', 'BFormInput')
    const componentName = `B${filename
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')}`
    return `${componentName}/${componentName}.vue`
  } else if (props.base === 'githubComposablesDirectory') {
    // Composables: filename is the composable name (e.g., 'useToast')
    return `${filename}/index.ts`
  } else if (props.base === 'githubDirectivesDirectory') {
    // Directives: filename is the directive name (e.g., 'BColorMode')
    return `${filename}/index.ts`
  }

  return null
})

// Allow frontmatter path to override if present (for special cases)
const path = computed(() => (frontmatter.value?.path as string | null) ?? derivedPath.value)

const editHref = useEditThisPageOnGithub()
const sourceHref = computed(() =>
  path.value && props.base && globalData ? `${globalData[props.base]}/${path.value}` : null
)

const showButtons = computed(() => props.withPageHeader && (editHref.value || sourceHref.value))
</script>
