<template>
  <div>
    <label for="tags-remove-on-delete">Enter new tags separated by space</label>
    <BFormTags
      v-model="value"
      input-id="tags-remove-on-delete"
      :input-attrs="{'aria-describedby': 'tags-remove-on-delete-help'}"
      separator=" "
      placeholder="Enter new tags separated by space"
      remove-on-delete
      no-add-on-enter
    />
    <BFormText id="tags-remove-on-delete-help" class="mt-2">
      Press <kbd>Backspace</kbd> to remove the last tag entered
    </BFormText>
    <p>Value: {{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref<string[]>(['apple', 'orange', 'grape'])
</script>
