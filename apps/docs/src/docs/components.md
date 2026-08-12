---
title: Components
description: Browse BootstrapVueNext components with links to usage guides, demos, and API details.
---

Browse the component catalog to find examples and API details for each BootstrapVueNext component.

See also [Composables](/docs/composables), [Directives](/docs/directives), and [Reference](/docs/reference).

<TableOfContentsCard v-for="component in data" :key="component.name" class="my-3" :name="component.name" :description="component.description" :route="component.url" />

<script setup lang="ts">
import {data} from '../data/components.data'
</script>
