# Avatar

<div class="lead mb-5">

Avatars are a custom component, and are typically used to display a user profile as a
picture, an icon, or short text. `<b-avatar>` provides several props for customizing its
appearance such as color variant and roundness, and optionally supports acting as a button, link
or ~~[router link](/docs/reference/router-links)~~.

</div>

## Overview

Avatars are lightweight components, which render inline by default, so that they are vertically
centered beside any adjoining plain text. They also can be used as children of other components.

<HighlightCard>
  <p>Using stand-alone:</p>
  <div class="d-flex mb-4" style="column-gap: 1%;">
    <b-avatar></b-avatar>
    <b-avatar variant="primary" text="BV"></b-avatar>
    <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar variant="success" icon="people-fill"></b-avatar>
  </div>
  <p>Using in components (list group) example:</p>
  <b-list-group style="max-width: 300px;">
    <b-list-group-item class="d-flex align-items-center">
      <b-avatar class="mx-3"></b-avatar>
      <span class="me-auto">J. Circlehead</span>
      <b-badge>5</b-badge>
    </b-list-group-item>
    <b-list-group-item class="d-flex align-items-center">
      <b-avatar variant="primary" text="BV" class="mx-3"></b-avatar>
      <span class="me-auto">BootstrapVueNext</span>
      <b-badge>12</b-badge>
    </b-list-group-item>
    <b-list-group-item class="d-flex align-items-center">
      <b-avatar variant="info" src="https://placekitten.com/300/300" class="mx-3"></b-avatar>
      <span class="me-auto">Super Kitty</span>
      <b-badge>9</b-badge>
    </b-list-group-item>
    <b-list-group-item class="d-flex align-items-center">
      <b-avatar variant="success" icon="people-fill" class="mx-3"></b-avatar>
      <span class="me-auto">ACME group</span>
      <b-badge>7</b-badge>
    </b-list-group-item>
  </b-list-group>
  <template #html>

```vue-html
<p>Using stand-alone:</p>
<b-avatar></b-avatar>
<b-avatar variant="primary" text="BV"></b-avatar>
<b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
<b-avatar variant="success" icon="people-fill"></b-avatar>
<p>Using in components (list group) example:</p>
<b-list-group style="max-width: 300px;">
  <b-list-group-item class="d-flex align-items-center">
    <b-avatar class="mx-3"></b-avatar>
    <span class="me-auto">J. Circlehead</span>
    <b-badge>5</b-badge>
  </b-list-group-item>
  <b-list-group-item class="d-flex align-items-center">
    <b-avatar variant="primary" text="BV" class="mx-3"></b-avatar>
    <span class="me-auto">BootstrapVueNext</span>
    <b-badge>12</b-badge>
  </b-list-group-item>
  <b-list-group-item class="d-flex align-items-center">
    <b-avatar variant="info" src="https://placekitten.com/300/300" class="mx-3"></b-avatar>
    <span class="me-auto">Super Kitty</span>
    <b-badge>9</b-badge>
  </b-list-group-item>
  <b-list-group-item class="d-flex align-items-center">
    <b-avatar variant="success" icon="people-fill" class="mx-3"></b-avatar>
    <span class="me-auto">ACME group</span>
    <b-badge>7</b-badge>
  </b-list-group-item>
</b-list-group>
```

  </template>
</HighlightCard>

## Avatar types

The avatar content can be either an image, an icon, or short text string. Avatar content defaults
to the [`'person-fill'` icon](/docs/icons) when no other content is specified.

You can also supply custom content via the default slot, although you may need to apply additional
styling on the content.

### Image content

Use the `src` prop to specify a URL of an image to use as the avatar content. The image should have
an aspect ratio of `1:1` (meaning the width and height should be equal), otherwise image aspect
distortion will occur. The image will be scaled up or down to fit within the avatar's bounding box.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <b-avatar src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
  </div>
  <template #html>

```vue-html
<b-avatar src="https://placekitten.com/300/300"></b-avatar>
<b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
```

  </template>
</HighlightCard>

**Notes:**

- When using a module bundler and project relative image URLs, please refer to the
  [Component img src resolving](/docs/reference/images) reference section for additional details.
