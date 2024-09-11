# Overlay

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">

BootstrapVueNext's custom `BOverlay` component is used to _visually obscure_ a particular element or component and its content. It signals to the user of a state change within the element or component and can be used for creating loaders, warnings/alerts, prompts, and more.

</div>

## Overview

`BOverlay` can be used to obscure almost anything. [Example use cases](#use-case-examples) would
be forms, tables, delete confirmation dialogs, or anywhere you need to signal that the application
is busy performing a background task, to signal that a certain component is unavailable, or to
provide additional context to the end user.

`BOverlay` can be used to overlay (wrap) an element or component (the default behaviour), or can
be placed as a descendant of a `position: relative` element
([non-wrapping mode](#non-wrapping-mode)).

The overlay visibility is controlled via the `show` prop. By default, the overlay is _not_ shown.

<BAlert variant="danger" :model-value="true">
  Note that this component only <em>visually obscures</em> its content (or the page). Refer to the
  <a href="#accessibility" class="alert-link">Accessibility section</a> below for additional
  accessibility details and concerns.
</BAlert>

**Default wrapping mode example:**

<HighlightCard>
  <BOverlay :show="showOverlayEx1" rounded="sm">
    <BCard title="Card with overlay" :aria-hidden="showOverlayEx1 ? 'true' : null">
      <BCardText>Laborum consequat non elit enim exercitation cillum.</BCardText>
      <BCardText>Click the button to toggle the overlay:</BCardText>
      <BButton :disabled="showOverlayEx1" variant="primary" @click="showOverlayEx1 = true">
        Show overlay
      </BButton>
    </BCard>
  </BOverlay>
  <BButton class="mt-3" @click="showOverlayEx1 = !showOverlayEx1">Toggle overlay</BButton>
  <template #html>

```vue
<template>
  <BOverlay :show="showOverlayEx1" rounded="sm">
    <BCard title="Card with overlay" :aria-hidden="showOverlayEx1 ? 'true' : null">
      <BCardText>Laborum consequat non elit enim exercitation cillum.</BCardText>
      <BCardText>Click the button to toggle the overlay:</BCardText>
      <BButton :disabled="showOverlayEx1" variant="primary" @click="showOverlayEx1 = true">
        Show overlay
      </BButton>
    </BCard>
  </BOverlay>

  <BButton @click="showOverlayEx1 = !showOverlayEx1">Toggle overlay</BButton>
</template>

<script setup lang="ts">
const showOverlayEx1 = ref(false)
</script>
```

  </template>
</HighlightCard>

## Options

There are many options available for styling the overlay, and for providing custom content within
the overlay.

### Overlay backdrop color

You can control the backdrop background color via the `variant` prop. The variant is translated into
one of Bootstrap's
[background variant utility classes](/docs/reference/color-variants#background-and-border-variants).
Control the opacity of the backdrop via the `opacity` prop (opacity values can range from `0` to
`1`). And background blurring can be controlled via the `blur` prop.

<HighlightCard>
  <div class="row">
    <div class="col-lg-6" aria-controls="overlay-background">
      <label for="bg-variant">Variant</label>
      <BFormSelect id="bg-variant" v-model="variant" :options="variants" />
      <label for="bg-opacity">Opacity</label>
      <div class="d-inline">
        <BFormInput
          id="bg-opacity"
          v-model="opacity"
          type="range"
          number
          min="0"
          max="1"
          step="0.01"
          class="d-inline"
        />
      </div>
      {{ opacity.toFixed(2) }}
      <div>
        <label for="bg-blur">Blur</label>
        <BFormSelect id="bg-blur" v-model="blur" :options="blurs" />
      </div>
    </div>
    <BCol lg="6">
      <BOverlay
        id="overlay-background"
        show
        :variant="variant"
        :opacity="opacity"
        :blur="blur"
        rounded="sm"
        >
        <BCard title="Card with overlay" aria-hidden="true">
          <BCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </BCardText>
          <BButton disabled variant="primary">Button</BButton>
        </BCard>
      </BOverlay>
    </BCol>
  </div>
  <template #html>

```vue
<template>
  <div class="row">
    <div class="col-lg-6" aria-controls="overlay-background">
      <label for="bg-variant">Variant</label>
      <BFormSelect id="bg-variant" v-model="variant" :options="variants" />

      <label for="bg-opacity">Opacity</label>
      <div class="d-inline">
        <BFormInput
          id="bg-opacity"
          v-model="opacity"
          type="range"
          number
          min="0"
          max="1"
          step="0.01"
          class="d-inline"
        />
      </div>

      {{ opacity.toFixed(2) }}

      <div>
        <label for="bg-blur">Blur</label>
        <BFormSelect id="bg-blur" v-model="blur" :options="blurs" />
      </div>
    </div>

    <BCol lg="6">
      <BOverlay
        id="overlay-background"
        show
        :variant="variant"
        :opacity="opacity"
        :blur="blur"
        rounded="sm"
      >
        <BCard title="Card with overlay" aria-hidden="true">
          <BCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </BCardText>
          <BButton disabled variant="primary">Button</BButton>
        </BCard>
      </BOverlay>
    </BCol>
  </div>
</template>

<script setup lang="ts">
const variants = [
  'transparent',
  'white',
  'light',
  'dark',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]
const blurs = [{text: 'None', value: ''}, '1px', '2px', '5px', '0.5em', '1rem']

const variant = ref('light')
const opacity = ref(0.85)
const blur = ref('2px')
</script>
```

  </template>
</HighlightCard>

As an alternative to the `variant` prop, you can specify a CSS color string value via the `bg-color`
prop. When a value is provided for `bg-color`, the `variant` prop value is ignored.

**Notes:**

- Background blurring is not available on some browsers (e.g. IE 11).
- Blurring requires that the opacity level be relatively high for the effect to be visible.

### Fade transition

By default, the overlay uses Bootstrap's fade transition when showing or hiding. You can disable the
fade transition via adding the `no-fade` prop to `BOverlay`.

### Default spinner styling

The default overlay content is a [`BSpinner`](/docs/components/spinner) of type `'border'`. You
can control the appearance of the spinner via the following props:

- `spinner-type`: Currently supported values are `'border'` (the default) or `'grow'`
- `spinner-variant`: Variant theme color for the spinner. Default is `null` which inherits the
  current font color
- `spinner-small`: Set to `true` to render a small size spinner

<HighlightCard>
  <BOverlay
    show
    spinner-variant="primary"
    spinner-type="grow"
    spinner-small
    rounded="sm"
    style="max-width: 320px;"
  >
    <BCard title="Card with spinner style" aria-hidden="true">
      <BCardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </BCardText>
      <BButton disabled variant="primary">Button</BButton>
    </BCard>
  </BOverlay>
  <template #html>

```vue-html
<BOverlay
  show
  spinner-variant="primary"
  spinner-type="grow"
  spinner-small
  rounded="sm"
  style="max-width: 320px;"
>
  <BCard title="Card with spinner style" aria-hidden="true">
    <BCardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </BCardText>
    <BButton disabled variant="primary">Button</BButton>
  </BCard>
</BOverlay>
```

  </template>
</HighlightCard>

### Overlay corner rounding

By default, the overlay backdrop has square corners. If the content you are wrapping has rounded
corners, you can use the `rounded` prop to apply rounding to the overlay's corners to match the
obscured content's rounded corners.

Possible values are:

- `true` (or the empty string `''`) to apply default (medium) rounding
- `false` (the default) applies no rounding to the backdrop overlay
- `'sm'` for small rounded corners
- `'lg'` for large rounded corners
- `'pill'` for pill style rounded corners
- `'circle'` for circular (or oval) rounding
- `'top'` for rounding only the top two corners
- `'bottom'` for rounding only the bottom two corners
- `'left'` for rounding only the two left corners
- `'right'` for rounding only the two right corners

<HighlightCard>
  <BButton @click="showRoundedEx = !showRoundedEx">Toggle overlay</BButton>
  <BRow class="text-center mt-3">
    <BCol md="6">
      <p>With rounding</p>
      <BOverlay :show="showRoundedEx" class="d-inline-block" rounded="circle">
        <BImg thumbnail rounded="circle" fluid src="https://picsum.photos/200/200/?image=54" alt="Image 1" />
      </BOverlay>
    </BCol>
    <BCol md="6">
      <p>Without rounding</p>
      <BOverlay :show="showRoundedEx" class="d-inline-block">
        <BImg thumbnail rounded="circle" fluid src="https://picsum.photos/200/200/?image=54" alt="Image 1" />
      </BOverlay>
    </BCol>
  </BRow>
  <template #html>

```vue
<template>
  <BButton @click="showRoundedEx = !showRoundedEx">Toggle overlay</BButton>

  <BRow class="text-center mt-3">
    <BCol md="6">
      <p>With rounding</p>
      <BOverlay :show="showRoundedEx" class="d-inline-block" rounded="circle">
        <BImg
          thumbnail
          rounded="circle"
          fluid
          src="https://picsum.photos/200/200/?image=54"
          alt="Image 1"
        />
      </BOverlay>
    </BCol>

    <BCol md="6">
      <p>Without rounding</p>
      <BOverlay :show="showRoundedEx" class="d-inline-block">
        <BImg
          thumbnail
          rounded="circle"
          fluid
          src="https://picsum.photos/200/200/?image=54"
          alt="Image 1"
        />
      </BOverlay>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
const showRoundedEx = ref(false)
</script>
```

  </template>
</HighlightCard>

### Custom overlay content

Place custom content in the overlay (replacing the default spinner) via the optionally scoped slot
`overlay`.

<HighlightCard>
  <BOverlay :show="showCustomEx" rounded="sm" @shown="onShown" @hidden="onHidden">
    <BCard title="Card with custom overlay content" :aria-hidden="showCustomEx ? 'true' : null">
      <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      <BCardText>Click the button to toggle the overlay:</BCardText>
      <BButton :disabled="showCustomEx" variant="primary" @click="showCustomEx = true">
        Show overlay
      </BButton>
    </BCard>
    <template #overlay>
      <div class="text-center">
        <p id="cancel-label">Please wait...</p>
        <BButton
          variant="outline-danger"
          size="sm"
          aria-describedby="cancel-label"
          @click="showCustomEx = false"
        >
          Cancel
        </BButton>
      </div>
    </template>
  </BOverlay>
  <template #html>

```vue
<template>
  <BOverlay :show="showCustomEx" rounded="sm" @shown="onShown" @hidden="onHidden">
    <BCard title="Card with custom overlay content" :aria-hidden="showCustomEx ? 'true' : null">
      <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      <BCardText>Click the button to toggle the overlay:</BCardText>
      <BButton :disabled="showCustomEx" variant="primary" @click="showCustomEx = true">
        Show overlay
      </BButton>
    </BCard>
    <template #overlay>
      <div class="text-center">
        <p id="cancel-label">Please wait...</p>
        <BButton
          variant="outline-danger"
          size="sm"
          aria-describedby="cancel-label"
          @click="showCustomEx = false"
        >
          Cancel
        </BButton>
      </div>
    </template>
  </BOverlay>
</template>

<script setup lang="ts">
const showCustomEx = ref(false)

const onShown = () => {
  console.log('shown')
}
const onHidden = () => {
  console.log('hidden')
}
</script>
```

  </template>
</HighlightCard>

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

<HighlightCard>
  <BOverlay no-center show rounded="sm">
    <template #overlay>
      foo
    </template>
    <BCard title="Card with no-center overlay" aria-hidden="true">
      <BCardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </BCardText>
      <BButton disabled variant="primary">Button</BButton>
    </BCard>
  </BOverlay>
  <template #html>

```vue-html
<BOverlay no-center show rounded="sm">
  <template #overlay>
    foo
  </template>
  <BCard title="Card with no-center overlay" aria-hidden="true">
    <BCardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </BCardText>
    <BButton disabled variant="primary">Button</BButton>
  </BCard>
</BOverlay>
```

  </template>
</HighlightCard>

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

<HighlightCard>
  <div class="position-relative p-4 bg-info">
    <p class="text-light fw-bold">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <BCard title="Card with parent overlay">
      <BCardText>Laborum consequat non elit enim exercitation cillum.</BCardText>
      <BCardText>Click the button to toggle the overlay:</BCardText>
      <BButton :disabled="showNoWrapEx" variant="primary" @click="showNoWrapEx = true">
        Show overlay
      </BButton>
    </BCard>
    <p class="text-light fw-bold mb-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <BOverlay :show="showNoWrapEx" no-wrap>
    </BOverlay>
  </div>
  <BButton class="mt-3" @click="showNoWrapEx = !showNoWrapEx">Toggle overlay</BButton>
  <template #html>

```vue
<template>
  <div class="position-relative p-4 bg-info">
    <p class="text-light fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <BCard title="Card with parent overlay">
      <BCardText>Laborum consequat non elit enim exercitation cillum.</BCardText>
      <BCardText>Click the button to toggle the overlay:</BCardText>
      <BButton :disabled="showNoWrapEx" variant="primary" @click="showNoWrapEx = true">
        Show overlay
      </BButton>
    </BCard>
    <p class="text-light fw-bold mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <BOverlay :show="showNoWrapEx" no-wrap> </BOverlay>
  </div>
  <BButton class="mt-3" @click="showNoWrapEx = !showNoWrapEx">Toggle overlay</BButton>
</template>

<script setup lang="ts">
const showNoWrapEx = ref(false)
</script>
```

  </template>
</HighlightCard>

Note that some of Bootstrap v5's component styles have relative positioning defined (e.g. cards,
cols, etc.). You may need to adjust the placement of `BOverlay` in your markup.

For example, `BCard` has relative positioning, so you can place the `<BOverlay no-wrap>` as a
descendant of `BCard`:

<HighlightCard>
  <BCard header="Card header" footer="Card footer">
    <BImg
      thumbnail
      rounded="circle"
      src="https://picsum.photos/72/72/?image=58"
      alt="Image"
      class="d-inline"
    />
    <p class=" d-inline align-top mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <BOverlay :show="showNoWrapEx2" no-wrap />
  </BCard>
  <BButton @click="showNoWrapEx2 = !showNoWrapEx2" class="mt-3">Toggle overlay</BButton>
  <template #html>

```vue
<template>
  <BCard header="Card header" footer="Card footer">
    <BImg
      thumbnail
      rounded="circle"
      src="https://picsum.photos/72/72/?image=58"
      alt="Image"
      class="d-inline"
    />
    <p class=" d-inline align-top mb-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <BOverlay :show="showNoWrapEx2" no-wrap />
  </BCard>
  <BButton @click="showNoWrapEx2 = !showNoWrapEx2" class="mt-3">Toggle overlay</BButton>
</template>

<script setup lang="ts">
const showNoWrapEx2 = ref(false)
</script>
```

  </template>
</HighlightCard>

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
or page, you must ensure that all internative page elements (other than the content of the overlay)
have been disabled and are _not_ in the document tab sequence.

## Use case examples

Here are just a few examples of common use cases of `BOverlay`. In all cases, we disable any
interactive elements in the obscured area to prevent reachability via keyboard navigation (i.e.
<kbd>Tab</kbd> key) or screen reader access.

Please refer to the [Accessibility section](#accessibility) for additional details and concerns.

### Loading button

Easily create a loading button:

<HighlightCard>
  <BOverlay
    :show="loadingBuzy"
    rounded
    opacity="0.6"
    spinner-small
    spinner-variant="primary"
    class="d-inline-block"
    @hidden="onBuzyHidden"
  >
    <BButton
      ref="buzyButton"
      :disabled="loadingBuzy"
      variant="primary"
      @click="setBuzyClick"
    >
      Do something
    </BButton>
  </BOverlay>
  <template #html>

```vue
<template>
  <BOverlay
    :show="loadingBuzy"
    rounded
    opacity="0.6"
    spinner-small
    spinner-variant="primary"
    class="d-inline-block"
    @hidden="onBuzyHidden"
  >
    <BButton ref="buzyButton" :disabled="loadingBuzy" variant="primary" @click="setBuzyClick">
      Do something
    </BButton>
  </BOverlay>
</template>

<script setup lang="ts">
let timeout = null

const loadingBuzy = ref(false)
const buzyButton = ref<HTMLElement | null>(null)

const clearTimer = () => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
}
const setTimer = (callback) => {
  clearTimer()
  timeout = setTimeout(() => {
    clearTimer()
    callback()
  }, 5000)
}
const setBuzyClick = () => {
  loadingBuzy.value = true
  // Simulate an async request
  setTimer(() => {
    loadingBuzy.value = false
  })
}

const onBuzyHidden = () => {
  // Return focus to the button once hidden
  //buzyButton.focus()
}
</script>
```

  </template>
</HighlightCard>

### Form confirmation prompt and upload status

This example is a bit more complex, but shows the use of `no-wrap`, and using the `overlay` slot to
present the user with a prompt dialog, and once confirmed it shows an uploading status indicator.
This example also demonstrates additional accessibility markup.

<HighlightCard>
  <BForm class="position-relative p-3" @submit.prevent="onFormSubmit">
    <div class="row">
      <label class="col-lg-2" label-for="form-name">Name</label>
      <BFormInput id="form-name" class="col" :disabled="formbusy" />
    </div>
    <div class="row mt-2">
      <label class="col-lg-2" label-for="form-mail">Email</label>
      <BFormInput id="form-email" class="col" type="email" :disabled="formbusy" />
    </div>
    <div class="d-flex justify-content-center mt-2">
        <BButton ref="formsubmit" type="submit" :disabled="formbusy">Submit</BButton>
    </div>
    <BOverlay :show="formbusy" no-wrap @shown="onFormOverlayShown" @hidden="onFormOverlayHidden">
      <template #overlay>
        <div v-if="processing" class="text-center p-4 bg-primary text-light rounded">
          <div class="mb-3">Processing...</div>
          <BProgress
            min="1"
            max="20"
            :value="processingcounter"
            variant="success"
            height="3px"
            class="mx-n4 rounded-0"
          />
        </div>
        <div
          v-else
          ref="formdialog"
          tabindex="-1"
          role="dialog"
          aria-modal="false"
          aria-labelledby="form-confirm-label"
          class="text-center p-3"
        >
          <p><strong id="form-confirm-label">Are you sure?</strong></p>
          <div class="d-flex"  style="column-gap: 5%;">
            <BButton variant="outline-danger" class="me-3" @click="onFormCancel">
              Cancel
            </BButton>
            <BButton variant="outline-success" @click="onFormOK">OK</BButton>
          </div>
        </div>
      </template>
    </BOverlay>
  </BForm>
  <template #html>

```vue
<template>
  <BForm class="position-relative p-3" @submit.prevent="onFormSubmit">
    <div class="row">
      <label class="col-lg-2" label-for="form-name">Name</label>
      <BFormInput id="form-name" class="col" :disabled="formbusy" />
    </div>

    <div class="row mt-2">
      <label class="col-lg-2" label-for="form-mail">Email</label>
      <BFormInput id="form-email" class="col" type="email" :disabled="formbusy" />
    </div>

    <div class="d-flex justify-content-center mt-2">
      <BButton ref="formsubmit" type="submit" :disabled="formbusy">Submit</BButton>
    </div>

    <BOverlay :show="formbusy" no-wrap @shown="onFormOverlayShown" @hidden="onFormOverlayHidden">
      <template #overlay>
        <div v-if="processing" class="text-center p-4 bg-primary text-light rounded">
          <div class="mb-3">Processing...</div>
          <BProgress
            min="1"
            max="20"
            :value="processingcounter"
            variant="success"
            height="3px"
            class="mx-n4 rounded-0"
          />
        </div>
        <div
          v-else
          ref="formdialog"
          tabindex="-1"
          role="dialog"
          aria-modal="false"
          aria-labelledby="form-confirm-label"
          class="text-center p-3"
        >
          <p><strong id="form-confirm-label">Are you sure?</strong></p>
          <div class="d-flex" style="column-gap: 5%;">
            <BButton variant="outline-danger" class="me-3" @click="onFormCancel"> Cancel </BButton>
            <BButton variant="outline-success" @click="onFormOK">OK</BButton>
          </div>
        </div>
      </template>
    </BOverlay>
  </BForm>
</template>

<script setup lang="ts">
const formbusy = ref(false)
const processing = ref(false)
const processingcounter = ref(1)
const formdialog = ref<HTMLElement | null>(null)
let processingInterval = null

const clearProcessingInterval = () => {
  if (processingInterval) {
    clearInterval(processingInterval)
    processingInterval = null
  }
}

const onBuzyHidden = () => {
  // Focus the dialog prompt
  //formdialog.focus()
}

const onFormOverlayHidden = () => {
  // In this case, we return focus to the submit button
  // You may need to alter this based on your application requirements
}

const onFormSubmit = () => {
  processing.value = false
  formbusy.value = true
}

const onFormCancel = () => {
  formbusy.value = false
}

const onFormOK = () => {
  processingcounter.value = 1
  processing.value = true
  clearProcessingInterval()
  processingInterval = setInterval(() => {
    if (processingcounter.value < 20) {
      processingcounter.value++
    } else {
      clearProcessingInterval()
      nextTick(() => {
        formbusy.value = false
        processing.value = false
      })
    }
  }, 350)
}
</script>
```

  </template>
</HighlightCard>

### Using in `BModal`

The modal body has `position: relative;` set, so when using `<BOverlay no-wrap ...>` in the modal
body only the modal body will be obscured. If you wish to obscure the entire modal (including the
header and footer), you will need to set the `BModal` prop `body-class` to `position-static`, and
also set the `rounded` prop on `BOverlay`.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/overlay.data'
import ComponentReference from '../../components/ComponentReference.vue'
import ComponentSidebar from '../../components/ComponentSidebar.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BForm, BProgress, BRow, BImg, BFormInput, BFormSelect, BOverlay, BCol, BButton, BCard, BCardBody, BCardText, BAlert} from 'bootstrap-vue-next'
import {ref, nextTick} from 'vue';

const showOverlayEx1 = ref(false)
const showRoundedEx = ref(false)

const variant = ref('light')
const opacity = ref(0.85)
const blur = ref('2px')
const variants = [
  'transparent',
  'white',
  'light',
  'dark',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]
const blurs = [
  { text: 'None', value: '' },
  '1px',
  '2px',
  '5px',
  '0.5em',
  '1rem'
]

const showCustomEx = ref(false)

const onShown = () => {
  console.log('shown')
}
const onHidden = () => {
  console.log('hidden')
}

const showNoWrapEx = ref(false)
const showNoWrapEx2 = ref(false)

const loadingBuzy = ref(false)
const buzyButton = ref<HTMLElement | null>(null)
let timeout = null;

const clearTimer = () => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
}
const setTimer = (callback) => {
  clearTimer()
  timeout = setTimeout(() => {
    clearTimer()
    callback()
  }, 5000)
}
const setBuzyClick = () => {
  loadingBuzy.value = true
  // Simulate an async request
  setTimer(() => {
    loadingBuzy.value = false
  })
}

const onFormOverlayShown = () => {
  // Return focus to the button once hidden
  //buzyButton.focus()
}

const formbusy = ref(false)
const processing = ref(false)
const processingcounter = ref(1)
const formdialog = ref<HTMLElement | null>(null)
let processingInterval = null;

const clearProcessingInterval = () => {
  if (processingInterval) {
    clearInterval(processingInterval)
    processingInterval = null
  }
}

const onBuzyHidden = () => {
  // Focus the dialog prompt
  //formdialog.focus()
}

const onFormOverlayHidden = () => {
// In this case, we return focus to the submit button
// You may need to alter this based on your application requirements
}

const onFormSubmit = () => {
  processing.value = false
  formbusy.value = true
}

const onFormCancel = () => {
  formbusy.value = false
}

const onFormOK = () => {
  processingcounter.value = 1
  processing.value = true
  clearProcessingInterval()
  processingInterval = setInterval(() => {
    if(processingcounter.value < 20) {
      processingcounter.value++
    } else {
      clearProcessingInterval()
      nextTick(() => {
        formbusy.value = false
        processing.value = false
      })
    }
  }, 350)
}
</script>
