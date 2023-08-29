# Form

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

BootstrapVueNext form component and helper components that optionally support inline form styles and
validation states. Pair them up with other BootstrapVueNext form control components for an easy
customized, and responsive, layout with a consistent look and feel.

</div>

## Introduction to forms and controls

Be sure to use an appropriate `type` on all inputs (e.g., `email` for email address or `number` for
numerical information) to take advantage of newer input controls like email verification, number
selection, and more.

Here is a quick example to demonstrate BootstrapVueNext's form styles. Keep reading for documentation on
supported components, form layout, and more.

<HighlightCard>
  <BForm @submit="onSubmit" @reset="onReset" v-if="show">
    <BFormGroup
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <BFormInput
        id="input-1"
        v-model="form.email"
        type="email"
        placeholder="Enter email"
        required
      />
    </BFormGroup>
    <BFormGroup id="input-group-2" label="Your Name:" label-for="input-2">
      <BFormInput
        id="input-2"
        v-model="form.name"
        placeholder="Enter name"
        required
      />
    </BFormGroup>
    <BFormGroup id="input-group-3" label="Food:" label-for="input-3">
      <BFormSelect
        id="input-3"
        v-model="form.food"
        :options="foods"
        required
      />
    </BFormGroup>
    <BFormGroup id="input-group-4">
      <BFormCheckboxGroup
        v-model="form.checked"
        id="checkboxes-4"
      >
        <BFormCheckbox value="me">Check me out</BFormCheckbox>
        <BFormCheckbox value="that">Check that out</BFormCheckbox>
      </BFormCheckboxGroup>
    </BFormGroup>
    <BButton type="submit" variant="primary" class="me-2">Submit</BButton>
    <BButton type="reset" variant="danger">Reset</BButton>
  </BForm>
  <BCard class="mt-3" header="Form Data Result">
    <pre class="m-0">{{ form }}</pre>
  </BCard>
  <template #html>

```vue
<template>
  <BForm @submit="onSubmit" @reset="onReset" v-if="show">
    <BFormGroup
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <BFormInput
        id="input-1"
        v-model="form.email"
        type="email"
        placeholder="Enter email"
        required
      />
    </BFormGroup>

    <BFormGroup id="input-group-2" label="Your Name:" label-for="input-2">
      <BFormInput id="input-2" v-model="form.name" placeholder="Enter name" required />
    </BFormGroup>
    <BFormGroup id="input-group-3" label="Food:" label-for="input-3">
      <BFormSelect id="input-3" v-model="form.food" :options="foods" required />
    </BFormGroup>

    <BFormGroup id="input-group-4">
      <BFormCheckboxGroup v-model="form.checked" id="checkboxes-4">
        <BFormCheckbox value="me">Check me out</BFormCheckbox>
        <BFormCheckbox value="that">Check that out</BFormCheckbox>
      </BFormCheckboxGroup>
    </BFormGroup>
    <BButton type="submit" variant="primary">Submit</BButton>
    <BButton type="reset" variant="danger">Reset</BButton>
  </BForm>

  <BCard class="mt-3" header="Form Data Result">
    <pre class="m-0">{{ form }}</pre>
  </BCard>
</template>

<script setup lang="ts">
const foods = [{text: 'Select One', value: null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn']

const form = reactive({
  email: '',
  name: '',
  food: null,
  checked: [],
})
const show = ref(true)

const onSubmit = (event) => {
  event.preventDefault()
  alert(JSON.stringify(form))
}

const onReset = (event) => {
  event.preventDefault()
  // Reset our form values
  form.email = ''
  form.name = ''
  form.food = null
  form.checked = []
  // Trick to reset/clear native browser form validation state
  show.value = false
  nextTick(() => {
    show.value = true
  })
}
</script>
```

  </template>
</HighlightCard>

## Inline form

