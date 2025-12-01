---
description: BootstrapVueNext provides several configuration options that you can use to customize the behavior of your components.
---

<TableOfContentsCard v-for="configuration in data" :key="configuration.name" class="my-3" :name="configuration.name" :description="configuration.description" :route="configuration.url" />

<script setup lang="ts">
import {data} from '../data/configurations.data'
import TableOfContentsCard from '../components/TableOfContentsCard.vue'
</script>
