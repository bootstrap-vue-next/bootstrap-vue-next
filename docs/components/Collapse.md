# Collapse

> Easily toggle visibility of almost any content on your pages in a vertically collapsing container.
> Includes support for making accordions. Visibility can be easily toggled with our
> [`v-b-toggle` directive](/docs/directives/toggle), or via `v-model`.

<ClientOnly>
  <b-card>
    <div>
      <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
          <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
          <b-collapse id="collapse-1-inner" class="mt-2">
            <b-card>Hello!</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">Collapse contents Here</p>
      <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-1-inner" class="mt-2">
        <b-card>Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>
</div>
```

## Usage

Other elements can easily toggle `<b-collapse>` components using the
[`v-b-toggle` directive](/docs/directives/toggle).

<ClientOnly>
  <b-card>
    <div>
      <!-- Using modifiers -->
      <b-button v-b-toggle.collapse-2 class="m-1">Toggle Collapse</b-button>
      <!-- Using value -->
      <b-button v-b-toggle="'collapse-2'" class="m-1">Toggle Collapse</b-button>
      <!-- Element to collapse -->
      <b-collapse id="collapse-2">
        <b-card>I am collapsible content!</b-card>
      </b-collapse>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <!-- Using modifiers -->
  <b-button v-b-toggle.collapse-2 class="m-1">Toggle Collapse</b-button>

  <!-- Using value -->
  <b-button v-b-toggle="'collapse-2'" class="m-1">Toggle Collapse</b-button>

  <!-- Element to collapse -->
  <b-collapse id="collapse-2">
    <b-card>I am collapsible content!</b-card>
  </b-collapse>
</div>
```

## Initial visibility (start expanded)

To make the `<b-collapse>` show initially, set the `v-model` prop:

<ClientOnly>
  <b-card>
    <div>
      <b-button v-b-toggle.collapse-3 class="m-1">Toggle Collapse</b-button>
      <b-collapse visible id="collapse-3">
        <b-card>I should start open!</b-card>
      </b-collapse>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <b-button v-b-toggle.collapse-3 class="m-1">Toggle Collapse</b-button>
  <b-collapse visible id="collapse-3">
    <b-card>I should start open!</b-card>
  </b-collapse>
</div>
```

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

<ClientOnly>
  <b-card>
    <div>
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
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <b-card>
    <div>
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
    </div>
  </b-card>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'

  const visible = ref(true)
</script>
```

## Trigger multiple collapse elements

You can even collapse multiple `<b-collapse>` components via a single `v-b-toggle` by providing
multiple target IDs using _modifiers_.

You can also pass multiple target IDs via the directive _value_ in BootstrapVue release v2.14.0+.

<ClientOnly>
  <b-card>
    <div>
      <!-- Via multiple directive modifiers -->
      <b-button v-b-toggle.collapse-a.collapse-b>Toggle Collapse A and B</b-button>
      <!-- Via space separated string of IDs passed to directive value -->
      <b-button v-b-toggle="'collapse-a collapse-b'">Toggle Collapse A and B</b-button>
      <!-- Via array of string IDs passed to directive value -->
      <b-button v-b-toggle="['collapse-a', 'collapse-b']">Toggle Collapse A and B</b-button>
      <!-- Elements to collapse -->
      <b-collapse id="collapse-a" class="mt-2">
         <b-card>I am collapsible content A!</b-card>
      </b-collapse>
      <b-collapse id="collapse-b" class="mt-2">
         <b-card>I am collapsible content B!</b-card>
      </b-collapse>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <!-- Via multiple directive modifiers -->
  <b-button v-b-toggle.collapse-a.collapse-b>Toggle Collapse A and B</b-button>
  <!-- Via space separated string of IDs passed to directive value -->
  <b-button v-b-toggle="'collapse-a collapse-b'">Toggle Collapse A and B</b-button>
  <!-- Via array of string IDs passed to directive value -->
  <b-button v-b-toggle="['collapse-a', 'collapse-b']">Toggle Collapse A and B</b-button>
  <!-- Elements to collapse -->
  <b-collapse id="collapse-a" class="mt-2">
    <b-card>I am collapsible content A!</b-card>
  </b-collapse>
  <b-collapse id="collapse-b" class="mt-2">
    <b-card>I am collapsible content B!</b-card>
  </b-collapse>
</div>
```

## Accordion support

Turn a group of `<b-collapse>` components into an accordion by supplying an accordion group
identifier via the `accordion` prop. Note that only one collapse in an accordion group can be open
at a time.

<ClientOnly>
  <b-card>
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
  </b-card>
</ClientOnly>

```html
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

