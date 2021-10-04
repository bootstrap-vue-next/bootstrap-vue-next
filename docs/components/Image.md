# Image

> Documentation and examples for opting images (via `<b-img>` component) into responsive behavior
> (so they never become larger than their parent elements), optionally adding lightweight styles to
> them — all via props.

BootstrapVue's image components support rounded images, thumbnail styling, alignment, and even the
ability to create blank images with an optional solid background color. Support for lazy loaded
images is available via the `<b-img-lazy>` complimentary component.

## Image src resolving

The `src` prop (and `blank-src` prop of `<b-img-lazy>`), out of the box, works only with absolute or
fully-qualified-domain-name URLs. If you are using project assets as image sources, please refer to
[Component img src resolving](/docs/reference/images) for configuring `vue-loader` to understand
custom component props that specify image sources.

## Styling images

Several props are available for styling the rendered image element. The following sub-sections cover
the various options.

### Responsive images

Images in BootstrapVue can be made responsive with the `fluid` prop (which sets
`max-width: 100%; height: auto;` via CSS classes) so that it scales with the parent element - up to
the maximum native width of the image.

<ClientOnly>
  <b-card>
    <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
</b-card>
```

To make a fluid image that will grow to fill the width of its container, use the `fluid-grow` prop.
Note this may cause blurring on small bitmap images.

<ClientOnly>
  <b-card>
    <h5>Small image with <code>fluid</code>:</h5>
    <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img>
    <h5 class="my-3">Small image with <code>fluid-grow</code>:</h5>
    <b-img src="https://picsum.photos/300/150/?image=41" fluid-grow alt="Fluid-grow image"></b-img>
  </b-card>
</ClientOnly>

```html
<b-card>
  <h5>Small image with <code>fluid</code>:</h5>
  <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img>
  <h5 class="my-3">Small image with <code>fluid-grow</code>:</h5>
  <b-img src="https://picsum.photos/300/150/?image=41" fluid-grow alt="Fluid-grow image"></b-img>
</b-card>
```

Use the `block` prop to force the image to display as a block element rather than the browser
default of inline-block element.

### Image thumbnails

You can use prop `thumbnail` to give an image a rounded light border appearance.

<ClientOnly>
  <b-card class="bg-dark">
    <b-row>
      <b-col>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
      </b-col>
    </b-row>
  </b-card>
</ClientOnly>

```html
<b-card class="bg-dark">
  <b-row>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
    </b-col>
  </b-row>
</b-card>
```

### Rounded corners

You can control which corners are rounded by setting the rounded prop to one of the following
values:

- `true` (or prop present with no value): round all corners
- `false` (or prop not present): no explicit rounding or corners (default)
- `'top'`: round the top corners
- `'end'`: round the right corners
- `'bottom'`: round the bottom corners
- `'start'`: round the left corners
- `'circle'`: make a circle (if square image) or oval (if not square) border
- `'0'`: explicitly turn off rounding of corners

<ClientOnly>
  <b-card>
    <div class="d-flex" style="column-gap: 1%;">
      <b-img v-bind="mainProps" rounded alt="Rounded image"></b-img>
      <b-img v-bind="mainProps" rounded="top" alt="Top-rounded image"></b-img>
      <b-img v-bind="mainProps" rounded="end" alt="Right-rounded image"></b-img>
      <b-img v-bind="mainProps" rounded="bottom" alt="Bottom-rounded image"></b-img>
      <b-img v-bind="mainProps" rounded="start" alt="Left-rounded image"></b-img>
      <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
      <b-img v-bind="mainProps" rounded="0" alt="Not rounded image"></b-img>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <b-card>
    <div class="d-flex" style="column-gap: 1%;">
      <b-img v-bind="mainProps" rounded alt="Rounded image"></b-img>
      <b-img v-bind="mainProps" rounded="top" alt="Top-rounded image"></b-img>
      <b-img v-bind="mainProps" rounded="end" alt="Right-rounded image"></b-img>
      <b-img v-bind="mainProps" rounded="bottom" alt="Bottom-rounded image"></b-img>
      <b-img v-bind="mainProps" rounded="start" alt="Left-rounded image"></b-img>
      <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
      <b-img v-bind="mainProps" rounded="0" alt="Not rounded image"></b-img>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
  const mainProps = {blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}
</script>
```

