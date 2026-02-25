---
description: BootstrapVueNext components list.
---

<VBLink to="/docs/composables">View all components</VBLink>
<VBLink href="https://google.com">View all gg</VBLink>
<VBLink to="https://google.com">View all gg2</VBLink>

<TableOfContentsCard v-for="component in data" :key="component.name" class="my-3" :name="component.name" :description="component.description" :route="component.url" />

<script setup lang="ts">
import {data} from '../data/components.data' 
import VBLink from '../components/VBLink.vue'
</script>
