# Accordion

<PageHeader>

Build vertically collapsing accordions in combination with `BCollapse` component.

</PageHeader>

## How it works

The `BAccordionItem` uses the `BCollapse` component internally to make it collapsible. To render an accordion that’s expanded, add the `visible` property on the `BAccordionItem` component.

<BAlert variant="info" :model-value="true" class="my-5">

The animation effect of this component is dependent on the prefers-reduced-motion media query. See the [reduced motion section of bootstrap's accessibility documentation](https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion).

</BAlert>

## Example

Click the accordions below to expand/collapse the accordion content.

<<< DEMO ./demo/AccordionOverview.vue#template{vue-html}

### Flush

Add `flush` property to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.

<<< DEMO ./demo/AccordionFlush.vue#template{vue-html}

### Always open

Add `free` property to make accordion items stay open when another item is opened.

<<< DEMO ./demo/AccordionFree.vue#template{vue-html}

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/accordion.data'
</script>
