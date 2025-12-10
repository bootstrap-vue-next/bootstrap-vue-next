<template>
  <BContainer class="my-5">
    <h1>BFormFile VueUse Implementation Test - Phase 2</h1>

    <div class="alert alert-info mb-4">
      <h5>Event Log (check browser console for details)</h5>
      <div style="max-height: 200px; overflow-y: auto; font-family: monospace; font-size: 12px">
        <div v-for="(log, idx) in eventLog" :key="idx" class="mb-1">
          <strong>{{ log.time }}:</strong> {{ log.event }} - {{ log.detail }}
        </div>
      </div>
    </div>

    <!-- Basic Single File with Events -->
    <section class="my-4 border p-3 rounded">
      <h2>1. Basic Single File + Events</h2>
      <BFormFile
        v-model="singleFile"
        @change="logEvent('change', $event, 'Basic')"
        @update:model-value="logEvent('update:model-value', $event, 'Basic')"
      />
      <p class="mt-2">
        <strong>v-model:</strong> {{ singleFile?.name || 'None' }}<br />
        <strong>Size:</strong> {{ singleFile ? formatBytes(singleFile.size) : 'N/A' }}
      </p>
    </section>

    <!-- Custom Browse Button Text + Placeholder -->
    <section class="my-4 border p-3 rounded">
      <h2>2. Custom Browse Text & Placeholder</h2>
      <BFormFile
        v-model="customBrowseFile"
        browse-text="Choose File..."
        placeholder="Drag file here or click to browse"
        @change="logEvent('change', $event, 'CustomBrowse')"
        @update:model-value="logEvent('update:model-value', $event, 'CustomBrowse')"
      />
      <p class="mt-2"><strong>Selected:</strong> {{ customBrowseFile?.name || 'None' }}</p>
      <p class="text-muted small">✓ Custom browse button text<br />✓ Custom placeholder text</p>
    </section>

    <!-- Multiple Files -->
    <section class="my-4 border p-3 rounded">
      <h2>3. Multiple Files</h2>
      <BFormFile
        v-model="multipleFiles"
        multiple
        browse-text="Select Files"
        placeholder="Drop multiple files here"
        @change="logEvent('change', $event, 'Multiple')"
      />
      <p class="mt-2"><strong>Selected:</strong> {{ multipleFiles?.length || 0 }} files</p>
      <ul v-if="multipleFiles?.length" class="mb-0">
        <li v-for="(file, idx) in multipleFiles" :key="idx">
          {{ file.name }} ({{ formatBytes(file.size) }})
        </li>
      </ul>
    </section>

    <!-- Directory Mode with $path -->
    <section class="my-4 border p-3 rounded">
      <h2>4. Directory Mode (webkitdirectory)</h2>
      <BFormFile
        v-model="directoryFiles"
        directory
        browse-text="Choose Folder"
        placeholder="Select a directory"
        @change="logEvent('change', $event, 'Directory')"
      />
      <p class="mt-2">
        <strong>Selected:</strong> {{ directoryFiles?.length || 0 }} files from directory
      </p>
      <ul v-if="directoryFiles?.length" class="mb-0">
        <li v-for="(file, idx) in directoryFiles.slice(0, 5)" :key="idx">
          {{ (file as any).$path || file.webkitRelativePath || file.name }}
        </li>
        <li v-if="directoryFiles.length > 5" class="text-muted">
          ... and {{ directoryFiles.length - 5 }} more files
        </li>
      </ul>
      <p class="text-muted small mt-2">✓ Files should have $path or webkitRelativePath property</p>
    </section>

    <!-- Accept Filter -->
    <section class="my-4 border p-3 rounded">
      <h2>5. Accept Filter (images only)</h2>
      <BFormFile
        v-model="imageFile"
        accept="image/*"
        browse-text="Select Image"
        placeholder="Only image files allowed"
        @change="logEvent('change', $event, 'ImageOnly')"
      />
      <p class="mt-2"><strong>Selected:</strong> {{ imageFile?.name || 'None' }}</p>
      <p v-if="imageFile" class="text-success small">✓ File type: {{ imageFile.type }}</p>
    </section>

    <!-- Disabled State -->
    <section class="my-4 border p-3 rounded">
      <h2>6. Disabled State</h2>
      <BFormFile
        v-model="disabledFile"
        disabled
        browse-text="Browse"
        placeholder="This input is disabled"
      />
      <p class="text-muted small mt-2">✓ Should not be clickable or accept drops</p>
    </section>

    <!-- Size Variants -->
    <section class="my-4 border p-3 rounded">
      <h2>7. Size Variants</h2>
      <div class="mb-3">
        <label class="form-label">Small (size="sm")</label>
        <BFormFile v-model="smallFile" size="sm" browse-text="Browse" />
      </div>
      <div class="mb-3">
        <label class="form-label">Default</label>
        <BFormFile v-model="defaultFile" browse-text="Browse" />
      </div>
      <div class="mb-3">
        <label class="form-label">Large (size="lg")</label>
        <BFormFile v-model="largeFile" size="lg" browse-text="Browse" />
      </div>
    </section>

    <!-- Plain Mode -->
    <section class="my-4 border p-3 rounded">
      <h2>8. Plain Mode (Native Input)</h2>
      <BFormFile
        v-model="plainFile"
        plain
        @change="logEvent('change', $event, 'Plain')"
        @update:model-value="logEvent('update:model-value', $event, 'Plain')"
      />
      <p class="mt-2"><strong>Selected:</strong> {{ plainFile?.name || 'None' }}</p>
      <p class="text-muted small">✓ Should render native file input (no custom UI)</p>
    </section>

    <!-- Drop Placeholder -->
    <section class="my-4 border p-3 rounded">
      <h2>9. Custom Drop Placeholder</h2>
      <BFormFile
        v-model="dropFile"
        browse-text="Browse"
        placeholder="Drag file here"
        drop-placeholder="Release to upload!"
        @change="logEvent('change', $event, 'DropPlaceholder')"
      />
      <p class="mt-2"><strong>Selected:</strong> {{ dropFile?.name || 'None' }}</p>
      <p class="text-muted small">✓ Drag a file over to see custom drop placeholder</p>
    </section>

    <!-- No Drop Mode -->
    <section class="my-4 border p-3 rounded">
      <h2>10. No Drop Mode (no-drop)</h2>
      <BFormFile
        v-model="noDropFile"
        no-drop
        browse-text="Browse Only"
        placeholder="No drag & drop allowed"
        @change="logEvent('change', $event, 'NoDrop')"
      />
      <p class="mt-2"><strong>Selected:</strong> {{ noDropFile?.name || 'None' }}</p>
      <p class="text-muted small">✓ Should NOT accept drag & drop</p>
    </section>

    <!-- State Validation -->
    <section class="my-4 border p-3 rounded">
      <h2>11. Validation States</h2>
      <div class="mb-3">
        <label class="form-label">Valid State (state=true)</label>
        <BFormFile v-model="validFile" :state="true" browse-text="Browse" />
        <div class="valid-feedback d-block">Looks good!</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Invalid State (state=false)</label>
        <BFormFile v-model="invalidFile" :state="false" browse-text="Browse" />
        <div class="invalid-feedback d-block">Please select a file.</div>
      </div>
      <div class="mb-3">
        <label class="form-label">No State (state=null)</label>
        <BFormFile v-model="noStateFile" :state="null" browse-text="Browse" />
      </div>
    </section>

    <!-- Reset Test -->
    <section class="my-4 border p-3 rounded">
      <h2>12. Reset Functionality</h2>
      <BFormFile
        v-model="resetFile"
        browse-text="Browse"
        @change="logEvent('change', $event, 'Reset')"
      />
      <p class="mt-2"><strong>Selected:</strong> {{ resetFile?.name || 'None' }}</p>
      <button class="btn btn-secondary btn-sm" @click="resetFile = null">
        Reset (set v-model to null)
      </button>
      <p class="text-muted small mt-2">✓ Click reset to test clearing the file</p>
    </section>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {BContainer, BFormFile} from './components'

