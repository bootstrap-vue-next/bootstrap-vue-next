# Form Select

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Bootstrap custom `<select>` using custom styles. Optionally specify options based on an array, array of objects, or an object.

</div>

Generate your select options by passing an array or object to the `options` props:

<HighlightCard>
  <BFormSelect v-model="ex1Selected" :options="ex1Options" />
  <BFormSelect v-model="ex1Selected" :options="ex1Options" size="sm" class="mt-3" />
  <div class="mt-3">Selected: <strong>{{ ex1Selected }}</strong></div>
  <template #html>

```vue
<template>
  <BFormSelect v-model="ex1Selected" :options="ex1Options" />

  <BFormSelect v-model="ex1Selected" :options="ex1Options" size="sm" class="mt-3" />

  <div class="mt-3">
    Selected: <strong>{{ ex1Selected }}</strong>
  </div>
</template>

<script setup lang="ts">
const ex1Options = [
  {value: null, text: 'Please select an option'},
  {value: 'a', text: 'This is First option'},
  {value: 'b', text: 'Selected Option'},
  {value: {C: '3PO'}, text: 'This is an option with object value'},
  {value: 'd', text: 'This one is disabled', disabled: true},
]

const ex1Selected = ref()
</script>
```

  </template>
</HighlightCard>

You can even define option groups with the `options` prop:

<HighlightCard>
  <BFormSelect v-model="exGroupSelected" :options="ex1GroupOptions" />
  <div class="mt-3">Selected: <strong>{{ exGroupSelected }}</strong></div>
  <template #html>

```vue
<template>
  <BFormSelect v-model="exGroupSelected" :options="ex1GroupOptions" />

  <div class="mt-3">
    Selected: <strong>{{ exGroupSelected }}</strong>
  </div>
</template>

<script setup lang="ts">
const ex1GroupOptions = [
  {value: null, text: 'Please select an option'},
  {value: 'a', text: 'This is First option'},
  {value: 'b', text: 'Selected Option', disabled: true},
  {
    label: 'Grouped options',
    options: [
      {value: {C: '3PO'}, text: 'Option with object value'},
      {value: {R: '2D2'}, text: 'Another option with object value'},
    ],
  },
]

const exGroupSelected = ref()
</script>
```

  </template>
</HighlightCard>

Or manually provide your options and option groups:

<HighlightCard>
  <BFormSelect v-model="exManualSelected">
    <BFormSelectOption :value="null">Please select an option</BFormSelectOption>
    <BFormSelectOption value="a">Option A</BFormSelectOption>
    <BFormSelectOption value="b" disabled>Option B (disabled)</BFormSelectOption>
    <BFormSelectOptionGroup label="Grouped options">
      <BFormSelectOption :value="{ C: '3PO' }">Option with object value</BFormSelectOption>
      <BFormSelectOption :value="{ R: '2D2' }">Another option with object value</BFormSelectOption>
    </BFormSelectOptionGroup>
  </BFormSelect>
  <div class="mt-3">Selected: <strong>{{ exManualSelected }}</strong></div>
  <template #html>

```vue
<template>
  <BFormSelect v-model="exManualSelected">
    <BFormSelectOption :value="null">Please select an option</BFormSelectOption>
    <BFormSelectOption value="a">Option A</BFormSelectOption>
    <BFormSelectOption value="b" disabled>Option B (disabled)</BFormSelectOption>
    <BFormSelectOptionGroup label="Grouped options">
      <BFormSelectOption :value="{C: '3PO'}">Option with object value</BFormSelectOption>
      <BFormSelectOption :value="{R: '2D2'}">Another option with object value</BFormSelectOption>
    </BFormSelectOptionGroup>
  </BFormSelect>

  <div class="mt-3">
    Selected: <strong>{{ exManualSelected }}</strong>
  </div>
</template>

<script setup lang="ts">
const exManualSelected = ref(null)
</script>
```

  </template>
