# useToast

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Often times one may want to open a `Toast` in a global context, without the need for declaring a component, perhaps to display an error after a function threw an error. `useToast` is used to create `Toasts` on demand. You must have initialized the `BToastOrchestrator` component once in your application. The following functionality requires the existance of that component

</div>

## BToastOrchestrator

As described, you must have initialized `BToastOrchestrator` once and only once (doing multiple may display multiple `Toasts`). This is usually best placed at the App root.

<HighlightCard>

<template #html>

```vue-html
<BToastOrchestrator />
```

  </template>
</HighlightCard>

The only props it access are `teleportDisabled` and `teleportTo` to modify the location that it is placed

In addition, it contains a few exposed methods. These exposed methods on the `template ref` correspond to those in the `useToast` function, described below

- remove
- show
- toasts

## Showing a Toast

Showing a toast is done through the show method

<HighlightCard>
  <BButton @click="show({ props: { title: 'Hello', body: 'World' } })">Show</BButton>
  <template #html>

```vue
<template>
  <BButton @click="show({props: {title: 'Hello', body: 'World'}})">Show</BButton>
</template>

<script setup lang="ts">
const {show} = useToast()
</script>
```

  </template>
</HighlightCard>

The `show` method returns a `symbol`. This symbol is a unique id. Since `Toasts` are fluid and can move around a lot, returning the index at a given point in time is not ideal for as its position may be changed in the array. So, for use with the `remove` method, we need to give you a unique identifier

### Show Options

The `show` method accepts an object with the following values `props` and `component`

The props property corresponds to mostly that of the `BToast` components props. The props object, in addition to the props declared on `BToast`, includes `pos`. The `pos` value effects its position, its type is [Container Position](/docs/types#containerposition)

The props property excludes `modelValue`, it is replaced with `value`. These work the same, however, the difference being is that `value` is more of a proxy to `modelValue`, where most of the reactivity for showing/hiding is controlled by the function. (Meaning that a Toast can be removed without having to always input a reactive value)

### Reactivity Within Show

`show` can accept a `MaybeRefOrGetter`, meaning that all properties are reactive

<HighlightCard>
  <BButton @click="showReactiveExample">Show</BButton>
  <template #html>

```vue
<template>
  <BButton @click="showMe">Show</BButton>
</template>

<script setup lang="ts">
const {show} = useToast()

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})

setInterval(() => {
  firstRef.value.body = `${Math.random()}`
}, 1000)

const showMe = () => {
  show({
    props: computed(() => ({
      ...firstRef.value,
      variant: (Number.parseInt(firstRef.value.body?.charAt(2) ?? '0') % 2 === 0
        ? 'danger'
        : 'info') as ColorVariant,
    })),
  })
}
</script>
```

  </template>
</HighlightCard>

### Advanced usage

Using props can work for most situations, but it leaves some finer control to be desired. For instance, you can not add HTML to any slot value. This is where the `component` property comes into play. Using the `component` property, you can input the component to render. This can either be an imported SFC or an inline render function. Of course, it is also reactive

<HighlightCard>
  <BButton @click="showMeAdvancedExample">Show</BButton>
  <template #html>

```vue
<template>
  <BButton @click="showMe">Show</BButton>
</template>

<script setup lang="ts">
import {BToast} from 'bootstrap-vue-next'

const {show} = useToast()

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})

setInterval(() => {
  firstRef.value.body = `${Math.random()}`
}, 1000)

const showMe = () => {
  show({
    props: () => ({
      body: firstRef.value.body,
    }),
    component: computed(() =>
      Number.parseInt(firstRef.value.body?.charAt(2) ?? '0') % 2 === 0
        ? BToast
        : h(BToast, null, {default: () => `custom! ${firstRef.value.body}`})
    ),
  })
  // Demonstration psuedocode, you can also import a component and use it
  // const importedComponent () => {
  //   show({
  //     component: import('./MyToastComponent.vue'),
  //   })
  // }
}
</script>
```

  </template>
</HighlightCard>

This functionality depends on the root component emitting the `destroyed` event. For whatever case you may want to wrap the `BToast` element, you must re-emit `destroyed`

## Programmatically Hiding a Toast

Hiding a `Toast` programmatically is very simple. Simply use the return value from the show method, and pass it into the `remove` function

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
const {show, remove} = useToast()

let showValue: undefined | symbol

const showMe = () => {
  if (typeof showValue === 'symbol') return
  // `show` returns a symbol
  showValue = show({
    props: {title: 'Showing', value: true, variant: 'success', pos: 'bottom-center'},
  })
}

const hideMe = () => {
  if (showValue === undefined) return
  remove(showValue)
  showValue = undefined
}
</script>
```

  </template>

</HighlightCard>

<script setup lang="ts">
import {data} from '../../data/components/toast.data'
import {BButton, useToast, BButtonGroup, BToast} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'
import {ref, computed, h} from 'vue'

const {show, remove, toasts} = useToast()

let showValue: undefined | symbol

const showMe = () => {
  if (typeof showValue === 'symbol') return
  showValue = show({ props: { title: 'Showing', value: true, variant: 'success', pos: 'bottom-center' } })
}

const hideMe = () => {
  if (showValue === undefined) return
  remove(showValue)
  showValue = undefined
}

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})

setInterval(() => {
  firstRef.value.body = `${Math.random()}`
}, 1000)

const showReactiveExample = () => {
  show({
    props: computed(() => ({
      ...firstRef.value,
      variant: (Number.parseInt(firstRef.value.body?.charAt(2) ?? '0') % 2 === 0
        ? 'danger'
        : 'info') as ColorVariant,
    })),
  })
}

const showMeAdvancedExample = () => {
  show({
    props: () => ({
      body: firstRef.value.body,
    }),
    component: computed(() =>
      Number.parseInt(firstRef.value.body?.charAt(2) ?? '0') % 2 === 0
        ? BToast
        : h(BToast, null, {default: () => `custom! ${firstRef.value.body}`})
    ),
  })
}

</script>