// File refs
const singleFile = ref<File | null>(null)
const customBrowseFile = ref<File | null>(null)
const multipleFiles = ref<File[] | null>(null)
const directoryFiles = ref<File[] | null>(null)
const imageFile = ref<File | null>(null)
const disabledFile = ref<File | null>(null)
const smallFile = ref<File | null>(null)
const defaultFile = ref<File | null>(null)
const largeFile = ref<File | null>(null)
const plainFile = ref<File | null>(null)
const dropFile = ref<File | null>(null)
const noDropFile = ref<File | null>(null)
const validFile = ref<File | null>(null)
const invalidFile = ref<File | null>(null)
const noStateFile = ref<File | null>(null)
const resetFile = ref<File | null>(null)

// Event log
interface EventLogEntry {
  time: string
  event: string
  detail: string
}

const eventLog = ref<EventLogEntry[]>([])

const logEvent = (eventName: string, payload: unknown, source: string) => {
  const time = new Date().toLocaleTimeString()
  let detail = ''

  if (eventName === 'change') {
    detail = `${source} - Event target exists`
  } else if (eventName === 'update:model-value') {
    if (payload === null) {
      detail = `${source} - null (cleared)`
    } else if (Array.isArray(payload)) {
      detail = `${source} - ${payload.length} files`
    } else if (payload && typeof payload === 'object' && 'name' in payload) {
      detail = `${source} - ${(payload as File).name || 'unknown'}`
    }
  }

  eventLog.value.unshift({time, event: eventName, detail})
  if (eventLog.value.length > 20) eventLog.value.pop()

  // Also log to console for detailed inspection
  // eslint-disable-next-line no-console
  console.log(`[${time}] ${eventName}:`, payload)
}

const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${Math.round((bytes / Math.pow(k, i)) * 100) / 100} ${sizes[i]}`
}
</script>
