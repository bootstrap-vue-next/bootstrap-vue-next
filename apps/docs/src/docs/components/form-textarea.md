# Form Textarea

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">

Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and contextual states.

</div>

<HighlightCard>
  <BFormTextarea
    id="textarea"
    v-model="textEx1"
    placeholder="Enter something..."
    rows="3"
  />
  <pre class="mt-3 mb-0">{{ textEx1 }}</pre>
  <template #html>

```vue
<template>
  <BFormTextarea id="textarea" v-model="textEx1" placeholder="Enter something..." rows="3" />

  <pre class="mt-3 mb-0">{{ textEx1 }}</pre>
</template>

<script setup lang="ts">
const textEx1 = ref()
</script>
```

  </template>
</HighlightCard>

## Control sizing

Set text height using the `size` prop to `sm` or `lg` for small or large respectively.

To control width, place the input inside standard Bootstrap grid column.

<HighlightCard>
  <BRow>
    <BCol sm="2">
      <label for="textarea-small">Small:</label>
    </BCol>
    <BCol sm="10">
      <BFormTextarea id="textarea-small" size="sm" placeholder="Small textarea" />
    </BCol>
  </BRow>
  <BRow class="mt-2">
    <BCol sm="2">
      <label for="textarea-default">Default:</label>
    </BCol>
    <BCol sm="10">
      <BFormTextarea id="textarea-default" placeholder="Default textarea" />
    </BCol>
  </BRow>
  <BRow class="mt-2">
    <BCol sm="2">
      <label for="textarea-large">Large:</label>
    </BCol>
    <BCol sm="10">
      <BFormTextarea id="textarea-large" size="lg" placeholder="Large textarea" />
    </BCol>
  </BRow>
  <template #html>

```vue-html
<BRow>
  <BCol sm="2">
    <label for="textarea-small">Small:</label>
  </BCol>
  <BCol sm="10">
    <BFormTextarea id="textarea-small" size="sm" placeholder="Small textarea" />
  </BCol>
</BRow>

<BRow class="mt-2">
  <BCol sm="2">
    <label for="textarea-default">Default:</label>
  </BCol>
  <BCol sm="10">
    <BFormTextarea id="textarea-default" placeholder="Default textarea" />
  </BCol>
</BRow>

<BRow class="mt-2">
  <BCol sm="2">
    <label for="textarea-large">Large:</label>
  </BCol>
  <BCol sm="10">
    <BFormTextarea id="textarea-large" size="lg" placeholder="Large textarea" />
  </BCol>
</BRow>
```

  </template>
</HighlightCard>

## Displayed rows

To set the height of `BFormTextarea`, set the `rows` prop to the desired number of rows. If no
value is provided to `rows`, then it will default to `2` (the browser default and minimum acceptable
value). Setting it to null or a value below 2 will result in the default of `2` being used.

<HighlightCard>
  <BFormTextarea id="textarea-rows" placeholder="Tall textarea" rows="8" />
  <template #html>

```vue
<BFormTextarea id="textarea-rows" placeholder="Tall textarea" rows="8" />
```

  </template>
</HighlightCard>

### Disable resize handle

Some web browsers will allow the user to re-size the height of the textarea. To disable this
feature, set the `no-resize` prop to `true`.

<HighlightCard>
  <BFormTextarea
    id="textarea-no-resize"
    placeholder="Fixed height textarea"
    rows="3"
    no-resize
  />
  <template #html>

```vue
<BFormTextarea id="textarea-no-resize" placeholder="Fixed height textarea" rows="3" no-resize />
```

  </template>
</HighlightCard>

### Auto height

<NotYetImplemented />

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

<HighlightCard>
  <BFormTextarea
    id="textarea-state"
    v-model="textStates"
    :state="textStates.length >= 10"
    placeholder="Enter at least 10 characters"
    rows="3"
  />
  <template #html>

```vue
<template>
  <BFormTextarea
    id="textarea-state"
    v-model="textStates"
    :state="textStates.length >= 10"
    placeholder="Enter at least 10 characters"
    rows="3"
  />
</template>

<script setup lang="ts">
const textStates = ref('')
</script>
```

  </template>
