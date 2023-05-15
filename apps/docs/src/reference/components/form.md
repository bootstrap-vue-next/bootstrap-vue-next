# Form

> BootstrapVueNext form component and helper components that optionally support inline form styles and
> validation states. Pair them up with other BootstrapVueNext form control components for an easy
> customized, and responsive, layout with a consistent look and feel.

## Introduction to forms and controls

Be sure to use an appropriate `type` on all inputs (e.g., `email` for email address or `number` for
numerical information) to take advantage of newer input controls like email verification, number
selection, and more.

Here's a quick example to demonstrate BootstrapVueNext's form styles. Keep reading for documentation on
supported components, form layout, and more.

<b-card>

  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

  </div>
</b-card>


```vue-html
<template>
  <b-card>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Food:" label-for="input-3">
          <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
        </b-form-group>
        <b-form-group id="input-group-4">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
          >
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </b-card>
</template>

<script setup lang="ts">
  import {ref, computed, reactive, nextTick} from 'vue'

  const form = reactive({
    email: '',
    name: '',
    food: null,
    checked: [],
  })

  const foods = [{text: 'Select One', value: null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn']
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

## Inline form

Bootstrap 5 has dropped form-specific layout classes for the grid system. See [this](https://getbootstrap.com/docs/5.0/migration/#forms)

To create horizontal forms with the grid by add the `.row` class to form groups and use the `.col-_-_` classes to specify the width of your labels and controls. Be sure to add `.col-form-label` to your `<label>`s as well, so they’re vertically centered with their associated form controls.

You may need to manually address the width and alignment of individual form controls with
[spacing utilities](/docs/reference/spacing-classes) (as shown below). Lastly, be sure to always
include a `<label>` with each form control, even if you need to hide it from non-screenreader
visitors with class `.visually-hidden`.


<b-card>
  <div>
    <b-form>
      <div class="row">
        <label class="col-form-label visually-hidden" for="inline-form-input-name">Name</label>
        <div class="col-lg-3">
          <b-form-input
            id="inline-form-input-name"
            class="mb-2 me-sm-2 mb-sm-0"
            placeholder="Jane Doe"
          ></b-form-input>
        </div>
        <label class="col-form-label visually-hidden" for="inline-form-input-username"
          >Username</label
        >
        <div class="col-lg-3">
          <b-input-group prepend="@" class="col-lg-4 mb-2 me-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" placeholder="Username"></b-form-input>
          </b-input-group>
        </div>
        <b-form-checkbox class="col-form-label col-lg-2 mb-2 me-sm-2 mb-sm-0"
          >Remember me</b-form-checkbox
        >
        <div class="col-lg-1">
          <b-button variant="primary">Save</b-button>
        </div>
      </div>
    </b-form>
  </div>
</b-card>


```vue-html
<b-card>
  <div>
    <b-form>
      <div class="row">
        <label class="col-form-label visually-hidden" for="inline-form-input-name">Name</label>
        <div class="col-lg-3">
          <b-form-input
            id="inline-form-input-name"
            class="mb-2 me-sm-2 mb-sm-0"
            placeholder="Jane Doe"
          ></b-form-input>
        </div>
        <label class="col-form-label visually-hidden" for="inline-form-input-username"
          >Username</label
        >
        <div class="col-lg-3">
          <b-input-group prepend="@" class="col-lg-4 mb-2 me-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" placeholder="Username"></b-form-input>
          </b-input-group>
        </div>
        <b-form-checkbox class="col-form-label col-lg-2 mb-2 me-sm-2 mb-sm-0"
          >Remember me</b-form-checkbox
        >
        <div class="col-lg-1">
          <b-button variant="primary">Save</b-button>
        </div>
      </div>
    </b-form>
  </div>
</b-card>
```

Custom form controls and selects are also supported.


<b-card>
  <div>
    <b-form>
      <div class="row">
        <label class="col-form-label col-lg-2 me-sm-2" for="inline-form-custom-select-pref"
          >Preference</label
        >
        <div class="col-lg-2">
          <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-2 me-sm-2 mb-sm-0"
            :options="[{ text: 'Choose...', value: null }, 'One', 'Two', 'Three']"
            :value="null"
          ></b-form-select>
        </div>
        <b-form-checkbox class="col-form-label col-lg-3 mb-2 me-sm-2 mb-sm-0"
          >Remember my preference</b-form-checkbox
        >
        <div class="col-lg-2 col-form-label">
          <b-button variant="primary">Save</b-button>
        </div>
      </div>
    </b-form>
  </div>
</b-card>


```vue-html
<b-card>
  <div>
    <b-form>
      <div class="row">
        <label class="col-form-label col-lg-2 me-sm-2" for="inline-form-custom-select-pref"
          >Preference</label
        >
        <div class="col-lg-2">
          <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-2 me-sm-2 mb-sm-0"
            :options="[{ text: 'Choose...', value: null }, 'One', 'Two', 'Three']"
            :value="null"
          ></b-form-select>
        </div>
        <b-form-checkbox class="col-form-label col-lg-3 mb-2 me-sm-2 mb-sm-0"
          >Remember my preference</b-form-checkbox
        >
        <div class="col-lg-2 col-form-label">
          <b-button variant="primary">Save</b-button>
        </div>
      </div>
    </b-form>
  </div>
