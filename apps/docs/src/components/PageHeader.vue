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
import {appInfoKey} from '../../.vitepress/theme/keys'
import {kebabToTitleCase} from '../utils/dataLoaderUtils'

interface AppInfo {
  githubComponentsDirectory: string
  githubComposablesDirectory: string
  githubDirectivesDirectory: string
}

const globalData = inject<AppInfo | undefined>(appInfoKey)

type Base = 'githubComponentsDirectory' | 'githubComposablesDirectory' | 'githubDirectivesDirectory'

/**
 * Convert kebab-case to PascalCase
 * @example toPascalCase('form-input') => 'FormInput'
 */
function toPascalCase(str: string): string {
  return kebabToTitleCase(str).replace(/\s+/g, '')
}

/**
 * Convert kebab-case to camelCase
 * @example toCamelCase('use-toast') => 'useToast'
 */
function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: Record<string, never>) => any
}>()

const props = withDefaults(
  defineProps<{
    withPageHeader?: boolean
  }>(),
  {
    withPageHeader: true,
  }
)

const {frontmatter, page} = useData()
const description = computed(() => (frontmatter.value?.description as string) || '')
const renderedDescription = useMarkdownRenderer(description)

// Infer the base directory from the current page path
const inferredBase = computed((): Base | null => {
  if (!page.value?.relativePath) return null

  const path = page.value.relativePath
  if (path.includes('/components/')) return 'githubComponentsDirectory'
  if (path.includes('/composables/')) return 'githubComposablesDirectory'
  if (path.includes('/directives/')) return 'githubDirectivesDirectory'

  return null
})

// Derive the source path from the current page URL and inferred base
const derivedPath = computed(() => {
  const base = inferredBase.value
  if (!base || !page.value?.relativePath) return null

  const segments = page.value.relativePath.split('/')
  const filename = segments[segments.length - 1]?.replace(/\.md$/i, '')

  if (!filename) return null

  if (base === 'githubComponentsDirectory') {
    // Convert filename (e.g., 'button', 'form-input') to component name (e.g., 'BButton', 'BFormInput')
    const componentName = `B${toPascalCase(filename)}`
    return `${componentName}/${componentName}.vue`
  } else if (base === 'githubComposablesDirectory') {
    // Composables: convert kebab-case to camelCase (e.g., 'use-toast' -> 'useToast')
    const composableName = toCamelCase(filename)
    return `${composableName}/index.ts`
  } else if (base === 'githubDirectivesDirectory') {
    // Directives: convert kebab-case to PascalCase (e.g., 'b-color-mode' -> 'BColorMode')
    const directiveName = toPascalCase(filename)
    return `${directiveName}/index.ts`
  }

  return null
})

// Allow frontmatter path to override if present (for special cases)
const path = computed(() => (frontmatter.value?.path as string | null) ?? derivedPath.value)

const editHref = useEditThisPageOnGithub()
const sourceHref = computed(() =>
  path.value && inferredBase.value && globalData
    ? `${globalData[inferredBase.value]}/${path.value}`
    : null
)

const showButtons = computed(() => props.withPageHeader && (editHref.value || sourceHref.value))
</script>
