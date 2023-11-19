# Dropdown

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.

</div>

`BDropdown` components are toggleable, contextual overlays for displaying lists of links, and more. They're toggled by clicking (or pressing space or enter when focused), not by hovering; this is an [intentional design decision](https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/).

<HighlightCard>
  <BDropdown v-model="show1" text="Dropdown Button" class="me-2">
    <BDropdownItem>First Action</BDropdownItem>
    <BDropdownItem>Second Action</BDropdownItem>
    <BDropdownItem>Third Action</BDropdownItem>
    <BDropdownDivider />
    <BDropdownItem active>Active action</BDropdownItem>
    <BDropdownItem disabled>Disabled action</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" text="Dropdown Button">
    <BDropdownItem>First Action</BDropdownItem>
    <BDropdownItem>Second Action</BDropdownItem>
    <BDropdownItem>Third Action</BDropdownItem>
    <BDropdownDivider />
    <BDropdownItem active>Active action</BDropdownItem>
    <BDropdownItem disabled>Disabled action</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

## Button content

You can customize the text of the dropdown button by using either the `text` prop (shown in previous examples), or use the `button-content` slot instead of the `text` prop. The `button-content` slot allows you to use basic HTML and icons in the button content.

If both the prop `text` and slot `button-content` are present, the slot `button-content` will take precedence.

<HighlightCard>
  <BDropdown v-model="show2" text="Button text via Prop" class="me-2">
    <BDropdownItem href="#">An item</BDropdownItem>
    <BDropdownItem href="#">Another item</BDropdownItem>
  </BDropdown>
  <BDropdown v-model="show3" class="me-2">
    <template #button-content>
    Custom <strong>Content</strong> with <em>HTML</em> via Slot
    </template>
    <BDropdownItem href="#">An item</BDropdownItem>
    <BDropdownItem href="#">Another item</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show1" text="Button text via Prop" class="m-1">
    <BDropdownItem href="#">An item</BDropdownItem>
    <BDropdownItem href="#">Another item</BDropdownItem>
  </BDropdown>

  <BDropdown v-model="show2" class="m-1">
    <template #button-content>
      Custom <strong>Content</strong> with <em>HTML</em> via Slot
    </template>
    <BDropdownItem href="#">An item</BDropdownItem>
    <BDropdownItem href="#">Another item</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show1 = ref(false)
const show2 = ref(false)
</script>
```

  </template>
</HighlightCard>

## Positioning

Dropdown supports various positioning such as left and right aligned, dropdown and dropup, and supports auto-flipping dropdown to dropup, and vice-versa) when the menu would overflow off of the visible screen area.

### Menu alignment

The dropdown menu can either be _start_ aligned (default) or _end_ aligned to the button above it. To have the dropdown aligned on the _end_, set the `end` prop.

<HighlightCard>
  <BDropdown v-model="show4" text="Default Alignment" variant="primary" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <BDropdown v-model="show5" start text="Start Alignment" variant="primary" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <BDropdown v-model="show6" end text="End Align" variant="primary" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show1" text="Default Alignment" variant="primary">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>

  <BDropdown v-model="show2" start text="Start Alignment" variant="primary">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>

  <BDropdown v-model="show3" end text="End Align" variant="primary">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
</script>
```

  </template>
</HighlightCard>

### Dropup

Turn your dropdown menu into a drop-up menu by setting the `dropup` prop.

<HighlightCard>
  <BDropdown v-model="show7" dropup text="Drop-Up" variant="primary" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" dropup text="Drop-up" variant="primary" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

### Drop start or end

Turn your dropdown menu into a drop-end menu by setting the `dropend` prop. Or, turn it into a drop-start menu by setting the `dropstart` prop to true.

The order of precedence is top -> start -> end -> bottom.

<HighlightCard>
  <BDropdown v-model="show8" dropend text="Drop-end" variant="primary" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <BDropdown v-model="show9" dropstart text="Drop-start" variant="primary" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
      <BDropdownItem href="#">Another action</BDropdownItem>
      <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show1" dropend text="Drop-end" variant="primary">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>

  <BDropdown v-model="show2" dropstart text="Drop-start" variant="primary">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show1 = ref(false)
