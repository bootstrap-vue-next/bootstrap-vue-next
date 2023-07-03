# Form Tags

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Lightweight custom tagged input form control, with options for customized interface rendering, duplicate tag detection and optional tag validation.

</div>

Tags are arrays of short strings, used in various ways such as assigning categories. Use the default user interface, or create your own custom interface via the use of the default scoped slot.

## Docs to be written

## Example

<BCard class="bg-body-tertiary">

```vue
<template>
  <label for="tags-basic">Type a new tag and press enter</label>
  <BFormTags input-id="tags-basic" v-model="value" />
  <p class="mt-2">Value: {{ value }}</p>
</template>

<script setup lang="ts">
const value = ref<string[]>(['apple', 'orange'])
</script>
```

</BCard>

<script setup lang="ts">
import {BCard} from 'bootstrap-vue-next'
</script>
