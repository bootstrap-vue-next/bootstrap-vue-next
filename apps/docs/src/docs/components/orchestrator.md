# BOrchestrator

<PageHeader>

The `BOrchestrator` component manages the rendering and positioning of dynamic components like modals, toasts, and popovers. It works with `BApp` to provide a centralized orchestration layer.

</PageHeader>

## Overview

`BOrchestrator` serves as the rendering engine for dynamic components, providing:

- **Centralized rendering** - Manages all modals, toasts, and popovers in one place
- **Position management** - Handles positioning toasts
- **Filtering capabilities** - Allows selective rendering of component types
- **Event handling** - Manages component events and promise resolution

## Internal Usage

<HighlightCard type="info">

**Note:** `BOrchestrator` is typically used internally by `BApp` and not directly in user applications. This documentation is provided for advanced use cases and internal understanding.

</HighlightCard>

<HighlightCard>
<template #html>

```vue
<template>
  <BOrchestrator append-toast />
</template>

<script setup lang="ts">
import {BOrchestrator} from 'bootstrap-vue-next'
</script>
```

</template>
</HighlightCard>

## Advanced Usage

### Custom Filtering

<HighlightCard>
<template #html>

```vue
<template>
  <BOrchestrator :filter="customFilter" />
</template>

<script setup lang="ts">
import {BOrchestrator} from 'bootstrap-vue-next'
import type {OrchestratorArrayValue} from 'bootstrap-vue-next'

const customFilter = (item: OrchestratorArrayValue) => {
  // Only show high-priority items
  return item.options?.priority === 'high'
}
</script>
```

</template>
</HighlightCard>

### Selective Component Types

<HighlightCard>
<template #html>

```vue
<template>
  <!-- Only render toasts, no modals or popovers -->
  <BOrchestrator no-modals no-popovers />
</template>
```

</template>
</HighlightCard>

## Related Components

- [`BApp`](/docs/components/app) - Provides the orchestrator registry
- [`BModal`](/docs/components/modal) - Can be orchestrated
- [`BToast`](/docs/components/toast) - Can be orchestrated
- [`BPopover`](/docs/components/popover) - Can be orchestrated

## Component Reference

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/orchestrator.data'
</script>
