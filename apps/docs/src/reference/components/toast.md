# Toast

Push notifications using BToast and BToast Plugin

Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.

Toasts are intended to be small interruptions to your visitors or users, and therefore should contain minimal, to-the-point, non-interactive content. Please refer to the Accessibility tips section below for important usage information.

## Toasts on demand

Toast Components can be used standalone or part of the toast plugin.

To use the plugin make sure to to include it in your app. This will create a global wide handler to fetch your Toast VM instances.

```js
import {BToastPlugin} from 'bootstrap-vue-next'
app.use(BToastPlugin)
```

If using the plugin, a `<b-container>` must be designated for toasts to be placed in. Specify as root to be used as the default placement for toasts

```html
<b-container :toast="{root: true}" fluid="sm" position="position-fixed"></b-container>
```

We then use the toast composable to grab our root vm to display toasts.

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

```html
<b-container
  :toast="{root: true}"
  fluid="sm"
  position="position-fixed"
  style="top:50px; left : -200px"
></b-container>
<b-button class="" @click="show1">Show Toast</b-button>
<b-button class="ms-2" @click="show2">Show Toast with Body</b-button>

<script lang="ts" setup>
  import {useToast} from 'bootstrap-vue-next'
  let toast = useToast()
  let show1 = () => {
    toast.show({title: 'example title'})
  }

  let show2 = () => {
    toast.show({title: 'example title', body: 'This is a toast'})
  }
</script>
```


  <b-container :toast="{root: true}" fluid="sm" position="position-fixed" style="top:50px; left : 10px" ></b-container>
  <b-card>
  <b-button class="" @click="show1">Show Toast</b-button>
  <b-button class="ms-2" @click="show2">Show Toast with Body</b-button>
  </b-card>



## Variants

Toasts can be displayed as variants thru various helper methods or be set in `ToastOptions.variant`

```html
<b-container
  :toast="{root: true}"
  fluid="sm"
  position="position-fixed"
  style="top:50px; left : -200px"
></b-container>
<b-card>
  <b-button class="" variant="danger" @click="variantshow1">Show Danger</b-button>
  <b-button class="ms-2" variant="info" @click="variantshow2">Show Info</b-button>
  <b-button class="ms-2" variant="warning" @click="variantshow3">Show Warning</b-button>
  <b-button class="ms-2" variant="success" @click="variantshow4">Show Sucess</b-button>
</b-card>

<script lang="ts">
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


  <b-container :toast="{root: true}" fluid="sm" position="position-fixed" style="top:50px; left : 10px" ></b-container>
  <b-card>
  <b-button class=""  variant="danger" @click="variantshow1">Show Danger</b-button>
  <b-button class="ms-2" variant="info" @click="variantshow2">Show Info</b-button>
  <b-button class="ms-2" variant="warning" @click="variantshow3">Show Warning</b-button>
  <b-button class="ms-2" variant="success" @click="variantshow4">Show Sucess</b-button>
  </b-card>




  <ComponentReference></ComponentReference>


<script lang='ts' setup>
  import {ref, computed, inject} from 'vue';
  import {useToast} from 'bootstrap-vue-next';
  let toast = null

  if (!__VUEPRESS_SSR__) {
       toast = inject("toast").useToast()


  let show1 = () => {toast.show({title: 'example title'})};
  let show2 = () => {toast.show({title: 'example title', body: "This is a toast"}, {variant: 'info'})};

  let variantshow1 = () => {toast.show({title: 'Item Deleted'}, {pos: 'bottom-center', variant: 'danger'})};
  let variantshow2 = () => {toast.show({title: 'New Message', body: "This is a toast"}, {pos: 'bottom-right', variant: 'info'})};
  let variantshow3 = () => {toast.show({title: 'Warning for Item', body: "Please check list"},{pos: 'bottom-right', variant: 'warning'})};
  let variantshow4 = () => {toast.show({title: 'Event Created!', body: "Bootstrap Event"},{pos: 'bottom-right', variant: 'success'})};
  }
</script>
