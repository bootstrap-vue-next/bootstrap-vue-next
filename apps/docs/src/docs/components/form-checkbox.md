# Form Checkbox

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

For cross browser consistency, `BFormCheckboxGroup` and `BFormCheckbox` use Bootstrap's custom checkbox input to replace the browser default checkbox input. It is built on top of semantic and accessible markup, so it is a solid replacement for the default checkbox input.

</div>

**Example 1:** Single checkbox

<HighlightCard>
  <div>
    <BFormCheckbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </BFormCheckbox>
    <div>
      State: <strong>{{ status }}</strong>
    </div>
  </div>
  <template #html>

```vue
<template>
  <div>
    <BFormCheckbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </BFormCheckbox>

    <div>
      State: <strong>{{ status }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const status = ref(false)
</script>
```

  </template>
</HighlightCard>

**Example 2:** Multiple choice checkboxes

<HighlightCard>
  <div>
    <b-form-group label="Using options array:" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>
    <b-form-group label="Using sub-components:" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="flavour-2"
      >
        <b-form-checkbox value="orange">Orange</b-form-checkbox>
        <b-form-checkbox value="apple">Apple</b-form-checkbox>
        <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
        <b-form-checkbox value="grape">Grape</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
    <div>Selected: <strong>{{ selected }}</strong></div>
  </div>

<template #html>

```vue
<template>
  <div>
    <b-form-group label="Using options array:" v-slot="{ariaDescribedby}">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Using sub-components:" v-slot="{ariaDescribedby}">
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="flavour-2"
      >
        <b-form-checkbox value="orange">Orange</b-form-checkbox>
        <b-form-checkbox value="apple">Apple</b-form-checkbox>
        <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
        <b-form-checkbox value="grape">Grape</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <div>
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
const selected = ref([])

const options = [
  {text: 'Orange', value: 'orange'},
  {text: 'Apple', value: 'apple'},
  {text: 'Pineapple', value: 'pineapple'},
  {text: 'Grape', value: 'grape'},
]
</script>
```

  </template>
</HighlightCard>

## Checkbox group options array

`options` can be an array of strings or objects. Available fields:

- `value` The selected value which will be set on `v-model`
- `disabled` Disables item for selection
- `text` Display text, or html Display basic inline html

`value` can be a string, number, or simple object. Avoid using complex types in values.

If both `html` and `text` are provided, `html` will take precedence. Only basic/native HTML is supported in the `html` field (components will not work). Note that not all browsers will render inline html (i.e. `<i>`, `<strong>`, etc.) inside `<option>` elements of a `<select>`.

<CrossSiteScriptingWarning />

<BCard class="bg-body-tertiary">

```ts
const options = ['A', 'B', 'C', {text: 'D', value: {d: 1}, disabled: true}, 'E', 'F']
```

</BCard>

If an array entry is a string, it will be used for both the generated `value` and `text` fields.

