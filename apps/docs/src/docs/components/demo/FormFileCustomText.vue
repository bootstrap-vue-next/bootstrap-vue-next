<template>
  <div>
    <BFormFile
      v-model="file1"
      browse-text="Choose File"
      placeholder="No file chosen"
    />
    <div class="mt-3">
      Selected: <strong>{{ file1?.name || 'None' }}</strong>
    </div>

    <hr />

    <BFormFile
      v-model="file2"
      browse-text="Pick a File"
      placeholder="Select a document"
      class="mt-3"
    />
    <div class="mt-3">
      Selected: <strong>{{ file2?.name || 'None' }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const file1 = ref<File | null>(null)
const file2 = ref<File | null>(null)
</script>
