# Input Group

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs.

</div>

<HighlightCard>
  <!-- Using props -->
  <BInputGroup size="lg" prepend="$" append=".00">
    <BFormInput></BFormInput>
  </BInputGroup>
  <!-- Using slots -->
  <BInputGroup class="mt-3">
    <template #append>
      <BInputGroupText><strong class="text-danger">!</strong></BInputGroupText>
    </template>
    <BFormInput></BFormInput>
  </BInputGroup>
  <!-- Using components -->
  <BInputGroup prepend="Username" class="mt-3">
    <BFormInput></BFormInput>
    <BInputGroupAppend>
      <BButton variant="outline-success">Button</BButton>
      <BButton variant="info">Button</BButton>
    </BInputGroupAppend>
  </BInputGroup>
  <template #html>

```vue-html
<!-- Using props -->
<BInputGroup size="lg" prepend="$" append=".00">
  <BFormInput></BFormInput>
</BInputGroup>

<!-- Using slots -->
<BInputGroup class="mt-3">
  <template #append>
    <BInputGroupText><strong class="text-danger">!</strong></BInputGroupText>
  </template>
  <BFormInput></BFormInput>
</BInputGroup>

<!-- Using components -->
<BInputGroup prepend="Username" class="mt-3">
  <BFormInput></BFormInput>
  <BInputGroupAppend>
    <BButton variant="outline-success">Button</BButton>
    <BButton variant="info">Button</BButton>
  </BInputGroupAppend>
</BInputGroup>
```

  </template>
</HighlightCard>

## Usage

You can attach addons using either props, named slots and/or sub-components.

**Note** Bootstrap 5 dropped `.input-group-append` and `.input-group-prepend`. You can now just add buttons and `.input-group-text` as direct children of the input groups. The sub-components are added for compatibility reasons.

### Using `prepend` and `append` props

Values will be internally wrapped by a `<BInputGroupText>` to display correctly.

<HighlightCard>
  <BInputGroup prepend="$" append=".00">
    <BFormInput></BFormInput>
  </BInputGroup>
  <BInputGroup prepend="0" append="100" class="mt-3">
    <BFormInput type="range" min="0" max="100"></BFormInput>
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup prepend="$" append=".00">
  <BFormInput></BFormInput>
</BInputGroup>

<BInputGroup prepend="0" append="100" class="mt-3">
  <BFormInput type="range" min="0" max="100"></BFormInput>
</BInputGroup>
```

  </template>
</HighlightCard>

### Using named slots

if you want better control over addons, you can use `prepend` and `append` slots instead.

The slot content will automatically be wrapped by
[`<BInputGroupPrepend>` or `<BInputGroupAppend>`](#using-sub-components) to display correctly.

<HighlightCard>
  <BInputGroup>
    <template #prepend>
      <BInputGroupText >Username</BInputGroupText>
    </template>
    <BFormInput></BFormInput>
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
  <BFormInput></BFormInput>
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

### Using sub-components

Use the `<BInputGroupPrepend>` or `<BInputGroupAppend>` to add arbitrary addons wherever you
like, and use these components to group buttons in your input group. Single buttons must always be
wrapped in these components for proper styling.

<HighlightCard>
  <BInputGroup>
    <BInputGroupPrepend>
      <BButton variant="outline-info">Button</BButton>
    </BInputGroupPrepend>
    <BFormInput type="number" min="0.00"></BFormInput>
    <BInputGroupAppend>
      <BButton variant="outline-secondary">Button</BButton>
      <BButton variant="outline-primary">Button</BButton>
    </BInputGroupAppend>
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup>
  <BInputGroupPrepend>
    <BButton variant="outline-info">Button</BButton>
  </BInputGroupPrepend>
  <BFormInput type="number" min="0.00"></BFormInput>
  <BInputGroupAppend>
    <BButton variant="outline-secondary">Button</BButton>
    <BButton variant="outline-primary">Button</BButton>
  </BInputGroupAppend>
</BInputGroup>
```

  </template>
</HighlightCard>

Set the `is-text` prop on `<BInputGroupPrepend>` or `<BInputGroupAppend>` if the content is
textual in nature to apply proper styling. Alternatively, place the `<BInputGroupText>`
subcomponent inside the `<BInputGroupPrepend>` or `<BInputGroupAppend>`.

## Supported form-controls

The following are the form controls supported as the input-group's _main_ input element:

