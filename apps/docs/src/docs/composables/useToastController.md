# useToastController

Often one may want to open a Toast in a global context (for example, to display an error after a function throws). useToastController is used to create Toasts on demand. You must initialize the BToastOrchestrator component once in your application. The following functionality requires the existence of that component.

## BToastOrchestrator

Initialize the BToastOrchestrator component once (and only once). This is usually best placed at the app root.

```vue
<!-- App.vue -->
<template>
  <RouterView />
  <BToastOrchestrator />
</template>
```

It accepts the props teleportDisabled and teleportTo if you need to change where the orchestrator is teleported.

BToastOrchestrator also exposes a few methods (via a template ref) that correspond to those available through useToastController:
- create
- remove
- toasts

## Showing a toast

Use the create method to show a toast.

```vue
<template>
  <BButton @click="show">Show</BButton>
</template>

<script setup lang="ts">
import {useToastController} from 'bootstrap-vue-next/composables/useToastController'

const {create} = useToastController()

const show = () => {
  create({title: 'Hello', body: 'World'})
}
</script>
```

The create method returns a handle that can control the toast (e.g., destroy). If you pass the option {resolveOnHide: true}, create instead returns a Promise that resolves when the toast is hidden.

### Show options

create accepts an object with properties that mostly mirror BToast props. In addition to BToast props, it supports position to control where the toast appears.

### Reactivity within create

The props parameter of create can be a MaybeRefOrGetter, so you can pass reactive values (e.g., a computed getter).

```vue
<template>
  <BButton @click="showReactive">Show</BButton>
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from 'vue'
import {useToastController} from 'bootstrap-vue-next/composables/useToastController'

const {create} = useToastController()

const data = ref({body: String(Math.random())})

onMounted(() => {
  setInterval(() => {
    data.value.body = String(Math.random())
  }, 1000)
})

const showReactive = () => {
  create(
    computed(() => ({
      ...data.value,
      // Example of computed variant based on body contents
      variant: (parseInt(data.value.body?.charAt(2) ?? '0', 10) % 2 === 0) ? 'danger' : 'info',
    }))
  )
}
</script>
```

### Advanced usage (custom content via slots or component)

For finer control, you can provide slots (including render functions) or even a custom component. For reactive content in slots, use a function that reads current reactive values.

```vue
<template>
  <BButton @click="showAdvanced">Show</BButton>
</template>

<script setup lang="ts">
import {h, ref, onMounted, defineAsyncComponent} from 'vue'
import {useToastController} from 'bootstrap-vue-next/composables/useToastController'

const {create} = useToastController()

const data = ref({body: String(Math.random())})

onMounted(() => {
  setInterval(() => {
    data.value.body = String(Math.random())
  }, 1000)
})

const showAdvanced = () => {
  // Example using slots
  create({
    position: 'bottom-center',
    slots: {
      default: () => h('div', null, `custom! ${data.value.body}`),
    },
  })

  // Example using a custom component (async)
  // const MyToast = defineAsyncComponent(() => import('./MyToastComponent.vue'))
  // create({ component: MyToast })
}
</script>
```

## Programmatically hiding a toast

create returns a handle with helper methods, including destroy to hide the toast programmatically.

```vue
<template>
  <BButtonGroup>
    <BButton @click="showMe" variant="success">Show the Toast</BButton>
    <BButton @click="hideMe" variant="danger">Hide the Toast</BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
import {useToastController} from 'bootstrap-vue-next/composables/useToastController'

const {create} = useToastController()

let toastHandle: ReturnType<typeof create> | undefined

const showMe = () => {
  if (toastHandle) return
  toastHandle = create({
    title: 'Showing',
    modelValue: true,
    variant: 'success',
    position: 'bottom-center',
  })
}

const hideMe = () => {
  if (!toastHandle) return
  toastHandle.destroy()
  toastHandle = undefined
}
</script>
```

## Using promises

If you pass {resolveOnHide: true} as the second argument, create returns a Promise that resolves when the toast is hidden. You can pass a value to hide(...) inside a slot to control the resolved result.

```vue
<template>
  <BButtonGroup>
    <BButton @click="promiseToast" variant="success">Show the Toast</BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
import {h} from 'vue'
import {useToastController} from 'bootstrap-vue-next/composables/useToastController'

const {create} = useToastController()

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
            h('button', {class: 'btn btn-primary btn-lg', onClick: () => hide('ok')}, 'Yes'),
            h('button', {class: 'btn btn-secondary btn-lg', onClick: () => hide('cancel')}, 'No'),
          ]),
        ],
      },
    },
    {resolveOnHide: true}
  ).then((result: any) => {
    // Depending on your setup, result may include fields like `ok`
    // Adjust this line if your resolved shape differs
    create({title: 'you pressed: ' + (result?.ok ? 'yes' : 'no')})
  })
}
</script>
```

Notes
- Use BToastOrchestrator exactly once in your app.
- create returns a handle when called normally, or a Promise when called with {resolveOnHide: true}.
- The position prop controls which toast container is used (e.g., 'bottom-center', 'middle-center').
- Slot render functions can use plain HTML elements (as shown) or your own components. If using components inside h(), import them or define them before use.