const show2 = ref(false)
</script>
```

  </template>
</HighlightCard>

### Auto "flipping"

By default, dropdowns may flip to the top, or the bottom, based on their current position in the viewport. To disable this auto-flip feature, set the `no-flip` prop.

<HighlightCard>
  <BDropdown v-model="show10" text="No flipping" no-flip class="me-2">
    <BDropdownItem href="#">An item</BDropdownItem>
    <BDropdownItem href="#">Another item</BDropdownItem>
    <BDropdownItem href="#">Yet Another item</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" text="No flipping" no-flip>
    <BDropdownItem href="#">An item</BDropdownItem>
    <BDropdownItem href="#">Another item</BDropdownItem>
    <BDropdownItem href="#">Yet Another item</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

### Menu offset

Like to move your menu away from the toggle buttons a bit? Then use the `offset` prop to specify the number of pixels to push right (or left when negative) from the toggle button:

<HighlightCard>
  <BDropdown v-model="show11" offset="25" text="Offset Dropdown" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <BDropdown v-model="show12" :offset="{alignmentAxis: 50, crossAxis: 60, mainAxis: 70}" text="Offset Dropdown 2 dimensions" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show1" offset="25" text="Offset Dropdown">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>

  <BDropdown
    v-model="show2"
    :offset="{alignmentAxis: 50, crossAxis: 60, mainAxis: 70}"
    text="Offset Dropdown 2 dimensions"
  >
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show1 = ref(false)
const show2 = ref(false)
</script>
```

  </template>
</HighlightCard>

### Floating Strategy

By default, the floating element will render using _absolute_. You can change this using the `strategy` prop. The only other option is `fixed`.

<HighlightCard>
  <BDropdown v-model="show13" text="Strategy fixed" strategy="fixed" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" text="Strategy fixed" strategy="fixed">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

### Boundary constraint

By default, dropdowns are visually constrained to their clipping ancestors, which will suffice in most situations. However, if you place a dropdown inside an element that has `overflow: scroll` (or similar) set, the dropdown menu may - in some situations - get cut off. To get around this, you can specify a boundary element via the `boundary` prop. Supported values are `clippingAncestors` (the default), `viewport`, `document`, or a reference to an HTML element.

**Note:** When `boundary` is any value other than the default of `clippingAncestors`, the style `position: static` is applied to the dropdown component's root element to allow the menu to "break out" of its scroll container. In some situations, this may affect your layout or positioning of the dropdown trigger button. In these cases, you may need to wrap your dropdown inside another element

### Container element

By default, dropdowns are next to the toggle button. However, you can specify a container element via the `container` prop where dropdowns will be teleported to instead. Supported values are CSS selector string, an actual DOM node or a reference to an HTML element.

### Dropdown auto close behavior

By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the `auto-close` property to change this behavior of the dropdown.

The `auto-close`property has 4 options.

- `true` : the dropdown will be closed by clicking outside or inside the dropdown menu
- `false` : the dropdown will be closed by clicking the toggle button and manually calling the hide method. (Also will not be closed by pressing <kbd>esc</kbd> key)
- `inside` : the dropdown will be closed (only) by clicking inside the dropdown menu
- `outside` : the dropdown will be closed (only) by clicking outside the dropdown menu

<HighlightCard>
  <BDropdown v-model="show14" text="Default Dropdown" class="me-2">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here</BDropdownItemButton>
  </BDropdown>
  <BDropdown v-model="show15" text="Clickable outside (auto-close=inside)" auto-close="inside" class="me-2">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here</BDropdownItemButton>
  </BDropdown>
  <BDropdown v-model="show16" text="Clickable inside (auto-close=outside)" auto-close="outside" class="me-2">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here</BDropdownItemButton>
  </BDropdown>
  <BDropdown v-model="show17" text="Manual close (auto-close=false)" :auto-close="false" class="me-2">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here</BDropdownItemButton>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show1" text="Default Dropdown">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here</BDropdownItemButton>
  </BDropdown>

  <BDropdown v-model="show2" text="Clickable outside (auto-close=inside)" auto-close="inside">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here</BDropdownItemButton>
  </BDropdown>

  <BDropdown v-model="show3" text="Clickable inside (auto-close=outside)" auto-close="outside">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here</BDropdownItemButton>
  </BDropdown>

  <BDropdown v-model="show4" text="Manual close (auto-close=false)" :auto-close="false">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here</BDropdownItemButton>
  </BDropdown>
</template>