- The `src` prop takes precedence over the `icon` and `text` props.
- <span class="badge badge-secondary">2.11.0+</span> If the image fails to load, the avatar will
  fall back to the value of the `icon` or `text` props. If neither the `icon` or `text` props are
  provided, then the default avatar icon will be shown. Also, when the image fails to load, the
  `img-error` event will be emitted.
- [Variant colors](#variants) when using images not normally visible, unless the image fails load.
  The variant will affect the focus styling when the image avatar is also an
  [actionable avatar](#actionable-avatars).

**Notes:**

- The `icon` prop takes precedence over the `text` prop.
- If the `text`, `src`, or `icon` props are not provided _and_ the [default slot](#custom-content)
  has no content, then the `person-fill` icon will be used.

### Text content

You can specify a short string as the content of an avatar via the `text` prop. The string should be
short (1 to 3 characters), and will be transformed via CSS to be all uppercase. The font size will
be scaled relative to the [`size` prop setting](#sizing).

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <b-avatar text="BV"></b-avatar>
    <b-avatar text="a"></b-avatar>
    <b-avatar text="Foo"></b-avatar>
    <b-avatar text="BV" size="4rem"></b-avatar>
  </div>
  <template #html>

```vue-html
<b-avatar text="BV"></b-avatar>
<b-avatar text="a"></b-avatar>
<b-avatar text="Foo"></b-avatar>
<b-avatar text="BV" size="4rem"></b-avatar>
```

  </template>
</HighlightCard>

### Custom content

Use the `default` slot to render custom content in the avatar, for finer grained control of its
appearance, or if using custom icons or SVGs e.g.:

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <b-avatar size="4em">Hello<br>World</b-avatar>
    <b-avatar size="4em">你好<br>世界</b-avatar>
  </div>
  <template #html>

```vue-html
<b-avatar size="4em">Hello<br />World</b-avatar>
<b-avatar size="4em">你好<br />世界</b-avatar>
```

  </template>
</HighlightCard>

**Notes:**

- The default slot takes precedence over the `text`, `src` and `icon` props.
- The default slot content will be wrapped in a `<span>` element to ensure proper centering.
- You may need additional styling applied to the custom content to compensate for the
  [shape of avatar component](#rounding).

## Styling

### Variants

Use the `variant` prop to specify one of Bootstrap theme variant colors. The default variant is
`secondary`.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <b-avatar variant="secondary"></b-avatar>
    <b-avatar variant="primary"></b-avatar>
    <b-avatar variant="dark"></b-avatar>
    <b-avatar variant="light"></b-avatar>
    <b-avatar variant="success"></b-avatar>
    <b-avatar variant="danger"></b-avatar>
    <b-avatar variant="warning"></b-avatar>
    <b-avatar variant="info"></b-avatar>
  </div>
  <template #html>

```vue-html
<b-avatar variant="secondary"></b-avatar>
<b-avatar variant="primary"></b-avatar>
<b-avatar variant="dark"></b-avatar>
<b-avatar variant="light"></b-avatar>
<b-avatar variant="success"></b-avatar>
<b-avatar variant="danger"></b-avatar>
<b-avatar variant="warning"></b-avatar>
<b-avatar variant="info"></b-avatar>
```

  </template>
</HighlightCard>

When displaying an icon as avatar, icon colors are calculated based on the `variant` property. The result is either `light` or `dark`. You can override the calculated icon color by specifying the `icon-variant` property.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <b-avatar variant="secondary" icon-variant="info"></b-avatar>
    <b-avatar variant="primary" icon-variant="dark"></b-avatar>
    <b-avatar variant="dark" icon-variant="warning"></b-avatar>
    <b-avatar variant="light" icon-variant="success"></b-avatar>
    <b-avatar variant="success" icon-variant="dark"></b-avatar>
    <b-avatar variant="danger" icon-variant="warning"></b-avatar>
    <b-avatar variant="warning" icon-variant="primary"></b-avatar>
    <b-avatar variant="info" icon-variant="secondary"></b-avatar>
  </div>
  <template #html>

```vue-html
<b-avatar variant="secondary" icon-variant="info"></b-avatar>
<b-avatar variant="primary" icon-variant="dark"></b-avatar>
<b-avatar variant="dark" icon-variant="warning"></b-avatar>
<b-avatar variant="light" icon-variant="success"></b-avatar>
<b-avatar variant="success" icon-variant="dark"></b-avatar>
<b-avatar variant="danger" icon-variant="warning"></b-avatar>
<b-avatar variant="warning" icon-variant="primary"></b-avatar>
<b-avatar variant="info" icon-variant="secondary"></b-avatar>
```

  </template>
</HighlightCard>

When displaying text inside the avatar, text colors are calculated based on the `variant` property. The result is either `light` or `dark`. You can override the calculated icon color by specifying the `icon-variant` property.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <b-avatar variant="primary" text="P"></b-avatar>
    <b-avatar variant="primary" text-variant="dark" text="P"></b-avatar>
    <b-avatar variant="secondary" text="A"></b-avatar>
    <b-avatar variant="secondary" text-variant="info" text="A"></b-avatar>
    <b-avatar variant="warning" text="A"></b-avatar>
    <b-avatar variant="warning" text-variant="primary" text="A"></b-avatar>
  </div>
  <template #html>

```vue-html
<b-avatar variant="primary" text="P"></b-avatar>
<b-avatar variant="primary" text-variant="dark" text="P"></b-avatar>
<b-avatar variant="secondary" text="A"></b-avatar>
<b-avatar variant="secondary" text-variant="info" text="A"></b-avatar>
<b-avatar variant="warning" text="A"></b-avatar>
<b-avatar variant="warning" text-variant="primary" text="A"></b-avatar>
```

  </template>
</HighlightCard>

### Sizing

By default, avatars are sized to `2.5em` (which is relative to the current font size). You can
change the size of the avatar by changing the current font size, or use the prop `size` to specify
an explicit size. The sizes `sm`, `md` and `lg` default to `1.5em`, `2.5em` and `3.5em`. Numbers get
converted to pixel values. Any other value _must_ include the units (such as `px`, `em`, or `rem`).

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <b-avatar></b-avatar>
    <b-avatar size="sm"></b-avatar>
    <b-avatar size="lg"></b-avatar>
    <b-avatar :size="24"></b-avatar>
    <b-avatar size="3em"></b-avatar>
    <b-avatar size="72px"></b-avatar>
  </div>
  <template #html>

```vue-html
<b-avatar></b-avatar>
<b-avatar size="sm"></b-avatar>
<b-avatar size="lg"></b-avatar>
<b-avatar :size="24"></b-avatar>
<b-avatar size="3em"></b-avatar>
<b-avatar size="72px"></b-avatar>
```

  </template>
</HighlightCard>

**Note:** Avatars are _always_ rendered with an aspect ratio of `1:1`.

### Square

Prefer a square avatar? simply set the `square` prop to `true`.

<HighlightCard>
    <b-avatar square></b-avatar>
  <template #html>

```vue-html
<b-avatar square></b-avatar>
```

  </template>
</HighlightCard>

### Rounding

`<b-avatar>` renders with a circular border radius. You can change the rounding by setting the prop
`rounded` to one of the values `true`, `'circle'`, `'sm'`, `'lg'`, `'top'`, `'left'`, `'right'`, or `'bottom'`.
When set to `true` (or the empty string `''`), it uses the Bootstrap default of medium rounding.
When set to `circle`, it uses a border radius of 50%, resulting in a circle.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <b-avatar rounded="sm"></b-avatar>
    <b-avatar rounded></b-avatar>
    <b-avatar rounded="lg"></b-avatar>
    <b-avatar rounded="top"></b-avatar>
    <b-avatar rounded="left"></b-avatar>
    <b-avatar rounded="right"></b-avatar>
    <b-avatar rounded="bottom"></b-avatar>
    <b-avatar rounded="circle"></b-avatar>
    <b-avatar rounded="0"></b-avatar>
  </div>
  <template #html>

```vue-html
<b-avatar rounded="sm"></b-avatar>
<b-avatar rounded></b-avatar>
<b-avatar rounded="lg"></b-avatar>
<b-avatar rounded="top"></b-avatar>
<b-avatar rounded="left"></b-avatar>
<b-avatar rounded="right"></b-avatar>
<b-avatar rounded="bottom"></b-avatar>
<b-avatar rounded="circle"></b-avatar>
<b-avatar rounded="0"></b-avatar>
```

  </template>
</HighlightCard>

**Notes:**

- The `square` prop takes precedence over the `rounded` prop.
- Alternatively to the `square` prop, you can set the `rounded` prop to the string `'0'` to
  achieve a square avatar.

### Alignment

By default, `<b-avatar>` will be vertically centered with its adjoining content. In some cases you
may want to alter the alignment, such as ensuring that a text-only avatar aligns its text with the
adjoining text. Simply set a [vertical alignment utility](/docs/reference/utility-classes) class on
the component, such as `<b-avatar class="align-baseline" ...>` or
`<b-avatar class="align-top" ...>`, etc.

## Actionable avatars

Easily create avatars that respond to clicks, ~~or avatars that change the URL/route when clicked~~.
Actionable avatars will appear in the document tab sequence, and are accessible for both screen
reader and keyboard-only users.

Image avatars, when actionable, employ a basic scale transform on the image when hovered.

### Button

Want to trigger the opening of a modal or trigger an action? Set the `button` prop to instruct
`<b-avatar>` to render as a `<button>` element. When rendered as a button, the component will emit
the `click` event whenever clicked.

<HighlightCard>
  <b-list-group>
    <b-list-group-item>
      <b-avatar button @click="alertEvent" variant="primary" text="FF" class="align-baseline"></b-avatar>
      Button Text Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="alertEvent" src="https://placekitten.com/300/300"></b-avatar>
      Button Image Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="alertEvent" icon="star-fill" class="align-center"></b-avatar>
      Button Icon Avatar
    </b-list-group-item>
  </b-list-group>
  <template #html>

```vue-html
<b-list-group>
  <b-list-group-item>
    <b-avatar
      button
      @click="alertEvent"
      variant="primary"
      text="FF"
      class="align-baseline"
    ></b-avatar>
    Button Text Avatar
  </b-list-group-item>
  <b-list-group-item>
    <b-avatar button @click="alertEvent" src="https://placekitten.com/300/300"></b-avatar>
    Button Image Avatar
  </b-list-group-item>
  <b-list-group-item>
    <b-avatar button @click="alertEvent" icon="star-fill" class="align-center"></b-avatar>
    Button Icon Avatar
  </b-list-group-item>
</b-list-group>
```

  </template>
</HighlightCard>

The prop `button-type` can be used to control the type of button to render. Supported values are
`'button'` (the default), `'submit'`, or `'reset'`.

### Link

Fancy an avatar as a link or router link? Simply set either the `href` or ~~`to`~~ props (respectively).
~~The `to` prop can either be a string path, or a `Location` object. The `to` prop requires that
`Vue router` (or equivalent) be installed~~.

<HighlightCard>
  <b-list-group>
    <b-list-group-item>
      <b-avatar href="#foo" variant="primary" text="FF" class="align-baseline"></b-avatar>
      Link Text Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar href="#bar" src="https://placekitten.com/300/300"></b-avatar>
      Link Image Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar href="#baz" icon="star-fill" class="align-center"></b-avatar>
      Link Icon Avatar
    </b-list-group-item>
  </b-list-group>
  <template #html>

```vue-html
<b-list-group>
  <b-list-group-item>
    <b-avatar href="#foo" variant="primary" text="FF" class="align-baseline"></b-avatar>
    Link Text Avatar
  </b-list-group-item>
  <b-list-group-item>
    <b-avatar href="#bar" src="https://placekitten.com/300/300"></b-avatar>
    Link Image Avatar
  </b-list-group-item>
  <b-list-group-item>
    <b-avatar href="#baz" icon="star-fill" class="align-center"></b-avatar>
    Link Icon Avatar
  </b-list-group-item>
</b-list-group>
```

  </template>
</HighlightCard>

**Note:**

- The `button` prop takes precedence over the `href` and ~~`to`~~ props.
- ~~For additional details on the `<router-link>` compatible props, please refer to the
  [Router support reference section](/docs/reference/router-links).~~

## Badge avatars

Easily add a badge to your avatar via the `badge` prop or `'badge'` slot, and the badge variant can
be set via the `badge-variant` prop. The badge will scale with the size of the avatar.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <b-avatar badge></b-avatar>
    <b-avatar badge badge-variant="danger" src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar badge badge-variant="warning" icon="people-fill"></b-avatar>
    <b-avatar badge badge-variant="success" src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar badge badge-variant="dark" text="BV"></b-avatar>
    <b-avatar square badge badge-variant="dark" text="BV"></b-avatar>
  </div>
  <template #html>

```vue-html
<b-avatar badge></b-avatar>
<b-avatar badge badge-variant="danger" src="https://placekitten.com/300/300"></b-avatar>
<b-avatar badge badge-variant="warning" icon="people-fill"></b-avatar>
<b-avatar badge badge-variant="success" src="https://placekitten.com/300/300"></b-avatar>
<b-avatar badge badge-variant="dark" text="BV"></b-avatar>
<b-avatar square badge badge-variant="dark" text="BV"></b-avatar>
```

  </template>
</HighlightCard>

### Badge content

Add textual content to the badge by supplying a string to the `badge` prop, or use the named slot
`'badge'`.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <b-avatar badge="BV"></b-avatar>
    <b-avatar badge="7" variant="primary" badge-variant="dark"></b-avatar>
  </div>
  <template #html>

```vue-html
<b-avatar badge="BV"></b-avatar>
<b-avatar badge="7" variant="primary" badge-variant="dark"></b-avatar>
```

  </template>
</HighlightCard>

### Badge positioning

By default, the badge appears on the bottom right of the avatar. You can use the `badge-top` and
`badge-right` boolean props to switch the sides. Combine both props to move the badge to the top
right of the avatar.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <b-avatar badge></b-avatar>
    <b-avatar badge badge-left></b-avatar>
    <b-avatar badge badge-top></b-avatar>
    <b-avatar badge badge-left badge-top></b-avatar>
  </div>
  <template #html>

```vue-html
<b-avatar badge></b-avatar>
<b-avatar badge badge-left></b-avatar>
<b-avatar badge badge-top></b-avatar>
<b-avatar badge badge-left badge-top></b-avatar>
```

  </template>
</HighlightCard>

Use the `badge-offset` prop to control the offset of the badge. The `badge-offset` must be a valid
CSS length string (i.e. `'2px'`, `'-2px'`, `'0.5em'`, etc.). Positive values will move the badge
inward, while negative values will move the badge outward.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <b-avatar badge></b-avatar>
    <b-avatar badge badge-offset="-0.5em"></b-avatar>
    <b-avatar badge badge-offset="-2px"></b-avatar>
    <b-avatar badge badge-offset="2px"></b-avatar>
    <b-avatar badge badge-top></b-avatar>
    <b-avatar badge badge-top badge-offset="-0.5em"></b-avatar>
    <b-avatar badge badge-top badge-offset="-2px"></b-avatar>
    <b-avatar badge badge-top badge-offset="2px"></b-avatar>
  </div>
  <template #html>

```vue-html
<b-avatar badge></b-avatar>
<b-avatar badge badge-offset="-0.5em"></b-avatar>
<b-avatar badge badge-offset="-2px"></b-avatar>
<b-avatar badge badge-offset="2px"></b-avatar>
<b-avatar badge badge-top></b-avatar>
<b-avatar badge badge-top badge-offset="-0.5em"></b-avatar>
<b-avatar badge badge-top badge-offset="-2px"></b-avatar>
<b-avatar badge badge-top badge-offset="2px"></b-avatar>
```

  </template>
</HighlightCard>

## Avatar groups

Group multiple avatars together by wrapping them in a `<b-avatar-group>` component:

<HighlightCard>
  <b-avatar-group size="60px">
    <b-avatar></b-avatar>
    <b-avatar text="BV" variant="primary"></b-avatar>
    <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
    <b-avatar text="OK" variant="danger"></b-avatar>
    <b-avatar variant="warning"></b-avatar>
    <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
    <b-avatar icon="music-note" variant="success"></b-avatar>
  </b-avatar-group>
  <template #html>

```vue-html
<b-avatar-group size="60px">
  <b-avatar></b-avatar>
  <b-avatar text="BV" variant="primary"></b-avatar>
  <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
  <b-avatar text="OK" variant="danger"></b-avatar>
  <b-avatar variant="warning"></b-avatar>
  <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
  <b-avatar icon="music-note" variant="success"></b-avatar>
</b-avatar-group>
```

  </template>
</HighlightCard>

**Notes:**

- The `variant`, `square` and `rounded` props on `<b-avatar-group>` will take precedence over the
  respective props on individual avatars.

### Group size

To size the avatars, use the prop `size` on `<b-avatar-group>`. The `size` prop accepts the same
type of values as the `size` prop on `<b-avatar>`. Note that the `size` prop will be ignored on
individual avatars when they are placed inside a `<b-avatar-group>`.

<HighlightCard>
  <b-avatar-group size="5rem">
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
  </b-avatar-group>
  <template #html>

```vue-html
<b-avatar-group size="5rem">
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
</b-avatar-group>
```

  </template>
</HighlightCard>

### Group variant

Use the `variant` prop to color all child avatars in the `<b-avatar-group>`. Note that the `variant`
prop, when set, will override the the `variant` specified on individual avatars.

<HighlightCard>
  <b-avatar-group variant="success">
    <b-avatar></b-avatar>
    <b-avatar variant="info"></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
  </b-avatar-group>
  <template #html>

```vue-html
<b-avatar-group variant="success">
  <b-avatar></b-avatar>
  <b-avatar variant="info"></b-avatar>
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
</b-avatar-group>
```

  </template>
</HighlightCard>

### Group rounding

Similar to the `variant` prop, the `<b-avatar-group>` props `square` and `rounded` take precedence
over the respective props on individual child avatars.

<HighlightCard>
  <b-avatar-group rounded="lg">
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
  </b-avatar-group>
  <template #html>

```vue-html
<b-avatar-group rounded="lg">
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
</b-avatar-group>
```

  </template>
</HighlightCard>

### Group overlap

By default, child avatars inside a `<b-avatar-group>` will overlap by a factor of `0.3` (relative to
the size of the avatar). You can control the overlap amount by setting the `overlap` prop to a value
between `0` and `1`, where `0` means no overlap and `1` means 100% overlap.

<HighlightCard>
  <b-avatar-group size="3rem" overlap="0.65">
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
  </b-avatar-group>
  <template #html>

```vue-html
<b-avatar-group size="3rem" overlap="0.65">
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
  <b-avatar></b-avatar>
</b-avatar-group>
```

  </template>
</HighlightCard>

**Note:**

`overlap` only has an effect when you explicitly set the `size` property as well.

## Accessibility

Use the `aria-label` prop to provide an accessible, screen reader friendly, label for your avatar.
If you have a badge, it is recommended to add information to your aria-label regarding the badge
purpose or content (i.g. `'3 messages'`, `'online'`, etc.).

While the `click` event is emitted regardless if the `button`, `href`, or `to` props are set, it is
highly recommended using the `button` prop when the click event should trigger an action (or use
the `to` or `href` props when changing routes or changing URLs) for accessibility reasons.

## Implementation notes

Avatars are based upon `<b-badge>` and `<b-button>` components, and as such, rely upon Bootstrap's
`badge-*` and `btn-*` variant classes, as well as the `rounded-*`
[utility classes](/docs/reference/utility-classes).

<ComponentReference :data="data"></ComponentReference>

<script setup lang="ts">
import {data} from '../../data/components/avatar.data'
import {BAvatar, BAvatarGroup, BListGroup, BBadge, BListGroupItem} from 'bootstrap-vue-next'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {ref, type Ref} from 'vue';

const alertEvent = (event: PointerEvent) => {
  alert(`Clicked`);
}
</script>
