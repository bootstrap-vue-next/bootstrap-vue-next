# List Group

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">

List Groups are a flexible and powerful component for displaying a series of content. List Group items can be modified to support just about any content within. They can also be used as navigation via various props.

</div>

<HighlightCard>
  <BListGroup>
    <BListGroupItem>Cras justo odio</BListGroupItem>
    <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
    <BListGroupItem>Morbi leo risus</BListGroupItem>
    <BListGroupItem>Porta ac consectetur ac</BListGroupItem>
    <BListGroupItem>Vestibulum at eros</BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup>
  <BListGroupItem>Cras justo odio</BListGroupItem>
  <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
  <BListGroupItem>Morbi leo risus</BListGroupItem>
  <BListGroupItem>Porta ac consectetur ac</BListGroupItem>
  <BListGroupItem>Vestibulum at eros</BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

## Active items

Set the `active` prop on a `BListGroupItem` to indicate the current active selection.

<HighlightCard>
  <BListGroup>
    <BListGroupItem>Cras justo odio</BListGroupItem>
    <BListGroupItem active>Dapibus ac facilisis in</BListGroupItem>
    <BListGroupItem>Morbi leo risus</BListGroupItem>
    <BListGroupItem>Porta ac consectetur ac</BListGroupItem>
    <BListGroupItem>Vestibulum at eros</BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup>
  <BListGroupItem>Cras justo odio</BListGroupItem>
  <BListGroupItem active>Dapibus ac facilisis in</BListGroupItem>
  <BListGroupItem>Morbi leo risus</BListGroupItem>
  <BListGroupItem>Porta ac consectetur ac</BListGroupItem>
  <BListGroupItem>Vestibulum at eros</BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

## Disabled items

Set the `disabled` prop on a `BListGroupItem` to make it appear disabled (also works with
actionable items. see below).

<HighlightCard>
  <BListGroup>
    <BListGroupItem disabled>Cras justo odio</BListGroupItem>
    <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
    <BListGroupItem>Morbi leo risus</BListGroupItem>
    <BListGroupItem disabled>Porta ac consectetur ac</BListGroupItem>
    <BListGroupItem>Vestibulum at eros</BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup>
  <BListGroupItem disabled>Cras justo odio</BListGroupItem>
  <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
  <BListGroupItem>Morbi leo risus</BListGroupItem>
  <BListGroupItem disabled>Porta ac consectetur ac</BListGroupItem>
  <BListGroupItem>Vestibulum at eros</BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

## Actionable list group items

Turn a `BListGroupItem` into an actionable _link_ (`<a href="...">`) by specifying either an
`href` prop or ~~[router-link](/docs/reference/router-links)~~ `to` prop.

<HighlightCard>
  <BListGroup>
    <BListGroupItem href="#some-link">Awesome link</BListGroupItem>
    <BListGroupItem href="#" active>Link with active state</BListGroupItem>
    <BListGroupItem href="#">Action links are easy</BListGroupItem>
    <BListGroupItem href="#foobar" disabled>Disabled link</BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup>
  <BListGroupItem href="#some-link">Awesome link</BListGroupItem>
  <BListGroupItem href="#" active>Link with active state</BListGroupItem>
  <BListGroupItem href="#">Action links are easy</BListGroupItem>
  <BListGroupItem href="#foobar" disabled>Disabled link</BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

Or if you prefer `<button>` elements over links, set the `button` prop to `true`.

<HighlightCard>
  <BListGroup>
    <BListGroupItem button>Button item</BListGroupItem>
    <BListGroupItem button>I am a button</BListGroupItem>
    <BListGroupItem button disabled>Disabled button</BListGroupItem>
    <BListGroupItem button>This is a button too</BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup>
  <BListGroupItem button>Button item</BListGroupItem>
  <BListGroupItem button>I am a button</BListGroupItem>
  <BListGroupItem button disabled>Disabled button</BListGroupItem>
  <BListGroupItem button>This is a button too</BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

**Notes:**

