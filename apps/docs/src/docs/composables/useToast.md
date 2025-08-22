<ComposableHeader path="useToast/index.ts" title="useToast" />

<div class="lead mb-5">

The `useToast` composable allows you to create and manage toasts programmatically from anywhere in your application. It provides a simple API to show toast messages without needing to declare toast components in your templates.

</div>

## Setup

To use `useToast`, you need one of the following setup approaches:

### BApp Component (Recommended)

The easiest way is to wrap your application with the `BApp` component, which automatically sets up the orchestrator and registry:

<HighlightCard>
<template #html>

```vue
<template>
  <BApp>
    <router-view />
  </BApp>
</template>
```

</template>
</HighlightCard>

### Plugin Setup (Legacy)

Alternatively, you can use the traditional plugin approach.

<UsePluginAlert />

## Basic Usage

Creating and showing a toast is simple:

<HighlightCard>
  <BButton @click="create({ title: 'Hello', body: 'World'  })">Show</BButton>
  <template #html>

```vue
<template>
  <BButton @click="create({title: 'Hello', body: 'World'})">Show</BButton>
</template>

<script setup lang="ts">
import {useToast} from 'bootstrap-vue-next'

const {create} = useToast()
</script>
```

  </template>
</HighlightCard>

The `create` method returns a `promise` that is resolved then the toast closes. You can give toast a unique id. Since `Toasts` are fluid and can move around a lot, returning the index at a given point in time is not ideal for as its position may be changed in the array. So, for use with the `remove` method, you need to give a unique identifier

### Create Options

The `create` method accepts an object with `BToast`’s props, `position`, `appendToast`, `component` and `slots`.

