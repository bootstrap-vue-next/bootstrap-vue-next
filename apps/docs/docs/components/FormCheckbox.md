# Form Checkbox

For cross browser consistency, `<b-form-checkbox-group>` and `<b-form-checkbox>` use Bootstrap's custom checkbox input to replace the browser default checkbox input. It is built on top of semantic and accessible markup, so it is a solid replacement for the default checkbox input.

## Checkbox group options array

`options` can be an array of strings or objects. Available fields:

- `value` The selected value which will be set on `v-model`
- `disabled` Disables item for selection
- `text` Display text, or html Display basic inline html

`value` can be a string, number, or simple object. Avoid using complex types in values.

If both `html` and `text` are provided, `html` will take precedence. Only basic/native HTML is supported in the `html` field (components will not work). Note that not all browsers will render inline html (i.e. `<i>`, `<strong>`, etc.) inside `<option>` elements of a `<select>`.

<p class="alert alert-danger">
<strong>Be cautious</strong> of placing user supplied content in the <code>html</code> field, as it may make you vulnerable to <a class="alert-link" href="https://en.wikipedia.org/wiki/Cross-site_scripting">
  <abbr title="Cross Site Scripting Attacks">XSS attacks</abbr></a>, if you do not first <a class="alert-link" href="https://en.wikipedia.org/wiki/HTML_sanitization">sanitize</a> the user supplied string.
</p>

```javascript
const options = ['A', 'B', 'C', {text: 'D', value: {d: 1}, disabled: true}, 'E', 'F']
```

If an array entry is a string, it will be used for both the generated `value` and `text` fields.

