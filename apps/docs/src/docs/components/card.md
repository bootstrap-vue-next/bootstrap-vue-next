# Card

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

</div>

## Overview

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of
control and customization. Built with flexbox, they offer easy alignment and mix well with other
components.

`BCard` has no fixed width to start, so they'll naturally fill the full width of its parent
element. This is easily customized via styles or standard Bootstrap v4 sizing classes.

Change the default `div` root tag to any other HTML element by specifying via the `tag` prop.

<HighlightCard>
  <BCard
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
  >
    <BCardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </BCardText>
    <BButton href="#" variant="primary">Go somewhere</BButton>
  </BCard>
  <template #html>

```vue-html
<BCard
  title="Card Title"
  img-src="https://picsum.photos/600/300/?image=25"
  img-alt="Image"
  img-top
  tag="article"
  style="max-width: 20rem;"
>
  <BCardText>
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </BCardText>

  <BButton href="#" variant="primary">Go somewhere</BButton>
</BCard>
```

  </template>
</HighlightCard>

## Content types

Cards support a wide variety of content, including images, text, list groups, links and more. The
following are examples of what is supported inside a `BCard`.

### Card body

The building block of a `BCard` is the `BCardBody` section which provides a padded section
within a card.

By default, the `BCard` content is automatically placed in a `BCardBody` section:

<HighlightCard>
  <BCard class="text-center">
    <div class="bg-secondary text-light">
      This is some content within the default <samp>&lt;BCardBody&gt;</samp> block of the
      <samp>&lt;BCard&gt;</samp> component. Notice the padding between the card's border and this
      gray <samp>&lt;div&gt;</samp>.
    </div>
  </BCard>
  <template #html>

```vue-html
<BCard class="text-center">
  <div class="bg-secondary text-light">
    This is some content within the default <samp>&lt;BCardBody&gt;</samp> block of the
    <samp>&lt;BCard&gt;</samp> component. Notice the padding between the card's border and this
    gray <samp>&lt;div&gt;</samp>.
  </div>
</BCard>
```

  </template>
</HighlightCard>

Disable the automatic `BCardBody` section (and associated padding) by setting the prop `no-body`
on the `BCard`.

<HighlightCard>
  <BCard no-body class="text-center">
    <div class="bg-secondary text-light">
      This is some content without the default <samp>&lt;BCardBody&gt;</samp> section. Notice the
      lack of padding between the card's border and this gray <samp>&lt;div&gt;</samp>.
    </div>
  </BCard>
  <template #html>

```vue-html
<BCard no-body class="text-center">
  <div class="bg-secondary text-light">
    This is some content without the default <samp>&lt;BCardBody&gt;</samp> section. Notice the
    lack of padding between the card's border and this gray <samp>&lt;div&gt;</samp>.
  </div>
</BCard>
```

  </template>
</HighlightCard>

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

<HighlightCard>
  <BCard title="Card title" subtitle="Card subtitle">
    <BCardText>
      Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
      content.
    </BCardText>
    <BCardText>A second paragraph of text in the card.</BCardText>
    <a href="#" class="card-link">Card link</a>
    <BLink href="#" class="card-link">Another link</BLink>
  </BCard>
  <template #html>

```vue-html
<BCard title="Card title" subtitle="Card subtitle">
  <BCardText>
    Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
    content.
  </BCardText>
  <BCardText>A second paragraph of text in the card.</BCardText>
  <a href="#" class="card-link">Card link</a>
  <BLink href="#" class="card-link">Another link</BLink>
</BCard>
```

  </template>
</HighlightCard>

### Images

The `BCard` prop `img-src` places an image on the top of the card, and use the `img-alt` prop to
specify a string to be placed in the image's `alt` attribute. The image specified by the `img-src`
prop will be responsive and will adjust its width when the width of the card is changed.

Alternatively you can manually place images inside `BCard` using the sub-component
`BCardImg`. See the kitchen sink example below for usage.

<HighlightCard>
  <div>
    <h4>Top and Bottom</h4>
      <BCardGroup deck>
      <BCard img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
        <BCardText>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </BCardText>
      </BCard>
      <BCard img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
        <BCardText>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </BCardText>
      </BCard>
    </BCardGroup>
  </div>
  <div class="mt-4">
    <h4>Left and Right (or Start and End)</h4>
    <BCard img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
      <BCardText>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </BCardText>
    </BCard>
    <BCard img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
      <BCardText>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </BCardText>
    </BCard>
  </div>
  <template #html>

