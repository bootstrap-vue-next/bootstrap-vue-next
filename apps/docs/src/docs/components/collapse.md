# Collapse

<div class="lead mb-5">

Easily toggle visibility of almost any content on your pages in a vertically collapsing container.
Includes support for making accordions. Visibility can be easily toggled with our
[`v-b-toggle` directive](/docs/directives/toggle), or via `v-model`.

</div>

<HighlightCard>
  <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
  <b-collapse id="collapse-1">
    <b-card class="mt-4">
      <p class="card-text">Collapse contents Here</p>
      <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-1-inner">
        <b-card class="mt-4">Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>
  <template #html>

```vue-html
<b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>

<b-collapse id="collapse-1">
  <b-card>
    <p class="card-text">Collapse contents Here</p>
    <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
    <b-collapse id="collapse-1-inner" class="mt-2">
      <b-card>Hello!</b-card>
    </b-collapse>
  </b-card>
</b-collapse>
```

  </template>
</HighlightCard>

## Usage

Other elements can easily toggle `<b-collapse>` components using the
[`v-b-toggle` directive](/docs/directives/toggle).

<HighlightCard>
  <!-- Using modifiers -->
  <b-button v-b-toggle.collapse-2 class="m-1">Toggle Collapse</b-button>
  <!-- Using value -->
  <b-button v-b-toggle="'collapse-2'" class="m-1">Toggle Collapse</b-button>
  <!-- Element to collapse -->
  <b-collapse id="collapse-2">
    <b-card class="mt-4">I am collapsible content!</b-card>
  </b-collapse>
  <template #html>

```vue-html
  <!-- Using modifiers -->
  <b-button v-b-toggle.collapse-2 class="m-1">Toggle Collapse</b-button>

  <!-- Using value -->
  <b-button v-b-toggle="'collapse-2'" class="m-1">Toggle Collapse</b-button>

  <!-- Element to collapse -->
  <b-collapse id="collapse-2">
    <b-card>I am collapsible content!</b-card>
  </b-collapse>
```

  </template>
</HighlightCard>

## Initial visibility (start expanded)

To make the `<b-collapse>` show initially, set the `v-model` prop:

<HighlightCard>
  <b-button v-b-toggle.collapse-3 class="m-1">Toggle Collapse</b-button>
  <b-collapse visible id="collapse-3">
    <b-card class="mt-4">I should start open!</b-card>
  </b-collapse>
  <template #html>

```vue-html
<b-button v-b-toggle.collapse-3 class="m-1">Toggle Collapse</b-button>

<b-collapse visible id="collapse-3">
  <b-card>I should start open!</b-card>
</b-collapse>
```

  </template>
</HighlightCard>

~~By default, an initially visible collapse will not animate on mount. To enable the collapse
expanding animation on mount (when `visible` or `v-model` is `true`), set the `appear` prop on
`<b-collapse>`.~~

## `v-model` support

The component's collapsed (visible) state can also be set with `v-model` which binds internally to
the `visible` prop.

Note, when using `v-model` to control `<b-collapse>`, the `aria-*` attributes and class `collapsed`
are not automatically placed on the trigger button (as is the case when using the `v-b-toggle`
directive). In this example we **must control the attributes ourselves** for proper accessibility
support.

<HighlightCard>
  <b-button
    :class="visible ? null : 'collapsed'"
    :aria-expanded="visible ? 'true' : 'false'"
    aria-controls="collapse-4"
    @click="visible = !visible"
  >
    Toggle Collapse
  </b-button>
  <b-collapse id="collapse-4" v-model="visible">
    <b-card class="mt-4">I should start open!</b-card>
  </b-collapse>
  <template #html>

```vue
<template>
  <b-card>
    <b-button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
    >
      Toggle Collapse
    </b-button>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <b-card>I should start open!</b-card>
    </b-collapse>
  </b-card>
</template>

<script setup lang="ts">
const visible = ref(true)
</script>
```

  </template>
</HighlightCard>

## Trigger multiple collapse elements

You can even collapse multiple `<b-collapse>` components via a single `v-b-toggle` by providing
multiple target Ids using _modifiers_.

You can also pass multiple target Ids via the directive _value_ in BootstrapVueNext.

<HighlightCard>
  <div class="d-flex gap-2">
    <!-- Via multiple directive modifiers -->
    <b-button v-b-toggle.collapse-a.collapse-b>Toggle Collapse A and B</b-button>
    <!-- Via space separated string of Ids passed to directive value -->
    <b-button v-b-toggle="'collapse-a collapse-b'">Toggle Collapse A and B</b-button>
    <!-- Via array of string Ids passed to directive value -->
    <b-button v-b-toggle="['collapse-a', 'collapse-b']">Toggle Collapse A and B</b-button>
  </div>
  <!-- Elements to collapse -->
  <b-collapse id="collapse-a">
      <b-card class="mt-4">I am collapsible content A!</b-card>
  </b-collapse>
  <b-collapse id="collapse-b">
      <b-card class="mt-4">I am collapsible content B!</b-card>
  </b-collapse>
  <template #html>

```vue-html
  <!-- Via multiple directive modifiers -->
  <b-button v-b-toggle.collapse-a.collapse-b>Toggle Collapse A and B</b-button>

  <!-- Via space separated string of Ids passed to directive value -->
  <b-button v-b-toggle="'collapse-a collapse-b'">Toggle Collapse A and B</b-button>

  <!-- Via array of string Ids passed to directive value -->
  <b-button v-b-toggle="['collapse-a', 'collapse-b']">Toggle Collapse A and B</b-button>

  <!-- Elements to collapse -->
  <b-collapse id="collapse-a">
    <b-card>I am collapsible content A!</b-card>
  </b-collapse>

  <b-collapse id="collapse-b">
    <b-card>I am collapsible content B!</b-card>
  </b-collapse>
```

  </template>
