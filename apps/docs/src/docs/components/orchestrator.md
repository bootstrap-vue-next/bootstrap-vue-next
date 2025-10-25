---
description: 'The `BOrchestrator` component manages the rendering and positioning of dynamic components like modals, toasts, and popovers. It works with `BApp` to provide a centralized orchestration layer.'
---

# BOrchestrator

<PageHeader />

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

<<< DEMO ./demo/OrchestratorInternal.vue

## Advanced Usage

### Custom Filtering

<<< DEMO ./demo/OrchestratorFilter.vue

### Selective Component Types

<<< FRAGMENT ./demo/OrchestratorSelective.vue#template{vue-html}

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
