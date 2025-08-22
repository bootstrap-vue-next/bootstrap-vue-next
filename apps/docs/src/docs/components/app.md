# BApp

<PageHeader>

The `BApp` component is the new recommended way to configure bootstrap-vue-next. It replaces the plugin-based approach and provides better defaults management, orchestrator integration, and improved type safety.

</PageHeader>

## Overview

`BApp` serves as the root component for your bootstrap-vue-next application, providing:

- **Global defaults management** - Set and merge component defaults throughout your application
- **Automatic orchestrator integration** - Built-in Modal, Toast, and Popover orchestrators
- **Plugin compatibility** - Works alongside existing plugins for backward compatibility
- **Type safety** - Full TypeScript support with proper type inference
- **RTL support** - Built-in right-to-left language support
- **Flexible teleporting** - Control where orchestrators are rendered in the DOM

## Basic Usage

<HighlightCard>
<template #html>

```vue
<template>
  <BApp>
    <!-- Your application content -->
    <router-view />
  </BApp>
</template>

<script setup lang="ts">
import {BApp} from 'bootstrap-vue-next'
</script>
```

</template>
</HighlightCard>

## Configuration

### Setting Component Defaults

You can provide global defaults for any bootstrap-vue-next component:

<HighlightCard>
<template #html>

```vue
<template>
  <BApp :defaults="appDefaults">
    <!-- Your application content -->
    <router-view />
  </BApp>
</template>

<script setup lang="ts">
import {BApp} from 'bootstrap-vue-next'

const appDefaults = {
  BButton: {
    variant: 'primary',
    size: 'sm',
  },
  BModal: {
    centered: true,
    noCloseOnBackdrop: true,
  },
  BToast: {
    variant: 'success',
    solid: true,
  },
}
</script>
```

</template>
</HighlightCard>

### Merging Defaults

By default, the `defaults` prop completely replaces any existing defaults. Use `mergeDefaults` to merge with parent or plugin defaults:

<HighlightCard>
<template #html>

```vue
<template>
  <BApp :defaults="appDefaults" :merge-defaults="true">
    <!-- Your application content -->
  </BApp>
</template>

<script setup lang="ts">
import {BApp} from 'bootstrap-vue-next'

const appDefaults = {
  BButton: {
    variant: 'primary', // This will merge with existing BButton defaults
  },
}
</script>
```

</template>
</HighlightCard>

### Custom Merge Function

For advanced use cases, you can provide a custom merge function:

<HighlightCard>
<template #html>

```vue
<template>
  <BApp :defaults="appDefaults" :merge-defaults="customMerge">
    <!-- Your application content -->
  </BApp>
</template>

<script setup lang="ts">
import {BApp} from 'bootstrap-vue-next'
import type {BvnComponentProps} from 'bootstrap-vue-next'

const appDefaults = {
  BButton: {
    variant: 'primary',
  },
}

const customMerge = (
  oldDefaults: Partial<BvnComponentProps>,
  newDefaults: Partial<BvnComponentProps>
): Partial<BvnComponentProps> => {
  // Your custom merge logic here
  return {...oldDefaults, ...newDefaults}
}
</script>
```

</template>
</HighlightCard>

## Orchestrator Configuration

### Teleporting Orchestrators

By default, orchestrators render inline with your `BApp` component. Use `teleportTo` to render them elsewhere in the DOM:

<HighlightCard>
<template #html>

```vue
<template>
  <BApp teleport-to="body">
    <!-- Orchestrators will render in document.body -->
    <router-view />
  </BApp>
</template>
```

</template>
</HighlightCard>

### Disabling Orchestrators

If you don't need the built-in orchestrators (for example, if you're using custom implementations), you can disable them:

<HighlightCard>
<template #html>

```vue
<template>
  <BApp :no-orchestrator="true">
    <!-- No automatic orchestrators will be created -->
    <router-view />
  </BApp>
</template>
```

</template>
</HighlightCard>

### Toast Configuration

Control how toasts are added to the list:

<HighlightCard>
<template #html>

```vue
<template>
  <BApp :append-toast="true">
    <!-- New toasts will be appended to the end of the list -->
    <router-view />
  </BApp>
</template>
```

</template>
</HighlightCard>

## RTL Support

`BApp` provides built-in right-to-left language support:

<HighlightCard>
<template #html>

```vue
<template>
  <BApp :rtl="rtlConfig">
    <!-- Your application content -->
    <router-view />
  </BApp>
</template>

<script setup lang="ts">
import {BApp} from 'bootstrap-vue-next'

const rtlConfig = {
  rtlInitial: true,
  localeInitial: 'ar',
}
</script>
```

</template>
</HighlightCard>

## Migration from Plugins

### Before (Plugin-based)

<HighlightCard>
<template #html>

```typescript
// main.ts
import {createApp} from 'vue'
import {createBootstrap} from 'bootstrap-vue-next'
import App from './App.vue'

const app = createApp(App)

app.use(
  createBootstrap({
    components: {
      BButton: {
        variant: 'primary',
      },
    },
  })
)

app.mount('#app')
```

</template>
</HighlightCard>

### After (BApp-based)

<HighlightCard>
<template #html>

```vue
<!-- App.vue -->
<template>
  <BApp :defaults="{BButton: {variant: 'primary'}}">
    <router-view />
  </BApp>
</template>

<script setup lang="ts">
import {BApp} from 'bootstrap-vue-next'
</script>
```

```typescript
// main.ts
import {createApp} from 'vue'
import App from './App.vue'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.mount('#app')
```

</template>
</HighlightCard>

## Working with Composables

When using `BApp`, the following composables work without requiring plugin installation:

- [`useToast()`](/docs/composables/useToast) - Create and manage toasts programmatically
- [`useModal()`](/docs/composables/useModal) - Create and manage modals programmatically
- [`usePopover()`](/docs/composables/usePopover) - Create and manage popovers programmatically

<HighlightCard>
<template #html>

```vue
<template>
  <BApp>
    <BButton @click="showToast">Show Toast</BButton>
    <BButton @click="showModal">Show Modal</BButton>
  </BApp>
</template>

<script setup lang="ts">
import {BApp, BButton, useToast, useModal} from 'bootstrap-vue-next'

const toast = useToast()
const modal = useModal()

const showToast = () => {
  toast
    .create({
      title: 'Hello',
      body: 'This is a toast message!',
    })
    .show()
}

const showModal = () => {
  modal
    .create({
      title: 'Confirm Action',
      body: 'Are you sure you want to continue?',
    })
    .show()
}
</script>
```

</template>
</HighlightCard>

## Backward Compatibility

The `BApp` component is fully backward compatible with existing plugin-based setups. You can gradually migrate by:

1. Adding `BApp` to your root component
2. Moving defaults from plugin configuration to `BApp` props
3. Removing plugin installations once migration is complete

<HighlightCard type="warning">

**Migration Note:** The plugins will show deprecation warnings but continue to work until removed in a future version.

</HighlightCard>

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

## Component Reference

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/app.data'
</script>
