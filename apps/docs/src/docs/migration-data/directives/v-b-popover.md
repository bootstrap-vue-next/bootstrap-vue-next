---
id: v-b-popover
title: v-b-popover Migration
category: directives
components:
  - BPopover
match:
  - Popover
  - v-b-popover
  - .click
  - .hover
  - .focus
  - .manual
  - .top
  - .bottom
  - .left
  - .right
  - .body
  - .child
  - .inline
  - .lazy
  - .realtime
  - .interactive
tags:
  - migration
  - directives
  - popover
safeRewrite: false
migrationType: directive-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
deprecated:
  - .inline
confidence: high
---

# v-b-popover Migration

## Summary

Migration notes for v-b-popover from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BPopover

## Breaking Change

The `v-b-popover` directive syntax has changed to use modifier-based configuration instead of configuration objects.

### Trigger Configuration

BSV used string-based triggers while BSVN uses modifiers:

<<< FRAGMENT ../../demo/PopoverDirectiveTrigger.html#template{vue-html}

Available trigger modifiers:

- `.click` - Toggle on click (BSV: `'click'`)
- `.hover` - Show on hover (BSV: `'hover'`)
- `.focus` - Show on focus (BSV: `'focus'`)
- `.manual` - Manual control (BSV: `'manual'`)

Default behavior: If no trigger modifier is specified, BSVN defaults to **both hover and focus** triggers (same as BSV).

### Placement Configuration

BSV used complex placement strings while BSVN uses simple modifiers:

<<< FRAGMENT ../../demo/PopoverDirectivePlacement.html#template{vue-html}

BSVN uses four simple placement modifiers:

- `.top`
- `.bottom`
- `.left`
- `.right`

BSV's fine-grained placements (`topleft`, `topright`, `bottomleft`, `bottomright`, `lefttop`, `leftbottom`, `righttop`, `rightbottom`) are not available as modifiers. Use the component version `<BPopover>` for precise placement control.

### Value Configuration

The directive value can be a string or an object:

<<< FRAGMENT ../../demo/PopoverDirectiveValueSimple.html#template{vue-html}

<<< FRAGMENT ../../demo/PopoverDirectiveValueObject.html#bsv{vue-html}

<<< FRAGMENT ../../demo/PopoverDirectiveValueObject.html#bsvn{vue-html}

Note: BSV used `content` property, BSVN uses `body` property in object configuration.

### Custom Class Properties

BSV used a `customClass` property, while BSVN provides more granular control:

**BSV:**

<<< FRAGMENT ../../demo/PopoverDirectiveCustomClassBefore.html{vue-html}

**BSVN:**

<<< FRAGMENT ../../demo/PopoverDirectiveCustomClassAfter.html{vue-html}

BSVN provides separate `bodyClass` and `titleClass` properties for more precise styling control.

### Special Modifiers

BSVN adds new modifiers not available in BSV:

- `.body` - Append to `<body>` (BSV: no equivalent modifier)
- `.child` - Append as child element
- `.inline` - Use inline positioning for multi-line text
- `.lazy` - Defer rendering until first shown
- `.realtime` - Update position in real-time
- `.interactive` - Allow interactive content

### Title Attribute Handling

Both versions support using the element's `title` attribute:

<<< FRAGMENT ../../demo/PopoverDirectiveTitleAttribute.html#template{vue-html}

BSVN automatically removes the `title` attribute and stores it as `data-original-title` to prevent browser tooltips.

### Migration Examples

**Basic hover popover:**

<<< FRAGMENT ../../demo/PopoverDirectiveHover.html#bsv{vue-html}

<<< FRAGMENT ../../demo/PopoverDirectiveHover.html#bsvn{vue-html}

**Click popover with placement:**

<<< FRAGMENT ../../demo/PopoverDirectiveClick.html#bsv{vue-html}

<<< FRAGMENT ../../demo/PopoverDirectiveClick.html#bsvn{vue-html}

**Manual control:**

<<< DEMO ../../demo/PopoverDirectiveManualBSV.vue

<<< DEMO ../../demo/PopoverDirectiveManualBSVN.vue

**Complex configuration:**

<<< FRAGMENT ../../demo/PopoverDirectiveComplex.html#bsv{vue-html}

<<< FRAGMENT ../../demo/PopoverDirectiveComplex.html#bsvn{vue-html}

### When to Use Component Instead

For complex scenarios, migrate to the `<BPopover>` component:

- Fine-grained placement control (`top-start`, `bottom-end`, etc.)
- Rich HTML content via slots
- Programmatic control with full API
- Interactive content (forms, buttons)
- Custom variants and styling

<<< FRAGMENT ../../demo/PopoverDirectiveComponentAlternative.html#bsv{vue-html}

<<< FRAGMENT ../../demo/PopoverDirectiveComponentAlternative.html#bsvn{vue-html}

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

No. This entry includes behavioral or structural changes and should be reviewed manually before applying automated transforms.

## Related Migrations

- None
