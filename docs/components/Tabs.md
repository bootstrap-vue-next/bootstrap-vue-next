# Tabs

> Create a widget of tabbable panes of _local content_. The tabs component is built upon navs and
> cards internally, and provides full keyboard navigation control of the tabs.

For navigation based tabs (i.e. tabs that would change the URL), use the
[`<b-nav>`](/docs/components/nav) component instead.

## Basic usage

<ClientOnly>
  <b-card>
    <b-tabs content-class="mt-3">
      <b-tab title="First" active><p>I'm the first tab</p></b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<div>
  <b-tabs content-class="mt-3">
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>
```

**Tip:** You should supply each child `<b-tab>` component a unique `key` value if dynamically adding
or removing `<b-tab>` components (i.e. `v-if` or for loops). The `key` attribute is a special Vue
attribute, see [vue key](https://v3.vuejs.org/api/special-attributes.html#key).

## Cards integration

Tabs support integrating with Bootstrap cards. Just add the `card` property to `<b-tabs>` and place
it inside a `<b-card>` component. Note that you should add the`no-body` prop on the `<b-card>`
component in order to properly decorate the card header and remove the extra padding introduced by
`card-body`.

<ClientOnly>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Tab 1" active>
        <b-card-text>Tab contents 1</b-card-text>
      </b-tab>
      <b-tab title="Tab 2">
        <b-card-text>Tab contents 2</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<b-card no-body>
  <b-tabs card>
    <b-tab title="Tab 1" active>
      <b-card-text>Tab contents 1</b-card-text>
    </b-tab>
    <b-tab title="Tab 2">
      <b-card-text>Tab contents 2</b-card-text>
    </b-tab>
  </b-tabs>
</b-card>
```

When `<b-tabs>` is in `card` mode, each `<b-tab>` sub-component will automatically have the
`card-body` class applied (this class provides the padding around the tab content). To disable the
`card-body` class, set the `no-body` prop on the `<b-tab>` sub component.

<ClientOnly>
  <b-card no-body>
    <b-tabs card>
      <b-tab no-body title="Picture 1">
        <b-card-img
          bottom
          src="https://picsum.photos/600/200/?image=21"
          alt="Image 21"
        ></b-card-img>
        <b-card-footer>Picture 1 footer</b-card-footer>
      </b-tab>
      <b-tab no-body title="Picture 2">
        <b-card-img
          bottom
          src="https://picsum.photos/600/200/?image=25"
          alt="Image 25"
        ></b-card-img>
        <b-card-footer>Picture 2 footer</b-card-footer>
      </b-tab>
      <b-tab no-body title="Picture 3">
        <b-card-img
          bottom
          src="https://picsum.photos/600/200/?image=26"
          alt="Image 26"
        ></b-card-img>
        <b-card-footer>Picture 3 footer</b-card-footer>
      </b-tab>
      <b-tab title="Text">
        <b-card-title>This tab does not have the <code>no-body</code> prop set</b-card-title>
        <b-card-text>
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
          consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex
          consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt
          veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse
          irure.
        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<b-card no-body>
  <b-tabs card>
    <b-tab no-body title="Picture 1">
      <b-card-img bottom src="https://picsum.photos/600/200/?image=21" alt="Image 21"></b-card-img>
      <b-card-footer>Picture 1 footer</b-card-footer>
    </b-tab>
    <b-tab no-body title="Picture 2">
      <b-card-img bottom src="https://picsum.photos/600/200/?image=25" alt="Image 25"></b-card-img>
      <b-card-footer>Picture 2 footer</b-card-footer>
    </b-tab>
    <b-tab no-body title="Picture 3">
      <b-card-img bottom src="https://picsum.photos/600/200/?image=26" alt="Image 26"></b-card-img>
      <b-card-footer>Picture 3 footer</b-card-footer>
    </b-tab>
    <b-tab title="Text">
      <b-card-title>This tab does not have the <code>no-body</code> prop set</b-card-title>
      <b-card-text>
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
        consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
        mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit
        elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure.
      </b-card-text>
    </b-tab>
  </b-tabs>
