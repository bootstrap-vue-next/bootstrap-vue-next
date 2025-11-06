---
description: 'Modals are streamlined, but flexible dialog prompts. They support a number of use cases from user notification to completely custom content and feature a handful of helpful sub-components, sizes, variants, accessibility, and more.'
---

## Usage

<<< DEMO ./demo/ModalUsage.vue

## Overview

`<BModal>`, by default, has an **OK** and **Cancel** buttons in the footer. These buttons can be
customized by setting various props on the component. You can customize the size of the buttons,
disable buttons, hide the **Cancel** button (i.e. `ok-only`), choose a variant (e.g. `danger` for a
red OK button) using the `ok-variant` and `cancel-variant` props, and provide custom button content
using the `ok-title` and `cancel-title` props, or using the named slots `ok` and
`cancel`.

`<BModal>` supports close on ESC (enabled by default), close on backdrop click (enabled by
default), and the `X` close button in the header (enabled by default). These features may be
disabled by setting the props `no-close-on-esc`, `no-close-on-backdrop`, and `no-header-close`
respectively.

You can override the modal title via the named slot `title`, override the header completely
via the `header` slot, and override the footer completely via the `footer` slot.

**Note**: when using the `footer` slot, the default **OK** and **Cancel** buttons will not be
present. Also, if you use the `header` slot, the default header `X` close button will not be
present, nor can you use the `title` slot.

Modals will not render their content in the document until they are shown (lazily rendered). Modals,
when visible, are rendered **appended to the `<body>` element** via Vue's `<Teleport>` component. The placement of the `<BModal>`
component will not affect layout, as it always renders as a placeholder comment node (`<!---->`).
You can render modals in-place by setting the `teleportDisabled` prop to `true`.

## Toggle modal visibility

There are several methods that you can employ to toggle the visibility of `<BModal>`.

### Using the `v-model` property

<<< DEMO ./demo/ModalModel.vue

### Using the `vBModal` directive

<<< DEMO ./demo/ModalDirective.vue

### Using the `show()`, `hide()` and `toggle()` methods

<<< DEMO ./demo/ModalExposed.vue

### Using the `useToggle` composable

<<< DEMO ./demo/ModalToggle.vue

### Using scoped slot scope methods

