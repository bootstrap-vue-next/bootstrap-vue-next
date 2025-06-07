# Avatar

<PageHeader>

Avatars are a custom component, and are typically used to display a user profile as a
picture or short text. `BAvatar` provides several props for customizing its
appearance such as color variant and roundness, and optionally supports acting as a button, link,
or a [router link](/docs/reference/router-links).

</PageHeader>

## Overview

Avatars are lightweight components, which render inline by default, so that they are vertically
centered beside any adjoining plain text. They also can be used as children of other components.

<<< DEMO ./demo/AvatarOverview.vue#template{vue-html}

## Avatar types

The avatar content can be either an image or short text string. Avatar content defaults
to the [`'person-fill'` icon](<[/docs/icons](https://icons.getbootstrap.com/icons/person-fill/)>)
when no other content is specified.

You can also supply custom content via the default slot, although you may need to apply additional
styling on the content.

### Image content

Use the `src` prop to specify a URL of an image to use as the avatar content. The image should have
an aspect ratio of `1:1` (meaning the width and height should be equal), otherwise image aspect
distortion will occur. The image will be scaled up or down to fit within the avatar's bounding box.

<<< DEMO ./demo/AvatarImage.vue#template{vue-html}

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

<<< DEMO ./demo/AvatarText.vue#template{vue-html}

### Custom content

Use the `default` slot to render custom content in the avatar, for finer grained control of its
appearance, or if using custom icons or SVGs e.g.:

<<< DEMO ./demo/AvatarCustom.vue#template{vue-html}

**Notes:**

- The default slot takes precedence over the `text` or `src` props.
- The default slot content will be wrapped in a `<span>` element to ensure proper centering.
- You may need additional styling applied to the custom content to compensate for the
  [shape of avatar component](#rounding).

## Styling

### Variants

Use the `variant` prop to specify one of Bootstrap theme variant colors. The default variant is
`secondary`.

<<< DEMO ./demo/AvatarVariants.vue#template{vue-html}

When displaying text inside the avatar, text colors are calculated based on the `variant` prop. The result is either `light` or `dark`. You can override the calculated text color by manually specifying the `bg-variant` and `text-variant` props. Note that
`bg-variant` and `text-variant` take precedence over `variant`. See the
[Color Variant Reference](/docs/reference/color-variants#variant-interactions) for details.

<<< DEMO ./demo/AvatarVariantOverride.vue#template{vue-html}

### Sizing

By default, avatars are sized to `2.5em` (which is relative to the current font size). You can
change the size of the avatar by changing the current font size, or use the prop `size` to specify
an explicit size. The sizes `sm`, `md` and `lg` default to `1.5em`, `2.5em` and `3.5em`. Numbers get
converted to pixel values. Any other value _must_ include the units (such as `px`, `em`, or `rem`).

<<< DEMO ./demo/AvatarSize.vue#template{vue-html}

**Note:** Avatars are _always_ rendered with an aspect ratio of `1:1`.

### Square

Prefer a square avatar? simply set the `square` prop to `true`.

<<< DEMO ./demo/AvatarSquare.vue#template{vue-html}

### Rounding

`BAvatar` renders with a circular border radius. You can change the rounding by setting the prop
`rounded` to any of the values of [`RadiusElement`](/docs/types#radiuselement).
When set to `true` (or the empty string `''`), it uses the Bootstrap default of medium rounding.
When set to `circle`, it uses a border radius of 50%, resulting in a circle.
Rounding specific edges is accomplished via the `rounded-top`, `rounded-bottom`, `rounded-start` and
`rounded-end` props. See the [migration guide](/docs/migration-guide#BAvatar) for differences
from `bootstrap-vue`

<<< DEMO ./demo/AvatarRounding.vue#template{vue-html}

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

<<< DEMO ./demo/AvatarButton.vue#template{vue-html}

The prop `button-type` can be used to control the type of button to render. Supported values are
`'button'` (the default), `'submit'`, or `'reset'`.

### Link

Fancy an avatar as a link or router link? Simply set either the `href` or `to` prop (respectively).
The `to` prop required that the [Vue Router](https://router.vuejs.org/) is installed.

<<< DEMO ./demo/AvatarLink.vue#template{vue-html}

**Note:**

The `button` prop takes precedence over the `href` and `to` props.
For additional details on the `RouterLink` compatible props, please refer to the
[Router support reference section](/docs/reference/router-links).

## Badge avatars

Easily add a badge to your avatar via the `badge` prop or `'badge'` slot, and the badge variant can
be set via the `badge-variant` prop. The badge will scale with the size of the avatar.

<<< DEMO ./demo/AvatarBadge.vue#template{vue-html}

### Badge content

Add textual content to the badge by supplying a string to the `badge` prop, or use the named slot
`'badge'`.

<<< DEMO ./demo/AvatarBadgeContent.vue#template{vue-html}

### Badge positioning

By default, the badge appears on the bottom right of the avatar. You can use the `badge-placement` props to change the position.
Badge positioning properties have changed from `bootstrap-vue`. See the [migration guide](/docs/migration-guide#bavatar) for details.

<<< DEMO ./demo/AvatarBadgePositioning.vue#template{vue-html}

Use the `badge-offset` prop to control the offset of the badge. The `badge-offset` must be a valid
CSS length string (i.e. `'2px'`, `'-2px'`, `'0.5em'`, etc.). Positive values will move the badge
inward, while negative values will move the badge outward.

<NotYetImplemented />

<!-- <<< DEMO ./demo/AvatarBadgeOffset.vue#template{vue-html} -->

## Avatar groups

<<< DEMO ./demo/AvatarGroups.vue#template{vue-html}

**Notes:**

- The `variant`, `square` and `rounded` props on `BAvatarGroup` will take precedence over the
  respective props on individual avatars.

### Group size

To size the avatars, use the prop `size` on `BAvatarGroup`. The `size` prop accepts the same
type of values as the `size` prop on `BAvatar`. Note that the `size` prop will be ignored on
individual avatars when they are placed inside a `BAvatarGroup`.

<<< DEMO ./demo/AvatarGroupSize.vue#template{vue-html}

### Group variant

Use the `variant` prop to color all child avatars in the `BAvatarGroup`. Note that the `variant`
prop, when set, will override the the `variant` specified on individual avatars.

<<< DEMO ./demo/AvatarGroupVariant.vue#template{vue-html}

### Group rounding

Similar to the `variant` prop, the `BAvatarGroup` props `square` and `rounded` take precedence
over the respective props on individual child avatars.

<<< DEMO ./demo/AvatarGroupRounding.vue#template{vue-html}

### Group overlap

By default, child avatars inside a `BAvatarGroup` will overlap by a factor of `0.3` (relative to
the size of the avatar). You can control the overlap amount by setting the `overlap` prop to a value
between `0` and `1`, where `0` means no overlap and `1` means 100% overlap.

<<< DEMO ./demo/AvatarGroupOverlap.vue#template{vue-html}

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
</script>