Bootstrap 5 has dropped form-specific layout classes for the grid system. See [this](https://getbootstrap.com/docs/5.3/migration/#forms).

To create horizontal forms with the grid by add the `.row` class to form groups and use the `.col-_-_` classes to specify the width of your labels and controls. Be sure to add `.col-form-label` to your `<label>`s as well, so they’re vertically centered with their associated form controls.

You may need to manually address the width and alignment of individual form controls with
[spacing utilities](/docs/reference/spacing-classes) (as shown below). Lastly, be sure to always
include a `<label>` with each form control, even if you need to hide it from non-screenreader
visitors with class `.visually-hidden`.

<HighlightCard>
  <BForm>
    <div class="row">
      <label class="col-form-label visually-hidden" for="inline-form-input-name">Name</label>
      <div class="col-lg-3">
        <BFormInput
          id="inline-form-input-name"
          class="mb-2 me-sm-2 mb-sm-0"
          placeholder="Jane Doe"
        />
      </div>
      <label class="col-form-label visually-hidden" for="inline-form-input-username"
        >Username</label
      >
      <div class="col-lg-3">
        <BInputGroup prepend="@" class="col-lg-4 mb-2 me-sm-2 mb-sm-0">
          <BFormInput id="inline-form-input-username" placeholder="Username" />
        </BInputGroup>
      </div>
      <BFormCheckbox class="col-form-label col-lg-2 mb-2 me-sm-2 mb-sm-0"
        >Remember me</BFormCheckbox
      >
      <div class="col-lg-1">
        <BButton variant="primary">Save</BButton>
      </div>
    </div>
  </BForm>
  <template #html>

```vue-html
<BForm>
  <div class="row">
    <label class="col-form-label visually-hidden" for="inline-form-input-name">Name</label>
    <div class="col-lg-3">
      <BFormInput
        id="inline-form-input-name"
        class="mb-2 me-sm-2 mb-sm-0"
        placeholder="Jane Doe"
      />
    </div>

    <label class="col-form-label visually-hidden" for="inline-form-input-username"
      >Username</label
    >
    <div class="col-lg-3">
      <BInputGroup prepend="@" class="col-lg-4 mb-2 me-sm-2 mb-sm-0">
        <BFormInput id="inline-form-input-username" placeholder="Username" />
      </BInputGroup>
    </div>

    <BFormCheckbox class="col-form-label col-lg-2 mb-2 me-sm-2 mb-sm-0"
      >Remember me</BFormCheckbox
    >

    <div class="col-lg-1">
      <BButton variant="primary">Save</BButton>
    </div>
  </div>
</BForm>
```

  </template>
</HighlightCard>

Custom form controls and selects are also supported.

<HighlightCard>
  <BForm>
    <div class="row">
      <label class="col-form-label col-lg-2 me-sm-2" for="inline-form-custom-select-pref"
        >Preference</label
      >
      <div class="col-lg-2">
        <BFormSelect
          id="inline-form-custom-select-pref"
          class="mb-2 me-sm-2 mb-sm-0"
          :options="[{ text: 'Choose...', value: null }, 'One', 'Two', 'Three']"
          :value="null"
        />
      </div>
      <BFormCheckbox class="col-form-label col-lg-3 mb-2 me-sm-2 mb-sm-0"
        >Remember my preference</BFormCheckbox
      >
      <div class="col-lg-2 col-form-label">
        <BButton variant="primary">Save</BButton>
      </div>
    </div>
  </BForm>
  <template #html>

```vue-html
<BForm>
  <div class="row">
    <label class="col-form-label col-lg-2 me-sm-2" for="inline-form-custom-select-pref"
      >Preference</label
    >
    <div class="col-lg-2">
      <BFormSelect
        id="inline-form-custom-select-pref"
        class="mb-2 me-sm-2 mb-sm-0"
        :options="[{ text: 'Choose...', value: null }, 'One', 'Two', 'Three']"
        :value="null"
      />
    </div>
    <BFormCheckbox class="col-form-label col-lg-3 mb-2 me-sm-2 mb-sm-0"
      >Remember my preference</BFormCheckbox
    >
    <div class="col-lg-2 col-form-label">
      <BButton variant="primary">Save</BButton>
    </div>
  </div>
</BForm>
```

  </template>
</HighlightCard>

### Alternatives to hidden labels

Assistive technologies such as screen readers will have trouble with your forms if you do not include
a label for every input. For these inline forms, you can hide the labels using the `.sr-only` class.
There are further alternative methods of providing a label for assistive technologies, such as the
`aria-label`, `aria-labelledby` or `title` attributes. If none of these are present, assistive
technologies may resort to using the `placeholder` attribute, if present, but note that use of
`placeholder` as a replacement for other labelling methods is not advised.

## Related form control and layout components

See also:

- [`BFormInput`](/docs/components/form-input) Textual and text-like inputs
- [`BFormTextarea`](/docs/components/form-textarea) Text area inputs
- [`BFormSelect`](/docs/components/form-select) Select input
- [`BFormRadio`](/docs/components/form-radio) Radio Inputs
- [`BFormCheckbox`](/docs/components/form-checkbox) Checkbox Inputs
- ~~[`BFormFile`](/docs/components/form-file) File Input~~
- ~~[`BFormDatepicker`](/docs/components/form-datepicker) Date picker input~~
- ~~[`BFormSpinbutton`](/docs/components/form-spinbutton) Numerical range spinbutton input~~
- ~~[`BFormTags`](/docs/components/form-tags) Customizable tag input~~
- ~~[`BFormTimepicker`](/docs/components/form-timepicker) Time picker custom form input~~
- ~~[`BFormRating`](/docs/components/form-rating) Star rating custom form input and display~~
- [`BButton`](/docs/components/button) Buttons
- [`BFormGroup`](/docs/components/form-group) Form Input wrapper to generate form-groups that
  support labels, help text and feedback
- [`BInputGroup`](/docs/components/input) Form Inputs with add-ons
- ~~[`BFormRow`](/docs/components/layout) Create grid rows and columns with tighter margins
  (available via the [Layout and grid components](/docs/components/layout))~~

## Form helper components

The following helper components are available with the `Form` plugin:

- `BFormText` Help text blocks for inputs
- `BFormInvalidFeedback` Invalid feedback text blocks for input `invalid` states
- `BFormValidFeedback` Valid feedback text blocks for input `valid` states
- ~~`BFormDatalist` Easily create a `<datalist>` for use with `BFormInput` or plain `<input>`~~

### Form text helper

Display a block of help text below an input with the `BFormText` helper component. text is
displayed with a muted color and slightly smaller font-size.

**Tip:** Help text should be explicitly associated with the form control it relates to using the
`aria-describedby` attribute. This will ensure that assistive technologies, such as screen readers,
will announce this help text when the user focuses or enters the control.

<HighlightCard>
  <BForm @submit.stop.prevent>
    <label for="text-password">Password</label>
    <BFormInput
      type="password"
      id="text-password"
      aria-describedby="password-help-block"
    />
    <BFormText id="password-help-block">
      Your password must be 8-20 characters long, contain letters and numbers, and must not
      contain spaces, special characters, or emoji.
    </BFormText>
  </BForm>
  <template #html>

```vue-html
<BForm @submit.stop.prevent>
  <label for="text-password">Password</label>
  <BFormInput
    type="password"
    id="text-password"
    aria-describedby="password-help-block"
  />
  <BFormText id="password-help-block">
    Your password must be 8-20 characters long, contain letters and numbers, and must not
    contain spaces, special characters, or emoji.
  </BFormText>
</BForm>
```

  </template>
</HighlightCard>

### Feedback helpers

The `BFormValidFeedback` and `BFormInvalidFeedback` helper components will display
feedback (based on input state) as a block of colored text. They rely on being placed after an input
(sibling) and will show based on the browser native validation state of the input. To force them to
show, set the prop `force-show` to `true`, or bind the controls `state` to the `state` prop of the
feedback helper, or set the `was-validated` class on a parent element (such as a form). See the
**Validation** section below for additional details.

Use the optional Boolean prop `tooltip` to change the display from a block to a static tooltip
style. The feedback will typically appear below the form control. When this mode is enabled, it is
important that the parent container have a `position: relative:` css style (or `position-relative`
class). Note that tooltip style feedback may, since its positioning is static, obscure other inputs,
labels, etc.

**Note:** Some form controls, such as
[`BFormRadio`](/docs/components/form-radio#contextual-states),
[`BFormCheckbox`](/docs/components/form-checkbox#contextual-states), and
~~[`BFormFile`](/docs/components/form-file)~~ have wrapper elements which will prevent the feedback
text from automatically showing (as the feedback component is not a direct sibling of the form
control's input). Use the feedback component's `state` prop (bound to the state of the form control)
or the `force-show` prop to display the feedback.

<HighlightCard>
  <BForm  @submit.stop.prevent>
    <label for="feedback-user">User Id</label>
    <BFormInput v-model="userId" :state="validation" id="feedback-user" />
    <BFormInvalidFeedback :state="validation">
      Your user Id must be 5-12 characters long.
    </BFormInvalidFeedback>
    <BFormValidFeedback :state="validation">
      Looks Good.
    </BFormValidFeedback>
    </BForm>
  <template #html>

```vue
<template>
  <BForm @submit.stop.prevent>
    <label for="feedback-user">User Id</label>
    <BFormInput v-model="userId" :state="validation" id="feedback-user" />
    <BFormInvalidFeedback :state="validation">
      Your user Id must be 5-12 characters long.
    </BFormInvalidFeedback>
    <BFormValidFeedback :state="validation"> Looks Good. </BFormValidFeedback>
  </BForm>
</template>

<script setup lang="ts">
const userId = ref('')

const validation = computed(() => userId.value.length > 4 && userId.value.length < 13)
</script>
```

  </template>
</HighlightCard>

## Validation

Disable browser native HTML5 validation by setting the `novalidate` prop to true on `BForm`.

Set the `validated` prop, on `BForm`, to `true` to add the Bootstrap v5 `.was-validated` class to
the form to trigger validation states.

All form controls support a `state` prop, which can be used to set the form control into one
of three contextual states:

- `false` (denotes invalid state) is great for when there is a blocking or required field. A user
  must fill in this field properly to submit the form
- `true` (denotes valid state) is ideal for situations when you have per-field validation throughout
  a form and want to encourage a user through the rest of the fields
- `null` Displays no validation state (neither valid nor invalid)

Refer to the
[Bootstrap v5 Form Validation Documentation](https://getbootstrap.com/docs/5.3/forms/validation/)
for details on the Bootstrap v5 validation states.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/form.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {
  BFormValidFeedback,
  BFormInvalidFeedback,
  BFormText,
  BInputGroup,
  BCard,
  BCardBody,
  BButton,
  BForm,
  BFormCheckboxGroup,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BFormSelect
} from 'bootstrap-vue-next'
import {ref, computed, reactive, nextTick} from 'vue'

const form = reactive({
  email: '',
  name: '',
  food: null,
  checked: []
})

const foods = [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn']
const show = ref(true)

const onSubmit = (event) => {
  event.preventDefault()
  alert(JSON.stringify(form))
}

const onReset = (event) => {
  event.preventDefault()
  // Reset our form values
  form.email = ''
  form.name = ''
  form.food = null
  form.checked = []
  // Trick to reset/clear native browser form validation state
  show.value = false
  nextTick(() => {
    show.value = true
  })
}

const userId = ref('')
const validation = computed(()=> userId.value.length > 4 && userId.value.length < 13)
</script>
