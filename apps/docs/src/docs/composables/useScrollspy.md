<ComposableHeader path="useScrollspy/index.ts" title="useScrollspy" />

<div class="lead mb-5">

The `useScrollspy` composable provides automatic navigation highlighting based on scroll position. It tracks the visibility of content elements and automatically updates the active state of corresponding navigation items, making it perfect for table of contents, documentation navigation, and section-based layouts.

</div>

## Basic Usage

The most common use case is to track scroll position within a scrollable container and highlight corresponding navigation items:

<HighlightCard>
  <BContainer>
    <BRow>
      <BCol cols="4">
        <BNav pills vertical ref="navTarget">
          <BNavItem href="#section1" @click="scrollIntoView">Section 1</BNavItem>
          <BNavItem href="#section2" @click="scrollIntoView">Section 2</BNavItem>
          <BNavItem href="#section3" @click="scrollIntoView">Section 3</BNavItem>
        </BNav>
      </BCol>
      <BCol cols="8">
        <div 
          ref="scrollContent"
          style="height: 300px; overflow-y: auto; border: 1px solid #dee2e6; padding: 1rem;"
        >
          <h4 id="section1">Section 1</h4>
          <p v-for="i in 4" :key="`s1-${i}`">{{ loremText }}</p>
          <h4 id="section2">Section 2</h4>
          <p v-for="i in 4" :key="`s2-${i}`">{{ loremText }}</p>
          <h4 id="section3">Section 3</h4>
          <p v-for="i in 4" :key="`s3-${i}`">{{ loremText }}</p>
        </div>
      </BCol>
    </BRow>
  </BContainer>

<template #html>

```vue
<template>
  <BContainer>
    <BRow>
      <BCol cols="4">
        <BNav pills vertical ref="navTarget">
          <BNavItem href="#section1" @click="scrollIntoView">Section 1</BNavItem>
          <BNavItem href="#section2" @click="scrollIntoView">Section 2</BNavItem>
          <BNavItem href="#section3" @click="scrollIntoView">Section 3</BNavItem>
        </BNav>
      </BCol>
      <BCol cols="8">
        <div
          ref="scrollContent"
          style="height: 300px; overflow-y: auto; border: 1px solid #dee2e6; padding: 1rem;"
        >
          <h4 id="section1">Section 1</h4>
          <p v-for="i in 4" :key="`s1-${i}`">Lorem ipsum dolor sit amet...</p>
          <h4 id="section2">Section 2</h4>
          <p v-for="i in 4" :key="`s2-${i}`">Lorem ipsum dolor sit amet...</p>
          <h4 id="section3">Section 3</h4>
          <p v-for="i in 4" :key="`s3-${i}`">Lorem ipsum dolor sit amet...</p>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useScrollspy} from 'bootstrap-vue-next'

const scrollContent = ref<HTMLElement>()
const navTarget = ref<HTMLElement>()

const {current, scrollIntoView} = useScrollspy(scrollContent, navTarget)
</script>
```

</template>
</HighlightCard>

## Manual Mode

When you need more control over the active states, you can use manual mode and work with the `list` of tracked elements:

<HighlightCard>
  <BContainer>
    <BRow>
      <BCol cols="4">
        <BListGroup>
          <BListGroupItem 
            v-for="item in manualList" 
            :key="item.id"
            :href="`#${item.id}`"
            :active="manualCurrent === item.id"
            @click="scrollIntoView"
          >
            {{ item.text }}
          </BListGroupItem>
        </BListGroup>
      </BCol>
      <BCol cols="8">
        <div>Current: <strong>{{ manualCurrent || 'None' }}</strong></div>
        <div 
          ref="manualContent"
          style="height: 250px; overflow-y: auto; border: 1px solid #dee2e6; padding: 1rem;"
        >
          <h5 id="intro">Introduction</h5>
          <p v-for="i in 3" :key="`intro-${i}`">{{ loremText }}</p>
          <h5 id="features">Features</h5>
          <p v-for="i in 3" :key="`features-${i}`">{{ loremText }}</p>
          <h5 id="conclusion">Conclusion</h5>
          <p v-for="i in 3" :key="`conclusion-${i}`">{{ loremText }}</p>
        </div>
      </BCol>
    </BRow>
  </BContainer>

<template #html>

