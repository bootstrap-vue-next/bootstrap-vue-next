---
id: v-b-tooltip
title: v-b-tooltip Migration
description: 'Migration notes for v-b-tooltip from BootstrapVue to BootstrapVueNext.'
category: directives
components: []
match:
  - Tooltip
  - v-b-tooltip
  - data-original-title
  - .top
  - .bottom
tags:
  - migration
  - directives
  - tooltip
safeRewrite: true
migrationType: directive-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# v-b-tooltip Migration

## Summary

Migration notes for v-b-tooltip from BootstrapVue to BootstrapVueNext.

## Affected APIs

- None explicitly listed

## Breaking Change

The `v-b-tooltip` directive works similarly between BSV and BSVN, but has some important differences:

### Basic Usage

Simple string tooltips work the same:

**BSV:**

<<< FRAGMENT ../../demo/TooltipDirectiveBasicBefore.html{html}

**BSVN:**

<<< FRAGMENT ../../demo/TooltipDirectiveBasicAfter.html{html}

### Trigger Modifiers

When using modifiers, BSVN recommends providing tooltip content via the directive value, although it will still fall back to the element's `title`/`data-original-title` attributes when no value is given.

**BSV:**

<<< FRAGMENT ../../demo/TooltipDirectiveTriggersBefore.html{html}

**BSVN:**

<<< FRAGMENT ../../demo/TooltipDirectiveTriggersAfter.html{html}

BSVN automatically removes the `title` attribute and stores it as `data-original-title` to prevent browser tooltips.

### Object Configuration

The object configuration interface has changed:

**BSV:**

<<< FRAGMENT ../../demo/TooltipDirectiveObjectBefore.html{html}

**BSVN:**

<<< FRAGMENT ../../demo/TooltipDirectiveObjectAfter.html{html}

Key changes:

- `placement` is now specified via modifier (`.top`, `.bottom`, etc.) instead of in the object
- `delay` accepts either a scalar number (applies to both show and hide) or an object `{show: number, hide: number}` for independent control
- Floating UI (instead of Popper.js) is used for positioning

### Custom Classes (Directive)

BSV's `customClass` property has been replaced with `bodyClass` and `titleClass` for more granular control:

**BSV:**

<<< FRAGMENT ../../demo/TooltipDirectiveCustomClassBefore.html#template{html}

**BSVN:**

<<< FRAGMENT ../../demo/TooltipDirectiveCustomClassAfter.html#template{html}

::: tip Tooltip Rendering Behavior
Unlike popovers which can display both title and body simultaneously, tooltips only display **either** title **or** body content. The `titleClass` and `bodyClass` properties are mutually exclusive - only one will apply at a time depending on which content is rendered.
:::

See the [Tooltip Directive documentation](/docs/directives/BTooltip) for complete details.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- None
