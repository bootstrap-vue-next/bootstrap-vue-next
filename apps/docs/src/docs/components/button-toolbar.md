# Button Toolbar

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">

Group a series of button-groups and/or input-groups together on a single line.

</div>

**Example 1:** with button groups

<HighlightCard>
  <BButtonToolbar key-nav aria-label="Toolbar with button groups">
    <BButtonGroup class="mx-1">
      <BButton>&laquo;</BButton>
      <BButton>&lsaquo;</BButton>
    </BButtonGroup>
    <BButtonGroup class="mx-1">
      <BButton>Edit</BButton>
      <BButton>Undo</BButton>
      <BButton>Redo</BButton>
    </BButtonGroup>
    <BButtonGroup class="mx-1">
      <BButton>&rsaquo;</BButton>
      <BButton>&raquo;</BButton>
    </BButtonGroup>
  </BButtonToolbar>
  <template #html>

```vue-html
<BButtonToolbar key-nav aria-label="Toolbar with button groups">
  <BButtonGroup class="mx-1">
    <BButton>&laquo;</BButton>
    <BButton>&lsaquo;</BButton>
  </BButtonGroup>
  <BButtonGroup class="mx-1">
    <BButton>Edit</BButton>
    <BButton>Undo</BButton>
    <BButton>Redo</BButton>
  </BButtonGroup>
  <BButtonGroup class="mx-1">
    <BButton>&rsaquo;</BButton>
    <BButton>&raquo;</BButton>
  </BButtonGroup>
</BButtonToolbar>
```

  </template>
</HighlightCard>

**Example 2:** with mixture of small button group and small input group.

<HighlightCard>
  <BButtonToolbar aria-label="Toolbar with button groups and input groups">
    <BButtonGroup size="sm" class="me-1">
      <BButton>Save</BButton>
      <BButton>Cancel</BButton>
    </BButtonGroup>
    <BInputGroup size="sm" prepend="$" append=".00">
      <BFormInput value="100" class="text-end" />
    </BInputGroup>
  </BButtonToolbar>
  <template #html>

```vue-html
<BButtonToolbar aria-label="Toolbar with button groups and input groups">
  <BButtonGroup size="sm" class="me-1">
    <BButton>Save</BButton>
    <BButton>Cancel</BButton>
  </BButtonGroup>
  <BInputGroup size="sm" prepend="$" append=".00">
    <BFormInput value="100" class="text-end" />
  </BInputGroup>
</BButtonToolbar>
```

  </template>
</HighlightCard>

**Example 3:** with button groups and dropdown menu.

<HighlightCard>
  <BButtonToolbar aria-label="Toolbar with button groups and dropdown menu">
    <BButtonGroup class="mx-1">
      <BButton>New</BButton>
      <BButton>Edit</BButton>
      <BButton>Undo</BButton>
    </BButtonGroup>
    <BDropdown class="mx-1" right text="menu">
      <BDropdownItem>Item 1</BDropdownItem>
      <BDropdownItem>Item 2</BDropdownItem>
      <BDropdownItem>Item 3</BDropdownItem>
    </BDropdown>
    <BButtonGroup class="mx-1">
      <BButton>Save</BButton>
      <BButton>Cancel</BButton>
    </BButtonGroup>
  </BButtonToolbar>
  <template #html>

```vue-html
<BButtonToolbar aria-label="Toolbar with button groups and dropdown menu">
  <BButtonGroup class="mx-1">
    <BButton>New</BButton>
    <BButton>Edit</BButton>
    <BButton>Undo</BButton>
  </BButtonGroup>
  <BDropdown class="mx-1" right text="menu">
    <BDropdownItem>Item 1</BDropdownItem>
    <BDropdownItem>Item 2</BDropdownItem>
    <BDropdownItem>Item 3</BDropdownItem>
  </BDropdown>
  <BButtonGroup class="mx-1">
    <BButton>Save</BButton>
    <BButton>Cancel</BButton>
  </BButtonGroup>
</BButtonToolbar>
```

  </template>
</HighlightCard>

## Usage

Feel free to mix input groups and dropdowns with button groups in your toolbars. Similar to the
example above, you'll likely need some utility classes though to space things properly.

## Sizing

Note, if you want smaller or larger buttons or controls, set the `size` prop directly on the
`BButtonGroup`, `BInputGroup`, and `BDropdown` components.

