---
description: 'Add tooltips to any element using the v-b-tooltip directive. Tooltips can be triggered by hovering, focusing, or clicking an element'
---

> The `v-b-tooltip` directive makes it easy to add tooltips to elements. Tooltips provide helpful hints and can be triggered by various user interactions.

<<< DEMO ./demo/BTooltipOverview.vue#template{vue-html}

## Overview

The `v-b-tooltip` directive makes it easy to add tooltips to elements. Tooltips provide helpful hints and can be triggered by various user interactions.

Things to know when using the tooltip directive:

- Tooltips rely on [floating-ui](https://floating-ui.com/) for positioning
- Triggering tooltips on hidden elements will not work
- Tooltips for `disabled` elements must be triggered on a wrapper element
- When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use the `inline` modifier to improve positioning
- Tooltips are lightweight and ideal for short text hints (for longer content, consider using [popover](/docs/directives/BPopover))

## Directive Syntax

As shown above, the BootstrapVueNext directive `v-b-tooltip` can have a value and optionally one or more modifiers. The general format for directives is:

<<< FRAGMENT ./demo/DirectiveSyntaxFormat.html#format{vue-html}

For example:

<<< FRAGMENT ./demo/BTooltipSyntax.vue#syntax{vue-html}

## Trigger Modifiers

You can define when to trigger a tooltip with the following modifiers:

- `.click` - Toggle tooltip on click
- `.hover` - Show tooltip on hover (mouseenter/mouseleave)
- `.focus` - Show tooltip on focus/blur
- `.manual` - Disable automatic triggers (control via `.show` modifier)

If you do not specify any trigger modifiers, the tooltip is enabled by default for **both hover and focus** events.

<<< DEMO ./demo/BTooltipTriggerModifiers.vue#template{vue-html}

### Default Behavior

<<< DEMO ./demo/BTooltipDefaultBehavior.vue#template{vue-html}

### Multiple Triggers

You can combine multiple trigger modifiers:

<<< DEMO ./demo/BTooltipMultipleTriggers.vue#template{vue-html}

### Manual Control

Use `.manual` combined with `modelValue` to control visibility:

<<< DEMO ./demo/BTooltipManualControl.vue{vue}

## Placement Modifiers

Specify where to place the tooltip with the following modifiers:

- `.top` - Above the element
- `.bottom` - Below the element
- `.left` - To the left of the element
- `.right` - To the right of the element

If you do not define a placement modifier, the default placement is **top**.

<<< DEMO ./demo/BTooltipPlacementModifiers.vue#template{vue-html}

## Value

The tooltip content and configuration is specified in the directive value. The value can be:

- A **string** - used as the tooltip text content
- An **object** - for advanced configuration
- A **reactive variable** - dynamically updated content

### String Values

For simple text content, use a string literal (remember to use quotes):

<<< DEMO ./demo/BTooltipValueString.vue{vue}

:::warning Important
What is inside the quotes (`""`) is interpreted as JavaScript, not as a string literal. To display literal text like "My tooltip", you must use an extra pair of quotes:

<<< FRAGMENT ./demo/BTooltipValueWarning.vue#warning{vue-html}

:::

### Object Values

For advanced configuration, pass an object:

<<< DEMO ./demo/BTooltipValueObject.vue#template{vue-html}

The directive accepts any property from `BTooltipProps` (which extends `BPopoverProps`). Common properties include:

- `title` - The tooltip text content
- `body` - Alternative content (used if `title` not provided)
- `delay` - Show/hide delay in milliseconds or `{show: number, hide: number}`
- `bodyClass` - Custom class for the tooltip body
- `titleClass` - Custom class for the tooltip title
- `placement` - Position: `'auto'` | `'auto-start'` | `'auto-end'` | `'top'` | `'top-start'` | `'top-end'` | `'bottom'` | `'bottom-start'` | `'bottom-end'` | `'left'` | `'left-start'` | `'left-end'` | `'right'` | `'right-start'` | `'right-end'`
- `interactive` - Allow hovering over the tooltip (default: `false`)

See the [BTooltip component reference](/docs/components/tooltip#comp-reference-btooltip-props) for all available properties.

::: tip Type Definition
The directive value accepts the TypeScript interface [`BTooltipProps`](https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/packages/bootstrap-vue-next/src/types/ComponentProps.ts), which is exported from `bootstrap-vue-next` for use in your code:

```typescript
import type {BTooltipProps} from 'bootstrap-vue-next'
```

:::

:::tip Rendering Behavior
**Tooltips display either `title` OR `body`, never both:**

- If `title` is provided → renders with `titleClass` applied
- If only `body` is provided → renders with `bodyClass` applied
- Both `title` and `body` → only `title` is rendered

This differs from popovers, which can display both title and body content simultaneously.
:::

## Title Attribute

When the directive value doesn't include a `title`, the tooltip will use the element's `title` attribute if present:

<<< DEMO ./demo/BTooltipTitleAttribute.vue#template{vue-html}

:::tip Note
When using the `title` attribute, the directive automatically removes it from the element and stores it as `data-original-title` to prevent the browser's native tooltip from showing.
:::

## Delay

Control the delay for showing and hiding tooltips using the `delay` option:

<<< DEMO ./demo/BTooltipDelay.vue#template{vue-html}

The default delay is `0` milliseconds (immediate show/hide).

## Advanced Modifiers

### Positioning Modifiers

- `.body` - Append tooltip to `<body>` instead of next to the element
- `.child` - Append tooltip as a child of the element
- `.inline` - Use inline positioning for better alignment with multi-line text

### Rendering Modifiers

- `.lazy` - Defer rendering until first shown (improves initial performance)
- `.realtime` - Update position in real-time (useful for scrolling scenarios)

### Combined Example

<<< DEMO ./demo/BTooltipModifiersCombined.vue#template{vue-html}

## Common Pitfalls

### Using Components with Title Prop

When using the directive on components that have a `title` prop (like `BCard`), you must provide the tooltip content via the directive value, not the `title` prop:

<<< FRAGMENT ./demo/BTooltipCommonPitfalls.vue#component{vue-html}

This is because the component's `title` prop is applied to a child element, while the directive is attached to the root element.

### Using with Plain HTML

The directive works best with plain HTML elements when using the `title` attribute:

<<< FRAGMENT ./demo/BTooltipCommonPitfalls.vue#html{vue-html}

## Comparison with Component

The `v-b-tooltip` directive is ideal for simple tooltips with basic content. For more complex scenarios, consider using the [`<BTooltip>` component](/docs/components/tooltip):

| Feature                        | Directive          | Component                   |
| ------------------------------ | ------------------ | --------------------------- |
| Simple text content            | ✅ Ideal           | ✅ Supported                |
| Reactive content               | ✅ Good            | ✅ Excellent                |
| HTML/Vue components in content | ❌ Limited         | ✅ Full support (via slots) |
| Programmatic control           | ⚠️ Via modifiers   | ✅ Full API                 |
| Interactive content            | ❌ Not recommended | ✅ Designed for it          |

For tooltips with interactive elements or complex layouts, use the component version.

## Accessibility

### Focus Trigger on Buttons

For proper cross-browser behavior when using only the `.focus` trigger, use an element that renders an `<a>` tag with `tabindex="0"`:

<<< FRAGMENT ./demo/BTooltipAccessibility.vue#focus{vue-html}

### Keyboard Users

- Only add tooltips to keyboard-focusable elements (links, buttons, form controls)
- Avoid using `.hover` as the only trigger - keyboard users cannot trigger hover events
- For interactive content, use the `<BTooltip>` component instead

<!-- Component reference added automatically from component package.json -->