</HighlightCard>

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

<HighlightCard>
  <BFormGroup
    label="Textarea with formatter (on input)"
    label-for="textarea-formatter"
    description="We will convert your text to lowercase instantly"
    class="mb-0"
  >
    <BFormTextarea
      id="textarea-formatter"
      v-model="textFormatter"
      placeholder="Enter your text"
      :formatter="formatter"
    />
  </BFormGroup>
  <p style="white-space: pre-line"><b>Value:</b> {{ textFormatter }}</p>
  <BFormGroup
    label="Textarea with lazy formatter (on blur)"
    label-for="textarea-lazy"
    description="This one is a little lazy!"
    class="mb-0"
  >
    <BFormTextarea
      id="textarea-lazy"
      v-model="textFormatter2"
      placeholder="Enter your text"
      lazy-formatter
      :formatter="formatter"
    />
  </BFormGroup>
  <p class="mb-0" style="white-space: pre-line"><b>Value:</b> {{ textFormatter2 }}</p>
  <template #html>

```vue
<template>
  <BFormGroup
    label="Textarea with formatter (on input)"
    label-for="textarea-formatter"
    description="We will convert your text to lowercase instantly"
    class="mb-0"
  >
    <BFormTextarea
      id="textarea-formatter"
      v-model="textFormatter"
      placeholder="Enter your text"
      :formatter="formatter"
    />
  </BFormGroup>

  <p style="white-space: pre-line"><b>Value:</b> {{ textFormatter }}</p>

  <BFormGroup
    label="Textarea with lazy formatter (on blur)"
    label-for="textarea-lazy"
    description="This one is a little lazy!"
    class="mb-0"
  >
    <BFormTextarea
      id="textarea-lazy"
      v-model="textFormatter2"
      placeholder="Enter your text"
      lazy-formatter
      :formatter="formatter"
    />
  </BFormGroup>

  <p class="mb-0" style="white-space: pre-line"><b>Value:</b> {{ textFormatter2 }}</p>
</template>

<script setup lang="ts">
const textFormatter = ref('')
const textFormatter2 = ref('')

const formatter = (value) => value.toLowerCase()
</script>
```

  </template>
</HighlightCard>

**Note:** With non-lazy formatting, if the cursor is not at the end of the input value, the cursor
may jump to the end _after_ a character is typed. You can use the provided event object and the
`event.target` to access the native input's selection methods and properties to control where the
insertion point is. This is left as an exercise for the reader.

## Readonly plain text

If you want to have `<BFormTextarea readonly>` elements in your form styled as plain text, set the
`plaintext` prop (no need to set `readonly` as it will be set automatically) to remove the default
form field styling and preserve the correct text size, margin, padding and height.

<HighlightCard>
  <BFormTextarea id="textarea-plaintext" plaintext :model-value="textReadOnly" />
  <template #html>

```vue
<template>
  <BFormTextarea id="textarea-plaintext" plaintext :model-value="textReadOnly" />
</template>

<script setup lang="ts">
const textReadOnly = 'This is some text.\nIt is read only and does not look like an input.'
</script>
```

  </template>
</HighlightCard>

## Floating labels

