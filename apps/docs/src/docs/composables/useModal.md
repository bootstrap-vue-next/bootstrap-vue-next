---
title: useModal
description: 'The `useModal` composable provides a powerful API to create, manage, and control modals programmatically from anywhere in your application. It allows you to create modals on-demand, manage existing modals, and handle modal interactions through promises.'
---

## Setup

To use `useModal`, you need one of the following setup approaches:

### BApp Component (Recommended)

<UseBAppSetup>

<<< FRAGMENT ./demo/OrchestratorSetup.vue

</UseBAppSetup>

### Plugin Setup (Legacy)

Alternatively, you can use the traditional plugin approach.

<UsePluginAlert />

## Creating Modals

Creating a modal is done through the `create` method:

<<< DEMO ./demo/UseModalBasic.vue

### Reactivity Within `create`

`create` props property can accept a `MaybeRef`, meaning that you can make properties reactive

<<< DEMO ./demo/UseModalReactive.vue

### Advanced Creation

Using props can work for most situations, but it leaves some finer control to be desired. For instance, you cannot add HTML to any slot value using props alone. This is where the `component` property comes into play. Using the `component` property, you can input the component to render. This can either be an imported SFC or an inline render function.

You can also use component slots to render what you want. This is done through the `slots` property. The `slots` property is an object that contains the slot name as the key and a render function or component as the value. The render function is passed a `scope` object that contains the slots scope.

<<< DEMO ./demo/UseModalAdvanced.vue

### Return Value

The `create` method **registers** a modal entry and returns a `ComponentController`. The modal does **not** open automatically — call `.show()` on the controller (or pass `modelValue: true`) to display it.

`ComponentController` exposes:

- `show(): Promise<BvTriggerableEvent & AsyncDisposable>` — shows the modal. Awaiting it resolves to a `BvTriggerableEvent` once the modal is hidden.
- `hide(trigger?: string): void` — hides the modal without removing the registry entry.
- `toggle(): void` — toggles visibility.
- `set(props): void` — updates modal props after creation.
- `get(): ModalOrchestratorArrayValue | undefined` — returns the current registry entry.
- `destroy(): Promise<void>` — hides and removes the modal from the registry.
- `[Symbol.asyncDispose]` — same as `destroy()`, enables `await using` syntax.

The `BvTriggerableEvent` resolved by `.show()` contains:

- `ok: boolean | null` — `true` for the OK button, `false` for cancel, `null` for any other close action (backdrop click, custom trigger, etc.)
- `trigger: string | null` — the trigger string that closed the modal.

To resolve at the moment hiding **begins** rather than after the animation completes, pass `options: { resolveOnHide: true }` in the create object:

```js
const value = await create({title: 'Hello World!', options: {resolveOnHide: true}}).show()
```

### Lifecycle and Cleanup

#### Visibility control

Use `.show()`, `.hide()`, and `.toggle()` to control visibility without affecting the registry. `.hide()` only hides the modal — the entry remains registered and can be shown again.

#### Long-lived entries and reuse

A controller stays valid until `.destroy()` is called or the owning scope is disposed. Call `.show()` and `.hide()` as many times as needed on the same controller.

#### Cleanup responsibilities and memory implications

Every registered modal occupies memory until explicitly destroyed. The controller is automatically destroyed when the Vue scope that called `create` is disposed (e.g. the component unmounts). For controllers created outside a component, clean up manually.

#### Recommended cleanup patterns

**`await using` (TypeScript 5.2+)** — automatically destroys the modal when the block exits:

```js
await using _ = await create({title: 'Hello World!'}).show()
// modal is automatically destroyed when this block exits
```

**`try/finally` with `.destroy()`** — for explicit lifecycle control:

```js
const modal = create({title: 'Hello World!'})
modal.show()
try {
  // do something while modal is open
} finally {
  await modal.destroy()
}
```

## Globally Hiding Modals

In addition to creating modals in a global context, you can also hide modals from anywhere in the app. This feature does not require an orchestrator component to be present.

<<< DEMO ./demo/UseModalNested.vue

<script setup lang="ts">
import UsePluginAlert from '../../components/UsePluginAlert.vue'
import PageHeader from '../../components/PageHeader.vue'

</script>
