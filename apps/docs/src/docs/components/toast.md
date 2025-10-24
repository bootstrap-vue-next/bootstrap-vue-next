# Toast

<PageHeader>

Push notifications to your visitors with `BToast`, `useToast` and `BOrchestrator`. These are easily customizable for generating alert messages.

</PageHeader>

Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.

Toasts are intended to be small interruptions to your visitors or users and therefore should contain minimal, to-the-point, non-interactive content. Please refer to the Accessibility Tips section below for important usage information

## Overview

This section only refers to using the raw component variation. `Toasts` are often generated in a global context programmatically, like showing a success message after saving a form. That functionality is covered under the [composable docs](/docs/composables/useToast)

The component variation is shown by using the `v-model` like so

<<< DEMO ./demo/ToastOverview.vue

By default Toasts are rendered in place. You can use Vue's `Teleport` to change the location, commonly to `body` or, more
commonly, create toasts using the [useToast](/docs/composables/useToast) composable.

### Toast features and notes

- Toasts can be generated programmatically via the `useToast` composable, or manually created using the `<BToast>` component.
- Titles are optional but recommended for accessibility. Titles are rendered inside a `<strong>` element unless using the `title` slot.
- The close button can be hidden via the `no-close-button` prop.
- A title bar is shown when a title is provided, unless both title and close button are hidden.
- Auto-dismissing is controlled by setting `model-value` to a number of milliseconds. No default auto-hide duration.
- When auto-hide is enabled, hovering over the toast pauses the countdown. This can be disabled with the `no-hover-pause` prop.
- Toast transparency can be disabled by setting the `solid` prop to `true`.
- Toasts use Vue's `Teleport` component for positioning. By default, toasts created with `useToast` are teleported to the body.
- Toasts include built-in progress bar support via the `progress-props` prop when using timed dismissal.
- Toasts support `BLink` integration for interactive toast bodies.

## Positioning

In combination with `Teleport`, you can render Toasts above the page, and in specific locations. You will need to create a wrapper component around said Toast to declare its location

<<< DEMO ./demo/ToastPositioning.vue

## Static placement

You can place toasts in static placements, and with more control by using them directly. Although, it is more uncommon

<<< DEMO ./demo/ToastStatic.vue

## Auto-dismissing Toasts

To create a `BToast` that dismisses automatically after a specified duration, set the `model-value` prop to the number of **milliseconds** you want the `BToast` to remain visible. By default, the timer updates on every browser frame via `requestAnimationFrame` (roughly every 16 ms). To throttle updates for example to once per second—set the `interval` prop to `1000` (or any millisecond value). Timed Toasts automatically pause when hovered over with a mouse, but you can disable this behavior using the `no-hover-pause` prop. Ensure that the `model-value` is an integer representing milliseconds. Any change to the `model-value` will reset the timer.

The **interval** prop determines how frequently the timer updates. While the default is `requestAnimationFrame`, you can set a custom interval. Negative values for either `model-value` or `interval` will stop the timer. If the `model-value` does not divide evenly by the interval, the timer will continue to the nearest interval. For example, a `model-value` of 5400 ms with an interval of 1000 ms will run for 6000 ms. To avoid this, choose an interval that divides evenly into the `model-value`, such as 540 ms or 1080 ms.

<<< DEMO ./demo/ToastAutoDismiss.vue

### Toast roles

Toasts are rendered with a default `role` attribute of `'alert'` and `aria-live` attribute of
`'assertive'`. For toasts that are meant for a casual notification, set the `is-status` prop to
`true`, which will change the `role` and `aria-live` attributes to `'status'` and `'polite'`
respectively.

For more information, please see the [Accessibility](#accessibility) section below.

### ProgressBar Integration

As you may have noticed in that example, there was a built-in progress bar. This is triggered when using a value that is a `number` and when `progress-props` is not `undefined`. This was implemented because it can be difficult to modify the behavior of `BToast` when using a pure method, and the appearance of a ticking down progress bar is a "nice-to-have". Although it is not out of the box behavior by Bootstrap, its behavior is opt-in. This functions similarly to examples in `BAlert`

## BLink Integration

`Toast` can accept `BLink` props which will modify its behavior

<<< DEMO ./demo/ToastLink.vue

## Programmatically Control

To programmatically control your toasts with global state, refer to our documentation at [useToast](/docs/composables/useToast)

## Accessibility

Toasts are intended to be **small interruptions** to your visitors or users, so to help those with screen readers and similar assistive technologies, toasts are wrapped in an aria-live region. Changes to live regions (such as injecting/updating a toast component) are automatically announced by screen readers without needing to move the user's focus or otherwise interrupt the user. Additionally, `aria-atomic="true"` is automatically set to ensure that the entire toast is always announced as a single (atomic) unit, rather than announcing what was changed (which could lead to problems if you only update part of the toast's content, or if displaying the same toast content at a later point in time).

If you just need a single simple message to appear along the bottom or top of the user's window, use a fixed position `BAlert` instead.

### Accessibility tips

Typically, toast messages should display one or two-line non-critical messages that **do not**
require user interaction. Without taking extra steps, toasts can have numerous accessibility issues
that can impact both people with and without disabilities. The following list, while not complete,
provides general guidelines when using toasts.

- If the information needed is important for the process, e.g. for a list of errors in a form, then
  use the [`<BAlert>`](/docs/components/alert) component instead of `<BToast>`.
- `<BToast>`, by default, sets the attributes `role` to `'alert'` and `aria-live` to `'assertive'`.
  If it's an important message like an error, this default setting is appropriate, otherwise set the
  prop `is-status` to `true` which will change the attributes `role` to `'status'` and `aria-live`
  to `'polite'`.
- Avoid popping up a toast message on page load. Performing unexpected actions on page load is very
  confusing to screen reader users. If a toast is needed on page load or route change, delay showing
  the toast by several seconds so that the screen reader will finish announcing information about
  the current page without interruption by the toast.
- When the toast is persistently visible (i.e., when `model-value` is set to `true` and the toast does not auto-dismiss), you must have a close button to allow users to dismiss
  the toast. If you have also set the prop `no-close-button` to `true`, you must provide your own close
  button or dismiss the toast by some other means. Toasts have a tab index of `0` so that they can
  be reached by keyboard-only users. If `model-value` is set to `false`, the toast is not visible and no close button is required.
- Avoid initiating many toasts in quick succession, as screen readers may interrupt reading the
  current toast and announce the new toast, causing the context of the previous toast to be missed.
- For toasts with long textual content, set `model-value` to a larger timeout value, to allow
  users time to read the content of the toast. The average person reads about 200 words per minute,
  so a good length of time to keep messages up is 5 seconds, plus 300 extra milliseconds per word.
  The shortest default that should be used as a best practice is 5 seconds (5000ms). In addition to
  a reasonable default timeout, you could also allow the user to choose how long they want toasts to
  stay up for. Most people inherently understand whether they are fast or slow readers. Having a
  profile setting that is part of the user login will allow slow readers to pick a longer time if
  the messages are going away too fast, and fast readers to pick a short time if the messages are
  staying up too long.
- To account for memory loss and distraction as well as disability-related issues such as ADHD, a
  best practice would be to implement a location where users can refer to a list of past toast
  messages which have been shown. Preferably this list should be sortable, with the default being
  chronological.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/toast.data'
</script>
