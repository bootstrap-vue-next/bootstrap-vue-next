---
title: useToast
description: 'The `useToast` composable allows you to create and manage toasts programmatically from anywhere in your application. It provides a simple API to show toast messages without needing to declare toast components in your templates.'
---

## Setup

To use `useToast`, you need one of the following setup approaches:

### BApp Component (Recommended)

<UseBAppSetup>

<<< FRAGMENT ./demo/OrchestratorSetup.vue

</UseBAppSetup>

### Plugin Setup (Legacy)

Alternatively, you can use the traditional plugin approach.

<UsePluginAlert />

## Basic Usage

Creating and showing a toast is simple:

<<< DEMO ./demo/UseToastBasic.vue

The `create` method **registers** a toast entry and returns a `ComponentController`. The toast does **not** appear automatically — you must call `.show()` on the controller (or pass `modelValue: true`) to make it visible.

You can give a toast a unique `id`. Since toasts are fluid and can move around, a stable id is more useful than an index position.

### Create Options

The `create` method accepts an object with `BToast`'s props, `position`, `appendToast`, `component`, `slots`, and an `options` property.

The `position` value affects placement; its type is [ContainerPosition](/docs/types#containerposition).

The `options` property accepts:

- `resolveOnHide` — when `true`, `.show()` resolves at the moment the toast **begins** hiding rather than after the animation completes.

### Reactivity Within create

`create` accepts a `MaybeRef`, meaning you can make properties reactive:

<<< DEMO ./demo/UseToastReactive.vue

### Advanced usage

Using props works for most situations, but for finer control you can use the `slots` property with a render function or imported SFC. For reactive content, use a getter function.

<<< DEMO ./demo/UseToastAdvanced.vue

## Programmatically Controlling a Toast

`create` returns a `ComponentController` with methods to control the toast:

- `show(): Promise<BvTriggerableEvent & AsyncDisposable>` — shows the toast. Optionally awaitable (resolves when the toast is hidden).
- `hide(trigger?: string): void` — hides the toast without removing it from the registry.
- `toggle(): void` — toggles the toast visibility.
- `set(props): void` — updates the toast props after creation.
- `destroy(): Promise<void>` — hides and removes the toast from the registry.
- `[Symbol.asyncDispose]` — same as `destroy()`, enables `await using` syntax.

<<< DEMO ./demo/UseToastProgrammatic.vue

## Awaited show() for Decision Flows

Awaiting `.show()` lets you handle the result of user interaction:

<<< DEMO ./demo/UseToastPromise.vue

## Lifecycle and Cleanup

### Visibility control

Use `.show()`, `.hide()`, and `.toggle()` to control visibility without affecting the registry. `.hide()` only hides the toast — the entry stays registered and can be shown again.

### Long-lived entries and reuse

A controller returned by `create` remains valid until `.destroy()` is called or the owning scope is disposed. You can call `.show()` and `.hide()` as many times as needed on the same controller.

### Cleanup responsibilities and memory implications

Every registered toast occupies memory until explicitly destroyed. The controller is automatically destroyed when the Vue scope that called `create` is disposed (e.g. the component unmounts). For toasts created outside a component, clean up manually.

### Recommended cleanup patterns

**`await using` (TypeScript 5.2+)** — automatically destroys the toast when the block exits:

```ts
await using r = await create({modelValue: true, title: 'Processing...'}).show()
// toast is automatically destroyed when this block exits
```

**`try/finally` with `.destroy()`** — for explicit lifecycle control:

```ts
const toast = create({title: 'Long-running task'})
toast.show()
try {
  await doSomething()
} finally {
  await toast.destroy()
}
```
