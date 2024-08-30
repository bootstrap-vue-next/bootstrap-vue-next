# Input Group

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">

Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs.

</div>

<HighlightCard>
  <!-- Using props -->
  <BInputGroup size="lg" prepend="$" append=".00">
    <BFormInput />
  </BInputGroup>
  <!-- Using slots -->
  <BInputGroup class="mt-3">
    <template #append>
      <BInputGroupText><strong class="text-danger">!</strong></BInputGroupText>
    </template>
    <BFormInput />
  </BInputGroup>
  <!-- Using components -->
  <BInputGroup prepend="Username" class="mt-3">
    <BFormInput />
    <BButton variant="outline-success">Button</BButton>
    <BButton variant="info">Button</BButton>
  </BInputGroup>
  <template #html>

```vue-html
<!-- Using props -->
<BInputGroup size="lg" prepend="$" append=".00">
  <BFormInput />
</BInputGroup>

<!-- Using slots -->
<BInputGroup class="mt-3">
  <template #append>
    <BInputGroupText><strong class="text-danger">!</strong></BInputGroupText>
  </template>
  <BFormInput />
</BInputGroup>

<!-- Using components -->
<BInputGroup prepend="Username" class="mt-3">
  <BFormInput />
  <BButton variant="outline-success">Button</BButton>
  <BButton variant="info">Button</BButton>
</BInputGroup>
```

  </template>
</HighlightCard>

## Usage

You can attach addons using either props, named slots and/or sub-components.

**Note** Bootstrap 5 dropped `.input-group-append` and `.input-group-prepend`. You can now just add buttons and `.input-group-text` as direct children of the input groups. The sub-components are added for compatibility reasons.

### Using `prepend` and `append` props

Values will be internally wrapped by a `BInputGroupText` to display correctly.

<HighlightCard>
  <BInputGroup prepend="$" append=".00">
    <BFormInput />
  </BInputGroup>
  <BInputGroup prepend="0" append="100" class="mt-3">
    <BFormInput type="range" min="0" max="100" />
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup prepend="$" append=".00">
  <BFormInput />
</BInputGroup>

<BInputGroup prepend="0" append="100" class="mt-3">
  <BFormInput type="range" min="0" max="100" />
</BInputGroup>
```

  </template>
</HighlightCard>

### Using named slots

<HighlightCard>
  <BInputGroup>
    <template #prepend>
      <BInputGroupText >Username</BInputGroupText>
    </template>
    <BFormInput />
    <template #append>
      <BDropdown text="Dropdown" variant="success">
        <BDropdownItem>Action A</BDropdownItem>
        <BDropdownItem>Action B</BDropdownItem>
      </BDropdown>
    </template>
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup>
  <template #prepend>
    <BInputGroupText>Username</BInputGroupText>
  </template>
  <BFormInput />
  <template #append>
    <BDropdown text="Dropdown" variant="success">
      <BDropdownItem>Action A</BDropdownItem>
      <BDropdownItem>Action B</BDropdownItem>
    </BDropdown>
  </template>
</BInputGroup>
```

  </template>
</HighlightCard>

### Using `BInputGroupText`

Use the `BInputGroupText` to add styled text before or after the control.

