---
description: 'Add popovers to any element using the v-b-popover directive. Popovers can be triggered by hovering, focusing, or clicking an element'
---

# Popover Directive

> The `v-b-popover` directive makes it easy to add popovers to elements. Popovers provide contextual information and can be triggered by various user interactions.

<<< DEMO ./demo/PopoverOverview.vue#template{vue-html}

## Overview

The `v-b-popover` directive makes it easy to add popovers to elements. Popovers provide contextual information and can be triggered by various user interactions.

Things to know when using the popover directive:

- Popovers rely on [floating-ui](https://floating-ui.com/) for positioning
- Triggering popovers on hidden elements will not work
- Popovers for `disabled` elements must be triggered on a wrapper element
- When triggered from hyperlinks that span multiple lines, popovers will be centered. Use the `inline` modifier to improve positioning

## Directive Syntax

As shown above, the BootstrapVueNext directive `v-b-popover` can have a value and optionally one or more modifiers. The general format for directives is:

```vue-html
v-{name}.{modifier1}.{modifier2}.{etc}={value}
```

For example:

<<< FRAGMENT ./demo/PopoverSyntax.vue#syntax{vue-html}

## Trigger Modifiers

You can define when to trigger a popover with the following modifiers:

- `.click` - Toggle popover on click
- `.hover` - Show popover on hover (mouseenter/mouseleave)
- `.focus` - Show popover on focus/blur
- `.manual` - Disable automatic triggers (control via `.show` modifier)

If you do not specify any trigger modifiers, the popover is enabled by default for **both hover and focus** events.

<<< DEMO ./demo/PopoverTriggerModifiers.vue#template{vue-html}

### Default Behavior

<<< DEMO ./demo/PopoverDefaultBehavior.vue#template{vue-html}

### Multiple Triggers

You can combine multiple trigger modifiers:

<<< DEMO ./demo/PopoverMultipleTriggers.vue#template{vue-html}

### Manual Control

Use `.manual` combined with `.show` to control visibility:

<<< DEMO ./demo/PopoverManualControl.vue#template{vue-html}

## Placement Modifiers

Specify where to place the popover with the following modifiers:

- `.top` - Above the element
- `.bottom` - Below the element
- `.left` - To the left of the element
- `.right` - To the right of the element

If you do not define a placement modifier, the default placement is **top**.

<<< DEMO ./demo/PopoverPlacementModifiers.vue#template{vue-html}

## Value

The popover content and configuration is specified in the directive value. The value can be:

- A **string** - used as the popover body content
- An **object** - for advanced configuration
- A **reactive variable** - dynamically updated content

### String Values

For simple text content, use a string literal (remember to use quotes):

<<< DEMO ./demo/PopoverValueString.vue

:::warning Important
What is inside the quotes (`""`) is interpreted as JavaScript, not as a string literal. To display literal text like "My title", you must use an extra pair of quotes:

<<< FRAGMENT ./demo/PopoverValueWarning.vue#warning{vue-html}

:::

### Object Values

For advanced configuration, pass an object:

<<< DEMO ./demo/PopoverValueObject.vue#template{vue-html}

The object interface supports these options:

```ts
interface PopoverValue {
  title?: string // Popover title
  body?: string // Popover body content
  delay?: number | {show: number; hide: number} // Delay in milliseconds
  placement?: 'auto' | 'top' | 'bottom' | 'left' | 'right' // Popover placement
  click?: boolean // Enable click trigger
  hover?: boolean // Enable hover trigger
  focus?: boolean // Enable focus trigger
  manual?: boolean // Disable automatic triggers
}
```

## Title Attribute

When the directive value doesn't include a `title`, the popover will use the element's `title` attribute if present:

<<< DEMO ./demo/PopoverTitleAttribute.vue#template{vue-html}

:::tip Note
When using the `title` attribute, the directive automatically removes it from the element and stores it as `data-original-title` to prevent the browser's native tooltip from showing.
:::

## Delay

Control the delay for showing and hiding popovers using the `delay` option:

<<< DEMO ./demo/PopoverDelay.vue#template{vue-html}

The default delay is `{show: 100, hide: 300}` milliseconds.

## Advanced Modifiers

### Positioning Modifiers

- `.body` - Append popover to `<body>` instead of next to the element
- `.child` - Append popover as a child of the element
- `.inline` - Use inline positioning for better alignment with multi-line text

### Rendering Modifiers

- `.lazy` - Defer rendering until first shown (improves initial performance)
- `.realtime` - Update position in real-time (useful for scrolling scenarios)

### Combined Example

<<< DEMO ./demo/PopoverModifiersCombined.vue#template{vue-html}

## Common Pitfalls

### Using Components with Title Prop

When using the directive on components that have a `title` prop (like `BCard`), you must provide the popover content via the directive value, not the `title` prop:

<<< FRAGMENT ./demo/PopoverCommonPitfalls.vue#component{vue-html}

This is because the component's `title` prop is applied to a child element, while the directive is attached to the root element.

### Using with Plain HTML

The directive works best with plain HTML elements when using the `title` attribute:

<<< FRAGMENT ./demo/PopoverCommonPitfalls.vue#html{vue-html}

## Comparison with Component

The `v-b-popover` directive is ideal for simple popovers with basic content. For more complex scenarios, consider using the [`<BPopover>` component](/docs/components/popover):

| Feature                        | Directive          | Component                   |
| ------------------------------ | ------------------ | --------------------------- |
| Simple text content            | ✅ Ideal           | ✅ Supported                |
| Reactive content               | ✅ Good            | ✅ Excellent                |
| HTML/Vue components in content | ❌ Limited         | ✅ Full support (via slots) |
| Programmatic control           | ⚠️ Via modifiers   | ✅ Full API                 |
| Interactive content            | ❌ Not recommended | ✅ Designed for it          |

For popovers with forms, buttons, or complex layouts, use the component version.

## Accessibility

### Focus Trigger on Buttons

For proper cross-browser behavior when using only the `.focus` trigger, use an element that renders an `<a>` tag with `tabindex="0"`:

<<< FRAGMENT ./demo/PopoverAccessibility.vue#focus{vue-html}

### Keyboard Users

- Only add popovers to keyboard-focusable elements (links, buttons, form controls)
- Avoid using `.hover` as the only trigger - keyboard users cannot trigger hover events
- For interactive content, use the `<BPopover>` component instead

<!-- Component reference added automatically from component package.json -->
