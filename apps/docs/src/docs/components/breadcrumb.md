# Breadcrumb

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">

Indicate the current page's location within a navigational hierarchy. Separators are automatically added in CSS through `::before` and `content`.

</div>

## Overview

<HighlightCard>
  <BBreadcrumb :items="breadcrumbItems" />
  <template #html>

```vue
<BBreadcrumb :items="breadcrumbItems" />

<script setup lang="ts">
import type {BreadcrumbItem} from 'bootstrap-vue-next'

const breadcrumbItems = ref<BreadcrumbItem[]>([
  {text: 'Admin', href: 'https://getbootstrap.com/'},
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
  <BBreadcrumb :items="breadcrumbStringArray" />
  <template #html>

```vue
<BBreadcrumb :items="breadcrumbStringArray" />

<script setup lang="ts">
const breadcrumbStringArray = ['Admin', 'Manage', 'Library']
</script>
```

  </template>
</HighlightCard>

## Manually placed items

You may also manually place individual `BBreadcrumbItem` child components in the default slot of
the `BBreadcrumb` component, as an alternative to using the `items` prop, for greater control
over the content of each item:

<HighlightCard>
  <BBreadcrumb>
    <BBreadcrumbItem href="#home">
      Home
    </BBreadcrumbItem>
    <BBreadcrumbItem href="#foo">Foo</BBreadcrumbItem>
    <BBreadcrumbItem href="#bar" @click="alertEvent">Bar</BBreadcrumbItem>
    <BBreadcrumbItem active>Baz</BBreadcrumbItem>
  </BBreadcrumb>
  <template #html>

```vue
<BBreadcrumb>
  <BBreadcrumbItem href="#home"> Home </BBreadcrumbItem>
  <BBreadcrumbItem href="#foo">Foo</BBreadcrumbItem>
  <BBreadcrumbItem href="#bar" @click="alertEvent">Bar</BBreadcrumbItem>
  <BBreadcrumbItem active>Baz</BBreadcrumbItem>
</BBreadcrumb>

<script setup lang="ts">
const alertEvent = (event: PointerEvent) => {
  alert(`Event ${event.target}`)
}
</script>
```

  </template>
</HighlightCard>

Remember to set the `active` prop on the last item.

`BBreadcrumbItem` also supports the various `RouterLink` props such as `to`, etc.

## Slots

Two slots are provided to put additional content before and after the breadcrumb.
Use slot `prepend` to put content before the breadcrumb. Use slot `append` to put content after the breadcrumb.

<HighlightCard>
  <BBreadcrumb>
    <BBreadcrumbItem href="#home">
      Home
    </BBreadcrumbItem>
    <BBreadcrumbItem href="#foo">Foo</BBreadcrumbItem>
    <BBreadcrumbItem href="#bar">Bar</BBreadcrumbItem>
    <BBreadcrumbItem active>Baz</BBreadcrumbItem>
    <template v-slot:prepend><span class="mx-2">prepend text</span></template>
    <template v-slot:append><span class="mx-2">append text</span></template>
  </BBreadcrumb>
  <template #html>

```vue-html
<BBreadcrumb>
  <BBreadcrumbItem href="#home"> Home </BBreadcrumbItem>
  <BBreadcrumbItem href="#foo">Foo</BBreadcrumbItem>
  <BBreadcrumbItem href="#bar">Bar</BBreadcrumbItem>
  <BBreadcrumbItem active>Baz</BBreadcrumbItem>
  <template v-slot:prepend><span class="mx-2">prepend text</span></template>
  <template v-slot:append><span class="mx-2">append text</span></template>
</BBreadcrumb>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/breadcrumb.data'
import {ref} from 'vue';
import {BBreadcrumbItem, BBreadcrumb} from 'bootstrap-vue-next'
import ComponentReference from '../../components/ComponentReference.vue'
import ComponentSidebar from '../../components/ComponentSidebar.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import type {BreadcrumbItem} from 'bootstrap-vue-next'

const breadcrumbItems = ref<BreadcrumbItem[]>([
  { text: 'Admin', href:'https://getbootstrap.com/'},
  { text: 'Manage', href:'#'},
  { text: 'Library'},
]);

const breadcrumbStringArray = ['Admin','Manage', 'Library'];

const alertEvent = (event: PointerEvent) => {
  alert(`Event ${event.target}`);
}
</script>