</b-card>
```

**Note:** Setting the `no-body` prop on `<b-tab>` will have no affect when `<b-tabs>` is not in
`card` mode (as the `card-body` class is only set when in `card` mode).

Refer to the [Cards documentation](/docs/components/card) for more details on card components.

## Pills variant

Tabs use the `tabs` styling by default. Just add `pills` property to `<b-tabs>` for the pill style
variant.

<ClientOnly>
  <b-card no-body>
    <b-tabs pills card>
      <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<b-card no-body>
  <b-tabs pills card>
    <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
    <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
  </b-tabs>
</b-card>
```

## Fill and justify

Force your `<b-tabs>` controls to extend the full available width.

### Fill

To proportionately fill all available space with your tab controls, set the `fill` prop. Notice that
all horizontal space is occupied, but not every control has the same width.

<ClientOnly>
  <b-card>
    <b-tabs content-class="mt-3" fill>
      <b-tab title="First" active><p>I'm the first tab</p></b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Very, very long title"><p>I'm the tab with the very, very long title</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-tabs content-class="mt-3" fill>
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Very, very long title"><p>I'm the tab with the very, very long title</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</b-card>
```

### Justified

For equal-width controls, use the `justified` prop instead. All horizontal space will be occupied by
the controls, but unlike using `fill` above, every control will be the same width.

<ClientOnly>
  <b-card>
    <b-tabs content-class="mt-3" justified>
      <b-tab title="First" active><p>I'm the first tab</p></b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Very, very long title"><p>I'm the tab with the very, very long title</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-tabs content-class="mt-3" justified>
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Very, very long title"><p>I'm the tab with the very, very long title</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</b-card>
```

## Alignment

To align your tab controls, use the `align` prop. Available values are `start`, `center` and `end`.

<ClientOnly>
  <b-card>
    <b-tabs content-class="mt-3" align="center">
      <b-tab title="First" active><p>I'm the first tab</p></b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-tabs content-class="mt-3" align="center">
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</b-card>
```

## Bottom placement of tab controls

Visually move the tab controls to the bottom by setting the prop `end`.

<ClientOnly>
  <b-card no-body>
    <b-tabs pills card end>
      <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<div>
  <b-card no-body>
    <b-tabs pills card end>
      <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
```

**Caveats:**

- Bottom placement visually works best with the `pills` variant. When using the default `tabs`
  variant, you may want to provided your own custom styling classes, as Bootstrap v4 CSS assumes the
  tabs will always be placed on the top of the tabs content.
- To provide a better user experience with bottom placed controls, ensure that the content of each
  tab pane is the same height and fits completely within the visible viewport, otherwise the user
  will need to scroll up to read the start of the tabbed content.

## Vertical tabs

Have the tab controls placed on the lefthand side by setting the `vertical` prop to `true`. Vertical
tabs work with or without `card` mode enabled.

<ClientOnly>
  <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<div>
  <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
```

Visually move the tab controls to the right hand side by setting the `end` prop:

<ClientOnly>
  <b-card no-body>
    <b-tabs pills card vertical end>
      <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<div>
  <b-card no-body>
    <b-tabs pills card vertical end>
      <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
```