When using [floating labels](/docs/components/form#floating-labels) in `BFormTextsArea` controls, don't use the `rows` property to set a custom
height. Instead set an explicit `height` (either inline or via custom CSS) as per the
[Bootstrap 5 documentation](https://getbootstrap.com/docs/5.3/forms/floating-labels/#textareas).

<HighlightCard>
  <BFormFloatingLabel label="type something" label-for="textarea-floatinglabel">
    <BFormTextarea
      id="textarea-floatinglabel"
      v-model="textFloatingLabel"
      placeholder="Enter something..."
      style="height: 6rem"
    />
  </BFormFloatingLabel>

  <pre class="mt-3 mb-0">{{ textFloatingLabel }}</pre>

<template #html>

```vue
<template>
  <BFormFloatingLabel label="type something" label-for="textarea-floatinglabel">
    <BFormTextarea
      id="textarea-floatinglabel"
      v-model="textFloatingLabel"
      placeholder="Enter something..."
      style="height: 6rem"
    />
  </BFormFloatingLabel>

  <pre class="mt-3 mb-0">{{ textFloatingLabel }}</pre>
</template>

<script setup lang="ts">
const textFloatingLabel = ref()
</script>
```

  </template>
</HighlightCard>

## `v-model` modifiers

Vue does not officially support `.lazy`, `.trim`, and `.number` modifiers on the `v-model` of custom
component based inputs, and may generate a bad user experience. Avoid using Vue's native modifiers.

To get around this, `BFormTextarea` has three boolean props `trim`, `number`, and `lazy` which
emulate the native Vue `v-model` modifiers `.trim` and `.number` and `.lazy` respectively. The
`lazy` prop will update the v-model on `change`/`blur`events.

**Notes:**

- The `number` prop takes precedence over the `trim` prop (i.e. `trim` will have no effect when
  `number` is set)
- When using the `number` prop, and if the value can be parsed as a number (via `parseFloat`) it
  will return a value of type `Number` to the `v-model`, otherwise the original input value is
  returned as type `String`. This is the same behaviour as the native `.number` modifier
- The `trim` and `number` modifier props do not affect the value returned by the `input` or `change`
  events. These events will always return the string value of the content of `<textarea>` after
  optional formatting (which may not match the value returned via the `v-model` `update` event,
  which handles the modifiers)

## Debounce support

As an alternative to the `lazy` modifier prop, `<b-form-textarea>` optionally supports debouncing
user input, updating the `v-model` after a period of idle time from when the last character was
entered by the user (or a `change` event occurs). If the user enters a new character (or deletes
characters) before the idle timeout expires, the timeout is re-started.

To enable debouncing, set the prop `debounce` to any integer greater than zero. The value is
specified in milliseconds. Setting `debounce` to `0` will disable debouncing.

Note: debouncing will _not_ occur if the `lazy` prop is set.

<HighlightCard>
  <BFormTextarea id="textarea-debounce" v-model="textDebounce" rows="3" debounce="500" />

  <pre class="mt-3 mb-0">{{ textDebounce }}</pre>

<template #html>

```vue
<template>
  <BFormTextarea id="textarea-debounce" v-model="textDebounce" rows="3" debounce="500" />

  <pre class="mt-3 mb-0">{{ textDebounce }}</pre>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {BFormTextarea} from './components'
const textDebounce = ref()
</script>
```

  </template>
</HighlightCard>

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

<HighlightCard>
  <BFormTextarea
    id="textarea"
    ref="textArea"
    v-model="textSelectEx"
    placeholder="Enter something..."
    rows="3"
  />

<button class="btn btn-primary mt-1" @click="selectText">Select text</button>
<template #html>

```vue
<template>
  <BFormTextarea
    id="textarea"
    ref="textArea"
    v-model="textSelectEx"
    placeholder="Enter something..."
    rows="3"
  />

  <button class="btn btn-primary mt-1" @click="selectText">Select text</button>
</template>

<script setup lang="ts">
const textSelectEx = ref('')
const textArea = ref<InstanceType<typeof BFormTextarea> | null>(null)

const selectText = () => {
  textArea?.value?.element?.select()
}
</script>
```

  </template>
</HighlightCard>

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

Refer to https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement for more information on
these methods and properties. Support will vary based on input type.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/formTextarea.data'
import {ref, computed} from 'vue'
import ComponentReference from '../../components/ComponentReference.vue'
import ComponentSidebar from '../../components/ComponentSidebar.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import NotYetImplemented from '../../components/NotYetImplemented.vue'
import {BFormFloatingLabel, BFormGroup, BRow, BCol, BFormTextarea, BCard, BCardBody} from 'bootstrap-vue-next'

const textEx1 = ref()
const textStates = ref('')

const textFormatter = ref('')
const textFormatter2 = ref('')

const formatter = (value) => value.toLowerCase()

const textReadOnly = "This is some text.\nIt is read only and does not look like an input."

const textFloatingLabel = ref()
const textDebounce = ref()
const textSelectEx = ref('')
const textArea = ref<InstanceType<typeof BFormTextarea> | null>(null)
const selectText = () => {
  textArea?.value?.element?.select()
}
</script>