<HighlightCard>
  <div>
    <BButtonToolbar aria-label="Toolbar with size sm">
      <BButtonGroup size="sm" class="mx-1">
        <BButton>New</BButton>
        <BButton>Edit</BButton>
        <BButton>Undo</BButton>
      </BButtonGroup>
    </BButtonToolbar>
  </div>
  <div class="mt-2">
    <BButtonToolbar aria-label="Toolbar with dropdown size sm">
        <BDropdown size="sm" class="mx-1" right text="menu">
          <BDropdownItem>Item 1</BDropdownItem>
          <BDropdownItem>Item 2</BDropdownItem>
          <BDropdownItem>Item 3</BDropdownItem>
        </BDropdown>
    </BButtonToolbar>
  </div>
  <div class="mt-2">
    <BButtonToolbar aria-label="Toolbar with size lg">
      <BButtonGroup size="lg" class="mx-1">
        <BButton>New</BButton>
        <BButton>Edit</BButton>
        <BButton>Undo</BButton>
      </BButtonGroup>
    </BButtonToolbar>
  </div>
  <div class="mt-2">
    <BButtonToolbar aria-label="Toolbar with dropdown size lg">
      <BDropdown size="lg" class="mx-1" right text="menu">
        <BDropdownItem>Item 1</BDropdownItem>
        <BDropdownItem>Item 2</BDropdownItem>
        <BDropdownItem>Item 3</BDropdownItem>
      </BDropdown>
    </BButtonToolbar>
  </div>
  <template #html>

```vue-html
<BButtonToolbar aria-label="Toolbar with size sm">
  <BButtonGroup size="sm" class="mx-1">
    <BButton>New</BButton>
    <BButton>Edit</BButton>
    <BButton>Undo</BButton>
  </BButtonGroup>
</BButtonToolbar>

<BButtonToolbar aria-label="Toolbar with dropdown size sm">
  <BDropdown size="sm" class="mx-1" right text="menu">
    <BDropdownItem>Item 1</BDropdownItem>
    <BDropdownItem>Item 2</BDropdownItem>
    <BDropdownItem>Item 3</BDropdownItem>
  </BDropdown>
</BButtonToolbar>

<BButtonToolbar aria-label="Toolbar with size lg">
  <BButtonGroup size="lg" class="mx-1">
    <BButton>New</BButton>
    <BButton>Edit</BButton>
    <BButton>Undo</BButton>
  </BButtonGroup>
</BButtonToolbar>

<BButtonToolbar aria-label="Toolbar with dropdown size lg">
  <BDropdown size="lg" class="mx-1" right text="menu">
    <BDropdownItem>Item 1</BDropdownItem>
    <BDropdownItem>Item 2</BDropdownItem>
    <BDropdownItem>Item 3</BDropdownItem>
  </BDropdown>
</BButtonToolbar>
```

  </template>
</HighlightCard>

## Justify

Make the toolbar span the maximum available width, by increasing spacing between the button groups,
input groups and dropdowns, by setting the prop `justify`.

<HighlightCard>
  <BButtonToolbar justify aria-label="Toolbar with justify">
    <BButtonGroup class="mx-1">
      <BButton>New</BButton>
      <BButton>Edit</BButton>
      <BButton>Undo</BButton>
    </BButtonGroup>
    <BDropdown class="mx-1" right text="menu">
      <BDropdownItem>Item 1</BDropdownItem>
      <BDropdownItem>Item 2</BDropdownItem>
      <BDropdownItem>Item 3</BDropdownItem>
    </BDropdown>
    <BButtonGroup class="mx-1">
      <BButton>Save</BButton>
      <BButton>Cancel</BButton>
    </BButtonGroup>
  </BButtonToolbar>
  <template #html>

```vue-html
<BButtonToolbar justify aria-label="Toolbar with justify">
  <BButtonGroup class="mx-1">
    <BButton>New</BButton>
    <BButton>Edit</BButton>
    <BButton>Undo</BButton>
  </BButtonGroup>
  <BDropdown class="mx-1" right text="menu">
    <BDropdownItem>Item 1</BDropdownItem>
    <BDropdownItem>Item 2</BDropdownItem>
    <BDropdownItem>Item 3</BDropdownItem>
  </BDropdown>
  <BButtonGroup class="mx-1">
    <BButton>Save</BButton>
    <BButton>Cancel</BButton>
  </BButtonGroup>
</BButtonToolbar>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/buttonToolbar.data'
import {BButtonGroup, BDropdown, BInputGroup, BDropdownItem, BButton, BButtonToolbar, BFormInput} from 'bootstrap-vue-next'
import ComponentReference from '../../components/ComponentReference.vue'
import ComponentSidebar from '../../components/ComponentSidebar.vue'
import HighlightCard from '../../components/HighlightCard.vue'
</script>