<script setup lang="ts">
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
</script>
```

  </template>
</HighlightCard>

### Advanced floating-ui configuration

Occasionally you may want to modify the floating-ui behavior. We already expose some configurations through the `no-flip`, `no-shift`, `strategy`, and `offset` props. However, lower-level access to the API may sometimes be required. You can use the `floatingMiddleware` prop to define middleware to pass through to the floating-ui element.

You can view the [Floating-ui docs](https://floating-ui.com/docs/middleware) to learn more about their middleware. Note: You will likely want to install `@floating-ui/vue` to use their middleware directly, rather than rebuilding middleware options.

**Note**: Using the `floatingMiddleware` prop will overwrite other defined middleware such as `offset`, `noFlip`, and `noShift`. They are not merged.

## Split button support

Create a split dropdown button, where the left button provides standard `click` event and link support, while the right-hand side is the dropdown menu toggle button.

<HighlightCard>
  <BDropdown v-model="show18" split text="Split Dropdown" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here...</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" split text="Split Dropdown" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here...</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

### Split button link support

The left split button defaults to an element of type `<button>` (a `BButton` to be exact). To convert this button into a link or `RouterLink`, specify the href via the `split-href` prop or a router link `to` value via the `split-to` prop, while maintaining the look of a button.

<HighlightCard>
  <BDropdown v-model="show19" split split-href="#foo/bar" text="Split Link" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here...</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" split split-href="#foo/bar" text="Split Link">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here...</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

### Split button type

The split button defaults to a button `type` of `button`. You can specify an alternate type via the `split-button-type` prop. Supported values are: `button`, `submit`, and `reset`.

If props `split-to` or `split-href` are set, the `split-button-type` prop will be ignored.

## Styling options

Dropdowns support various props for styling the dropdown trigger button.

### Sizing

Dropdowns work with trigger buttons of all sizes, including default and split dropdown buttons.

Set the `size` prop to either `sm` for a small button, or `lg` for a large button.

<HighlightCard>
  <BDropdown v-model="show20" size="lg" text="Large" class="me-2">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here</BDropdownItemButton>
    </BDropdown>
    <BDropdown v-model="show21" size="lg" split text="Large Split" class="me-2">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here...</BDropdownItemButton>
  </BDropdown>
  <BDropdown v-model="show22" size="sm" text="Small" class="me-2">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here...</BDropdownItemButton>
  </BDropdown>
  <BDropdown v-model="show23" size="sm" split text="Small Split" class="me-2">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here...</BDropdownItemButton>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show1" size="lg" text="Large">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here</BDropdownItemButton>
  </BDropdown>

  <BDropdown v-model="show2" size="lg" split text="Large Split">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here...</BDropdownItemButton>
  </BDropdown>
  <BDropdown v-model="show3" size="sm" text="Small">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here...</BDropdownItemButton>
  </BDropdown>

  <BDropdown v-model="show4" size="sm" split text="Small Split">
    <BDropdownItemButton>Action</BDropdownItemButton>
    <BDropdownItemButton>Another action</BDropdownItemButton>
    <BDropdownItemButton>Something else here...</BDropdownItemButton>
  </BDropdown>
</template>

<script setup lang="ts">
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
</script>
```

  </template>
</HighlightCard>

**Note:** _changing the size of the button(s) does not affect the size of the menu items!_

### Dropdown color variants

The dropdown toggle button can have one of the standard Bootstrap contextual variants applied by setting the prop `variant` to `success`, `primary`, `info`, `danger`, `link`, `outline-dark`, etc. (or custom variants, if defined). The default variant is `secondary`.

See the [Variant Reference](/docs/reference/color-variants) for a full list of built-in contextual variants.

<HighlightCard>
  <BDropdown v-model="show24" text="Primary" variant="primary" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <BDropdown v-model="show25" text="Success" variant="success" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <BDropdown v-model="show26" text="Outline Danger" variant="outline-danger" class="me-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show1" text="Primary" variant="primary">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>

  <BDropdown v-model="show2" text="Success" variant="success">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>

  <BDropdown v-model="show3" text="Outline Danger" variant="outline-danger">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