### Aligning images

Align images with the boolean props `left` (floats left) `right`(floats right), and `center` (auto
left+right margins). You can also center images by placing them in a container that has the class
`text-center`.

**Left an Right aligned (float):**

<ClientOnly>
  <b-card>
    <div class="clearfix">
      <b-img left src="https://picsum.photos/125/125/?image=58" alt="Left image"></b-img>
      <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image"></b-img>
    </div>
  </b-card>
</ClientOnly>

```html
<b-card>
  <div class="clearfix">
    <b-img left src="https://picsum.photos/125/125/?image=58" alt="Left image"></b-img>
    <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image"></b-img>
  </div>
</b-card>
```

**Center aligned (block):**

<ClientOnly>
  <b-card>
    <b-img center src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img>
  </b-card>
</ClientOnly>

```html
<div>
  <b-img center src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img>
</div>
```

Note: `left` takes precedence over `right` which takes precedence over `center`.

## Blank (or solid color) images

`<b-img>` provides built-in support for generating blank images (transparent by default) of any
width and height, by setting the `blank` prop, and specifying `width` and `height` values (in
pixels). You can apply any of the other `<b-img>` props to change the style/behavior of the
generated image.

Use the `blank-color` prop to set the blank image color. The `blank-color`prop can accept any CSS
color value:

- Named colors — i.e. `orange` or `blue`
- Hex colors — i.e. `#FF9E2C`
- RGB and RGBa colors — i.e. `rgb(255, 158, 44)` and `rgba(255, 158, 44, .5)`
- HSL and HSLa colors — i.e. `hsl(32, 100%, 59%)` and `hsla(32, 100%, 59%, .5)`

The default `blank-color` is `transparent`.

<ClientOnly>
  <b-card>
    <div class="d-flex" style="column-gap: 1%;">
      <b-img v-bind="propsTr" alt="Transparent image"></b-img>
      <b-img v-bind="propsTr" blank-color="#777" alt="HEX shorthand color image (#777)"></b-img>
      <b-img v-bind="propsTr" blank-color="red" alt="Named color image (red)"></b-img>
      <b-img v-bind="propsTr" blank-color="black" alt="Named color image (black)"></b-img>
      <b-img v-bind="propsTr" blank-color="#338833" alt="HEX color image"></b-img>
      <b-img v-bind="propsTr" blank-color="rgba(128, 255, 255, 0.5)" alt="RGBa color image"></b-img>
      <b-img v-bind="propsTr" blank-color="#88f" alt="HEX shorthand color (#88f)"></b-img>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <b-card>
    <div class="d-flex" style="column-gap: 1%;">
      <b-img v-bind="propsTr" alt="Transparent image"></b-img>
      <b-img v-bind="propsTr" blank-color="#777" alt="HEX shorthand color image (#777)"></b-img>
      <b-img v-bind="propsTr" blank-color="red" alt="Named color image (red)"></b-img>
      <b-img v-bind="propsTr" blank-color="black" alt="Named color image (black)"></b-img>
      <b-img v-bind="propsTr" blank-color="#338833" alt="HEX color image"></b-img>
      <b-img v-bind="propsTr" blank-color="rgba(128, 255, 255, 0.5)" alt="RGBa color image"></b-img>
      <b-img v-bind="propsTr" blank-color="#88f" alt="HEX shorthand color (#88f)"></b-img>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
  const propsTr = {blank: true, width: 75, height: 75, class: 'm1'}
