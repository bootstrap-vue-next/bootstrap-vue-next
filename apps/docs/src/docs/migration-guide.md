# Migration Guide

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

## Overview

`bootstrap-vue-next` is an entirely new implementation of [bootrap-vue](https://bootstrap-vue.org/) based on [Vue 3](https://vuejs.org/) and [Bootstrap 5](https://getbootstrap.com/). Therefore, you should not expect this to be a drop-in replacement. Where possible compatibility has been maintained, but providing a clean developer experience when working with `Vue 3`, `Bootstrap 5` and this library is a higher priority.

You should start by familiarizing yourself with the [Vue 3 Migration Guide](https://v3-migration.vuejs.org/), espectially
the [breaking changes](https://v3-migration.vuejs.org/breaking-changes/) section and the
[Bootstrap 5 migration guide](https://getbootstrap.com/docs/5.3/migration/#v530). While there are
some places where this library will insulate you from the changes to the underlying libraries,
a general familiarity with the changes in the core dependencies will serve you well.

For instance, there are likely many places where you use `Bootstrap` utility classes in order to style your components.
`Bootstrap 5` change made a [breaking change](https://getbootstrap.com/docs/5.3/migration/#utilities-3) to all utility
classes that involve `left` and `right` (or `l` and `r`) to be `start` and `end` (or `s` and `e`). This
will affect compents such as `BNavBar` in unexpected ways that BSVN has no control over.

## Sync modifier

A number of components in `bootstrap-vue` use `v-bind`'s `.sync` modifier. This modifier has been replaced by properties
on the the model (generally named models).

For instance, in order to two-way bind to the `indeterminate` property in `BFormCheckBox` you `v-bind` to the the model
named `indeterminate` rather than adding the sync modifier to the `indeterminate` property:

<HighlightCard>
  <template #html>

```vue-html
    <BFormCheckbox v-model="checked" :indeterminate.sync="indeterminate">
      Click me to see what happens
    </BFormCheckbox>
```

  </template>
</HighlightCard>

becomes

<HighlightCard>
  <template #html>

```vue-html
  <BFormCheckbox v-model="checked" v-model:indeterminate="indeterminate"
    >Click me to see what happens</BFormCheckbox
  >
```

  </template>
</HighlightCard>

See the [Vue 3 migration guide](https://v3-migration.vuejs.org/breaking-changes/v-model.html)
for more info.

## BForm Components

`Vue 3` changed the the way that `v-model` binding works and in the process changed the guidance
when naming the main model property and events for the primary model. `bootstrap-vue-next` follows
this guidance, which affects all of the wrappers for form input. If you're looking for the `value`
property or the `change` and `input` events, you'll find that functionality in the `modelValue`
property and `update:modelValue` events.

See the [Vue 3 migration guide](https://v3-migration.vuejs.org/breaking-changes/v-model.html)
for more info.

<MigrationWrapper v-for="(item, i) in changes" :key="i" v-bind="item" />

<script setup lang="ts">
import {computed} from 'vue'
import MigrationWrapper from '../components/MigrationWrapper.vue'
import HighlightCard from '../components/HighlightCard.vue'

const changes = computed<{
  component: string
  change: string
  fix: string
}[]>(() => [
  {
    change: 'subTitle prop renamed to subtitle',
    fix: "Any instances of using prop 'subTitle' on BCard should be replaced with 'subtitle'",
    component: 'BCard',
  },
  {
    change: 'subTitleTag prop renamed to subtitleTag',
    fix: "Any instances of using prop 'subTitleTag' on BCard should be replaced with 'subtitleTag'",
    component: 'BCard',
  },
  {
    change: 'subTitleTextVariant prop renamed to subtitleTextVariant',
    fix: "Any instances of using prop 'subTitleTextVariant' on BCard should be replaced with 'subtitleTextVariant'",
    component: 'BCard',
  },
].sort((a, b) => a.component.localeCompare(b.component)))
</script>
