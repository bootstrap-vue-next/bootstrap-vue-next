# Alert

<PageHeader>

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

</PageHeader>

## Overview

Alerts are available for any length of text, as well as an optional dismiss button (and optional auto-dismissing).

<<< DEMO ./demo/AlertOverview.vue

### `v-model` Support

You can use the `v-model` directive to create two-way data bindings as in `v-model="showDismissibleAlert"`. This is useful when you use dismissible because when the user closes the alert, your variable will be updated. The v-model prop accepts boolean `true` or `false` to show and hide the alert respectively. It can also be set to a positive integer (representing seconds) to create a self-dismissing alert. See the [Auto Dismissing Alerts](#auto-dismissing-alerts) section below for details. `:model-value="true"` can be used to unconditionally show the alert, as the `show` prop did in `bootstrap-vue`. See the
[migration guide](/docs/migration-guide#balert) for details.

## Contextual Variants

For proper styling of `BAlert`, use one of the four required contextual variants by setting the `variant` prop to one of the following: `info`, `success`, `warning`, or `danger`. The default is `info`.

<<< DEMO ./demo/AlertVariants.vue#template{vue-html}

### Conveying Meaning to Assistive Technologies

Using color variants to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text) or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.

## Additional Content Inside Alerts

`BAlerts` can also contain additional HTML elements like headings and paragraphs, which will be styled with the appropriate color matching the variant.

<<< DEMO ./demo/AlertContent.vue#template{vue-html}

### Color of Links Within Alerts

Use the `.alert-link` utility CSS class to quickly provide matching colored links within any alert. Use on `<a>` or `BLink`.

<<< DEMO ./demo/AlertLinkColors.vue#template{vue-html}

## Dismissible Alerts

Using the `dismissible` prop it is possible to dismiss any `BAlert` inline. The alert must be v-modeled to a reactive value. This will add a close `X` button. Use the `dismiss-label` prop to change the hidden aria-label text associated with the dismiss button.

<<< DEMO ./demo/AlertDismissible.vue

### Auto-dismissing Alerts

To create a `BAlert` that dismisses automatically after a specified duration, set the `v-model` to the number of **milliseconds** you want the `BAlert` to remain visible. By default, the timer updates using `requestAnimationFrame`, which triggers an update approximately every second. Timed Alerts automatically pause when hovered over with a mouse, but you can disable this behavior using the `noHoverPause` prop. Ensure that the `v-model` value is an integer representing milliseconds. Any change to the `v-model` will reset the timer.

The **interval** prop determines how frequently the timer updates. While the default is `requestAnimationFrame`, you can set a custom interval. Negative values for either `v-model` or `interval` will stop the timer. If the `v-model` value does not divide evenly by the interval, the timer will continue to the nearest interval. For example, a `v-model` of 5400 ms with an interval of 1000 ms will run for 6000 ms. To avoid this, choose an interval that divides evenly into the `v-model`, such as 540 ms or 1080 ms.

<<< DEMO ./demo/AlertAutoDismissible.vue

## Fading alerts

Use the `fade` prop to enable animation. By default alerts are not animated.

Note that `bootstrap-vue-next` uses Vue's transitions for this animation rather than bootstrap's `.fade` class.

<<< DEMO ./demo/AlertFade.vue

## Exposed functions

The BAlert exposes four functions to manipulate the state of an active timer: `pause(), resume(), restart() & stop()`. These are accessed through the [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs).

1. Pause: pauses the active timer at the time that it is currently at
2. Resume: resumes the active timer at the place saved by `pause()`
3. Restart: restarts the timer back to its v-model saved spot. Ex: v-model="5400" and restarted at 3200ms will restart back to 5400ms
4. Stop: stops the timer. Unlike pause, it sets the value to 0ms and cannot be `resumed`, only `restarted`

<<< DEMO ./demo/AlertFunctions.vue

## Timer Props

- `Immediate`: Setting this property to `false` will cause a timer to not start immediately upon render. A timer that is not started is not rendered. It must manually be started with `resume()` or `restart()`. Default is `true`.
- `showOnPause`: Setting this property to `false` will override the behavior of showing the Alert when the timer is paused. Default is `true`.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/alert.data'
</script>
