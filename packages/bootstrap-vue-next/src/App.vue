<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Test BFormTags feedbackAriaLive</h2>

    <!-- Assertive (default) -->
    <div class="mb-6">
      <h3 class="text-lg font-semibold">feedbackAriaLive: assertive (default)</h3>
      <BFormTags
        v-model="assertiveTags"
        :tag-validator="validateTag"
        invalid-tag-text="Tags must be longer than 3 characters"
        duplicate-tag-text="Tag already exists"
        limit="3"
        limit-tags-text="Maximum 3 tags allowed"
      />
      <div class="mt-2"><strong>Tags:</strong> {{ assertiveTags }}</div>
    </div>

    <!-- Polite -->
    <div class="mb-6">
      <h3 class="text-lg font-semibold">feedbackAriaLive: polite</h3>
      <BFormTags
        v-model="politeTags"
        feedback-aria-live="polite"
        :tag-validator="validateTag"
        invalid-tag-text="Tags must be longer than 3 characters"
        duplicate-tag-text="Tag already exists"
        limit="3"
        limit-tags-text="Maximum 3 tags allowed"
      />
      <div class="mt-2"><strong>Tags:</strong> {{ politeTags }}</div>
    </div>

    <!-- Off -->
    <div class="mb-6">
      <h3 class="text-lg font-semibold">feedbackAriaLive: off</h3>
      <BFormTags
        v-model="offTags"
        feedback-aria-live="off"
        :tag-validator="validateTag"
        invalid-tag-text="Tags must be longer than 3 characters"
        duplicate-tag-text="Tag already exists"
        limit="3"
        limit-tags-text="Maximum 3 tags allowed"
      />
      <div class="mt-2"><strong>Tags:</strong> {{ offTags }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {BFormTags} from './components'
import {ref} from 'vue'

const validateTag = (tag: string) => tag.length > 3

// Tags for assertive (default)
const assertiveTags = ref(['hello', 'world'])

// Tags for polite
const politeTags = ref(['hello', 'world'])

// Tags for off
const offTags = ref(['hello', 'world'])
</script>
