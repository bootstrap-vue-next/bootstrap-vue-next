---
description: BootstrapVueNext and Bootstrap reference, and additional resources documentation.
---

<TableOfContentsCard v-for="item in data" :key="item.name" class="my-3" :name="item.name" :description="item.description" :route="item.url" />

<script setup lang="ts">
import {data} from '../data/reference.data'
</script>