- When the prop `button` is `true`, all [link related props](/docs/components/link) (other than
  `active`) and the `tag` prop will have no effect
- When `href` or `to` are set, the `tag` prop has no effect

~~Refer to the [Router support](/docs/reference/router-links) reference page for router-link specific
props.~~

## Contextual variants

Use contextual variants to style list items with a stateful background and color, via the `variant`
prop.

<HighlightCard>
  <BListGroup>
    <BListGroupItem>Default list group item</BListGroupItem>
    <BListGroupItem variant="primary">Primary list group item</BListGroupItem>
    <BListGroupItem variant="secondary">Secondary list group item</BListGroupItem>
    <BListGroupItem variant="success">Success list group item</BListGroupItem>
    <BListGroupItem variant="danger">Danger list group item</BListGroupItem>
    <BListGroupItem variant="warning">Warning list group item</BListGroupItem>
    <BListGroupItem variant="info">Info list group item</BListGroupItem>
    <BListGroupItem variant="light">Light list group item</BListGroupItem>
    <BListGroupItem variant="dark">Dark list group item</BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup>
  <BListGroupItem>Default list group item</BListGroupItem>
  <BListGroupItem variant="primary">Primary list group item</BListGroupItem>
  <BListGroupItem variant="secondary">Secondary list group item</BListGroupItem>
  <BListGroupItem variant="success">Success list group item</BListGroupItem>
  <BListGroupItem variant="danger">Danger list group item</BListGroupItem>
  <BListGroupItem variant="warning">Warning list group item</BListGroupItem>
  <BListGroupItem variant="info">Info list group item</BListGroupItem>
  <BListGroupItem variant="light">Light list group item</BListGroupItem>
  <BListGroupItem variant="dark">Dark list group item</BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

Contextual variants also work with action items. Note the addition of the hover styling here not
present in the previous example. Also supported is the `active` state; set it to indicate an active
selection on a contextual list group item.

<HighlightCard>
  <BListGroup>
    <BListGroupItem href="#">Default list group item</BListGroupItem>
    <BListGroupItem href="#" variant="primary">Primary list group item</BListGroupItem>
    <BListGroupItem href="#" variant="secondary">Secondary list group item</BListGroupItem>
    <BListGroupItem href="#" variant="success">Success list group item</BListGroupItem>
    <BListGroupItem href="#" variant="danger">Danger list group item</BListGroupItem>
    <BListGroupItem href="#" variant="warning">Warning list group item</BListGroupItem>
    <BListGroupItem href="#" variant="info">Info list group item</BListGroupItem>
    <BListGroupItem href="#" variant="light">Light list group item</BListGroupItem>
    <BListGroupItem href="#" variant="dark">Dark list group item</BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup>
  <BListGroupItem href="#">Default list group item</BListGroupItem>
  <BListGroupItem href="#" variant="primary">Primary list group item</BListGroupItem>
  <BListGroupItem href="#" variant="secondary">Secondary list group item</BListGroupItem>
  <BListGroupItem href="#" variant="success">Success list group item</BListGroupItem>
  <BListGroupItem href="#" variant="danger">Danger list group item</BListGroupItem>
  <BListGroupItem href="#" variant="warning">Warning list group item</BListGroupItem>
  <BListGroupItem href="#" variant="info">Info list group item</BListGroupItem>
  <BListGroupItem href="#" variant="light">Light list group item</BListGroupItem>
  <BListGroupItem href="#" variant="dark">Dark list group item</BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

### Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of
assistive technologies – such as screen readers. Ensure that information denoted by the color is
either obvious from the content itself (e.g. the visible text), or is included through alternative
means, such as additional text hidden using the `.visually-hidden` class.

## With badges

Add [badges](/docs/components/badge) to any list group item to show unread counts, activity, and
more with the help of some [flex utility classes](/docs/reference/utility-classes).

