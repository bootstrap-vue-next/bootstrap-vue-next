# Accordion

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">

Build vertically collapsing accordions in combination with `BCollapse` component.

</div>

## How it works

The `BAccordionItem` uses the `BCollapse` component internally to make it collapsible. To render an accordion that’s expanded, add the `visible` property on the `BAccordionItem` component.

<BAlert variant="info" :model-value="true" class="my-5">

The animation effect of this component is dependent on the prefers-reduced-motion media query. See the [reduced motion section of bootstrap's accessibility documentation](https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion).

</BAlert>

## Example

Click the accordions below to expand/collapse the accordion content.

<HighlightCard>
  <BAccordion>
    <BAccordionItem title="Accordion Item #1" visible>
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </BAccordionItem>
    <BAccordionItem title="Accordion Item #2">
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </BAccordionItem>
    <BAccordionItem title="Accordion Item #3">
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </BAccordionItem>
  </BAccordion>
  <template #html>

```vue-html
<BAccordion>
  <BAccordionItem title="Accordion Item #1" visible>
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It is also worth noting
    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
    does limit overflow.
  </BAccordionItem>
  <BAccordionItem title="Accordion Item #2">
    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It is also worth noting
    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
    does limit overflow.
  </BAccordionItem>
  <BAccordionItem title="Accordion Item #3">
    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It is also worth noting
    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
    does limit overflow.
  </BAccordionItem>
</BAccordion>
```

  </template>
</HighlightCard>

### Flush

Add `flush` property to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.

<HighlightCard>
  <BAccordion flush>
    <BAccordionItem title="Accordion Item #1">
      Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> property. This is the first item's accordion body.
    </BAccordionItem>
    <BAccordionItem title="Accordion Item #2">
      Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> property. This is the second item's accordion body. Let's imagine this being filled with some actual content.
    </BAccordionItem>
    <BAccordionItem title="Accordion Item #3">
      Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> property. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
    </BAccordionItem>
  </BAccordion>
  <template #html>

```vue-html
<BAccordion flush>
  <BAccordionItem title="Accordion Item #1">
    Placeholder content for this accordion, which is intended to demonstrate the
    <code>flush</code> property. This is the first item's accordion body.
  </BAccordionItem>
  <BAccordionItem title="Accordion Item #2">
    Placeholder content for this accordion, which is intended to demonstrate the
    <code>flush</code> property. This is the second item's accordion body. Let's imagine this being
    filled with some actual content.
  </BAccordionItem>
  <BAccordionItem title="Accordion Item #3">
    Placeholder content for this accordion, which is intended to demonstrate the
    <code>flush</code> property. This is the third item's accordion body. Nothing more exciting
    happening here in terms of content, but just filling up the space to make it look, at least at
    first glance, a bit more representative of how this would look in a real-world application.
  </BAccordionItem>
</BAccordion>
```

  </template>
</HighlightCard>

### Always open

Add `free` property to make accordion items stay open when another item is opened.

<HighlightCard>
  <BAccordion free>
    <BAccordionItem title="Accordion Item #1">
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within the <code>default</code> slot, though the transition does limit overflow.
    </BAccordionItem>
    <BAccordionItem title="Accordion Item #2">
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within the <code>default</code> slot, though the transition does limit overflow.
    </BAccordionItem>
    <BAccordionItem title="Accordion Item #3">
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within the <code>default</code> slot, though the transition does limit overflow.
    </BAccordionItem>
  </BAccordion>
  <template #html>

```vue-html
<BAccordion free>
  <BAccordionItem title="Accordion Item #1">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It is also worth noting
    that just about any HTML can go within the <code>default</code> slot, though the transition does
    limit overflow.
  </BAccordionItem>
  <BAccordionItem title="Accordion Item #2">
    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It is also worth noting
    that just about any HTML can go within the <code>default</code> slot, though the transition does
    limit overflow.
  </BAccordionItem>
  <BAccordionItem title="Accordion Item #3">
    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It is also worth noting
    that just about any HTML can go within the <code>default</code> slot, though the transition does
    limit overflow.
  </BAccordionItem>
</BAccordion>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/accordion.data'
import {BAccordion, BAccordionItem, BAlert} from 'bootstrap-vue-next'
import ComponentReference from '../../components/ComponentReference.vue'
import ComponentSidebar from '../../components/ComponentSidebar.vue'
import HighlightCard from '../../components/HighlightCard.vue'
</script>
