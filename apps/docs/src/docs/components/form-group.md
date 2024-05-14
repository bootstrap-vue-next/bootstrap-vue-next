# Form Group

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">

The `BFormGroup` component is the easiest way to add some structure to forms. Its purpose is to pair form controls with a legend or label, and to provide help text and invalid/valid feedback text, as well as visual (color) contextual state feedback.

</div>

<HighlightCard>
  <BFormGroup
    id="fieldset-1"
    description="Let us know your name."
    label="Enter your name"
    label-for="input-1"
    valid-feedback="Thank you!"
    :invalid-feedback="invalidFeedback"
    :state="state"
    label-class="mb-1"
  >
    <BFormInput id="input-1" v-model="name" :state="state" trim />
  </BFormGroup>
  <template #html>

```vue
<template>
  <BFormGroup
    id="fieldset-1"
    description="Let us know your name."
    label="Enter your name"
    label-for="input-1"
    valid-feedback="Thank you!"
    :invalid-feedback="invalidFeedback"
    :state="state"
    label-class="mb-1"
  >
    <BFormInput id="input-1" v-model="name" :state="state" trim />
  </BFormGroup>
</template>

<script setup lang="ts">
const name = ref('')

const state = computed(() => name.value.length >= 4)
const invalidFeedback = computed(() =>
  name.value.length > 0 ? 'Enter at least 4 characters.' : 'Please enter something.'
)
</script>
```

  </template>
</HighlightCard>

## Label

Use the prop `label` to set the content of the generated `<legend>` or `<label>` element, or by
using the named slot `label`, You may optionally visually hide the label text while still making it
available to screen readers by setting the prop `label-sr-only`.

`BFormGroup` will render a `<fieldset>` with `<legend>` if the `label-for` prop is not set. If
an input Id is provided to the `label-for` prop, then a `<div>` with `<label>` will be rendered.

If you provide an input `id` value to the `label-for` prop (the `id` must exist on the input
contained within the `BFormGroup`), a `<label>` element will be rendered instead of a `<legend>`
element, and will have the `for` attribute set to the `id` specified. When specifying the id, **do
not** prepend it with `#`. The `label-for` prop should only be used when you have a single form
input inside the `BFormGroup` component. Do not set the `label-for` prop when using
`BFormRadioGroup`, `BFormCheckboxGroup`, `BFormRadio`, `BFormCheckbox` or
`BFormFile` components (or when placing multiple inputs in the same form group), as these inputs
include integrated label element(s) and the `<legend>` element is more suitable.

You can also apply additional classes to the label via the `label-class` prop, such as responsive
padding and text alignment utility classes. The `label-class` prop accepts either a string or array
of strings.

### Horizontal layout

By default, the label appears above the input element(s), but you may optionally render horizontal
(label to the left of the input) at the various standard Bootstrap breakpoints.

The props `label-cols` and `label-cols-{breakpoint}` allow you to specify how many columns the label
should occupy in the row. The input will fill the rest of the row width. The value must be a number
greater than `0`. Or you can set the prop to `true` to make the label and input(s) each occupy half
of the width of the rendered row (handy if you have custom Bootstrap with an odd number of columns),
or set the value to `'auto'` so that the label occupies only the width that is needed.

It is also possible to specify how many columns the content should
occupy in the row via the `content-cols` and `content-cols-{breakpoint}` props.

When using both, the `label-cols` and `content-cols` props, make sure that the total amount of
columns does not exceed `12`.

