# Breadcrumb

> Indicate the current page's location within a navigational hierarchy. Separators are automatically added in CSS through `::before` and `content`

## Overview

<ClientOnly>
  <b-card>
    <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
  </b-card>

</ClientOnly>

```html
<b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>

<script lang="ts" setup>
  import {ref, Ref} from 'vue'
  import {BreadcrumbItem} from '../../src/types'

  const breadcrumbItems: Ref<BreadcrumbItem[]> = ref([
    {text: 'Admin', href: 'http://google.com'},
    {text: 'Manage', href: '#'},
    {text: 'Library'},
  ])
</script>
```

## Breadcrumb items

Items are rendered using `:items` prop. It can be an array of objects to provide link and active
state or an array of strings. Links can be `href`'s for anchor tags, or `to`'s for router-links. Active state of last
element is automatically set if it is `undefined`.

### Breadcrumb items as array of strings

<ClientOnly>
  <b-card>
    <b-breadcrumb :items="breadcrumbStringArray"></b-breadcrumb>
  </b-card>

</ClientOnly>

```html
<b-breadcrumb :items="breadcrumbStringArray"></b-breadcrumb>

<script lang="ts" setup>
  import {ref, Ref} from 'vue'

  const breadcrumbStringArray = ['Admin', 'Manage', 'Library']
</script>
```

## Manually placed items

You may also manually place individual `<b-breadcrumb-item>` child components in the default slot of
the `<b-breadcrumb>` component, as an alternative to using the `items` prop, for greater control
over the content of each item:

<ClientOnly>
  <b-card>
    <b-breadcrumb>
      <b-breadcrumb-item href="#home">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
      <b-breadcrumb-item href="#bar" @click="alertEvent">Bar</b-breadcrumb-item>
      <b-breadcrumb-item active>Baz</b-breadcrumb-item>
    </b-breadcrumb>
  </b-card>

</ClientOnly>

```html
<b-breadcrumb>
  <b-breadcrumb-item href="#home">
    <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
    Home
  </b-breadcrumb-item>
  <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
  <b-breadcrumb-item href="#bar" @click="alertEvent">Bar</b-breadcrumb-item>
  <b-breadcrumb-item active>Baz</b-breadcrumb-item>
</b-breadcrumb>

<script lang="ts" setup>
  const alertEvent = (event: PointerEvent) => {
    alert(`Event ${event.target}`)
  }
</script>
```

Remember to set the `active` prop on the last item.

`<b-breadcrumb-item>` also supports the various `<router-link>` props such as `to`, etc.

## Slots

Two slots are provided to put additional content before and after the breadcrumb.
Use slot `prepend` to put content before the breadcrumb. Use slot `append` to put content after the breadcrumb.

<ClientOnly>
  <b-card>
    <b-breadcrumb>
      <b-breadcrumb-item href="#home">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
      <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
      <b-breadcrumb-item active>Baz</b-breadcrumb-item>
      <template v-slot:prepend><span class="mx-2">prepend text</span></template>
      <template v-slot:append><span class="mx-2">append text</span></template>
    </b-breadcrumb>
  </b-card>

</ClientOnly>

```html
<b-breadcrumb>
  <b-breadcrumb-item href="#home">
    <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
    Home
  </b-breadcrumb-item>
  <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
  <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
  <b-breadcrumb-item active>Baz</b-breadcrumb-item>
  <template v-slot:prepend><span class="mx-2">prepend text</span></template>
  <template v-slot:append><span class="mx-2">append text</span></template>
</b-breadcrumb>
```

## Component reference

### `<b-breadcrumb>`

#### Properties

| Property | Type    | Default | Description                         |
| -------- | ------- | ------- | ----------------------------------- |
| `items`  | `Array` |         | Array of breadcrumb items to render |

#### Slots

| Name      | Description                                           |
| --------- | ----------------------------------------------------- |
| `default` | Content (breadcrumb items) to place in the breadcrumb |
| `append`  | Content to place after the breadcrumb                 |
| `prepend` | Content to place before the breadcrumb                |

### `<b-breadcrumb-item>`

#### Properties

| Property             | Type                 | Default    | Description                                                                                                                                                                                    |
| -------------------- | -------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`             | `Boolean`            | `false`    | When set to `true`, places the component in the active state with active styling                                                                                                               |
| `active-class`       | `String`             |            | `<router-link>` prop: Configure the active CSS class applied when the link is active. Typically you will want to set this to class name 'active'                                               |
| `append`             | `Boolean`            | `false`    | `<router-link>` prop: Setting append prop always appends the relative path to the current path                                                                                                 |
| `aria-current`       | `String`             | `location` | Sets the value of the 'aria-current' attribute (when the item is the active item). Supported string values are 'location', 'page', or 'true'                                                   |
| `disabled`           | `Boolean`            | `false`    | When set to `true`, disables the component's functionality and places it in a disabled state                                                                                                   |
| `exact`              | `Boolean`            | `false`    | `<router-link>` prop: The default active class matching behavior is inclusive match. Setting this prop forces the mode to exactly match the route                                              |
| `exact-active-class` | `String`             |            | `<router-link>` prop: Configure the active CSS class applied when the link is active with exact match. Typically you will want to set this to class name 'active'                              |
| `href`               | `String`             |            | Denotes the target URL of the link for standard a links                                                                                                                                        |
| `rel`                | `String`             | `null`     | `<b-link>` prop: Sets the `rel` attribute on the rendered link                                                                                                                                 |
| `replace`            | `Boolean`            | `false`    | `<router-link>` prop: Setting the replace prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record                         |
| `target`             | `String`             | `\_self`   | Sets the `target` attribute on the rendered link item                                                                                                                                          |
| `text`               | `String`             |            | Text to render in the breadcrumb item                                                                                                                                                          |
| `to`                 | `Object` or `String` |            | Denotes the target route of the link. When clicked, the value of the to prop will be passed to `router.push()` internally, so the value can be either a string or a Location descriptor object |

#### Slots

| Name      | Description                             |
| --------- | --------------------------------------- |
| `default` | Content to place in the breadcrumb item |

#### Events

| Name    | Arguments                           | Description                             |
| ------- | ----------------------------------- | --------------------------------------- |
| `click` | `event` - Native click event object | Content to place in the breadcrumb item |

<script lang="ts" setup>
  import {ref, Ref} from 'vue';
  import {BreadcrumbItem} from '../../src/types';

  const breadcrumbItems: Ref<BreadcrumbItem[]> = ref([
    { text: 'Admin', href:'http://google.com'},
    { text: 'Manage', href:'#'},
    { text: 'Library'},
  ]);

  const breadcrumbStringArray = ['Admin','Manage', 'Library'];

  const alertEvent = (event: PointerEvent) => {
    alert(`Event ${event.target}`);
  }
</script>