</script>
```

  </template>
</HighlightCard>

You can also apply arbitrary classes to the toggle button via the `toggle-class` prop.

### Split button color variant

By default, the left split button uses the same `variant` as the `toggle` button. You can give the
split button its variant via the `split-variant` prop.

<HighlightCard>
  <BDropdown
    v-model="show27"
    split
    split-variant="outline-primary"
    variant="primary"
    text="Split Variant Dropdown"
    class="me-2"
  >
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here...</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown
    v-model="show"
    split
    split-variant="outline-primary"
    variant="primary"
    text="Split Variant Dropdown"
  >
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here...</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

### Dark mode

### Deprecated Bootstrap v5.3

You can render the dropdown menu in dark mode by setting the `dark` property.

<HighlightCard>
  <BDropdown v-model="show28" text="Dropdown Button" dark class="m-md-2">
    <BDropdownItem>First Action</BDropdownItem>
    <BDropdownItem>Second Action</BDropdownItem>
    <BDropdownItem>Third Action</BDropdownItem>
    <BDropdownDivider />
    <BDropdownItem active>Active action</BDropdownItem>
    <BDropdownItem disabled>Disabled action</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" text="Dropdown Button" dark>
    <BDropdownItem>First Action</BDropdownItem>
    <BDropdownItem>Second Action</BDropdownItem>
    <BDropdownItem>Third Action</BDropdownItem>
    <BDropdownDivider />
    <BDropdownItem active>Active action</BDropdownItem>
    <BDropdownItem disabled>Disabled action</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

### Block level dropdowns

By default, dropdowns act like buttons and are displayed inline. To create block-level dropdowns (that span to the full width of a parent) set the `block` prop. Both, regular and split button dropdowns are supported.

<HighlightCard>
  <BDropdown v-model="show29" text="Block Level Dropdown" block variant="primary" class="mb-2">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <BDropdown
    v-model="show30"
    text="Block Level Split Dropdown"
    block
    split
    split-variant="outline-primary"
    variant="primary"
  >
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here...</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show1" text="Block Level Dropdown" block variant="primary">
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>

  <BDropdown
    v-model="show2"
    text="Block Level Split Dropdown"
    block
    split
    split-variant="outline-primary"
    variant="primary"
  >
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here...</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show1 = ref(false)
const show2 = ref(false)
</script>
```

  </template>
</HighlightCard>

If you want the dropdown menu to span to the full width of the parent container too, add the `w-100`
utility class to the `menu-class` prop.

<HighlightCard>
  <BDropdown
    v-model="show31"
    text="Block Level Dropdown Menu"
    block
    variant="primary"
    menu-class="w-100"
  >
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown
    v-model="show"
    text="Block Level Dropdown Menu"
    block
    variant="primary"
    menu-class="w-100"
  >
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

### Dropdown sub-component color variants

