<ComposableHeader path="usePopover/index.ts" title="usePopover" />

<div class="lead mb-5">

`usePopover` can create and control popovers and tooltips dynamically.

</div>

<UsePluginAlert />

## BPopoverOrchestrator

You must initialize the `BPopoverOrchestrator` component once and only once (multiple instances may display duplicate popovers). This is typically best placed at the App root.

<HighlightCard>
<template #html>

```vue-html
<BPopoverOrchestrator />
```

</template>
</HighlightCard>

The only props it access are `teleportDisabled` and `teleportTo` to modify the location that it is placed

Additionally, it exposes several methods on the `template ref` that correspond to those in the `usePopover` composable:

- `popover`
- `tooltip`
- `popovers`

## Creating Popovers

Popovers and tooltips can be created using the `popover` or `tooltip` methods.

<HighlightCard>
  <BButton ref="popoverButton">Hover me</BButton>

<template #html>

```vue
<template>
  <BButton ref="popoverButton">Hover me</BButton>
</template>

<script setup lang="ts">
const {popover} = usePopover()
const popoverButton = useTemplateRef('popoverButton')

const pop = popover({title: 'Hello World!', body: 'This is a popover.', target: popoverButton})
</script>
```

  </template>
</HighlightCard>

### Reactivity Within `popover` and `tooltip`

The methods accepts reactive properties using `MaybeRef`, allowing dynamic updates to the popover content.

<HighlightCard>
  <BButton ref="reactiveExample">Hover me</BButton>

<template #html>

```vue
<template>
  <BButton ref="reactiveExample">Click me</BButton>
</template>

<script setup lang="ts">
const {tooltip} = usePopover()

const title = ref('Hello')
onMounted(() => {
  setInterval(() => {
    title.value = title.value === 'Hello' ? 'World' : 'Hello'
  }, 2500)
})
tooltip({
  title: title,
})
</script>
```

  </template>
</HighlightCard>

### Advanced Creation

For more control, you can use the `component` property to render a custom component or the `slots` property to define slot content dynamically.

<HighlightCard>
  <BButton ref="advancedExample">Click me</BButton>

<template #html>

```vue
<template>
  <BButton ref="advancedExample">Click me</BButton>
</template>

<script setup lang="ts">
const {popover} = usePopover()

pop({
  slots: {
    default: (scope) =>
      h('div', null, {default: () => `Custom content - Visible: ${scope.visible}`}),
  },
})
</script>
```

  </template>
</HighlightCard>

### Return Value

The `popover` and `tooltip` methods return a promise that resolves to a `BvTriggerableEvent` object when the popover is hidden. The promise includes methods to control the popover:

- `show: () => void` - Shows the popover.
- `hide: (trigger?: string) => void` - Hides the popover, optionally passing a trigger.
- `toggle: () => void` - Toggles the visibility of the popover.
- `set: (props: Partial<PopoverOrchestratorParam>) => void` - Updates the popover's properties.
- `destroy: () => Promise<void>` - Destroys the popover and cleans up resources.

### Lifecycle

By default, the popover is destroyed when the current scope is exited. You can manually destroy it using the `destroy` method.

```js
const popover = popover({title: 'Hello World!'})
popover.show()
// do something
popover.destroy()
```

Alternatively, use `await using` in TypeScript to automatically destroy the popover when the scope is exited.

```js
await using popover = popover({title: 'Hello World!'})
```

<script setup lang="ts">
import { BButton, BPopover, usePopover, BButtonGroup } from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'
import UsePluginAlert from '../../components/UsePluginAlert.vue'
import { ref, h, onMounted } from 'vue'
import ComposableHeader from './ComposableHeader.vue'

const { popover, tooltip } = usePopover()


const title = ref('Hello')
const popoverButton = ref()
const reactiveExample = ref()
const advancedExample = ref()

onMounted(() => {
  setInterval(() => {
    title.value = title.value === 'Hello' ? 'World' : 'Hello'
  }, 1000)
})

const pop = popover({ title: 'Hello World!', body: 'This is a popover.', target: popoverButton })
const pop2 = tooltip({ title: title, target: reactiveExample })
const pop3 = popover({
  slots: {
    default: (scope) =>
      h('div', null, { default: () => `Custom content - Visible: ${scope.visible}` }),
  },
  target: advancedExample,
  title: 'Advanced Popover',
  body: 'This is an advanced popover example.',
})

</script>
