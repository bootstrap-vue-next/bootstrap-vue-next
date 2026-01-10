---
description: >
  Vue3 supports using custom directives, here you can find a list of directives from this package.
---

Depending on the installation method, directives may be automatically registered globally. However, if they are not automatically imported, you will want to import them manually. Every directive is exposed using the v- prefix. For example, for directive `BToggle`, it is imported under `vBToggle`. When using the composition api, it will function as expected. However, if you are using the options api you will want to manually remove the v- prefix during registry. For more information, visit the [vue docs](https://vuejs.org/guide/reusability/custom-directives.html#introduction).

<TableOfContentsCard v-for="directive in data" :key="directive.name" class="my-3" :name="directive.name" :description="directive.description" :route="directive.url" />

<script setup lang="ts">
import {data} from '../data/directives.data'
</script>
