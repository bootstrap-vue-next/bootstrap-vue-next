# Options

## Options Property

`options` can be an array of strings or objects, or a key-value object. Available fields:

- **`value`** The selected value which will be set on `v-model`
- **`disabled`** Disables item for selection
- **`text`** Display text

`value` can be a string, number, or simple object. Avoid using complex types in values.

::: info NOTE
The BootstrapVue field `html` on the `options` object has been deprecated. See our
[Migration Guide](/docs/migration-guide#v-html) for details.
:::

### Options as an array

<<< FRAGMENT ./demo/OptionsArray.ts#snippet{ts}

If an array entry is a string, it will be used for both the generated `value` and `text` fields.

You can mix using strings and [objects](#options-as-an-array-of-objects) in the array.

Internally, BootstrapVueNext will convert the above array to the following array (the
[array of objects](#options-as-an-array-of-objects)) format:

<<< FRAGMENT ./demo/OptionsObjectArray.ts#snippet{ts}

### Options as an array of objects

<<< FRAGMENT ./demo/OptionsObjectArrayRaw.ts#snippet{ts}

If `value` is missing, then `text` will be used as both the `value` and `text` fields.

Internally, BootstrapVueNext will convert the above array to the following array (the
[array of objects](#options-as-an-array-of-objects)) format:

<<< FRAGMENT ./demo/OptionsObjectArrayNormalized.ts#snippet{ts}

### Changing the option field names

If you want to customize the field property names (for example using `name` field for display
`text`) you can easily change them by setting the `text-field`, `value-field`, and
`disabled-field` props to a string that contains the property name you would like to use:
