<template>
  <BContainer>
    <h2 class="mt-4">Standard Usage</h2>
    
    <h3 class="mt-3">Basic (Multiple)</h3>
    <BFormFile v-model="files1" multiple />
    <div class="mt-2 small text-muted">Selected: {{ files1?.length || 0 }} files</div>
    
    <h3 class="mt-4">Invalid State</h3>
    <BFormFile v-model="files2" :state="false" multiple />
    <div class="invalid-feedback d-block">Please select valid files.</div>
    
    <h3 class="mt-4">Valid State</h3>
    <BFormFile v-model="files3" :state="true" multiple />
    <div class="valid-feedback d-block">Looks good!</div>
    
    <h3 class="mt-4">Single File</h3>
    <BFormFile v-model="file1" />
    <div class="mt-2 small text-muted">Selected: {{ file1?.name || 'None' }}</div>
    
    <h3 class="mt-4">With Label</h3>
    <BFormFile v-model="files4" label="Choose files" multiple />
    
    <h3 class="mt-4">Small Size</h3>
    <BFormFile v-model="files5" size="sm" multiple />
    
    <h3 class="mt-4">Large Size</h3>
    <BFormFile v-model="files6" size="lg" multiple />
    
    <h3 class="mt-4">Disabled</h3>
    <BFormFile v-model="files7" disabled multiple />
    
    <h3 class="mt-4">Custom Browse Text</h3>
    <BFormFile v-model="files8" browse-text="Select Files" multiple />
    
    <h3 class="mt-4">Custom Placeholder</h3>
    <BFormFile v-model="files9" placeholder="Choose your files..." multiple />
    
    <h2 class="mt-5">Plain Mode</h2>
    
    <h3 class="mt-3">Plain Basic</h3>
    <BFormFile v-model="files10" plain multiple />
    
    <h3 class="mt-4">Plain Invalid State</h3>
    <BFormFile v-model="files11" plain :state="false" multiple />
    <div class="invalid-feedback d-block">Please select valid files.</div>
    
    <h3 class="mt-4">Plain Valid State</h3>
    <BFormFile v-model="files12" plain :state="true" multiple />
    <div class="valid-feedback d-block">Looks good!</div>
    
    <h2 class="mt-5">Input Groups</h2>
    
    <h3 class="mt-3">With Prepend</h3>
    <div class="input-group">
      <span class="input-group-text">Upload</span>
      <BFormFile v-model="files13" multiple />
    </div>
    
    <h3 class="mt-4">With Append</h3>
    <div class="input-group">
      <BFormFile v-model="files14" multiple />
      <button class="btn btn-primary" type="button">Upload</button>
    </div>
    
    <h3 class="mt-4">With Both</h3>
    <div class="input-group">
      <span class="input-group-text">Files</span>
      <BFormFile v-model="files15" multiple />
      <button class="btn btn-success" type="button">Submit</button>
    </div>
    
    <h3 class="mt-4">Input Group - Invalid State</h3>
    <div class="input-group">
      <span class="input-group-text">Upload</span>
      <BFormFile v-model="files16" :state="false" multiple />
    </div>
    <div class="invalid-feedback d-block">Please select valid files.</div>
  </BContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const files1 = ref<File[] | null>(null)
const files2 = ref<File[] | null>(null)
const files3 = ref<File[] | null>(null)
const file1 = ref<File | null>(null)
const files4 = ref<File[] | null>(null)
const files5 = ref<File[] | null>(null)
const files6 = ref<File[] | null>(null)
const files7 = ref<File[] | null>(null)
const files8 = ref<File[] | null>(null)
const files9 = ref<File[] | null>(null)
const files10 = ref<File[] | null>(null)
const files11 = ref<File[] | null>(null)
const files12 = ref<File[] | null>(null)
const files13 = ref<File[] | null>(null)
const files14 = ref<File[] | null>(null)
const files15 = ref<File[] | null>(null)
const files16 = ref<File[] | null>(null)
</script>
