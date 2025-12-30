---
description: >
  Easily add tooltips to an interactive element or component via the `<BTooltip>` component
  or [`v-b-tooltip`](/docs/directives/BTooltip) directive. Tooltips can also be created and programmatically controlled via the composable
  [`usePopover`](/docs/composables/usePopover)
---

<<< DEMO ./demo/TooltipOverview.vue#template{vue-html}

## Overview

Things to know when using the tooltip component:

- Tooltip is a wrapper for Popover, providing a simple way to create tooltips in your application. It uses the same API as Popover, but with some default properties set for tooltips.
  - The delay is zero
  - sideMargin is 0
  - Tooltips are non-interactive by default.
- Tooltips rely on the 3rd party library [floating-ui](https://floating-ui.com/) for positioning.
- Use `teleportTo` and `teleportDisabled` to control where in the DOM the tooltip is rendered. See the [Vue.js Docs](https://vuejs.org/guide/built-ins/teleport.html) for details. `teleportTo` defaults to `undefined`.
- Triggering tooltips on hidden elements will not work.
- Tooltips for `disabled` elements must be triggered on a wrapper element.
- When triggered from hyperlinks that span multiple lines, tooltips will be centered. Set the `inline` prop to improve the positioning. See the [Floating UI docs](https://floating-ui.com/docs/inline) for details.

## Target

The target is the _trigger_ element (or component) that will trigger the tooltip. The target is
specified via the `target` slot or prop, and can be any of the following:

The `target` prop may be any of the following:

- A string identifying the ID of the trigger element (or ID of the root element of a component)
- A string with querySelector. (i.e. '#toolbar > div:first-child')
- A reference (ref) to an `HTMLElement` or an `SVGElement` via a [Template Ref](https://vuejs.org/guide/essentials/template-refs.html)
- A reference (ref) to a component that has either an `HTMLElement` or `SVGElement` as its root
  element via [Template Ref](https://vuejs.org/guide/essentials/template-refs.html)

:::info NOTE

`HTMLElement` refers to standard HTML elements such as `<div>`, `<button>`, etc., while `SVGElement`
refers to `<svg>` or supported child elements of SVGs.

:::

### Making tooltips work for keyboard and assistive technology users

You should only add tooltips to HTML elements that are traditionally keyboard-focusable and
interactive (such as links, buttons, or form controls). Although arbitrary HTML elements (such as
`<span>`s) can be made focusable by adding the `tabindex="0"` attribute, this will add potentially
annoying and confusing tab stops on non-interactive elements for keyboard users. In addition, most
assistive technologies currently do not announce the tooltip in this situation.

Additionally, do not rely solely on `hover` as the trigger for your tooltip, as this will make your
tooltips _impossible to trigger for keyboard-only users_.

### Disabled elements

Elements with the `disabled` attribute aren’t interactive, meaning users cannot focus, hover, or
click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip
from a wrapper `<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`, and
override the `pointer-events` on the disabled element.

## Positioning

Twelve static options are available for the `placement` prop: `top`, `top-start`, `top-end`,
`bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, and `right-end` from
[@floating-ui/vue](https://floating-ui.com/) plus three [auto placement](https://floating-ui.com/docs/autoplacement)
options `auto`, `auto-start` and `auto-end`.

Positioning is relative to the trigger element.

<<< DEMO ./demo/TooltipPositioning.vue#template{vue-html}

## Interactive

`BTooltip` has an interactive prop, which allows you to set the tooltip to be interactive. This means that the tooltip will remain open when the mouse is over it or focus is within it, allowing users to interact with its content.

<<< DEMO ./demo/TooltipInteractive.vue

## Triggers

By default, tooltips are shown by `pointerenter` and `focus` events and closed by `pointerleave` and `blur` events
on the `target` element. To override this behavior and make the tooltip show and hide based
on `click` events, set the `click` prop to `true`.

<<< DEMO ./demo/TooltipTriggers.vue#template{vue-html}

To take finer control of tooltip visibility, you can use the [useToggle](/docs/composables/useToggle) or
[usePopover](/docs/composables/usePopover). Alternately, you can set the `manual` prop
and use the [`v-model`](#programmatic-control-via-v-model) or
[exposed functions](#exposed-functions) to control visibility.

## Content

The content of a tooltip can be set via the `title` or `body` props, or the `title`
or `default` slots.

::: info NOTE
Unlike [popover content](/docs/components/popover#content) which has a separate title and body, tooltips only
have one location to place the content. The `title` prop and slot take precedence over the `body` and `default`
slot, and the slots (as always) take precedence over the props.
:::

<<< DEMO ./demo/TooltipContent.vue#template{vue-html}

## Custom Classes and Variants

Custom classes can be applied to the tooltip using the `title-class` prop or `body-class` prop
(depending on which prop or slot you use to populate the tooltip):

<<< FRAGMENT ./demo/TooltipCustomClass.vue#template{vue-html}

Similarly, use [Bootstrap's Color and background](https://getbootstrap.com/docs/5.3/helpers/color-background/)
utilities to change the variant of the tooltip.

<<< DEMO ./demo/TooltipVariant.vue#template{vue-html}

`body-class` and `title-class` are reactive and can be changed while the tooltip is open.

Refer to the [tooltip directive](/docs/directives/BTooltip) docs on applying custom
classes to the directive version.

For finer control, use the bootstrap 5 css variables to apply styles directly.

<<< DEMO ./demo/TooltipStyles.vue#template{vue-html}

## Programmatic control via v-model

You can manually control the visibility of a tooltip via the v-model. Setting it to true will show the tooltip,
while setting it to false will hide the tooltip.

<<< DEMO ./demo/TooltipModel.vue

To make the tooltip show on initial render, simply add prop `show` to `<BTooltip>`:

<<< DEMO ./demo/TooltipStartOpen.vue#template{vue-html}

Tooltips can also be controlled via [Exposed functions](#exposed-functions).

## Close on Hide

The `close-on-hide` prop can be used to have the tooltip automatically close
when the target is scrolled out of view. The `boundary` and `boundary-padding`
props can be used to control what's considered clipping.

<<< DEMO ./demo/TooltipCloseOnHide.vue

## Exposed functions

`BTooltip` exposes several functions to allow manipulation of the state of the component.
These are accessed through the [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs)

<<< DEMO ./demo/TooltipExposed.vue

## Accessibility

For information on managing ARIA attributes for tooltip triggers, see the [ARIA Trigger Registration for Component Visibility](/docs/reference/accessibility#aria-trigger-registration-for-component-visibility) section in the Accessibility reference.
