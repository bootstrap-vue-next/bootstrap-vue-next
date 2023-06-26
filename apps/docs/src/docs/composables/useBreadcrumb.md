# useBreadcrumb

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

'useBreadcrumb' is a helper utility for the 'b-breadcrumb' component. It provides a **globally** changable context so you can modify a breadcrumb. It should be noted that the breacrumb component will automatically use the global context by default. 'useBreadcrumb' is shared globally, one modification to the state will be recognized throughout the app. As noted in the BBreadcrumb documentation, the items prop for the component takes precedence over 'useBreadcrumb'.

</div>

## Demo

<HighlightCard>
  <BBreadcrumb />
  <BFormInput class="my-3" v-model="inputValue" />
  <BButton @click="addItem" class="me-2">Add</BButton>
  <BButton variant="danger" @click="breadcrumb.reset">Clear</BButton>
  <template #html>

```vue
<template>
  <BBreadcrumb />

  <BFormInput v-model="inputValue" />

  <BButton @click="addItem">Add</BButton>
  <BButton variant="danger" @click="breadcrumb.reset">Clear</BButton>
</template>

<script setup lang="ts">
import {useBreadcrumb} from 'bootstrap-vue-next'

const breadcrumb = useBreadcrumb()

const inputValue = ref('')

const addItem = () => {
  breadcrumb.items.push(inputValue.value)
  inputValue.value = ''
}
</script>
```

  </template>
</HighlightCard>

<script setup lang="ts">
import {ref} from 'vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BBreadcrumb, BButton, BFormInput, BFormGroup, BCard, BCardBody, useBreadcrumb} from 'bootstrap-vue-next'

const breadcrumb = useBreadcrumb()

const inputValue = ref('')

const addItem = () => {
    breadcrumb.items.push(inputValue.value)
    inputValue.value = ''
}
</script>
