# Form Tags

<PageHeader>

Lightweight custom tagged input form control, with options for customized interface rendering, duplicate tag detection and optional tag validation.

</PageHeader>

Tags are arrays of short strings, used in various ways such as assigning categories. Use the default user interface, or create your own custom interface via the use of the default scoped slot.

## Basic usage

Tags will have any leading and tailing whitespace removed, and duplicate tags are not permitted. Tags that contain spaces are permitted by default.

Tags are added by clicking the Add button, pressing the <kbd>Enter</kbd> key or optionally when the `change` event fires on the new tag input (i.e. when focus moves from the input). The _Add_ button will only appear when the user has entered a new tag value.

<<< DEMO ./demo/FormTagsBasic.vue

## Tag creation using separators

To auto create tags when a separator character is typed (i.e. <kbd>Space</kbd>, <kbd>,</kbd>, etc.), set the `separator` prop to the character that will trigger the tag to be added. If multiple separator characters are needed, then include them as a single string (i.e. ' ,;'), or an array of characters (i.e. `[' ', ',', ';']`), which will trigger a new tag to be added when <kbd>Space</kbd>, <kbd>,</kbd>, or <kbd>;</kbd> are typed). Separators must be a single character.

The following example will auto create a tag when <kbd>Space</kbd>, <kbd>,</kbd>, or <kbd>;</kbd> are typed:

<<< DEMO ./demo/FormTagsSeparators.vue

## Last tag removal via backspace keypress

When the prop `remove-on-delete` is set, and the user presses <kbd>Backspace</kbd> (or <kbd>Del</kbd>) and the input value is empty, the last tag in the tag list will be removed.

<<< DEMO ./demo/FormTagsRemoval.vue

## Styling Options

Several props are available to alter the basic styling of the default tagged interface:

| Prop          | Description                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| `tag-pills`   | Renders the tags with the appearance of pills                                                         |
| `tag-variant` | Applies one of the Bootstrap contextual variant theme colors to the tags                              |
| `size`        | Set the size of the component's appearance. `sm`, `md` (default), or `lg`                             |
| `placeholder` | The placeholder text for the new tag input element                                                    |
| `state`       | Sets the contextual state of the control. Set to `true` (for valid), `false` (for invalid), or `null` |
| `disabled`    | Places the component in a disabled state                                                              |

For additional props, see the component reference section at the bottom of this page.

The focus and validation state styling of the component relies upon BootstrapVueNext's custom CSS.

<<< DEMO ./demo/FormTagsStyle.vue

## Using with native browser `<form>` submission

The value of the tagged input will not be submitted via standard form `action` unless you provide a name via the name prop. When a name is provided, `<BFormTags>` will create a hidden `<input>` for each tag. The hidden input will have the `name` attribute set to the value of the `name` prop.

