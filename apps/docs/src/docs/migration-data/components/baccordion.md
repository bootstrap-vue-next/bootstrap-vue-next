---
id: baccordion
title: BAccordion v1 → v100 Migration
description: 'Migrate BAccordion and BAccordionItem to the Bootstrap 6 native disclosure API.'
category: components
components:
  - BAccordion
  - BAccordionItem
match:
  - BAccordion
  - BAccordionItem
  - accordion
  - details
  - summary
tags:
  - migration
  - bootstrap-6
  - baccordion
safeRewrite: false
migrationType: breaking-component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
related: []
confidence: high
---

# BAccordion v1 → v100 Migration

BootstrapVueNext v100 aligns the accordion with Bootstrap 6's native `<details>` disclosure
component. This is a breaking change to both rendered markup and the Vue API. Review custom styles,
selectors, tests, and code that controls accordion state.

## DOM structure

The old implementation rendered a `BCollapse`, `.accordion-button`, and `.accordion-collapse`.
The new implementation renders Bootstrap 6's native structure:

**Before**

<<< FRAGMENT ./demo/AccordionStructureBefore.html{html}

**After**

<<< FRAGMENT ./demo/AccordionStructureAfter.html{html}

The root wrapper remains `.accordion`. The disclosure is now the `<details>` element; its
`open` attribute replaces Collapse state classes and the old button's `aria-expanded`/
`aria-controls` wiring. The `<summary>` is the interactive control. The Bootstrap icon is an
`.accordion-icon` element inside the summary.

Remove selectors and styles targeting `.accordion-button`, `.accordion-collapse`, `.collapse`,
`.show`, or `.collapsed`. Style the native elements, `.accordion-header`, `.accordion-body`, and
`details[open]` instead. Tests should assert the native elements, `open`, and `name` rather than
BootstrapVueNext's former Collapse implementation.

## Grouping and state

Bootstrap 6 replaces `data-bs-parent` and JavaScript exclusivity with the native `name` attribute on
`<details>`. A `BAccordion` generates a unique `name` by default; supply the root `name` to choose a
stable group name. An item-level `name` overrides the inherited value. Reusing an explicit name
places details elements in the same native group.

The HTML `id` identifies an element. It is not an accordion group identifier. `BAccordionItem` ids
(generated when omitted) identify items in the root Vue model.

| Previous API | v100 API |
| --- | --- |
| `free` | `independent` |
| `index` / `v-model:index` | Removed; use item ids in root `v-model` |
| exclusive root `v-model` string | Item id string, or `undefined` when closed |
| free root `v-model` string array | `independent` root model: array of item ids, or `undefined` when empty |
| item `v-model` / `modelValue` | `v-model:open` / `open` |
| item `visible` / `show` | `open` |
| `data-bs-parent`-style coordination | Native `<details name="...">` grouping |

The root model uses `BAccordionItem` ids. In exclusive mode, opening an item updates the model to
that id; closing it sets the model to `undefined`. In independent mode, it is the array of currently
open ids. An external root model update changes the native `open` states. Direct native disclosure
interaction updates the corresponding model. `v-model:open` is available for an item used alone or
when its individual open state is also needed.

## API changes

### `BAccordion`

Retained: `id`, `flush`, and the default slot. The following new props map directly to Bootstrap 6:

| New prop | Output |
| --- | --- |
| `name` | Native group name inherited by items; generated when omitted |
| `independent` | Omits the generated group name to allow multiple open items |
| `size="sm"` | `.accordion-sm` |
| `gap` | `.accordion-gap` |
| `theme="primary"` | `.theme-primary` (replace the value with a supported theme name) |

Removed `free`, `index`, `initialAnimation`, `lazy`, and `unmountLazy`. Animation and visibility
options tied to `BCollapse` no longer apply; native details behavior and Bootstrap's CSS handle
disclosure. The root model now only represents identifiers, not indexes.

### `BAccordionItem`

Retained: `id`, `title`, `bodyAttrs`, `bodyClass`, the default body slot, and the title slot.

| Previous API | v100 API |
| --- | --- |
| `buttonAttrs`, `buttonClass` | `summaryAttrs`, `summaryClass` |
| `headerAttrs`, `headerClass` | `summaryAttrs`, `summaryClass` |
| `visible`, `show`, `modelValue` | `open` / `v-model:open` |
| button `.accordion-button` | native `<summary class="accordion-header">` |
| `collapseClass`, `wrapperAttrs` | Removed; attributes fall through to `<details>` |
| `headerTag` | Removed; `<summary>` is required by native disclosure markup |
| `horizontal`, `isNav`, `tag`, `lazy`, `unmountLazy` | Removed; these were Collapse-specific |
| Collapse lifecycle and prevented events | Removed; `toggle` is the native details event |

The `icon` slot replaces button background-image customization. Its default content is the
Bootstrap `.accordion-icon` SVG. Item attributes not consumed by component props are forwarded to
`<details>`.

## Old and new usage

**Before**

<<< FRAGMENT ./demo/AccordionApiBefore.vue{vue}

**After, exclusive**

<<< FRAGMENT ./demo/AccordionApiAfterExclusive.vue{vue}

**After, independent**

<<< FRAGMENT ./demo/AccordionApiAfterIndependent.vue{vue}

Here `activeItem` is `string | undefined`, while `activeItems` is `string[] | undefined`. Drop
`activeIndex` and any logic that converts between indexes and ids.

## Bootstrap 6 changes vs. BootstrapVueNext changes

Bootstrap 6 provides native details grouping through `name`, the `.accordion-icon` element, and the
`.accordion-sm`, `.accordion-gap`, and `.theme-*` classes. It removes the old
`.accordion-button`/`.accordion-collapse` structure and Collapse-driven disclosure behavior.

BootstrapVueNext-specific changes are the new `independent`, `name`, `size`, `gap`, and `theme`
props; item-id-based root models; `v-model:open`; renamed summary customization props; and removal
of obsolete Collapse props/events and the index model. The `BAccordion` wrapper and its default
content slot remain.
