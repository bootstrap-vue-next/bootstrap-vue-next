---
description: >
  The Popover feature, which provides a tooltip-like behavior, can be easily applied to any
  interactive element via the `<BPopover>` component or [`v-b-popover`](/docs/directives/BPopover)
  directive. Popovers can also be created and programmatically controlled via the composable
  [`usePopover`](/docs/composables/usePopover)
---

<<< DEMO ./demo/PopoverOverview.vue#template{vue-html}

## Overview

Things to know when using the popover component:

- Popovers rely on the 3rd party library [floating-ui](https://floating-ui.com/) for positioning.
- Use `teleportTo` and `teleportDisabled` to control where in the DOM the popover is rendered. See the [Vue.js Docs](https://vuejs.org/guide/built-ins/teleport.html) for details. `teleportTo` defaults to `undefined`.
- Triggering popovers on hidden elements will not work.
- Popovers for `disabled` elements must be triggered on a wrapper element.
- When triggered from hyperlinks that span multiple lines, popovers will be centered. Set the `inline` prop to improve the positioning see the [Floating UI docs](https://floating-ui.com/docs/inline) for details.

## Target

The target is the _trigger_ element (or component) that will trigger the popover. The target is
specified via the `target` slot or prop, and can be any of the following:

The `target` prop may be any of the following:

- A string identifying the ID of the trigger element (or ID of the root element of a component)
- A string with querySelector. (i.e. '#toolbar > div:first-child')
- A reference (ref) to an `HTMLElement` or an `SVGElement` via a [Template Ref](https://vuejs.org/guide/essentials/template-refs.html)
- A reference (ref) to a component that has either an `HTMLElement` or `SVGElement` as its root
  element via [Template Ref](https://vuejs.org/guide/essentials/template-refs.html)

<<< DEMO ./demo/PopoverTargetTypes.vue

:::info NOTE

`HTMLElement` refers to standard HTML elements such as `<div>`, `<button>`, etc., while `SVGElement`
refers to `<svg>` or supported child elements of SVGs.

:::

### Target Requirements

The target element **must** exist in the document before `<BPopover>` is mounted. If the target
element is not found during mount, the popover will never open. Always place your `<BPopover>`
component lower in the DOM than your target element (or use the `target` slot to wrap the trigger inline).

## Positioning

Twelve static options are available for the `placement` prop: `top`, `top-start`, `top-end`,
`bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end` from
[@floating-ui/vue](https://floating-ui.com/) as well as three [auto placement](https://floating-ui.com/docs/autoplacement)
options `auto`, `auto-start` and `auto-end`.

Positioning is relative to the trigger element.

<<< DEMO ./demo/PopoverPositioning.vue#template{vue-html}

## Triggers

By default, popovers are triggered by `pointerenter` (hover) and `focus` events and hidden by `pointerleave` and `blur` events on the target element. You can customize which triggers are active using the `hover`, `focus`, and `click` props.

### Basic Trigger Configuration

- **Default behavior**: Both hover and focus triggers are active
- **Click only**: Add the `click` prop (`<BPopover click>`)
- **Hover only**: Add the `hover` prop (`<BPopover hover>`)
- **Focus only**: Add the `focus` prop (`<BPopover focus>`)
- **Multiple triggers**: Combine props, e.g. `<BPopover click hover focus>`
- **Manual control**: Set `<BPopover manual>` to disable all automatic triggers

<<< DEMO ./demo/PopoverTriggers.vue

### Trigger Logic

The trigger system uses the following priority order:

1. **Manual mode**: If `manual="true"`, all automatic triggers are disabled
2. **Explicit configuration**: If `click`,`hover` or `focus` props are explicitly set (true or false), those values are used
3. **Default behavior**: Both hover and focus triggers are active

To take finer control of popover visibility, you can use the [useToggle](/docs/composables/useToggle) or
[usePopover](/docs/composables/usePopover). Alternatively, you can set the `manual` prop
and use the [`v-model`](#programmatic-control-via-v-model) or
[exposed functions](#exposed-functions) to control visibility.

## Content

The title and body content of a popover can be set via the `title` and `body` props or the `title`
and `default` slots. Slots allow you to include HTML markup and Vue components.

<<< DEMO ./demo/PopoverContent.vue#template{vue-html}

:::tip
For reactive or complex content, always use slots instead of props. Slots provide greater control and support for HTML markup and interactive components.
:::

## Custom Classes and Variants

Custom classes can be applied to the popover's title `<div>` by using the `title-class` prop and to
the popover's body `<div>` by using the `body-class` prop:

<<< FRAGMENT ./demo/PopoverCustomClass.vue#template{vue-html}

Similarly, use [Bootstrap's Color and background](https://getbootstrap.com/docs/5.3/helpers/color-background/)
utilities to change the variant of the popover.

<<< DEMO ./demo/PopoverVariant.vue#template{vue-html}

`body-class` and `title-class` are reactive and can be changed while the popover is open.

Refer to the [popover directive](/docs/directives/BPopover) docs on applying custom
classes to the directive version.

For finer control, use the bootstrap 5 css variables to apply styles directly.

<<< DEMO ./demo/PopoverStyles.vue#template{vue-html}

## Programmatic control via v-model

You can manually control the visibility of a popover via the v-model. Setting it to true will show the popover,
while setting it to false will hide the popover.

<<< DEMO ./demo/PopoverModel.vue

To make the popover shown on initial render, simply add prop `show` to `<BPopover>`:

<<< DEMO ./demo/PopoverStartOpen.vue#template{vue-html}

Popovers can also be controlled via [Exposed functions](#exposed-functions).

## Delay

You can control the delay for showing and hiding popovers using the `delay` prop. It accepts either a number (in milliseconds) that applies to both show and hide, or an object with separate `show` and `hide` values.

<<< DEMO ./demo/PopoverDelay.vue#template{vue-html}

## Boundary

The `boundary` prop determines the container that constrains the popover visually. The `boundary-padding` prop specifies the minimum distance (in pixels) between the popover and the boundary edges.

<<< DEMO ./demo/PopoverBoundary.vue

Valid `boundary` values include:

- `'clippingAncestors'` (default) - constrained by scrollable ancestors
- `'viewport'` - constrained by the browser viewport
- An HTML element reference - constrained by a specific element

## Close on Hide

The `close-on-hide` prop can be used to have the popover automatically close
when the target is scrolled out of view. The `boundary` and `boundary-padding`
props can be used to control what's considered clipping.

<<< DEMO ./demo/PopoverCloseOnHide.vue

## Disabled State

You can programmatically disable a popover using `v-model` combined with the `manual` prop. When disabled (manual mode), the popover will not respond to trigger events, but can still be controlled programmatically.

<<< DEMO ./demo/PopoverDisabled.vue

## Exposed functions

`BPopover` exposes several functions to allow manipulation of the state of the component.
These are accessed through the [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs)

<<< DEMO ./demo/PopoverExposed.vue

## Interactive Content

You can create popovers with interactive content such as forms and buttons. When using interactive content:

- Use the `click` trigger (avoid `hover` or `focus` triggers)
- Keep interactive content minimal for better mobile experience
- Manage focus properly - move focus into the popover when shown and return it when hidden
- Consider using `<BModal>` for complex interactive content with extensive form controls

<<< DEMO ./demo/PopoverInteractive.vue

:::warning Important
The maximum width of popovers is constrained by Bootstrap's CSS (276px by default). For more complex interactive forms with multiple controls, consider using a modal dialog instead.
:::

## Accessibility

For information on managing ARIA attributes for popover triggers, see the [ARIA Trigger Registration for Component Visibility](/docs/reference/accessibility#aria-trigger-registration-for-component-visibility) section in the Accessibility reference.

### Making popovers work for keyboard and assistive technology users

To allow keyboard users to activate your popovers, you should only add them to HTML elements that
are traditionally keyboard-focusable and interactive (such as links or form controls). Although
arbitrary HTML elements (such as `<span>`s) can be made focusable by adding the `tabindex="0"`
attribute, this will add potentially annoying and confusing tab stops on non-interactive elements
for keyboard users. Most assistive technologies currently do not announce the popover's content
in this situation.

Additionally, do not rely solely on `hover` as the trigger for your popovers, as
this will make them impossible to trigger for keyboard users.

### Content Considerations

The content displayed in popovers is tied to the trigger element with the `aria-describedby`
attribute. As a result, the entirety of the popover's content will be announced to assistive
technology users as one long, uninterrupted stream. Keep content concise and well-structured.

When including interactive controls (such as form elements or links) in popovers, be aware that:

- Keyboard focus remains on the triggering element when the popover opens
- The popover may not immediately follow the trigger in the document's tab order
- Moving forward with <kbd>Tab</kbd> may not move a keyboard user into the popover
- Interactive controls may be unreachable for keyboard users

**For complex interactive content, use `<BModal>` instead of popovers** to ensure proper keyboard navigation and focus management.

:::info Note
The animation effect of popovers is dependent on the `prefers-reduced-motion` media
query. See the [reduced motion section of our accessibility documentation](/docs/reference/accessibility) for
additional details.
:::
