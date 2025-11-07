---
description: >
  The `<BOffcanvas>` component is a fixed-position toggleable slide out box, which can be used for navigation, menus, details, etc. It can be positioned on any side of the viewport (top, bottom, start, or end), with optional backdrop support.
---

## Overview

You can place almost any content inside the `<BOffcanvas>`
[optionally scoped default slot](#scoped-default-slot), such as text, buttons, forms, images, or
[vertical navs](/docs/components/nav#vertical-variation).

The component supports a header and built in close button, of which you can optionally disable and
provide your own header (if needed), and can be easily toggled with our
[`v-b-toggle` directive](/docs/directives/toggle).

The component has minimal default styling, which provides you with great flexibility in laying out
the content of the offcanvas.

<<< DEMO ./demo/OffcanvasBasic.vue

If the content is taller than the available viewport height, vertical scrolling will automatically
be enabled via CSS on the body of the offcanvas.

## Styling

Several props are provided for controlling the appearance of the offcanvas.

### Title

Offcanvas components should have a title (specifically for accessibility reasons). Easily set the title that
appears in the header either via the `title` prop or the `title` slot. Note the `title` slot takes
precedence over the `title` prop.

If the [`no-header` prop](#header) is set, then neither the `title` prop or `title` slot
have any effect.

If you do not provide a title, use either the `aria-label` or `aria-labelledby` props to provide an
accessible title for the offcanvas. See the [Accessibility section](#accessibility) below for
additional details.

### Customizing Location

Customize location with four standard options `top, bottom, start, end`.

<<< DEMO ./demo/OffcanvasLocations.vue

### Variants

Bootstrap 5 offcanvas components use utility classes for styling. You can apply background and text color utilities
via the `body-class` or `header-class` props, or by wrapping content in elements with appropriate classes.

<<< DEMO ./demo/OffcanvasVariant.vue

### Shadow

Prefer an offcanvas with a backdrop shadow? Set the `shadow` prop to either boolean `true` for a medium
shadow, `'sm'` for a small shadow, or `'lg'` for a larger shadow. Set it to `false` (the default)
for no shadow.

### Borders

By default, `<BOffcanvas>` has no borders. Use
[border utility classes](/docs/reference/utility-classes) to add border(s) to `<BOffcanvas>` via the `class` prop,
or use CSS style overrides.

<<< DEMO ./demo/OffcanvasBorder.vue

### Width

By default the width of `<BOffcanvas>` is set to `320px` (100% on 'xs' screens). Simply provide a
value via the `width` prop (i.e. `'180px'`, `'20em'`, etc.) to override this default. The max width
is set to `100%` via CSS.

### Padding

The offcanvas by default has no padding on the body. You can apply padding utility classes via the `body-class` prop, or
use margin/padding utility classes on the content of the offcanvas.

### Disable slide transition

By default the offcanvas will use a sliding transition when showing and hiding. You can disable the
slide transition via the `no-animation` prop.

**Note:** The BootstrapVueNext defined transition effect of this component is dependent on the
`prefers-reduced-motion` media query. See the
[reduced motion section of our accessibility documentation](/docs/reference/accessibility) for
additional details.

When disabling the slide transition, the fade transition of the [optional backdrop](#backdrop) will
also be disabled.

### Scoped default slot

The `default` slot allows you to provide the body content for your offcanvas. It is optionally scoped.
The examples in the following sections demonstrate the use of the default slot scope.

You can apply arbitrary classes to the body section via the `body-class` prop.

### Header

By default, `<BOffcanvas>` has a header with optional title and a close button. You can supply a
title via the `title` prop, or via the optionally scoped slot `title`.

If you want to provide a completely custom header, you can use the optionally scoped `header` slot.

You can apply arbitrary classes to the header section via the `header-class` prop, to override the
default padding, etc.

#### Hiding the default header

You can disable the default header (including the close button) via the `no-header` prop. Note that
you will need to provide a method of closing the offcanvas. The `default` slot is scoped, which
includes a `hide()` method that can be used to close the offcanvas.

<<< DEMO ./demo/OffcanvasNoHeader.vue

### Footer

`<BOffcanvas>` provides a `footer` slot (optionally scoped), to allow you to provide content that
appears at the bottom of the offcanvas. The `footer` slot is scoped, which includes a `hide()` method
that can be used to close the offcanvas.

<<< DEMO ./demo/OffcanvasFooter.vue

You can apply arbitrary classes to the footer section via the `footer-class` prop.

### Lazy rendering

In some instances, you may not want the content rendered when the offcanvas is not visible. Simply set
the `lazy` prop on `<BOffcanvas>`. When `lazy` is `true`, the body and optional footer will _not_ be
rendered (removed from DOM) whenever the offcanvas is closed.

### Backdrop

Add a basic backdrop when the offcanvas is open via enabling the backdrop (default behavior).
When shown, the offcanvas will display an opaque backdrop. Clicking on the backdrop will close the offcanvas,
unless the `no-close-on-backdrop` prop is set to `true`.

To disable the backdrop entirely, set the `no-backdrop` prop to `true`.

<<< DEMO ./demo/OffcanvasBackdrop.vue

Note that when the offcanvas is open, it may still be possible to scroll the body (unless `body-scrolling` is disabled).
When the backdrop is enabled, focus constraint will attempt to keep focus
within the offcanvas. Note that in rare circumstances it might be possible for users to move focus to
elements outside of the offcanvas.

## Visibility control

### `v-b-toggle` directive

Using the [`v-b-toggle` directive](/docs/directives/toggle) is the preferred method for _opening_
the offcanvas, as it automatically handles applying the `aria-controls` and `aria-expanded`
accessibility attributes on the trigger element.

The majority of examples on this page use the `v-b-toggle` directive.

### `v-model`

The `v-model` reflects the current visibility state of the offcanvas. While it can be used to control
the visibility state of the offcanvas, it is recommended to use the
[`v-b-toggle` directive](#v-b-toggle-directive) to _show_ the offcanvas for accessibility reasons. If
you do use the `v-model` to show the offcanvas, you should:

- Provide an `id` prop on the `<BOffcanvas>` component
- Place the `aria-controls="id"` attribute (where `id` is the ID of the offcanvas) on the trigger element
- Set the `aria-expanded` attribute (also on the trigger element) to either the string `'true'` (if the offcanvas is open) or `'false'` (if the offcanvas is closed)
- Provide either a `title` prop or `aria-label` attribute on the `<BOffcanvas>` component for screen readers

## Events

The offcanvas will emit the `show` event when beginning to open, `shown` event once fully opened,
`hide` event when beginning to close, and the `hidden` event when fully closed.

## Responsive

The `responsive` prop in the BOffcanvas component enables adaptive display behavior based on the viewport size. When set, the offcanvas content displays inline for viewports wider than the specified breakpoint, and as a traditional offcanvas for narrower viewports

::: info NOTE
In SSR environments, the BOffcanvas component must be rendered client-side due to its dependency on browser context for responsive behavior. Use client-only directives or components to ensure proper functionality
:::

<<< FRAGMENT ./demo/OffcanvasResponsive.vue#template{vue-html}

## Sidebar

One common use of offcanvas is to create a table of contents sider that is visible on a large screen, but becomes an offcanvas component below a certain breakpoint. This is common for documentation sites like the one you're reading now which includes two such sidebars - a "table of contents" on the left and a "on this page" on the right.

Below is a simple example showing how to set up such a site.

<<< FRAGMENT ./demo/OffcanvasSidebar.vue

## Accessibility

`<BOffcanvas>` provides several accessibility features.

When the offcanvas is opened, the entire offcanvas will receive focus, which is desirable for screen
reader and keyboard-only users. When the offcanvas is closed, the element that previously had focus
before the offcanvas was opened will be re-focused.

In some circumstances, you may need to disable the enforce focus feature completely. You can do this
by setting the prop `no-trap`, although this is generally discouraged for accessibility
reasons.

When the offcanvas is open, users can press <kbd>Esc</kbd> to close the offcanvas. To disable this
feature, set the `no-close-on-esc` prop to `true`. With the backdrop enabled, you can use the prop
`no-close-on-backdrop` to disable the close on backdrop click feature.

When the backdrop is not disabled (default), the offcanvas will attempt to constrain focus within the offcanvas,
and the offcanvas will have the attribute `aria-modal="true"` set.

When you have hidden the header, or do not have a title for the offcanvas, set either `aria-label` to
a string that describes the offcanvas, or set `aria-labelledby` to an ID of an element that contains
the title. When using the `lazy` prop _and_ you do not have a header, use the `aria-label` prop to
provide an appropriate string to label the offcanvas.

## Implementation notes

BootstrapVueNext's custom SCSS/CSS is required for proper styling, and positioning of the offcanvas.

Bootstrap v5 background (`'bg-*'`) and text (`'text-*'`) utility classes can be used for
controlling the background and font color via the `body-class` and `header-class` props.

## See also

- [`v-b-toggle` directive](/docs/directives/toggle)
- [`<BCollapse>` component](/docs/components/collapse)
- [`<BCloseButton>` component](/docs/components/button#comp-ref-b-close-button)
