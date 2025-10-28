---
description: 'The `useToast` composable allows you to create and manage toasts programmatically from anywhere in your application. It provides a simple API to show toast messages without needing to declare toast components in your templates.'
---

## Setup

To use `useToast`, you need one of the following setup approaches:

### BApp Component (Recommended)

The easiest way is to wrap your application with the `BApp` component, which automatically sets up the orchestrator and registry:

<<< FRAGMENT ./demo/UseToastSetup.vue#template{vue-html}

### Plugin Setup (Legacy)

Alternatively, you can use the traditional plugin approach.

<UsePluginAlert />

## Basic Usage

Creating and showing a toast is simple:

<<< DEMO ./demo/UseToastBasic.vue

The `create` method returns a `promise` that is resolved then the toast closes. You can give toast a unique id. Since `Toasts` are fluid and can move around a lot, returning the index at a given point in time is not ideal for as its position may be changed in the array. So, for use with the `remove` method, you need to give a unique identifier

### Create Options

The `create` method accepts an object with `BToast`’s props, `position`, `appendToast`, `component` and `slots`.

The `position` value affects placement; its type is [ContainerPosition](/docs/types#containerposition).

Optional second argument can be passed to `create` to some options: `keep` and `resolveOnHide`. The `keep` option will keep the toast in the registry after it is hidden, allowing you to show it again without creating a new instance. The `resolveOnHide` option will resolve the promise returned by `create` when the toast is hidden, not after the hide has finished.

### Reactivity Within create

`create` props property can accept a `MaybeRefOrGetter`, meaning that you can make properties reactive

<<< DEMO ./demo/UseToastReactive.vue

### Advanced usage

Using props can work for most situations, but it leaves some finer control to be desired. For instance, you can add HTML to any `slot` value. This can either be an imported SFC or an inline render function. For reactivity, you must use a getter function.

<<< DEMO ./demo/UseToastAdvanced.vue

## Programmatically Hiding a Toast

Hiding a `Toast` programmatically is very simple. `create` returns an object that has functions to control the toast, including `destroy`

<<< DEMO ./demo/UseToastProgrammatic.vue

## Using promises

Hiding a `Toast` with promise

<<< DEMO ./demo/UseToastPromise.vue
