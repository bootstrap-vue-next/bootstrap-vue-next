---
title: Composables
description: Browse BootstrapVueNext composables for programmatic control, shared state, and component integration.
---

These composables help you control BootstrapVueNext behavior from Vue logic without depending on template-only APIs.

See also [Components](/docs/components) and [Directives](/docs/directives).

<TableOfContentsCard v-for="composable in data" :key="composable.name" class="my-3" :name="composable.name" :description="composable.description" :route="composable.url" />

<script setup lang="ts">
import {data} from '../data/composables.data'
</script>