See the [Layout and Grid System](/docs/components/layout#how-it-works) docs for further information.

<table class="b-table table table-bordered table-striped bv-docs-table">
  <thead>
    <tr>
      <th>Prop</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>label-cols</code></td>
      <td>Applies to breakpoint <code>xs</code> up</td>
    </tr>
    <tr>
      <td><code>label-cols-sm</code></td>
      <td>Applies to breakpoint <code>sm</code> and up</td>
    </tr>
    <tr>
      <td><code>label-cols-md</code></td>
      <td>Applies to breakpoint <code>md</code> and up</td>
    </tr>
    <tr>
      <td><code>label-cols-lg</code></td>
      <td>Applies to breakpoint <code>xl</code> and up</td>
    </tr>
    <tr>
      <td><code>label-cols-xl</code></td>
      <td>Applies to breakpoint <code>xl</code> and up</td>
    </tr>
    <tr>
      <td><code>content-cols</code></td>
      <td>Applies to breakpoint <code>xs</code> up</td>
    </tr>
    <tr>
      <td><code>content-cols-sm</code></td>
      <td>Applies to breakpoint <code>sm</code> and up</td>
    </tr>
    <tr>
      <td><code>content-cols-md</code></td>
      <td>Applies to breakpoint <code>md</code> and up</td>
    </tr>
    <tr>
      <td><code>content-cols-lg</code></td>
      <td>Applies to breakpoint <code>xl</code> and up</td>
    </tr>
    <tr>
      <td><code>content-cols-xl</code></td>
      <td>Applies to breakpoint <code>xl</code> and up</td>
    </tr>
  </tbody>
</table>

<HighlightCard>
  <BFormGroup
    id="fieldset-horizontal"
    label-cols-sm="4"
    label-cols-lg="3"
    content-cols-sm
    content-cols-lg="7"
    description="Let us know your name."
    label="Enter your name"
    label-for="input-horizontal"
    >
    <BFormInput id="input-horizontal" />
  </BFormGroup>
  <template #html>

```vue-html
<BFormGroup
  id="fieldset-horizontal"
  label-cols-sm="4"
  label-cols-lg="3"
  content-cols-sm
  content-cols-lg="7"
  description="Let us know your name."
  label="Enter your name"
  label-for="input-horizontal"
>
  <BFormInput id="input-horizontal" />
</BFormGroup>
```

  </template>
</HighlightCard>

You can also set the label cols to `'auto'`.

### Label size

You can control the label text size match the size of your form input(s) via the optional
`label-size` prop. Values can be `'sm'` or `'lg'` for small or large label, respectively. Sizes work
for both horizontal and non-horizontal form groups.

<HighlightCard>
  <BFormGroup label-cols="4" label-cols-lg="2" label-size="sm" label="Small" label-for="input-sm">
    <BFormInput id="input-sm" size="sm" />
  </BFormGroup>
  <BFormGroup label-cols="4" label-cols-lg="2" label="Default" label-for="input-default">
    <BFormInput id="input-default" />
  </BFormGroup>
  <BFormGroup label-cols="4" label-cols-lg="2" label-size="lg" label="Large" label-for="input-lg">
    <BFormInput id="input-lg" size="lg" />
  </BFormGroup>
  <template #html>

```vue-html
<BFormGroup label-cols="4" label-cols-lg="2" label-size="sm" label="Small" label-for="input-sm">
  <BFormInput id="input-sm" size="sm" />
</BFormGroup>

<BFormGroup label-cols="4" label-cols-lg="2" label="Default" label-for="input-default">
  <BFormInput id="input-default" />
</BFormGroup>

<BFormGroup label-cols="4" label-cols-lg="2" label-size="lg" label="Large" label-for="input-lg">
  <BFormInput id="input-lg" size="lg" />
</BFormGroup>
```

  </template>
</HighlightCard>

### Label text alignment

The label text may also optionally be aligned `start`, `center` or `end` by setting the respective
value via the prop `label-text-align` and/or `label-align-{breakpoint}`.

| Prop             | Description                       |
| ---------------- | --------------------------------- |
| `label-align`    | Applies to breakpoint `xs` up     |
| `label-align-sm` | Applies to breakpoint `sm` and up |
| `label-align-md` | Applies to breakpoint `md` and up |
| `label-align-lg` | Applies to breakpoint `lg` and up |
| `label-align-xl` | Applies to breakpoint `xl` and up |

Alignment has no effect if the `label-sr-only` prop is set.

## Nested form groups

Feel free to nest `BFormGroup` components to produce advanced form layouts and semantic grouping
of related form controls:

<HighlightCard>
  <BCard bg-variant="light">
    <BFormGroup
      label-cols-lg="3"
      label="Shipping Address"
      label-size="lg"
      label-class="fw-bold pt-0"
      class="mb-0"
    >
      <BFormGroup
        label="Street:"
        label-for="nested-street"
        label-cols-sm="3"
        label-align-sm="end"
      >
        <BFormInput id="nested-street" />
      </BFormGroup>
      <BFormGroup
        label="City:"
        label-for="nested-city"
        label-cols-sm="3"
        label-align-sm="end"
      >
        <BFormInput id="nested-city" />
      </BFormGroup>
      <BFormGroup
        label="State:"
        label-for="nested-state"
        label-cols-sm="3"
        label-align-sm="end"
      >
        <BFormInput id="nested-state" />
      </BFormGroup>
      <BFormGroup
        label="Country:"
        label-for="nested-country"
        label-cols-sm="3"
        label-align-sm="end"
      >
        <BFormInput id="nested-country" />
      </BFormGroup>
      <BFormGroup
        label="Ship via:"
        label-cols-sm="3"
        label-align-sm="end"
        class="mb-0"
      >
      <BFormRadioGroup
        class="pt-2"
        :options="['Air', 'Courier', 'Mail']"
      />
      </BFormGroup>
    </BFormGroup>
  </BCard>
  <template #html>

```vue-html
<BCard bg-variant="light">
  <BFormGroup
    label-cols-lg="3"
    label="Shipping Address"
    label-size="lg"
    label-class="fw-bold pt-0"
    class="mb-0"
  >
    <BFormGroup
      label="Street:"
      label-for="nested-street"
      label-cols-sm="3"
      label-align-sm="end"
    >
      <BFormInput id="nested-street" />
    </BFormGroup>

    <BFormGroup label="City:" label-for="nested-city" label-cols-sm="3" label-align-sm="end">
      <BFormInput id="nested-city" />
    </BFormGroup>

    <BFormGroup label="State:" label-for="nested-state" label-cols-sm="3" label-align-sm="end">
      <BFormInput id="nested-state" />
    </BFormGroup>

    <BFormGroup
      label="Country:"
      label-for="nested-country"
      label-cols-sm="3"
      label-align-sm="end"
    >
      <BFormInput id="nested-country" />
    </BFormGroup>

    <BFormGroup
      label="Ship via:"
      label-cols-sm="3"
      label-align-sm="end"
      class="mb-0"
    >
      <BFormRadioGroup
        class="pt-2"
        :options="['Air', 'Courier', 'Mail']"
      />
    </BFormGroup>
  </BFormGroup>
</BCard>
```

  </template>
</HighlightCard>

## Disabled form group

Setting the `disabled` prop will disable the rendered `<fieldset>` and, on most browsers, will
disable all the input elements contained within the fieldset.

`disabled` has no effect when `label-for` is set (as a `<fieldset>` element is not rendered).

## Validation state feedback

Bootstrap includes validation styles for `valid` and `invalid` states on most form controls.

Generally speaking, you'll want to use a particular state for specific types of feedback:

- `false` (denotes invalid state) is great for when there is a blocking or required field. A user
  must fill in this field properly to submit the form
- `true` (denotes valid state) is ideal for situations when you have per-field validation throughout
  a form and want to encourage a user through the rest of the fields
- `null` Displays no validation state (neither valid nor invalid)

To apply one of the contextual state icons on `BFormGroup`, set the `state` prop to `false` (for
invalid), `true` (for valid), or `null` (no validation state).

Bootstrap v5 uses sibling CSS selectors of `:invalid` or `:valid` inputs to show the feedback text.
Some form controls (such as checkboxes, radios, and file inputs, or inputs inside input-groups) are
wrapped in additional markup that will no longer make the feedback text a sibling of the input, and
hence the feedback will not show. In these situations you will need to set the validity `state` on
the `BFormGroup` _as well as_ the input.

Feedback will be shown if the parent `BForm` component does _not_ have the `novalidate` prop set
(or set to `false`) along with the `validated` prop set (and the input fails or passes native
browser validation constraints such as `required`). Refer to Bootstrap v4's
[Form component](https://getbootstrap.com/docs/4.5/components/forms/#validation) documentation for
details on validation methods.

You should always provide content via the `invalid-feedback` prop (or slot) to aid users using
assistive technologies when setting a contextual `invalid` state.

### Invalid feedback

Show optional invalid state feedback text to provide textual state feedback (html supported) by
setting the prop `invalid-feedback` or using the named slot `invalid-feedback`.

Invalid feedback is rendered using the
[`BFormInvalidFeedback`](/docs/components/form#helper-components) form sub-component.

### Valid feedback

Show optional valid state feedback text to provide textual state feedback (html supported) by
setting the prop `valid-feedback` or using the named slot `valid-feedback`.

Valid feedback is rendered using the
[`BFormValidFeedback`](/docs/components/form#helper-components) form sub-component.

### Feedback style

By default, when visible, feedback (valid or invalid) will show as a block of text. You can change
the feedback so that it shows as a static tooltip when visible, by setting the prop `tooltip` to
`true`.

### Feedback limitations

**Note:** When using `BInputGroup`, `BFormFile`, `BFormRadioGroup`, `BFormRadio`,
`BFormCheckboxGroup` or `BFormCheckbox` inside a `BFormGroup`, setting an invalid (or
valid) `state` on the `input` alone will **not** trigger the invalid (or valid) feedback to show
(due to limitations with the new Bootstrap v4 validation CSS). To get around this, **you must also**
set the invalid/valid `state` on `BFormGroup`. Native browser validation will **not** trigger
the invalid feedback to show when using one of the above-mentioned form controls.

## Floating labels

BFormGroup supports the new and fancy [Floating labels](https://getbootstrap.com/docs/5.3/forms/floating-labels/) feature of Bootstrap 5.

You can make a floating label by setting the property `floating` to true and specify a placeholder on the `BFormInput`.

### Example

<HighlightCard>
  <BFormGroup
    id="fieldset-1"
    description="Let us know your name."
    label="Name"
    label-for="input-floating-1"
    valid-feedback="Thank you!"
    :invalid-feedback="floatingInvalidFeedback"
    :state="floatingState"
    floating
  >
    <BFormInput id="input-floating-1" v-model="floatingName" :state="floatingState" trim placeholder="Enter your name please" />
  </BFormGroup>
  <template #html>

```vue
<template>
  <BFormGroup
    id="fieldset-1"
    description="Let us know your name."
    label="Name"
    label-for="input-floating-1"
    valid-feedback="Thank you!"
    :invalid-feedback="floatingInvalidFeedback"
    :state="floatingState"
    floating
  >
    <BFormInput
      id="input-floating-1"
      v-model="floatingName"
      :state="floatingState"
      trim
      placeholder="Enter your name please"
    />
  </BFormGroup>
</template>

<script setup lang="ts">
const floatingName = ref('')

const floatingState = computed(() => floatingName.value.length >= 4)
const floatingInvalidFeedback = computed(() =>
  floatingName.value.length > 0 ? 'Enter at least 4 characters.' : 'Please enter something.'
)
</script>
```

  </template>
</HighlightCard>

### Restrictions

There are restrictions on the use of floating labels.

- floating labels do not work in horizontal layout. Horizontal layout precedes the `floating` property. Do not set any of the `content-cols-` or `label-cols-` properties if you want floating labels
- the `BFormInput` must have a placeholder property set

## Accessibility

By default, when no `label-for` value is provided, `BFormGroup` renders the input control(s)
inside an HTML `<fieldset>` element with the label content placed inside the fieldset's `<legend>`
element. By nature of this markup, the legend content is automatically associated to the containing
input control(s).

It is **highly recommended** that you provide a unique `id` prop on your input element and set the
`label-for` prop to this Id, when you have only a single input in the `BFormGroup`.

When multiple form controls are placed inside `BFormGroup` (i.e. a series or radio or checkbox
inputs, or a series of related inputs), **do not set** the `label-for` prop, as a label can only be
associated with a single input. It is best to use the default rendered markup that produces a
`<fieldset>` + `<legend>` which will describe the group of inputs.

When placing multiple form controls inside a `BFormGroup` (and you are not nesting
`BFormGroup` components), it is recommended to give each control its own associated `label`
(which may be visually hidden using the `.visually-hidden` class) and set the labels `for` attribute to the
`id` of the associated input control. Alternatively, you can set the `aria-label` attribute on each
input control instead of using a `label`. For `BFormRadio` and `BFormCheckbox` (or the
group versions), you do not need to set individual labels, as the rendered markup for these types of
inputs already includes a `label` element.

When the `BFormGroup` has a `label-for` prop set, the `aria-describedby` attribute will be
auto-assigned to the input. When the form group has multiple form controls, make sure to set the
attribute to each control yourself by using the `ariaDescribedby` prop value from the optionally
scoped `default` slot.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/formGroup.data'
import ComponentReference from '../../components/ComponentReference.vue'
import ComponentSidebar from '../../components/ComponentSidebar.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BCard, BCardBody, BFormRadioGroup, BFormGroup, BFormInput} from 'bootstrap-vue-next'
import {computed, ref} from 'vue'

const name = ref('')
const state = computed(() => name.value.length >= 4)
const invalidFeedback = computed(() =>
  name.value.length > 0 ? 'Enter at least 4 characters.' : 'Please enter something.'
)

const floatingName = ref('')
const floatingState = computed(() => floatingName.value.length >= 4)
const floatingInvalidFeedback = computed(() =>
  floatingName.value.length > 0 ? 'Enter at least 4 characters.' : 'Please enter something.'
)
</script>