</HighlightCard>

Feel free to mix the `options` prop with `BFormSelectOption` and
`BFormSelectOptionGroup`. Manually placed options and option groups will appear _below_ the
options generated via the `options` prop. To place manual options and option groups _above_ the
options specified by the `options` prop, use the named slot `first`.

<HighlightCard>
  <BFormSelect v-model="exFirstSlotSelected" :options="exFirstSlotOptions" class="mb-3">
    <!-- This slot appears above the options from 'options' prop -->
    <template #first>
      <BFormSelectOption :value="null" disabled>-- Please select an option --</BFormSelectOption>
    </template>
    <!-- These options will appear after the ones from 'options' prop -->
    <BFormSelectOption value="C">Option C</BFormSelectOption>
    <BFormSelectOption value="D">Option D</BFormSelectOption>
  </BFormSelect>
  <div class="mt-3">Selected: <strong>{{ exFirstSlotSelected }}</strong></div>
  <template #html>

```vue
<template>
  <BFormSelect v-model="exFirstSlotSelected" :options="exFirstSlotOptions" class="mb-3">
    <!-- This slot appears above the options from 'options' prop -->
    <template #first>
      <BFormSelectOption :value="null" disabled>-- Please select an option --</BFormSelectOption>
    </template>

    <!-- These options will appear after the ones from 'options' prop -->
    <BFormSelectOption value="C">Option C</BFormSelectOption>
    <BFormSelectOption value="D">Option D</BFormSelectOption>
  </BFormSelect>

  <div class="mt-3">
    Selected: <strong>{{ exFirstSlotSelected }}</strong>
  </div>
</template>

<script setup lang="ts">
const exFirstSlotOptions = [
  {value: 'A', text: 'Option A (from options prop)'},
  {value: 'B', text: 'Option B (from options prop)'},
]

const exFirstSlotSelected = ref(null)
</script>
```

  </template>
</HighlightCard>

## Options property

`options` can be an array of strings or objects, or a key-value object. Available fields:

- **`value`** The selected value which will be set on `v-model`
- **`disabled`** Disables item for selection
- **`text`** Display text, or **`html`** Display basic inline html

`value` can be a string, number, or simple object. Avoid using complex types in values.

If both `html` and `text` are provided, `html` will take precedence. Only basic/native HTML is
supported in the `html` field (components will not work). Note that not all browsers will render
inline html (i.e. `<i>`, `<strong>`, etc.) inside `<option>` elements of a `<select>`.

<CrossSiteScriptingWarning />

### Options as an array

<BCard class="bg-body-tertiary mb-4">

```ts
const options = ['A', 'B', 'C', {text: 'D', value: {d: 1}, disabled: true}, 'E', 'F']
```

</BCard>

If an array entry is a string, it will be used for both the generated `value` and `text` fields.

