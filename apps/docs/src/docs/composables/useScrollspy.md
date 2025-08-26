<ComposableHeader path="useScrollspy/index.ts" title="useScrollspy" />

<div class="lead mb-5">

The `useScrollspy` composable provides automatic navigation highlighting based on scroll position. It tracks the visibility of content elements and automatically updates the active state of corresponding navigation items, making it perfect for table of contents, documentation navigation, and section-based layouts.

</div>

## Basic Usage

The most common use case is to track scroll position within a scrollable container and highlight corresponding navigation items:

<<< DEMO ./demo/UseScrollspyBasic.vue#template{vue-html}

## Manual Mode

When you need more control over the active states, you can use manual mode and work with the `list` of tracked elements:

<<< DEMO ./demo/UseScrollspyManual.vue#template{vue-html}

## Custom Content Query

You can customize which elements are tracked using the `contentQuery` option:

<<< DEMO ./demo/UseScrollspyCustomQuery.vue#template{vue-html}

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

Each item in the `list` array has the following structure:

```typescript
type ScrollspyListItem = {
  id: string | null // Element ID
  el: HTMLElement | null // DOM element reference
  visible: boolean // Whether element is currently visible
  text: string | null // Text content of the element
}
```

## Advanced Usage

### Custom Root and Margins

For more precise control over when elements are considered "active":

```vue
<script setup lang="ts">
const {current} = useScrollspy(content, target, {
  root: document.querySelector('#custom-viewport'),
  rootMargin: '0px 0px -50%', // Element must be 50% visible
  threshold: [0.25, 0.5, 0.75], // Multiple thresholds for smooth transitions
})
</script>
```

### Working with Dynamic Content

When content changes dynamically, you can use `updateList()` to refresh the tracked elements:

```vue
<script setup lang="ts">
const {updateList} = useScrollspy(content, target)

// Call when content changes
const addNewSection = () => {
  // Add new content...
  nextTick(() => {
    updateList()
  })
}
</script>
```

### Cleanup

Always call `cleanup()` when the component is unmounted to prevent memory leaks:

```vue
<script setup lang="ts">
import {onBeforeUnmount} from 'vue'

const {cleanup} = useScrollspy(content, target)

onBeforeUnmount(() => {
  cleanup()
})
</script>
```


