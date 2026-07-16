---
title: Reference
description: Browse shared reference guides for router links, validation, theming, Bootstrap helpers, and related topics.
---

Use this section for cross-component behavior, Bootstrap interoperability notes, and shared implementation guidance.

See also [Types](/docs/types) and [Configurations](/docs/configurations).

<TableOfContentsCard v-for="item in data" :key="item.name" class="my-3" :name="item.name" :description="item.description" :route="item.url" />

<script setup lang="ts">
import {data} from '../data/reference.data'
</script>
