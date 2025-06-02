# Form Input

<PageHeader>

Create various type inputs such as: `text`, `password`, `number`, `url`, `email`, `search`, `range`, `date` and more.

</PageHeader>

<<< DEMO ./demo/FormInputOverview.vue

## Input type

`BFormInput` defaults to a `text` input, but you can set the `type` prop to one of the supported native browser HTML5 types: `text`, `password`, `email`, `number`, `url`, `tel`, `search`, `date`, `datetime-local`, `month`, `week`, `time`, `range`, or `color`.

<<< DEMO ./demo/FormInputTypes.vue

If the `type` prop is set to an input type that is not supported (see above), a `text` input will be rendered and a console warning will be issued.

::: warning
**Caveats with input types:**

- Not all browsers support all input types, nor do some types render in the same format across
  browser types/versions. Refer to [Can I use](https://caniuse.com/?search=input)
- Browsers that do not support a particular type will fall back to a `text` input type (even though
  the rendered `type` attribute markup shows the requested type)
- No testing is performed to see if the requested input type is supported by the browser
- Chrome lost support for `datetime` in version 26, Opera in version 15, and Safari in iOS 7
  Instead of using `datetime`, since support should be deprecated, use `date` and `time` as two
  separate inputs
- `date` and `time` inputs are native browser types, and are not a custom date/time picker
- For date and time style inputs, where supported, the displayed value in the GUI may be different
  from what is returned by its value (i.e. ordering of year-month-date)
- Regardless of input type, the value is **always** returned as a string representation
- `v-model.lazy` is not supported by `BFormInput` (nor any custom Vue component). Use the `lazy`
  prop instead
- Older version of Firefox may not support `readonly` for `range` type inputs
- Input types that do not support `min`, `max` and `step` (i.e. `text`, `password`, `tel`, `email`,
  `url`, etc.) will silently ignore these values (although they will still be rendered on the input
  markup) if values are provided

**Caveats with predictive text entry and IME composition entry:**

- When using predictive text auto-suggested words, the `v-model` will not update until the
  auto-suggested word is selected (or a space is typed). If an auto suggested word is not selected,
  the v-model will update with the current _displayed text_ of the input when the input is blurred
- When using IME composition (ie. Chinese, Japanese, etc.), the `v-model` will not update until the
  IME composition is completed
  :::

### Range type input

Inputs with type `range` render using Bootstrap v5's `.form-range` class. The track (the
background) and thumb (the value) are both styled to appear the same across browsers.

Range inputs have implicit values for `min` and `max` of `0` and `100` respectively. You may specify
new values for those using the `min` and `max` props.

<<< DEMO ./demo/FormInputRange.vue

By default, range inputs "snap" to integer values. To change this, you can specify a `step` value.
In the example below, we double the number of steps by using step="0.5".

<<< DEMO ./demo/FormInputRangeStep.vue

::: info NOTE
Range inputs (as do all input types) return their value as a string. You may need to
convert the value to a native number by using `Number(value)`, `parseInt(value, 10)`,
`parseFloat(value)`, or use the `number` prop.
:::

## Control sizing

Set heights using the `size` prop to `sm` or `lg` for small or large respectively.

To control width, place the input inside standard Bootstrap grid column.

<<< DEMO ./demo/FormInputSize.vue#template{vue-html}

::: info NOTE
Input type `range` currently does not support control sizing. If is placed inside a
`BInputGroup` which has its `size` prop set, then the associated controls as sized,
but the range control stays the same size.

The native HTML `<input>` attribute `size` (which sets a horizontal width on the `<input>`
in characters) is not supported. Use styling, utility classes, or the layout rows (`BRow`) and
columns (`BCol`) to set the desired width.
:::

## Contextual states

Bootstrap includes validation styles for `valid` and `invalid` states on most form controls.

Generally speaking, you'll want to use a particular state for specific types of feedback:

- `false` (denotes invalid state) is great for when there is a blocking or required field. A user
  must fill in this field properly to submit the form
- `true` (denotes valid state) is ideal for situations when you have per-field validation throughout
  a form and want to encourage a user through the rest of the fields
- `null` Displays no validation state (neither valid nor invalid)

To apply one of the contextual state icons on `BFormInput`, set the `state` prop to `false` (for
invalid), `true` (for valid), or `null` (no validation state).

<<< DEMO ./demo/FormInputState.vue#template{vue-html}

## Live Example

<<< DEMO ./demo/FormInputStateLive.vue

::: info TIP
Use the [`BFormGroup`](/docs/components/form-group) component to automatically generate markup similar to above.
:::

## Conveying contextual state to assistive technologies and colorblind users

Using these contextual sta tes to denote the state of a form control only provides a visual,
color-based indication, which will not be conveyed to users of assistive technologies - such as
screen readers - or to colorblind users.

Ensure that an alternative indication of state is also provided. For instance, you could include a
hint about state in the form control's `<label>` text itself, or by providing an additional help
text block.

Specifically for assistive technologies, invalid form controls can also be assigned an
`aria-invalid="true"` attribute.

When `BFormInput` has an invalid contextual state (i.e. state is `false`) you may also want to
set the `BFormInput` prop `aria-invalid` to `true`, or to one of the supported values:

- `false`: Convey no errors detected (default)
- `true` (or `'true'`): Convey that the value has failed validation
- `'grammar'` Convey that a grammatical error has been detected
- `'spelling'` Convey that a spelling error has been detected

If `aria-invalid` is not explicitly set and `state` is set to `false`, then the `aria-invalid`
attribute on the input will automatically be set to `'true'`;