You can mix using strings and [objects](#options-as-an-array-of-objects) in the array.

Internally, BootstrapVueNext will convert the above array to the following array (the
[array of objects](#options-as-an-array-of-objects)) format:

<BCard class="bg-body-tertiary">

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

<BCard class="bg-body-tertiary">

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

Internally, BootstrapVueNext will convert the above array to the following array (the
[array of objects](#options-as-an-array-of-objects)) format:

<BCard class="bg-body-tertiary">

```ts
const options = [
  {text: 'Item 1', value: 'first', disabled: false},
  {text: 'Item 2', value: 'second', disabled: false},
  {html: '<b>Item</b> 3', value: 'third', disabled: true},
  {text: 'Item 4', value: 'Item 4', disabled: false},
  {text: 'Item 5', value: 'E', disabled: false},
]
```

</BCard>

### Changing the option field names

If you want to customize the field property names (for example using `name` field for display
`text`) you can easily change them by setting the `text-field`, `html-field`, `value-field`, and
`disabled-field` props to a string that contains the property name you would like to use:

<HighlightCard>
  <BFormCheckboxGroup
    v-model="checkEx2Selected"
    :options="checkEx2Options"
    class="mb-3"
    value-field="item"
    text-field="name"
    disabled-field="notEnabled"
  />
  <div class="mt-3">
    Selected: <strong>{{ checkEx2Selected }}</strong>
  </div>
  <template #html>

```vue
<template>
  <BFormCheckboxGroup
    v-model="checkEx2Selected"
    :options="checkEx2Options"
    class="mb-3"
    value-field="item"
    text-field="name"
    disabled-field="notEnabled"
  />
  <div class="mt-3">
    Selected: <strong>{{ checkEx2Selected }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const checkEx2Selected = ref(['A'])

const checkEx2Options = [
  {item: 'A', name: 'Option A'},
  {item: 'B', name: 'Option B'},
  {item: 'D', name: 'Option C', notEnabled: true},
  {item: {d: 1}, name: 'Option D'},
]
</script>
```

  </template>
</HighlightCard>

## Checkbox values and `v-model`

By default, `BFormCheckbox` value will be true when checked and false when unchecked. You can customize the checked and unchecked values by specifying the value and unchecked-value properties, respectively.

When you have multiple checkboxes that bind to a single data state variable, you must provide an array reference (`[ ]`) to your v-model.

Note that when v-model is bound to multiple checkboxes (i.e an array ref), the unchecked-value is **not used**. Only the value(s) of the checked checkboxes will be returned in the v-model bound array. You should provide a unique value for each checkbox's value prop (the default of true will not work when bound to an array).

To pre-check any checkboxes, set the v-model to the value(s) of the checks that you would like pre-selected.

When placing individual `BFormCheckbox` components within a `BFormCheckboxGroup`, most
props and the `v-model` are inherited from the `BFormCheckboxGroup`.

Note: the unchecked-value prop does not affect the native `<input>`'s `value` attribute, because browsers do not include unchecked boxes in form submissions. To guarantee that one of two values is submitted in a native `<form>` submit (e.g. 'yes' or 'no'), use radio inputs instead. This is the same limitation that Vue has with native checkbox inputs.

<HighlightCard>
  <BFormCheckbox
    v-for="(car, index) in availableCars"
    :key="index"
    v-model="selectedCars"
    :value="car"
  >
    {{ car }}
  </BFormCheckbox>
  <div class="mt-2">Selected: <strong>{{ concatSelectedCars}}</strong></div>
  <template #html>

```vue
<template>
  <BFormCheckbox
    v-for="(car, index) in availableCars"
    :key="index"
    v-model="selectedCars"
    :value="car"
  >
    {{ car }}
  </BFormCheckbox>

  Selected: <strong>{{ concatSelectedCars }}</strong>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const availableCars = ['BMW', 'Mercedes', 'Toyota']
const selectedCars = ref([])

const concatSelectedCars = computed(() => {
  return selectedCars.value.join(', ')
})
</script>
```

  </template>
</HighlightCard>

### Multiple checkboxes and accessibility

When binding multiple checkboxes together, you must set the name prop to the same value for all `BFormCheckbox`s in the group individually. This will inform users of assistive technologies that the checkboxes are related and enables native browser keyboard navigation.

## Inline and stacked checkboxes

`BFormCheckboxGroup` components render inline checkboxes by default, while `BFormCheckbox`
renders block-level (stacked) checkboxes.

Set the prop `stacked` on `BFormCheckboxGroup` to place each form control one over the other,
or if using individual checkboxes not inside a `BFormCheckboxGroup`, set the `inline` prop on
`BFormCheckbox`.

<HighlightCard>
  <div class="my-2">
    <label>Form-checkbox-group inline checkboxes (default)</label>
  </div>
  <BFormCheckboxGroup
    v-model="checkEx3Selected"
    :options="checkEx3Options"
    name="flavour-1a"
  />
  <div class="my-2">
    <label>Form-checkbox-group stacked checkboxes</label>
  </div>
  <BFormCheckboxGroup
    v-model="checkEx3Selected"
    :options="checkEx3Options"
    name="flavour-2a"
    stacked
  />
  <div class="my-2">
    <label>Individual stacked checkboxes (default)</label>
  </div>
  <BFormCheckbox
    v-for="option in checkEx3Options"
    v-model="checkEx3Selected"
    :key="option.value"
    :value="option.value"
    name="flavour-3a"
  >
    {{ option.text }}
  </BFormCheckbox>
  <div class="my-2">
      <label>Individual inline checkboxes</label>
  </div>
  <BFormCheckbox
    v-for="option in checkEx3Options"
    v-model="checkEx3Selected"
    :key="option.value"
    :value="option.value"
    name="flavour-4a"
    inline
  >
    {{ option.text }}
  </BFormCheckbox>
  <template #html>

```vue
<template>
  <div class="my-2">
    <label>Form-checkbox-group inline checkboxes (default)</label>
  </div>

  <BFormCheckboxGroup
    v-model="checkEx3Selected"
    :options="checkEx3Options"
    name="flavour-1a"
  />

  <div class="my-2">
    <label>Form-checkbox-group stacked checkboxes</label>
  </div>

  <BFormCheckboxGroup
    v-model="checkEx3Selected"
    :options="checkEx3Options"
    name="flavour-2a"
    stacked
  />

  <div class="my-2">
    <label>Individual stacked checkboxes (default)</label>
  </div>

  <BFormCheckbox
    v-for="option in checkEx3Options"
    v-model="checkEx3Selected"
    :key="option.value"
    :value="option.value"
    name="flavour-3a"
  >
    {{ option.text }}
  </BFormCheckbox>

  <div class="my-2">
    <label>Individual inline checkboxes</label>
  </div>

  <BFormCheckbox
    v-for="option in checkEx3Options"
    v-model="checkEx3Selected"
    :key="option.value"
    :value="option.value"
    name="flavour-4a"
    inline
  >
    {{ option.text }}
  </BFormCheckbox>
</tempalte>
<script setup lang='ts'>
import {ref} from 'vue'
const checkEx3Selected = ref(['A'])

const checkEx3Options = [
  { text: 'Orange', value: 'orange' },
  { text: 'Apple', value: 'apple' },
  { text: 'Pineapple', value: 'pineapple' },
  { text: 'Grape', value: 'grape' }
]
</script>
```

  </template>
</HighlightCard>

## Control sizing

Use the `size` prop to control the size of the checkbox. The default size is medium. Supported size values are `sm` (small) and `lg` (large).

<HighlightCard>
  <BFormCheckbox size="sm">Small</BFormCheckbox>
  <BFormCheckbox>Default</BFormCheckbox>
  <BFormCheckbox size="lg">Large</BFormCheckbox>
  <template #html>

```vue-html
<BFormCheckbox size="sm">Small</BFormCheckbox>
<BFormCheckbox>Default</BFormCheckbox>
<BFormCheckbox size="lg">Large</BFormCheckbox>
```

  </template>
</HighlightCard>

## Button style checkboxes

You can optionally render checkboxes to appear as buttons, either individually, or in a group.

Button style checkboxes will have the class .active automatically applied to the label when they are in the checked state.

### Individual checkbox button style

A single checkbox can be rendered with a button appearance by setting the prop button to true.

Change the button variant by setting the button-variant prop to one of the standard Bootstrap button variants (see `BButton` for supported variants). The default variant is secondary.

<HighlightCard>
  <div class="hstack gap-3">
    <BFormCheckbox v-model="button1Checked" button>
      Button Checkbox (Checked: {{ button1Checked }})
    </BFormCheckbox>
    <BFormCheckbox v-model="button2Checked" button button-variant="danger">
      Button Checkbox (Checked: {{ button2Checked }})
    </BFormCheckbox>
  </div>
  <template #html>

```vue
<template>
  <div class="hstack gap-3">
    <BFormCheckbox v-model="button1Checked" button>
      Button Checkbox (Checked: {{ button1Checked }})
    </BFormCheckbox>

    <BFormCheckbox v-model="button2Checked" button button-variant="danger">
      Button Checkbox (Checked: {{ button2Checked }})
    </BFormCheckbox>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const button1Checked = ref(false)
const button2Checked = ref(false)
</script>
```

  </template>
</HighlightCard>

### Grouped button style checkboxes

Render groups of checkboxes with the look of a button-group by setting the prop `buttons` on
`BFormCheckboxGroup`. Change the button variant by setting the `button-variant` prop to one of
the standard Bootstrap button variants (see [`BButton`](/docs/components/button) for supported
variants). The default `button-variant` is `secondary`.

<HighlightCard>
  <div class="my-2">
    <label>Form-checkbox-group inline checkboxes (default)</label>
  </div>
  <BFormCheckboxGroup
    v-model="checkEx3Selected"
    :options="checkEx3Options"
    name="buttons-1"
    buttons
  />
  <div class="my-2">
    <label>Button-group style checkboxes with variant primary and large buttons</label>
  </div>
  <BFormCheckboxGroup
    v-model="checkEx3Selected"
    :options="checkEx3Options"
    buttons
    button-variant="primary"
    size="lg"
    name="buttons-2"
  />
  <div class="my-2">
    <label>Stacked (vertical) button-group style checkboxes</label>
  </div>
  <BFormCheckboxGroup
    v-model="checkEx3Selected"
    :options="checkEx3Options"
    stacked
    buttons
    />
  <template #html>

```vue
<template>
  <div class="my-2">
    <label>Form-checkbox-group inline checkboxes (default)</label>
  </div>

  <BFormCheckboxGroup
    v-model="checkEx3Selected"
    :options="checkEx3Options"
    name="buttons-1"
    buttons
  />

  <div class="my-2">
    <label>Button-group style checkboxes with variant primary and large buttons</label>
  </div>

  <BFormCheckboxGroup
    v-model="checkEx3Selected"
    :options="checkEx3Options"
    buttons
    button-variant="primary"
    size="lg"
    name="buttons-2"
  />

  <div class="my-2">
    <label>Stacked (vertical) button-group style checkboxes</label>
  </div>

  <BFormCheckboxGroup v-model="checkEx3Selected" :options="checkEx3Options" stacked buttons />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const checkEx3Selected = ref(['A'])

const checkEx3Options = [
  {text: 'Orange', value: 'orange'},
  {text: 'Apple', value: 'apple'},
  {text: 'Pineapple', value: 'pineapple'},
  {text: 'Grape', value: 'grape'},
]
</script>
```

  </template>
</HighlightCard>

## Switch style checkboxes

Switch styling is supported on `BFormCheckbox` and `BFormCheckboxGroup` components.

**Note:** If the checkbox is in [button mode](#button-style-checkboxes), switch mode will have no
effect.

### Individual checkbox switch style

A single checkbox can be rendered with a switch appearance by setting the prop switch to true.

<HighlightCard>
  <BFormCheckbox v-model="switchChecked" switch>Switch Checkbox <strong>(Checked: {{ switchChecked }})</strong></BFormCheckbox>
  <template #html>

```vue
<template>
  <BFormCheckbox v-model="switchChecked" switch>
    Switch Checkbox <strong>(Checked: {{ switchChecked }})</strong>
  </BFormCheckbox>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const switchChecked = ref(false)
</script>
```

  </template>
</HighlightCard>

### Grouped switch style checkboxes

Render groups of checkboxes with the look of a switches by setting the prop `switches` on
`BFormCheckboxGroup`.

<HighlightCard>
  <div class="my-2">
    <label>Inline switch style checkboxes</label>
  </div>
  <BFormCheckboxGroup
    v-model="groupSwitchSelected"
    :options="groupSwitchOptions"
    switches
  />
  <div class="my-2">
    <label>Stacked (vertical) switch style checkboxes</label>
  </div>
  <BFormCheckboxGroup
    v-model="groupSwitchSelected"
    :options="groupSwitchOptions"
    switches
    stacked
  />
  <template #html>

```vue
<template>
  <div class="my-2">
    <label>Inline switch style checkboxes</label>
  </div>

  <BFormCheckboxGroup v-model="groupSwitchSelected" :options="groupSwitchOptions" switches />

  <div class="my-2">
    <label>Stacked (vertical) switch style checkboxes</label>
  </div>

  <BFormCheckboxGroup
    v-model="groupSwitchSelected"
    :options="groupSwitchOptions"
    switches
    stacked
  />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const groupSwitchSelected = ref([])

const groupSwitchOptions = [
  {text: 'Red', value: 'red'},
  {text: 'Green', value: 'green'},
  {text: 'Yellow (disabled)', value: 'yellow', disabled: true},
  {text: 'Blue', value: 'blue'},
]
</script>
```

  </template>
</HighlightCard>

### Switch sizing

Use the `size` prop to control the size of the switch. The default size is medium. Supported size
values are `sm` (small) and `lg` (large).

<HighlightCard>
  <BFormCheckbox switch size="sm">Small</BFormCheckbox>
  <BFormCheckbox switch>Default</BFormCheckbox>
  <BFormCheckbox switch size="lg">Large</BFormCheckbox>
  <template #html>

```vue-html
<BFormCheckbox switch size="sm">Small</BFormCheckbox>
<BFormCheckbox switch>Default</BFormCheckbox>
<BFormCheckbox switch size="lg">Large</BFormCheckbox>
```

  </template>
</HighlightCard>

Sizes can be set on individual `BFormCheckbox` components, or inherited from the size setting of
`BFormCheckboxGroup`.

**Note:** Bootstrap v5.x does not natively support sizes for the custom switch control. However,
bootstrap-vue-next includes custom SCSS/CSS that adds support for sizing the custom switches.

## Non-custom check inputs (plain)

You can have `BFormCheckboxGroup` or `BFormCheckbox` render a browser native checkbox input
by setting the `plain` prop.

<HighlightCard>
  <div class="my-2">
    <label>Plain inline checkboxes</label>
  </div>
  <BFormCheckboxGroup
    v-model="groupSwitchSelected"
    :options="groupSwitchOptions"
    plain
  />
  <div class="my-2">
    <label>Plain stacked checkboxes</label>
  </div>
  <BFormCheckboxGroup
    v-model="groupSwitchSelected"
    :options="groupSwitchOptions"
    plain
    stacked
  />
  <template #html>

```vue
<template>
  <div class="my-2">
    <label>Plain inline checkboxes</label>
  </div>

  <BFormCheckboxGroup v-model="groupSwitchSelected" :options="groupSwitchOptions" plain />

  <div class="my-2">
    <label>Plain stacked checkboxes</label>
  </div>

  <BFormCheckboxGroup v-model="groupSwitchSelected" :options="groupSwitchOptions" plain stacked />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const groupSwitchSelected = ref([])
const groupSwitchOptions = [
  {text: 'Red', value: 'red'},
  {text: 'Green', value: 'green'},
  {text: 'Yellow (disabled)', value: 'yellow', disabled: true},
  {text: 'Blue', value: 'blue'},
]
</script>
```

  </template>
</HighlightCard>

## Contextual states

Bootstrap includes validation styles for valid and invalid states on most form controls.

Generally speaking, you'll want to use a particular state for specific types of feedback:

- `false` (denotes invalid state) is great for when there is a blocking or required field. A user must fill in this field properly to submit the form
- `true` (denotes valid state) is ideal for situations when you have per-field validation throughout a form and want to encourage a user through the rest of the fields
- `null` Displays no validation state (neither valid nor invalid)

To apply one of the contextual state icons on `BFormCheckbox`, set the `state` prop to `false`
(for invalid), `true` (for valid), or `null` (no validation state).

**Note:** Contextual states are **not** supported when in button mode.

### Contextual state and validation example

<HighlightCard>
  <BFormCheckbox :state="false">Checkbox state false</BFormCheckbox>
  <BFormCheckbox :state="true">Checkbox state true</BFormCheckbox>
  <BFormCheckbox>Checkbox state null</BFormCheckbox>
  <BFormCheckboxGroup
    v-model="contextualSelected"
    :options="contextualStateOptions"
    :state="contextualState"
    name="checkbox-validation"
  >
  </BFormCheckboxGroup>
  <div v-if="!contextualState">Please select two</div>
  <div v-if="contextualState">Thank you</div>
  <template #html>

```vue
<template>
  <BFormCheckbox :state="false">Checkbox state false</BFormCheckbox>
  <BFormCheckbox :state="true">Checkbox state true</BFormCheckbox>
  <BFormCheckbox>Checkbox state null</BFormCheckbox>

  <BFormCheckboxGroup
    v-model="contextualSelected"
    :options="contextualStateOptions"
    :state="contextualState"
    name="checkbox-validation"
  >
  </BFormCheckboxGroup>

  <div v-if="!contextualState">Please select two</div>
  <div v-if="contextualState">Thank you</div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const contextualStateOptions = [
  {text: 'First Check', value: 'first'},
  {text: 'Second Check', value: 'second'},
  {text: 'Third Check', value: 'third'},
]

const contextualSelected = ref([])

const contextualState = computed(() => contextualSelected.value.length === 2)
</script>
```

  </template>
</HighlightCard>

### Required constraint

When using individual `BFormCheckbox` components (not in a `BFormCheckboxGroup`), and you
want the checkbox(es) to be `required` in your form, you **must** provide a `name` on each
`BFormCheckbox` in order for the required constraint to work. All `BFormCheckbox` components
tied to the same `v-model` **must** have the same `name`.

The `name` is required in order for Assistive Technologies (such as screen readers, and keyboard
only users) to know which checkboxes belong to the same form variable (the name also automatically
enables native browser keyboard navigation), hence `required` will only work if `name` is set.
`BFormCheckboxGroup` will automatically generate a unique input name if one is not provided on
the group.

## Autofocus

When the `autofocus` prop is set on `BFormCheckbox`, the input will be auto-focused when it is
inserted (i.e. **mounted**) into the document, or re-activated when inside a Vue `KeepAlive`
component. Note that this prop **does not** set the `autofocus` attribute on the input, nor can it
tell when the input becomes visible.

## Indeterminate (tri-state) support

Normally a checkbox input can only have two states: checked or unchecked. They can have any value, but they either submit that value (checked) or do not (unchecked) with a form submission (although BootstrapVueNext allows a value for the unchecked state on a single checkbox).

Visually, there are actually three states a checkbox can be in: checked, unchecked, or **indeterminate**.

The indeterminate state is **visual only**. The checkbox is still either checked or unchecked as a value. That means the visual indeterminate state masks the real value of the checkbox, so that better make sense in your UI!.

`BFormCheckbox` supports setting this visual indeterminate state via a secondary named model called indeterminate (defaults to undefined). Clicking the checkbox will clear the indeterminate state and emit an `update:indeterminate=false` event. To reset the state set the indeterminate model value to true.

<HighlightCard>
  <BFormCheckbox v-model="intermChecked" v-model:indeterminate="indeterminate">Click me to see what happens</BFormCheckbox>
  <BButton class="mt-2" :disabled="indeterminate" @click="indeterminate = true">Reset Indeterminate</BButton>
  <div class="mt-2">
    Checked: <strong>{{ intermChecked }}</strong><br>
    Indeterminate: <strong>{{ indeterminate }}</strong>
  </div>
  <template #html>

```vue
<template>
  <BFormCheckbox v-model="intermChecked" v-model:indeterminate="indeterminate"
    >Click me to see what happens</BFormCheckbox
  >
  <BButton class="mt-2" :disabled="indeterminate" @click="indeterminate = true"
    >Reset Indeterminate</BButton
  >
  <div class="mt-2">
    Checked: <strong>{{ intermChecked }}</strong
    ><br />
    Indeterminate: <strong>{{ indeterminate }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const intermChecked = ref(true)
const indeterminate = ref(true)
</script>
```

  </template>
</HighlightCard>

**Indeterminate checkbox use-case example:**

<HighlightCard>
  <div>
        <BFormGroup>
          <template #label>
            <b>Choose your flavors:</b><br />
            <BFormCheckbox
              v-model="allSelected"
              v-model:indeterminate="asIndeterminate"
              aria-describedby="flavors"
              aria-controls="flavors"
              @change="toggleAll"
            >
              {{ allSelected ? 'Un-select All' : 'Select All' }}
            </BFormCheckbox>
          </template>
          <template #default="{ariaDescribedby}">
            <BFormCheckboxGroup
              id="flavors"
              v-model="flavorSelected"
              :options="flavors"
              :aria-describedby="ariaDescribedby"
              name="flavors"
              class="ms-4"
              aria-label="Individual flavors"
              stacked
            />
          </template>
        </BFormGroup>
        <div>
          Selected: <strong>{{ flavorSelected }}</strong
          ><br />
          All Selected: <strong>{{ allSelected }}</strong
          ><br />
          Indeterminate: <strong>{{ asIndeterminate }}</strong>
        </div>
  </div>
  <template #html>

```vue
<template>
  <BFormGroup>
    <template #label>
      <b>Choose your flavors:</b><br />
      <BFormCheckbox
        v-model="allSelected"
        v-model:indeterminate="asIndeterminate"
        aria-describedby="flavors"
        aria-controls="flavors"
        @change="toggleAll"
      >
        {{ allSelected ? 'Un-select All' : 'Select All' }}
      </BFormCheckbox>
    </template>

    <template #default="{ariaDescribedby}">
      <BFormCheckboxGroup
        id="flavors"
        v-model="flavorSelected"
        :options="flavors"
        :aria-describedby="ariaDescribedby"
        name="flavors"
        class="ms-4"
        aria-label="Individual flavors"
        stacked
      />
    </template>
  </BFormGroup>

  <div>
    Selected: <strong>{{ flavorSelected }}</strong
    ><br />
    All Selected: <strong>{{ allSelected }}</strong
    ><br />
    Indeterminate: <strong>{{ asIndeterminate }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import {type CheckboxValue} from 'bootstrap-vue-next'

const flavors = ['Orange', 'Grape', 'Apple', 'Lime', 'Very Berry']
const flavorSelected = ref<string[]>([])
const allSelected = ref(false)
const asIndeterminate = ref(false)

const toggleAll = (checked: CheckboxValue | CheckboxValue[]) => {
  flavorSelected.value = checked ? flavors.slice() : []
}

watch(flavorSelected, (newValue: string[]) => {
  // Handle changes in individual flavor checkboxes
  if (newValue.length === 0) {
    asIndeterminate.value = false
    allSelected.value = false
  } else if (newValue.length === flavors.length) {
    asIndeterminate.value = false
    allSelected.value = true
  } else {
    asIndeterminate.value = true
    allSelected.value = false
  }
})
</script>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/formCheckbox.data'
import {computed, ref, watch} from 'vue'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import CrossSiteScriptingWarning from '../../components/CrossSiteScriptingWarning.vue'
import {BButton, BFormCheckboxGroup, BFormCheckbox, BFormGroup, BCard, BCardBody, BAlert} from 'bootstrap-vue-next'

const status = ref(false);
const selected = ref([]);

const options = [
  { text: 'Orange', value: 'orange' },
  { text: 'Apple', value: 'apple' },
  { text: 'Pineapple', value: 'pineapple' },
  { text: 'Grape', value: 'grape' }
]

const button1Checked = ref(false);
const button2Checked = ref(false);
const switchChecked = ref(false);
const intermChecked = ref(true);
const indeterminate = ref(true);

const availableCars = ['BMW', 'Mercedes', 'Toyota'];
const selectedCars = ref([]);

const concatSelectedCars = computed(() => { return selectedCars.value.join(', ');});

const checkEx2Selected = ref(['A']);
const checkEx2Options = [
  {item: 'A', name: 'Option A'},
  {item: 'B', name: 'Option B'},
  {item: 'D', name: 'Option C', notEnabled: true},
  {item: {d: 1}, name: 'Option D'},
];

const checkEx3Selected = ref([]);
const checkEx3Options = [
  { text: 'Orange', value: 'orange' },
  { text: 'Apple', value: 'apple' },
  { text: 'Pineapple', value: 'pineapple' },
  { text: 'Grape', value: 'grape' }
];
const groupSwitchSelected = ref([]);
const groupSwitchOptions = [
  { text: 'Red', value: 'red' },
  { text: 'Green', value: 'green' },
  { text: 'Yellow (disabled)', value: 'yellow', disabled: true },
  { text: 'Blue', value: 'blue' }
];

const contextualStateOptions = [
  { text: 'First Check', value: 'first' },
  { text: 'Second Check', value: 'second' },
  { text: 'Third Check', value: 'third' }
];

const contextualSelected = ref([]);
const contextualState = computed(() => contextualSelected.value.length === 2);

const flavors = ['Orange', 'Grape', 'Apple', 'Lime', 'Very Berry']
const flavorSelected = ref<string[]>([])
const allSelected = ref(false)
const asIndeterminate = ref(false)

const toggleAll = (checked: CheckboxValue | CheckboxValue[]) => {
  flavorSelected.value = checked ? flavors.slice() : []
}

watch(flavorSelected, (newValue: string[]) => {
  // Handle changes in individual flavor checkboxes
  if (newValue.length === 0) {
    asIndeterminate.value = false
    allSelected.value = false
  } else if (newValue.length === flavors.length) {
    asIndeterminate.value = false
    allSelected.value = true
  } else {
    asIndeterminate.value = true
    allSelected.value = false
  }
})
</script>
