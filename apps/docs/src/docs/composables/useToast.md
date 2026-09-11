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

The `create` method returns a controller object. Use `.show()` to display the toast and await the returned promise if you need to react to the close event.

### Create Options

The `create` method accepts an object with `BToast`’s props, `position`, `appendToast`, `component`, and `slots`.

The `position` value affects placement; its type is [ContainerPosition](/docs/types#containerposition).

Lifecycle options are passed in `options` on the create payload. `resolveOnHide` resolves the promise when hide starts instead of after the full hide lifecycle.

### Reactivity Within create

`create` props property can accept a `MaybeRef`, meaning that you can make properties reactive

<<< DEMO ./demo/UseToastReactive.vue

### Advanced usage

Using props can work for most situations, but it leaves some finer control to be desired. For instance, you can add HTML to any `slot` value. This can either be an imported SFC or an inline render function. For reactivity, you must use a getter function.

<<< DEMO ./demo/UseToastAdvanced.vue

## Programmatically Hiding a Toast

Hiding a `Toast` programmatically is simple. The controller returned by `create` exposes methods like `show`, `hide`, and `destroy`.

<<< DEMO ./demo/UseToastProgrammatic.vue

## Globally Hiding Toasts

Toasts can also be hidden from anywhere in the app, without holding on to the controller that
`create` returned. Give the toast an `id`, then hide it by that `id`:

<<< DEMO ./demo/UseToastGlobalHide.vue

- `hide: (trigger?: string, id?: ControllerKey) => void`

  Hides the toast with the given `id`. The `trigger` is passed to the `trigger` property of the
  `hide` event and of the resolved `show` promise. When no `id` is given, every toast is hidden,
  just like `hideAll`

- `hideAll: (trigger?: string) => void`

  Hides every toast that was created through the composable

`hide(trigger, id)` also hides a `BToast` that was declared in a template with a matching `id`.
`hideAll` and `hide` without an `id` only cover the toasts that were created through the composable.

A toast that the orchestrator has not rendered yet is hidden through its store entry, so it never
becomes visible. Such a toast reports `modelValue` as its `trigger`, since there is no component to
run the hide cycle through. The same applies to a toast rendered through a custom `component`.

Hiding a toast does not remove it from the orchestrator store, see
[Lifecycle and disposal](#lifecycle-and-disposal).

## Lifecycle and disposal

Created toast instances persist until you explicitly dispose them. Hiding a toast does not remove it from the orchestrator store.

```js
const toast = create({title: 'Saved!'})
try {
  await toast.show()
} finally {
  await toast.destroy()
}
```

You can also use the TypeScript `await using` syntax for automatic disposal when the scope exits.

```js
await using toast = create({title: 'Saved!'})
await toast.show()
```

## Using promises

Hiding a `Toast` with promise

<<< DEMO ./demo/UseToastPromise.vue
