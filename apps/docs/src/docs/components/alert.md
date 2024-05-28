# Alert

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

</div>

## Overview

Alerts are available for any length of text, as well as an optional dismiss button (and optional auto-dismissing).

<HighlightCard>
  <BAlert :model-value="true">Default Alert</BAlert>
  <BAlert variant="success" :model-value="true">Success Alert</BAlert>
  <BAlert v-model="showDismissibleAlert" variant="danger" dismissible>
    Dismissible Alert!
  </BAlert>
  <BAlert
    v-model="dismissCountDown"
    dismissible
    variant="warning"
    @close-countdown="countdown = $event"
  >
    <p>This alert will dismiss after {{ countdown / 1000 }} seconds...</p>
    <BProgress
      variant="warning"
      :max="dismissCountDown"
      :value="countdown"
      height="4px"
    />
  </BAlert>
  <BButtonGroup>
    <BButton @click="dismissCountDown = dismissCountDown + 1000" variant="info">
      Add a second to the alert with countdown timer
    </BButton>
    <BButton @click="showDismissibleAlert = !showDismissibleAlert" variant="info">
      {{ !showDismissibleAlert ? 'show' : 'hide' }} dismissible alert
    </BButton>
  </BButtonGroup>
  <template #html>

```vue
<template>
  <BAlert :model-value="true">Default Alert</BAlert>

  <BAlert variant="success" :model-value="true">Success Alert</BAlert>

  <BAlert v-model="showDismissibleAlert" variant="danger" dismissible> Dismissible Alert! </BAlert>

  <BAlert
    v-model="dismissCountDown"
    dismissible
    variant="warning"
    @close-countdown="countdown = $event"
  >
    <p>This alert will dismiss after {{ countdown / 1000 }} seconds...</p>
    <BProgress variant="warning" :max="dismissCountDown" :value="countdown" height="4px" />
  </BAlert>

  <BButton @click="dismissCountDown = dismissCountDown + 1000" variant="info" class="m-1">
    Add a second to the alert with countdown timer
  </BButton>

  <BButton @click="showDismissibleAlert = !showDismissibleAlert" variant="info" class="m-1">
    {{ !showDismissibleAlert ? 'show' : 'hide' }} dismissible alert
  </BButton>
</template>

<script setup lang="ts">
const showDismissibleAlert = ref(false)

const dismissCountDown = ref(10000)
const countdown = ref(0)
</script>
```

  </template>
</HighlightCard>

### `v-model` Support

You can use the `v-model` directive to create two-way data bindings as in `v-model="showDismissibleAlert"`. Useful when you use dismissible because when the user closes the alert, your variable will be updated. The v-model prop accepts boolean `true` or `false` to show and hide the alert respectively. It can also be set to a positive integer (representing seconds) to create a self-dismissing alert. See the [Auto Dismissing Alerts](#auto-dismissing-alerts) section below for details.

## Contextual Variants

For proper styling of `BAlert`, use one of the four required contextual variants by setting the `variant` prop to one of the following: `info`, `success`, `warning`, or `danger`. The default is `info`.

<HighlightCard>
  <BAlert :model-value="true" variant="primary">Primary Alert</BAlert>
  <BAlert :model-value="true" variant="secondary">Secondary Alert</BAlert>
  <BAlert :model-value="true" variant="success">Success Alert</BAlert>
  <BAlert :model-value="true" variant="danger">Danger Alert</BAlert>
  <BAlert :model-value="true" variant="warning">Warning Alert</BAlert>
  <BAlert :model-value="true" variant="info">Info Alert</BAlert>
  <BAlert :model-value="true" variant="light">Light Alert</BAlert>
  <BAlert :model-value="true" variant="dark">Dark Alert</BAlert>
  <template #html>

```vue-html
<BAlert :model-value="true" variant="primary">Primary Alert</BAlert>
<BAlert :model-value="true" variant="secondary">Secondary Alert</BAlert>
<BAlert :model-value="true" variant="success">Success Alert</BAlert>
<BAlert :model-value="true" variant="danger">Danger Alert</BAlert>
<BAlert :model-value="true" variant="warning">Warning Alert</BAlert>
<BAlert :model-value="true" variant="info">Info Alert</BAlert>
<BAlert :model-value="true" variant="light">Light Alert</BAlert>
<BAlert :model-value="true" variant="dark">Dark Alert</BAlert>
```

  </template>
</HighlightCard>

### Conveying Meaning to Assistive Technologies

Using color variants to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text) or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.

## Additional Content Inside Alerts

`BAlerts` can also contain additional HTML elements like headings and paragraphs, which will be styled with the appropriate color matching the variant.

<HighlightCard>
  <BAlert :model-value="true" variant="success">
    <h4 class="alert-heading">Well done!</h4>
    <p>
      Aww yeah, you successfully read this important alert message. This example text is going to
      run a bit longer so that you can see how spacing within an alert works with this kind of
      content.
    </p>
    <hr>
    <p class="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
    </p>
  </BAlert>
  <template #html>