</HighlightCard>

## Accordion support

Turn a group of `<b-collapse>` components into an accordion by supplying an accordion group
identifier via the `accordion` prop. Note that only one collapse in an accordion group can be open
at a time.

<HighlightCard>
  <div id="my-accordion" class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1 d-grid gap-2" role="tab">
        <b-button v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1  d-grid gap-2" role="tab">
        <b-button v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1 d-grid gap-2" role="tab">
        <b-button v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
  <template #html>

```vue
<template>
  <b-card>
    <div id="my-accordion" class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1 d-grid gap-2" role="tab">
          <b-button v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text
              >I start opened because <code>visible</code> is <code>true</code></b-card-text
            >
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1  d-grid gap-2" role="tab">
          <b-button v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1 d-grid gap-2" role="tab">
          <b-button v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-card>
</template>

<script setup lang="ts">
const text = `
  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
  tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
  vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
  synth nesciunt you probably haven't heard of them accusamus labore VHS.
`
</script>
```

  </template>
</HighlightCard>

**Notes:**

- When using accordion mode, make sure you place the trigger elements and `<b-collapse>` components
  inside an element with `role="tablist"` and set `role="tab"` on each trigger element's container
  (each trigger element should be wrapped) in order to help screen reader users navigate the
  accordion group
- If using the `v-model` feature of `<b-collapse>` in accordion mode, do not bind the `v-model` or
  `visible` prop of all the collapses in the accordion group to the same variable!
- Ensure, at most, only one `<b-collapse>` in the accordion group has the `visible` prop and/or
  `v-model` set to `true`. Only one collapse in an accordion group can be open at a time

## Hiding and showing content in the toggle button based on collapse state

<span class="badge bg-info small">New in v0.8.0</span>

The `header` slot can be used to create custom toggles for your collapsible content. The `footer` slot is also available and can be used in the same manner.

Using the `v-b-toggle` directive to toggle the `<b-collapse>` will still work but the `collapsed` CSS class will no longer be applied to the element with the directive.

The following properties are available for the `header` and `footer` slots:

| Property  | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| `visible` | Boolean  | Visible state of the collapse         |
| `toggle`  | Function | When called, will toggle the collapse |
| `open`    | Function | When called, will open the collapse   |
| `close`   | Function | When called, will close the collapse  |
| `id`      | String   | The ID of the collapsible element     |

<HighlightCard>
  <b-collapse id="my-collapse">
    <template #header="{visible, toggle, id}">
      <b-button variant="primary" :aria-expanded="visible" :aria-controls="id" @click="toggle">
          <span v-if="visible">Close</span><span v-else>Open</span> My Collapse
      </b-button>
    </template>
    <!-- Content here -->
    <div class="mt-2">This is data that's being collapsed</div>
  </b-collapse>
  <template #html>

```vue-html
<b-collapse id="my-collapse">
  <template #header="{visible, toggle, id}">
    <b-button variant="primary" :aria-expanded="visible" :aria-controls="id" @click="toggle">
      <span v-if="visible">Close</span><span v-else>Open</span> My Collapse
    </b-button>
  </template>
  <!-- Content here -->
  <div class="mt-2">This is data that's being collapsed</div>
</b-collapse>
```

  </template>
</HighlightCard>

## Optionally scoped default slot

<span class="badge badge-info small">New in v2.2.0</span>

The default slot can be optionally scoped. The following scope properties are available:

| Property  | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| `visible` | Boolean  | Visible state of the collapse        |
| `close`   | Function | When called, will close the collapse |

## Accessibility

The `v-b-toggle` directive will automatically add the ARIA attributes `aria-controls` and
`aria-expanded` to the component that the directive appears on (as well as add the class `collapsed`
when not expanded). `aria-expanded` will reflect the state of the target `<b-collapse>` component,
while `aria-controls` will be set to the Id(s) of the target `<b-collapse>` component(s).

If using `v-model` to set the visible state instead of the directive `v-b-toggle`, you will be
required to, on the toggle element, add the `aria-controls` and other appropriate attributes and
classes yourself.

While the `v-b-toggle` directive can be placed on almost any HTML element or Vue component, it is
recommended to use a button or link (or similar component) to act as your toggler; otherwise your
trigger elements may be inaccessible to keyboard or screen reader users. If you do place them on
something other than a button or link (or similar component), you should add the attributes
`tabindex="0"` and `role="button"` to allow users of assistive technology to reach your trigger
element.

When using accordion mode, make sure you place the trigger elements and `<b-collapse>` components
inside an element with `role="tablist"` and set `role="tab"` on each trigger element's container in
order to help screen reader users navigate the accordion group. Unfortunately, BootstrapVueNext cannot
apply those roles for you automatically, as it depends on your final document markup.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/collapse.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {
  BCard,
  BCardText,
  BCardBody,
  BCardHeader,
  BCollapseBButton,
  BButton,
  BCollapse,
  vBToggle,
} from 'bootstrap-vue-next'
import {ref, computed} from 'vue'

const visible = ref(true);

const text = "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore VHS."
</script>

<style>
.collapsed > .when-open {
  display: none;
}
button:not(.collapsed) > .when-closed {
  display: none;
}
</style>
