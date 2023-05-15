# useBreadcrumb

> `useBreadcrumb` is a helper utility for the `b-breadcrumb` component. It provides a globally changable context so you can modify a breadcrumbs. It should be noted that the breacrumb component will automatically use the global context by default. `useBreadcrumb` requires the `createBreadcrumb` to be called once. Depending on the installation method, this is automatically called for you. If you're having troubles, try calling it once, preferrably at the app root

## Demo

<b-card>
    <b-breadcrumb />
    <b-form-input v-model="inputValue" />
    <b-button @click="addItem">Add</b-button>
</b-card>

```vue
<template>
    <b-breadcrumb />
    <b-form-input v-model="inputValue" />
    <b-button @click="addItem">Add</b-button>
</template>

<script setup lang="ts">
import {getCurrentInstance, ref} from 'vue'
import {createBreadcrumb, useBreadcrumb} from 'bootstrap-vue-next'

const app = getCurrentInstance()

createBreadcrumb(app.appContext.app)

const breadcrumb = useBreadcrumb()

const inputValue = ref('')

const addItem = () => {
    breadcrumb.items.push(inputValue.value)
    inputValue.value = ''
}
</script>
```

### createBreadcrumb

Calling `createBreadcrumb` _once_ is required for useBreadcrumb to function properly. `useBreadcrumb` will work without an instance of `createBreadcrumb`, but the context will not be global. It will be limited to a local state. Depending on the installation method, this will be generally called for you. However, if it is not called, you will want to initialize it _once_ preferrably at the app root. `createBreadcrumb` requires an `App` instance

```vue
<script setup lang="ts">
import {getCurrentInstance} from 'vue'

const app = getCurrentInstance()

createBreadcrumb(app.appContext.app)
</script>
```

<script setup lang="ts">
import {getCurrentInstance, ref} from 'vue'
import {BBreadcrumb, BButton, BFormInput, BFormGroup, BCard, createBreadcrumb, useBreadcrumb} from 'bootstrap-vue-next'

const app = getCurrentInstance()

createBreadcrumb(app.appContext.app)

const breadcrumb = useBreadcrumb()

const inputValue = ref('')

const addItem = () => {
    breadcrumb.items.push(inputValue.value)
    inputValue.value = ''
}
</script>