```vue
<template>
  <BContainer>
    <BRow>
      <BCol cols="4">
        <BListGroup>
          <BListGroupItem
            v-for="item in list"
            :key="item.id"
            :href="`#${item.id}`"
            :active="current === item.id"
            @click="scrollIntoView"
          >
            {{ item.text }}
          </BListGroupItem>
        </BListGroup>
      </BCol>
      <BCol cols="8">
        <div>
          Current: <strong>{{ current || 'None' }}</strong>
        </div>
        <div
          ref="content"
          style="height: 250px; overflow-y: auto; border: 1px solid #dee2e6; padding: 1rem;"
        >
          <h5 id="intro">Introduction</h5>
          <p v-for="i in 3" :key="`intro-${i}`">Lorem ipsum dolor sit amet...</p>
          <h5 id="features">Features</h5>
          <p v-for="i in 3" :key="`features-${i}`">Lorem ipsum dolor sit amet...</p>
          <h5 id="conclusion">Conclusion</h5>
          <p v-for="i in 3" :key="`conclusion-${i}`">Lorem ipsum dolor sit amet...</p>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useScrollspy} from 'bootstrap-vue-next'

const content = ref<HTMLElement>()

const {current, list, scrollIntoView} = useScrollspy(content, null, {
  manual: true,
})
</script>
```

</template>
</HighlightCard>

## Custom Content Query

You can customize which elements are tracked using the `contentQuery` option:

<HighlightCard>
  <BContainer>
    <BRow>
      <BCol cols="4">
        <BNav pills vertical ref="customNavTarget">
          <BNavItem href="#custom-intro" @click="scrollIntoView">Introduction</BNavItem>
          <BNavItem href="#custom-main" @click="scrollIntoView">Main Content</BNavItem>
          <BNavItem href="#custom-sidebar" @click="scrollIntoView">Sidebar</BNavItem>
        </BNav>
      </BCol>
      <BCol cols="8">
        <div 
          ref="customScrollContent"
          style="height: 300px; overflow-y: auto; border: 1px solid #dee2e6; padding: 1rem;"
        >
          <div class="content-section" id="custom-intro">
            <h4>Introduction</h4>
            <p v-for="i in 3" :key="`intro-${i}`">{{ loremText }}</p>
          </div>
          <div class="content-section" id="custom-main">
            <h4>Main Content</h4>
            <p v-for="i in 3" :key="`main-${i}`">{{ loremText }}</p>
          </div>
          <div class="content-section" id="custom-sidebar">
            <h4>Sidebar Content</h4>
            <p v-for="i in 3" :key="`sidebar-${i}`">{{ loremText }}</p>
          </div>
        </div>
      </BCol>
    </BRow>
  </BContainer>

<template #html>

```vue
<template>
  <BContainer>
    <BRow>
      <BCol cols="4">
        <BNav pills vertical ref="navTarget">
          <BNavItem href="#custom-intro" @click="scrollIntoView">Introduction</BNavItem>
          <BNavItem href="#custom-main" @click="scrollIntoView">Main Content</BNavItem>
          <BNavItem href="#custom-sidebar" @click="scrollIntoView">Sidebar</BNavItem>
        </BNav>
      </BCol>
      <BCol cols="8">
        <div
          ref="content"
          style="height: 300px; overflow-y: auto; border: 1px solid #dee2e6; padding: 1rem;"
        >
          <div class="content-section" id="custom-intro">
            <h4>Introduction</h4>
            <p v-for="i in 3" :key="`intro-${i}`">Lorem ipsum dolor sit amet...</p>
          </div>
          <div class="content-section" id="custom-main">
            <h4>Main Content</h4>
            <p v-for="i in 3" :key="`main-${i}`">Lorem ipsum dolor sit amet...</p>
          </div>
          <div class="content-section" id="custom-sidebar">
            <h4>Sidebar Content</h4>
            <p v-for="i in 3" :key="`sidebar-${i}`">Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useScrollspy} from 'bootstrap-vue-next'

const content = ref<HTMLElement>()
const navTarget = ref<HTMLElement>()

const {scrollIntoView} = useScrollspy(content, navTarget, {
  contentQuery: '.content-section[id]',
})
</script>
```

</template>
</HighlightCard>

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

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { useScrollspy } from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'
import ComposableHeader from './ComposableHeader.vue'

const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

// Basic example
const scrollContent = ref<HTMLElement>()
const navTarget = ref<HTMLElement>()
const { current, scrollIntoView } = useScrollspy(scrollContent, navTarget)

// Manual example  
const manualContent = ref<HTMLElement>()
const { current: manualCurrent, list: manualList, scrollIntoView: manualScrollIntoView } = useScrollspy(manualContent, null, {
  manual: true
})

// Custom query example
const customScrollContent = ref<HTMLElement>()
const customNavTarget = ref<HTMLElement>()
const { scrollIntoView: customScrollIntoView } = useScrollspy(customScrollContent, customNavTarget, {
  contentQuery: '.content-section[id]'
})

// Cleanup on unmount
onBeforeUnmount(() => {
  // Cleanup will be handled automatically by the composable
})
</script>
