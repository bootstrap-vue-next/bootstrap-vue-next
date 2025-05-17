# Popover

<PageHeader>

The Popover feature, which provides a tooltip-like behavior, can be easily applied to any
interactive element via the `<BPopover>` component or [`v-b-popover`](/docs/directives/b-popover)
directive. Popovers can also be created and programmatically controlled via the `usePopoverController`

</PageHeader>

<<< DEMO ./demo/PopoverOverview.vue#template{vue-html}

## Overview

Things to know when using the popover component:

- Popovers rely on the 3rd party library [floating-ui](https://floating-ui.com/docs) for positioning.
- Popovers require BootstrapVueNext's custom SCSS/CSS to function correctly.
- Specify `container` as `null` (default, appends to `<body>`) to avoid rendering problems in more
  complex components (like input groups, button groups, etc.). You can use `container` to optionally
  specify a different element to append the rendered popover to.
- Triggering popovers on hidden elements will not work.
- Popovers for `disabled` elements must be triggered on a wrapper element.
- When triggered from hyperlinks that span multiple lines, popovers will be centered. Use
  `white-space: nowrap;` on your `<a>`s, `<BLink>`s and `<router-link>`s to avoid this behavior.

## Target

The target is the _trigger_ element (or component) that will trigger the popover. The target is
specified via the `target` prop, and can be any of the following:

- A string identifying the ID of the trigger element (or ID of the root element of a component)
- A reference (ref) to an `HTMLElement` or an `SVGElement` via a [Template Ref](https://vuejs.org/guide/essentials/template-refs.html)
- A reference (ref) to a component that has either an `HTMLElement` or `SVGElement` as its root
  element via [Template Ref](https://vuejs.org/guide/essentials/template-refs.html)
- <NotYetImplemented/> A function (callback) that returns a reference to an `HTMLElement` or `SVGElement`

:::info NOTE

The target element **must** exist in the document before `<BPopover>` is mounted. If the target
element is not found during mount, the popover will never open. Always place your `<BPopover>`
component lower in the DOM than your target element. This rule also applies if a callback function
is used as the target element, since that callback is called only once on mount.

`HTMLElement` refers to standard HTML elements such as `<div>`, `<button>`, etc., while `SVGElement`
refers to `<svg>` or supported child elements of SVGs.

:::

## Positioning

Twelve static options are available for the `placement` prop: `top`, `top-left`, `top-right`,
`bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end` from
[@floating-ui/vue](https://floating-ui.com/) as well as three [auto placement](https://floating-ui.com/docs/autoplacement)
options `auto`, `auto-start` and `auto-end`.

Positioning is relative to the trigger element.

<<< DEMO ./demo/PopoverPositioning.vue#template{vue-html}

## Triggers

By default, popovers are shown by `pointerenter` and `focus` events and closed by `pointerleave` and `blur` events
on the `target` element by default. To override this behavior and make the popover show and hide based
on `click` events, set the `click` prop to `true`.

<<< DEMO ./demo/PopoverTriggers.vue#template{vue-html}

To take finer control of popover visibility, set the `manual` prop and use the
[`v-model`](#programmatic-control-via-v-model) or
[exposed functions](#exposed-functions) to control visibility.

## Content

The title and body content of a popover can be set via the `title` and `body` props or the `title`
and `default` slots.

<<< DEMO ./demo/PopoverContent.vue#template{vue-html}

## Custom Classes and Variants

Custom classes can be applied to the popover's title `<div>` by using the `title-class` prop and to
the popover's body `<div>` by using the `body-class` prop:

<<< FRAGMENT ./demo/PopoverCustomClass.vue#template{vue-html}

Similarly, use [Bootstrap's Color and background](https://getbootstrap.com/docs/5.3/helpers/color-background/)
utitlities to change the variant of the popover.

<<< DEMO ./demo/PopoverVariant.vue#template{vue-html}

`body-class` and `title-class` is reactive and can be changed while the popover is open.

Refer to the [popover directive](/docs/directives/popover) docs on applying custom
classes to the directive version.

For finer control, use the bootstrap 5 css variables to apply styles directly.

<<< DEMO ./demo/PopoverStyles.vue#template{vue-html}

## Programmatic control via v-model

You can manually control the visibility of a popover via the v-model. Setting it to true will show the popover,
while setting it to false will hide the popover.

<<< DEMO ./demo/PopoverModel.vue

To make the popover shown on initial render, simply set `model-value` on `<BPopover>` to true:

<<< DEMO ./demo/PopoverStartOpen.vue#template{vue-html}

Popovers can also be controlled via [Exposed functions](#exposed-functions).

## Close on Hide

The `close-on-hide` prop can be used to have the popover automatically close
when the target is scrolled out of view. The `boundary` and `boundary-padding`
props can be used to control what's considered clipping.

<<< DEMO ./demo/PopoverCloseOnHide.vue

## Exposed functions

`BPopover` exposes several functions to allow manipulation of the state of the component.
These are accessed through the [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs)

<<< DEMO ./demo/PopoverExposed.vue

<ComponentReference :data="data" />

<script lang="ts">
import {data} from '../../data/components/popover.data'

export default {
  setup() {
    return {data}
  }
}
</script>
