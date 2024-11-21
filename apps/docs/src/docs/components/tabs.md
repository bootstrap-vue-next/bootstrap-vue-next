# Tabs

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">
Create a widget of tabbable panes of _local content_. The tabs component is built upon navs and
cards internally, and provides full keyboard navigation control of the tabs.
</div>

For navigation based tabs (i.e. tabs that would change the URL), use the
[`<BNav>`](/docs/components/nav) component instead.

## Basic usage

<<< DEMO ./demo/TabsOverview.vue#template{vue-html}

::: info
You should supply each child `<BTab>` component a unique `key` value if dynamically adding
or removing `<BTab>` components (i.e. `v-if` or for loops). The `key` attribute is a special Vue
attribute, see the [Vue doce](https://vuejs.org/api/built-in-special-attributes.html#key) for details.
:::

## Cards integration

Tabs support integrating with Bootstrap cards. Just add the `card` property to `<BTabs>` and place
it inside a `<BCard>` component. Note that you should add the`no-body` prop on the `<BCard>`
component in order to properly decorate the card header and remove the extra padding introduced by
`card-body`.

<<< DEMO ./demo/TabsCards.vue#template{vue-html}

When `<BTabs>` is in `card` mode, each `<BTab>` sub-component will automatically have the
`card-body` class applied (this class provides the padding around the tab content). To disable the
`card-body` class, set the `no-body` prop on the `<BTab>` sub component.

<<< DEMO ./demo/TabsPictures.vue#template{vue-html}

::: tip
Setting the `no-body` prop on `<BTab>` will have no affect when `<BTabs>` is not in
`card` mode (as the `card-body` class is only set when in `card` mode).
:::

Refer to the [Cards documentation](/docs/components/card) for more details on card components.

## Pills variant

Tabs use the `tabs` styling by default. Just add `pills` property to `<BTabs>` for the pill style
variant.

<<< DEMO ./demo/TabsPills.vue#template{vue-html}

## Fill and justify

Force your `<BTabs>` controls to extend the full available width.

### Fill

To proportionately fill all available space with your tab controls, set the `fill` prop. Notice that
all horizontal space is occupied, but not every control has the same width.

<<< DEMO ./demo/TabsFill.vue#template{vue-html}

### Justified

For equal-width controls, use the `justified` prop instead. All horizontal space will be occupied by
the controls, but unlike using `fill` above, every control will be the same width.

<<< DEMO ./demo/TabsJustified.vue#template{vue-html}

## Alignment

To align your tab controls, use the `align` prop. Available values are `start`, `center`, `end`, `between`, `around`, and `evenly`.

<<< DEMO ./demo/TabsAlignment.vue#template{vue-html}

## Bottom placement of tab controls

Visually move the tab controls to the bottom by setting the prop `end`.

<<< DEMO ./demo/TabsBottom.vue#template{vue-html}

::: warning

- Bottom placement visually works best with the `pills` variant. When using the default `tabs`
  variant, you may want to provided your own custom styling classes, as Bootstrap v4 CSS assumes the
  tabs will always be placed on the top of the tabs content.
- To provide a better user experience with bottom placed controls, ensure that the content of each
  tab pane is the same height and fits completely within the visible viewport, otherwise the user
  will need to scroll up to read the start of the tabbed content.

:::

## Vertical tabs

Have the tab controls placed on the lefthand side by setting the `vertical` prop to `true`. Vertical
tabs work with or without `card` mode enabled.

<<< DEMO ./demo/TabsVertical.vue#template{vue-html}

Visually move the tab controls to the right hand side by setting the `end` prop:

<<< DEMO ./demo/TabsVerticalEnd.vue#template{vue-html}

The width of the vertical tab controls will expand to fit the width of the tab title. To control the
width, set a [width utility class](/docs/reference/size-props-and-classes) via the prop
`nav-wrapper-class`. You can use values such as `w-25` (25% width), `w-50` (50% width), etc., or
column classes such as `col-2`, `col-3`, etc.

<<< DEMO ./demo/TabsVerticalWidth.vue#template{vue-html}

Vertical placement visually works best with the `pills` variant. When using the default `tabs`
variant, you may want to provided your own custom styling classes, as Bootstrap v4 CSS assumes the
tab controls will always be placed on the top of the tabs content.

::: info
Overflowing text may occur if your width is narrower than the tab title. You may need
additional custom styling.
:::

## Active classes

To apply classes to the currently active control or tab use the `active-nav-item-class` and
`active-tab-class` props.

<<< DEMO ./demo/TabsActive.vue#template{vue-html}

## Fade animation

Fade is enabled by default when changing tabs. It can disabled with `no-fade` property.

## Add tabs without content

If you want to add extra tabs that do not have any content, you can put them in `tabs-start` or
`tabs-end` slot(s):

<<< DEMO ./demo/TabsEmpty.vue#template{vue-html}

Use the `tabs-start` slot to place extra tab buttons before the content tab buttons, and use the
`tabs-end` slot to place extra tab buttons after the content tab buttons.

::: info
Extra (contentless) tab buttons should be a `<BNavItem>` or have a root element of
`<li>` and class `nav-item` for proper rendering and semantic markup.
:::

## Add custom content to tab title

If you want to add custom content to tab title, like HTML code, icons, or another non-interactive
Vue component, this possible by using `title` slot of `<BTab>`.

<<< DEMO ./demo/TabsCustom.vue#template{vue-html}

::: warning
**Do not** place interactive elements/components inside the title slot. The tab button is a link
which does not support child interactive elements per the HTML5 spec.
:::

## Apply custom classes to the generated nav-tabs or pills

The tab selectors are based on Bootstrap v5's `nav` markup ( i.e.
`ul.nav > li.nav-item > a.nav-link`). In some situations, you may want to add classes to the `<li>`
(nav-item) and/or the `<a>` (nav-link) on a per tab basis. To do so, simply supply the classname to
the `title-item-class` prop (for the `<li>` element) or `title-link-class` prop (for the `<a>`
element). Value's can be passed as a string or array of strings.

::: info
The `active` class is automatically applied to the active tabs `<a>` element. You may
need to accommodate your custom classes for this.
:::

<<< DEMO ./demo/TabsCustomLinks.vue#template{vue-html}

## Lazy loading tab content

Sometimes it's preferred to load components & data only when activating a tab, instead of loading
all tabs (and associated data) when rendering the `<BTabs>` set.

Individual `<BTab>` components can be lazy loaded via the `lazy` prop, which when set doesn't mount
the content of the `<BTab>` until it is activated (shown), and will be un-mounted when the tab is
deactivated (hidden):

::: danger
There is currently a bug in `lazy` that causes an infinite recursion
:::

<<< DEMO ./demo/TabsLazy.vue#template{vue-html}

One can also make all tab's lazy by setting the `lazy` prop on the parent `<BTabs>` component:

<<< DEMO ./demo/TabsLazyAll.vue#template{vue-html}

<ComponentReference :data="data" />

<script lang="ts">
import {data} from '../../data/components/tabs.data'

export default {
  setup() {
    return {data}
  }
}
</script>
