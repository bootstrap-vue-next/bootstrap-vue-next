---
id: btooltip
title: BTooltip Migration
category: components
components:
  - BTooltip
match:
  - BTooltip
  - custom-class
  - body-class
  - title-class
  - fallback-placement
  - $root
  - <BTooltip>
tags:
  - migration
  - components
  - btooltip
safeRewrite: false
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
related:
  - show-hide
  - v-html-props
confidence: high
---

# BTooltip Migration

## Summary

Migration notes for BTooltip from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BTooltip

## Breaking Change

See [Show and Hide](/docs/migration-data/patterns/show-hide) shared properties.

See the [v-html](/docs/migration-data/patterns/v-html-props) section for information on deprecation of the `html` prop.

`BTooltip` is noninteractive by default, unlike in BootstrapVue. This provides for a smoother user
experience. The `interactive` prop is provided to restore the BootstrapVue behavior.

The `container` prop has been deprecated. Use the `teleportTo` prop instead to specify where the tooltip
should be mounted. See [Vue Teleport documentation](https://vuejs.org/guide/built-ins/teleport.html).

`custom-class` has been changed to `body-class` and a `title-class` has been added for completeness -
see [custom classes documentation](/docs/components/tooltip#custom-classes-and-variants) for details.

`fallback-placement` has been deprecated. Use the various options provided by [Floating UI](https://floating-ui.com/)
to handle placement.

The ability for the `target` prop to take a function has been deprecated.

Trigger behavior differs because the underlying library used to manage tooltips and popovers has changed. See
[our documentation](/docs/components/tooltip#triggers) and [Floating UI](https://floating-ui.com/)
for details.

The `variant` prop has been deprecated. Use Bootstrap’s color and background utility classes to style
tooltips instead. See [Tooltip custom classes and variants](/docs/components/tooltip#custom-classes-and-variants)
for details.

The `disabled` prop and
[Programmatically Disabling](https://bootstrap-vue.org/docs/components/tooltip#programmatically-disabling-tooltip) have
been deprecated along with the `disabled` and `enabled` events. Use `manual=true` to disable BootstrapVueNext’s automatic
trigger handling. If your application shows the tooltip programmatically, disable those automatic triggers as well.
If you believe full parity with the BootstrapVue feature is useful, please open an issue or propose a pull request.

`delay` now defaults to 0 rather than 50ms

The default for `placement` is now `top` rather than `right`

`$root` events are deprecated. See [usePopover](/docs/composables/usePopover) as an alternative.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

No. This entry includes behavioral or structural changes and should be reviewed manually before applying automated transforms.

## Related Migrations

- [show-hide](/docs/migration-data/patterns/show-hide)
- [v-html-props](/docs/migration-data/patterns/v-html-props)
