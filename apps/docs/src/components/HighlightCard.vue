<template>
  <BCard no-body class="mb-5">
    <BCardBody v-if="$slots.default">
      <slot />
    </BCardBody>
    <template v-if="$slots.html">
      <div v-if="$slots.default" class="html d-flex justify-content-between align-items-center">
        <span>HTML</span>
        <BButton
          v-if="hasFileContent"
          size="sm"
          variant="outline-primary"
          :loading="isLoading"
          :loading-text="'Opening...'"
          title="Open in StackBlitz"
          aria-label="Open example in StackBlitz"
          @click="openInStackBlitz"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="me-1">
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
import {computed, ref} from 'vue'

// Import template files as raw text from the original Vite template
import indexHtml from '../../../../templates/vite/index.html?raw'
import mainTs from '../../../../templates/vite/src/main.ts?raw'
import appVue from '../../../../templates/vite/src/App.vue?raw'
import packageJson from '../../../../templates/vite/package.json?raw'
import viteConfig from '../../../../templates/vite/vite.config.mts?raw'
import tsConfig from '../../../../templates/vite/tsconfig.json?raw'
import tsConfigNode from '../../../../templates/vite/tsconfig.node.json?raw'

interface Props {
  fullFile?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  fullFile: '',
  title: 'BootstrapVueNext Example',
})

// Loading state for StackBlitz button
const isLoading = ref(false)

// Decode base64 content with proper UTF-8 handling and cross-environment compatibility
const decodeFullFile = (encoded: string) => {
  if (!encoded) return ''

  if (typeof globalThis.atob === 'function') {
    try {
      const binary = globalThis.atob(encoded)
      const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
      return new TextDecoder().decode(bytes)
    } catch {
      // fall through to the Node-friendly path
    }
  }

  const nodeBuffer = (
    globalThis as typeof globalThis & {Buffer?: typeof import('node:buffer').Buffer}
  ).Buffer
  if (nodeBuffer) {
    try {
      return nodeBuffer.from(encoded, 'base64').toString('utf-8')
    } catch {
      // ignore and return original payload
    }
  }

  return encoded
}

// Check if we have content to show the StackBlitz button
const hasFileContent = computed(() => Boolean(props.fullFile))

// Decoded file content for StackBlitz (reactive)
const fullFileContent = computed(() => decodeFullFile(props.fullFile))

const createProjectFiles = () => ({
  'index.html': indexHtml,
  'src/main.ts': mainTs,
  'src/App.vue': appVue,
  'src/components/Comp.vue': fullFileContent.value || '',
  'package.json': packageJson,
  'vite.config.ts': viteConfig,
  'tsconfig.json': tsConfig,
  'tsconfig.node.json': tsConfigNode,
})

const openInStackBlitz = async () => {
  if (!props.fullFile || isLoading.value) return

  isLoading.value = true

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
  } finally {
    // Reset loading state after a short delay to show completion
    setTimeout(() => {
      isLoading.value = false
    }, 500)
  }
}
</script>
