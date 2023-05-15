# useColorMode

> `useColorMode` provides a convenient utility to adjust the global color theme of your application. You can also use it to target specific components. Bootstrap's default behavior dictates that color modes are applied to all children in the branch. `useColorMode` is simply a wrapper for the [vueuse](https://vueuse.org/core/useColorMode/#usecolormode) utility

## Demo

<b-card ref="target">
    <b-button @click="changeColor">
        Current color: {{ mode }}
    </b-button>
</b-card>

```vue
<template>
    <b-card ref="target">
        <b-button @click="changeColor">
            Current color: {{ mode }}
        </b-button>
    </b-card>
</template>

<script setup lang="ts">
import {ref} from 'vue'
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

<script setup lang="ts">
import {ref} from 'vue'
import {useColorMode, BCard, BButton} from 'bootstrap-vue-next'

const target = ref<HTMLElement | null>(null)

const mode = useColorMode({
    selector: target,
})

const changeColor = () => {
    mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>