```vue-html
<BAlert :model-value="true" variant="success">
  <h4 class="alert-heading">Well done!</h4>

  <p>
    Aww yeah, you successfully read this important alert message. This example text is going to
    run a bit longer so that you can see how spacing within an alert works with this kind of
    content.
  </p>

  <hr>

  <p class="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
  </p>
</BAlert>
```

  </template>
</HighlightCard>

### Color of Links Within Alerts

Use the `.alert-link` utility CSS class to quickly provide matching colored links within any alert. Use on `<a>` or `BLink`.

<HighlightCard>
  <BAlert :model-value="true" variant="primary"><a href="#" class="alert-link">Primary Alert</a></BAlert>
  <BAlert :model-value="true" variant="secondary"><a href="#" class="alert-link">Secondary Alert</a></BAlert>
  <BAlert :model-value="true" variant="success"><a href="#" class="alert-link">Success Alert</a></BAlert>
  <BAlert :model-value="true" variant="danger"><a href="#" class="alert-link">Danger Alert</a></BAlert>
  <BAlert :model-value="true" variant="warning"><a href="#" class="alert-link">Warning Alert</a></BAlert>
  <BAlert :model-value="true" variant="info"><a href="#" class="alert-link">Info Alert</a></BAlert>
  <BAlert :model-value="true" variant="light"><a href="#" class="alert-link">Light Alert</a></BAlert>
  <BAlert :model-value="true" variant="dark"><a href="#" class="alert-link">Dark Alert</a></BAlert>
  <template #html>

```vue-html
<BAlert :model-value="true" variant="primary"><a href="#" class="alert-link">Primary Alert</a></BAlert>
<BAlert :model-value="true" variant="secondary"><a href="#" class="alert-link">Secondary Alert</a></BAlert>
<BAlert :model-value="true" variant="success"><a href="#" class="alert-link">Success Alert</a></BAlert>
<BAlert :model-value="true" variant="danger"><a href="#" class="alert-link">Danger Alert</a></BAlert>
<BAlert :model-value="true" variant="warning"><a href="#" class="alert-link">Warning Alert</a></BAlert>
<BAlert :model-value="true" variant="info"><a href="#" class="alert-link">Info Alert</a></BAlert>
<BAlert :model-value="true" variant="light"><a href="#" class="alert-link">Light Alert</a></BAlert>
<BAlert :model-value="true" variant="dark"><a href="#" class="alert-link">Dark Alert</a></BAlert>
```

  </template>
</HighlightCard>

## Dismissible Alerts

Using the `dismissible` prop it is possible to dismiss any `BAlert` inline. The alert must be v-modeled to a reactive value. This will add a close `X` button. Use the `dismiss-label` prop to change the hidden aria-label text associated with the dismiss button.

<HighlightCard>
  <BAlert v-model="secondDismissibleAlert" dismissible>
    Dismissible Alert! Click the close button over there <b>&rArr;</b>
  </BAlert>
  <template #html>

```vue
<template>
  <BAlert v-model="dismissibleAlert" dismissible>
    Dismissible Alert! Click the close button over there <b>&rArr;</b>
  </BAlert>
</template>

<script setup lang="ts">
const dismissibleAlert = ref(true)
</script>
```

  </template>
</HighlightCard>

## Auto-dismissing Alerts

To create a `BAlert` that dismisses automatically after some time set the `v-model` to the number of **milliseconds** you would like the `BAlert` to remain visible for. Timed Alerts are automatically paused when hovering with a mouse. You can disable pausing during hover by using the `noHoverPause` prop. You must only use an integer for milliseconds. Changing the v-model in any way will cause the timer to reset. The **interval** prop determines how often the timer will update, with the default being 1000 to trigger an update every 1 whole second. Due to the nature of this, one should be careful when creating many timed alerts with low intervals as it could negatively affect performance. Negative numbers for either v-model or interval will stop the timer. A value that does not divide wholely by an interval will continue to the greatest interval, ex: a value of 5400 ms and an interval of 1000 ms will run for exactly 6000 ms. To work around this, plan your interval to divide into this number easily. For example, use an interval of 540 ms or 1080 ms.

<HighlightCard>
  <BAlert
    v-model="autoDismissingAlert"
    :interval="autoDismissingAlertInterval"
    @close-countdown="autoDismissingAlertCountdown = $event"
  >
    Alert countdown: {{ autoDismissingAlertCountdown }} interval: {{ autoDismissingAlertInterval }}
  </BAlert>
  <BButtonGroup>
    <BButton @click="autoDismissingAlert = autoDismissingAlert + 1000">Adjust Alert Time +1000</BButton>
    <BButton @click="autoDismissingAlert = autoDismissingAlert - 1000">Adjust Alert Time -1000</BButton>
    <BButton @click="autoDismissingAlertInterval = autoDismissingAlertInterval + 100">Adjust Alert interval +100</BButton>
    <BButton @click="autoDismissingAlertInterval = autoDismissingAlertInterval - 100">Adjust Alert interval -100</BButton>
  </BButtonGroup>
  <template #html>