The width of the vertical tab controls will expand to fit the width of the tab title. To control the
width, set a [width utility class](/docs/reference/size-props#sizing-utility-classes) via the prop
`nav-wrapper-class`. You can use values such as `w-25` (25% width), `w-50` (50% width), etc., or
column classes such as `col-2`, `col-3`, etc.

<ClientOnly>
  <b-card no-body>
    <b-tabs pills card vertical nav-wrapper-class="w-50">
      <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<div>
  <b-card no-body>
    <b-tabs pills card vertical nav-wrapper-class="w-50">
      <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
```

Vertical placement visually works best with the `pills` variant. When using the default `tabs`
variant, you may want to provided your own custom styling classes, as Bootstrap v4 CSS assumes the
tab controls will always be placed on the top of the tabs content.

**Note:** _overflowing text may occur if your width is narrower than the tab title. You may need
additional custom styling._

## Active classes

To apply classes to the currently active control or tab use the `active-nav-item-class` and
`active-tab-class` props.

<ClientOnly>
  <b-card no-body>
    <b-tabs
      active-nav-item-class="font-weight-bold text-uppercase text-danger"
      active-tab-class="font-weight-bold text-success"
      content-class="mt-3"
    >
      <b-tab title="First" active><p>I'm the first tab</p></b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<div>
  <b-tabs
    active-nav-item-class="font-weight-bold text-uppercase text-danger"
    active-tab-class="font-weight-bold text-success"
    content-class="mt-3"
  >
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>
```

## Fade animation

Fade is enabled by default when changing tabs. It can disabled with `no-fade` property.

## Add tabs without content

If you want to add extra tabs that do not have any content, you can put them in `tabs-start` or
`tabs-end` slot(s):

<ClientOnly>
  <b-card>
    <b-tabs>
      <!-- Add your b-tab components here -->
      <template #tabs-end>
        <b-nav-item href="#" role="presentation" @click="() => {}">Another tab</b-nav-item>
        <li role="presentation" class="nav-item align-self-center">Plain text</li>
      </template>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<div>
  <b-tabs>
    <!-- Add your b-tab components here -->
    <template #tabs-end>
      <b-nav-item href="#" role="presentation" @click="() => {}">Another tab</b-nav-item>
      <li role="presentation" class="nav-item align-self-center">Plain text</li>
    </template>
  </b-tabs>
</div>
```

Use the `tabs-start` slot to place extra tab buttons before the content tab buttons, and use the
`tabs-end` slot to place extra tab buttons after the content tab buttons.

**Note:** extra (contentless) tab buttons should be a `<b-nav-item>` or have a root element of
`<li>` and class `nav-item` for proper rendering and semantic markup.

## Add custom content to tab title

If you want to add custom content to tab title, like HTML code, icons, or another non-interactive
Vue component, this possible by using `title` slot of `<b-tab>`.

<ClientOnly>
  <b-card>
    <b-tabs>
      <b-tab active>
        <template #title>
          <b-spinner type="grow" small></b-spinner> I'm <i>custom</i> <strong>title</strong>
        </template>
        <p class="p-3">Tab contents 1</p>
      </b-tab>
      <b-tab>
        <template #title>
          <b-spinner type="border" small></b-spinner> Tab 2
        </template>
        <p class="p-3">Tab contents 2</p>
      </b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<div>
  <b-tabs>
    <b-tab active>
      <template #title>
        <b-spinner type="grow" small></b-spinner> I'm <i>custom</i> <strong>title</strong>
      </template>
      <p class="p-3">Tab contents 1</p>
    </b-tab>

    <b-tab>
      <template #title> <b-spinner type="border" small></b-spinner> Tab 2 </template>
      <p class="p-3">Tab contents 2</p>
    </b-tab>
  </b-tabs>
</div>
```

**Do not** place interactive elements/components inside the title slot. The tab button is a link
which does not support child interactive elements per the HTML5 spec.

## Apply custom classes to the generated nav-tabs or pills

The tab selectors are based on Bootstrap v5's `nav` markup ( i.e.
`ul.nav > li.nav-item > a.nav-link`). In some situations, you may want to add classes to the `<li>`
(nav-item) and/or the `<a>` (nav-link) on a per tab basis. To do so, simply supply the classname to
the `title-item-class` prop (for the `<li>` element) or `title-link-class` prop (for the `<a>`
element). Value's can be passed as a string or array of strings.

**Note:** _The `active` class is automatically applied to the active tabs `<a>` element. You may
need to accommodate your custom classes for this._

<ClientOnly>
  <b-card>
    <b-tabs v-model="tabIndex" card>
      <b-tab title="Tab 1" :title-link-class="linkClass(0)">Tab contents 1</b-tab>
      <b-tab title="Tab 2" :title-link-class="linkClass(1)">Tab contents 2</b-tab>
      <b-tab title="Tab 3" :title-link-class="linkClass(2)">Tab contents 3</b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<template>
  <div>
    <b-card no-body>
      <b-tabs v-model="tabIndex" card>
        <b-tab title="Tab 1" :title-link-class="linkClass(0)">Tab contents 1</b-tab>
        <b-tab title="Tab 2" :title-link-class="linkClass(1)">Tab contents 2</b-tab>
        <b-tab title="Tab 3" :title-link-class="linkClass(2)">Tab contents 3</b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script lang="ts" setup>
  const linkClass = (idx: number) => {
    if (tabIndex.value === idx) {
      return ['bg-primary', 'text-light']
    } else {
      return ['bg-light', 'text-info']
    }
  }
