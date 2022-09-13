# Alert

> Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Overview

Alerts are available for any length of text, as well as an optional dismiss button (and optional
auto-dismissing).

<ClientOnly>
  <b-card>
    <b-alert show>Default Alert</b-alert>
    <b-alert variant="success" show>Success Alert</b-alert>
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        Dismissible Alert!
    </b-alert>
    <b-alert
      v-model="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged" >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>
    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>
  </b-card>
</ClientOnly>

```html
<b-alert show>Default Alert</b-alert>
<b-alert variant="success" show>Success Alert</b-alert>
<b-alert v-model="showDismissibleAlert" variant="danger" dismissible> Dismissible Alert! </b-alert>
<b-alert
  v-model="dismissCountDown"
  dismissible
  variant="warning"
  @dismissed="dismissCountDown=0"
  @dismiss-count-down="countDownChanged"
>
  <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
  <b-progress
    variant="warning"
    :max="dismissSecs"
    :value="dismissCountDown"
    height="4px"
  ></b-progress>
</b-alert>
<b-button @click="showAlert" variant="info" class="m-1">
  Show alert with count-down timer
</b-button>
<b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
  Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
</b-button>

<script lang="ts" setup>
  import {ref} from 'vue'

  const dismissSecs = 10
  const dismissCountDown = ref(0)
  const showDismissibleAlert = ref(false)

  const countDownChanged = (countDown) => {
    dismissCountDown.value = countDown
  }

  const showAlert = () => {
    dismissCountDown.value = dismissSecs
  }
</script>
```

## Visible state

Use the `show` prop to control the visibility state of the alert. By default, alerts are **not**
shown. Set the prop `show` to explicitly display them.

The `show` prop accepts boolean `true` or `false` to show and hide the alert respectively.

### `v-model` support