The hidden inputs will also be generated when using [custom rendering](#custom-rendering-with-default-scoped-slot) (when the `name` prop is set).

## Tag validation

By default, `<BFormTags>` detects when the user is attempting to enter a (case-sensitive) duplicate tag, and will provide integrated feedback to the user.

You can optionally provide a tag validator method via the `tag-validator` prop. The validator function will receive one argument which is the tag being added, and should return either `true` if the tag passes validation and can be added, or `false` if the tag fails validation (in which case it is not added to the array of tags). Integrated feedback will be provided to the user listing the invalid tag(s) that could not be added.

Tag validation occurs only for tags added via user input. Changes to the tags via the `v-model` are not validated.

<<< DEMO ./demo/FormTagsValidation.vue

### Detecting new, invalid, and duplicate tags

The event `tag-state` will be emitted whenever new tags are entered into the new tag input element, tags that do not pass validation, or duplicate tags are detected. The event handler will receive three arrays as its arguments:

- `validTags` (tags that pass validation)
- `invalidTags` (tags that do not pass validation)
- `duplicateTags` (tags that would be a duplicate of existing or validTags)

The event will be emitted only when the new tag input changes (characters are entered that would be considered part of a tag), or when the user attempts to add a tag (i.e. via <kbd>Enter</kbd>, clicking the **Add** button, or entering a separator). The three arrays will be empty when the user clears the new tag input element (or contains just spaces).

If you are providing your own feedback for duplicate and invalid tags (via the use of the tag-state event) outside of the `<BFormTags>` component, you can disable the built in duplicate and invalid messages by setting the props duplicate-tag-text and invalid-tag-text (respectively) to either an empty string ('') or null.

<<< DEMO ./demo/FormTagsState.vue

## Limiting tags

If you want to limit the amount of tags the user is able to add use the `limit` prop. When configured, adding more tags than the `limit` allows is only possible by the `v-model`.

When the limit of tags is reached, the user is still able to type but adding more tags is disabled. A message is shown to give the user feedback about the reached limit. This message can be configured by the `limit-tags-text` prop. Setting it to either an empty string (`''`) or `null` will disable the feedback.

Removing tags is unaffected by the `limit` prop.

<<< DEMO ./demo/FormTagsLimit.vue

## Custom rendering with default scoped slot

If you fancy a different look and feel for the tags control, you can provide your own custom rendering via the default scoped slot. You can either create your own tags, or use our helper `<BFormTag>` component.

### Scope properties

The default scoped slot provides numerous properties and methods for use in rendering your custom interface. Not all properties or methods are required to generate your interface.

The default slot scope properties are as follows:

| Property           | Type                          | Description                                                                                                                                            |
| ------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `addButtonText`    | `string`                      | The value of the `add-button-text` prop                                                                                                                |
| `addButtonVariant` | `ButtonVariant \| null`       | The value of the `add-button-variant` prop                                                                                                             |
| `addTag`           | `(tag?: string) => void`      | Method to add a new tag. Assumes the tag is the value of the input, but optionally accepts one argument which is the tag value to be added             |
| `disableAddButton` | `boolean`                     | Will be `true` if the tag(s) in the input cannot be added (all invalid and/or duplicates)                                                              |
| `disabled`         | `boolean`                     | `true` if the component is in the disabled state. Value of the `disabled` prop                                                                         |
| `duplicateTagText` | `string`                      | The value of the `duplicate-tag-text` prop                                                                                                             |
| `duplicateTags`    | `string[]`                    | Array of the duplicate tag(s) the user has entered                                                                                                     |
| `form`             | `string`                      | The value of the `form` prop                                                                                                                           |
| `inputAttrs`       | `object`                      | Object of attributes to apply to the new tag input element via `v-bind="inputAttrs"`. See below for details                                            |
| `inputHandlers`    | `object`                      | Object of event handlers to apply to the new tag input element via `v-on="inputHandlers"`. See below for details                                       |
| `inputId`          | `string`                      | ID to add to the new tag input element. Defaults to prop `input-id`. If not provided a unique ID is auto-generated. Also available via 'inputAttrs.id' |
| `inputType`        | `InputType`                   | Type of input to render (normalized version of prop `input-type`)                                                                                      |
| `invalidTagText`   | `string`                      | The value of the `invalid-tag-text` prop                                                                                                               |
| `invalidTags`      | `string[]`                    | Array of the invalid tag(s) the user has entered                                                                                                       |
| `isDuplicate`      | `boolean`                     | `true` if the user input contains duplicate tag(s)                                                                                                     |
| `isInvalid`        | `boolean`                     | `true` if the user input contains invalid tag(s)                                                                                                       |
| `isLimitReached`   | `boolean`                     | `true` if a `limit` is configured and the amount of tags has reached the limit                                                                         |
| `limitTagsText`    | `boolean`                     | The value of the `limit-tags-text` prop                                                                                                                |
| `limit`            | `number`                      | The value of the `limit` prop                                                                                                                          |
| `noTagRemove`      | `boolean`                     | The value of the `no-tag-remove` prop                                                                                                                  |
| `placeholder`      | `string`                      | The value of the `placeholder` prop                                                                                                                    |
| `removeTag`        | `(tag?: string) => void`      | Method to remove a tag. Accepts one argument which is the tag value to remove                                                                          |
| `required`         | `boolean`                     | The value of the `required` prop                                                                                                                       |
| `separator`        | `string \| readonly string[]` | The value of the `separator` prop                                                                                                                      |
| `size`             | `Size`                        | The value of the `size` prop                                                                                                                           |
| `state`            | `ValidationState`             | The contextual state of the component. Value of the `state` prop. Possible values are `true`, `false`, or `null`                                       |
| `tagClass`         | `ClassValue`                  | The value of the `tag-variant` prop. Class (or classes) to apply to the tag elements                                                                   |
| `tagPills`         | `boolean`                     | The value of the `tag-pills` prop                                                                                                                      |
| `tagRemoveLabel`   | `string`                      | Value of the `tag-remove-label` prop. Used as the `aria-label` attribute on the remove button of tags                                                  |
| `tagVariant`       | `ColorVariant \| null`        | Value of the `tag-variant` prop                                                                                                                        |
| `tags`             | `string[]`                    | Array of current tag strings                                                                                                                           |

#### `inputAttrs` object properties

The `inputAttrs` object contains attributes to bind (`v-bind`) to the new tag input element.

| Property | Type      | Description                                                                  |
| -------- | --------- | ---------------------------------------------------------------------------- |
| disabled | `boolean` | The `disabled` attribute for the new tag input. Value of the `disabled` prop |
| form     | `string`  | The value of the `form` prop                                                 |
| id       | `string`  | The `id` attribute for the new tag input                                     |
| value    | `string`  | The `value` attribute for the new tag input                                  |

The `inputAttrs` object will also include any attributes set via the `input-attrs` prop. Note that the above attributes take precedence over any of the same attributes specified in the `input-attrs` prop.

#### `inputHandlers` object properties

The `inputHandlers` object contains event handlers to bind (`v-on`) to the new tag input element.

| Property  | Type                                     | Description                                                                                                                                                                    |
| --------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `change`  | `(e: Readonly<Event> \| string) => void` | Event handler for the input element `change` event. Accepts a single argument of either an event object or a string. Change will trigger adding the tag.                       |
| `input`   | `(e: Readonly<Event> \| string) => void` | Event handler for the input element `input` event. Accepts a single argument of either an event object or a string. Updates the internal v-model for the new tag input element |
| `keydown` | `(e: Readonly<KeyboardEvent>) => void`   | Event handler for the input element keydown `Enter` and `Del` events. Accepts a single argument which is the native keydown event object                                       |

The `change` handler, when needed, must be enabled via the `add-on-change` prop, otherwise it is a noop method.

### Using native browser inputs

The scope contains attributes and event handlers that can be directly bound to native `<input>` or `<select>` elements.

The following example includes the suggested ARIA attributes and roles needed for screen-reader support.

<<< DEMO ./demo/FormTagsNative.vue

### Using custom form components

The scope contains attributes and event handlers that can be directly bound to most custom inputs or select components (the event handlers accept either a string tag value or a native event object). Any component that emits `input` as characters are typed, and (optionally) emits `change` when the input value changes (i.e on blur or select), and uses the prop `value` as the v-model, should work without modification.

In this example, we are using the [`<BFormTag>` helper component](#bformtag-helper-component), but feel free to render tags using standard HTML or components.

<<< DEMO ./demo/FormTagsCustom.vue

The following is an example of using a custom select component for choosing from a pre-defined set of tags:

<<< DEMO ./demo/FormTagsSelect.vue

If the custom input is using custom event names that mimic `input` and `change`, or `keydown`, you can do something similar to below to bind the event handlers:

<<< FRAGMENT ./demo/FormTagsEvents.vue#template{vue-html}

The `inputHandlers.input` handler must be bound to an event that updates with each character entered by the user for the <i>as-you-type</i> tag validation to work.

### Advanced custom rendering usage

In situations where the `inputHandlers` will not work with your custom input, or if you need greater control over tag creation, you can take advantage of the additional properties provided via the default slot's scope.

<<< DEMO ./demo/FormTagsScopedSlot.vue

The following is an example of using the `<BDropdown>` component for choosing or searching from a pre-defined set of tags:

<<< DEMO ./demo/FormTagsDropdown.vue

### Creating wrapper components

You can easily create a custom wrapper component with your preferred rendering style as follows:

<<< FRAGMENT ./demo/FormTagsWrapper.vue

## `<BFormTag>` helper component

BootstrapVueNext provides the helper component `<BFormTag>`, for use with the default scoped slot of `<BFormTags>`. The component is based upon [`<BBadge>`](/docs/components/badge) and [`<BButton>`](/docs/components/button).

`<BFormTag>` supports the same variants as `<BBadge>` and also supports pill styling. Sizing is based on the containing element's font-size.

The remove event is emitted when the `<BFormTag>` remove button is clicked.

Tags that are too wide for their parent container will automatically have their text content truncated with an ellipsis. For this reason, it is always good practice to supply a title via the title prop when using the default slot of `<BFormTag>` for the tag content.

Note `<BFormTag>` requires BootstrapVueNext's custom CSS/SCSS for proper styling.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/formTags.data'
</script>