You can mix using strings and [objects](#options-as-an-array-of-objects) in the array.

Internally, BootstrapVue will convert the above array to the following array (the
[array of objects](#options-as-an-array-of-objects)) format:

```javascript
const options = [
  {text: 'A', value: 'A', disabled: false},
  {text: 'B', value: 'B', disabled: false},
  {text: 'C', value: 'C', disabled: false},
  {text: 'D', value: {d: 1}, disabled: true},
  {text: 'E', value: 'E', disabled: false},
  {text: 'F', value: 'F', disabled: false},
]
```

### Options as an array of objects

```js
const options = [
  {text: 'Item 1', value: 'first'},
  {text: 'Item 2', value: 'second'},
  {html: '<b>Item</b> 3', value: 'third', disabled: true},
  {text: 'Item 4'},
  {text: 'Item 5', value: {foo: 'bar', baz: true}},
]
```

If `value` is missing, then `text` will be used as both the `value` and `text` fields. If you use
the `html` property, you **must** supply a `value` property.

Internally, BootstrapVue will convert the above array to the following array (the
[array of objects](#options-as-an-array-of-objects)) format:

```js
const options = [
  {text: 'Item 1', value: 'first', disabled: false},
  {text: 'Item 2', value: 'second', disabled: false},
  {html: '<b>Item</b> 3', value: 'third', disabled: true},
  {text: 'Item 4', value: 'Item 4', disabled: false},
  {text: 'Item 5', value: 'E', disabled: false},
]
```

### Changing the option field names

If you want to customize the field property names (for example using `name` field for display
`text`) you can easily change them by setting the `text-field`, `html-field`, `value-field`, and
`disabled-field` props to a string that contains the property name you would like to use:

<ClientOnly>
  <b-card>
    <div>
      <b-form-checkbox-group
        v-model="checkEx2Selected"
        :options="checkEx2Options"
        class="mb-3"
        value-field="item"
        text-field="name"
        disabled-field="notEnabled"
      ></b-form-checkbox-group>
      <div class="mt-3">
        Selected: <strong>{{ checkEx2Selected }}</strong>
      </div>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <b-form-checkbox-group
    v-model="checkEx2Selected"
    :options="checkEx2Options"
    class="mb-3"
    value-field="item"
    text-field="name"
    disabled-field="notEnabled"
  ></b-form-checkbox-group>
  <div class="mt-3">Selected: <strong>{{ checkEx2Selected }}</strong></div>
</div>

<script lang="ts" setup>
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

## Checkbox values and `v-model`

By default, `<b-form-checkbox>` value will be true when checked and false when unchecked. You can customize the checked and unchecked values by specifying the value and unchecked-value properties, respectively.

When you have multiple checkboxes that bind to a single data state variable, you must provide an array reference (`[ ]`) to your v-model.

Note that when v-model is bound to multiple checkboxes (i.e an array ref), the unchecked-value is **not used**. Only the value(s) of the checked checkboxes will be returned in the v-model bound array. You should provide a unique value for each checkbox's value prop (the default of true will not work when bound to an array)

To pre-check any checkboxes, set the v-model to the value(s) of the checks that you would like pre-selected.

When placing individual `<b-form-checkbox>` components within a `<b-form-checkbox-group>`, most
props and the `v-model` are inherited from the `<b-form-checkbox-group>`.

Note: the unchecked-value prop does not affect the native `<input>`'s `value` attribute, because browsers don't include unchecked boxes in form submissions. To guarantee that one of two values is submitted in a native `<form>` submit (e.g. 'yes' or 'no'), use radio inputs instead. This is the same limitation that Vue has with native checkbox inputs.

<ClientOnly>
  <b-card>
    <div>
      <b-form-checkbox
        v-for="(car, index) in availableCars"
        :key="index"
        v-model="selectedCars"
        :value="car"
      >
        {{ car }}
      </b-form-checkbox>
    </div>
    <div class="mt-2">Selected: <strong>{{ concatSelectedCars}}</strong></div>
  </b-card>
</ClientOnly>

```html
<div>
  <b-form-checkbox
    v-for="(car, index) in availableCars"
    :key="index"
    v-model="selectedCars"
    :value="car"
  >
    {{ car }}
  </b-form-checkbox>
</div>
<div class="mt-2">Selected: <strong>{{ concatSelectedCars}}</strong></div>

<script lang="ts" setup>
  import {ref, computed} from 'vue'

  const availableCars = ['BMW', 'Mercedes', 'Toyota']
  const selectedCars = ref([])

  const concatSelectedCars = computed(() => {
    return selectedCars.value.join(', ')
  })
</script>
```

### Multiple checkboxes and accessibility

When binding multiple checkboxes together, you must set the name prop to the same value for all `<b-form-checkbox>`s in the group individually. This will inform users of assistive technologies that the checkboxes are related and enables native browser keyboard navigation.

## Inline and stacked checkboxes

`<b-form-checkbox-group>` components render inline checkboxes by default, while `<b-form-checkbox>`
renders block-level (stacked) checkboxes.

Set the prop `stacked` on `<b-form-checkbox-group>` to place each form control one over the other,
or if using individual checkboxes not inside a `<b-form-checkbox-group>`, set the `inline` prop on
`<b-form-checkbox>`.

<ClientOnly>
  <b-card>
    <div>
      <div class="my-2">
        <label>Form-checkbox-group inline checkboxes (default)</label>
      </div>
      <b-form-checkbox-group
        v-model="checkEx3Selected"
        :options="checkEx3Options"
        name="flavour-1a"
      ></b-form-checkbox-group>
      <div class="my-2">
        <label>Form-checkbox-group stacked checkboxes</label>
      </div>
      <b-form-checkbox-group
        v-model="checkEx3Selected"
        :options="checkEx3Options"
        name="flavour-2a"
        stacked
      ></b-form-checkbox-group>
      <div class="my-2">
        <label>Individual stacked checkboxes (default)</label>
      </div>
      <b-form-checkbox
        v-for="option in checkEx3Options"
        v-model="checkEx3Selected"
        :key="option.value"
        :value="option.value"
        name="flavour-3a"
      >
        {{ option.text }}
      </b-form-checkbox>
      <div class="my-2">
          <label>Individual inline checkboxes</label>
      </div>
      <b-form-checkbox
        v-for="option in checkEx3Options"
        v-model="checkEx3Selected"
        :key="option.value"
        :value="option.value"
        name="flavour-4a"
        inline
      >
        {{ option.text }}
      </b-form-checkbox>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <div class="my-2">
    <label>Form-checkbox-group inline checkboxes (default)</label>
  </div>
  <b-form-checkbox-group
    v-model="checkEx3Selected"
    :options="checkEx3Options"
    name="flavour-1a"
  ></b-form-checkbox-group>
  <div class="my-2">
    <label>Form-checkbox-group stacked checkboxes</label>
  </div>
  <b-form-checkbox-group
    v-model="checkEx3Selected"
    :options="checkEx3Options"
    name="flavour-2a"
    stacked
  ></b-form-checkbox-group>
  <div class="my-2">
    <label>Individual stacked checkboxes (default)</label>
  </div>
  <b-form-checkbox
    v-for="option in checkEx3Options"
    v-model="checkEx3Selected"
    :key="option.value"
    :value="option.value"
    name="flavour-3a"
  >
    {{ option.text }}
  </b-form-checkbox>
  <div class="my-2">
    <label>Individual inline checkboxes</label>
  </div>
  <b-form-checkbox
    v-for="option in checkEx3Options"
    v-model="checkEx3Selected"
    :key="option.value"
    :value="option.value"
    name="flavour-4a"
    inline
  >
    {{ option.text }}
  </b-form-checkbox>
</div>
```

## Control sizing

Use the `size` prop to control the size of the checkbox. The default size is medium. Supported size values are `sm` (small) and `lg` (large).

<ClientOnly>
    <b-card>
        <div>
            <b-form-checkbox size="sm">Small</b-form-checkbox>
            <b-form-checkbox>Default</b-form-checkbox>
            <b-form-checkbox size="lg">Large</b-form-checkbox>
        </div>
    </b-card>
</ClientOnly>

```html
<div>
  <b-form-checkbox size="sm">Small</b-form-checkbox>
  <b-form-checkbox>Default</b-form-checkbox>
  <b-form-checkbox size="lg">Large</b-form-checkbox>
</div>
```

## Button style checkboxes

You can optionally render checkboxes to appear as buttons, either individually, or in a group.

Button style checkboxes will have the class .active automatically applied to the label when they are in the checked state.

### Individual checkbox button style

A single checkbox can be rendered with a button appearance by setting the prop button to true

Change the button variant by setting the button-variant prop to one of the standard Bootstrap button variants (see `<b-button>` for supported variants). The default variant is secondary.

<ClientOnly>
    <b-card>
        <div class="d-flex flex-row">
            <b-form-checkbox v-model="button1Checked" class="m-2" button>
                Button Checkbox (Checked: {{ button1Checked }})
            </b-form-checkbox>
            <b-form-checkbox v-model="button2Checked" class="m-2" button button-variant="danger">
                Button Checkbox (Checked: {{ button2Checked }})
            </b-form-checkbox>
        </div>
    </b-card>
</ClientOnly>

```html
<b-form-checkbox v-model="button1Checked" class="m-2" button>
  Button Checkbox (Checked: {{ button1Checked }})
</b-form-checkbox>
<b-form-checkbox v-model="button2Checked" class="m-2" button button-variant="danger">
  Button Checkbox (Checked: {{ button2Checked }})
</b-form-checkbox>

<script lang="ts" setup>
  import {ref} from 'vue'

  const button1Checked = ref(false)
  const button2Checked = ref(false)
</script>
```

### Grouped button style checkboxes

Render groups of checkboxes with the look of a button-group by setting the prop `buttons` on
`<b-form-checkbox-group>`. Change the button variant by setting the `button-variant` prop to one of
the standard Bootstrap button variants (see [`<b-button>`](/docs/components/button) for supported
variants). The default `button-variant` is `secondary`.

<ClientOnly>
  <b-card>
    <div class="my-2">
      <label>Form-checkbox-group inline checkboxes (default)</label>
    </div>
    <b-form-checkbox-group
      v-model="checkEx3Selected"
      :options="checkEx3Options"
      name="buttons-1"
      buttons
    ></b-form-checkbox-group>
    <div class="my-2">
      <label>Button-group style checkboxes with variant primary and large buttons</label>
    </div>
    <b-form-checkbox-group
        v-model="checkEx3Selected"
        :options="checkEx3Options"
        buttons
        button-variant="primary"
        size="lg"
        name="buttons-2"
    ></b-form-checkbox-group>
    <div class="my-2">
      <label>Stacked (vertical) button-group style checkboxes</label>
    </div>
    <b-form-checkbox-group
        v-model="checkEx3Selected"
        :options="checkEx3Options"
        stacked
        buttons
      ></b-form-checkbox-group>
  </b-card>
</ClientOnly>

```html
<div class="my-2">
  <label>Form-checkbox-group inline checkboxes (default)</label>
</div>
<b-form-checkbox-group
  v-model="checkEx3Selected"
  :options="checkEx3Options"
  name="buttons-1"
  buttons
></b-form-checkbox-group>
<div class="my-2">
  <label>Button-group style checkboxes with variant primary and large buttons</label>
</div>
<b-form-checkbox-group
  v-model="checkEx3Selected"
  :options="checkEx3Options"
  buttons
  button-variant="primary"
  size="lg"
  name="buttons-2"
></b-form-checkbox-group>
<div class="my-2">
  <label>Stacked (vertical) button-group style checkboxes</label>
</div>
<b-form-checkbox-group
  v-model="checkEx3Selected"
  :options="checkEx3Options"
  stacked
  buttons
></b-form-checkbox-group>

<script lang="ts" setup>
  import {ref} from 'vue'

  const checkEx3Selected = ref(['A'])
  const checkEx3Options = [
    {item: 'A', name: 'Option A'},
    {item: 'B', name: 'Option B'},
    {item: 'D', name: 'Option C', notEnabled: true},
    {item: {d: 1}, name: 'Option D'},
  ]
</script>
```

## Switch style checkboxes

Switch styling is supported on `<b-form-checkbox>` and `<b-form-checkbox-group>` components.

**Note:** If the checkbox is in [button mode](#button-style-checkboxes), switch mode will have no
effect.

### Individual checkbox switch style

A single checkbox can be rendered with a switch appearance by setting the prop switch to true

<ClientOnly>
  <b-card>
    <b-form-checkbox v-model="switchChecked" switch>Switch Checkbox <strong>(Checked: {{ switchChecked }})</strong></b-form-checkbox>
  </b-card>
</ClientOnly>

```html
<b-form-checkbox v-model="switchChecked" switch>
  Switch Checkbox <strong>(Checked: {{ switchChecked }})</strong>
</b-form-checkbox>

<script lang="ts" setup>
  import {ref} from 'vue'

  const switchChecked = ref(false)
</script>
```

### Grouped switch style checkboxes

Render groups of checkboxes with the look of a switches by setting the prop `switches` on
`<b-form-checkbox-group>`.

<ClientOnly>
  <b-card>
    <div class="my-2">
      <label>Inline switch style checkboxes</label>
    </div>
    <b-form-checkbox-group
      v-model="groupSwitchSelected"
      :options="groupSwitchOptions"
      switches
    ></b-form-checkbox-group>
    <div class="my-2">
      <label>Stacked (vertical) switch style checkboxes</label>
    </div>
    <b-form-checkbox-group
      v-model="groupSwitchSelected"
      :options="groupSwitchOptions"
      switches
      stacked
    ></b-form-checkbox-group>
  </b-card>
</ClientOnly>

```html
<div class="my-2">
  <label>Inline switch style checkboxes</label>
</div>
<b-form-checkbox-group
  v-model="groupSwitchSelected"
  :options="groupSwitchOptions"
  switches
></b-form-checkbox-group>
<div class="my-2">
  <label>Stacked (vertical) switch style checkboxes</label>
</div>
<b-form-checkbox-group
  v-model="groupSwitchSelected"
  :options="groupSwitchOptions"
  switches
  stacked
></b-form-checkbox-group>

<script lang="ts" setup>
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

### Switch sizing

Use the `size` prop to control the size of the switch. The default size is medium. Supported size
values are `sm` (small) and `lg` (large).

<ClientOnly>
  <b-card>
    <b-form-checkbox switch size="sm">Small</b-form-checkbox>
    <b-form-checkbox switch>Default</b-form-checkbox>
    <b-form-checkbox switch size="lg">Large</b-form-checkbox>
  </b-card>
</ClientOnly>

```html
<div>
  <b-form-checkbox switch size="sm">Small</b-form-checkbox>
  <b-form-checkbox switch>Default</b-form-checkbox>
  <b-form-checkbox switch size="lg">Large</b-form-checkbox>
</div>

<!-- form-checkbox-switch-sizes.vue -->
```

Sizes can be set on individual `<b-form-checkbox>` components, or inherited from the size setting of
`<b-form-checkbox-group>`.

**Note:** Bootstrap v5.x does not natively support sizes for the custom switch control. However,
Bootstrap-Vue-3 includes custom SCSS/CSS that adds support for sizing the custom switches.

## Non-custom check inputs (plain)

You can have `<b-form-checkbox-group>` or `<b-form-checkbox>` render a browser native checkbox input
by setting the `plain` prop.

<ClientOnly>
  <b-card>
    <div class="my-2">
      <label>Plain inline checkboxes</label>
    </div>
    <b-form-checkbox-group
      v-model="groupSwitchSelected"
      :options="groupSwitchOptions"
      plain
    ></b-form-checkbox-group>
    <div class="my-2">
      <label>Plain stacked checkboxes</label>
    </div>
    <b-form-checkbox-group
      v-model="groupSwitchSelected"
      :options="groupSwitchOptions"
      plain
      stacked
    ></b-form-checkbox-group>
  </b-card>
</ClientOnly>

```html
<div class="my-2">
  <label>Plain inline checkboxes</label>
</div>
<b-form-checkbox-group
  v-model="groupSwitchSelected"
  :options="groupSwitchOptions"
  plain
></b-form-checkbox-group>
<div class="my-2">
  <label>Plain stacked checkboxes</label>
</div>
<b-form-checkbox-group
  v-model="groupSwitchSelected"
  :options="groupSwitchOptions"
  plain
  stacked
></b-form-checkbox-group>
```

## Contextual states

Bootstrap includes validation styles for valid and invalid states on most form controls.

Generally speaking, you'll want to use a particular state for specific types of feedback:

- `false` (denotes invalid state) is great for when there's a blocking or required field. A user must fill in this field properly to submit the form.
- `true` (denotes valid state) is ideal for situations when you have per-field validation throughout a form and want to encourage a user through the rest of the fields.
- `null` Displays no validation state (neither valid nor invalid)

To apply one of the contextual state icons on `<b-form-checkbox>`, set the `state` prop to `false`
(for invalid), `true` (for valid), or `null` (no validation state).

**Note:** Contextual states are **not** supported when in button mode.

### Contextual state and validation example

<ClientOnly>
  <b-card>
    <b-form-checkbox :state="false">Checkbox state false</b-form-checkbox>
    <b-form-checkbox :state="true">Checkbox state true</b-form-checkbox>
    <b-form-checkbox>Checkbox state null</b-form-checkbox>
    <p/>
    <b-form-checkbox-group
      v-model="contextualSelected"
      :options="contextualStateOptions"
      :state="contextualState"
      name="checkbox-validation"
    >
    </b-form-checkbox-group>
    <div v-if="!contextualState">Please select two</div>
    <div v-if="contextualState">Thank you</div>
  </b-card>
</ClientOnly>

```html
<b-form-checkbox :state="false">Checkbox state false</b-form-checkbox>
<b-form-checkbox :state="true">Checkbox state true</b-form-checkbox>
<b-form-checkbox>Checkbox state null</b-form-checkbox>

<b-form-checkbox-group
  v-model="contextualSelected"
  :options="contextualStateOptions"
  :state="contextualState"
  name="checkbox-validation"
>
</b-form-checkbox-group>
<div v-if="!contextualState">Please select two</div>
<div v-if="contextualState">Thank you</div>

<script lang="ts" setup>
  import {ref} from 'vue'

  const contextualStateOptions = [
    {text: 'First Check', value: 'first'},
    {text: 'Second Check', value: 'second'},
    {text: 'Third Check', value: 'third'},
  ]

  const contextualSelected = ref([])
  const contextualState = computed(() => contextualSelected.value.length === 2)
</script>
```

### Required constraint

When using individual `<b-form-checkbox>` components (not in a `<b-form-checkbox-group>`), and you
want the checkbox(es) to be `required` in your form, you **must** provide a `name` on each
`<b-form-checkbox>` in order for the required constraint to work. All `<b-form-checkbox>` components
tied to the same `v-model` **must** have the same `name`.

The `name` is required in order for Assistive Technologies (such as screen readers, and keyboard
only users) to know which checkboxes belong to the same form variable (the name also automatically
enables native browser keyboard navigation), hence `required` will only work if `name` is set.
`<b-form-checkbox-group>` will automatically generate a unique input name if one is not provided on
the group.

## Autofocus

When the `autofocus` prop is set on `<b-form-checkbox>`, the input will be auto-focused when it is
inserted (i.e. **mounted**) into the document, or re-activated when inside a Vue `<keep-alive>`
component. Note that this prop **does not** set the `autofocus` attribute on the input, nor can it
tell when the input becomes visible.

## Indeterminate (tri-state) support

Normally a checkbox input can only have two states: checked or unchecked. They can have any value, but they either submit that value (checked) or don't (unchecked) with a form submission (although BootstrapVue allows a value for the unchecked state on a single checkbox)

Visually, there are actually three states a checkbox can be in: checked, unchecked, or **indeterminate**.

The indeterminate state is **visual only**. The checkbox is still either checked or unchecked as a value. That means the visual indeterminate state masks the real value of the checkbox, so that better make sense in your UI!

`<b-form-checkbox>` supports setting this visual indeterminate state via the indeterminate prop (defaults to false). Clicking the checkbox will clear its indeterminate state.

<ClientOnly>
    <b-card>
        <b-form-checkbox v-model="intermChecked" :indeterminate="true">Click me to see what happens</b-form-checkbox>
        <div class="mt-2">
            Checked: <strong>{{ intermChecked }}</strong>
        </div>
    </b-card>
</ClientOnly>

```html
<b-form-checkbox :indeterminate="true">Click me to see what happens</b-form-checkbox>

<script lang="ts" setup>
  import {ref} from 'vue'

  const intermChecked = ref(true)
</script>
```

<ClientOnly>
  <ComponentReference></ComponentReference>
</ClientOnly>

<script lang='ts' setup>
  import {ref, computed} from 'vue'

  const button1Checked = ref(false);
  const button2Checked = ref(false);
  const switchChecked = ref(false);
  const intermChecked = ref(true);

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

</script>
