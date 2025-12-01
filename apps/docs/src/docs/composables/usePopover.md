---
description: 'The `usePopover` composable allows you to create and control popovers and tooltips dynamically from anywhere in your application. It provides methods to create, show, hide, and manage both popovers and tooltips programmatically.'
---

## Setup

To use `usePopover`, you need one of the following setup approaches:

### BApp Component (Recommended)

The easiest way is to wrap your application with the `BApp` component, which automatically sets up the orchestrator and registry:

<<< FRAGMENT ./demo/UsePopoverSetup.vue

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

The `popover` and `tooltip` methods return an awaitable controller `PromiseWithComponent`. You can call its methods immediately to control the instance, and you can also `await` it to resolve when the popover/tooltip is hidden. The controller exposes:

- `show: () => PromiseWithComponent` - Shows the popover.
- `hide: (trigger?: string) => PromiseWithComponent` - Hides the popover, optionally passing a trigger.
- `toggle: () => PromiseWithComponent` - Toggles the visibility of the popover.
- `get: () => PopoverOrchestratorParam | undefined` - Returns the current properties of the popover, or undefined if none.
- `set: (props: Partial<PopoverOrchestratorParam>) => PromiseWithComponent` - Updates the popover's properties.
- `destroy: () => void` - Destroys the popover and cleans up resources.

### Lifecycle

By default, the popover is destroyed when the current scope is exited. You can manually destroy it using the `destroy` method.

<<< FRAGMENT ./demo/UsePopoverLifecycleManual.ts#snippet{ts}

Alternatively, use `await using` in TypeScript 5.2+ to automatically destroy the popover when the scope is exited.

<<< FRAGMENT ./demo/UsePopoverLifecycleAwaitUsing.ts#snippet{ts}

<script setup lang="ts">
import UsePluginAlert from '../../components/UsePluginAlert.vue'
import PageHeader from '../../components/PageHeader.vue'

</script>
