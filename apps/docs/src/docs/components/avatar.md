# Avatar

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">

Avatars are a custom component, and are typically used to display a user profile as a
picture or short text. `BAvatar` provides several props for customizing its
appearance such as color variant and roundness, and optionally supports acting as a button or a link.

</div>

## Overview

Avatars are lightweight components, which render inline by default, so that they are vertically
centered beside any adjoining plain text. They also can be used as children of other components.

<HighlightCard>
  <p>Using stand-alone:</p>
  <div class="d-flex mb-4" style="column-gap: 1%;">
    <BAvatar />
    <BAvatar variant="primary" text="BV" />
    <BAvatar variant="info" src="https://placekitten.com/300/300" />
    <BAvatar variant="success" icon="people-fill" />
  </div>
  <p>Using in components (list group) example:</p>
  <BListGroup style="max-width: 300px;">
    <BListGroupItem class="d-flex align-items-center">
      <BAvatar class="mx-3" />
      <span class="me-auto">J. Circlehead</span>
      <BBadge>5</BBadge>
    </BListGroupItem>
    <BListGroupItem class="d-flex align-items-center">
      <BAvatar variant="primary" text="BV" class="mx-3" />
      <span class="me-auto">BootstrapVueNext</span>
      <BBadge>12</BBadge>
    </BListGroupItem>
    <BListGroupItem class="d-flex align-items-center">
      <BAvatar variant="info" src="https://placekitten.com/300/300" class="mx-3" />
      <span class="me-auto">Super Kitty</span>
      <BBadge>9</BBadge>
    </BListGroupItem>
    <BListGroupItem class="d-flex align-items-center">
      <BAvatar variant="success" icon="people-fill" class="mx-3" />
      <span class="me-auto">ACME group</span>
      <BBadge>7</BBadge>
    </BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<p>Using stand-alone:</p>
<BAvatar />
<BAvatar variant="primary" text="BV" />
<BAvatar variant="info" src="https://placekitten.com/300/300" />
<BAvatar variant="success" icon="people-fill" />
<p>Using in components (list group) example:</p>
<BListGroup style="max-width: 300px;">
  <BListGroupItem class="d-flex align-items-center">
    <BAvatar class="mx-3" />
    <span class="me-auto">J. Circlehead</span>
    <BBadge>5</BBadge>
  </BListGroupItem>
  <BListGroupItem class="d-flex align-items-center">
    <BAvatar variant="primary" text="BV" class="mx-3" />
    <span class="me-auto">BootstrapVueNext</span>
    <BBadge>12</BBadge>
  </BListGroupItem>
  <BListGroupItem class="d-flex align-items-center">
    <BAvatar variant="info" src="https://placekitten.com/300/300" class="mx-3" />
    <span class="me-auto">Super Kitty</span>
    <BBadge>9</BBadge>
  </BListGroupItem>
  <BListGroupItem class="d-flex align-items-center">
    <BAvatar variant="success" icon="people-fill" class="mx-3" />
    <span class="me-auto">ACME group</span>
    <BBadge>7</BBadge>
  </BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

## Avatar types

