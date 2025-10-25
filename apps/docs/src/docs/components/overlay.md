---
description: "BootstrapVueNext's custom `BOverlay` component is used to _visually obscure_ a particular element or component and its content. It signals a state change within the element or component to the user and can be used for creating loaders, warnings/alerts, prompts, and more."
---

# Overlay

<PageHeader base="githubComponentsDirectory" />

## Overview

`BOverlay` can be used to obscure almost anything. [Example use cases](#use-case-examples) would
be forms, tables, delete confirmation dialogs, or anywhere you need to signal that the application
is busy performing a background task, to signal that a certain component is unavailable, or to
provide additional context to the end user.

`BOverlay` can be used to overlay (wrap) an element or component (the default behaviour), or can
be placed as a descendant of a `position: relative` element
([non-wrapping mode](#non-wrapping-mode)).

The overlay visibility is controlled via the `show` prop. By default, the overlay is _not_ shown.

::: info NOTE
This component only <em>visually obscures</em> its content (or the page). Refer to the
<a href="#accessibility">Accessibility section</a> below for additional
accessibility details and concerns.
:::

**Default wrapping mode example:**

<<< DEMO ./demo/OverlayOverview.vue

## Options

There are many options available for styling the overlay, and for providing custom content within
the overlay.

### Overlay backdrop color

You can control the backdrop background color via the `variant` prop. The variant is translated into
one of Bootstrap's
[background variant utility classes](/docs/reference/color-variants#background-and-border-variants).
Control the opacity of the backdrop via the `opacity` prop (opacity values can range from `0` to
`1`). And background blurring can be controlled via the `blur` prop.

<<< DEMO ./demo/OverlayBackdropColor.vue

As an alternative to the `variant` prop, you can specify a CSS color string value via the `bg-color`
prop. When a value is provided for `bg-color`, the `variant` prop value is ignored.

**Notes:**

- Background blurring is not available on some browsers (e.g. IE 11).
- Blurring requires that the opacity level be relatively high for the effect to be visible.

### Fade transition

By default, the overlay uses Bootstrap's fade transition when showing or hiding. You can disable the
fade transition via adding the `no-fade` prop to `BOverlay`.

<<< DEMO ./demo/OverlayNoFade.vue

### Default spinner styling

The default overlay content is a [`BSpinner`](/docs/components/spinner) of type `'border'`. You
can control the appearance of the spinner via the following props:

- `spinner-type`: Currently supported values are `'border'` (the default) or `'grow'`
- `spinner-variant`: Variant theme color for the spinner. Default is `null` which inherits the
  current font color
- `spinner-small`: Set to `true` to render a small size spinner

<<< DEMO ./demo/OverlayDefaultStyling.vue#template{vue-html}

### Overlay corner rounding

By default, the overlay backdrop has square corners. If the content you are wrapping has rounded
corners, you can use the [RadiusElementExtendables](/docs/types#radiuselementextendables) props
`rounded`, `rounded-top`, `rounded-bottom`, `rounded-start` and `rounded-end` to apply rounding to
the overlay's corners to match the obscured content's rounded corners. Possible values for these
props are the values of [RadiusElementExtendables](/docs/types#radiuselement).
See the [BAvatar documentation](/docs/components/avatar#rounding) for a detailed explanation of how these
props work.

<<< DEMO ./demo/OverlayRounding.vue

### Custom overlay content

Place custom content in the overlay (replacing the default spinner) via the optionally scoped slot
`overlay`.

<<< DEMO ./demo/OverlayCustomContent.vue

The following scope properties are available to the `overlay` slot:

| Property         | Description                         |
| ---------------- | ----------------------------------- |
| `spinnerVariant` | Value of the `spinner-variant` prop |
| `spinnerType`    | Value of the `spinner-type` prop    |
| `spinnerSmall`   | Value of the `spinner-small` prop   |

When placing interactive content in the overlay, you should focus the container of the custom
content or one of the focusable controls in the overlay content for accessibility reasons. You can
listen for the `BOverlay` `'shown'` event to know when the overlay content is available in the
document.

### Overlay content centering

By default, the overlay content will be horizontally and vertically centered within the overlay
region. To disable centering, set the `no-center` prop to `true`.

In the following example, we have set the `no-center` prop, and absolutely positioned the custom
overlay slot content at the top right.

<<< DEMO ./demo/OverlayNoCenter.vue#template{vue-html}

### Width

`BOverlay` defaults to a width of `100%`. When wrapping an inline or inline-block element, you
will need to add the class `d-inline-block` (e.g. `<BOverlay class="d-inline-block">`).

You can also use the width [utility classes](/docs/reference/utility-classes) or CSS styles to
control the width of the overlay's wrapping container element.

### Non-wrapping mode

By default, `BOverlay` wraps the content of the default slot. In some cases you may want to
obscure a parent container. Use the `no-wrap` prop to disable rendering of the wrapping (and ignore
the default slot). Note that this requires that the ancestor element that is to be obscured to have
relative positioning (either via the utility class `'position-relative'`, or CSS style
`'position: relative;'`).

<<< DEMO ./demo/OverlayNonwrapping.vue

Note that some of Bootstrap v5 component styles have relative positioning defined (e.g. cards,
cols, etc.). You may need to adjust the placement of `BOverlay` in your markup.

For example, `BCard` has relative positioning, so you can place the `<BOverlay no-wrap>` as a
descendant of `BCard`:

<<< DEMO ./demo/OverlayNonwrappingCard.vue

When in `no-wrap` mode, `BOverlay` will not set the `aria-busy` attribute on the obscured
element. You may also want to use an `aria-live` region in your app that announces to screen reader
users that the page is busy.

Refer to the [Accessibility section](#accessibility) below for additional details and concerns.

#### Absolute vs fixed positioning for `no-wrap`

In cases where you want to obscure the entire app or page, when using the `no-wrap` prop, you can
switch to viewport fixed positioning via setting the prop `fixed` on `BOverlay`. Note that this
does not disable scrolling of the page, and note that any interactive elements on the page will
still be in the document tab sequence.

You may also need to adjust the [z-index of the overlay](#overlay-z-index) to ensure that the
backdrop appears above all other page elements. Use the `z-index` property to override the default
`z-index` value.

Refer to the [Accessibility section](#accessibility) below for additional details and concerns.

### Overlay z-index

In some circumstances, you may need to adjust the `z-index` used by the overlay (depending on
positioning in the DOM or the content being obscured). Simply set the `z-index` prop with a value
suitable for your application or use case. The default `z-index` is `10`.

## Accessibility

Note that the overlay is visual only. You **must** disable any interactive elements (buttons, links,
etc.) when the overlay is showing, otherwise the obscured elements will still be reachable via
keyboard navigation (i.e. still in the document tab sequence).

If you have any links in the obscured content, we recommend using the
[`BLink` component](/docs/components/link), as it supports the `disabled` state, as native links
(`<a href="...">`) and `RouterLink` components do not support the disabled state.

It is also recommended adding either the `aria-hidden="true"` or `aria-busy="true"` attribute to
your obscured content when the overlay is visible. Just be careful not to add `aria-hidden="true"`
to the wrapper that contains the `BOverlay` component (when using `no-wrap`), as that would hide
any interactive content in the `overlay` slot for screen reader users.

If you are placing interactive content in the `overlay` slot, you should focus the content once the
`'shown'` event has been emitted. You can use the `hidden` event to trigger returning focus to an
element as needed when the overlay is no longer visible.

When using the wrapping mode (prop `no-wrap` is not set), the wrapper will have the attribute
`aria-busy="true"` set, to allow screen reader users to know that the wrapped content is in a busy
or loading state. When prop `no-wrap` is set, the attribute will _not_ be applied.

When using the `no-wrap` prop, and potentially the `fixed` prop, to obscure the entire application
or page, you must ensure that all interactive page elements (other than the content of the overlay)
have been disabled and are _not_ in the document tab sequence.

## Use case examples

Here are just a few examples of common use cases of `BOverlay`. In all cases, we disable any
interactive elements in the obscured area to prevent reachability via keyboard navigation (i.e.
<kbd>Tab</kbd> key) or screen reader access.

Please refer to the [Accessibility section](#accessibility) for additional details and concerns.

### Loading button

Easily create a loading button:

<<< DEMO ./demo/OverlayLoadingButton.vue

### Form confirmation prompt and upload status

This example is a bit more complex, but shows the use of `no-wrap`, and using the `overlay` slot to
present the user with a prompt dialog, and once confirmed it shows an uploading status indicator.
This example also demonstrates additional accessibility markup.

<<< DEMO ./demo/OverlayFormConfirmation.vue

### Using in `BModal`

The modal body has `position: relative;` set, so when using `<BOverlay no-wrap ...>` in the modal
body only the modal body will be obscured. If you wish to obscure the entire modal (including the
header and footer), you will need to set the `BModal` prop `body-class` to `position-static`, and
also set the `rounded` prop on `BOverlay`.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/overlay.data'
</script>
