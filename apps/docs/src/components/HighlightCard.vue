<template>
  <BCard no-body class="mb-5">
    <BCardBody v-if="$slots.default">
      <slot />
    </BCardBody>
    <template v-if="$slots.html">
      <div v-if="$slots.default" class="html d-flex justify-content-between align-items-center">
        <span>HTML</span>
        <BButton
          v-if="fullFileContent"
          size="sm"
          variant="outline-primary"
          title="Open in StackBlitz"
          @click="openInStackBlitz"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.525-9.818z" />
          </svg>
          StackBlitz
        </BButton>
      </div>
      <BCardBody class="bg-body-tertiary">
        <slot name="html" />
      </BCardBody>
    </template>
  </BCard>
</template>

<script setup lang="ts">
import {computed} from 'vue'

// Import template files as raw text
import indexHtml from './stackblitz-templates/index.html?raw'
import mainTs from './stackblitz-templates/main.ts?raw'
import appVue from './stackblitz-templates/App.vue?raw'
import packageJson from './stackblitz-templates/package.json?raw'
import viteConfig from './stackblitz-templates/vite.config.ts?raw'
import tsConfig from './stackblitz-templates/tsconfig.json?raw'

interface Props {
  fullFile?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  fullFile: '',
  title: 'BootstrapVueNext Example',
})

// Decode the full file content for StackBlitz
const fullFileContent = computed(() => {
  if (!props.fullFile) return ''

  let decodedContent = ''
  try {
    decodedContent = atob(props.fullFile)
  } catch {
    decodedContent = props.fullFile
  }

  // Keep TypeScript syntax intact - no cleaning needed
  return decodedContent
})

const createProjectFiles = () => ({
  'index.html': indexHtml,
  'src/main.ts': mainTs,
  'src/App.vue': appVue,
  'src/components/Comp.vue': fullFileContent.value || '',
  'package.json': packageJson,
  'vite.config.ts': viteConfig,
  'tsconfig.json': tsConfig,
})

const openInStackBlitz = async () => {
  if (!fullFileContent.value) return

  try {
    // Dynamically import StackBlitz SDK
    const {default: sdk} = await import('@stackblitz/sdk')

    // Create a complete Vue project with BootstrapVueNext using node template
    // This gives us full control over the file structure
    const project = {
      title: props.title || 'BootstrapVueNext Example',
      description: 'Example from BootstrapVueNext documentation',
      template: 'node' as const,
      files: createProjectFiles(),
    }

    // Open the project in a new tab
    await sdk.openProject(project, {
      newWindow: true,
      openFile: 'src/components/Comp.vue',
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to open StackBlitz project:', error)
    // Fallback to basic StackBlitz
    window.open('https://stackblitz.com/fork/vue-ts', '_blank')
  }
}
</script>
