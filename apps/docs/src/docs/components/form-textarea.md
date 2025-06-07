# Form Textarea

<PageHeader>

Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and contextual states.

</PageHeader>

<<< DEMO ./demo/TextareaOverview.vue

## Control sizing

Set text height using the `size` prop to `sm` or `lg` for small or large respectively.

To control width, place the input inside standard Bootstrap grid column.

<<< DEMO ./demo/TextareaSizing.vue#template{vue-html}

## Displayed rows

To set the height of `BFormTextarea`, set the `rows` prop to the desired number of rows. If no
value is provided to `rows`, then it will default to `2` (the browser default and minimum acceptable
value). Setting it to null or a value below 2 will result in the default of `2` being used.

<<< DEMO ./demo/TextareaDisplayedRows.vue#template{vue-html}

### Disable resize handle

Some web browsers will allow the user to re-size the height of the textarea. To disable this
feature, set the `no-resize` prop to `true`.

<<< DEMO ./demo/TextareaResizeHandle.vue#template{vue-html}

### Auto height

`<BFormTextarea>` can also automatically adjust its height (text rows) to fit the content, even as
the user enters or deletes text. The height of the textarea will either grow or shrink to fit the
content (grow to a maximum of `max-rows` or shrink to a minimum of `rows`).

To set the initial minimum height (in rows), set the `rows` prop to the desired number of lines (or
leave it at the default of `2`), And then set maximum rows that the text area will grow to (before
showing a scrollbar) by setting the `max-rows` prop to the maximum number of lines of text.

To make the height `sticky` (i.e. never shrink), set the `no-auto-shrink` prop to `true`. The
`no-auto-shrink` props has no effect if `max-rows` is not set or is equal to or less than `rows`.

Note that the resize handle of the textarea (if supported by the browser) will automatically be
disabled in auto-height mode.

<<< DEMO ./demo/TextareaAutoHeight.vue#template{vue-html}

## Contextual states

Bootstrap includes validation styles for `valid` and `invalid` states on most form controls.

Generally speaking, you'll want to use a particular state for specific types of feedback:

- `false` (denotes invalid state) is great for when there is a blocking or required field. A user
  must fill in this field properly to submit the form
- `true` (denotes valid state) is ideal for situations when you have per-field validation throughout
  a form and want to encourage a user through the rest of the fields
- `null` Displays no validation state (neither valid nor invalid)

To apply one of the contextual state icons on `BFormTextarea`, set the `state` prop to `false`
(for invalid), `true` (for valid), or `null` (no validation state).

<<< DEMO ./demo/TextareaStates.vue

### Conveying contextual state to assistive technologies and colorblind users

Using these contextual states to denote the state of a form control only provides a visual,
color-based indication, which will not be conveyed to users of assistive technologies - such as
screen readers - or to colorblind users.

Ensure that an alternative indication of state is also provided. For instance, you could include a
hint about state in the form control's `<label>` text itself, or by providing an additional help
text block.

### `aria-invalid` attribute

When `BFormTextarea` has an invalid contextual state (i.e. state is `false`) you may also want
to set the prop `aria-invalid` to `true`, or one of the supported values:

- `false`: No errors (default)
- `true` or `'true'`: The value has failed validation
- `'grammar'`: A grammatical error has been detected
- `'spelling'` A spelling error has been detected

If the `state` prop is set to `false`, and the `aria-invalid` prop is not explicitly set,
`BFormTextarea` will automatically set the `aria-invalid` attribute to `'true'`.

## Formatter support

`BFormTextarea` optionally supports formatting by passing a function reference to the `formatter` prop.

Formatting (when a formatter function is supplied) occurs when the control's native `input` and
`change` events fire. You can use the boolean prop `lazy-formatter` to restrict the formatter
function to being called on the control's native `blur` event.

The `formatter` function receives two arguments: the raw `value` of the input element, and the
native `event` object that triggered the format (if available).

The `formatter` function should return the formatted value as a _string_.

Formatting does not occur if a `formatter` is not provided.

<<< DEMO ./demo/TextareaFormatter.vue

**Note:** With non-lazy formatting, if the cursor is not at the end of the input value, the cursor
may jump to the end _after_ a character is typed. You can use the provided event object and the
`event.target` to access the native input's selection methods and properties to control where the
insertion point is. This is left as an exercise for the reader.

## Readonly plain text

If you want to have `<BFormTextarea readonly>` elements in your form styled as plain text, set the
`plaintext` prop (no need to set `readonly` as it will be set automatically) to remove the default
form field styling and preserve the correct text size, margin, padding and height.

<<< DEMO ./demo/TextareaReadonly.vue

## Floating labels

When using [floating labels](/docs/components/form#floating-labels) in `BFormTextsArea` controls, don't use the `rows` property to set a custom
height. Instead set an explicit `height` (either inline or via custom CSS) as per the
[Bootstrap 5 documentation](https://getbootstrap.com/docs/5.3/forms/floating-labels/#textareas).

<<< DEMO ./demo/TextareaFloatingLabels.vue

## `v-model` modifiers

We support the native modifiers [`trim`, `lazy`, and `number`](https://vuejs.org/guide/essentials/forms.html#modifiers).
They work as documented in vue.js, so there is no longer a need for `trim`, `lazy`, or `number` properties as in BSV.

## Debounce support

As an alternative to the `lazy` modifier prop, `<BFormTextarea>` optionally supports debouncing
user input, updating the `v-model` after a period of idle time from when the last character was
entered by the user (or a `change` event occurs). If the user enters a new character (or deletes
characters) before the idle timeout expires, the timeout is re-started.

To enable debouncing, set the prop `debounce` to any integer greater than zero. The value is
specified in milliseconds. Setting `debounce` to `0` will disable debouncing.

Note: debouncing will _not_ occur if the `lazy` prop is set.

<<< DEMO ./demo/TextareaDebounce.vue

## Autofocus

When the `autofocus` prop is set on `BFormTextarea`, the textarea will be auto-focused when it
is inserted (i.e. **mounted**) into the document or re-activated when inside a Vue `KeepAlive`
component. Note that this prop **does not** set the `autofocus` attribute on the textarea, nor can
it tell when the textarea becomes visible.

## Native and custom events

All native events are supported, without the need for the `.native` modifier.

See the [migration guide](/docs/migration-guide#bform-components) for changes handling of the `change` and `input` events from bootstrap-vue.

## Exposed input properties and methods

`BFormInput` exposes the native input element
(of type [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement))
on the component as a reference with name `element`. You can use that reference to access the native properties and methods.

e.g. `<BFormInput ref="foo" ... />`, `const foo = ref<InstanceType<typeof BFormInput> | null>(null)`, and then
`foo?.value?.element?.methodName` or `foo?.value?.element?.propertyName`

<<< DEMO ./demo/TextareaProperties.vue

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

Refer to [https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement] for more information on
these methods and properties. Support will vary based on input type.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/formTextarea.data'
</script>
