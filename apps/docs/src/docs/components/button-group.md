# Button Group

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Group a series of buttons together on a single line or stack them in a vertical column with `BButtonGroup`.

</div>

## Overview

Button Groups are an easy way to group a series of buttons together.

<HighlightCard>
  <div>
    <BButtonGroup aria-label="Basic example">
      <BButton>Button 1</BButton>
      <BButton>Button 2</BButton>
      <BButton>Button 3</BButton>
    </BButtonGroup>
  </div>
  <div class="mt-3">
    <BButtonGroup>
      <BButton variant="success">Success</BButton>
      <BButton variant="info">Info</BButton>
      <BButton variant="warning">Warning</BButton>
    </BButtonGroup>
  </div>
  <template #html>

```vue-html
<BButtonGroup>
  <BButton>Button 1</BButton>
  <BButton>Button 2</BButton>
  <BButton>Button 3</BButton>
</BButtonGroup>

<BButtonGroup>
  <BButton variant="success">Success</BButton>
  <BButton variant="info">Info</BButton>
  <BButton variant="warning">Warning</BButton>
</BButtonGroup>
```

  </template>
</HighlightCard>

**Note:**
In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. bootstrap-vue-next will put the `role="group"` and `aria-role` attributes on the groups. By default, `aria-role` is set to `group`, but you can override that with the `aria-role` property.

In addition, groups should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use `aria-label`, but alternatives such as `aria-labelledby` can also be used.

## Sizing

Set the `size` prop to `lg` or `sm` to render larger or smaller, respectively, buttons. There is no
need to specify the size on the individual buttons.

<HighlightCard>
  <div>
    <BButtonGroup>
      <BButton>Button 1</BButton>
      <BButton>Button 2</BButton>
      <BButton>Button 3</BButton>
    </BButtonGroup>
  </div>
  <div class="mt-3">
    <BButtonGroup size="sm">
      <BButton>Left</BButton>
      <BButton>Middle</BButton>
      <BButton>Right</BButton>
    </BButtonGroup>
  </div>
  <div class="mt-3">
    <BButtonGroup size="lg">
      <BButton>Left</BButton>
      <BButton>Middle</BButton>
      <BButton>Right</BButton>
    </BButtonGroup>
  </div>
  <template #html>

```vue-html
<BButtonGroup>
  <BButton>Button 1</BButton>
  <BButton>Button 2</BButton>
  <BButton>Button 3</BButton>
</BButtonGroup>

<BButtonGroup size="sm">
  <BButton>Left</BButton>
  <BButton>Middle</BButton>
  <BButton>Right</BButton>
</BButtonGroup>

<BButtonGroup size="lg">
  <BButton>Left</BButton>
  <BButton>Middle</BButton>
  <BButton>Right</BButton>
</BButtonGroup>
```

  </template>
</HighlightCard>

## Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally by setting the `vertical`
prop. Split button dropdowns are not supported here.

<HighlightCard>
  <BButtonGroup vertical>
    <BButton>Top</BButton>
    <BButton>Middle</BButton>
    <BButton>Bottom</BButton>
  </BButtonGroup>
  <template #html>

```vue-html
<BButtonGroup vertical>
  <BButton>Top</BButton>
  <BButton>Middle</BButton>
  <BButton>Bottom</BButton>
</BButtonGroup>
```

  </template>
</HighlightCard>

## Dropdown menu support

Add [`BDropdown`](/docs/components/dropdown) menus directly inside your `BButtonGroup`. Note
that split dropdown menus are not supported when prop `vertical` is set.

<HighlightCard>
  <BButtonGroup>
    <BButton>Button</BButton>
    <BDropdown right text="Menu">
      <BDropdownItem>Item 1</BDropdownItem>
      <BDropdownItem>Item 2</BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem>Item 3</BDropdownItem>
    </BDropdown>
    <BDropdown right split text="Split Menu">
      <BDropdownItem>Item 1</BDropdownItem>
      <BDropdownItem>Item 2</BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem>Item 3</BDropdownItem>
    </BDropdown>
  </BButtonGroup>
  <template #html>

```vue-html
<BButtonGroup>
  <BButton>Button</BButton>
  <BDropdown right text="Menu">
    <BDropdownItem>Item 1</BDropdownItem>
    <BDropdownItem>Item 2</BDropdownItem>
    <BDropdownDivider />
    <BDropdownItem>Item 3</BDropdownItem>
  </BDropdown>
  <BDropdown right split text="Split Menu">
    <BDropdownItem>Item 1</BDropdownItem>
    <BDropdownItem>Item 2</BDropdownItem>
    <BDropdownDivider />
    <BDropdownItem>Item 3</BDropdownItem>
  </BDropdown>
</BButtonGroup>
```

  </template>
</HighlightCard>

## See also

Also check out the [`BButtonToolbar`](/docs/components/button-toolbar) component for generating
toolbars containing button groups and input groups.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/buttonGroup.data'
import {BDropdownItem, BDropdownDivider, BButton, BButtonGroup, BDropdown} from 'bootstrap-vue-next'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
</script>