You can use the `v-model` directive to create two-way data bindings as in
`v-model="showDismissibleAlert"`. Useful when you use dismissible because when user closes the
alert, your variable will be updated. Do not use the `show` prop when using `v-model`.
The v-model prop accepts boolean `true` or `false` to show and hide the alert respectively, acting like the `show` prop. It can
also be set to a positive integer (representing seconds) to create a self dismissing alert. See the
[Auto Dismissing Alerts](#auto-dismissing-alerts) section below for details.

## Contextual variants

For proper styling of `<b-alert>`, use one of the four required contextual variants by setting the
`variant` prop to one of the following: `info`, `success`, `warning` or `danger`. The default is
`info`.

<ClientOnly>
  <b-card>
    <b-alert show variant="primary">Primary Alert</b-alert>
    <b-alert show variant="secondary">Secondary Alert</b-alert>
    <b-alert show variant="success">Success Alert</b-alert>
    <b-alert show variant="danger">Danger Alert</b-alert>
    <b-alert show variant="warning">Warning Alert</b-alert>
    <b-alert show variant="info">Info Alert</b-alert>
    <b-alert show variant="light">Light Alert</b-alert>
    <b-alert show variant="dark">Dark Alert</b-alert>
  </b-card>
</ClientOnly>

```html
<b-alert show variant="primary">Primary Alert</b-alert>
<b-alert show variant="secondary">Secondary Alert</b-alert>
<b-alert show variant="success">Success Alert</b-alert>
<b-alert show variant="danger">Danger Alert</b-alert>
<b-alert show variant="warning">Warning Alert</b-alert>
<b-alert show variant="info">Info Alert</b-alert>
<b-alert show variant="light">Light Alert</b-alert>
<b-alert show variant="dark">Dark Alert</b-alert>
```

### Conveying meaning to assistive technologies

Using color variants to add meaning only provides a visual indication, which will not be conveyed to
users of assistive technologies – such as screen readers. Ensure that information denoted by the
color is either obvious from the content itself (e.g. the visible text), or is included through
alternative means, such as additional text hidden with the `.visually-hidden` class.

## Additional content inside alerts

`<b-alerts>` can also contain additional HTML elements like headings and paragraphs, which will be
styled with the appropriate color matching the variant.

<ClientOnly>
  <b-card>
    <b-alert show variant="success">
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
    </b-alert>
  </b-card>
</ClientOnly>

```html
<b-alert show variant="success">
  <h4 class="alert-heading">Well done!</h4>
  <p>
    Aww yeah, you successfully read this important alert message. This example text is going to run
    a bit longer so that you can see how spacing within an alert works with this kind of content.
  </p>
  <hr />
  <p class="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
  </p>
</b-alert>
```

### Color of links within alerts

Use the `.alert-link` utility CSS class to quickly provide matching colored links within any alert.
Use on `<a>` or `<b-link>`.

<ClientOnly>
  <b-card>
    <b-alert show variant="primary"><a href="#" class="alert-link">Primary Alert</a></b-alert>
    <b-alert show variant="secondary"><a href="#" class="alert-link">Secondary Alert</a></b-alert>
    <b-alert show variant="success"><a href="#" class="alert-link">Success Alert</a></b-alert>
    <b-alert show variant="danger"><a href="#" class="alert-link">Danger Alert</a></b-alert>
    <b-alert show variant="warning"><a href="#" class="alert-link">Warning Alert</a></b-alert>
    <b-alert show variant="info"><a href="#" class="alert-link">Info Alert</a></b-alert>
    <b-alert show variant="light"><a href="#" class="alert-link">Light Alert</a></b-alert>
    <b-alert show variant="dark"><a href="#" class="alert-link">Dark Alert</a></b-alert>
  </b-card>
</ClientOnly>

```html
<b-alert show variant="primary"><a href="#" class="alert-link">Primary Alert</a></b-alert>
<b-alert show variant="secondary"><a href="#" class="alert-link">Secondary Alert</a></b-alert>
<b-alert show variant="success"><a href="#" class="alert-link">Success Alert</a></b-alert>
<b-alert show variant="danger"><a href="#" class="alert-link">Danger Alert</a></b-alert>
<b-alert show variant="warning"><a href="#" class="alert-link">Warning Alert</a></b-alert>
<b-alert show variant="info"><a href="#" class="alert-link">Info Alert</a></b-alert>
<b-alert show variant="light"><a href="#" class="alert-link">Light Alert</a></b-alert>
<b-alert show variant="dark"><a href="#" class="alert-link">Dark Alert</a></b-alert>
```

## Dismissible alerts

Using the `dismissible` prop it's possible to dismiss any `<b-alert>` inline. This will add a close
`X` button. Use the `dismiss-label` prop to change the hidden label text associated with the dismiss
button.

<ClientOnly>
  <b-card>
    <b-alert show dismissible>
      Dismissible Alert! Click the close button over there <b>&rArr;</b>
    </b-alert>
  </b-card>
</ClientOnly>

```html
<b-alert show dismissible>
  Dismissible Alert! Click the close button over there <b>&rArr;</b>
</b-alert>
```

### Auto dismissing alerts

To create a `<b-alert>` that dismisses automatically after a period of time, set the `v-model` to the number of seconds you would like the `<b-alert>` to remain visible for. Only integer number of seconds are supported.

<ClientOnly>
  <b-card>
    <b-alert
      v-model="autoDismissCountDown"
      dismissible
      variant="warning"
      @dismissed="autoDismissCountDown=0"
      @dismiss-count-down="autoDismissCountDownChanged"
    >
      This alert will dismiss after {{ autoDismissCountDown }} seconds...
    </b-alert>
    <b-button @click="showAutoDismissAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
  </b-card>
</ClientOnly>

```html
<b-alert
  v-model="autoDismissCountDown"
  dismissible
  variant="warning"
  @dismissed="autoDismissCountDown=0"
  @dismiss-count-down="autoDismissCountDownChanged"
>
  This alert will dismiss after {{ autoDismissCountDown }} seconds...
</b-alert>
<b-button @click="showAutoDismissAlert" variant="info" class="m-1">
  Show alert with count-down timer
</b-button>

<script lang="ts" setup>
  import {ref} from 'vue'

  const autoDismissSecs = 5
  const autoDismissCountDown = ref(0)

  const autoDismissCountDownChanged = (countDown) => {
    autoDismissCountDown.value = countDown
  }

  const showAutoDismissAlert = () => {
    autoDismissCountDown.value = autoDismissSecs
  }
</script>
```

<ClientOnly>
  <ComponentReference></ComponentReference>
</ClientOnly>

<script lang="ts" setup>
  import {ref, computed} from 'vue'

  const dismissSecs = 10;
  const dismissCountDown = ref(0);
  const showDismissibleAlert = ref(false);

  const countDownChanged = (countDown) => {
      dismissCountDown.value = countDown
  };

  const showAlert = () => {
    dismissCountDown.value = dismissSecs
  };

  const autoDismissSecs = 5;
  const autoDismissCountDown = ref(0);

  const autoDismissCountDownChanged = (countDown) => {
      autoDismissCountDown.value = countDown
  };

  const showAutoDismissAlert = () => {
    autoDismissCountDown.value = autoDismissSecs
  };

</script>