The avatar content can be either an image, an icon, or short text string. Avatar content defaults
to the [`'person-fill'` icon](<[/docs/icons](https://icons.getbootstrap.com/icons/person-fill/)>)
when no other content is specified.

You can also supply custom content via the default slot, although you may need to apply additional
styling on the content.

### Image content

Use the `src` prop to specify a URL of an image to use as the avatar content. The image should have
an aspect ratio of `1:1` (meaning the width and height should be equal), otherwise image aspect
distortion will occur. The image will be scaled up or down to fit within the avatar's bounding box.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <BAvatar src="https://placekitten.com/300/300" />
    <BAvatar src="https://placekitten.com/300/300" size="6rem" />
  </div>
  <template #html>

```vue-html
<BAvatar src="https://placekitten.com/300/300" />
<BAvatar src="https://placekitten.com/300/300" size="6rem" />
```

  </template>
</HighlightCard>

**Notes:**

- When using a module bundler and project relative image URLs, please refer to the
  [Image Support](/docs/reference/images) reference section for additional details
- The `src` prop takes precedence over the `text` prop
- If the image fails to load, the avatar will
  fall back to the value of the `text` prop. If the `text` props is not
  provided, then the default avatar image will be shown. Also, when the image fails to load, the
  `img-error` event will be emitted
- [Variant colors](#variants) when using images not normally visible, unless the image fails load.
  The variant will affect the focus styling when the image avatar is also an
  [actionable avatar](#actionable-avatars)
- If neither the `text` or `src` prop is provided _and_ the [default slot](#custom-content)
  has no content, then the `person-fill` image will be used

### Text content

You can specify a short string as the content of an avatar via the `text` prop. The string should be
short (1 to 3 characters), and will be transformed via CSS to be all uppercase. The font size will
be scaled relative to the [`size` prop setting](#sizing).

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <BAvatar text="BV" />
    <BAvatar text="a" />
    <BAvatar text="Foo" />
    <BAvatar text="BV" size="4rem" />
  </div>
  <template #html>

```vue-html
<BAvatar text="BV" />
<BAvatar text="a" />
<BAvatar text="Foo" />
<BAvatar text="BV" size="4rem" />
```

  </template>
</HighlightCard>

### Custom content

Use the `default` slot to render custom content in the avatar, for finer grained control of its
appearance, or if using custom icons or SVGs e.g.:

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <BAvatar size="4em">Hello<br>World</BAvatar>
    <BAvatar size="4em">你好<br>世界</BAvatar>
    <BAvatar size="4em"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="80%"
            height="80%"
            fill="currentColor"
            class="bi bi-person-hearts"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
            /></svg
        ></BAvatar>
  </div>
  <template #html>

```vue-html
<BAvatar size="4em">Hello<br />World</BAvatar>
<BAvatar size="4em">你好<br />世界</BAvatar>
```

  </template>
</HighlightCard>

**Notes:**

- The default slot takes precedence over the `text` or `src` props.
- The default slot content will be wrapped in a `<span>` element to ensure proper centering.
- You may need additional styling applied to the custom content to compensate for the
  [shape of avatar component](#rounding).

## Styling

### Variants

Use the `variant` prop to specify one of Bootstrap theme variant colors. The default variant is
`secondary`.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <BAvatar variant="secondary" />
    <BAvatar variant="primary" />
    <BAvatar variant="dark" />
    <BAvatar variant="light" />
    <BAvatar variant="success" />
    <BAvatar variant="danger" />
    <BAvatar variant="warning" />
    <BAvatar variant="info" />
  </div>
  <template #html>

```vue-html
<BAvatar variant="secondary" />
<BAvatar variant="primary" />
<BAvatar variant="dark" />
<BAvatar variant="light" />
<BAvatar variant="success" />
<BAvatar variant="danger" />
<BAvatar variant="warning" />
<BAvatar variant="info" />
```

  </template>
</HighlightCard>

When displaying an icon as avatar, icon colors are calculated based on the `variant` property. The result is either `light` or `dark`. You can override the calculated icon color by specifying the `icon-variant` property.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <BAvatar variant="secondary" icon-variant="info" />
    <BAvatar variant="primary" icon-variant="dark" />
    <BAvatar variant="dark" icon-variant="warning" />
    <BAvatar variant="light" icon-variant="success" />
    <BAvatar variant="success" icon-variant="dark" />
    <BAvatar variant="danger" icon-variant="warning" />
    <BAvatar variant="warning" icon-variant="primary" />
    <BAvatar variant="info" icon-variant="secondary" />
  </div>
  <template #html>

```vue-html
<BAvatar variant="secondary" icon-variant="info" />
<BAvatar variant="primary" icon-variant="dark" />
<BAvatar variant="dark" icon-variant="warning" />
<BAvatar variant="light" icon-variant="success" />
<BAvatar variant="success" icon-variant="dark" />
<BAvatar variant="danger" icon-variant="warning" />
<BAvatar variant="warning" icon-variant="primary" />
<BAvatar variant="info" icon-variant="secondary" />
```

  </template>
</HighlightCard>

When displaying text inside the avatar, text colors are calculated based on the `variant` property. The result is either `light` or `dark`. You can override the calculated icon color by specifying the `icon-variant` property.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <BAvatar variant="primary" text="P" />
    <BAvatar variant="primary" text-variant="dark" text="P" />
    <BAvatar variant="secondary" text="A" />
    <BAvatar variant="secondary" text-variant="info" text="A" />
    <BAvatar variant="warning" text="A" />
    <BAvatar variant="warning" text-variant="primary" text="A" />
  </div>
  <template #html>

```vue-html
<BAvatar variant="primary" text="P" />
<BAvatar variant="primary" text-variant="dark" text="P" />
<BAvatar variant="secondary" text="A" />
<BAvatar variant="secondary" text-variant="info" text="A" />
<BAvatar variant="warning" text="A" />
<BAvatar variant="warning" text-variant="primary" text="A" />
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
    <BAvatar />
    <BAvatar size="sm" />
    <BAvatar size="lg" />
    <BAvatar :size="24" />
    <BAvatar size="3em" />
    <BAvatar size="72px" />
  </div>
  <template #html>

```vue-html
<BAvatar />
<BAvatar size="sm" />
<BAvatar size="lg" />
<BAvatar :size="24" />
<BAvatar size="3em" />
<BAvatar size="72px" />
```

  </template>
</HighlightCard>

**Note:** Avatars are _always_ rendered with an aspect ratio of `1:1`.

### Square

Prefer a square avatar? simply set the `square` prop to `true`.

<HighlightCard>
    <BAvatar square />
  <template #html>

```vue-html
<BAvatar square />
```

  </template>
</HighlightCard>

### Rounding

`BAvatar` renders with a circular border radius. You can change the rounding by setting the prop
`rounded` to one of the values `true`, `'circle'`, `'sm'`, or `'lg'`.
When set to `true` (or the empty string `''`), it uses the Bootstrap default of medium rounding.
When set to `circle`, it uses a border radius of 50%, resulting in a circle.
Rounding specific edges is accomplished via the `rounded-top`, `rounded-bottom`, `rounded-start` and
`rounded-end` props. See the [migration guide](/docs/migration-guide#BAvatar) for differences
from `bootstrap-vue`

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <BAvatar rounded="sm" />
    <BAvatar rounded />
    <BAvatar rounded="lg" />
    <BAvatar rounded="md" rounded-top />
    <BAvatar rounded="md" rounded-start />
    <BAvatar rounded="md" rounded-end />
    <BAvatar rounded="md" rounded-bottom />
    <BAvatar rounded="circle" />
    <BAvatar rounded="0" />
  </div>
  <template #html>

```vue-html
<BAvatar rounded="sm" />
<BAvatar rounded />
<BAvatar rounded="lg" />
<BAvatar rounded="md" rounded-top />
<BAvatar rounded="md" rounded-start />
<BAvatar rounded="md" rounded-end />
<BAvatar rounded="md" rounded-bottom />
<BAvatar rounded="circle" />
<BAvatar rounded="0" />
```

  </template>
</HighlightCard>

**Notes:**

- The `square` prop takes precedence over the `rounded` prop
- Rather than `square` prop, you can set the `rounded` prop to the string `'0'` to
  achieve a square avatar

### Alignment

By default, `BAvatar` will be vertically centered with its adjoining content. In some cases you
may want to alter the alignment, such as ensuring that a text-only avatar aligns its text with the
adjoining text. Simply set a [vertical alignment utility](/docs/reference/utility-classes) class on
the component, such as `<BAvatar class="align-baseline" ...>` or
`<BAvatar class="align-top" ...>`, etc.

## Actionable avatars

Easily create avatars that respond to clicks. Actionable avatars will appear in the document tab sequence,
and are accessible for both screen reader and keyboard-only users.

Image avatars, when actionable, employ a basic scale transform on the image when hovered.

### Button

Want to trigger the opening of a modal or trigger an action? Set the `button` prop to instruct
`BAvatar` to render as a `<button>` element. When rendered as a button, the component will emit
the `click` event whenever clicked.

<HighlightCard>
  <BListGroup>
    <BListGroupItem>
      <BAvatar button @click="alertEvent" variant="primary" text="FF" class="align-baseline" />
      Button Text Avatar
    </BListGroupItem>
    <BListGroupItem>
      <BAvatar button @click="alertEvent" src="https://placekitten.com/300/300" />
      Button Image Avatar
    </BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup>
  <BListGroupItem>
    <BAvatar
      button
      @click="alertEvent"
      variant="primary"
      text="FF"
      class="align-baseline"
     />
    Button Text Avatar
  </BListGroupItem>
  <BListGroupItem>
    <BAvatar button @click="alertEvent" src="https://placekitten.com/300/300" />
    Button Image Avatar
  </BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

The prop `button-type` can be used to control the type of button to render. Supported values are
`'button'` (the default), `'submit'`, or `'reset'`.

### Link

Fancy an avatar as a link? Simply set the `href`.

<HighlightCard>
  <BListGroup>
    <BListGroupItem>
      <BAvatar href="#foo" variant="primary" text="FF" class="align-baseline" />
      Link Text Avatar
    </BListGroupItem>
    <BListGroupItem>
      <BAvatar href="#bar" src="https://placekitten.com/300/300" />
      Link Image Avatar
    </BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup>
  <BListGroupItem>
    <BAvatar href="#foo" variant="primary" text="FF" class="align-baseline" />
    Link Text Avatar
  </BListGroupItem>
  <BListGroupItem>
    <BAvatar href="#bar" src="https://placekitten.com/300/300" />
    Link Image Avatar
  </BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

**Note:**

- The `button` prop takes precedence over the `href` prop.

## Badge avatars

Easily add a badge to your avatar via the `badge` prop or `'badge'` slot, and the badge variant can
be set via the `badge-variant` prop. The badge will scale with the size of the avatar.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <BAvatar badge />
    <BAvatar badge badge-variant="danger" src="https://placekitten.com/300/300" />
    <BAvatar badge badge-variant="warning" icon="people-fill" />
    <BAvatar badge badge-variant="success" src="https://placekitten.com/300/300" />
    <BAvatar badge badge-variant="dark" text="BV" />
    <BAvatar square badge badge-variant="dark" text="BV" />
  </div>
  <template #html>

```vue-html
<BAvatar badge />
<BAvatar badge badge-variant="danger" src="https://placekitten.com/300/300" />
<BAvatar badge badge-variant="warning" icon="people-fill" />
<BAvatar badge badge-variant="success" src="https://placekitten.com/300/300" />
<BAvatar badge badge-variant="dark" text="BV" />
<BAvatar square badge badge-variant="dark" text="BV" />
```

  </template>
</HighlightCard>

### Badge content

Add textual content to the badge by supplying a string to the `badge` prop, or use the named slot
`'badge'`.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <BAvatar badge="BV" />
    <BAvatar badge="7" variant="primary" badge-variant="dark" />
  </div>
  <template #html>

```vue-html
<BAvatar badge="BV" />
<BAvatar badge="7" variant="primary" badge-variant="dark" />
```

  </template>
</HighlightCard>

### Badge positioning

By default, the badge appears on the bottom right of the avatar. You can use the `badge-placement` props to change the position.
Badge positioning properties have changed from `bootstrap-vue`. See the [migration guide](/docs/migration-guide#bavatar) for details.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <BAvatar badge />
    <BAvatar badge badge-placement="start" />
    <BAvatar badge badge-placement="top" />
    <BAvatar badge badge-placement="top-start" />
  </div>
  <template #html>

```vue-html
<BAvatar badge />
<BAvatar badge badge-placement="start" />
<BAvatar badge badge-placement="top" />
<BAvatar badge badge-placement="top-start" />
```

  </template>
</HighlightCard>

<NotYetImplemented />

Use the `badge-offset` prop to control the offset of the badge. The `badge-offset` must be a valid
CSS length string (i.e. `'2px'`, `'-2px'`, `'0.5em'`, etc.). Positive values will move the badge
inward, while negative values will move the badge outward.

<HighlightCard>
  <div class="d-flex" style="column-gap: 1%;">
    <BAvatar badge />
    <BAvatar badge badge-offset="-0.5em" />
    <BAvatar badge badge-offset="-2px" />
    <BAvatar badge badge-offset="2px" />
    <BAvatar badge badge-top />
    <BAvatar badge badge-top badge-offset="-0.5em" />
    <BAvatar badge badge-top badge-offset="-2px" />
    <BAvatar badge badge-top badge-offset="2px" />
  </div>
  <template #html>

```vue-html
<BAvatar badge />
<BAvatar badge badge-offset="-0.5em" />
<BAvatar badge badge-offset="-2px" />
<BAvatar badge badge-offset="2px" />
<BAvatar badge badge-top />
<BAvatar badge badge-top badge-offset="-0.5em" />
<BAvatar badge badge-top badge-offset="-2px" />
<BAvatar badge badge-top badge-offset="2px" />
```

  </template>
</HighlightCard>

## Avatar groups

Group multiple avatars together by wrapping them in a `BAvatarGroup` component:

<HighlightCard>
  <BAvatarGroup size="60px">
    <BAvatar />
    <BAvatar text="BV" variant="primary" />
    <BAvatar src="https://placekitten.com/300/300" variant="info" />
    <BAvatar text="OK" variant="danger" />
    <BAvatar variant="warning" />
    <BAvatar src="https://placekitten.com/320/320" variant="dark" />
    <BAvatar icon="music-note" variant="success" />
  </BAvatarGroup>
  <template #html>

```vue-html
<BAvatarGroup size="60px">
  <BAvatar />
  <BAvatar text="BV" variant="primary" />
  <BAvatar src="https://placekitten.com/300/300" variant="info" />
  <BAvatar text="OK" variant="danger" />
  <BAvatar variant="warning" />
  <BAvatar src="https://placekitten.com/320/320" variant="dark" />
  <BAvatar icon="music-note" variant="success" />
</BAvatarGroup>
```

  </template>
</HighlightCard>

**Notes:**

- The `variant`, `square` and `rounded` props on `BAvatarGroup` will take precedence over the
  respective props on individual avatars.

### Group size

To size the avatars, use the prop `size` on `BAvatarGroup`. The `size` prop accepts the same
type of values as the `size` prop on `BAvatar`. Note that the `size` prop will be ignored on
individual avatars when they are placed inside a `BAvatarGroup`.

<HighlightCard>
  <BAvatarGroup size="5rem">
    <BAvatar />
    <BAvatar />
    <BAvatar />
    <BAvatar />
    <BAvatar />
  </BAvatarGroup>
  <template #html>

```vue-html
<BAvatarGroup size="5rem">
  <BAvatar />
  <BAvatar />
  <BAvatar />
  <BAvatar />
  <BAvatar />
</BAvatarGroup>
```

  </template>
</HighlightCard>

### Group variant

Use the `variant` prop to color all child avatars in the `BAvatarGroup`. Note that the `variant`
prop, when set, will override the the `variant` specified on individual avatars.

<HighlightCard>
  <BAvatarGroup variant="success">
    <BAvatar />
    <BAvatar variant="info" />
    <BAvatar />
    <BAvatar />
    <BAvatar />
  </BAvatarGroup>
  <template #html>

```vue-html
<BAvatarGroup variant="success">
  <BAvatar />
  <BAvatar variant="info" />
  <BAvatar />
  <BAvatar />
  <BAvatar />
</BAvatarGroup>
```

  </template>
</HighlightCard>

### Group rounding

Similar to the `variant` prop, the `BAvatarGroup` props `square` and `rounded` take precedence
over the respective props on individual child avatars.

<HighlightCard>
  <BAvatarGroup rounded>
    <BAvatar />
    <BAvatar />
    <BAvatar />
    <BAvatar />
    <BAvatar />
  </BAvatarGroup>
  <template #html>

```vue-html
<BAvatarGroup rounded>
  <BAvatar />
  <BAvatar />
  <BAvatar />
  <BAvatar />
  <BAvatar />
</BAvatarGroup>
```

  </template>
</HighlightCard>

### Group overlap

By default, child avatars inside a `BAvatarGroup` will overlap by a factor of `0.3` (relative to
the size of the avatar). You can control the overlap amount by setting the `overlap` prop to a value
between `0` and `1`, where `0` means no overlap and `1` means 100% overlap.

<HighlightCard>
  <BAvatarGroup size="3rem" overlap="0.65">
    <BAvatar />
    <BAvatar />
    <BAvatar />
    <BAvatar />
    <BAvatar />
  </BAvatarGroup>
  <template #html>

```vue-html
<BAvatarGroup size="3rem" overlap="0.65">
  <BAvatar />
  <BAvatar />
  <BAvatar />
  <BAvatar />
  <BAvatar />
</BAvatarGroup>
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

Avatars are based upon `BBadge` and `BButton` components, and as such, rely upon Bootstrap's
`badge-*` and `btn-*` variant classes, as well as the `rounded-*`
[utility classes](/docs/reference/utility-classes).

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/avatar.data'
import {BAvatar, BAvatarGroup, BListGroup, BBadge, BListGroupItem} from 'bootstrap-vue-next'
import NotYetImplemented from '../../components/NotYetImplemented.vue'
import ComponentReference from '../../components/ComponentReference.vue'
import ComponentSidebar from '../../components/ComponentSidebar.vue'
import HighlightCard from '../../components/HighlightCard.vue'

const alertEvent = (event: PointerEvent) => {
  alert(`Clicked`);
}
</script>
