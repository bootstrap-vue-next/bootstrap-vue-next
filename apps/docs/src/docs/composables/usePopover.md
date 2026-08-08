---
title: usePopover
description: 'The `usePopover` composable allows you to create and control popovers and tooltips dynamically from anywhere in your application. It provides methods to create, show, hide, and manage both popovers and tooltips programmatically.'
---

## Setup

To use `usePopover`, you need one of the following setup approaches:

### BApp Component (Recommended)

<UseBAppSetup>

<<< FRAGMENT ./demo/OrchestratorSetup.vue

</UseBAppSetup>

### Plugin Setup (Legacy)

Alternatively, you can use the traditional plugin approach.

Note: As of v0.40, there are no separate toast/modal/popover controller plugins. If you stick with plugins, use the single `orchestratorPlugin` (or prefer `BApp`).

<UsePluginAlert />

## Creating Popovers

Popovers and tooltips can be created using the `popover` or `tooltip` methods:

<<< DEMO ./demo/UsePopoverBasic.vue

### Reactivity Within `popover` and `tooltip`

The methods accept reactive properties using `MaybeRef`, allowing dynamic updates to the popover content.

<<< DEMO ./demo/UsePopoverReactive.vue

### Advanced Creation

For more control, you can use the `component` property to render a custom component or the `slots` property to define slot content dynamically.

<<< DEMO ./demo/UsePopoverAdvanced.vue

### Return Value

The `popover` and `tooltip` methods **register** an entry and return a `ComponentController`. The popover/tooltip does **not** appear automatically — call `.show()` on the controller (or pass `modelValue: true` in the creation options) to display it.

`ComponentController` exposes:

- `show(): Promise<BvTriggerableEvent & AsyncDisposable>` — shows the popover/tooltip. Optionally awaitable; resolves when hidden.
- `hide(trigger?: string): void` — hides without removing the registry entry.
- `toggle(): void` — toggles visibility.
- `set(props): void` — updates props after creation.
- `get(): PopoverOrchestratorArrayValue | undefined` — returns the current registry entry.
- `destroy(): Promise<void>` — hides and removes the entry from the registry.
- `[Symbol.asyncDispose]` — same as `destroy()`, enables `await using` syntax.

### Lifecycle and Cleanup

#### Visibility control

Use `.show()`, `.hide()`, and `.toggle()` to control visibility. `.hide()` only hides the popover — the entry stays in the registry and can be shown again.

#### Long-lived entries and reuse

A controller stays valid until `.destroy()` is called or the owning scope is disposed. Call `.show()` and `.hide()` as many times as needed on the same controller.

#### Cleanup responsibilities and memory implications

Every registered popover occupies memory until explicitly destroyed. The controller is automatically destroyed when the Vue scope that called `create`/`popover`/`tooltip` is disposed (e.g. the component unmounts). For controllers created outside a component, clean up manually.

#### Recommended cleanup patterns

**`await using` (TypeScript 5.2+)** — automatically destroys the popover when the block exits:

<<< FRAGMENT ./demo/UsePopoverLifecycleAwaitUsing.ts#snippet{ts}

**Manual `.show()`/`.hide()` and explicit `.destroy()`:**

<<< FRAGMENT ./demo/UsePopoverLifecycleManual.ts#snippet{ts}

<script setup lang="ts">
import UsePluginAlert from '../../components/UsePluginAlert.vue'
import PageHeader from '../../components/PageHeader.vue'

</script>
