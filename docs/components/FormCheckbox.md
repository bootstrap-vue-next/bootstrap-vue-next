# Form Checkbox
For cross browser consistency, `<b-form-checkbox>` uses Bootstrap's custom checkbox input to replace the browser default checkbox input. It is built on top of semantic and accessible markup, so it is a solid replacement for the default checkbox input.

## Button style checkboxes

You can optionally render checkboxes to appear as buttons, either individually, or in a group.

Button style checkboxes will have the class .active automatically applied to the label when they are in the checked state.
### Individual checkbox button style
A single checkbox can be rendered with a button appearance by setting the prop button to true

Change the button variant by setting the button-variant prop to one of the standard Bootstrap button variants (see `<b-button>` for supported variants). The default variant is secondary.

<ClientOnly>
    <b-card>
        <div class="d-flex flex-row">
            <b-form-checkbox class="m-2" button>Button Checkbox</b-form-checkbox>
            <b-form-checkbox class="m-2" button button-variant="danger">Button Checkbox</b-form-checkbox>
        </div>
    </b-card>
</ClientOnly>

``` html
    <b-form-checkbox button>Button Checkbox</b-form-checkbox>
    <b-form-checkbox button button-variant="danger">Button Checkbox</b-form-checkbox>
```
## Switch style checkboxes
Switch styling is supported on `<b-form-checkbox>` components.

Note: If the checkbox is in [button mode](#button-style-checkboxes), switch mode will have no effect.

### Individual checkbox switch style
A single checkbox can be rendered with a switch appearance by setting the prop switch to true

<ClientOnly>
    <b-card>
        <b-form-checkbox switch>Switch Checkbox {{ checked }}</b-form-checkbox>
    </b-card>
</ClientOnly>

``` html
    <b-form-checkbox switch>Switch Checkbox</b-form-checkbox>
```
## Non custom check inputs (plain)
You can have `<b-form-checkbox>` render a browser native checkbox input by setting the plain prop to `false`.

<ClientOnly>
    <b-card>
        <b-form-checkbox :plain="false">Plain Checkbox</b-form-checkbox>
    </b-card>
</ClientOnly>

``` html
    <b-form-checkbox :plain="false">Plain Checkbox</b-form-checkbox>
```

## Contextual states
Bootstrap includes validation styles for valid and invalid states on most form controls.

Generally speaking, you'll want to use a particular state for specific types of feedback:

- `false` (denotes invalid state) is great for when there's a blocking or required field. A user must fill in this field properly to submit the form.
- `true` (denotes valid state) is ideal for situations when you have per-field validation throughout a form and want to encourage a user through the rest of the fields.
- `null` Displays no validation state (neither valid nor invalid)
To apply one of the contextual state icons on `<b-form-checkbox>`, set the state prop to false (for invalid), true (for valid), or null (no validation state).

Note: Contextual states are not supported when in button mode.

<ClientOnly>
    <b-card>
        <b-form-checkbox :state="false">Checkbox state false</b-form-checkbox>
        <b-form-checkbox :state="true">Checkbox state true</b-form-checkbox>
        <b-form-checkbox>Checkbox state null</b-form-checkbox>
    </b-card>
</ClientOnly>

``` html
    <b-form-checkbox :state="false">Checkbox state false</b-form-checkbox>
    <b-form-checkbox :state="true">Checkbox state true</b-form-checkbox>
    <b-form-checkbox>Checkbox state null</b-form-checkbox>
```
## Autofocus
When the autofocus prop is set on `<b-form-checkbox>`, the input will be auto-focused when it is inserted (i.e. mounted) into the document, or re-activated when inside a Vue `<keep-alive>` component. Note that this prop does not set the autofocus attribute on the input, nor can it tell when the input becomes visible.

## Indeterminate (tri-state) support
Normally a checkbox input can only have two states: checked or unchecked. They can have any value, but they either submit that value (checked) or don't (unchecked) with a form submission (although BootstrapVue allows a value for the unchecked state on a single checkbox)

Visually, there are actually three states a checkbox can be in: checked, unchecked, or **indeterminate**.

The indeterminate state is **visual only**. The checkbox is still either checked or unchecked as a value. That means the visual indeterminate state masks the real value of the checkbox, so that better make sense in your UI!

`<b-form-checkbox>` supports setting this visual indeterminate state via the indeterminate prop (defaults to false). Clicking the checkbox will clear its indeterminate state. 

<ClientOnly>
    <b-card>
        <b-form-checkbox :indeterminate="true">Click me to see what happens</b-form-checkbox>
    </b-card>
</ClientOnly>

``` html
    <b-form-checkbox :indeterminate="true">Click me to see what happens</b-form-checkbox>
```
## Component reference
### `<b-form-checkbox>`
### Properties

| Property | Type | Default | Description
| --- | --- | --- | --- |
| `aria-label` | `String` |  | Sets the value of `aria-label` attribute on the rendered element | 
| <nobr>`aria-labeledby`</nobr> | `String` |  | The ID of the element that provides a label for this component. Used as the value for the `aria-labelledby` attribute | 
| `autofocus` | `Boolean` | `false` | When set to `true`, attempts to auto-focus the control when it is mounted, or re-activated when in a keep-alive. Does not set the `autofocus` attribute on the control | 
| `button` | `Boolean` | `false` | When set, renders the checkbox with the appearance of a button | 
| <nobr>`button-variant`</nobr> | `String` | `secondary` | Applies one of Bootstrap's theme colors when in 'button' mode | 
| `checked` | `Boolean,String, Array` | `null` | The current value of the checkbox(es). Must be an array when there are multiple checkboxes | 
| `disabled` | `Boolean` | `false` | When set to `true`, disables the component's functionality and places it in a disabled state | 
| `form` | `String` |  | ID of the form that the form control belongs to. Sets the `form` attribute on the control | 
| `id` | `String` |  | Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed. When not set, an autogenerated id is used. | 
| `indeterminate` | `Boolean` | `false` | Renders the checkbox in an indeterminate state. | 
| `inline` | `Boolean` | `false` | When set, renders the checkbox as an inline element rather than as a 100% width block | 
| `name` | `String` |  | Sets the value of the `name` attribute on the form control | 
| `plain` | `Boolean` | `true` | When false, renders the form control in plain mode, rather than custom styled mode | 
| `required` | `Boolean` |  | Adds the `required` attribute to the form control when `name` is also filled in. | 
| ~~`size`~~ | `String` | `md` | Set the size of the component's appearance. 'sm', 'md' (default), or 'lg' | 
| `state` | `Boolean` |  | Controls the validation state appearance of the component. `true` for valid, `false` for invalid, or `null` for no validation state | 
| `switch` | `Boolean` | `false` | When set, renders the checkbox with the appearance of a switch | 
| `unchecked-value` | `String`,`Boolean` | `false` | Value returned when this checkbox is unchecked.| 
| `value` | `String`,`Boolean`, `Object` | `false` | Value returned when this checkbox is checked.| 

#### v-model


### Slots

| Name | Description
| --- | --- |
| `default` | Content to place in the label of the form checkbox

### Events
| Name | Argument | Description
| --- | --- | --- |
| `change` | `checked` - Value of checkbox(es). When bound to multiple checkboxes, value will be an array | Emitted when selected value(s) is changed due to user interaction
| `input` | `checked` - Value of checkbox(es). When bound to multiple checkboxes, value will be an array | Emitted when selected value(s) is changed



