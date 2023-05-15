# Form Tags

## Docs to be written

## Example

```vue-html
<template>
  <label for="tags-basic">Type a new tag and press enter</label>
  <b-form-tags input-id="tags-basic" v-model="value"></b-form-tags>
  <p class="mt-2">Value: {{ value }}</p>
</template>

<script setup lang="ts">
import {data} from '../../data/components/formTags.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {ref} from 'vue'

const value = ref<string[]>(['apple', 'orange'])
</script>
```
