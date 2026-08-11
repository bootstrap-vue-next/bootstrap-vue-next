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

The `create` method accepts an object with `BToast`’s props, `position`, `appendToast`, `component` and `slots`.

The `position` value affects placement; its type is [ContainerPosition](/docs/types#containerposition).

Lifecycle options are passed in `options` on the create payload (for example `keep` and `resolveOnHide`). `keep` keeps the toast in the registry after it is hidden so it can be shown again, and `resolveOnHide` resolves the promise when hide starts instead of after the full hide lifecycle.

### Reactivity Within create

`create` props property can accept a `MaybeRef`, meaning that you can make properties reactive

<<< DEMO ./demo/UseToastReactive.vue

### Advanced usage

Using props can work for most situations, but it leaves some finer control to be desired. For instance, you can add HTML to any `slot` value. This can either be an imported SFC or an inline render function. For reactivity, you must use a getter function.

<<< DEMO ./demo/UseToastAdvanced.vue

## Programmatically Hiding a Toast

Hiding a `Toast` programmatically is simple. The controller returned by `create` exposes methods like `show`, `hide`, and `destroy`.

<<< DEMO ./demo/UseToastProgrammatic.vue

## Using promises

Hiding a `Toast` with promise

<<< DEMO ./demo/UseToastPromise.vue