</script>
```

## Lazy loading tab content

Sometimes it's preferred to load components & data only when activating a tab, instead of loading
all tabs (and associated data) when rendering the `<b-tabs>` set.

Individual `<b-tab>` components can be lazy loaded via the `lazy` prop, which when set doesn't mount
the content of the `<b-tab>` until it is activated (shown), and will be un-mounted when the tab is
deactivated (hidden):

<ClientOnly>
  <b-card>
    <b-tabs content-class="mt-3">
      <b-tab title="Regular tab"><b-alert show>I'm always mounted</b-alert></b-tab>
      <b-tab title="Lazy tab" lazy><b-alert show>I'm lazy mounted!</b-alert></b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<b-tabs content-class="mt-3">
  <!-- This tabs content will always be mounted -->
  <b-tab title="Regular tab"><b-alert show>I'm always mounted</b-alert></b-tab>

  <!-- This tabs content will not be mounted until the tab is shown -->
  <!-- and will be un-mounted when hidden -->
  <b-tab title="Lazy tab" lazy><b-alert show>I'm lazy mounted!</b-alert></b-tab>
</b-tabs>
```

One can also make all tab's lazy by setting the `lazy` prop on the parent `<b-tabs>` component:

<ClientOnly>
  <b-card>
    <b-tabs content-class="mt-3" lazy>
      <b-tab title="Tab 1"><b-alert show>I'm lazy mounted!</b-alert></b-tab>
      <b-tab title="Tab 2"><b-alert show>I'm lazy mounted too!</b-alert></b-tab>
    </b-tabs>
  </b-card>
</ClientOnly>

```html
<b-tabs content-class="mt-3" lazy>
  <b-tab title="Tab 1"><b-alert show>I'm lazy mounted!</b-alert></b-tab>
  <b-tab title="Tab 2"><b-alert show>I'm lazy mounted too!</b-alert></b-tab>
</b-tabs>
```

## ~~Keyboard navigation~~

## Preventing a `<b-tab>` from being activated

To prevent a tab from activating, simply set the `disabled` prop on the `<b-tab>` component.

Alternatively, you can listen for the `activate-tab` event, which provides an option to prevent the
tab from activating. The `activate-tab` event is emitted with three arguments:

- `newTabIndex`: The index of the tab that is going to be activated
- `prevTabIndex`: The index of the currently active tab
- `bvEvent`: The `BvEvent` object. Call `bvEvent.preventDefault()` to prevent `newTabIndex` from
  being activated

For accessibility reasons, when using the `activate-tab` event to prevent a tab from activating, you
should provide some means of notification to the user as to why the tab is not able to be activated.
It is recommended to use the `disabled` attribute on the `<b-tab>` component instead of using the
`activate-tab` event (as `disabled` is more intuitive for screen reader users).

## Advanced examples

### External controls using `v-model`

<ClientOnly>
  <b-card>
    <b-card no-body>
      <b-tabs v-model="tabIndexAdv1" small card>
        <b-tab title="General">I'm the first fading tab</b-tab>
        <b-tab title="Edit profile">
          I'm the second tab
          <b-card>I'm the card in tab</b-card>
        </b-tab>
        <b-tab title="Premium Plan" disabled>Sibzamini!</b-tab>
        <b-tab title="Info">I'm the last tab</b-tab>
      </b-tabs>
    </b-card>
    <div class="text-center mt-2">
      <b-button-group class="mt-2">
        <b-button @click="tabIndexAdv1--">Previous</b-button>
        <b-button @click="tabIndexAdv1++">Next</b-button>
      </b-button-group>
      <div class="text-muted">Current Tab: {{ tabIndexAdv1 }}</div>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <b-card>
    <b-card no-body>
      <b-tabs v-model="tabIndexAdv1" small card>
        <b-tab title="General">I'm the first fading tab</b-tab>
        <b-tab title="Edit profile">
          I'm the second tab
          <b-card>I'm the card in tab</b-card>
        </b-tab>
        <b-tab title="Premium Plan" disabled>Sibzamini!</b-tab>
        <b-tab title="Info">I'm the last tab</b-tab>
      </b-tabs>
    </b-card>
    <div class="text-center mt-2">
      <b-button-group class="mt-2">
        <b-button @click="tabIndexAdv1--">Previous</b-button>
        <b-button @click="tabIndexAdv1++">Next</b-button>
      </b-button-group>
      <div class="text-muted">Current Tab: {{ tabIndexAdv1 }}</div>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'

  const tabIndexAdv1 = ref(1)
