---
description: 'The `useModal` composable provides a powerful API to create, manage, and control modals programmatically from anywhere in your application. It allows you to create modals on-demand, manage existing modals, and handle modal interactions through promises.'
---

## Setup

To use `useModal`, you need one of the following setup approaches:

### BApp Component (Recommended)

The easiest way is to wrap your application with the `BApp` component, which automatically sets up the orchestrator and registry:

<<< FRAGMENT ./demo/UseModalSetup.vue

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

The `create` method returns a promise that resolves after the modal has been hidden to a `BvTriggerableEvent` object.
Using the `resolveOnHide` option (in the second argument), the promise resolves at the time the modal begins hiding, rather than after it is fully hidden.

```js
const value = await create({title: 'Hello World!'}, {resolveOnHide: true})
```

This object contains the following properties:

- `ok: boolean`

  Clicking the `ok` button resolve this to `true`, `cancel` to `false` and any other closable action `null` (clicking the backdrop, or some other custom closing action. More accurately, when the `hide` function does not pass in the trigger parameter of `ok` or `cancel`)

- `trigger: string | null`

  This is the trigger that closed the modal. This is useful for determining what action closed the modal.

The promise also contains functions to control the modal:

- `show: () => void`

  This function shows the modal.

- `hide: (trigger?: string) => void`

  This function hides the modal. If a trigger is passed, it will be passed to the `trigger` property of the resolved promise

- `toggle: () => void`

  This function toggles the visibility of the modal.

- `set: (props: Partial<ModalOrchestratorParam>) => void`

  This function sets the props of the modal. This is useful for updating the modal after it has been created.

- `destroy: () => Promise<void>`

  This function destroys the modal and cleans up any resources associated with it.

### Lifecycle

By default, the modal is destroyed once it's closed. If you want to keep the modal, use the `keep` option in the second argument of the `create` method.
The modal is destroyed when the current scope is exited. You can also destroy it manually by calling the `destroy` method.

```js
const modal = create({title: 'Hello World!'}, {keep: true})
modal.show()
// do something
modal.destroy()
```

We also support the typescript feature `await using` to automatically destroy the modal when the scope is exited.

```js
await using modal = create({title: 'Hello World!'})
```

## Globally Hiding Modals

In addition to creating modals in a global context, you can also hide modals from anywhere in the app. This feature does not require an orchestrator component to be present.

<<< DEMO ./demo/UseModalNested.vue

<script setup lang="ts">
import UsePluginAlert from '../../components/UsePluginAlert.vue'
import PageHeader from '../../components/PageHeader.vue'

</script>