- [`<BFormInput>`](/docs/components/form-input)
- [`<BFormTextarea>`](/docs/components/form-textarea)
- [`<BFormSelect>`](/docs/components/form-select)
- [`<BFormFile>`](/docs/components/form-file)
- [`<BFormRating>`](/docs/components/form-rating)
- [`<BFormTags>`](/docs/components/form-tags)
- [`<BFormSpinButton>`](/docs/components/form-spinbutton)
- [`<BFormDatepicker>`](/docs/components/form-datepicker)
- [`<BFormTimepicker>`](/docs/components/form-timepicker)

**Notes:**

- ~~BootstrapVueNext uses custom SCSS/CSS to handling sizing the `<BFormFile>` input when it is placed
  in a `<BInputGroup>` which has a [`size`](#control-sizing) specified~~
- ~~BootstrapVueNext uses custom SCSS/CSS when `<BFormInput type="range">` is placed in a `<BInputGroup>`~~
- ~~BootstrapVueNext's custom components (i.e. `<BFormSpinButton>`, `<BFormRating>`, `<BFormTags>`,
  etc.) require BootstrapVueNext's custom SCSS/CSS~~

## Checkbox and radio addons

Place any checkbox or radio within an input group's addon instead of text.

**Note:** Bootstrap v5 recommends adding `.mt-0` to the `.form-check-input` when there’s no visible text next to the input.
It is also possible to use as `<BFormRadio>` and `<BFormCheckbox>` with a few utility
classes applied.

### Native checkbox and radio addons

<HighlightCard>
  <BInputGroup class="mb-2">
    <BInputGroupPrepend is-text>
      <input type="checkbox" aria-label="Checkbox for following text input">
    </BInputGroupPrepend>
    <BFormInput aria-label="Text input with checkbox"></BFormInput>
  </BInputGroup>
  <BInputGroup>
    <BInputGroupPrepend is-text>
      <input type="radio" aria-label="Radio for following text input">
    </BInputGroupPrepend>
    <BFormInput aria-label="Text input with radio input"></BFormInput>
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup class="mb-2">
  <BInputGroupPrepend is-text>
    <input type="checkbox" aria-label="Checkbox for following text input" />
  </BInputGroupPrepend>
  <BFormInput aria-label="Text input with checkbox"></BFormInput>
</BInputGroup>

<BInputGroup>
  <BInputGroupPrepend is-text>
    <input type="radio" aria-label="Radio for following text input" />
  </BInputGroupPrepend>
  <BFormInput aria-label="Text input with radio input"></BFormInput>
</BInputGroup>
```

  </template>
</HighlightCard>

### Custom radio, checkbox, and switch addons

Using `<BFormCheckbox>` and `<BFormRadio>` components as addons, using Bootstrap
[utility classes](/docs/reference/utility-classes) for additional styling to get them to "fit" in
the addon:

<HighlightCard>
  <BInputGroup class="mb-2">
    <BInputGroupPrepend is-text>
      <BFormCheckbox class="me-n2">
        <span class="visually-hidden">Checkbox for following text input</span>
      </BFormCheckbox>
    </BInputGroupPrepend>
    <BFormInput aria-label="Text input with checkbox"></BFormInput>
  </BInputGroup>
  <BInputGroup class="mb-2">
    <BInputGroupPrepend is-text>
      <BFormRadio class="me-n2">
        <span class="visually-hidden">Radio for following text input</span>
      </BFormRadio>
    </BInputGroupPrepend>
    <BFormInput aria-label="Text input with radio input"></BFormInput>
  </BInputGroup>
  <BInputGroup>
    <BInputGroupPrepend is-text>
      <BFormCheckbox switch class="me-n2">
        <span class="visually-hidden">Switch for following text input</span>
      </BFormCheckbox>
    </BInputGroupPrepend>
    <BFormInput aria-label="Text input with switch"></BFormInput>
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup class="mb-2">
  <BInputGroupPrepend is-text>
    <BFormCheckbox class="me-n2">
      <span class="visually-hidden">Checkbox for following text input</span>
    </BFormCheckbox>
  </BInputGroupPrepend>
  <BFormInput aria-label="Text input with checkbox"></BFormInput>
</BInputGroup>

<BInputGroup class="mb-2">
  <BInputGroupPrepend is-text>
    <BFormRadio class="me-n2">
      <span class="visually-hidden">Radio for following text input</span>
    </BFormRadio>
  </BInputGroupPrepend>
  <BFormInput aria-label="Text input with radio input"></BFormInput>
</BInputGroup>

<BInputGroup>
  <BInputGroupPrepend is-text>
    <BFormCheckbox switch class="me-n2">
      <span class="visually-hidden">Switch for following text input</span>
    </BFormCheckbox>
  </BInputGroupPrepend>
  <BFormInput aria-label="Text input with switch"></BFormInput>
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
    <BFormInput aria-label="First name"></BFormInput>
    <BFormInput aria-label="Last name"></BFormInput>
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup prepend="First and last name" class="mb-2">
  <BFormInput aria-label="First name"></BFormInput>
  <BFormInput aria-label="Last name"></BFormInput>
</BInputGroup>
```

  </template>
