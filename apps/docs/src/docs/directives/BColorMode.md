# BColorMode

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

The `BColorMode` directive is similar to [useColorMode](../composables/useColorMode.md) but provides a more low level directive for placement on individual components. It is useful when you want to make an element have one color mode, but do not want the overhead of the composable variant.

</div>

## Demo

<HighlightCard>
  <BCard v-b-color-mode="currentColor">
    <BButton @click="changeColor">
      Current color: {{ currentColor }}
    </BButton>
  </BCard>
  <template #html>

```vue
<template>
  <BCard v-b-color-mode="currentColor">
    <BButton @click="changeColor"> Current color: {{ currentColor }} </BButton>
  </BCard>
</template>

<script setup lang="ts">
import {vBColorMode} from 'bootstrap-vue-next'

// Unlike the composable variant, this is not strongly typed by default!
const currentColor = ref<'light' | 'dark'>('dark')

const changeColor = () => {
  currentColor.value = currentColor.value === 'dark' ? 'light' : 'dark'
}
</script>
```

  </template>

</HighlightCard>

<script setup lang="ts">
import {ref} from 'vue'
import {vBColorMode, BButton, BCard} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'

const currentColor = ref<'light' | 'dark'>('dark')

const changeColor = () => {
  currentColor.value = currentColor.value === 'dark' ? 'light' : 'dark'
}
</script>
