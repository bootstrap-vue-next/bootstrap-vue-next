# Popover

<PageHeader>

The Popover feature, which provides a tooltip-like behavior, can be easily applied to any
interactive element via the `<BPopover>` component or [`v-b-popover`](/docs/directives/BPopover)
directive. Popovers can also be created and programmatically controlled via the composable
[`usePopoverController`](<(/docs/composables/usePopoverController)>)

</PageHeader>

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

:::info NOTE

`HTMLElement` refers to standard HTML elements such as `<div>`, `<button>`, etc., while `SVGElement`
refers to `<svg>` or supported child elements of SVGs.

:::

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

<<< DEMO ./demo/PopoverTriggers.vue#template{vue-html}

### Trigger Logic

The trigger system uses the following priority order:

1. **Manual mode**: If `manual="true"`, all automatic triggers are disabled
2. **Explicit configuration**: If `click`,`hover` or `focus` props are explicitly set (true or false), those values are used
3. **Default behavior**: Both hover and focus triggers are active

To take finer control of popover visibility, you can use the [useToggle](/docs/composables/useToggle) or
[usePopoverController](/docs/composables/usePopoverController). Alternately, you can set the `manual` prop
and use the [`v-model`](#programmatic-control-via-v-model) or
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
