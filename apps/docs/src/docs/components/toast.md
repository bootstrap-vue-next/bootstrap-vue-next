# Toast

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Push notifications to your visitors with a `<b-toast>` and `<b-toaster>`, lightweight components which are easily customizable for generating alert messages.

</div>

Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.

Toasts are intended to be small interruptions to your visitors or users, and therefore should contain minimal, to-the-point, non-interactive content. Please refer to the Accessibility tips section below for important usage information.

## Overview

To encourage extensible and predictable toasts, we recommend providing a header (title) and body. Toast headers use the style `display: flex`, allowing easy alignment of content thanks to Bootstrap's margin and flexbox utility classes.

Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the `backdrop-filter` CSS property, they also attempt to blur the elements under the toast.

## Plugin Usage

The toast plugin allows for global access and handling of toasts for a single `<b-container>` instance.

To use the plugin make sure to include it in your app.

```js
import {BToastPlugin} from 'bootstrap-vue-next'
app.use(BToastPlugin)
```

Then designate a `<b-container>` component using the toast prop.

```vue-html
<b-container :toast="true" fluid="sm" position="position-fixed"></b-container>
```

We then use the toast composable to grab our root toast model for displaying and handling toasts.

```js
//setup function
import {useToast} from 'bootstrap-vue-next'
let toast = useToast()
```

Use `toast.show()` method to generate your toasts. The method accepts the following arguments

- `toast-content`: the content of the toast. Required.
  Toasts with empty content will not be shown.
  - `title` (optional) : string or an array of `VNodes`
  - `body` : string or an array of `VNodes`
- `options`: an optional options object for changing position and delay hidden
  - `autoHide` (optional) : true/false - by default is true
  - `noCloseButton` (optional) : true/false - by default is false
  - `pos`: 'top-left', 'top-center', 'top-right', 'middle-left', 'middle-center', 'middle-right', 'bottom-left', 'bottom-center', 'bottom-right'
  - `delay`: number
  - `variant` : string ColorVariant

<HighlightCard>
<b-button class="" @click="show1">Show Toast</b-button>
<b-button class="ms-2" @click="show2">Show Toast with Body</b-button>
  <template #html>

```vue
<b-button class="" @click="show1">Show Toast</b-button>
<b-button class="ms-2" @click="show2">Show Toast with Body</b-button>
<script setup lang="ts">
let show1 = () => {
  toast.show({body: 'example title'}, {pos: 'bottom-right'})
}
let show2 = () => {
  toast.show(
    {title: 'example title', body: 'This is a toast'},
    {variant: 'info', pos: 'bottom-right'}
  )
}
</script>
```

  </template>
</HighlightCard>

## Variants

Toasts can be displayed as variants thru various helper methods or be set in `ToastOptions.variant`

<HighlightCard>
  <b-button class="" variant="danger" @click="variantshow1">Show Danger</b-button>
  <b-button class="ms-2" variant="info" @click="variantshow2">Show Info</b-button>
  <b-button class="ms-2" variant="warning" @click="variantshow3">Show Warning</b-button>
  <b-button class="ms-2" variant="success" @click="variantshow4">Show Sucess</b-button>
  <template #html>

```vue
<b-button class="" variant="danger" @click="variantshow1">Show Danger</b-button>
<b-button class="ms-2" variant="info" @click="variantshow2">Show Info</b-button>
<b-button class="ms-2" variant="warning" @click="variantshow3">Show Warning</b-button>
<b-button class="ms-2" variant="success" @click="variantshow4">Show Sucess</b-button>
<script setup lang="ts">
import {useToast} from 'bootstrap-vue-next'
let toast = useToast()
let variantshow1 = () => {
  toast.show({title: 'Item Deleted'}, {pos: 'bottom-center', variant: 'danger'})
}
let variantshow2 = () => {
  toast.show(
    {title: 'New Message', body: 'This is a toast'},
    {pos: 'bottom-right', variant: 'info'}
  )
}
let variantshow3 = () => {
  toast.show(
    {title: 'Warning for Item', body: 'Please check list'},
    {pos: 'bottom-right', variant: 'warning'}
  )
}
let variantshow4 = () => {
  toast.show(
    {title: 'Event Created!', body: 'Bootstrap Event'},
    {pos: 'bottom-right', variant: 'success'}
  )
}
</script>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/toast.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {BButtonGroup, BButton, BToast, useToast} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'

let toast = useToast()


  let show1 = () => {toast.show({title: 'example title'}, {pos:'bottom-right'})};
  let show2 = () => {toast.show({title: 'example title', body: "This is a toast"}, {variant: 'info', pos:'bottom-right'})};

    let variantshow1 = () => {
    toast.show({title: 'Item Deleted'}, {pos: 'bottom-center', variant: 'danger'})
  }
  let variantshow2 = () => {
    toast.show(
      {title: 'New Message', body: 'This is a toast'},
      {pos: 'bottom-right', variant: 'info'}
    )
  }
  let variantshow3 = () => {
    toast.show(
      {title: 'Warning for Item', body: 'Please check list'},
      {pos: 'bottom-right', variant: 'warning'}
    )
  }
  let variantshow4 = () => {
    toast.show(
      {title: 'Event Created!', body: 'Bootstrap Event'},
      {pos: 'bottom-right', variant: 'success'}
    )
  }
</script>
