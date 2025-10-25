---
description: 'The `useScrollspy` composable provides automatic navigation highlighting based on scroll position. It tracks the visibility of content elements and automatically updates the active state of corresponding navigation items, making it perfect for table of contents, documentation navigation, and section-based layouts.'
---

# useScrollspy

<PageHeader base="githubComposablesDirectory" />

## Basic Usage

The most common use case is to track scroll position within a scrollable container and highlight corresponding navigation items:

<<< DEMO ./demo/UseScrollspyBasic.vue

## Manual Mode

When you need more control over the active states, you can use manual mode and work with the `list` of tracked elements:

<<< DEMO ./demo/UseScrollspyManual.vue

## Custom Content Query

You can customize which elements are tracked using the `contentQuery` option:

<<< DEMO ./demo/UseScrollspyCustomQuery.vue

## Configuration Options

The `useScrollspy` composable accepts several configuration options:

| Option         | Type                                                       | Default           | Description                                                           |
| -------------- | ---------------------------------------------------------- | ----------------- | --------------------------------------------------------------------- |
| `contentQuery` | `string`                                                   | `':scope > [id]'` | CSS selector for elements to track within the content area            |
| `targetQuery`  | `string`                                                   | `'[href]'`        | CSS selector for navigation links within the target element           |
| `manual`       | `boolean`                                                  | `false`           | When `true`, doesn't automatically apply active classes to navigation |
| `root`         | `string \| ComponentPublicInstance \| HTMLElement \| null` | `null`            | Custom root element for intersection observer                         |
| `rootMargin`   | `string`                                                   | `'0px 0px -25%'`  | Margin around the root for intersection observer                      |
| `threshold`    | `number \| number[]`                                       | `[0.1, 0.5, 1]`   | Intersection observer thresholds                                      |
| `watchChanges` | `boolean`                                                  | `true`            | Whether to watch for DOM changes in the content area                  |

## Return Values

The composable returns an object with the following properties:

| Property         | Type                            | Description                                            |
| ---------------- | ------------------------------- | ------------------------------------------------------ |
| `current`        | `Readonly<Ref<string \| null>>` | ID of the currently active element                     |
| `list`           | `Readonly<Ref<ScrollspyList>>`  | Array of tracked elements with their visibility status |
| `content`        | `Ref<HTMLElement \| undefined>` | Resolved content element reference                     |
| `target`         | `Ref<HTMLElement \| undefined>` | Resolved target element reference                      |
| `scrollIntoView` | `(event: MouseEvent) => void`   | Helper function to scroll to clicked navigation item   |
| `updateList`     | `() => void`                    | Manually update the list of tracked elements           |
| `cleanup`        | `() => void`                    | Clean up intersection observers                        |

### ScrollspyList Type

Each item in the `list` array has the `ScrollspyListItem` structure as defined in the [Types documentation](/docs/types#scrollspylist).

## Advanced Usage

### Custom Root and Margins

For more precise control over when elements are considered "active":

<<< DEMO ./demo/UseScrollspyCustomRoot.vue#script{vue}

### Working with Dynamic Content

When content changes dynamically, you can use `updateList()` to refresh the tracked elements:

<<< DEMO ./demo/UseScrollspyDynamicContent.vue#script{vue}

### Cleanup

Always call `cleanup()` when the component is unmounted to prevent memory leaks:

<<< DEMO ./demo/UseScrollspyCleanup.vue#script{vue}
