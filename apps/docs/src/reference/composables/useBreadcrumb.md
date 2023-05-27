# useBreadcrumb

<div class="lead mb-5">

'useBreadcrumb` is a helper utility for the`b-breadcrumb`component. It provides a **globally** changable context so you can modify a breadcrumb. It should be noted that the breacrumb component will automatically use the global context by default.`useBreadcrumb`is shared globally, one modification to the state will be recognized throughout the app. As noted in the BBreadcrumb documentation, the items prop for the component takes precedence over `useBreadcrumb`.

</div>

## Demo

<b-card no-body class="mb-5">
  <b-card-body>
    <b-breadcrumb />
    <b-form-input class="my-3" v-model="inputValue" />
    <b-button @click="addItem" class="me-2">Add</b-button>
    <b-button variant="danger" @click="breadcrumb.reset">Clear</b-button>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<template>
  <b-breadcrumb />

  <b-form-input v-model="inputValue" />

  <b-button @click="addItem">Add</b-button>
  <b-button variant="danger" @click="breadcrumb.reset">Clear</b-button>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useBreadcrumb} from 'bootstrap-vue-next'

const breadcrumb = useBreadcrumb()

const inputValue = ref('')

const addItem = () => {
  breadcrumb.items.push(inputValue.value)
  inputValue.value = ''
}
</script>
```

  </b-card-body>

</b-card>

<script setup lang="ts">
import {ref} from 'vue'
import {BBreadcrumb, BButton, BFormInput, BFormGroup, BCard, BCardBody, useBreadcrumb} from 'bootstrap-vue-next'

const breadcrumb = useBreadcrumb()

const inputValue = ref('')

const addItem = () => {
    breadcrumb.items.push(inputValue.value)
    inputValue.value = ''
}
</script>
