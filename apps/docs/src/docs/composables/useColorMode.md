# useColorMode

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

'useColorMode' provides a convenient utility to adjust the global color theme of your application. You can also use it to target specific components. Bootstrap's default behavior dictates that color modes are applied to all children in the branch. `useColorMode` is simply a wrapper for the [vueuse](https://vueuse.org/core/useColorMode/#usecolormode) utility.

</div>

## Demo

<HighlightCard>
  <ClientOnly>
    <BCard ref="target">
      <BButton @click="changeColor">
        Current color: {{ mode }}
      </BButton>
    </BCard>
  </ClientOnly>
  <template #html>

```vue
<template>
  <BCard ref="target">
    <BButton @click="changeColor"> Current color: {{ mode }} </BButton>
  </BCard>
</template>

<script setup lang="ts">
import {useColorMode} from 'bootstrap-vue-next'

const target = ref<HTMLElement | null>(null)

const mode = useColorMode({
  selector: target,
})

const changeColor = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>
```

  </template>
</HighlightCard>

<script setup lang="ts">
import {ref} from 'vue'
import {useColorMode, BCard, BCardBody, BButton} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'

const target = ref<HTMLElement | null>(null)

const mode = useColorMode({
  selector: target,
})

const changeColor = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>