</HighlightCard>

## Multiple addons

Multiple add-ons are supported and can be mixed with checkbox and radio input versions.

<HighlightCard>
  <BInputGroup prepend="Item">
    <BInputGroupPrepend is-text>
      <input type="checkbox" aria-label="Checkbox for following text input">
    </BInputGroupPrepend>
    <BInputGroupPrepend is-text><b>$</b></BInputGroupPrepend>
    <BFormInput type="number" aria-label="Text input with checkbox"></BFormInput>
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup prepend="Item">
  <BInputGroupPrepend is-text>
    <input type="checkbox" aria-label="Checkbox for following text input" />
  </BInputGroupPrepend>
  <BInputGroupPrepend is-text><b>$</b></BInputGroupPrepend>
  <BFormInput type="number" aria-label="Text input with checkbox"></BFormInput>
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
    <BFormInput></BFormInput>
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
  <BFormInput></BFormInput>
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
    <BFormInput></BFormInput>
    <BInputGroupAppend>
      <BButton size="sm" text="Button" variant="success">Button</BButton>
    </BInputGroupAppend>
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
  <BFormInput></BFormInput>
  <BInputGroupAppend>
    <BButton size="sm" text="Button" variant="success">Button</BButton>
  </BInputGroupAppend>
</BInputGroup>
```

  </template>
</HighlightCard>

To control width, place the input inside standard Bootstrap grid column.

### Sizing custom radio, checkbox and switch addons

If using `<BFormRadio>` or `<BFormCheckbox>` as addons, additional utility classes may be
required to make everything fit correctly, depending on the size chosen:

<HighlightCard>
  <BInputGroup size="sm" prepend="Small" class="mb-2">
    <BFormInput aria-label="Small text input with custom switch"></BFormInput>
    <BInputGroupAppend is-text>
    <BFormCheckbox switch class="me-n2 mb-n1">
        <span class="visually-hidden">Checkbox for previous text input</span>
    </BFormCheckbox>
    </BInputGroupAppend>
  </BInputGroup>
  <BInputGroup size="lg" prepend="Large" class="mb-2">
    <BFormInput aria-label="Large text input with switch"></BFormInput>
    <BInputGroupAppend is-text>
      <BFormCheckbox switch class="me-n2">
        <span class="visually-hidden">Switch for previous text input</span>
      </BFormCheckbox>
    </BInputGroupAppend>
  </BInputGroup>
  <template #html>

```vue-html
<BInputGroup size="sm" prepend="Small" class="mb-2">
  <BFormInput aria-label="Small text input with custom switch"></BFormInput>
  <BInputGroupAppend is-text>
    <BFormCheckbox switch class="me-n2 mb-n1">
      <span class="visually-hidden">Checkbox for previous text input</span>
    </BFormCheckbox>
  </BInputGroupAppend>
</BInputGroup>

<BInputGroup size="lg" prepend="Large" class="mb-2">
  <BFormInput aria-label="Large text input with switch"></BFormInput>
  <BInputGroupAppend is-text>
    <BFormCheckbox switch class="me-n2">
      <span class="visually-hidden">Switch for previous text input</span>
    </BFormCheckbox>
  </BInputGroupAppend>
</BInputGroup>
```

  </template>
</HighlightCard>

Specifically, when using the `sm` size on `<BInputGroup>` you will need to add a negative bottom
margin, via the use of the `.mb-n1` [utility class](/docs/reference/utility-classes).

## Contextual states

Bootstrap v5 currently **does not** support contextual state styling (i.e. valid or invalid) of
input groups. However, the inputs inside the input group do support contextual state.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/inputGroup.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {
  BFormRadio,
  BFormCheckbox,
  BInputGroupPrepend,
  BDropdown,
  BDropdownItem,
  BCard,
  BCardBody,
  BButton,
  BInputGroupAppend,
  BInputGroup,
  BFormInput,
  BInputGroupText
} from 'bootstrap-vue-next'
</script>