## Formatter support

`BFormInput` optionally supports formatting by passing a function reference to the `formatter`
prop.

Formatting (when a formatter function is supplied) occurs when the control's native `input` and
`change` events fire. You can use the boolean prop `lazy-formatter` to restrict the formatter
function to being called on the control's native `blur` event.

The `formatter` function receives two arguments: the raw `value` of the input element, and the
native `event` object that triggered the format (if available).

The `formatter` function should return the formatted value as a _string_.

Formatting does not occur if a `formatter` is not provided.

<<< DEMO ./demo/FormInputFormatter.vue

::: info NOTE
When using a non-text-like input (i.e. `color`, `range`, `date`, `number`, `email` etc.),
ensure that your formatter function returns the value in the expected format (`date` ->
'2000-06-01', `color` -> '#ff0000', etc.) for the input type. The formatter **must** return the
value as a _string_.

With non-lazy formatting, if the cursor is not at the end of the input value, the cursor
may jump to the end _after_ a character is typed. You can use the provided event object and the
`event.target` to access the native input's selection methods and properties to control where the
insertion point is. This is left as an exercise for the reader.
:::

## Readonly plain text

If you want to have `<BFormInput readonly>` elements in your form styled as plain text, set the
`plaintext` prop (no need to set `readonly`) to remove the default form field styling and preserve
the correct margin and padding.

The `plaintext` option is not supported by input types `color` or `range`.

## Disabling mousewheel events on numeric-like inputs

<NotYetImplemented/>

## Datalist support

Datalists are a native HTML tag `<datalist>` that contains a list of `<option>` tags. By assigning
an ID to the datalist tag, the list can be references from a text input by adding a `list`
attribute.

This gives the input the behavior of a combo box or auto-complete, allowing existing values to be
chosen, or new values to be entered.

<<< DEMO ./demo/FormInputDatalist.vue

The above is a 'native' implementation of `datalist`. BootstrapVueNext provides the form helper component
[`<BFormDatalist>`](/docs/components/form/#datalist-helper) for quickly creating a `<datalist>`
from an array of options using the same options object as [`<BFormSelect>`](/docs/components/form-select#options-property).

**Notes:**

- Datalists work in conjunction with the browser's built in auto-complete, displaying datalist
  options first, followed by auto-complete options. To only display datalist options, set
  `autocomplete="off"` on `<BFormInput>`.
- Datalists **cannot** be applied to input fields with type `password`, `range` or `color`.
- Not all browsers fully support `<datalist>` and implementations can be buggy. It is recommended
  that datalists be treated as an enhancement and not be relied upon at this time. Check
  [Can I use](https://caniuse.com/datalist) for full support details on all browsers. In particular
  chromium based browsers display both the text and value of object in the options list.

## `v-model` modifiers

We support the native modifiers [`trim`, `lazy`, and `number`](https://vuejs.org/guide/essentials/forms.html#modifiers).
They work as documented in vue.js, so there is no longer a need for `trim`, `lazy`, or `number` properties as in BSV.

## Debounce support

As an alternative to the `lazy` modifier prop, `<BFormInput>` optionally supports debouncing user
input, updating the `v-model` after a period of idle time from when the last character was entered
by the user (or a `change` event occurs). If the user enters a new character (or deletes characters)
before the idle timeout expires, the timeout is re-started.

To enable debouncing, set the prop `debounce` to any integer greater than zero. The value is
specified in milliseconds. Setting `debounce` to `0` will disable debouncing.

::: info NOTE
Debouncing will _not_ occur if the `lazy` prop is set.
:::

<<< DEMO ./demo/FormInputDatalist.vue

## Autofocus

When the `autofocus` prop is set, the input will be auto-focused when it is inserted (i.e.
**mounted**) into the document, or re-activated when inside a Vue `KeepAlive` component. Note
that this prop **does not** set the `autofocus` attribute on the input, nor can it tell when the
input becomes visible.

## Native and custom events

All native events are supported, without the need for the `.native` modifier.

See the [migration guide](/docs/migration-guide#bform-components) for changes handling of the `change` and `input` events from bootstrap-vue.

## Exposed input element

`BFormInput` exposes the native input element
(of type [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement))
on the component as a reference with name `element`. You can use that reference to access the native properties and methods.

e.g. `<BFormInput ref="foo" ... />`, `const foo = ref<InstanceType<typeof BFormInput> | null>(null)`, and then
`foo?.value?.element?.methodName` or `foo?.value?.element?.propertyName`

### Input properties

| Property              | Notes      |
| --------------------- | ---------- |
| `.selectionStart`     | Read/Write |
| `.selectionEnd`       | Read/Write |
| `.selectionDirection` | Read/Write |
| `.validity`           | Read only  |
| `.validationMessage`  | Read only  |
| `.willValidate`       | Read only  |

### Input methods

| Method                 | Notes                             |
| ---------------------- | --------------------------------- |
| `.focus()`             | Focus the input                   |
| `.blur()`              | Remove focus from the input       |
| `.select()`            | Selects all text within the input |
| `.setSelectionRange()` |                                   |
| `.setRangeText()`      |                                   |
| `.setCustomValidity()` |                                   |
| `.checkValidity()`     |                                   |
| `.reportValidity()`    |                                   |

Refer to [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) for more information on
these methods and properties. Support will vary based on input type.

`BFormInput` also exposes two methods on the component: `focus` and `blur`.

e.g. With the same setup as above, call `foo?.value?.element?.focus` to set the foccus on the input element.

<<< DEMO ./demo/FormInputMethods.vue

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/formInput.data'
</script>