</script>
```

### Dynamic tabs + tabs-end slot

<ClientOnly>
  <b-card>
      <b-tabs card>
        <!-- Render Tabs, supply a unique `key` to each tab -->
        <b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'Tab ' + i">
          Tab contents {{ i }}
          <b-button size="sm" variant="danger" class="float-end" @click="closeTab(i)">
            Close tab
          </b-button>
        </b-tab>
        <!-- New Tab Button (Using tabs-end slot) -->
        <template #tabs-end>
          <b-nav-item role="presentation" @click.prevent="newTab" href="#"><b>+</b></b-nav-item>
        </template>
        <!-- Render this if no tabs -->
        <template #empty>
          <div class="text-center text-muted">
            There are no open tabs<br>
            Open a new tab using the <b>+</b> button above.
          </div>
        </template>
      </b-tabs>
  </b-card>
</ClientOnly>

```html
<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <!-- Render Tabs, supply a unique `key` to each tab -->
        <b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'Tab ' + i">
          Tab contents {{ i }}
          <b-button size="sm" variant="danger" class="float-end" @click="closeTab(i)">
            Close tab
          </b-button>
        </b-tab>

        <!-- New Tab Button (Using tabs-end slot) -->
        <template #tabs-end>
          <b-nav-item role="presentation" @click.prevent="newTab" href="#"><b>+</b></b-nav-item>
        </template>

        <!-- Render this if no tabs -->
        <template #empty>
          <div class="text-center text-muted">
            There are no open tabs<br />
            Open a new tab using the <b>+</b> button above.
          </div>
        </template>
      </b-tabs>
    </b-card>
  </div>
</template>

<script lang="ts" setup>
  import {ref, computed} from 'vue'

  const tabs = ref([])
  const tabCounter = ref(0)

  const closeTab = (x: number) => {
    for (let i = 0; i < tabs.value.length; i++) {
      if (tabs.value[i] === x) {
        tabs.value.splice(i, 1)
      }
    }
  }

  const newTab = () => tabs.value.push(tabCounter.value++)
