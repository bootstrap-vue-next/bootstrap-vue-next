---
id: bpopover
title: BPopover Migration
category: components
components:
  - BPopover
match:
  - BPopover
  - top-start
  - top-end
  - bottom-start
  - bottom-end
  - left-start
  - left-end
  - right-start
  - right-end
  - custom-class
  - body-class
  - title-class
  - .sync
  - v-model
  - "{show: 100, hide: 300}"
  - fallback-placement
tags:
  - migration
  - components
  - bpopover
safeRewrite: false
migrationType: component-migration
introducedIn: bootstrap-vue-next
replacement:
  custom-class: body-class
manualReviewRequired: true
deprecated:
  - custom-class
related:
  - show-hide
  - v-html-props
confidence: high
---

# BPopover Migration

## Summary

Migration notes for BPopover from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BPopover

## Breaking Change

See [Show and Hide](/docs/migration-data/patterns/show-hide) shared properties.

See the [v-html](/docs/migration-data/patterns/v-html-props) section for information on deprecation of the `html` prop.

### Positioning Library

BootstrapVueNext uses [floating-ui](https://floating-ui.com/) instead of Popper.js for positioning. This brings better performance and more features, but requires some migration:

### Placement Values

Placement values have changed to align with floating-ui conventions:

| BootstrapVue  | BootstrapVueNext |
| ------------- | ---------------- |
| `top`         | `top`            |
| `topleft`     | `top-start`      |
| `topright`    | `top-end`        |
| `bottom`      | `bottom`         |
| `bottomleft`  | `bottom-start`   |
| `bottomright` | `bottom-end`     |
| `left`        | `left`           |
| `lefttop`     | `left-start`     |
| `leftbottom`  | `left-end`       |
| `right`       | `right`          |
| `righttop`    | `right-start`    |
| `rightbottom` | `right-end`      |

### Default Placement

The default placement has changed from `right` to `top`.

### Triggers

Triggers work differently in BootstrapVueNext. Instead of space-separated string values, use individual boolean props:

| BootstrapVue             | BootstrapVueNext                         |
| ------------------------ | ---------------------------------------- |
| `triggers="click"`       | `click` (prop, default is hover + focus) |
| `triggers="hover"`       | `hover` (prop)                           |
| `triggers="focus"`       | `focus` (prop)                           |
| `triggers="hover focus"` | `hover focus` (both props)               |
| `triggers="click blur"`  | `click` (blur is automatic with click)   |
| `triggers="manual"`      | `manual` (prop)                          |

### Container → Teleport

The `container` prop has been replaced with Vue 3's teleport system:

<<< FRAGMENT ../../demo/PopoverContainerBSV.vue#template{vue-html}

<<< FRAGMENT ../../demo/PopoverContainerBSVN.vue#template{vue-html}

### Content Property

The `content` prop has been renamed to `body` for consistency:

<<< FRAGMENT ../../demo/PopoverContentPropertyBSV.vue#template{vue-html}

<<< FRAGMENT ../../demo/PopoverContentPropertyBSVN.vue#template{vue-html}

### Custom Classes

The `custom-class` prop has been split into more specific props:

- `custom-class` → `body-class` (for popover body)
- New: `title-class` (for popover title)

### Variant

The `variant` prop has been deprecated. Use Bootstrap's [color and background utility classes](https://getbootstrap.com/docs/5.3/helpers/color-background/) instead:

<<< FRAGMENT ../../demo/PopoverVariantBSV.vue#template{vue-html}

<<< FRAGMENT ../../demo/PopoverVariantBSVN.vue#template{vue-html}

See [Popover custom classes and variants](/docs/components/popover#custom-classes-and-variants) for more details.

### Programmatic Control

The `.sync` modifier on the `show` prop has been replaced with `v-model`:

<<< FRAGMENT ../../demo/PopoverSyncBSV.vue#template{vue-html}

<<< FRAGMENT ../../demo/PopoverSyncBSVN.vue#template{vue-html}

### Disabled State

The `disabled` prop and programmatic disabling features have been deprecated. Use `manual=true` combined with `v-model` for full control:

<<< FRAGMENT ../../demo/PopoverDisabledBSV.vue#template{vue-html}

<<< FRAGMENT ../../demo/PopoverDisabledBSVN.vue#template{vue-html}

### Delay

The `delay` prop now defaults to `{show: 100, hide: 300}` instead of `50` for both.

### Fallback Placement

`fallback-placement` has been deprecated. Use the `noFlip` prop or configure custom middleware via the `floatingMiddleware` prop. See the [floating-ui documentation](https://floating-ui.com/docs/flip) for advanced placement control.

### Target as Function

The ability for the `target` prop to accept a function has been deprecated. Use a template ref, element ID string, or querySelector string instead.

### \$root Events

The `$root` event system (`bv::show::popover`, `bv::hide::popover`, etc.) has been deprecated. Use the [usePopover](/docs/composables/usePopover) composable or template refs with exposed methods instead:

<<< DEMO ../../demo/PopoverEventsBSV.vue

<<< DEMO ../../demo/PopoverEventsBSVN.vue

### Events

The `disabled` and `enabled` events have been deprecated along with the `disabled` prop.

See the [Popover documentation](/docs/components/popover) for complete details on all available features.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

No. This entry includes behavioral or structural changes and should be reviewed manually before applying automated transforms.

## Related Migrations

- [show-hide](/docs/migration-data/patterns/show-hide)
- [v-html-props](/docs/migration-data/patterns/v-html-props)
