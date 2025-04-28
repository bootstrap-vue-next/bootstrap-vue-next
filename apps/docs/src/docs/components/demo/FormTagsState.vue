<template>
  <div>
    <label for="tags-state-event">Enter tags</label>
    <BFormTags
      v-model="tags"
      input-id="tags-state-event"
      :tag-validator="validator"
      placeholder="Enter tags (3-5 characters) separated by space"
      separator=" "
      @tag-state="onTagState"
    />
    <p class="mt-2">Tags: {{ tags }}</p>
    <p>Event values:</p>
    <ul>
      <li>validTags: {{ validTags }}</li>
      <li>invalidTags: {{ invalidTags }}</li>
      <li>duplicateTags: {{ duplicateTags }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tags = ref<string[]>([])
const validTags = ref<string[]>([])
const invalidTags = ref<string[]>([])
const duplicateTags = ref<string[]>([])
const onTagState = (valid: string[], invalid: string[], duplicate: string[]) => {
  validTags.value = valid
  invalidTags.value = invalid
  duplicateTags.value = duplicate
}
const validator = (tag: string) => tag.length > 2 && tag.length < 6
</script>