</script>
```

**Notes:**

- In blank image mode, if only one of width or height is set, the image will be have both width and
  height set to the same value.
- In blank image mode, if width and height are not set, both width and height will internally be set
  to 1.
- The `blank` prop takes precedence over the `src` prop. If you set both and later set `blank` to
  `false` the image specified in `src` will then be displayed.
- Blank images are rendered using SVG image data URLs.
- The `width` and `height` props will also apply the `width` and `height` attributes to the rendered
  `<img>` tag, even if `blank` is not set.

## `srcset` support

`<b-img>` supports the
[`srcset` and `sizes` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset)
on images. The props accept either a string value, or an array of strings (the array of strings will
be converted into a single string separated by commas).

For details on usage of these attributes, refer to
[MDN's Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
guide.

**Notes:**

- If the `blank` prop is set, then `srcset` and `sizes` props are ignored
- IE 11 does not support `srcset` and `sizes`, so ensure you have a value for the `src` prop
- Vue-loader does not support project relative URLs (asset URLs) on the `srcset` attribute. Instead
  use `require(...)` to resolve the individual URL paths. Be cautious of creating a string of data
  URI's longer than supported by the maximum attribute value length of the browser. If your webpack
  config has a limit for the `url-loader` and you want to prevent inline data-urls, you may have to
  overwrite the loader limits: `require('!!url-loader?limit=0!./assets/photo.jpg')`
- Support for `srcset` and `sizes` was added in release `2.1.0`

## ~~Lazy loaded images~~

> ~~Use our complementary `<b-img-lazy>` image component (based on `<b-img>`) to lazy load images as they are scrolled into view (or within `offset` pixels of the viewport).~~

## Component reference

### `<b-img>`

#### Properties

| Property                                               | Type                  | Default       | Description                                                                                                                                                     |
| ------------------------------------------------------ | --------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `alt`                                                  | `String`              |               | Value to set for the `alt` attribute                                                                                                                            |
| `blank`                                                | `Boolean`             | `false`       | Creates a blank/transparent image via an SVG data URI                                                                                                           |
| <span style="white-space:nowrap;">`blank-color`</span> | `String`              | `transparent` | Sets the color of the blank image to the CSS color value specified                                                                                              |
| `block`                                                | `Boolean`             | `false`       | Forces the image to display as a block element rather than the browser default of inline-block element                                                          |
| `center`                                               | `Boolean`             | `false`       | Centers the image horizontally                                                                                                                                  |
| `fluid`                                                | `Boolean`             | `false`       | Makes the image responsive. The image will shrink as needed or grow up the the image's native width                                                             |
| `fluid-grow`                                           | `Boolean`             | `false`       | Similar to the 'fluid' prop, but allows the image to scale up past its native width                                                                             |
| `height`                                               | `Number` or `String`  |               | The value to set on the image's 'height' attribute                                                                                                              |
| `left`                                                 | `Boolean`             | `false`       | Floats the image to the left when set                                                                                                                           |
| `right`                                                | `Boolean`             | `false`       | Floats the image to the right when set                                                                                                                          |
| `rounded`                                              | `Boolean` or `String` | `false`       | When set to 'true', makes the image corners slightly rounded. Can also be used to disable rounded corners or make the image a circle/oval. See docs for details |
| `sizes`                                                | `Array` or `String`   |               | One or more strings separated by commas (or an array of strings), indicating a set of source sizes. Optionally used in combination with the srcset prop         |
| `src`                                                  | `String`              |               | URL to set for the `src` attribute                                                                                                                              |
| `srcset`                                               | `Array` or `String`   |               | One or more strings separated by commas (or an array of strings), indicating possible image sources for the user agent to use                                   |
| `thumbnail`                                            | `Boolean`             | `false`       | Adds a thumbnail border around the image                                                                                                                        |
| `width`                                                | `Number` or `String`  |               | The value to set on the image's 'width' attribute                                                                                                               |

<!-- ------------------------------------------------------------------ -->
<script lang="ts" setup>
  import {ref, computed} from 'vue'

  const mainProps = {blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}
  const propsTr = {blank: true, width: 75, height: 75, class: 'm1'}
  
</script>
