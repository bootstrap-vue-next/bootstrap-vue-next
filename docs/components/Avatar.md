# Avatar

> Avatars are a custom component, and are typically used to display a user profile as a
> picture, an icon, or short text. `<b-avatar>` provides several props for customizing its
> appearance such as color variant and roundness, and optionally supports acting as a button, link
> or ~~[router link](/docs/reference/router-links)~~.

## Overview

Avatars are lightweight components, which render inline by default, so that they are vertically
centered beside any adjoining plain text. They also can be used as children of other components.

<ClientOnly>
  <b-card>
    <p>Using stand-alone:</p>
    <div class="mb-4">
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
        <span class="me-auto">BootstrapVue</span>
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
  </b-card>
</ClientOnly>

```html
<b-card>
  <p>Using stand-alone:</p>
  <div class="mb-4">
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
      <span class="me-auto">BootstrapVue</span>
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
</b-card>
```

## Avatar types

The avatar content can be either a an image, an icon, or short text string. Avatar content defaults
to the [`'person-fill'` icon](/docs/icons) when no other content is specified.

You can also supply custom content via the default slot, although you may need to apply additional
styling on the content.

### Image content

Use the `src` prop to specify a URL of an image to use as the avatar content. The image should have
an aspect ratio of `1:1` (meaning the width and height should be equal), otherwise image aspect
distortion will occur. The image will be scaled up or down to fit within the avatar's bounding box.

<ClientOnly>
  <b-card>
    <b-avatar src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar src="https://placekitten.com/300/300"></b-avatar>
  <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
</b-card>
```

**Notes:**

- When using a module bundler and project relative image URLs, please refer to the
  [Component img src resolving](/docs/reference/images) reference section for additional details.
- The `src` prop takes precedence over the `icon` and `text` props.
- <span class="badge badge-secondary">2.11.0+</span> If the image fails to load, the avatar will
  fallback to the value of the `icon` or `text` props. If neither the `icon` or `text` props are
  provided, then the default avatar icon will be shown. Also, when the image fails to load, the
  `img-error` event will be emitted.
- [Variant colors](#variants) when using images not normally visible, unless the image fails load.
  The variant will affect the focus styling when the image avatar is also an
  [actionalble avatar](#actionalble-avatars).

### Icon content

Easily use one of [BootstrapVue's icons](/docs/icons) as the avatar content via the `icon` prop. The
prop should be set to a valid icon name. Icons will scale respective to the [`size` prop](#sizing).

<ClientOnly>
  <b-card>
    <b-avatar icon="people-fill"></b-avatar>
    <b-avatar icon="star-fill"></b-avatar>
    <b-avatar icon="music-note" size="lg"></b-avatar>
    <b-avatar icon="star-fill" size="4em"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar icon="people-fill"></b-avatar>
  <b-avatar icon="star-fill"></b-avatar>
  <b-avatar icon="music-note" size="lg"></b-avatar>
  <b-avatar icon="star-fill" size="4em"></b-avatar>
</b-card>
```

**Notes:**

- When providing a BootstrapVue icon name, you _must_ ensure that you have registered the
  corresponding icon component (either locally to your component/page, or globally), if not using
  the full [`BootstrapVueIcons` plugin](/docs/icons).