Do not use `BInputGroupText` to group sub-components as was done in Bootstrap-Vue, see the
[migration guide](/docs/migration-guide#binputgroup) for details.

<HighlightCard>
  <BInputGroup>
    <BInputGroupText>$</BInputGroupText>
    <BFormInput type="number" min="0.00" />
    <BInputGroupText>.00</BInputGroupText>
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup>
  <BInputGroup>
    <BInputGroupText>$</BInputGroupText>
    <BFormInput type="number" min="0.00" />
    <BInputGroupText>.00</BInputGroupText>
  </BInputGroup>
</BInputGroup>
```

  </template>
</HighlightCard>

## Supported form-controls

The following are the form controls supported as the input-group's _main_ input element:

- [`BFormInput`](/docs/components/form-input)
- [`BFormTextarea`](/docs/components/form-textarea)
- [`BFormSelect`](/docs/components/form-select)
- [`BFormFile`](/docs/components/form-file)
- [`BFormRating`](/docs/components/form-rating) <NotYetImplemented />
- [`BFormTags`](/docs/components/form-tags)
- [`BFormSpinbutton`](/docs/components/form-spinbutton)

## Checkbox and radio addons

Place any checkbox or radio within an input group's addon instead of text.

**Note:** Bootstrap v5 recommends adding `.mt-0` to the `.form-check-input` when there’s no visible text next to the input.
It is also possible to use as `BFormRadio` and `BFormCheckbox` with a few utility
classes applied.

### Native checkbox and radio addons

<HighlightCard>
  <BInputGroup class="mb-2">
    <BInputGroupText>
      <input type="checkbox" aria-label="Checkbox for following text input">
    </BInputGroupText>
    <BFormInput aria-label="Text input with checkbox" />
  </BInputGroup>
  <BInputGroup>
    <BInputGroupText>
      <input type="radio" aria-label="Radio for following text input">
    </BInputGroupText>
    <BFormInput aria-label="Text input with radio input" />
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup class="mb-2">
  <BInputGroupText>
    <input type="checkbox" aria-label="Checkbox for following text input" />
  </BInputGroupText>
  <BFormInput aria-label="Text input with checkbox" />
</BInputGroup>

<BInputGroup>
  <BInputGroupText>
    <input type="radio" aria-label="Radio for following text input" />
  </BInputGroupText>
  <BFormInput aria-label="Text input with radio input" />
</BInputGroup>
```

  </template>
</HighlightCard>

### Custom radio, checkbox, and switch addons

Using `BFormCheckbox` and `BFormRadio` components as addons, using Bootstrap
[utility classes](/docs/reference/utility-classes) for additional styling to get them to "fit" in
the addon:

<HighlightCard>
  <BInputGroup class="mb-2">
    <BInputGroupText>
      <BFormCheckbox class="me-n2">
        <span class="visually-hidden">Checkbox for following text input</span>
      </BFormCheckbox>
    </BInputGroupText>
    <BFormInput aria-label="Text input with checkbox" />
  </BInputGroup>
  <BInputGroup class="mb-2">
    <BInputGroupText>
      <BFormRadio class="me-n2">
        <span class="visually-hidden">Radio for following text input</span>
      </BFormRadio>
    </BInputGroupText>
    <BFormInput aria-label="Text input with radio input" />
  </BInputGroup>
  <BInputGroup>
    <BInputGroupText>
      <BFormCheckbox switch class="me-n2">
        <span class="visually-hidden">Switch for following text input</span>
      </BFormCheckbox>
    </BInputGroupText>
    <BFormInput aria-label="Text input with switch" />
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup class="mb-2">
  <BInputGroupText>
    <BFormCheckbox class="me-n2">
      <span class="visually-hidden">Checkbox for following text input</span>
    </BFormCheckbox>
  </BInputGroupText>
  <BFormInput aria-label="Text input with checkbox" />
</BInputGroup>

<BInputGroup class="mb-2">
  <BInputGroupText>
    <BFormRadio class="me-n2">
      <span class="visually-hidden">Radio for following text input</span>
    </BFormRadio>
  </BInputGroupText>
  <BFormInput aria-label="Text input with radio input" />
</BInputGroup>

<BInputGroup>
  <BInputGroupText>
    <BFormCheckbox switch class="me-n2">
      <span class="visually-hidden">Switch for following text input</span>
    </BFormCheckbox>
  </BInputGroupText>
  <BFormInput aria-label="Text input with switch" />
</BInputGroup>
```

  </template>
</HighlightCard>

In the above example, we have used the `.visually-hidden` class on a `<span>` to visually hide the custom
control's label content (while making them still accessible to screen reader users), and used the
utility class `.me-n2` to add a negative right margin to compensate for the "gutter" space between
the control and the hidden label.

## Multiple inputs

<HighlightCard>
  <BInputGroup prepend="First and last name" class="mb-2">
    <BFormInput aria-label="First name" />
    <BFormInput aria-label="Last name" />
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup prepend="First and last name" class="mb-2">
  <BFormInput aria-label="First name" />
  <BFormInput aria-label="Last name" />
</BInputGroup>
```

  </template>
</HighlightCard>

## Multiple addons

Multiple add-ons are supported and can be mixed with checkbox and radio input versions.

<HighlightCard>
  <BInputGroup prepend="Item">
    <BInputGroupText>
      <input type="checkbox" aria-label="Checkbox for following text input">
    </BInputGroupText>
    <BInputGroupText><b>$</b></BInputGroupText>
    <BFormInput type="number" aria-label="Text input with checkbox" />
  </BInputGroup>
  <BInputGroup class="mt-2">
    <BButton variant="outline-info">Button</BButton>
    <BFormInput type="number" min="0.00" />
    <BButton variant="outline-secondary">Button</BButton>
    <BButton variant="outline-primary">Button</BButton>
  </BInputGroup>
<template #html>

```vue-html
<BInputGroup prepend="Item">
  <BInputGroupText>
    <input type="checkbox" aria-label="Checkbox for following text input">
  </BInputGroupText>
  <BInputGroupText><b>$</b></BInputGroupText>
  <BFormInput type="number" aria-label="Text input with checkbox" />
</BInputGroup>
<BInputGroup class="mt-2">
  <BButton variant="outline-info">Button</BButton>
  <BFormInput type="number" min="0.00" />
  <BButton variant="outline-secondary">Button</BButton>
  <BButton variant="outline-primary">Button</BButton>
</BInputGroup>
```

  </template>
</HighlightCard>

## Dropdown addons

<HighlightCard>
  <BInputGroup>
    <template #prepend>
      <BDropdown text="Dropdown" variant="info">
        <BDropdownItem>Action A</BDropdownItem>
        <BDropdownItem>Action B</BDropdownItem>
      </BDropdown>
    </template>
    <BFormInput />
    <template #append>
      <BDropdown text="Dropdown" variant="outline-secondary" v-for="i in 2" :key="i">
        <BDropdownItem>Action C</BDropdownItem>
        <BDropdownItem>Action D</BDropdownItem>
      </BDropdown>
    </template>
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup>
  <template #prepend>
    <BDropdown text="Dropdown" variant="info">
      <BDropdownItem>Action A</BDropdownItem>
      <BDropdownItem>Action B</BDropdownItem>
    </BDropdown>
  </template>
  <BFormInput />
  <template #append>
    <BDropdown text="Dropdown" variant="outline-secondary" v-for="i in 2" :key="i">
      <BDropdownItem>Action C</BDropdownItem>
      <BDropdownItem>Action D</BDropdownItem>
    </BDropdown>
  </template>
</BInputGroup>
```

  </template>
</HighlightCard>

## Control sizing

Set height using the `size` prop to `sm` or `lg` for small or large respectively. There is no need
to set size on the individual inputs or buttons. Note however, you _will be required_ to also set
the size on dropdowns.

<HighlightCard>
  <BInputGroup
    v-for="size in ['sm','','lg']"
    :key="size"
    :size="size"
    class="mb-3"
    prepend="Label"
  >
    <BFormInput />
    <BButton size="sm" text="Button" variant="success">Button</BButton>
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup
  v-for="size in ['sm','','lg']"
  :key="size"
  :size="size"
  class="mb-3"
  prepend="Label"
>
  <BFormInput />
  <BButton size="sm" text="Button" variant="success">Button</BButton>
</BInputGroup>
```

  </template>
</HighlightCard>

To control width, place the input inside standard Bootstrap grid column.

### Sizing custom radio, checkbox and switch addons

If using `BFormRadio` or `BFormCheckbox` as addons, additional utility classes may be
required to make everything fit correctly, depending on the size chosen:

<HighlightCard>
  <BInputGroup size="sm" prepend="Small" class="mb-2">
    <BFormInput aria-label="Small text input with custom switch" />
    <BInputGroupText>
    <BFormCheckbox switch class="me-n2 mb-n1">
        <span class="visually-hidden">Checkbox for previous text input</span>
    </BFormCheckbox>
    </BInputGroupText>
  </BInputGroup>
  <BInputGroup size="lg" prepend="Large" class="mb-2">
    <BFormInput aria-label="Large text input with switch" />
    <BInputGroupText>
      <BFormCheckbox switch class="me-n2">
        <span class="visually-hidden">Switch for previous text input</span>
      </BFormCheckbox>
    </BInputGroupText>
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup size="sm" prepend="Small" class="mb-2">
  <BFormInput aria-label="Small text input with custom switch" />
  <BInputGroupText>
    <BFormCheckbox switch class="me-n2 mb-n1">
      <span class="visually-hidden">Checkbox for previous text input</span>
    </BFormCheckbox>
  </BInputGroupText>
</BInputGroup>

<BInputGroup size="lg" prepend="Large" class="mb-2">
  <BFormInput aria-label="Large text input with switch" />
  <BInputGroupText>
    <BFormCheckbox switch class="me-n2">
      <span class="visually-hidden">Switch for previous text input</span>
    </BFormCheckbox>
  </BInputGroupText>
</BInputGroup>
```

  </template>
</HighlightCard>

Specifically, when using the `sm` size on `BInputGroup` you will need to add a negative bottom
margin, via the use of the `.mb-n1` [utility class](/docs/reference/utility-classes).

## Contextual states

Bootstrap v5 currently **does not** support contextual state styling (i.e. valid or invalid) of
input groups. However, the inputs inside the input group do support contextual state.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/inputGroup.data'
import ComponentReference from '../../components/ComponentReference.vue'
import ComponentSidebar from '../../components/ComponentSidebar.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import NotYetImplemented from '../../components/NotYetImplemented.vue'
import {
  BFormRadio,
  BFormCheckbox,
  BInputGroupText,
  BDropdown,
  BDropdownItem,
  BCard,
  BCardBody,
  BButton,
  BInputGroup,
  BFormInput
} from 'bootstrap-vue-next'
</script>