Many of the supported dropdown [sub-components](#dropdown-supported-sub-components) provide a
`variant` prop for controlling their text color.

### Hidden caret

The dropdown can be created with the toggle's caret visually hidden by setting the `no-caret` prop to `true`. This is useful when the dropdown is to be displayed as an icon.

<HighlightCard>
  <BDropdown v-model="show32" size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
    <template #button-content>
      &#x1f50d;<span class="visually-hidden">Search</span>
    </template>
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here...</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
    <template #button-content> &#x1f50d;<span class="visually-hidden">Search</span> </template>
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here...</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

**Note:** The caret will always be shown when using `split` mode.

## Dropdown supported sub-components

The following components can be placed inside your dropdowns. Using any other component or markup
may break layout and/or keyboard navigation.
| Sub-component | Description |
| ----------------- | ---------------------------- |
| `BDropdownItem` | Action items that provide click, link, and `RouterLink`/`NuxtLink` functionality. Renders as an `<a>` element by default |
| <span style="white-space:nowrap;">`BDropdownItemButton`</span> | An alternative to `BDropdownItem` that renders a menu item using a `<button>` element |
| `BDropdownDivider` | A divider/spacer which can be used to separate dropdown items |
| `BDropdownText` | Free flowing text content in a menu |
| `BDropdownGroup` | For grouping dropdown sub-components with an optional header |
| `BDropdownHeader` | A header item, used to help identify a group of dropdown items |

**Note:** _Nested sub-menus are **not** supported._

### `BDropdownItem`

The `BDropdownItem` is typically used to create a navigation link inside your menu. Use either the `href` prop or the `to` prop (for router link support) to generate the appropriate navigation link. If neither `href` nor `to` are provided, a standard `<a>` link will be generated with an `href` of `#` (with an event handler that will prevent scroll to top behavior by preventing the default link action).

Disabled the dropdown item by setting the `disabled` prop.

<HighlightCard>
  <BDropdown v-model="show33" text="Dropdown">
    <BDropdownItem>First Action</BDropdownItem>
    <BDropdownItem variant="primary">Second Action</BDropdownItem>
    <BDropdownItem active>Active action</BDropdownItem>
    <BDropdownItem disabled>Disabled action</BDropdownItem>
    <BDropdownItem to="/docs/components/badge">Badge</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" text="Dropdown Button">
    <BDropdownItem>First Action</BDropdownItem>
    <BDropdownItem variant="primary">Second Action</BDropdownItem>
    <BDropdownItem active>Active action</BDropdownItem>
    <BDropdownItem disabled>Disabled action</BDropdownItem>
    <BDropdownItem href="/docs/components/badge">Badge</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

### `BDropdownItemButton`

Historically dropdown menu contents had to be links (`BDropdownItem`), but that is no longer the
case with Bootstrap v5. Now you can optionally create `<button>` elements in your dropdowns by using
the `BDropdownItemButton` sub-component. `BDropdownItemButton` does not support the `href`
or `to` props.

Disabled the dropdown item button by setting the `disabled` prop.

<HighlightCard>
  <BDropdown v-model="show34" text="Dropdown using buttons as menu items">
    <BDropdownItemButton>I am a button</BDropdownItemButton>
    <BDropdownItemButton active>I am a active button</BDropdownItemButton>
    <BDropdownItemButton disabled>I am a button, but disabled!</BDropdownItemButton>
    <BDropdownItemButton>I do not look like a button, but I am!</BDropdownItemButton>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" text="Dropdown using buttons as menu items">
    <BDropdownItemButton>I am a button</BDropdownItemButton>
    <BDropdownItemButton active>I am an active button</BDropdownItemButton>
    <BDropdownItemButton disabled>I am a button, but disabled!</BDropdownItemButton>
    <BDropdownItemButton>I do not look like a button, but I am!</BDropdownItemButton>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

When the menu item does not trigger navigation, it is recommended to use the
`BDropdownItemButton` sub-component.

### `BDropdownDivider`

Separate groups of related menu items with `BDropdownDivider`.

<HighlightCard>
  <BDropdown v-model="show35" text="Dropdown with divider">
    <BDropdownItemButton>First item</BDropdownItemButton>
    <BDropdownItemButton>Second item</BDropdownItemButton>
    <BDropdownDivider />
    <BDropdownItemButton>Separated Item</BDropdownItemButton>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" text="Dropdown with divider">
    <BDropdownItemButton>First item</BDropdownItemButton>
    <BDropdownItemButton>Second item</BDropdownItemButton>
    <BDropdownDivider />
    <BDropdownItemButton>Separated Item</BDropdownItemButton>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

### `BDropdownText`

Place any freeform text within a dropdown menu using the `BDropdownText` sub-component or use
text and use spacing utilities. Note that you'll likely need additional sizing styles to
constrain/set the menu width.

<HighlightCard>
  <BDropdown v-model="show36" text="Dropdown with text">
    <BDropdownText style="width: 240px;">
      Some example text that is free-flowing within the dropdown menu.
    </BDropdownText>
    <BDropdownText  tag="span">And this is more example text.</BDropdownText>
    <BDropdownDivider />
    <BDropdownItemButton>First item</BDropdownItemButton>
    <BDropdownItemButton>Second Item</BDropdownItemButton>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" text="Dropdown with text">
    <BDropdownText style="width: 240px;">
      Some example text that is free-flowing within the dropdown menu.
    </BDropdownText>
    <BDropdownText>And this is more example text.</BDropdownText>
    <BDropdownDivider />
    <BDropdownItemButton>First item</BDropdownItemButton>
    <BDropdownItemButton>Second Item</BDropdownItemButton>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

`BDropdownText` has the BootstrapVueNext custom class `.b-dropdown-text` applied to it which sets some basic styles which are suitable in most situations. By default, its width will be the same as the widest `BDropdownItem` content. You may need to place additional styles or helper classes on the component.

~~By default, `BDropdownText` renders using tag `<p>`. You can change the rendered tag by setting the `tag` prop to any valid HTML5 tag on the `BDropdownText` sub-component~~.

### `BDropdownGroup`

Group a set of dropdown sub-components with an optional associated header. Place a `BDropdownDivider` between your `BDropdownGroup` and other groups or non-grouped dropdown contents.

<HighlightCard>
  <BDropdown v-model="show37" text="Dropdown with group">
    <BDropdownItemButton> Non-grouped Item </BDropdownItemButton>
    <BDropdownDivider />
    <BDropdownGroup header="Group 1">
      <BDropdownItemButton>First Grouped item</BDropdownItemButton>
      <BDropdownItemButton>Second Grouped Item</BDropdownItemButton>
    </BDropdownGroup>
    <BDropdownGroup header="Group 2" header-variant="primary">
      <BDropdownItemButton>First Grouped item</BDropdownItemButton>
      <BDropdownItemButton>Second Grouped Item</BDropdownItemButton>
    </BDropdownGroup>
    <BDropdownDivider />
    <BDropdownItemButton> Another Non-grouped Item </BDropdownItemButton>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" text="Dropdown with group">
    <BDropdownItemButton> Non-grouped Item </BDropdownItemButton>
    <BDropdownDivider />
    <BDropdownGroup header="Group 1">
      <BDropdownItemButton>First Grouped item</BDropdownItemButton>
      <BDropdownItemButton>Second Grouped Item</BDropdownItemButton>
    </BDropdownGroup>
    <BDropdownGroup header="Group 2" header-variant="primary">
      <BDropdownItemButton>First Grouped item</BDropdownItemButton>
      <BDropdownItemButton>Second Grouped Item</BDropdownItemButton>
    </BDropdownGroup>
    <BDropdownDivider />
    <BDropdownItemButton> Another Non-grouped Item </BDropdownItemButton>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

### `BDropdownHeader`

Add a header to label sections of actions in any dropdown menu.

<HighlightCard>
  <BDropdown v-model="show38" text="Dropdown with header">
    <BDropdownHeader> Dropdown header </BDropdownHeader>
    <BDropdownItemButton aria-describedby="dropdown-header-label">
      First item
    </BDropdownItemButton>
    <BDropdownItemButton aria-describedby="dropdown-header-label">
      Second Item
    </BDropdownItemButton>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" text="Dropdown with header">
    <BDropdownHeader> Dropdown header </BDropdownHeader>
    <BDropdownItemButton aria-describedby="dropdown-header-label"> First item </BDropdownItemButton>
    <BDropdownItemButton aria-describedby="dropdown-header-label">
      Second Item
    </BDropdownItemButton>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

See Section [Dropdown headers and accessibility](#headers-and-accessibility) for details on making headers more accessible for users of assistive technologies.

Using the `BDropdownGroup` sub-component simplifies creating accessible grouped dropdown items with an associated header.

## Accessibility

Providing a unique `id` prop ensures ARIA compliance by automatically adding the appropriate `aria-*` attributes in the rendered markup. By default, the dropdown will render a unique id for every dropdown. However, this can be overwritten with the prop `id`.

The default ARIA role is set to `menu`, but you can change this default to another role (such as `navigation`) via the `role` prop, depending on your use case.

When a menu item does not trigger navigation, it is recommended to use the `BDropdownItemButton` sub-component (which is not announced as a link) instead of `BDropdownItem` (which is presented as a link to the user).

### Headers and accessibility

When using `BDropdownHeader` components in the dropdown menu, it is recommended to add an `id` attribute to each of the headers, and then set the `aria-describedby` attribute (set to the `id` value of the associated header) on each following dropdown items under that header. This will provide users of assistive technologies (i.e. sight-impaired users) additional context about the dropdown item:

<HighlightCard>
  <BDropdown v-model="show39" text="Dropdown ARIA" variant="primary">
    <BDropdownHeader id="dropdown-header-1">Groups</BDropdownHeader>
    <BDropdownItemButton aria-describedby="dropdown-header-1">Add</BDropdownItemButton>
    <BDropdownItemButton aria-describedby="dropdown-header-1">Delete</BDropdownItemButton>
    <BDropdownHeader id="dropdown-header-2">Users</BDropdownHeader>
    <BDropdownItemButton aria-describedby="dropdown-header-2">Add</BDropdownItemButton>
    <BDropdownItemButton aria-describedby="dropdown-header-2">Delete</BDropdownItemButton>
    <BDropdownDivider />
    <BDropdownItemButton>
      Something <strong>not</strong> associated with Users
    </BDropdownItemButton>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" text="Dropdown ARIA" variant="primary">
    <BDropdownHeader id="dropdown-header-1">Groups</BDropdownHeader>
    <BDropdownItemButton aria-describedby="dropdown-header-1">Add</BDropdownItemButton>
    <BDropdownItemButton aria-describedby="dropdown-header-1">Delete</BDropdownItemButton>

    <BDropdownHeader id="dropdown-header-2">Users</BDropdownHeader>
    <BDropdownItemButton aria-describedby="dropdown-header-2">Add</BDropdownItemButton>
    <BDropdownItemButton aria-describedby="dropdown-header-2">Delete</BDropdownItemButton>

    <BDropdownDivider />

    <BDropdownItemButton>
      Something <strong>not</strong> associated with Users
    </BDropdownItemButton>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

As a simplified alternative, use the `BDropdownGroup` instead to easily associate header text to the contained dropdown sub-components.

### Keyboard navigation

Dropdowns support keyboard navigation, emulating native `<select>` behavior.

Note that <kbd>Down</kbd> and <kbd>Up</kbd> will not move focus into `BDropdownForm` sub-components, but users can still use <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd> to move into form controls within the menu.

## Lazy

Dropdown menus can have their inner content rendered lazily through the `lazy` prop. By default, this is turned off. For navigation elements, it may be beneficial to keep lazy off, so web crawlers can properly comb through your sites navigation.

<HighlightCard>
  <BDropdown v-model="show40" lazy text="Dropdown">
    <BDropdownItem>First Action</BDropdownItem>
    <BDropdownItem>Second Action</BDropdownItem>
    <BDropdownItem>Third Action</BDropdownItem>
    <BDropdownDivider />
    <BDropdownItem active>Active action</BDropdownItem>
    <BDropdownItem disabled>Disabled action</BDropdownItem>
  </BDropdown>
  <template #html>

```vue
<template>
  <BDropdown v-model="show" lazy text="Dropdown">
    <BDropdownItem>First Action</BDropdownItem>
    <BDropdownItem>Second Action</BDropdownItem>
    <BDropdownItem>Third Action</BDropdownItem>
    <BDropdownDivider />
    <BDropdownItem active>Active action</BDropdownItem>
    <BDropdownItem disabled>Disabled action</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

  </template>
</HighlightCard>

## Implementation notes

The dropdown menu is rendered with semantic `<ul>` and `<li>` elements for accessibility reasons. The `.dropdown-menu` is the `<ul>` element, while dropdown items (items, buttons, text, form, headers, and dividers) are wrapped in an `<li>` element. If creating custom items to place inside the dropdown menu, ensure they are wrapped with a plain `<li>`.

## See also

- [`BNavItemDropdown`](/bootstrap-vue-next/components/nav#dropdown-support) for dropdown support inside `BNav` and `BNavbar`
- [Router Link Support](/bootstrap-vue-next/reference/router-links) reference for information about router-link specific props available on `BDropdownItem`

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/dropdown.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {
  BDropdownGroup,
  BDropdownText,
  BDropdownItemButton,
  BDropdownHeader,
  BCard,
  BDropdown,
  BDropdownDivider,
  BDropdownItem
} from 'bootstrap-vue-next'
import {ref} from 'vue'

const show = ref(false)

const show1 = ref(false)

const show2 = ref(false)
const show3 = ref(false)

const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)

const show7 = ref(false)

const show8 = ref(false)
const show9 = ref(false)

const show10 = ref(false)

const show11 = ref(false)
const show12 = ref(false)

const show13 = ref(false)
const show14 = ref(false)
const show15 = ref(false)
const show16 = ref(false)

const show17 = ref(false)

const show18 = ref(false)
const show19 = ref(false)

const show20 = ref(false)
const show21 = ref(false)
const show22 = ref(false)
const show23 = ref(false)

const show24 = ref(false)
const show25 = ref(false)
const show26 = ref(false)

const show27 = ref(false)

const show28 = ref(false)

const show29 = ref(false)
const show30 = ref(false)
const show31 = ref(false)

const show32 = ref(false)

const show33 = ref(false)

const show34 = ref(false)
const show35 = ref(false)
const show36 = ref(false)
const show37 = ref(false)
const show38 = ref(false)

const show39 = ref(false)

const show40 = ref(false)
</script>