</script>
```

## Component reference

### `<b-tabs>`

#### Properties

| Property                | Type                            | Default | Description                                                                                                                            |
| ----------------------- | ------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `active-nav-item-class` | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the active nav item tab control                                                                     |
| `active-tab-class`      | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the active nav item tab control                                                                     |
| `align`                 | `String`                        |         | Align the nav items in the nav: 'start', 'center', 'end'                                                                               |
| `card`                  | `Boolean`                       | `false` | When set to true, renders the tabs the the appropriate styles to be placed into a 'b-card'                                             |
| `content-class`         | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the tab-content wrapper                                                                             |
| `end`                   | `Boolean`                       | `false` | Place the tab controls at the bottom (horizontal tabs), or right (vertical tabs)                                                       |
| `fill`                  | `Boolean`                       | `false` | Proportionately fills all horizontal space with nav items. All horizontal space is occupied, but not every nav item has the same width |
| `id`                    | `String`                        |         | Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed          |
| `justified`             | `Boolean`                       | `false` | Fills all horizontal space with nav items, but unlike 'fill', every nav item will be the same width                                    |
| `lazy`                  | `Boolean`                       | `false` | Lazily render the b-tab contents when shown                                                                                            |
| `lazy`                  | `Boolean`                       | `false` | Lazily render the b-tab contents when shown                                                                                            |
| `nav-class`             | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the tablist (nav) wrapper                                                                           |
| `nav-wrapper-class`     | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the tablist (nav) wrapper                                                                           |
| `no-fade`               | `Boolean`                       | `false` | When set to `true`, disables the fade animation/transition on the component                                                            |
| ~~`no-key-nav`~~        | `Boolean`                       | `false` | Disable keyboard navigation of the tab controls                                                                                        |
| `no-nav-style`          | `Boolean`                       | `false` | Disable keyboard navigation of the tab controls                                                                                        |
| `pills`                 | `Boolean`                       | `false` | Renders the nav items with the appearance of pill buttons                                                                              |
| `small`                 | `Boolean`                       | `false` | Makes the nav smaller                                                                                                                  |
| `tag`                   | `String`                        | `div`   | Specify the HTML tag to render instead of the default tag                                                                              |
| `vertical`              | `Boolean`                       | `false` | Renders the tab controls vertically                                                                                                    |

#### v-model

| Property           | Type     | Default | Description                              |
| ------------------ | -------- | ------- | ---------------------------------------- |
| default modelValue | `Number` |         | Currently visible tab index (zero-based) |

#### Slots

| Name         | Description                                                                  |
| ------------ | ---------------------------------------------------------------------------- |
| `default`    | Content (tabs) to place in the tabs element                                  |
| `empty`      | Renders this slot if no tabs are present                                     |
| `tabs-end`   | Additional tab buttons without tab content placed after content tab buttons  |
| `tabs-start` | Additional tab buttons without tab content placed before content tab buttons |

#### Events

| Name                | Argument                                                                                                                                                                                                                           | Description                                              |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `activate-tab`      | `newTabIndex` - Tab being activated (0-based index)<br/>`prevTabIndex` - Tab that is currently active (0-based index). Will be -1 if no current active tab<br/>`bvEvent` - BvEvent object. Call bvEvent.preventDefault() to cancel | Emitted just before a tab is shown/activated. Cancelable |
| `update:modelValue` | `tabIndex` - Current active tab index (0-based index)                                                                                                                                                                              | Emitted when the modelValue value is changed             |

### `<b-tabs>`

#### Properties

| Property                | Type                            | Default | Description                                                                                                                   |
| ----------------------- | ------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `active`                | `Boolean`                       | `false` | When set to `true`, places the component in the active state with active styling                                              |
| `button-id`             | `String`                        |         | Use a specific ID for this tab's tab control button. If not provided, one will automatically be generated                     |
| `disabled`              | `Boolean`                       | `false` | When set to `true`, disables the component's functionality and places it in a disabled state                                  |
| `id`                    | `String`                        |         | Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed |
| `lazy`                  | `Boolean`                       | `false` | Lazily render this tab's content when shown                                                                                   |
| `no-body`               | `Boolean`                       | `false` | When the parent b-tabs has the 'card' prop set, do not render a card-body wrapper                                             |
| `tag`                   | `String`                        | `div`   | Specify the HTML tag to render instead of the default tag                                                                     |
| `title`                 | `String`                        |         | Text content to place in the title                                                                                            |
| `title-item-class`      | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the tab's control button 'li' element                                                      |
| `title-link-attributes` | `Object`                        |         | Attributes to apply to the tab's control button inner link element                                                            |
| `title-link-class`      | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the tab's control button inner link element                                                |

#### Slots

| Name      | Description                         |
| --------- | ----------------------------------- |
| `default` | Content to place in the tab element |

<!-- ------------------------------------------------------------------ -->
<script lang="ts" setup>
  import {ref, computed} from 'vue'

  const tabIndex = ref(0)
  const tabIndexAdv1 = ref(1)

  const linkClass = (idx: number) => {
    if(tabIndex.value === idx) {
      return ['bg-primary', 'text-light']
    } else {
      return ['bg-light', 'text-info']
    }
  }

  const tabs = ref([])
  const tabCounter = ref(0)

  const closeTab = (x: number) => {
    for (let i = 0; i < tabs.value.length; i++) {
      if (tabs.value[i] === x) {
        tabs.value.splice(i, 1)
      }
    }
  }

  const newTab = () => tabs.value.push(tabCounter.value++)

</script>
