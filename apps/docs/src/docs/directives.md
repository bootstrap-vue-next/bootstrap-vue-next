---
title: Directives
description: >
  Browse BootstrapVueNext directives for tooltips, popovers, modal triggers, color mode, and toggle behavior.
---

Use these directives when you want BootstrapVueNext behavior on existing elements without wrapping them in components.

Depending on the installation method, directives may be automatically registered globally. However, if they are not automatically imported, you will want to import them manually. Every directive is exposed using the v- prefix. For example, for directive `BToggle`, it is imported under `vBToggle`. When using the composition api, it will function as expected. However, if you are using the options api you will want to manually remove the v- prefix during registry. For more information, visit the [vue docs](https://vuejs.org/guide/reusability/custom-directives.html#introduction).

See also [Components](/docs/components) and [Composables](/docs/composables).

<TableOfContentsCard v-for="directive in data" :key="directive.name" class="my-3" :name="directive.name" :description="directive.description" :route="directive.url" />

<script setup lang="ts">
import {data} from '../data/directives.data'
</script>
