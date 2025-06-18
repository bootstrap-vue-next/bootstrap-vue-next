# Image

<PageHeader>

Documentation and examples for opting images (via `BImg` component) into responsive behavior (so they never become larger than their parent elements), optionally adding lightweight styles to them — all via props.

</PageHeader>

BootstrapVueNext's image components support rounded images, thumbnail styling, alignment, and even the
ability to create blank images with an optional solid background color. Support for lazy loaded
images is available via the `lazy` prop.

## Image src resolving

The `src` prop and `blank-src` prop, out of the box, works only with absolute or fully-qualified-domain-name URLs.
See the [Image Support](/docs/reference/images) referece page for more details.

## Styling images

Several props are available for styling the rendered image element. The following sub-sections cover
the various options.

### Responsive images

Images in BootstrapVueNext can be made responsive with the `fluid` prop (which sets
`max-width: 100%; height: auto;` via CSS classes) so that it scales with the parent element - up to
the maximum native width of the image.

<<< DEMO ./demo/ImageResponsive.vue#template{vue-html}

To make a fluid image that will grow to fill the width of its container, use the `fluid-grow` prop.
Note this may cause blurring on small bitmap images.

<<< DEMO ./demo/ImageFluid.vue#template{vue-html}

Use the `block` prop to force the image to display as a block element rather than the browser
default of inline-block element.

### Image thumbnails

You can use prop `thumbnail` to give an image a rounded light border appearance.

<<< DEMO ./demo/ImageThumbnail.vue#template{vue-html}

### Rounded corners

`BImg` renders without rounding by default. You can change the rounding by setting the prop
`rounded` to any of the values of [`RadiusElement`](/docs/types#radiuselement).
When set to `true` (or the empty string `''`), it uses the Bootstrap default of medium rounding.
When set to `circle`, it uses a border radius of 50%, resulting in a circle.
Rounding specific edges is accomplished via the `rounded-top`, `rounded-bottom`, `rounded-start` and
`rounded-end` props. See the [migration guide](/docs/migration-guide#BAvatar) for differences
from `bootstrap-vue`

<<< DEMO ./demo/ImageRounded.vue

### Aligning images

Align images with the boolean props `left` (floats left) `right`(floats right), and `center` (auto
left+right margins). You can also center images by placing them in a container that has the class
`text-center`.

**Left and right aligned: (float)**

<<< DEMO ./demo/ImageLeftRight.vue#template{vue-html}

**Center aligned: (block)**

<<< DEMO ./demo/ImageCenter.vue#template{vue-html}

Note: `left` takes precedence over `right` which takes precedence over `center`.

## Blank (or solid color) images

`BImg` provides built-in support for generating blank images (transparent by default) of any
width and height, by setting the `blank` prop, and specifying `width` and `height` values (in
pixels). You can apply any of the other `BImg` props to change the style/behavior of the
generated image.

Use the `blank-color` prop to set the blank image color. The `blank-color`prop can accept any CSS
color value:

- Named colors — i.e. `orange` or `blue`
- Hex colors — i.e. `#FF9E2C`
- RGB and RGBa colors — i.e. `rgb(255, 158, 44)` and `rgba(255, 158, 44, .5)`
- HSL and HSLa colors — i.e. `hsl(32, 100%, 59%)` and `hsla(32, 100%, 59%, .5)`

The default `blank-color` is `transparent`.

<<< DEMO ./demo/ImageBlank.vue

**Notes:**

- In blank image mode, if only one of width or height is set, the image will have both width and
  height set to the same value
- In blank image mode, if width and height are not set, both width and height will internally be set
  to 1
- The `blank` prop takes precedence over the `src` prop. If you set both and later set `blank` to
  `false` the image specified in `src` will then be displayed
- Blank images are rendered using SVG image data URLs
- The `width` and `height` props will also apply the `width` and `height` attributes to the rendered
  `<img>` tag, even if `blank` is not set

## `srcset` support

`BImg` supports the
[`srcset` and `sizes` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset)
on images. The props accept either a string value, or an array of strings (the array of strings will
be converted into a single string separated by commas).

For details on usage of these attributes, refer to
[MDN's Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
guide.

**Notes:**

- If the `blank` prop is set, then `srcset` and `sizes` props are ignored
- IE 11 does not support `srcset` and `sizes`, so ensure you have a value for the `src` prop
- Vue-loader does not support project relative URLs (asset URLs) on the `srcset` attribute; instead
  use `require(...)` to resolve the individual URL paths. Be cautious of creating a string of data
  URI's longer than supported by the maximum attribute value length of the browser. If your webpack
  config has a limit for the `url-loader` and you want to prevent inline data-urls, you may have to
  overwrite the loader limits: `require('!!url-loader?limit=0!./assets/photo.jpg')`

## Lazy loaded images

Lazy loaded images are actived through the `lazy` prop. Eventually, the component will be expanded to include placeholder slots, but are not available at this time. See the [migration guide](/docs/migration-guide#bimg) for details.

We implement this `lazy` prop using the native `loading` attribute. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading) for details including how this effect how the native [`load` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) works.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/image.data'
</script>