<HighlightCard>
  <BListGroup>
    <BListGroupItem class="d-flex justify-content-between align-items-center">
      Cras justo odio
      <BBadge variant="primary" pill>14</BBadge>
    </BListGroupItem>
    <BListGroupItem class="d-flex justify-content-between align-items-center">
      Dapibus ac facilisis in
      <BBadge variant="primary" pill>2</BBadge>
    </BListGroupItem>
    <BListGroupItem class="d-flex justify-content-between align-items-center">
      Morbi leo risus
      <BBadge variant="primary" pill>1</BBadge>
    </BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup>
  <BListGroupItem class="d-flex justify-content-between align-items-center">
    Cras justo odio
    <BBadge variant="primary" pill>14</BBadge>
  </BListGroupItem>

  <BListGroupItem class="d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <BBadge variant="primary" pill>2</BBadge>
  </BListGroupItem>

  <BListGroupItem class="d-flex justify-content-between align-items-center">
    Morbi leo risus
    <BBadge variant="primary" pill>1</BBadge>
  </BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

## Numbered

Add the `numbered` property to opt into numbered list group items. Numbers are generated via CSS (as opposed to a `<ol>s` default browser styling) for better placement inside list group items and to allow for better customization.

<HighlightCard>
  <BListGroup numbered>
    <BListGroupItem>Cras justo odioo</BListGroupItem>
    <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
    <BListGroupItem>Morbi leo risus</BListGroupItem>
    <BListGroupItem>Porta ac consectetur ac</BListGroupItem>
    <BListGroupItem>Vestibulum at eros</BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup numbered>
  <BListGroupItem>Cras justo odioo</BListGroupItem>
  <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
  <BListGroupItem>Morbi leo risus</BListGroupItem>
  <BListGroupItem>Porta ac consectetur ac</BListGroupItem>
  <BListGroupItem>Vestibulum at eros</BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

These work great with custom content as well.

<HighlightCard>
  <BListGroup numbered>
    <BListGroupItem class="d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <BBadge variant="primary" pill>14</BBadge>
    </BListGroupItem>
    <BListGroupItem class="d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Dapibus ac facilisis in
        </div>
        <BBadge variant="primary" pill>2</BBadge>
    </BListGroupItem>
    <BListGroupItem class="d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Morbi leo risus
      </div>
      <BBadge variant="primary" pill>1</BBadge>
    </BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup numbered>
  <BListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <BBadge variant="primary" pill>14</BBadge>
  </BListGroupItem>

  <BListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Dapibus ac facilisis in
    </div>
    <BBadge variant="primary" pill>2</BBadge>
  </BListGroupItem>

  <BListGroupItem class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Morbi leo risus
    </div>
    <BBadge variant="primary" pill>1</BBadge>
  </BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

**Note:** When using the numbered property, it supersedes the tag property on `BListGroup` and `BListGroupItem`.
With numbered set, the `BListGroup`is always rendered as a `ol`, while the `BListGroupItem` is rendered as a `li`.

## List Groups inside cards

Incorporate list groups into [cards](/docs/components/card). Use the `BListGroup` prop `flush`
prop when using cards with `no-body` to make the sides of the list group flush with the card.

<HighlightCard>
  <BCardGroup deck>
    <BCard header="Card with list group">
      <BListGroup>
        <BListGroupItem href="#">Cras justo odio</BListGroupItem>
        <BListGroupItem href="#">Dapibus ac facilisis in</BListGroupItem>
        <BListGroupItem href="#">Vestibulum at eros</BListGroupItem>
      </BListGroup>
      <p class="card-text mt-2">
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
        consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
        mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
      </p>
    </BCard>
    <BCard no-body header="Card with flush list group">
      <BListGroup flush>
        <BListGroupItem href="#">Cras justo odio</BListGroupItem>
        <BListGroupItem href="#">Dapibus ac facilisis in</BListGroupItem>
        <BListGroupItem href="#">Vestibulum at eros</BListGroupItem>
      </BListGroup>
      <BCardBody>
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
        consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
        mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
      </BCardBody>
    </BCard>
  </BCardGroup>
  <template #html>

