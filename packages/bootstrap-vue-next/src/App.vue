<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Test BFormTags feedbackAriaLive</h2>

    <!-- Dynamic feedbackAriaLive -->
    <div class="mb-6">
      <h3 class="text-lg font-semibold">Dynamic feedbackAriaLive</h3>
      <label for="ariaLiveSelect" class="mr-2">Select feedbackAriaLive:</label>
      <select id="ariaLiveSelect" v-model="dynamicAriaLive" class="border rounded px-2 py-1">
        <option value="assertive">assertive</option>
        <option value="polite">polite</option>
        <option value="off">off</option>
      </select>
      <BFormTags
        v-model="dynamicTags"
        :feedback-aria-live="dynamicAriaLive"
        :tag-validator="validateTag"
        invalid-tag-text="Tags must be longer than 3 characters"
        duplicate-tag-text="Tag already exists"
        limit="3"
        limit-tags-text="Maximum 3 tags allowed"
        class="mt-2"
      />
      <div class="mt-2"><strong>Tags:</strong> {{ dynamicTags }}</div>
    </div>

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

    <div class="mt-4">
      <h3 class="text-lg font-semibold">Test Instructions</h3>
      <p>Use a screen reader (e.g., NVDA, VoiceOver) to test feedback announcements:</p>
      <ul class="list-disc pl-5">
        <li>
          <strong>Invalid Tag</strong>: Enter "abc" (too short). Expected:
          <ul class="list-circle pl-5">
            <li>Assertive: Interrupts with "Invalid tag(s): abc"</li>
            <li>Polite: Announces "Invalid tag(s): abc" without interrupting</li>
            <li>Off: No announcement</li>
          </ul>
        </li>
        <li>
          <strong>Duplicate Tag</strong>: Enter "hello" (already in tags). Expected:
          <ul class="list-circle pl-5">
            <li>Assertive: Interrupts with "Duplicate tag(s): hello"</li>
            <li>Polite: Announces "Duplicate tag(s): hello" without interrupting</li>
            <li>Off: No announcement</li>
          </ul>
        </li>
        <li>
          <strong>Limit Reached</strong>: Add three valid tags (e.g., "valid1", "valid2", "valid3").
          Expected:
          <ul class="list-circle pl-5">
            <li>Assertive: Interrupts with "Maximum 3 tags allowed"</li>
            <li>Polite: Announces "Maximum 3 tags allowed" without interrupting</li>
            <li>Off: No announcement</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {BFormTags} from './components'
import {ref} from 'vue'

const validateTag = (tag: string) => tag.length > 3

// Tags for dynamic feedbackAriaLive
const dynamicTags = ref(['hello', 'world'])
const dynamicAriaLive = ref<'assertive' | 'polite' | 'off'>('assertive')

// Tags for assertive (default)
const assertiveTags = ref(['hello', 'world'])

// Tags for polite
const politeTags = ref(['hello', 'world'])

// Tags for off
const offTags = ref(['hello', 'world'])
</script>
