---
description: 'Add automatic active-state tracking to navigation links with the v-b-scrollspy directive. It watches a content container and applies active classes to matching links as the user scrolls.'
---

> The `v-b-scrollspy` directive is the declarative counterpart to `useScrollspy`. Apply it to a navigation container and point it at the scrollable content area to automatically keep matching links in sync with scroll position.

<<< DEMO ./demo/BScrollspyOverview.vue#template{vue-html}

## Overview

Things to know when using the scrollspy directive:

- Apply the directive to the navigation container (`BNav`, `BListGroup`, or similar)
- Point it at the content container that contains elements with `id` attributes
- Navigation links must use matching fragment `href` values like `href="#section-id"`
- The directive adds and removes the `active` class on matching links as the content scrolls
- `v-b-scrollspy` handles active-state tracking only. If you also want click-to-scroll behavior, use [`useScrollspy`](/docs/composables/useScrollspy)

## Directive Syntax

As shown above, the BootstrapVueNext directive `v-b-scrollspy` can use either an argument or a value to identify the content container:

<<< FRAGMENT ./demo/BScrollspySyntax.html#syntax{vue-html}

The content target can be:

- A raw element ID such as `content-area`
- A selector string such as `#content-area`
- An object with `content` (or `element`) plus any `useScrollspy` options

## Passing Options

When you use an object value, `v-b-scrollspy` forwards the remaining properties to [`useScrollspy`](/docs/composables/useScrollspy). This lets you customize matching and observer behavior without writing setup code.

| Option         | Type                                                       | Default           | Description                                                 |
| -------------- | ---------------------------------------------------------- | ----------------- | ----------------------------------------------------------- |
| `content`      | `string \| ComponentPublicInstance \| HTMLElement \| null` | —                 | Content container to observe                                |
| `element`      | `string \| ComponentPublicInstance \| HTMLElement \| null` | —                 | Alias for `content`                                         |
| `contentQuery` | `string`                                                   | `':scope > [id]'` | CSS selector for tracked content elements                   |
| `targetQuery`  | `string`                                                   | `'[href]'`        | CSS selector for links inside the directive host element    |
| `manual`       | `boolean`                                                  | `false`           | Disable automatic `active` class management                 |
| `root`         | `string \| ComponentPublicInstance \| HTMLElement \| null` | `null`            | Custom root for the intersection observer                   |
| `rootMargin`   | `string`                                                   | `'0px 0px -25%'`  | Margin around the observer root                             |
| `threshold`    | `number \| number[]`                                       | `[0.1, 0.5, 1]`   | Intersection observer thresholds                            |
| `watchChanges` | `boolean`                                                  | `true`            | Refresh tracked content automatically when DOM changes      |

## Dynamic Content

By default, the directive watches the content container for child-list changes, so newly added sections are tracked automatically. If your content is static and you want to avoid that observer, set `watchChanges: false`.

## Accessibility and Structure

- Keep the directive on keyboard-focusable navigation links and containers
- Make sure each tracked section has a unique `id`
- Make sure each navigation item points to a tracked section with a matching fragment `href`

## See Also

- [useScrollspy](/docs/composables/useScrollspy) - The underlying composable for click-to-scroll helpers and manual control
- [BNav](/docs/components/nav) - Common navigation target for scrollspy links
- [BListGroup](/docs/components/list-group) - Another good fit for scrollspy navigation