- The `icon` prop takes precedence over the `text` prop.
- If the `text`, `src`, or `icon` props are not provided _and_ the [default slot](#custom-content)
  has no content, then the `person-fill` icon will be used.

### Text content

You can specify a short string as the content of an avatar via the `text` prop. The string should be
short (1 to 3 characters), and will be transformed via CSS to be all uppercase. The font size will
be scaled relative to the [`size` prop setting](#sizing).

<ClientOnly>
  <b-card>
    <b-avatar text="BV"></b-avatar>
    <b-avatar text="a"></b-avatar>
    <b-avatar text="Foo"></b-avatar>
    <b-avatar text="BV" size="4rem"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar text="BV"></b-avatar>
  <b-avatar text="a"></b-avatar>
  <b-avatar text="Foo"></b-avatar>
  <b-avatar text="BV" size="4rem"></b-avatar>
</b-card>
```

### Custom content

Use the `default` slot to render custom content in the avatar, for finer grained control of its
appearance, or if using custom icons or SVGs e.g.:

<ClientOnly>
  <b-card>
    <b-avatar size="4em">Hello<br>World</b-avatar>
    <b-avatar size="4em">你好<br>世界</b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar size="4em">Hello<br />World</b-avatar>
  <b-avatar size="4em">你好<br />世界</b-avatar>
</b-card>
```

**Notes:**

- The default slot takes precedence over the `text`, `src` and `icon` props.
- The default slot content will be wrapped in a `<span>` element to ensure proper centering.
- You may need additional styling applied to the custom content to compensate for the
  [shape of avatar component](#rounding).

## Styling

### Variants

Use the `variant` prop to specify one of Bootstrap theme variant colors. The default variant is
`secondary`.

<ClientOnly>
  <b-card>
    <b-avatar variant="secondary"></b-avatar>
    <b-avatar variant="primary"></b-avatar>
    <b-avatar variant="dark"></b-avatar>
    <b-avatar variant="light"></b-avatar>
    <b-avatar variant="success"></b-avatar>
    <b-avatar variant="danger"></b-avatar>
    <b-avatar variant="warning"></b-avatar>
    <b-avatar variant="info"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar variant="secondary"></b-avatar>
  <b-avatar variant="primary"></b-avatar>
  <b-avatar variant="dark"></b-avatar>
  <b-avatar variant="light"></b-avatar>
  <b-avatar variant="success"></b-avatar>
  <b-avatar variant="danger"></b-avatar>
  <b-avatar variant="warning"></b-avatar>
  <b-avatar variant="info"></b-avatar>
</b-card>
```

When displaying an icon as avatar, icon colors are calculated based on the `variant` property. The result is either `light` or `dark`. You can override the calculated icon color by specifying the `icon-variant` property.

<ClientOnly>
  <b-card>
    <b-avatar variant="secondary" icon-variant="info"></b-avatar>
    <b-avatar variant="primary" icon-variant="dark"></b-avatar>
    <b-avatar variant="dark" icon-variant="warning"></b-avatar>
    <b-avatar variant="light" icon-variant="success"></b-avatar>
    <b-avatar variant="success" icon-variant="dark"></b-avatar>
    <b-avatar variant="danger" icon-variant="warning"></b-avatar>
    <b-avatar variant="warning" icon-variant="primary"></b-avatar>
    <b-avatar variant="info" icon-variant="secondary"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar variant="secondary" icon-variant="info"></b-avatar>
  <b-avatar variant="primary" icon-variant="dark"></b-avatar>
  <b-avatar variant="dark" icon-variant="warning"></b-avatar>
  <b-avatar variant="light" icon-variant="success"></b-avatar>
  <b-avatar variant="success" icon-variant="dark"></b-avatar>
  <b-avatar variant="danger" icon-variant="warning"></b-avatar>
  <b-avatar variant="warning" icon-variant="primary"></b-avatar>
  <b-avatar variant="info" icon-variant="secondary"></b-avatar>
</b-card>
```

When displaying text inside the avatar, text colors are calculated based on the `variant` property. The result is either `light` or `dark`. You can override the calculated icon color by specifying the `icon-variant` property.

<ClientOnly>
  <b-card>
    <b-avatar variant="primary" text="P"></b-avatar>
    <b-avatar variant="primary" text-variant="dark" text="P"></b-avatar>
    <b-avatar variant="secondary" text="A"></b-avatar>
    <b-avatar variant="secondary" text-variant="info" text="A"></b-avatar>
    <b-avatar variant="warning" text="A"></b-avatar>
    <b-avatar variant="warning" text-variant="primary" text="A"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar variant="primary" text="P"></b-avatar>
  <b-avatar variant="primary" text-variant="dark" text="P"></b-avatar>
  <b-avatar variant="secondary" text="A"></b-avatar>
  <b-avatar variant="secondary" text-variant="info" text="A"></b-avatar>
  <b-avatar variant="warning" text="A"></b-avatar>
  <b-avatar variant="warning" text-variant="primary" text="A"></b-avatar>
</b-card>
```

### Sizing

By default, avatars are sized to `2.5em` (which is relative to the current font size). You can
change the size of the avatar by changing the current font size, or use the prop `size` to specify
an explicit size. The sizes `sm`, `md` and `lg` default to `1.5em`, `2.5em` and `3.5em`. Numbers get
converted to pixel values. Any other value _must_ include the units (such as `px`, `em`, or `rem`).

<ClientOnly>
  <b-card>
    <b-avatar></b-avatar>
    <b-avatar size="sm"></b-avatar>
    <b-avatar size="lg"></b-avatar>
    <b-avatar :size="24"></b-avatar>
    <b-avatar size="3em"></b-avatar>
    <b-avatar size="72px"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar></b-avatar>
  <b-avatar size="sm"></b-avatar>
  <b-avatar size="lg"></b-avatar>
  <b-avatar :size="24"></b-avatar>
  <b-avatar size="3em"></b-avatar>
  <b-avatar size="72px"></b-avatar>
</b-card>
```

**Note:** Avatars are _always_ rendered with an aspect ratio of `1:1`.

### Square

Prefer a square avatar? simply set the `square` prop to `true`.

<ClientOnly>
  <b-card>
    <b-avatar square></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar square></b-avatar>
</b-card>
```

### Rounding

`<b-avatar>` renders with a circular border radius. You can change the rounding by setting the prop
`rounded` to one of the values `true`, `'circle'`, `'sm'`, `'lg'`, `'top'`, `'left'`, `'right'`, or `'bottom'`.
When set to `true` (or the empty string `''`), it uses the Bootstrap default of medium rounding.
When set to `circle`, it uses a border radius of 50%, resulting in a circle.

<ClientOnly>
  <b-card>
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
  </b-card>
</ClientOnly>

```html
<b-card>
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
</b-card>
```

**Notes:**

- The `square` prop takes precedence over the `rounded` prop.
- Alternatively to to the `square` prop, you can set the `rounded` prop to the string `'0'` to
  achieve a square avatar.

### Alignment

By default `<b-avatar>` will be vertically centered with its adjoining content. In some cases you
may want to alter the alignment, such as ensuring that a text-only avatar aligns its text with the
adjoining text. Simply set a [vertical alignment utility](/docs/reference/utility-classes) class on
the component, such as `<b-avatar class="align-baseline" ...>` or
`<b-avatar class="align-top" ...>`, etc.

## Actionable avatars

Easily create avatars that respond to clicks, ~~or avatars that change the URL/route when clicked~~.
Actionable avatars will appear in the document tab sequence, and are accessible for both screen
reader and keyboard-only users.

Image avatars, when actionalble, employ a basic scale transform on the image when hovered.

### Button

Want to trigger the opening of a modal or trigger an action? Set the `button` prop to instruct
`<b-avatar>` to render as a `<button>` element. When rendered as a button, the component will emit
the `click` event whenever clicked.

<ClientOnly>
  <b-card>
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
  </b-card>
</ClientOnly>

```html
<b-card>
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
</b-card>
```

The prop `button-type` can be used to control the type of button to render. Supported values are
`'button'` (the default), `'submit'`, or `'reset'`.

### Link

Fancy an avatar as a link or router link? Simply set either the `href` or ~~`to`~~ props (respectively).
~~The `to` prop can either be a string path, or a `Location` object. The `to` prop requires that
`Vue router` (or equivalent) be installed~~.

<ClientOnly>
  <b-card>
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
  </b-card>
</ClientOnly>

```html
<b-card>
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
</b-card>
```

**Note:**

- The `button` prop takes precedence over the `href` and ~~`to`~~ props.
- ~~For additional details on the `<router-link>` compatible props, please refer to the
  [Router support reference section](/docs/reference/router-links).~~

## Badge avatars

Easily add a badge to your avatar via the `badge` prop or `'badge'` slot, and the badge variant can
be set via the `badge-variant` prop. The badge will scale with the size of the avatar.

<ClientOnly>
  <b-card>
    <b-avatar badge></b-avatar>
    <b-avatar badge badge-variant="danger" src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar badge badge-variant="warning" icon="people-fill"></b-avatar>
    <b-avatar badge badge-variant="success" src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar badge badge-variant="dark" text="BV"></b-avatar>
    <b-avatar square badge badge-variant="dark" text="BV"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar badge></b-avatar>
  <b-avatar badge badge-variant="danger" src="https://placekitten.com/300/300"></b-avatar>
  <b-avatar badge badge-variant="warning" icon="people-fill"></b-avatar>
  <b-avatar badge badge-variant="success" src="https://placekitten.com/300/300"></b-avatar>
  <b-avatar badge badge-variant="dark" text="BV"></b-avatar>
  <b-avatar square badge badge-variant="dark" text="BV"></b-avatar>
</b-card>
```

### Badge content

Add textual content to the badge by supplying a string to the `badge` prop, or use the named slot
`'badge'`.

<ClientOnly>
  <b-card>
    <b-avatar badge="BV"></b-avatar>
    <b-avatar badge="7" variant="primary" badge-variant="dark"></b-avatar>
    <b-avatar badge-variant="info" src="https://placekitten.com/300/300">
      <template #badge><b-icon icon="star-fill" variant="light"></b-icon></template>
    </b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar badge="BV"></b-avatar>
  <b-avatar badge="7" variant="primary" badge-variant="dark"></b-avatar>
  <b-avatar badge-variant="info" src="https://placekitten.com/300/300">
    <template #badge><b-icon icon="star-fill" variant="light"></b-icon></template>
  </b-avatar>
</b-card>
```

### Badge positioning

By default the badge appears on the bottom right of the avatar. You can use the `badge-top` and
`badge-right` boolean props to switch the sides. Combine both props to move the badge to the top
right of the avatar.

<ClientOnly>
  <b-card>
    <b-avatar badge></b-avatar>
    <b-avatar badge badge-left></b-avatar>
    <b-avatar badge badge-top></b-avatar>
    <b-avatar badge badge-left badge-top></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar badge></b-avatar>
  <b-avatar badge badge-left></b-avatar>
  <b-avatar badge badge-top></b-avatar>
  <b-avatar badge badge-left badge-top></b-avatar>
</b-card>
```

Use the `badge-offset` prop to control the offset of the badge. The `badge-offset` must be a valid
CSS length string (i.e. `'2px'`, `'-2px'`, `'0.5em'`, etc.). Positive values will move the badge
inward, while negative values will move the badge outward.

<ClientOnly>
  <b-card>
    <b-avatar badge></b-avatar>
    <b-avatar badge badge-offset="-0.5em"></b-avatar>
    <b-avatar badge badge-offset="-2px"></b-avatar>
    <b-avatar badge badge-offset="2px"></b-avatar>
    <b-avatar badge badge-top></b-avatar>
    <b-avatar badge badge-top badge-offset="-0.5em"></b-avatar>
    <b-avatar badge badge-top badge-offset="-2px"></b-avatar>
    <b-avatar badge badge-top badge-offset="2px"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar badge></b-avatar>
  <b-avatar badge badge-offset="-0.5em"></b-avatar>
  <b-avatar badge badge-offset="-2px"></b-avatar>
  <b-avatar badge badge-offset="2px"></b-avatar>
  <b-avatar badge badge-top></b-avatar>
  <b-avatar badge badge-top badge-offset="-0.5em"></b-avatar>
  <b-avatar badge badge-top badge-offset="-2px"></b-avatar>
  <b-avatar badge badge-top badge-offset="2px"></b-avatar>
</b-card>
```

## Avatar groups

Group multiple avatars together by wrapping them in a `<b-avatar-group>` component:

<ClientOnly>
  <b-card>
    <b-avatar-group size="60px">
      <b-avatar></b-avatar>
      <b-avatar text="BV" variant="primary"></b-avatar>
      <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
      <b-avatar text="OK" variant="danger"></b-avatar>
      <b-avatar variant="warning"></b-avatar>
      <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
      <b-avatar icon="music-note" variant="success"></b-avatar>
    </b-avatar-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar-group size="60px">
    <b-avatar></b-avatar>
    <b-avatar text="BV" variant="primary"></b-avatar>
    <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
    <b-avatar text="OK" variant="danger"></b-avatar>
    <b-avatar variant="warning"></b-avatar>
    <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
    <b-avatar icon="music-note" variant="success"></b-avatar>
  </b-avatar-group>
</b-card>
```

**Notes:**

- The `variant`, `square` and `rounded` props on `<b-avatar-group>` will take precedence over the
  respective props on individual avatars.

### Group size

To size the avatars, use the prop `size` on `<b-avatar-group>`. The `size` prop accepts the same
type of values as the `size` prop on `<b-avatar>`. Note that the `size` prop will be ignored on
individual avatars when they are placed inside a `<b-avatar-group>`.

<ClientOnly>
  <b-card>
    <b-avatar-group size="5rem">
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar-group size="5rem">
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
  </b-avatar-group>
</b-card>
```

### Group variant

Use the `variant` prop to color all child avatars in the `<b-avatar-group>`. Note that the `variant`
prop, when set, will override the the `variant` specified on individual avatars.

<ClientOnly>
  <b-card>
    <b-avatar-group variant="success">
      <b-avatar></b-avatar>
      <b-avatar variant="info"></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar-group variant="success">
    <b-avatar></b-avatar>
    <b-avatar variant="info"></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
  </b-avatar-group>
</b-card>
```

### Group rounding

Similar to the `variant` prop, the `<b-avatar-group>` props `square` and `rounded` take precedence
over the respective props on individual child avatars.

<ClientOnly>
  <b-card>
    <b-avatar-group rounded="lg">
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar-group rounded="lg">
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
  </b-avatar-group>
</b-card>
```

### Group overlap

By default child avatars inside a `<b-avatar-group>` will overlap by a factor of `0.3` (relative to
the size of the avatar). You can control the overlap amount by setting the `overlap` prop to a value
between `0` and `1`, where `0` means no overlap and `1` means 100% overlap.

<ClientOnly>
  <b-card>
    <b-avatar-group size="3rem" overlap="0.65">
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar-group size="3rem" overlap="0.65">
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
  </b-avatar-group>
</b-card>
```

**Note:**

`overlap` only has an effect when you explicitly set the `size` property as well.

## Accessibility

Use the `aria-label` prop to provide an accessible, screen reader friendly, label for your avatar.
If you have a badge, it is recommended to add inforation to your aria-label regarding the badge
purpose or content (i.g. `'3 messages'`, `'online'`, etc.).

While the `click` event is emitted regardless if the `button`, `href`, or `to` props are set, it is
highly recommended to use the `button` prop when the click event should trigger an action (or use
the `to` or `href` props when changing routes or changing URLs) for accessibility reasons.

## Implementation notes

Avatars are based upon `<b-badge>` and `<b-button>` components, and as such, rely upon Bootstrap's
`badge-*` and `btn-*` variant classes, as well as the `rounded-*`
[utility classes](/docs/reference/utility-classes).

## Component reference

### `<b-avatar>`

#### Properties

| Property        | Type                  | Default     | Description                                                                                                                       |
| --------------- | --------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `alt`           | `String`              | `avatar`    | Value to place in the 'alt' attribute for image and icon avatars                                                                  |
| `aria-label`    | `String`              |             | Sets the value of `aria-label` attribute on the rendered element                                                                  |
| `badge`         | `Boolean` or `String` | `false`     | When `true` shows an empty badge on the avatar, alternatively set to a string for content in the badge                            |
| `badge-left`    | `Boolean`             | `false`     | When `true` places the badge at the left instead of the right avatars                                                             |
| `badge-offset`  | `String`              |             | CSS length to offset the badge. Positive values move the badge inwards, while negative values move the badge outwards             |
| `badge-top`     | `Boolean`             | `false`     | When `true` places the badge at the top instead of the bottom                                                                     |
| `badge-variant` | `String`              | `primary`   | Applies one of the Bootstrap theme color variants to the badge                                                                    |
| `button`        | `Boolean`             | `false`     | When set to `true`, renders the avatar as a button                                                                                |
| `button-type`   | `String `             | `button`    | Type of button to render (i.e. `button`, `submit`, `reset`). Has no effect if prop button is not set                              |
| `disabled`      | `Boolean `            | `false`     | When set to `true`, disables the component's functionality and places it in a disabled state                                      |
| `icon`          | `String `             |             | Icon name to use for the avatar. Must be all lowercase. Defaults to `person-fill` if `text` or `src` props not provided           |
| `icon-variant`  | `String`              |             | Sets the color variant for the icon                                                                                               |
| `rounded`       | `Boolean` or `String` | `false`     | Specifies the type of rounding to apply to the avatar. The `square` prop takes precedence. Refer to the documentation for details |
| `size`          | `Number` or `String`  |             | Size of the avatar. Refer to the documentation for details                                                                        |
| `square`        | `Boolean`             | `false`     | Disables rounding of the avatar, rending the avatar with square corners                                                           |
| `src`           | `String`              |             | Image URL to use for the avatar                                                                                                   |
| `text`          | `String`              |             | Text to place in the avatar                                                                                                       |
| `variant`       | `String`              | `secondary` | Applies one of the Bootstrap theme color variants to the component                                                                |

#### slots

| Property  | Description                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| `badge`   | Content to place in the avatars optional badge. Overrides the `badge` prop     |
| `default` | Content to place in the avatar. Overrides props `text`, `src`, and `icon-name` |

#### Events

| Event       | Arguments                   | Description                                                                                 |
| ----------- | --------------------------- | ------------------------------------------------------------------------------------------- |
| `click`     | event - Native Event object | Emitted when the avatar is clicked when rendered as a button or link. Not emitted otherwise |
| `img-error` | event - Native Event object | Emitted if an image `src` is provided and the image fails to load                           |

### `<b-avatar-group>`

#### Properties

| Property  | Type                  | Default | Description                                                                                                                                     |
| --------- | --------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `overlap` | `Number` or `String`  | 0.3     | Floating point number specifying the amount of overlap where `0` is no overlap and `1` is 100% overlap. Only has effect when `size` is also set |
| `rounded` | `Boolean` or `String` | `false` | Specifies the type of rounding to apply to the avatar. The `square` prop takes precedence. Refer to the documentation for details               |
| `size`    | `Number` or `String`  |         | Size of the avatar. Refer to the documentation for details                                                                                      |
| `tag`     | `String`              | `div`   | Specify the HTML tag to render instead of the default tag                                                                                       |
| `variant` | `String`              |         | Applies one of the Bootstrap theme color variants to all child avatars                                                                          |

#### slots

| Property  | Description                                    |
| --------- | ---------------------------------------------- |
| `default` | Content (avatars) to place in the avatar group |

<script lang="ts" setup>
  import {ref, Ref} from 'vue';

  const alertEvent = (event: PointerEvent) => {
    alert(`Clicked`);
  }
</script>