<script lang="ts" setup>
  import {ref} from 'vue'

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

**Notes:**

- When using accordion mode, make sure you place the trigger elements and `<b-collapse>` components
  inside an element with `role="tablist"` and set `role="tab"` on each trigger element's container
  (each trigger element should be wrapped) in order to help screen reader users navigate the
  accordion group.
- If using the `v-model` feature of `<b-collapse>` in accordion mode, do not bind the `v-model` or
  `visible` prop of all the collapses in the accordion group to the same variable!
- Ensure, at most, only one `<b-collapse>` in the accordion group has the `visible` prop and/or
  `v-model` set to `true`. Only one collapse in an accordion group can be open at a time.

## Hiding and showing content in the toggle button based on collapse state

When using the `v-b-toggle` directive, the class `collapsed` will automatically be placed on the
trigger element when the collapse is closed, and removed when open. You can use this class to
display or hide content within the toggle via custom CSS.

<ClientOnly>
  <b-card>
    <div>
      <b-button v-b-toggle:my-collapse>
        <span class="when-open">Close</span><span class="when-closed">Open</span> My Collapse
      </b-button>
      <b-collapse id="my-collapse">
        <!-- Content here -->
        <div class="mt-2">
            This is data thats being collapsed
        </div>
      </b-collapse>
    </div>
  </b-card>
</ClientOnly>

```html
<b-card>
  <div>
    <b-button v-b-toggle:my-collapse>
      <span class="when-open">Close</span><span class="when-closed">Open</span> My Collapse
    </b-button>
    <b-collapse id="my-collapse">
      <!-- Content here -->
      <div class="mt-2">This is data thats being collapsed</div>
    </b-collapse>
  </div>
</b-card>
```

**Example Custom CSS:**

```css
.collapsed > .when-open {
  display: none;
}
button:not(.collapsed) > .when-closed {
  display: none;
}
```

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
while `aria-controls` will be set to the ID(s) of the target `<b-collapse>` component(s).

If using `v-model` to set the visible state instead of the directive `v-b-toggle`, you will be
required to, on the toggle element, add the `aria-controls` and other appropriate attributes and
classes yourself.

While the `v-b-toggle` directive can be placed on almost any HTML element or Vue component, it is
recommended to use a button or link (or similar component) to act as your toggler. Otherwise your
trigger elements may be inaccessible to keyboard or screen reader users. If you do place them on
something other than a button or link (or similar component), you should add the attributes
`tabindex="0"` and `role="button"` to allow users of assistive technology to reach your trigger
element.

When using accordion mode, make sure you place the trigger elements and `<b-collapse>` components
inside an element with `role="tablist"` and set `role="tab"` on each trigger element's container in
order to help screen reader users navigate the accordion group. Unfortunately, BootstrapVue cannot
apply those roles for you automatically, as it depends on your final document markup.

## Component reference

### `<b-collapse>`

#### Properties

| Property     | Type      | Default | Description                                                                                                                   |
| ------------ | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `accordion`  | `String`  |         | The name of the accordion group that this collapse belongs to                                                                 |
| ~~`appear`~~ | `Boolean` | `false` | When set, and prop 'visible' is true on mount, will animate on initial mount                                                  |
| `id`         | `String`  |         | Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed |
| ~~`isNav`~~  | `Boolean` | `false` | When set, and prop 'visible' is true on mount, will animate on initial mount                                                  |
| `modelValue` | `Boolean` | `false` | When 'true', expands the collapse. Do not use together with visible                                                           |
| `tag`        | `String`  | `div`   | Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed |
| `visble`     | `Boolean` | `false` | When 'true', expands the collapse. Do not use together with v-model                                                           |

#### v-model

| Property     | Event               |
| ------------ | ------------------- |
| `modelValue` | `update:modelValue` |

#### slots

| Property  | Description                         |
| --------- | ----------------------------------- |
| `default` | Content to place in the collapsable |

#### Events

| Name                | Argument                                          | Description                                |
| ------------------- | ------------------------------------------------- | ------------------------------------------ |
| `hidden`            |                                                   | Emitted when collapse has finished closing |
| `hide`              |                                                   | Emitted when collapse has started to close |
| `show`              |                                                   | Emitted when collapse has started to open  |
| `shown`             |                                                   | Emitted when collapse has finished opening |
| `update:modelValue` | `visible` Will be true if the collapse is visible | Emitted when collapse has finished opening |

<script lang="ts" setup>
  import {ref, computed} from 'vue'

  const visible = ref(true);

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

<style>
.collapsed > .when-open {
  display: none;
}
button:not(.collapsed) > .when-closed {
  display: none;
}
</style>
