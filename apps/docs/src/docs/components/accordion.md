---
title: Accordion
description: 'Build accordions with native HTML disclosure elements.'
---

`BAccordion` renders the Bootstrap `.accordion` wrapper. Each `BAccordionItem` renders a native
`<details class="accordion-item">` containing a `<summary class="accordion-header">` and
`.accordion-body`. The browser owns disclosure behavior; the components only synchronize the
optional Vue models.

## Exclusive groups

Items share a generated native `name` by default, so opening one closes the others. Supply `name`
to use a stable or shared disclosure-group name. Each item’s `id` is also its identifier in the
root model; it is not the group name.

<<< DEMO ./demo/AccordionOverview.vue#template{vue-html}

Set `open` or use `v-model:open` for a standalone item. Inside a root accordion, the root model
coordinates item state. The example assumes `openItem` is a Vue ref:

<<< FRAGMENT ./demo/AccordionModel.vue{vue}

In exclusive mode, `openItem` is an item id or `undefined`. `BAccordion` emits
`update:modelValue` when native disclosure interaction changes the open item.

## Independent items

Set `independent` to omit the generated native `name` and let each `<details>` operate on its own.
Multiple items may stay open; the root model is then an array of item ids or `undefined`.

<<< DEMO ./demo/AccordionFree.vue#template{vue-html}

## Variants

Use `flush` for the edge-to-edge style, `size="sm"` for `.accordion-sm`, and `gap` for
`.accordion-gap`. Set `theme` to add a contextual `.theme-{theme}` class. These classes are provided
by Bootstrap 6.

<<< DEMO ./demo/AccordionFlush.vue#template{vue-html}

The `icon` slot replaces the default `.accordion-icon` SVG. The `title` slot customizes the summary
content, and the default slot provides the body content. `summaryAttrs`/`summaryClass` and
`bodyAttrs`/`bodyClass` customize the corresponding native elements. Other attributes and listeners
on `BAccordionItem` fall through to its `<details>` element.

Nested `BAccordion` instances receive distinct generated names by default. As with native HTML,
explicitly reusing a `name` intentionally places details elements in the same exclusive group.