```vue-html
<BCardGroup deck>
  <BCard header="Card with list group">
    <BListGroup>
      <BListGroupItem href="#">Cras justo odio</BListGroupItem>
      <BListGroupItem href="#">Dapibus ac facilisis in</BListGroupItem>
      <BListGroupItem href="#">Vestibulum at eros</BListGroupItem>
    </BListGroup>

    <p class="card-text mt-2">
      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
      consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
      mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
    </p>
  </BCard>

  <BCard no-body header="Card with flush list group">
    <BListGroup flush>
      <BListGroupItem href="#">Cras justo odio</BListGroupItem>
      <BListGroupItem href="#">Dapibus ac facilisis in</BListGroupItem>
      <BListGroupItem href="#">Vestibulum at eros</BListGroupItem>
    </BListGroup>

    <BCardBody>
      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
      consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
      mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
    </BCardBody>
  </BCard>
</BCardGroup>
```

  </template>
</HighlightCard>

## Horizontal list groups

Set the prop `horizontal` to `true` to change the layout of list group items from vertical to
horizontal across all breakpoints. Alternatively, set `horizontal` to a responsive breakpoint (`sm`,
`md`, `lg` or `xl`) to make a list group horizontal starting at that breakpoint's min-width.
Currently, horizontal list groups cannot be combined with `flush` list groups.

**ProTip:** Want equal-width list group items when horizontal? Add the class `flex-fill` to each
list group item.

**Always horizontal:**

<HighlightCard>
  <BListGroup horizontal>
    <BListGroupItem>Cras justo odio</BListGroupItem>
    <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
    <BListGroupItem>Morbi leo risus</BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup horizontal>
  <BListGroupItem>Cras justo odio</BListGroupItem>
  <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
  <BListGroupItem>Morbi leo risus</BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

**Horizontal at breakpoint `md` and above:**

<HighlightCard>
  <BListGroup horizontal="md">
    <BListGroupItem>Cras justo odio</BListGroupItem>
    <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
    <BListGroupItem>Morbi leo risus</BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup horizontal="md">
  <BListGroupItem>Cras justo odio</BListGroupItem>
  <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
  <BListGroupItem>Morbi leo risus</BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

## Custom content

Add nearly any HTML or component within, even for linked list groups like the one below, with the
help of [flexbox utility classes](/docs/reference/utility-classes).

<HighlightCard>
  <BListGroup>
    <BListGroupItem href="#" active class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List Group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
    </BListGroupItem>
    <BListGroupItem href="#" class="flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List Group item heading</h5>
        <small class="text-body-secondary">3 days ago</small>
      </div>
      <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
      </p>
      <small class="text-body-secondary">Donec id elit non mi porta.</small>
    </BListGroupItem>
    <BListGroupItem href="#" disabled class="flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">Disabled List Group item</h5>
        <small class="text-body-secondary">3 days ago</small>
      </div>
      <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
      </p>
      <small class="text-body-secondary">Donec id elit non mi porta.</small>
    </BListGroupItem>
  </BListGroup>
  <template #html>

```vue-html
<BListGroup>
  <BListGroupItem href="#" active class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List Group item heading</h5>
      <small>3 days ago</small>
    </div>

    <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </p>

    <small>Donec id elit non mi porta.</small>
  </BListGroupItem>

  <BListGroupItem href="#" class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List Group item heading</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>

    <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </p>

    <small class="text-body-secondary">Donec id elit non mi porta.</small>
  </BListGroupItem>

  <BListGroupItem href="#" disabled class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Disabled List Group item</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>

    <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </p>

    <small class="text-body-secondary">Donec id elit non mi porta.</small>
  </BListGroupItem>
</BListGroup>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/listGroup.data'
import ComponentReference from '../../components/ComponentReference.vue'
import ComponentSidebar from '../../components/ComponentSidebar.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BCard, BCardBody, BListGroup, BBadge, BCardGroup, BListGroupItem} from 'bootstrap-vue-next'
</script>
