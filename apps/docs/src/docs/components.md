---
description: BootstrapVueNext components list.
---

<TableOfContentsCard v-for="component in data" :key="component.name" class="my-3" :name="component.name" :description="component.description" :route="component.url" />

<script setup lang="ts">
import {data} from '../data/components.data'
</script>