```vue
<template>
  <BAlert
    v-model="autoDismissingAlert"
    :interval="autoDismissingAlertInterval"
    @close-countdown="autoDismissingAlertCountdown = $event"
  >
    Alert countdown: {{ autoDismissingAlertCountdown }} interval: {{ autoDismissingAlertInterval }}
  </BAlert>

  <BButtonGroup>
    <BButton @click="autoDismissingAlert = autoDismissingAlert + 1000"
      >Adjust Alert Time +1000</BButton
    >
    <BButton @click="autoDismissingAlert = autoDismissingAlert - 1000"
      >Adjust Alert Time -1000</BButton
    >
    <BButton @click="autoDismissingAlertInterval = autoDismissingAlertInterval + 100"
      >Adjust Alert interval +100</BButton
    >
    <BButton @click="autoDismissingAlertInterval = autoDismissingAlertInterval - 100"
      >Adjust Alert interval -100</BButton
    >
  </BButtonGroup>
</template>

<script setup lang="ts">
const autoDismissingAlert = ref(10000)
const autoDismissingAlertInterval = ref(1000)
const autoDismissingAlertCountdown = ref(0)
</script>
```

  </template>
</HighlightCard>

### Exposed functions

The BAlert exposes four functions to manipulate the state of an active timer: `pause(), resume(), restart() & stop()`. These are accessed through the [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs).

1. Pause: pauses the active timer at the time that it is currently at
2. Resume: resumes the active timer at the place saved by `pause()`
3. Restart: restarts the timer back to its v-model saved spot. Ex: v-model="5400" and restarted at 3200ms will restart back to 5400ms
4. Stop: stops the timer. Unlike pause, it sets the value to 0ms and cannot be `resumed`, only `restarted`

<HighlightCard>
  <BAlert
    v-model="secondAutoDismissingAlert"
    ref="myAlert"
    @close-countdown="secondAutoDismissingAlertCountdown = $event"
  >
    Alert countdown: {{ secondAutoDismissingAlertCountdown }}
  </BAlert>
  <BButtonGroup>
    <BButton @click="pause">pause</BButton>
    <BButton @click="resume">resume</BButton>
    <BButton @click="restart">restart</BButton>
    <BButton @click="stop">stop</BButton>
  </BButtonGroup>
  <template #html>

```vue
<template>
  <BAlert
    v-model="secondAutoDismissingAlert"
    ref="myAlert"
    @close-countdown="secondAutoDismissingAlertCountdown = $event"
  >
    Alert countdown: {{ secondAutoDismissingAlertCountdown }}
  </BAlert>

  <BButtonGroup>
    <BButton @click="pause">pause</BButton>
    <BButton @click="resume">resume</BButton>
    <BButton @click="restart">restart</BButton>
    <BButton @click="stop">stop</BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
import type {BAlert} from 'bootstrap-vue-next'

const secondAutoDismissingAlert = ref(10000)
const secondAutoDismissingAlertCountdown = ref(0)
const myAlert = ref<null | InstanceType<typeof BAlert>>(null)

// Where 'myAlert' is the **ref** of the BAlert
const pause = () => myAlert.value?.pause()
const resume = () => myAlert.value?.resume()
const restart = () => myAlert.value?.restart()
const stop = () => myAlert.value?.stop()
</script>
```

  </template>
</HighlightCard>

### Timer Props

- `Immediate`: Will cause a timer to not start immediately upon render. A timer that is not started is not rendered. It must manually be started with `resume()` or `restart()`
- `showOnPause`: Overwrites the behavior of showing an Alert when the timer is paused

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/alert.data'
import {BAlert, BProgress, BButton, BButtonGroup} from 'bootstrap-vue-next'
import ComponentReference from '../../components/ComponentReference.vue'
import ComponentSidebar from '../../components/ComponentSidebar.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {ref, computed} from 'vue'

const showDismissibleAlert = ref(false);

const dismissCountDown = ref(10000);
const countdown = ref(0);

const secondDismissibleAlert = ref(true);

const autoDismissingAlert = ref(10000);
const autoDismissingAlertInterval = ref(1000);
const autoDismissingAlertCountdown = ref(0);

const secondAutoDismissingAlert = ref(10000);
const secondAutoDismissingAlertCountdown = ref(0);
const myAlert = ref<HTMLElement | null>(null)

const pause = () => myAlert.value?.pause()
const resume = () => myAlert.value?.resume()
const restart = () => myAlert.value?.restart()
const stop = () => myAlert.value?.stop()
</script>