</b-card>
```

### Alternatives to hidden labels

Assistive technologies such as screen readers will have trouble with your forms if you don't include
a label for every input. For these inline forms, you can hide the labels using the `.sr-only` class.
There are further alternative methods of providing a label for assistive technologies, such as the
`aria-label`, `aria-labelledby` or `title` attributes. If none of these are present, assistive
technologies may resort to using the `placeholder` attribute, if present, but note that use of
`placeholder` as a replacement for other labelling methods is not advised.

## Related form control and layout components

See also:

- [`<b-form-input>`](/docs/components/form-input) Textual and text-like inputs
- [`<b-form-textarea>`](/docs/components/form-textarea) Text area inputs
- [`<b-form-select>`](/docs/components/form-select) Select input
- [`<b-form-radio>`](/docs/components/form-radio) Radio Inputs
- [`<b-form-checkbox>`](/docs/components/form-checkbox) Checkbox Inputs
- ~~[`<b-form-file>`](/docs/components/form-file) File Input~~
- ~~[`<b-form-datepicker>`](/docs/components/form-datepicker) Date picker input~~
- ~~[`<b-form-spinbutton>`](/docs/components/form-spinbutton) Numerical range spinbutton input~~
- ~~[`<b-form-tags>`](/docs/components/form-tags) Customizable tag input~~
- ~~[`<b-form-timepicker>`](/docs/components/form-timepicker) Time picker custom form input~~
- ~~[`<b-form-rating>`](/docs/components/form-rating) Star rating custom form input and display~~
- [`<b-button>`](/docs/components/button) Buttons
- [`<b-form-group>`](/docs/components/form-group) Form Input wrapper to generate form-groups that
  support labels, help text and feedback
- [`<b-input-group>`](/docs/components/input) Form Inputs with add-ons
- ~~[`<b-form-row>`](/docs/components/layout) Create grid rows and columns with tighter margins
  (available via the [Layout and grid components](/docs/components/layout))~~

## Form helper components

The following helper components are available with the `Form` plugin:

- `<b-form-text>` Help text blocks for inputs
- `<b-form-invalid-feedback>` Invalid feedback text blocks for input `invalid` states
- `<b-form-valid-feedback>` Valid feedback text blocks for input `valid` states
- ~~`<b-form-datalist>` Easily create a `<datalist>` for use with `<b-form-input>` or plain `<input>`~~

### Form text helper

Display a block of help text below an input with the `<b-form-text>` helper component. text is
displayed with a muted color and slightly smaller font-size.

**Tip:** Help text should be explicitly associated with the form control it relates to using the
`aria-describedby` attribute. This will ensure that assistive technologies, such as screen readers,
will announce this help text when the user focuses or enters the control.


<b-card>
  <div>
    <b-form @submit.stop.prevent>
      <label for="text-password">Password</label>
      <b-form-input
        type="password"
        id="text-password"
        aria-describedby="password-help-block"
      ></b-form-input>
      <b-form-text id="password-help-block">
        Your password must be 8-20 characters long, contain letters and numbers, and must not
        contain spaces, special characters, or emoji.
      </b-form-text>
    </b-form>
  </div>
</b-card>


```vue-html
<b-card>
  <div>
    <b-form @submit.stop.prevent>
      <label for="text-password">Password</label>
      <b-form-input
        type="password"
        id="text-password"
        aria-describedby="password-help-block"
      ></b-form-input>
      <b-form-text id="password-help-block">
        Your password must be 8-20 characters long, contain letters and numbers, and must not
        contain spaces, special characters, or emoji.
      </b-form-text>
    </b-form>
  </div>
</b-card>
```

### Feedback helpers

The `<b-form-valid-feedback>` and `<b-form-invalid-feedback>` helper components will display
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
[`<b-form-radio>`](/docs/components/form-radio#contextual-states),
[`<b-form-checkbox>`](/docs/components/form-checkbox#contextual-states), and
~~[`<b-form-file>`](/docs/components/form-file)~~ have wrapper elements which will prevent the feedback
text from automatically showing (as the feedback component is not a direct sibling of the form
control's input). Use the feedback component's `state` prop (bound to the state of the form control)
or the `force-show` prop to display the feedback.


<b-card>
  <div>
    <b-form  @submit.stop.prevent>
      <label for="feedback-user">User Id</label>
      <b-form-input v-model="userId" :state="validation" id="feedback-user"></b-form-input>
      <b-form-invalid-feedback :state="validation">
        Your user Id must be 5-12 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback>
     </b-form>
  </div>
</b-card>


```vue-html
<template>
  <b-card>
    <div>
      <b-form @submit.stop.prevent>
        <label for="feedback-user">User Id</label>
        <b-form-input v-model="userId" :state="validation" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation">
          Your user Id must be 5-12 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation"> Looks Good. </b-form-valid-feedback>
      </b-form>
    </div>
  </b-card>
</template>

<script setup lang="ts">
  import {ref, computed} from 'vue'

  const userId = ref('')
  const validation = computed(() => userId.value.length > 4 && userId.value.length < 13)
</script>
```

## Validation

Disable browser native HTML5 validation by setting the `novalidate` prop to true on `<b-form>`.

Set the `validated` prop, on `<b-form>`, to `true` to add the Bootstrap v5 `.was-validated` class to
the form to trigger validation states

All form controls support a `state` prop, which can be used to set the form control into one
of three contextual states:

- `false` (denotes invalid state) is great for when there's a blocking or required field. A user
  must fill in this field properly to submit the form.
- `true` (denotes valid state) is ideal for situations when you have per-field validation throughout
  a form and want to encourage a user through the rest of the fields.
- `null` Displays no validation state (neither valid nor invalid)

Refer to the
[Bootstrap v5 Form Validation Documentation](https://getbootstrap.com/docs/5.0/forms/validation/)
for details on the Bootstrap v5 validation states.

<ComponentReference :data="data"></ComponentReference>

<script setup lang="ts">
import {data} from '../../data/components/form.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {
  BFormValidFeedback,
  BFormInvalidFeedback,
  BFormText,
  BInputGroup,
  BCard,
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
