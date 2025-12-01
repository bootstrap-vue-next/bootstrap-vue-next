---
description: BootstrapVueNext exposes several custom composables that integrate with various components.
---

<TableOfContentsCard v-for="composable in data" :key="composable.name" class="my-3" :name="composable.name" :description="composable.description" :route="composable.url" />

<script setup lang="ts">
import {data} from '../data/composables.data'
import TableOfContentsCard from '../components/TableOfContentsCard.vue'
</script>