The `position` value affects placement; its type is [ContainerPosition](/docs/types#containerposition).

Optional second argument can be passed to `create` to some options: `keep` and `resolveOnHide`. The `keep` option will keep the toast in the registry after it is hidden, allowing you to show it again without creating a new instance. The `resolveOnHide` option will resolve the promise returned by `create` when the toast is hidden, not after the hide has finished.

### Reactivity Within create

`create` props property can accept a `MaybeRefOrGetter`, meaning that you can make properties reactive

<HighlightCard>
  <BButton @click="showReactiveExample">Show</BButton>
  <template #html>

```vue
<template>
  <BButton @click="showMe">Show</BButton>
</template>

<script setup lang="ts">
const {create} = useToast()

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})
onMounted(() => {
  setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})

const showMe = () => {
  create(
    computed(() => ({
      ...firstRef.value,
      variant: (Number.parseInt(firstRef.value.body?.charAt(2) ?? '0') % 2 === 0
        ? 'danger'
        : 'info') as ColorVariant,
    }))
  )
}
</script>
```

  </template>
</HighlightCard>

### Advanced usage

Using props can work for most situations, but it leaves some finer control to be desired. For instance, you can add HTML to any `slot` value. This can either be an imported SFC or an inline render function. For reactvity, you must use a getter function.

<HighlightCard>
  <BButton @click="showMeAdvancedExample">Show</BButton>
  <template #html>

```vue
<template>
  <BButton @click="showMe">Show</BButton>
</template>

<script setup lang="ts">
const {create} = useToast()

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})

onMounted(() => {
  setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})

const showMe = () => {
  create({
    body: firstRef.value.body,
    slots: {default: () => h('div', null, {default: () => `custom! ${firstRef.value.body}`})},
  })
  // Demonstration pseudocode, you can also import a component and use it
  // const importedComponent () => {
  //   create({
  //     component: import('./MyToastComponent.vue'),
  //   })
  // }
}
</script>
```

  </template>
</HighlightCard>

## Programmatically Hiding a Toast

Hiding a `Toast` programmatically is very simple. `create` return an object that has functions to control the toast, including `destroy`

<HighlightCard>
  <BButtonGroup>
    <BButton @click="showMe" variant="success">
      Show the Toast
    </BButton>
    <BButton @click="hideMe" variant="danger">
      Hide the Toast
    </BButton>
  </BButtonGroup>
  <template #html>

```vue
<template>
  <BButtonGroup>
    <BButton @click="showMe" variant="success"> Show the Toast </BButton>
    <BButton @click="hideMe" variant="danger"> Hide the Toast </BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
const {create} = useToast()

let toast: undefined | ReturnType<typeof create>

const showMe = () => {
  if (toast !== undefined) return
  // `create` returns a symbol
  toast = create({
    title: 'Showing',
    value: true,
    variant: 'success',
    position: 'bottom-center',
  })
}

const hideMe = () => {
  if (toast === undefined) return
  toast.destroy()
}
</script>
```

  </template>

</HighlightCard>

## Using promises

Hiding a `Toast` with promise

<HighlightCard>
  <BButtonGroup>
    <BButton @click="promiseToast" variant="success">
      Show the Toast
    </BButton>
  </BButtonGroup>
  <template #html>

```vue
<template>
  <BButtonGroup>
    <BButton @click="promiseToast" variant="success"> Show the Toast </BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
const {create} = useToast()
const promiseToast = () => {
  create(
    {
      variant: 'primary',
      position: 'middle-center',
      bodyClass: 'w-100',
      modelValue: true,
      slots: {
        default: ({hide}) => [
          h('h2', {class: 'text-center mb-3'}, 'Ready?'),
          h('div', {class: 'd-flex justify-content-center gap-2'}, [
            h(BButton, {onClick: () => hide('ok'), size: 'lg'}, () => 'Yes'),
            h(BButton, {onClick: () => hide('cancel'), size: 'lg'}, () => 'No'),
          ]),
        ],
      },
    },
    {resolveOnHide: true}
  ).then((r) => {
    create({title: 'you pressed: ' + (r.ok ? 'yes' : 'no')})
  })
}
</script>
```

  </template>

</HighlightCard>

<script setup lang="ts">
import {data} from '../../data/components/toast.data'
import {useToast} from 'bootstrap-vue-next/composables/useToast'
import HighlightCard from '../../components/HighlightCard.vue'

import UsePluginAlert from '../../components/UsePluginAlert.vue'
import {ref, computed, h, onMounted} from 'vue'
import ComposableHeader from './ComposableHeader.vue'

const {create, remove, toasts} = useToast()

let toast: undefined | ReturnType<typeof create>

const showMe = () => {
  if (toast !== undefined) return
  toast = create({ title: 'Showing',  variant: 'success', position: 'bottom-center' } )
}

const hideMe = () => {
  if (toast === undefined) return
  toast.destroy()
  toast = undefined
}

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})

onMounted(() => {
  setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})

const showReactiveExample = () => {
  create(
    computed(() => ({
      ...firstRef.value,
      variant: (Number.parseInt(firstRef.value.body?.charAt(2) ?? '0') % 2 === 0
        ? 'danger'
        : 'info') as ColorVariant,
    })),
  )
}

const showMeAdvancedExample = () => {
  create({
    body: firstRef.value.body,
    position: 'bottom-center',
    slots: {default: () => h('div', null, {default: () => `custom! ${firstRef.value.body}`})},
  })
}

const promiseToast = () => {
  create(
    {
      variant: 'primary',
      position: 'middle-center',
      bodyClass: 'w-100',
      modelValue: true,
      slots: {
        default: ({hide}) =>
          [
            h('h2', {class: 'text-center mb-3'}, 'Ready?'),
            h('div', {class: 'd-flex justify-content-center gap-2'}, [
              h(BButton, {onClick: () => hide('ok'), size: 'lg'}, () => 'Yes'),
              h(BButton, {onClick: () => hide('cancel'), size: 'lg'}, () => 'No')
            ])
          ],
      },
    },
    {resolveOnHide: true}
  ).then((r) => {
    create({title: 'you pressed: ' + (r.ok ? 'yes' : 'no')})
  })
}
</script>
