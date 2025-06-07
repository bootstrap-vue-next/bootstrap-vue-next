# Card

<PageHeader>

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

</PageHeader>

## Overview

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of
control and customization. Built with flexbox, they offer easy alignment and mix well with other
components.

`BCard` has no fixed width to start, so they'll naturally fill the full width of its parent
element. This is easily customized via styles or standard Bootstrap 5 sizing classes.

Change the default `div` root tag to any other HTML element by specifying via the `tag` prop.

<<< DEMO ./demo/CardOverview.vue#template{vue-html}

## Content types

Cards support a wide variety of content, including images, text, list groups, links and more. The
following are examples of what is supported inside a `BCard`.

### Card body

The building block of a `BCard` is the `BCardBody` section which provides a padded section
within a card.

By default, the `BCard` content is automatically placed in a `BCardBody` section:

<<< DEMO ./demo/CardBody.vue#template{vue-html}

Disable the automatic `BCardBody` section (and associated padding) by setting the prop `no-body`
on the `BCard`.

<<< DEMO ./demo/CardNoBody.vue#template{vue-html}

Note that with `no-body` enabled, the content of the `title` and `subtitle` props will not be
rendered.

Use the `BCardBody` sub-component to place your own card body anywhere in a `BCard` component
that has `no-body` set.

#### Titles, text, and links

_Card titles_ are adding via the `title` prop, and _sub titles_ are added via the `subtitle` prop.
The title is rendered using the sub-component `BCardTitle` while the Sub Title is rendered using
the sub-component `BCardSubtitle`.

With sub-component `BCardText`, paragraph text can be added to the card. The last
`BCardText` in the card body will have its bottom margin automatically removed (via CSS). Text
within `BCardText` can also be styled with the standard HTML tags.

Links can be added and placed next to each other by adding the `.card-link` class to a `<a>` tag (or
`BLink` component).

<<< DEMO ./demo/CardParts.vue#template{vue-html}

### Images

The `BCard` prop `img-src` places an image on the top of the card, and use the `img-alt` prop to
specify a string to be placed in the image's `alt` attribute. The image specified by the `img-src`
prop will be responsive and will adjust its width when the width of the card is changed.

Alternatively you can manually place images inside `BCard` using the sub-component
`BCardImg`. See the kitchen sink example below for usage.

<<< DEMO ./demo/CardImages.vue#template{vue-html}

**Note:** For left and right images, you may need to apply additional styles to classes
`.card-img-start` and `.card-img-end`, as images will "stretch" in height if you have content that
is taller than your image. Note headers and footers are not supported when images are left or right
aligned. You may find the [Horizontal Card Layout](#horizontal-card-layout) example to be more
flexible when creating a responsive horizontal card.

#### Overlay image

Place the image in the background of the card by setting the boolean prop `overlay`:

<<< DEMO ./demo/CardOverlayImage.vue#template{vue-html}

#### Lazy loaded images

`BCardImgLazy` has been removed in favor of using a standalone prop on BImg. Use prop `lazy` on BImg and it will automatically use the browsers built in lazy-loading features that are supported natively on all major browsers.

### Header and footer

Add an optional header and/or footer within a card via the `header`/`footer` props or named slots.
You can control the wrapper element tags used by setting the `header-tag` and `footer-tag` props
(both default is `div`).

<<< DEMO ./demo/CardHeaderFooter.vue#template{vue-html}

### Kitchen sink example

Mix and match multiple content types to create the card you need, or throw everything in there.
Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width
card.

<<< DEMO ./demo/CardKitchenSink.vue#template{vue-html}

## Horizontal card layout

Using a combination of grid components, utility classes and individual card sub-components, cards
can be made horizontal in a mobile-friendly and responsive way.

In the example below, we remove the row grid gutters with the `class="g-0"` prop on `BRow` and use
`md` props on `BCol` to make the card horizontal at the `md` breakpoint. Class `rounded-0`
removes the rounding of the `BCardImg` corners while class `overflow-hidden` on `BCard` will
appropriately clip the image's corners based on the border-radius of the card. Further adjustments
may be needed depending on your card content.

<<< DEMO ./demo/CardHorizontal.vue#template{vue-html}

## Text variants

By default, cards use dark text and assume a light background. You can reverse that by toggling the
color of text within, as well as that of the card's sub-components, via the prop `text-variant`.
Then, specify a dark background variant.

<<< DEMO ./demo/CardTextVariants.vue#template{vue-html}

## Background and border variants

Cards include their own variant style for quickly changing the background-color and of a card via
the `bg-variant` and `border-variant` props. Darker solid variants may require setting the prop
`text-variant` to adjust the text color.

### Solid

<<< DEMO ./demo/CardSolidVariants.vue#template{vue-html}

### Bordered

<<< DEMO ./demo/CardBorderedVariants.vue#template{vue-html}

#### Variant to class mapping

bootstrap-vue-next `BCard` variants are directly mapped to Bootstrap v5 card classes by pre-pending
`bg-` (for solid) or `border-` (for bordered) to the above variant names.

### Header and footer variants

You can also apply the solid and border variants individually to card headers and footers via the
`header-bg-variant`, `header-border-variant`, `header-text-variant`, `footer-bg-variant`,
`footer-border-variant`, and `footer-text-variant` props.

<<< DEMO ./demo/CardHeaderFooterVariants.vue#template{vue-html}

### Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of
assistive technologies – such as screen readers. Ensure that information denoted by the color is
either obvious from the content itself (e.g. the visible text), or is included through alternative
means, such as additional text hidden with the `.visually-hidden` class.

## Nav integration

Integrate [`BNav`](/docs/components/nav) into card headers easily.

**Using the `header` slot**:

<<< DEMO ./demo/CardNavSlot.vue#template{vue-html}

**Using `BCardHeader` sub-component:**

<<< DEMO ./demo/CardNavComponent.vue#template{vue-html}

For more information on using `BNav` in card headers, refer to the
[Navs documentation](/docs/components/nav).

## Card groups

In addition to styling the content within cards, BootstrapVueNext includes a `BCardGroup` component
for laying out series of cards.

<NotYetImplemented>For the time being, these layout options are not responsive.</NotYetImplemented>

### Default card group

Use card groups to render cards as a single, attached element with equal width and height columns.
Card groups use display: flex; to achieve their uniform sizing.

When using card groups with footers, their content will automatically line up.

<<< DEMO ./demo/CardGroup.vue#template{vue-html}

### Card deck groups

Need a set of equal width and height cards that aren't attached to one another? Use card decks by
setting the `deck` prop. And just like with regular card groups, card footers in decks will
automatically line up.

<<< DEMO ./demo/CardDeck.vue#template{vue-html}

### Card column groups

Cards can be organized into Masonry-like columns with by wrapping them in a `BCardGroup` with
the prop `columns` set. Cards are built with CSS column properties instead of flexbox for easier
alignment. Cards are ordered from top to bottom and left to right.

Heads up! Your mileage with card columns may vary. To prevent cards breaking across columns, we must
set them to display: inline-block as column-break-inside: avoid is not a bulletproof solution yet.

<<< DEMO ./demo/CardColumn.vue#template{vue-html}

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/card.data'
</script>
