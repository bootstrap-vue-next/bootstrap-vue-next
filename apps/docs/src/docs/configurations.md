---
title: Configurations
description: Discover global BootstrapVueNext configuration options for customizing component behavior across your app.
---

Use these guides to configure shared BootstrapVueNext behavior before you start tuning individual components.

See also [Reference](/docs/reference) for shared behavior notes and supporting guides.

<TableOfContentsCard v-for="configuration in data" :key="configuration.name" class="my-3" :name="configuration.name" :description="configuration.description" :route="configuration.url" />

<script setup lang="ts">
import {data} from '../data/configurations.data'
</script>
