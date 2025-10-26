---
description: 'Push notifications to your visitors with `BToast`, `useToast` and `BOrchestrator`. These are easily customizable for generating alert messages.'
---

Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. Toasts are intended to be small interruptions to your visitors or users and therefore should contain minimal, to-the-point, non-interactive content. Please refer to the Accessibility Tips section below for important usage information

## Overview

This section only refers to using the raw component variation. Oftentimes, `Toasts` are generated in a global context programmatically, like showing a success message after saving a form. That functionality is covered under the composable docs [here](/docs/composables/useToast)

The component variation is shown by using the `v-model` like so

<<< DEMO ./demo/ToastOverview.vue

By default Toasts are rendered in place. You can use Vue's `Teleport` to change the location, commonly to `body`

## Positioning

In combination with `Teleport`, you can render Toasts above the page, and in specific locations. You will need to create a wrapper component around said Toast to declare its location

<<< DEMO ./demo/ToastPositioning.vue

## Static placement

You can place toasts in static placements, and with more control by using them directly. Although, it is more uncommon

<<< DEMO ./demo/ToastStatic.vue

## Auto-dismissing Toasts

To create a `BToast` that dismisses automatically after a specified duration, set the `modelValue` prop to the number of **milliseconds** you want the `BToast` to remain visible. By default, the timer updates on every browser frame via `requestAnimationFrame` (roughly every 16 ms). To throttle updates for example to once per second—set the `interval` prop to `1000` (or any millisecond value). Timed Toasts automatically pause when hovered over with a mouse, but you can disable this behavior using the `noHoverPause` prop. Ensure that the `modelValue` is an integer representing milliseconds. Any change to the `modelValue` will reset the timer.

The **interval** prop determines how frequently the timer updates. While the default is `requestAnimationFrame`, you can set a custom interval. Negative values for either `modelValue` or `interval` will stop the timer. If the `modelValue` does not divide evenly by the interval, the timer will continue to the nearest interval. For example, a `modelValue` of 5400 ms with an interval of 1000 ms will run for 6000 ms. To avoid this, choose an interval that divides evenly into the `modelValue`, such as 540 ms or 1080 ms.

<<< DEMO ./demo/ToastAutoDismiss.vue

### ProgressBar Integration

As you may have noticed in that example, there was a built-in progress bar. This is triggered when using a value that is a `number` and when `progressProps` is not `undefined`. This was implemented because it can be difficult to modify the behavior of `BToast` when using a pure method, and the appearance of a ticking down progress bar is a "nice to have". Although it is not out of the box behavior by Bootstrap, its behavior is opt-in. This functions similarly to examples in `BAlert`

## BLink Integration

`Toast` can accept `BLink` props which will modify its behavior

<<< DEMO ./demo/ToastLink.vue

## Programmatically Control

To programmatically control your toasts with global state, refer to our documentation at [useToast](/docs/composables/useToast)

## Accessibility

Toasts are intended to be **small interruptions** to your visitors or users, so to help those with screen readers and similar assistive technologies, toasts are wrapped in an aria-live region. Changes to live regions (such as injecting/updating a toast component) are automatically announced by screen readers without needing to move the user's focus or otherwise interrupt the user. Additionally, `aria-atomic="true"` is automatically set to ensure that the entire toast is always announced as a single (atomic) unit, rather than announcing what was changed (which could lead to problems if you only update part of the toast's content, or if displaying the same toast content at a later point in time).

If you just need a single simple message to appear along the bottom or top of the user's window, use a fixed position `BAlert` instead.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/toast.data'
</script>