Refer to the [Custom rendering with slots](#custom-rendering-with-slots) section on using the
various methods passed to scoped slots for closing modals.

## Prevent Closing

It is possible to prevent showing/closing modals. You can prevent hiding on the following Events: ok, cancel, close, and hide.

<<< DEMO ./demo/ModalPrevent.vue

## Events

BootstrapVueNext emits several events during the modal lifecycle. The main events are:

### Visibility Events

- `show` - Emitted when the modal is about to be shown
- `shown` - Emitted after the modal has been shown and transitions completed
- `hide` - Emitted when the modal is about to be hidden
- `hidden` - Emitted after the modal has been hidden and transitions completed
- `show-prevented` - Emitted when show was prevented
- `hide-prevented` - Emitted when hide was prevented
- `toggle` - Emitted when the modal visibility is toggled
- `toggle-prevented` - Emitted when toggle was prevented

### Action Events

- `ok` - Emitted when the default **OK** button is clicked
- `cancel` - Emitted when the default **Cancel** button is clicked
- `close` - Emitted when the header close (**X**) button is clicked
- `backdrop` - Emitted when the backdrop is clicked
- `esc` - Emitted when the <kbd>Esc</kbd> key is pressed

All events receive a `BvTriggerableEvent` object with the following properties:

| Property or Method | Type     | Description                                                                                                                                                                                        |
| ------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `preventDefault()` | Method   | When called prevents the modal from closing                                                                                                                                                        |
| `trigger`          | Property | Will be one of: `ok`, `cancel`, `close`, `esc`, `backdrop`, or the argument passed to the `hide()` method. For visibility events (`show`, `hide`, etc.), this indicates what triggered the action. |
| `target`           | Property | A reference to the modal element                                                                                                                                                                   |
| `componentId`      | Property | The modal's ID                                                                                                                                                                                     |
| `cancelable`       | Property | Whether the event can be cancelled                                                                                                                                                                 |
| `defaultPrevented` | Property | Whether `preventDefault()` has been called                                                                                                                                                         |

You can set the value of `trigger` by passing an argument to the component's `hide()` method for
advanced control (i.e. detecting what button or action triggered the modal to hide).

::: info NOTE

Action events (`ok`, `cancel`, `close`) are only emitted when the corresponding built-in buttons are clicked. If you provide custom buttons via slots, these events will not be emitted automatically - use the `hide` event instead.

:::

## Modal content

### Using the grid

Utilize the Bootstrap grid system within a modal by nesting `<BContainer fluid>` within the
modal body. Then, use the normal grid system `<BRow>` and `<BCol>` as you
would anywhere else.

### Tooltips and popovers

Tooltips and popovers can be placed within modals as needed. When modals are closed, any tooltips
and popovers within are also automatically dismissed. Tooltips and popovers are automatically
appended to the modal element (to ensure correct z-indexing), although you can override where they
are appended by specifying a `teleportTo` target (refer to tooltip and popover docs for details).

<<< DEMO ./demo/ModalPopover.vue

## Teleport and rendering

By default, modals are rendered via Vue's `<Teleport>` component and appended to the `<body>` element.
This ensures proper z-indexing and prevents layout issues. The `<BModal>` component itself renders as
a placeholder comment node (`<!---->`) in its original DOM position.

You can control where modals are teleported using the `teleportTo` prop, or disable teleporting entirely
with `teleportDisabled`. When teleporting is disabled, the modal will render in-place within your component
tree, which may affect layout and z-indexing.

::: warning Note
The `static` prop from BootstrapVue is not implemented in BootstrapVueNext. Use `teleportDisabled`
to render modals in-place if needed.
:::

## Styling, options, and customization

### Modal sizing

Modals have three optional sizes, available via the prop `size`. These sizes kick in at certain
breakpoints to avoid horizontal scrollbars on narrower viewports. Valid optional sizes are `sm`,
`lg`, and `xl`.

<<< DEMO ./demo/ModalSizes.vue

The `size` prop maps the size to the `.modal-<size>` classes.

### Scrolling long content

When modals become too long for the user's viewport or device, they scroll independent of the page
itself. Try the demo below to see what we mean.

<<< DEMO ./demo/ModalScrollOverflow.vue

You can also create a scrollable modal that allows the scrolling of the modal body by setting the
prop `scrollable` to `true`.

<<< DEMO ./demo/ModalScrollableContent.vue

### Vertically centered modal

Vertically center your modal in the viewport by setting the `centered` prop.

<<< DEMO ./demo/ModalCenterVertically.vue

Feel free to mix vertically `centered` with `scrollable`.

### Variants

Control the header, footer, and body background and text variants by setting the
`header-bg-variant`, `header-text-variant`, `body-bg-variant`, `body-text-variant`,
`footer-bg-variant`, and `footer-text-variant` props. Use any of the standard Bootstrap variants
such as `danger`, `warning`, `info`, `success`, `dark`, `light`, etc.

The variants for the bottom border of the header and top border of the footer can be controlled by
the `header-border-variant` and `footer-border-variant` props respectively.

<<< DEMO ./demo/ModalVariants.vue

You can also apply arbitrary classes to the modal dialog container, content (modal window itself),
header, body and footer via the `modal-class`, `content-class`, `header-class`, `body-class` and
`footer-class` props, respectively. The props accept either a string or array of strings.

### Hiding the backdrop

Hide the modal's backdrop via setting the `no-backdrop` prop.

<<< DEMO ./demo/ModalNoBackdrop.vue

Note that clicking outside of the modal will still close the modal even though the backdrop is
hidden. You can disable this behaviour by setting the `no-close-on-backdrop` prop on `<BModal>`.

### Disable open and close animation

To disable the fading transition/animation when modal opens and closes, just set the prop `no-fade`
on the `<BModal>` component.

### Footer button sizing

Fancy smaller or larger buttons in the default footer? Simply set the `button-size` prop to `'sm'`
for small buttons, or `'lg'` for larger buttons.

<<< DEMO ./demo/ModalFooterBtnSizes.vue

The prop `button-size` has no effect if you have provided your own footer via the
[`footer`](#custom-rendering-with-slots) slot.

### Disabling built-in footer buttons

You can disable the built-in footer buttons programmatically.

You can disable the **Cancel** and **OK** buttons individually by setting the `cancel-disabled` and
`ok-disabled` props, respectively, to `true`. Set the prop to `false` to re-enable the button.

To disable both **Cancel** and **OK** buttons at the same time, simply set the `busy` prop to
`true`. Set it to `false` to re-enable both buttons.

### Custom rendering with slots

`<BModal>` provides several named slots (of which some are optionally scoped) that you can use to
customize the content of various sections of the modal.

| Slot           | Optionally Scoped | Description                                                                           |
| -------------- | ----------------- | ------------------------------------------------------------------------------------- |
| `default`      | Yes               | Main content of the modal                                                             |
| `title`        | Yes               | Content to place in the modal's title                                                 |
| `header`       | Yes               | Content to place in the header. Replaces the entire header including the close button |
| `footer`       | Yes               | Content to place in the footer. Replaces the entire footer including the button(s)    |
| `ok`           | Yes               | Content to place inside the footer OK button                                          |
| `cancel`       | Yes               | Content to place inside the footer CANCEL button                                      |
| `header-close` | No                | Content to place inside the header CLOSE (`x`) button                                 |

The scope available to the slots that support optional scoping are:

| Method or Property | Description                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| `ok()`             | Closes the modal and fires the `ok` and `hide` events, with `trigger = 'ok'`                    |
| `cancel()`         | Closes the modal and fires the `cancel` and `hide` events, with `trigger = 'cancel'`            |
| `close()`          | Closes the modal and fires the `close` and `hide` events, with `trigger = 'close'`              |
| `hide(trigger)`    | Closes the modal and fires the `hide` event, with the `trigger = trigger` (trigger is optional) |
| `visible`          | The visibility state of the modal. `true` if the modal is visible and `false` if not visible    |

#### Example modal using custom scoped slots

<<< DEMO ./demo/ModalScopedSlots.vue

## Multiple Modal Support

BootstrapVueNext supports multiple modals opened at the same time with automatic stacking management.

To disable stacking for a specific modal, set the `no-stacking` prop on the `<BModal>`
component. This will hide the modal before another modal is shown.

<<< DEMO ./demo/ModalMultipleSupport.vue

### Modal Stacking Behavior

- **Automatic Z-Index Management**: BootstrapVueNext automatically manages z-index values for stacked modals
- **CSS Variables**: The system uses CSS variables (`--b-count`, `--b-position`) for positioning and styling
- **Visual Offset**: Each modal is slightly offset from the previous one for visual clarity
- **Backdrop Management**: Only the topmost modal's backdrop is fully opaque

### Stacking CSS Variables

BootstrapVueNext provides CSS variables that you can use to customize stacked modal appearance:

- `--b-count`: Total number of active modals
- `--b-position`: Position of the current modal in the stack (0-based)
- `--b-inverse-position`: Inverse position for reverse calculations

**Notes:**

- Avoid nesting a `<BModal>` _inside_ another `<BModal>`, as it may be constrained to the boundaries of the parent modal dialog
- The backdrop opacity is automatically adjusted for better visual hierarchy
- Use `no-stacking` prop to prevent a modal from participating in the stacking system

## Programmatically Control

To programmatically control your modals with global state, refer to our documentation at [useModal](/docs/composables/useModal)

### Programmatically Create Modals

To programmatically create modals, refer to the documentation at [useModal](/docs/composables/useModal)

### Modal message boxes

If you're looking for replacements for `$bvModal.msgBoxOk` and `$bvModal.msgBoxConfirm` please see the
[migration guide](/docs/migration-guide#replacement-for-modal-message-boxes)

## Accessibility

`<BModal>` provides several accessibility features, including auto focus, return focus, keyboard
(tab) _focus containment_, and automated `aria-*` attributes.

**Note:** The animation effect of this component is dependent on the `prefers-reduced-motion` media
query. See the
[reduced motion section of our accessibility documentation](/docs/reference/accessibility) for
additional details.

### Modal ARIA attributes

The `aria-labelledby` and `aria-describedby` attributes will appear on the modal automatically in
most cases.

- The `aria-labelledby` attribute will **not** be present if you have the header hidden, or supplied
  your own header, or have not supplied a modal title. It is recommended to supply a title for your
  modals (when using the built in header). You can visually hide the header title, but still make it
  available to screen readers by setting the `titleVisuallyHidden` prop.
- The `aria-describedby` attribute will always point to the modal's body content.
- For accessibility, you can provide additional ARIA attributes directly on the modal component using standard HTML attributes.

### Auto focus on open

`<BModal>` will autofocus the modal _container_ when opened.

You can pre-focus an element within the `<BModal>` by listening to the `<BModal>` `shown` event,
and call the element's `focus()` method. `<BModal>` will not attempt to autofocus if an element
already has focus within the `<BModal>`.

<<< DEMO ./demo/ModalAccessibilityFocus.vue

Alternatively, if using `BForm*` form controls, you can use the `autofocus` prop to automatically
focus a form control when the modal opens.

If you want to auto focus one of the _built-in_ modal buttons (`ok`, `cancel` or the header `close`
button, you can set the prop `focus` to one of the values `'ok'`, `'cancel'` or
`'close'` and `<BModal>` will focus the specified button if it exists.

<p class="alert alert-warning">
  <strong>Note:</strong> it is <strong>not recommended</strong> to autofocus an input or control
  inside of a modal for accessibility reasons, as screen reader users will not know the context of
  where the input is (the announcement of the modal may not be spoken). It is best to let
  <code>&lt;b-modal&gt;</code> focus the modal's container, allowing the modal information to be
  spoken to the user, and then allow the user to tab into the input.
</p>

### Returning focus to the triggering element

For accessibility reasons, it is desirable to return focus to the element that triggered the opening
of the modal, when the modal closes.

`<BModal>` will automatically determine which element had focus before the modal was
opened, and will return the focus to that element when the modal has hidden. This is handled automatically by the focus trap system unless `noTrap` is set to `true`.

### Keyboard navigation

When tabbing through elements within a `<BModal>`, if focus attempts to leave the modal into the
document, it will be brought back into the modal by the focus trap system.

Avoid setting `tabindex` on elements within the modal to any value other than `0` or `-1`. Doing so
will make it difficult for people who rely on assistive technology to navigate and operate page
content and can make some of your elements unreachable via keyboard navigation.

You can disable the focus trap feature completely by setting the `noTrap` prop to `true`, although this is _highly discouraged_ for accessibility reasons. When `noTrap` is enabled, focus management becomes manual and you'll need to handle focus return yourself.

### Focus Management

BootstrapVueNext uses the `focus` prop to control initial focus behavior when the modal opens. You can:

- Set `focus` to `'ok'`, `'cancel'`, or `'close'` to focus the respective built-in button
- Set `focus` to an element reference, ID string, or CSS selector to focus a specific element
- Set `focus` to `false` to prevent automatic focusing (not recommended for accessibility)
- Leave `focus` undefined to use the default focus behavior (focuses the modal container)

<!-- Component reference added automatically from component package.json -->
