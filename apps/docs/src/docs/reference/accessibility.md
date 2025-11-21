---
description: A brief overview of BootstrapVueNext's features and limitations for the creation of accessible content.
---

## Overview and Limitations

BootstrapVueNext will automatically add in the appropriate accessibility markup for most interactive components. But the overall accessibility of any project built with Bootstrap and BootstrapVueNext depends in large part on the author's markup, additional styling, and scripting they've included. However, provided that these have been implemented correctly, it should be perfectly possible to create websites and applications with BootstrapVueNext that fulfill [WCAG 2.0](https://www.w3.org/TR/WCAG20/) (A/AA/AAA), [Section 508](https://www.section508.gov) and similar accessibility standards and requirements.

## Structural markup

BootstrapVue's custom components have been optimized for accessible/semantic generated HTML markup out of the box. This documentation aims to provide developers with best practice examples to demonstrate the use of Bootstrap itself and illustrate appropriate semantic markup, including ways in which potential accessibility concerns can be addressed.

Most component documentation pages include an accessibility section (or sections) noting best practices and limitations.

## Interactive components

BootstrapVue's interactive components — such as modal dialogs, dropdown menus and custom tooltips — are designed to work for touch, mouse and keyboard users. Through the use of relevant [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) roles and attributes, these components should also be understandable and operable using assistive technologies (such as screen readers).

Because BootstrapVue's components are purposely designed to be fairly generic, authors may need to include further ARIA roles and attributes, as well as TypeScript behavior, to more accurately convey the precise nature and functionality of their component. This is usually noted in the documentation.

## ARIA Trigger Registration for component visibility

Several BootstrapVueNext components (`BCollapse`, `BOffcanvas`, `BModal`, `BDropdown`, `BAlert`, `BToast`, `BPopover`) support automatic ARIA attribute management for trigger elements that control their visibility. This system ensures proper accessibility by automatically updating `aria-expanded` attributes and CSS classes (`collapsed`/`not-collapsed`) on trigger elements as the component's visibility changes.

### How Trigger Registration Works

Trigger registration is **opt-in** and happens through one of these methods:

1. **Using the `v-b-toggle` directive** (recommended for most cases)
2. **Manual ARIA management** for unregistered triggers

#### What the `v-b-toggle` Directive Does

When you use `v-b-toggle`, the directive:

- Sets the `aria-controls` attribute on the trigger element (pointing to the target component's ID)
- Registers the trigger element with the target component's visibility system
- Removes only the `aria-controls` attribute when the trigger unmounts

#### What the Component's Visibility System Does

Once a trigger is registered (via `v-b-toggle`), the component automatically:

- Sets and maintains the `aria-expanded` attribute (`"true"` or `"false"`) based on visibility state
- Adds/removes the `collapsed` and `not-collapsed` CSS classes for visual state
- Updates these attributes and classes whenever visibility changes, regardless of the method used (`v-b-toggle` click, `v-model` change, slot functions, etc.)
- Cleans up the `aria-expanded` attribute and classes when the trigger unregisters

This split responsibility ensures that `aria-controls` (which depends on target IDs known by the directive) is managed separately from `aria-expanded` and visual classes (which depend on the component's visibility state).

### Method 1: Using v-b-toggle (Automatic Registration)

The simplest approach is to use the [`v-b-toggle` directive](/docs/directives/BToggle), which automatically handles both `aria-controls` and trigger registration:

<<< DEMO ./demo/AriaRegistrationDirective.vue#template{vue-html}

With this approach, the button automatically receives:

- `aria-controls="aria-demo-directive"`
- `aria-expanded="true"` or `aria-expanded="false"` (updated automatically)
- `collapsed` or `not-collapsed` CSS class (updated automatically)

### Method 2: Using v-model with v-b-toggle

You can combine `v-model` for programmatic control with `v-b-toggle` for automatic ARIA management. This is useful when you need to control visibility from code while still having trigger buttons with proper accessibility:

<<< DEMO ./demo/AriaRegistrationProgrammatic.vue{vue}

**Key Points**:

- The `v-b-toggle` directive handles all ARIA attributes automatically
- You can still use `v-model` to control visibility programmatically
- Slot functions like `toggle`, `show`, and `hide` work seamlessly with registered triggers

### Method 3: Manual ARIA Management

If you don't register a trigger (via directive or programmatically), you must manually manage all ARIA attributes yourself:

<<< DEMO ./demo/AriaRegistrationManual.vue{vue}

This approach requires you to manually:

- Set `aria-controls` to the component's ID
- Update `aria-expanded` based on visibility state
- Toggle `collapsed`/`not-collapsed` CSS classes

### When to Use Each Method

- **Use `v-b-toggle`** when you want automatic ARIA management (recommended for most cases)
- **Combine `v-b-toggle` with `v-model`** when you need both automatic ARIA management and programmatic control
- **Use manual ARIA management** only when you have specific requirements that prevent using `v-b-toggle`

### Components Supporting Trigger Registration

The following components support the trigger registration system:

- [`BAlert`](/docs/components/alert)
- [`BCollapse`](/docs/components/collapse#accessibility)
- [`BDropdown`](/docs/components/dropdown)
- [`BModal`](/docs/components/modal)
- [`BOffcanvas`](/docs/components/offcanvas#accessibility)
- [`BPopover`](/docs/components/popover)
- [`BToast`](/docs/components/toast)
- [`BTooltip`](/docs/components/tooltip)

See each component's accessibility section for specific guidance and examples.

## Color contrast

Most colors that currently make up Bootstrap V5's default palette — used throughout the framework for things such as button variations, alert variations, form validation indicators — lead to insufficient color contrast (below the recommended [WCAG 2.0 color contrast ratio of 4.5:1)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) when used against a light background. Authors will need to manually modify/extend these default colors to ensure adequate color contrast ratios.

Refer to the Theming section for customizing Bootstrap's SCSS.

## Visually hidden content

Content which should be visually hidden, but remain accessible to assistive technologies such as screen readers, can be styled using the `.visually-hidden` class. This can be useful in situations where additional visual information or cues (such as meaning denoted through the use of color) need to also be conveyed to non-visual users.

<BCard class="bg-body-tertiary">

```vue-html
<p class="text-danger mb-0">
  <span class="visually-hidden">Danger: </span>
  This action is not reversible
</p>
```

</BCard>

For visually hidden interactive controls, such as traditional “skip” links, use the `.visually-hidden-focusable` class. This will ensure that the control becomes visible once focused (for sighted keyboard users). Watch out, compared to the equivalent `.sr-only` and `.sr-only-focusable` classes in past versions, Bootstrap 5’s `.visually-hidden-focusable` is a standalone class, and must not be used in combination with the `.visually-hidden` class.

<BCard class="bg-body-tertiary">

```vue-html
<a class="visually-hidden-focusable" href="#content">Skip to main content</a>
```

</BCard>

## Reduced motion

Bootstrap includes support for the [prefers-reduced-motion media feature](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion). In browsers/environments that allow the user to specify their preference for reduced motion, most CSS transition effects in Bootstrap (for instance, when a modal dialog is opened or closed, or the sliding animation in carousels) will be disabled, and meaningful animations (such as spinners) will be slowed down.

On browsers that support `prefers-reduced-motion`, and where the user has not explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), Bootstrap enables smooth scrolling using the `scroll-behavior` property.

## Testing your application for accessibility

It is highly recommended to test your app for accessibility before deployment. Note that some countries even have laws [requiring all websites to be accessible](https://webaim.org/articles/laws/world/).

There are just two main things to think about when making your web app accessible:

- Defining the right keyboard behavior. BootstrapVueNext provides keyboard control for most of our components, but you should make sure your custom components are also keyboard accessible.
- Making it possible for screen readers to understand your app. Bootstrap, in most situations, will automatically set the correct `role` and `aria-*` attributes on our components. You should also make sure that all of your custom components provide the correct roles and attributes (use semantic HTML elements and markup where possible).

Steps you should do for testing:

-Try using the keyboard only to see if all interactive components can be reached and controlled. Ensure that controls have focus styling so that the user knows which interactive element they are on. Remember, keyboard user cannot trigger an element's `hover` state.

- Use a screen reader (combined with keyboard only) to navigate and interact with your app. There are several free screen readers available for various operating systems and browsers. Remember that screen reader users can only "see" what they hear.
- See how your app looks and works when increasing the zoom level (and/or font size) of your browser.

## Additional resources

- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG/)
- [The A11Y Project](https://www.a11yproject.com)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Tenon.io Accessibility Checker](https://tenon.io)
- [Color Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/)
- [“HTML Codesniffer” bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)
- [Microsoft Accessibility Insights](https://accessibilityinsights.io)
- [Deque Axe testing tools](https://www.deque.com/axe/)
- [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