You can mix using strings and [objects](#options-as-an-array-of-objects) in the array.

Internally, BootstrapVueNext will convert the above array to the following array (the
[array of objects](#options-as-an-array-of-objects)) format:

<BCard class="bg-body-tertiary mb-4">

```ts
const options = [
  {text: 'A', value: 'A', disabled: false},
  {text: 'B', value: 'B', disabled: false},
  {text: 'C', value: 'C', disabled: false},
  {text: 'D', value: {d: 1}, disabled: true},
  {text: 'E', value: 'E', disabled: false},
  {text: 'F', value: 'F', disabled: false},
]
```

</BCard>

### Options as an array of objects

<BCard class="bg-body-tertiary mb-4">

```ts
const options = [
  {text: 'Item 1', value: 'first'},
  {text: 'Item 2', value: 'second'},
  {html: '<b>Item</b> 3', value: 'third', disabled: true},
  {text: 'Item 4'},
  {text: 'Item 5', value: {foo: 'bar', baz: true}},
]
```

</BCard>

If `value` is missing, then `text` will be used as both the `value` and `text` fields. If you use
the `html` property, you **must** supply a `value` property.

To define option groups, just add an object with a `label` prop as the groups name and a `options` property with the array of options of the group.

<BCard class="bg-body-tertiary mb-4">

```ts
const options = [
  {text: 'Item 1', value: 'first'},
  {text: 'Item 2', value: 'second'},
  {
    label: 'Grouped options',
    options: [{html: '<b>Item</b> 3', value: 'third', disabled: true}, {text: 'Item 4'}],
  },
  {text: 'Item 5', value: {foo: 'bar', baz: true}},
]
```

</BCard>

### Options as an object

<BBadge variant="warning">Deprecated</BBadge>

Keys are mapped to `value` and values are mapped to option `text`.

<BCard class="bg-body-tertiary mb-4">

```ts
const options = {
  a: 'Item A',
  b: 'Item B',
  c: {html: 'Item C', disabled: true},
  d: {text: 'Item D', value: 'overridden_value'},
  e: {text: 'Item E', value: {foo: 'bar', baz: true}},
}
```

</BCard>

Internally, BootstrapVueNext will convert the above object to the following array (the
[array of objects](#options-as-an-array-of-objects)) format:

<BCard class="bg-body-tertiary mb-4">

```ts
const options = [
  {text: 'Item A', value: 'a', disabled: false},
  {text: 'Item B', value: 'b', disabled: false},
  {html: 'Item C', value: 'c', disabled: false},
  {text: 'Item D', value: 'overridden_value', disabled: true},
  {text: 'Item E', value: {foo: 'bar', baz: true}, disabled: false},
]
```

</BCard>

**Note:** When using the Object format, the order of the final array is **not** guaranteed. For this
reason, it is recommended to use either of the previously mentioned array formats.

### Changing the option field names

If you want to customize the field property names (for example using `name` field for display
`text`) you can easily change them by setting the `text-field`, `html-field`, `value-field`, and
`disabled-field` props to a string that contains the property name you would like to use:

<HighlightCard>
  <BFormSelect
    v-model="exFirstSlotSelected"
    :options="exFieldNamesOptions"
    class="mb-3"
    value-field="item"
    text-field="name"
    disabled-field="notEnabled"
  />
  <div class="mt-3">Selected: <strong>{{ exFirstSlotSelected }}</strong></div>
  <template #html>

```vue
<template>
  <BFormSelect
    v-model="exFirstSlotSelected"
    :options="exFieldNamesOptions"
    class="mb-3"
    value-field="item"
    text-field="name"
    disabled-field="notEnabled"
  />

  <div class="mt-3">
    Selected: <strong>{{ exFirstSlotSelected }}</strong>
  </div>
</template>

<script setup lang="ts">
const exFieldNamesOptions = [
  {item: 'A', name: 'Option A'},
  {item: 'B', name: 'Option B'},
  {item: 'D', name: 'Option C', notEnabled: true},
  {item: {d: 1}, name: 'Option D'},
]

const exFieldNamesSelected = ref('A')
</script>
```

  </template>
</HighlightCard>

### Option notes

If the initial value of your `v-model` expression does not match any of the options, the
`BFormSelect` component (which is a native HTML5 `<select>` under the hood) will render in an
_unselected_ state. On iOS this will cause the user not being able to select the first item because
iOS does not fire a change event in this case. It is therefore recommended providing a disabled
option with an empty value as your first option.

```vue-html
<BFormSelect v-model="selected" :options="options">
  <template #first>
    <BFormSelectOption value="" disabled>-- Please select an option --</BFormSelectOption>
  </template>
</BFormSelect>
```

See the [Vue select](https://v3.vuejs.org/guide/forms.html#select) documentation for more details.

## Standard (single) select

By default, Bootstrap v5's custom select styling is applied.

### Value in single mode

In non `multiple` mode, `BFormSelect` returns the single `value` of the currently selected
option.

<HighlightCard>
  <BFormSelect v-model="ex1Selected" :options="ex1Options" />
  <div class="mt-3">Selected: <strong>{{ ex1Selected }}</strong></div>
  <template #html>

```vue
<template>
  <BFormSelect v-model="ex1Selected" :options="ex1Options" />

  <div class="mt-3">
    Selected: <strong>{{ ex1Selected }}</strong>
  </div>
</template>

<script setup lang="ts">
const ex1Options = [
  {value: null, text: 'Please select an option'},
  {value: 'a', text: 'This is First option'},
  {value: 'b', text: 'Selected Option'},
  {value: {C: '3PO'}, text: 'This is an option with object value'},
  {value: 'd', text: 'This one is disabled', disabled: true},
]

const ex1Selected = ref()
</script>
```

  </template>
</HighlightCard>

### Select sizing (displayed rows)

You can use the `select-size` prop to switch the custom select into a select list-box, rather than a
dropdown. Set the `select-size` prop to a numerical value greater than 1 to control how many rows of
options are visible.

Note when `select-size` is set to a value greater than 1, the Bootstrap v5 custom styling will
**not** be applied, unless the `multiple` prop is also set.

Note that not all mobile browsers will show the select as a list-box.

<HighlightCard>
  <BFormSelect v-model="ex1Selected" :options="ex1Options" :select-size="4" />
  <div class="mt-3">Selected: <strong>{{ ex1Selected }}</strong></div>
  <template #html>

```vue
<template>
  <BFormSelect v-model="ex1Selected" :options="ex1Options" :select-size="4" />

  <div class="mt-3">
    Selected: <strong>{{ ex1Selected }}</strong>
  </div>
</template>

<script setup lang="ts">
const ex1Options = [
  {value: null, text: 'Please select an option'},
  {value: 'a', text: 'This is First option'},
  {value: 'b', text: 'Selected Option'},
  {value: {C: '3PO'}, text: 'This is an option with object value'},
  {value: 'd', text: 'This one is disabled', disabled: true},
]

const ex1Selected = ref()
</script>
```

  </template>
</HighlightCard>

## Multiple select support

Enable multiple select mode by setting the prop `multiple`, and control how many rows are displayed
in the multiple select list-box by setting `select-size` to the number of rows to display. The
default is to let the browser use its default (typically 4).

### Value in multiple mode

In `multiple` mode, `BFormSelect` always returns an array of option values. You **must** provide
an array reference as your `v-model` when in `multiple` mode.

<HighlightCard>
  <BFormSelect
    v-model="exMultiSelected"
    :options="exMultiOptions"
    multiple
    :select-size="4"
  />
  <div class="mt-3">Selected: <strong>{{ exMultiSelected }}</strong></div>
  <template #html>

```vue
<template>
  <BFormSelect v-model="exMultiSelected" :options="exMultiOptions" multiple :select-size="4" />

  <div class="mt-3">
    Selected: <strong>{{ exMultiSelected }}</strong>
  </div>
</template>

<script setup lang="ts">
const exMultiOptions = [
  {value: 'a', text: 'This is First option'},
  {value: 'b', text: 'Default Selected Option'},
  {value: 'c', text: 'This is another option'},
  {value: 'd', text: 'This one is disabled', disabled: true},
  {value: 'e', text: 'This is option e'},
  {value: 'f', text: 'This is option f'},
  {value: 'g', text: 'This is option g'},
]

const exMultiSelected = ref(['b'])
</script>
```

  </template>
</HighlightCard>

## Control sizing

Set the form-control text size using the `size` prop to `sm` or `lg` for small or large
respectively.

By default, `BFormSelect` will occupy the full width of the container that it appears in. To
control the select width, place the input inside standard Bootstrap grid column.

## Autofocus

When the `autofocus` prop is set on `BFormSelect`, the select will be auto-focused when it is
inserted (i.e. **mounted**) into the document or re-activated when inside a Vue `KeepAlive`
component. Note that this prop **does not** set the `autofocus` attribute on the select, nor can it
tell when the select becomes visible.

## Contextual states

Bootstrap includes validation styles for `valid` and `invalid` states on most form controls.

Generally speaking, you'll want to use a particular state for specific types of feedback:

- `false` (denotes invalid state) is great for when there is a blocking or required field. A user
  must fill in this field properly to submit the form
- `true` (denotes valid state) is ideal for situations when you have per-field validation throughout
  a form and want to encourage a user through the rest of the fields
- `null` Displays no validation state (neither valid nor invalid)

To apply one of the contextual state icons on `BFormSelect`, set the `state` prop to `false`
(for invalid), `true` (for valid), or `null` (no validation state).

### Conveying contextual validation state to assistive technologies and colorblind users

Using these contextual states to denote the state of a form control only provides a visual,
color-based indication, which will not be conveyed to users of assistive technologies - such as
screen readers - or to colorblind users.

Ensure that an alternative indication of state is also provided. For instance, you could include a
hint about state in the form control's `<label>` text itself, or by providing an additional help
text block (via `BFormGroup` or `<BForm*Feedback>`). Specifically for assistive technologies,
invalid form controls can also be assigned an `aria-invalid="true"` attribute (see below).

### ARIA `aria-invalid` attribute

When `BFormSelect` has an invalid contextual state (i.e. state = `false`) you may also want to
set the `BFormSelect` prop `aria-invalid` to `true`.

Supported `invalid` values are:

- `false` (default) No errors detected
- `true` The value has failed validation

When `state` is set to `false`, aria-invalid will also be set to true.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/formSelect.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import CrossSiteScriptingWarning from '../../components/CrossSiteScriptingWarning.vue'
import {BFormSelectOptionGroup, BFormSelectOption, BCard, BCardBody, BFormSelect, BAlert, BBadge} from 'bootstrap-vue-next'
import {ref, computed} from 'vue'

const ex1Selected = ref()
const ex1Options = [
  {value: null, text: 'Please select an option'},
  {value: 'a', text: 'This is First option'},
  {value: 'b', text: 'Selected Option'},
  {value: {C: '3PO'}, text: 'This is an option with object value'},
  {value: 'd', text: 'This one is disabled', disabled: true},
]

const exGroupSelected = ref(null)
const ex1GroupOptions = [
  {value: null, text: 'Please select an option'},
  {value: 'a', text: 'This is First option'},
  {value: 'b', text: 'Selected Option', disabled: true},
  {
    label: 'Grouped options',
    options: [
      {value: {C: '3PO'}, text: 'Option with object value'},
      {value: {R: '2D2'}, text: 'Another option with object value'},
    ],
  },
]

const exManualSelected = ref(null)

const exFirstSlotSelected = ref(null)
const exFirstSlotOptions = [
  {value: 'A', text: 'Option A (from options prop)'},
  {value: 'B', text: 'Option B (from options prop)'},
]

const exFieldNamesSelected = ref('A')
const exFieldNamesOptions = [
  {item: 'A', name: 'Option A'},
  {item: 'B', name: 'Option B'},
  {item: 'D', name: 'Option C', notEnabled: true},
  {item: {d: 1}, name: 'Option D'},
]

const exOptionNotesSelected = ref(null)

const exMultiSelected = ref(['b'])
const exMultiOptions = [
  { value: 'a', text: 'This is First option' },
  { value: 'b', text: 'Default Selected Option' },
  { value: 'c', text: 'This is another option' },
  { value: 'd', text: 'This one is disabled', disabled: true },
  { value: 'e', text: 'This is option e' },
  { value: 'f', text: 'This is option f' },
  { value: 'g', text: 'This is option g' }
]
</script>
