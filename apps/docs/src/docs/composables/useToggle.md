---
description: 'You can use `useToggle` to get the closest toggleable component in **child component** and show,hide or toggle it. It can also be supplied a target id to show, hide or toggle a specific component'
---

# useToggle

<PageHeader />

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

<<< DEMO ./demo/UseToggleWithId.vue

## Promise Flow

The `show` and `toggle` methods take a boolean argument to control wether to resolve the promise on show (`false`) or on hide (`true`). On `show` the promise resolves to `true` when shown and to `'show-prevented'` if show is prevented. On `hide` the promise resolves to the trigger that caused the hide event. The promise can be awaited to get the result.

<<< DEMO ./demo/UseTogglePromise.vue