```vue-html
<h4>Top and Bottom</h4>

<BCardGroup deck>
  <BCard img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
    <BCardText>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </BCardText>
  </BCard>
  <BCard img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
    <BCardText>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </BCardText>
  </BCard>
</BCardGroup>

<h4>Left and Right (or Start and End)</h4>

<BCard img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
  <BCardText>
    Some quick example text to build on the card and make up the bulk of the card's content.
  </BCardText>
</BCard>
<BCard img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
  <BCardText>
    Some quick example text to build on the card and make up the bulk of the card's content.
  </BCardText>
</BCard>
```

  </template>
</HighlightCard>

**Note:** For left and right images, you may need to apply additional styles to classes
`.card-img-left` and `.card-img-right`, as images will "stretch" in height if you have content that
is taller than your image. Note headers and footers are not supported when images are left or right
aligned. You may find the [Horizontal Card Layout](#horizontal-card-layout) example to be more
flexible when creating a responsive horizontal card.

#### Overlay image

Place the image in the background of the card by setting the boolean prop `overlay`:

<HighlightCard>
  <BCard
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Image Overlay"
    subtitle="Subtitle"
  >
    <BCardText>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </BCardText>
  </BCard>
  <template #html>

```vue-html
<BCard
  overlay
  img-src="https://picsum.photos/900/250/?image=3"
  img-alt="Card Image"
  text-variant="white"
  title="Image Overlay"
  subtitle="Subtitle"
>
  <BCardText>
    Some quick example text to build on the card and make up the bulk of the card's content.
  </BCardText>
</BCard>
```

  </template>
</HighlightCard>

#### Lazy loaded images

`BCardImgLazy` has been removed in favor of using a standalone prop on BImg. Use prop `lazy` on BImg and it will automatically use the browsers built in lazy-loading features that are supported natively on all major browsers.

### Header and footer

Add an optional header and/or footer within a card via the `header`/`footer` props or named slots.
You can control the wrapper element tags used by setting the `header-tag` and `footer-tag` props
(both default is `div`).

<HighlightCard>
  <BCardGroup deck>
    <BCard
      header="featured"
      header-tag="header"
      footer="Card Footer"
      footer-tag="footer"
      title="Title"
    >
      <BCardText>Header and footers using props.</BCardText>
      <BButton href="#" variant="primary">Go somewhere</BButton>
    </BCard>
    <BCard title="Title" header-tag="header" footer-tag="footer">
      <template #header>
          <h6 class="mb-0">Header Slot</h6>
      </template>
      <BCardText>Header and footers using slots.</BCardText>
      <BButton href="#" variant="primary">Go somewhere</BButton>
      <template #footer>
          <em>Footer Slot</em>
      </template>
    </BCard>
  </BCardGroup>
  <template #html>

```vue-html
<BCardGroup deck>
  <BCard
    header="featured"
    header-tag="header"
    footer="Card Footer"
    footer-tag="footer"
    title="Title"
  >
    <BCardText>Header and footers using props.</BCardText>
    <BButton href="#" variant="primary">Go somewhere</BButton>
  </BCard>

  <BCard title="Title" header-tag="header" footer-tag="footer">
    <template #header>
      <h6 class="mb-0">Header Slot</h6>
    </template>
    <BCardText>Header and footers using slots.</BCardText>
    <BButton href="#" variant="primary">Go somewhere</BButton>
    <template #footer>
      <em>Footer Slot</em>
    </template>
  </BCard>
</BCardGroup>
```

  </template>
</HighlightCard>

### Kitchen sink example

Mix and match multiple content types to create the card you need, or throw everything in there.
Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width
card.

<HighlightCard>
  <BCard
    no-body
    style="max-width: 20rem;"
    img-src="https://placekitten.com/380/200"
    img-alt="Image"
    img-top
  >
    <template #header>
      <h4 class="mb-0">Hello World</h4>
    </template>
    <BCardBody>
      <BCardTitle>Card Title</BCardTitle>
      <BCardSubtitle class="mb-2">Card Sub Title</BCardSubtitle>
      <BCardText>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </BCardText>
    </BCardBody>
    <BListGroup flush>
      <BListGroupItem>Cras justo odio</BListGroupItem>
      <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
      <BListGroupItem>Vestibulum at eros</BListGroupItem>
    </BListGroup>
    <BCardBody>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </BCardBody>
    <BCardFooter>This is a footer</BCardFooter>
    <BCardImg src="https://placekitten.com/480/210" alt="Image" bottom />
  </BCard>
  <template #html>

```vue-html
<BCard
  no-body
  style="max-width: 20rem;"
  img-src="https://placekitten.com/380/200"
  img-alt="Image"
  img-top
>
  <template #header>
    <h4 class="mb-0">Hello World</h4>
  </template>
  <BCardBody>
    <BCardTitle>Card Title</BCardTitle>
    <BCardSubtitle class="mb-2">Card Sub Title</BCardSubtitle>
    <BCardText>
      Some quick example text to build on the card title and make up the bulk of the card's
      content.
    </BCardText>
  </BCardBody>

  <BListGroup flush>
    <BListGroupItem>Cras justo odio</BListGroupItem>
    <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
    <BListGroupItem>Vestibulum at eros</BListGroupItem>
  </BListGroup>
  <BCardBody>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </BCardBody>
  <BCardFooter>This is a footer</BCardFooter>
  <BCardImg src="https://placekitten.com/480/210" alt="Image" bottom />
</BCard>
```

  </template>
</HighlightCard>

## Horizontal card layout

Using a combination of grid components, utility classes and individual card sub-components, cards
can be made horizontal in a mobile-friendly and responsive way.

In the example below, we remove the row grid gutters with the `class="g-0"` prop on `BRow` and use
`md` props on `BCol` to make the card horizontal at the `md` breakpoint. Class `rounded-0`
removes the rounding of the `BCardImg` corners while class `overflow-hidden` on `BCard` will
appropriately clip the image's corners based on the border-radius of the card. Further adjustments
may be needed depending on your card content.

<HighlightCard>
  <BCard no-body class="overflow-hidden" style="max-width: 540px;">
    <BRow class="g-0">
      <BCol md="6">
        <BCardImg src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0" />
      </BCol>
      <BCol md="6">
        <BCardBody title="Horizontal Card">
          <BCardText>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </BCardText>
        </BCardBody>
      </BCol>
    </BRow>
  </BCard>
  <template #html>

```vue-html
<BCard no-body class="overflow-hidden" style="max-width: 540px;">
  <BRow class="g-0">
    <BCol md="6">
      <BCardImg
        src="https://picsum.photos/400/400/?image=20"
        alt="Image"
        class="rounded-0"
      />
    </BCol>
    <BCol md="6">
      <BCardBody title="Horizontal Card">
        <BCardText>
          This is a wider card with supporting text as a natural lead-in to additional content.
          This content is a little bit longer.
        </BCardText>
      </BCardBody>
    </BCol>
  </BRow>
</BCard>
```

  </template>
</HighlightCard>

## Text variants

By default, cards use dark text and assume a light background. You can reverse that by toggling the
color of text within, as well as that of the card's sub-components, via the prop `text-variant`.
Then, specify a dark background variant.

<HighlightCard>
  <BCard bg-variant="dark" text-variant="white" title="Card Title">
    <BCardText>
      With supporting text below as a natural lead-in to additional content.
    </BCardText>
    <BButton href="#" variant="primary">Go somewhere</BButton>
  </BCard>
  <template #html>

```vue-html
<BCard bg-variant="dark" text-variant="white" title="Card Title">
  <BCardText>
    With supporting text below as a natural lead-in to additional content.
  </BCardText>
  <BButton href="#" variant="primary">Go somewhere</BButton>
</BCard>
```

  </template>
</HighlightCard>

## Background and border variants

Cards include their own variant style for quickly changing the background-color and of a card via
the `bg-variant` and `border-variant` props. Darker solid variants may require setting the prop
`text-variant` to adjust the text color.

### Solid

<HighlightCard>
  <div>
    <BCardGroup deck>
      <BCard bg-variant="primary" text-variant="white" header="Primary" class="text-center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard bg-variant="success" text-variant="white" header="Success" class="text-center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
    </BCardGroup>
  </div>
  <div class="mt-3">
      <BCardGroup deck>
      <BCard bg-variant="info" text-variant="white" header="Info" class="text-center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard bg-variant="warning" text-variant="white" header="Warning" class="text-center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard bg-variant="danger" text-variant="white" header="Danger" class="text-center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
    </BCardGroup>
  </div>
  <div class="mt-3">
    <BCardGroup deck>
      <BCard bg-variant="light" header="Light" class="text-center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard bg-variant="dark" header="Dark" text-variant="white" class="text-center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard header="Default" class="text-center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
    </BCardGroup>
  </div>
  <template #html>

```vue-html
<BCardGroup deck>
  <BCard bg-variant="primary" text-variant="white" header="Primary" class="text-center">
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
  <BCard bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
  <BCard bg-variant="success" text-variant="white" header="Success" class="text-center">
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
</BCardGroup>

<BCardGroup deck>
  <BCard bg-variant="info" text-variant="white" header="Info" class="text-center">
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
  <BCard bg-variant="warning" text-variant="white" header="Warning" class="text-center">
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
  <BCard bg-variant="danger" text-variant="white" header="Danger" class="text-center">
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
</BCardGroup>

<BCardGroup deck>
  <BCard bg-variant="light" header="Light" class="text-center">
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
  <BCard bg-variant="dark" header="Dark" text-variant="white" class="text-center">
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
  <BCard header="Default" class="text-center">
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
</BCardGroup>
```

  </template>
</HighlightCard>

### Bordered

<HighlightCard>
  <div>
    <BCardGroup deck>
      <BCard
        border-variant="primary"
        header="Primary"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard
        border-variant="secondary"
        header="Secondary"
        header-border-variant="secondary"
        align="center"
      >
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard border-variant="success" header="Success" align="center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
    </BCardGroup>
  </div>
  <div class="mt-3">
    <BCardGroup deck>
      <BCard border-variant="info" header="Info" align="center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard
        border-variant="warning"
        header="Warning"
        header-bg-variant="transparent"
        align="center"
      >
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard
        border-variant="danger"
        header="Danger"
        header-border-variant="danger"
        header-text-variant="danger"
        align="center"
      >
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
    </BCardGroup>
  </div>
  <div class="mt-3">
    <BCardGroup deck class="mb-3">
      <BCard border-variant="light" header="Light" class="text-center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard border-variant="dark" header="Dark" align="center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
    </BCardGroup>
  </div>
  <template #html>

```vue-html
<BCardGroup deck>
  <BCard
    border-variant="primary"
    header="Primary"
    header-bg-variant="primary"
    header-text-variant="white"
    align="center"
  >
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
  <BCard
    border-variant="secondary"
    header="Secondary"
    header-border-variant="secondary"
    align="center"
  >
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
  <BCard border-variant="success" header="Success" align="center">
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
</BCardGroup>

<BCardGroup deck>
  <BCard border-variant="info" header="Info" align="center">
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
  <BCard
    border-variant="warning"
    header="Warning"
    header-bg-variant="transparent"
    align="center"
  >
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
  <BCard
    border-variant="danger"
    header="Danger"
    header-border-variant="danger"
    header-text-variant="danger"
    align="center"
  >
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
</BCardGroup>

<BCardGroup deck>
  <BCard border-variant="light" header="Light" class="text-center">
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
  <BCard border-variant="dark" header="Dark" align="center">
    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
  </BCard>
</BCardGroup>
```

  </template>
</HighlightCard>

#### Variant to class mapping

bootstrap-vue-next `BCard` variants are directly mapped to Bootstrap v5 card classes by pre-pending
`bg-` (for solid) or `border-` (for bordered) to the above variant names.

### Header and footer variants

You can also apply the solid and border variants individually to card headers and footers via the
`header-bg-variant`, `header-border-variant`, `header-text-variant`, `footer-bg-variant`,
`footer-border-variant`, and `footer-text-variant` props.

<HighlightCard>
  <BCard
    header="Card Header"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="dark"
    footer="Card Footer"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Title"
    style="max-width: 20rem;"
  >
    <BCardText>Header and footers variants.</BCardText>
  </BCard>
  <template #html>

```vue-html
<BCard
  header="Card Header"
  header-text-variant="white"
  header-tag="header"
  header-bg-variant="dark"
  footer="Card Footer"
  footer-tag="footer"
  footer-bg-variant="success"
  footer-border-variant="dark"
  title="Title"
  style="max-width: 20rem;"
>
  <BCardText>Header and footers variants.</BCardText>
</BCard>
```

  </template>
</HighlightCard>

### Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of
assistive technologies – such as screen readers. Ensure that information denoted by the color is
either obvious from the content itself (e.g. the visible text), or is included through alternative
means, such as additional text hidden with the `.visually-hidden` class.

## Nav integration

Integrate [`BNav`](/docs/components/nav) into card headers easily.

**Using the `header` slot**:

<HighlightCard>
  <BCard title="Card Title" body-class="text-center" header-tag="nav">
    <template #header>
      <BNav card-header tabs>
        <BNavItem active>Active</BNavItem>
        <BNavItem>Inactive</BNavItem>
        <BNavItem disabled>Disabled</BNavItem>
      </BNav>
    </template>
    <BCardText>
      With supporting text below as a natural lead-in to additional content.
    </BCardText>
    <BButton variant="primary">Go somewhere</BButton>
  </BCard>
  <template #html>

```vue-html
<BCard title="Card Title" body-class="text-center" header-tag="nav">
  <template #header>
    <BNav card-header tabs>
      <BNavItem active>Active</BNavItem>
      <BNavItem>Inactive</BNavItem>
      <BNavItem disabled>Disabled</BNavItem>
    </BNav>
  </template>

  <BCardText>
    With supporting text below as a natural lead-in to additional content.
  </BCardText>
  <BButton variant="primary">Go somewhere</BButton>
</BCard>
```

  </template>
</HighlightCard>

**Using `BCardHeader` sub-component:**

<HighlightCard>
  <BCard no-body>
    <BCardHeader header-tag="nav">
      <BNav card-header tabs>
        <BNavItem active>Active</BNavItem>
        <BNavItem>Inactive</BNavItem>
        <BNavItem disabled>Disabled</BNavItem>
      </BNav>
    </BCardHeader>
    <BCardBody class="text-center">
      <BCardTitle>Card Title</BCardTitle>
      <BCardText>
        With supporting text below as a natural lead-in to additional content.
      </BCardText>
      <BButton variant="primary">Go somewhere</BButton>
    </BCardBody>
  </BCard>
  <template #html>

```vue-html
<BCard no-body>
  <BCardHeader header-tag="nav">
    <BNav card-header tabs>
      <BNavItem active>Active</BNavItem>
      <BNavItem>Inactive</BNavItem>
      <BNavItem disabled>Disabled</BNavItem>
    </BNav>
  </BCardHeader>

  <BCardBody class="text-center">
    <BCardTitle>Card Title</BCardTitle>
    <BCardText>
      With supporting text below as a natural lead-in to additional content.
    </BCardText>
    <BButton variant="primary">Go somewhere</BButton>
  </BCardBody>
</BCard>
```

  </template>
</HighlightCard>

For more information on using `BNav` in card headers, refer to the
[Navs documentation](/docs/components/nav).

## Card groups

In addition to styling the content within cards, BootstrapVueNext includes a `BCardGroup` component
for laying out series of cards. For the time being, these layout options are not yet responsive.

### Default card group

Use card groups to render cards as a single, attached element with equal width and height columns.
Card groups use display: flex; to achieve their uniform sizing.

When using card groups with footers, their content will automatically line up.

<HighlightCard>
  <BCardGroup>
    <BCard title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
      <BCardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </BCardText>
      <template #footer>
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </template>
    </BCard>
    <BCard title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
      <BCardText>
        This card has supporting text below as a natural lead-in to additional content.
      </BCardText>
      <template #footer>
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </template>
    </BCard>
    <BCard title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
      <BCardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </BCardText>
      <template #footer>
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </template>
    </BCard>
  </BCardGroup>
  <template #html>

```vue-html
<BCardGroup>
  <BCard title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
    <BCardText>
      This is a wider card with supporting text below as a natural lead-in to additional content.
      This content is a little bit longer.
    </BCardText>
    <template #footer>
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </template>
  </BCard>

  <BCard title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
    <BCardText>
      This card has supporting text below as a natural lead-in to additional content.
    </BCardText>
    <template #footer>
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </template>
  </BCard>

  <BCard title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
    <BCardText>
      This is a wider card with supporting text below as a natural lead-in to additional content.
      This card has even longer content than the first to show that equal height action.
    </BCardText>
    <template #footer>
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </template>
  </BCard>
</BCardGroup>
```

  </template>
</HighlightCard>

### Card deck groups

Need a set of equal width and height cards that aren't attached to one another? Use card decks by
setting the `deck` prop. And just like with regular card groups, card footers in decks will
automatically line up.

<HighlightCard>
  <BCardGroup deck>
    <BCard title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <BCardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </BCardText>
      <template #footer>
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </template>
    </BCard>
    <BCard title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <BCardText>
        This card has supporting text below as a natural lead-in to additional content.
      </BCardText>
      <template #footer>
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </template>
    </BCard>
    <BCard title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <BCardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </BCardText>
      <template #footer>
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </template>
    </BCard>
  </BCardGroup>
  <template #html>

```vue-html
<BCardGroup deck>
  <BCard title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
    <BCardText>
      This is a wider card with supporting text below as a natural lead-in to additional content.
      This content is a little bit longer.
    </BCardText>
    <template #footer>
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </template>
  </BCard>

  <BCard title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
    <BCardText>
      This card has supporting text below as a natural lead-in to additional content.
    </BCardText>
    <template #footer>
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </template>
  </BCard>

  <BCard title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
    <BCardText>
      This is a wider card with supporting text below as a natural lead-in to additional content.
      This card has even longer content than the first to show that equal height action.
    </BCardText>
    <template #footer>
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </template>
  </BCard>
</BCardGroup>
```

  </template>
</HighlightCard>

### Card column groups

Cards can be organized into Masonry-like columns with by wrapping them in a `BCardGroup` with
the prop `columns` set. Cards are built with CSS column properties instead of flexbox for easier
alignment. Cards are ordered from top to bottom and left to right.

Heads up! Your mileage with card columns may vary. To prevent cards breaking across columns, we must
set them to display: inline-block as column-break-inside: avoid is not a bulletproof solution yet.

<HighlightCard>
  <BCardGroup columns>
    <BCard
      title="Card title that wraps to a new line"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
      >
      <BCardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </BCardText>
    </BCard>
    <BCard header="Quote">
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </BCard>
    <BCard title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
      <BCardText>
        This card has supporting text below as a natural lead-in to additional content.
      </BCardText>
      <BCardText class="small text-body-secondary">Last updated 3 mins ago</BCardText>
    </BCard>
    <BCard bg-variant="primary" text-variant="white">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </footer>
      </blockquote>
    </BCard>
    <BCard>
      <BCardTitle>Title</BCardTitle>
      <BCardText>
        This card has supporting text below as a natural lead-in to additional content.
      </BCardText>
      <BCardText class="small text-body-secondary">Last updated 3 mins ago</BCardText>
    </BCard>
    <BCard img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay />
    <BCard img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
      <BCardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first.
      </BCardText>
      <template #footer>
        <small class="text-body-secondary">Footer Text</small>
      </template>
    </BCard>
  </BCardGroup>
  <template #html>

```vue-html
<BCardGroup columns>
  <BCard
    title="Card title that wraps to a new line"
    img-src="https://placekitten.com/g/400/450"
    img-alt="Image"
    img-top
  >
    <BCardText>
      This is a wider card with supporting text below as a natural lead-in to additional content.
      This content is a little bit longer.
    </BCardText>
  </BCard>

  <BCard header="Quote">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </BCard>

  <BCard title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
    <BCardText>
      This card has supporting text below as a natural lead-in to additional content.
    </BCardText>
    <BCardText class="small text-body-secondary">Last updated 3 mins ago</BCardText>
  </BCard>

  <BCard bg-variant="primary" text-variant="white">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>
        <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
      </footer>
    </blockquote>
  </BCard>

  <BCard>
    <BCardTitle>Title</BCardTitle>
    <BCardText>
      This card has supporting text below as a natural lead-in to additional content.
    </BCardText>
    <BCardText class="small text-body-secondary">Last updated 3 mins ago</BCardText>
  </BCard>

  <BCard img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay />

  <BCard img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
    <BCardText>
      This is a wider card with supporting text below as a natural lead-in to additional content.
      This card has even longer content than the first.
    </BCardText>
    <template #footer>
      <small class="text-body-secondary">Footer Text</small>
    </template>
  </BCard>
</BCardGroup>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/card.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {
  BCard,
  BCardHeader,
  BCardBody,
  BNav,
  BRow,
  BCol,
  BCardImg,
  BNavItem,
  BCardFooter,
  BListGroupItem,
  BListGroup,
  BCardSubtitle,
  BCardTitle,
  BLink,
  BCardGroup,
  BCardText,
  BButton
} from 'bootstrap-vue-next'
</script>
