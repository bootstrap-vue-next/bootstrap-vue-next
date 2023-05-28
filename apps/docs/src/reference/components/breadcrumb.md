# Breadcrumb

<div class="lead mb-5">

Indicate the current page's location within a navigational hierarchy. Separators are automatically added in CSS through `::before` and `content`

</div>

## Overview

<HighlightCard>
  <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
  <template #html>

```vue-html
<b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>

<script setup lang="ts">
  import {ref, type Ref} from 'vue'
  import type {BreadcrumbItem} from 'bootstrap-vue-next'

  const breadcrumbItems: Ref<BreadcrumbItem[]> = ref([
    {text: 'Admin', href: 'https://google.com'},
    {text: 'Manage', href: '#'},
    {text: 'Library'},
  ])
</script>
```

  </template>
</HighlightCard>

## Breadcrumb items

Items are rendered using `:items` prop. It can be an array of objects to provide link and active
state or an array of strings. Links can be `href`'s for anchor tags, or `to`'s for router-links. Active state of last
element is automatically set if it is `undefined`.

### Breadcrumb items as array of strings

<HighlightCard>
  <b-breadcrumb :items="breadcrumbStringArray"></b-breadcrumb>
  <template #html>

```vue-html
<b-breadcrumb :items="breadcrumbStringArray"></b-breadcrumb>

<script setup lang="ts">
  import {ref, type Ref} from 'vue'

  const breadcrumbStringArray = ['Admin', 'Manage', 'Library']
</script>
```

  </template>
</HighlightCard>

## Manually placed items

You may also manually place individual `<b-breadcrumb-item>` child components in the default slot of
the `<b-breadcrumb>` component, as an alternative to using the `items` prop, for greater control
over the content of each item:

<HighlightCard>
  <b-breadcrumb>
    <b-breadcrumb-item href="#home">
      Home
    </b-breadcrumb-item>
    <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
    <b-breadcrumb-item href="#bar" @click="alertEvent">Bar</b-breadcrumb-item>
    <b-breadcrumb-item active>Baz</b-breadcrumb-item>
  </b-breadcrumb>
  <template #html>

```vue-html
<b-breadcrumb>
  <b-breadcrumb-item href="#home"> Home </b-breadcrumb-item>
  <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
  <b-breadcrumb-item href="#bar" @click="alertEvent">Bar</b-breadcrumb-item>
  <b-breadcrumb-item active>Baz</b-breadcrumb-item>
</b-breadcrumb>

<script setup lang="ts">
  const alertEvent = (event: PointerEvent) => {
    alert(`Event ${event.target}`)
  }
</script>
```

  </template>
</HighlightCard>

Remember to set the `active` prop on the last item.

`<b-breadcrumb-item>` also supports the various `<router-link>` props such as `to`, etc.

## Slots

Two slots are provided to put additional content before and after the breadcrumb.
Use slot `prepend` to put content before the breadcrumb. Use slot `append` to put content after the breadcrumb.

<HighlightCard>
  <b-breadcrumb>
    <b-breadcrumb-item href="#home">
      Home
    </b-breadcrumb-item>
    <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
    <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
    <b-breadcrumb-item active>Baz</b-breadcrumb-item>
    <template v-slot:prepend><span class="mx-2">prepend text</span></template>
    <template v-slot:append><span class="mx-2">append text</span></template>
  </b-breadcrumb>
  <template #html>

```vue-html
<b-breadcrumb>
  <b-breadcrumb-item href="#home"> Home </b-breadcrumb-item>
  <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
  <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
  <b-breadcrumb-item active>Baz</b-breadcrumb-item>
  <template v-slot:prepend><span class="mx-2">prepend text</span></template>
  <template v-slot:append><span class="mx-2">append text</span></template>
</b-breadcrumb>
```

  </template>
</HighlightCard>

<ComponentReference :data="data"></ComponentReference>

<script setup lang="ts">
import {data} from '../../data/components/breadcrumb.data'
import {ref, type Ref} from 'vue';
import {BBreadcrumbItem, BBreadcrumb} from 'bootstrap-vue-next'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import type {BreadcrumbItem} from 'bootstrap-vue-next'

const breadcrumbItems: Ref<BreadcrumbItem[]> = ref([
  { text: 'Admin', href:'https://google.com'},
  { text: 'Manage', href:'#'},
  { text: 'Library'},
]);

const breadcrumbStringArray = ['Admin','Manage', 'Library'];

const alertEvent = (event: PointerEvent) => {
  alert(`Event ${event.target}`);
}
</script>
