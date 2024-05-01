# Badge

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">

Documentation and examples for badges, our small count and labeling component.

</div>

## Examples

Badges scale to match the size of the immediate parent element by using relative font sizing and em units. As of v5, badges no longer have focus or hover styles for links.

### Headings

<HighlightCard>
  <h1>Example heading <BBadge>New</BBadge></h1>
  <h2 class="border-0 pb-0">Example heading <BBadge>New</BBadge></h2>
  <h3>Example heading <BBadge>New</BBadge></h3>
  <h4>Example heading <BBadge>New</BBadge></h4>
  <h5>Example heading <BBadge>New</BBadge></h5>
  <h6>Example heading <BBadge>New</BBadge></h6>
  <template #html>

```vue-html
<h1>Example heading <BBadge>New</BBadge></h1>
<h2>Example heading <BBadge>New</BBadge></h2>
<h3>Example heading <BBadge>New</BBadge></h3>
<h4>Example heading <BBadge>New</BBadge></h4>
<h5>Example heading <BBadge>New</BBadge></h5>
<h6>Example heading <BBadge>New</BBadge></h6>
```

  </template>
</HighlightCard>

### Buttons

Badges can be used as part of links or buttons to provide a counter.

<HighlightCard>
  <BButton variant="primary">
    Notifications <BBadge variant="light">4</BBadge>
  </BButton>
  <template #html>

```vue-html
<BButton variant="primary">Notifications <BBadge variant="light">4</BBadge></BButton>
```

  </template>
</HighlightCard>

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text.

### Positioned

Use utilities to modify a `.badge` and position it in the corner of a link or button.

<HighlightCard>
  <BButton variant="primary" class="position-relative">
    Inbox
    <BBadge variant="danger" text-indicator>
      99+
      <span class="visually-hidden">unread messages</span>
    </BBadge>
  </BButton>
  <template #html>

```vue-html
<BButton variant="primary" class="position-relative">
  Inbox
  <BBadge variant="danger" text-indicator>
    99+
    <span class="visually-hidden">unread messages</span>
  </BBadge>
</BButton>
```

  </template>
</HighlightCard>

You can also replace the `.badge` class with a few more utilities without a count for a more generic indicator.

<HighlightCard>
  <BButton variant="primary" class="position-relative">
    Inbox
    <BBadge variant="danger" dot-indicator>
      <span class="visually-hidden">New alerts</span>
    </BBadge>
  </BButton>
  <template #html>

```vue-html
<BButton variant="primary" class="position-relative">
  Inbox
  <BBadge variant="danger" dot-indicator>
    <span class="visually-hidden">New alerts</span>
  </BBadge>
</BButton>
```

  </template>
</HighlightCard>

## Background colors

Add any of the following variants via the `variant` prop to change the appearance of a `BBadge`: `default`, `primary`, `success`, `warning`, `info`, and `danger`. If no variant is specified `default` will be used.

<HighlightCard>
  <div class="d-flex mb-4" style="column-gap: 1%;">
    <BBadge variant="primary">Primary</BBadge>
    <BBadge variant="secondary">Secondary</BBadge>
    <BBadge variant="success">Success</BBadge>
    <BBadge variant="danger">Danger</BBadge>
    <BBadge variant="warning">Warning</BBadge>
    <BBadge variant="info">Info</BBadge>
    <BBadge variant="light">Light</BBadge>
    <BBadge variant="dark">Dark</BBadge>
  </div>
  <template #html>

```vue-html
<BBadge variant="primary">Primary</BBadge>
<BBadge variant="secondary">Secondary</BBadge>
<BBadge variant="success">Success</BBadge>
<BBadge variant="danger">Danger</BBadge>
<BBadge variant="warning">Warning</BBadge>
<BBadge variant="info">Info</BBadge>
<BBadge variant="light">Light</BBadge>
<BBadge variant="dark">Dark</BBadge>
```

  </template>
</HighlightCard>

::: tip Conveying meaning to assistive technologies
Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.
:::

## Pill badges

Use the `pill` prop to make badges more rounded with a larger border-radius.

<HighlightCard>
  <div class="d-flex mb-4" style="column-gap: 1%;">
    <BBadge variant="primary" pill>Primary</BBadge>
    <BBadge variant="secondary" pill>Secondary</BBadge>
    <BBadge variant="success" pill>Success</BBadge>
    <BBadge variant="danger" pill>Danger</BBadge>
    <BBadge variant="warning" pill>Warning</BBadge>
    <BBadge variant="info" pill>Info</BBadge>
    <BBadge variant="light" pill>Light</BBadge>
    <BBadge variant="dark" pill>Dark</BBadge>
  </div>
  <template #html>

```vue-html
<BBadge variant="primary" pill>Primary</BBadge>
<BBadge variant="secondary" pill>Secondary</BBadge>
<BBadge variant="success" pill>Success</BBadge>
<BBadge variant="danger" pill>Danger</BBadge>
<BBadge variant="warning" pill>Warning</BBadge>
<BBadge variant="info" pill>Info</BBadge>
<BBadge variant="light" pill>Light</BBadge>
<BBadge variant="dark" pill>Dark</BBadge>
```

  </template>
</HighlightCard>

## Actionable badges

Quickly provide actionable badges with ~~hover~~ and ~~focus~~ states by specifying either the `href` prop (links) or `to` prop (router-links):

<HighlightCard>
  <div class="d-flex mb-4" style="column-gap: 1%;">
    <BBadge href="#" variant="primary">Primary</BBadge>
    <BBadge href="#" variant="secondary">Secondary</BBadge>
    <BBadge href="#" variant="success">Success</BBadge>
    <BBadge href="#" variant="danger">Danger</BBadge>
    <BBadge href="#" variant="warning">Warning</BBadge>
    <BBadge href="#" variant="info">Info</BBadge>
    <BBadge href="#" variant="light">Light</BBadge>
    <BBadge href="#" variant="dark">Dark</BBadge>
  </div>
  <template #html>

```vue-html
<BBadge href="#" variant="primary">Primary</BBadge>
<BBadge href="#" variant="secondary">Secondary</BBadge>
<BBadge href="#" variant="success">Success</BBadge>
<BBadge href="#" variant="danger">Danger</BBadge>
<BBadge href="#" variant="warning">Warning</BBadge>
<BBadge href="#" variant="info">Info</BBadge>
<BBadge href="#" variant="light">Light</BBadge>
<BBadge href="#" variant="dark">Dark</BBadge>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/badge.data'
import {BButton, BBadge} from 'bootstrap-vue-next'
import ComponentReference from '../../components/ComponentReference.vue'
import ComponentSidebar from '../../components/ComponentSidebar.vue'
import HighlightCard from '../../components/HighlightCard.vue'
</script>
