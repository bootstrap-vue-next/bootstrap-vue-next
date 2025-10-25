---
description: 'The `BApp` component is the new recommended way to configure bootstrap-vue-next. It replaces the plugin-based approach and provides better defaults management, orchestrator integration, and improved type safety.'
---

# BApp

<PageHeader base="githubComponentsDirectory" />

## Overview

`BApp` serves as the root component for your bootstrap-vue-next application, providing:

- **Global defaults management** - Set and merge component defaults throughout your application
- **Automatic orchestrator integration** - Built-in Modal, Toast, and Popover orchestrators
- **Plugin compatibility** - Works alongside existing plugins for backward compatibility (see the [Backward Compatibility](#backward-compatibility) section for details)
- **Type safety** - Full TypeScript support with proper type inference
- **RTL support** - Built-in right-to-left language support
- **Flexible teleporting** - Control where orchestrators are rendered in the DOM

## Basic Usage

<<< FRAGMENT ./demo/AppBasicUsage.vue

## Configuration

### Setting Component Defaults

You can provide global defaults for any bootstrap-vue-next component:

<<< FRAGMENT ./demo/AppDefaults.vue

### Merging Defaults

By default, the `defaults` prop completely replaces any existing defaults. Use `mergeDefaults` to merge with parent or plugin defaults:

<<< FRAGMENT ./demo/AppMergeDefaults.vue

### Custom Merge Function

For advanced use cases, you can provide a custom merge function:

<<< FRAGMENT ./demo/AppCustomMerge.vue

## Orchestrator Configuration

### Teleporting Orchestrators

By default, orchestrators render inline with your `BApp` component. Use `teleportTo` to render them elsewhere in the DOM:

<<< FRAGMENT ./demo/AppTeleport.vue#template{vue-html}

### Disabling Orchestrators

If you don't need the built-in orchestrators (for example, if you're using custom implementations), you can disable them:

<<< FRAGMENT ./demo/AppNoOrchestrator.vue#template{vue-html}

### Toast Configuration

Control how toasts are added to the list:

<<< FRAGMENT ./demo/AppToastConfig.vue#template{vue-html}

## RTL Support

`BApp` provides built-in right-to-left language support:

<<< FRAGMENT ./demo/AppRTL.vue

## Migration from Plugins

### Before (Plugin-based)

<<< FRAGMENT ./demo/AppMigrationBefore.ts{typescript}

### After (BApp-based)

<<< FRAGMENT ./demo/AppMigrationAfter.vue{vue}

<<< FRAGMENT ./demo/AppMigrationAfterMain.ts{typescript}

## Working with Composables

When using `BApp`, the following composables work without requiring plugin installation:

- [`useToast()`](/docs/composables/useToast) - Create and manage toasts programmatically
- [`useModal()`](/docs/composables/useModal) - Create and manage modals programmatically
- [`usePopover()`](/docs/composables/usePopover) - Create and manage popovers programmatically

<<< FRAGMENT ./demo/AppComposables.vue

## Backward Compatibility

The `BApp` component is fully backward compatible with existing plugin-based setups. You can gradually migrate by:

1. Adding `BApp` to your root component
2. Moving defaults from plugin configuration to `BApp` props
3. Removing plugin installations once migration is complete

::: warning Migration Note

Plugins will show deprecation warnings but continue to work until removed in a future version, with
the following exceptions:

- `modalControllerPlugin`
- `toastControllerPlugin`
- `popoverControllerPlugin`

These plugins have been removed as of **version 0.40.0**.
Please replace references to these with a reference to `orchestratorPlugin`.

:::

## Internal Features

The `BApp` component automatically provides several internal services:

- **Show/Hide Registry** - Global registry for show/hide components
- **Modal Manager** - Stack management for multiple modals
- **Breadcrumb Service** - Global breadcrumb item management
- **RTL Service** - Right-to-left text direction support

## Notes

- Only one `BApp` component should be active at a time per application
- The component uses Vue's provide/inject system for dependency injection
- All orchestrators are automatically teleported when `teleportTo` is specified
- The component inherits all attributes and passes them to the default slot

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/app.data'
</script>
