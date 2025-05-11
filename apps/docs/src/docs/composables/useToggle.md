<ComposableHeader path="useToggle/index.ts" title="useToggle" />

<div class="lead mb-5">

You can use `useToggle` to get the closest toggleable component in **child component** and show,hide or toggle it. It can also be supplied a target id to show, hide or toggle a specific component

</div>

<HighlightCard>
  <template #html>

```vue
<BModal @hide="(e) => e.trigger === 'sometrigger' && doSomething()">
  <MyComponent />
</BModal>
```

<hr />
MyComponent.vue

```vue
<template>
  <BButton @click="hide('sometrigger')">Done</BButton>
</template>

<script setup lang="ts">
const {hide} = useToggle()
</script>
```

  </template>
</HighlightCard>

You can also provide an id to get particular component and show/hide it. Currently, we do not support using CSS selector to
find modal since the component in lazy mode may not render at page initial. If the modal component does not exist and you attempt to call any of the exposed methods, the methods will safely no-op without throwing errors.

<HighlightCard>
<BButton @click="show()">Click me</BButton>
<BModal v-if="someConditions" v-model="programmaticModal" id="my-modal">
  <BButton @click="hide()">Hide me</BButton>
</BModal>
<template #html>

```vue
<template>
  <BButton @click="show()">Click me</BButton>
  <BModal v-if="someConditions" v-model="programmaticModal" id="my-modal">
    <BButton @click="hide()">Hide me</BButton>
  </BModal>
</template>

<script setup lang="ts">
const someConditions = ref(false)
const programmaticModal = ref(false)

onMounted(() => {
  someConditions.value = true
})

const {show, hide, component} = useToggle('my-modal')
</script>
```

  </template>
</HighlightCard>

## Promise Flow

The `show` and `toggle` methods take a boolean argument to control wether to resolve the promise on show (`false`) or on hide (`true`). On `show` the promise resolves to `true` when shown and to `'show-prevented'` if show is prevented. On `hide` the promise resolves to the trigger that caused the hide event. The promise can be awaited to get the result.

<HighlightCard>
  <BButton @click="testToggle">Click me</BButton>
  <BModal id="toggleTest"> content </BModal>
  <span v-if="reason !== ''" class="mx-3">Close reason: {{ reason }}</span>

<template #html>

```vue
<template>
  <BButton @click="testToggle">Click me</BButton>
  <BModal id="toggleTest"> content </BModal>
</template>
<script setup lang="ts">
const toggle = useToggle('toggleTest')
async function testToggle() {
  toggle.show(true).then((e) => {
    if (e === 'ok') {
      console.log('ok pressed')
    } else {
      console.log('closed with', e)
    }
  })
}
</script>
```

  </template>
</HighlightCard>

<script setup lang="ts">
import {BButton, BModal, useToggle} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'

import {ref, onMounted} from 'vue'
import ComposableHeader from './ComposableHeader.vue'

const someConditions = ref(false)
const programmaticModal = ref(false)

onMounted(() => {
    someConditions.value = true
})

const {show, hide} = useToggle('my-modal')

const reason = ref('')
const toggle = useToggle('toggleTest')
async function testToggle() {
  reason.value = ''
  toggle
    .show(true)
    .then((e) => {
      if (e === 'ok') {
        console.log('ok pressed')
      } else {
        console.log('closed with', e)
      }
      reason.value = e
    })
}
</script>
