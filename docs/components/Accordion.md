# Accordion

Build vertically collapsing accordions in combination with `<b-collapse>` component.

## How it works

The `<b-accordion-item>` uses the `<b-collapse>` component internally to make it collapsible. To render an accordion that’s expanded, add the `visible` property on the `<b-accordion-item>` component.

::: tip
The animation effect of this component is dependent on the prefers-reduced-motion media query. See the [reduced motion section of our accessibility documentation](https://getbootstrap.com/docs/5.0/getting-started/accessibility/#reduced-motion).
:::

## Example

Click the accordions below to expand/collapse the accordion content.

<ClientOnly>
    <b-card class="text-dark">
        <b-accordion>
            <b-accordion-item title="Accordion Item #1" visible>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #2">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #3">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </b-accordion-item>
        </b-accordion>
    </b-card>
</ClientOnly>

``` html
<b-accordion>
    <b-accordion-item title="Accordion Item #1" visible>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </b-accordion-item>
    <b-accordion-item title="Accordion Item #2">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </b-accordion-item>
    <b-accordion-item title="Accordion Item #3">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </b-accordion-item>
</b-accordion>
```

### Flush

Add `flush` property to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.

<ClientOnly>
    <b-card class="text-dark bg-light">
        <b-accordion flush>
            <b-accordion-item title="Accordion Item #1">
                Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> property. This is the first item's accordion body.
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #2">
                Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> property. This is the second item's accordion body. Let's imagine this being filled with some actual content.
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #3">
                Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> property. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
            </b-accordion-item>
        </b-accordion>
    </b-card>
</ClientOnly>

``` html
<b-accordion flush>
    <b-accordion-item title="Accordion Item #1">
        Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> property. This is the first item's accordion body.
    </b-accordion-item>
    <b-accordion-item title="Accordion Item #2">
        Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> property. This is the second item's accordion body. Let's imagine this being filled with some actual content.
    </b-accordion-item>
    <b-accordion-item title="Accordion Item #3">
        Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> property. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
    </b-accordion-item>
</b-accordion>
```

### Always open

Add `free` property to make accordion items stay open when another item is opened.

<ClientOnly>
    <b-card class="text-dark">
        <b-accordion free>
            <b-accordion-item title="Accordion Item #1">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>default</code> slot, though the transition does limit overflow.
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #2">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>default</code> slot, though the transition does limit overflow.
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #3">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>default</code> slot, though the transition does limit overflow.
            </b-accordion-item>
        </b-accordion>
    </b-card>
</ClientOnly>

``` html
<b-accordion free>
    <b-accordion-item title="Accordion Item #1">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>default</code> slot, though the transition does limit overflow.
    </b-accordion-item>
    <b-accordion-item title="Accordion Item #2">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>default</code> slot, though the transition does limit overflow.
    </b-accordion-item>
    <b-accordion-item title="Accordion Item #3">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>default</code> slot, though the transition does limit overflow.
    </b-accordion-item>
</b-accordion>
```

## Component reference

### `<b-accordion>`

#### Properties

#### Slots

### `<b-accordion-item>`

#### Properties

#### Slots

#### Events