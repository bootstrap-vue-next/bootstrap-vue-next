<ComposableHeader path="usePopover/index.ts" title="usePopover" />

<div class="lead mb-5">

The `usePopover` composable allows you to create and control popovers and tooltips dynamically from anywhere in your application. It provides methods to create, show, hide, and manage both popovers and tooltips programmatically.

</div>

## Setup

To use `usePopover`, you need one of the following setup approaches:

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

Note: As of v0.40, there are no separate toast/modal/popover controller plugins. If you stick with plugins, use the single `orchestratorPlugin` (or prefer `BApp`).

<UsePluginAlert />

## Creating Popovers

Popovers and tooltips can be created using the `popover` or `tooltip` methods:

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

The methods accept reactive properties using `MaybeRef`, allowing dynamic updates to the popover content.

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
  <BButton ref="advancedExample">Hover me</BButton>

<template #html>

```vue
<template>
  <BButton ref="advancedExample">Click me</BButton>
</template>

<script setup lang="ts">
const {popover} = usePopover()
const advancedExample = ref()

popover({
  slots: {
    default: (scope) => h('div', null, `Custom content - Visible: ${scope.visible}`),
  },
  target: advancedExample,
})
</script>
```

  </template>
</HighlightCard>

### Return Value

The `popover` and `tooltip` methods return an awaitable controller `PromiseWithComponent`. You can call its methods immediately to control the instance, and you can also `await` it to resolve when the popover/tooltip is hidden. The controller exposes:

- `show: () => PromiseWithComponent` - Shows the popover.
- `hide: (trigger?: string) => PromiseWithComponent` - Hides the popover, optionally passing a trigger.
- `toggle: () => PromiseWithComponent` - Toggles the visibility of the popover.
- `get: () => PopoverOrchestratorParam | undefined` - Returns the current properties of the popover, or undefined if none.
- `set: (props: Partial<PopoverOrchestratorParam>) => PromiseWithComponent` - Updates the popover's properties.
- `destroy: () => void` - Destroys the popover and cleans up resources.

### Lifecycle

By default, the popover is destroyed when the current scope is exited. You can manually destroy it using the `destroy` method.

```js
const pop = popover({title: 'Hello World!'})
pop.show()
// do something
pop.destroy()
```

Alternatively, use `await using` in TypeScript 5.2+ to automatically destroy the popover when the scope is exited.

```js
await using pop = popover({title: 'Hello World!'})
```

<script setup lang="ts">
import {usePopover} from 'bootstrap-vue-next/composables/usePopover'
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
      h('div', null,  `Custom content - Visible: ${scope.visible}`),
  },
  target: advancedExample,
  title: 'Advanced Popover',
  body: 'This is an advanced popover example.',
})

</script>
