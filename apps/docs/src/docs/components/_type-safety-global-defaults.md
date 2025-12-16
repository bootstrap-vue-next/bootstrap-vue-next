Due to technical limitations with TypeScript generic components, this component cannot fully participate in the global defaults system provided by `createBootstrap({ components: {...} })` or `BApp`. However:

- ✅ **Commonly-customized props** like `buttonVariant`, `size`, and `state` **DO** support global defaults
- ⚠️ **Other props** will use their hardcoded default values only
- ✅ You can still override any prop on individual component instances

This trade-off enables full type safety with IDE autocomplete and compile-time validation.

### Props That Support Global Defaults

The following props support both **component-specific defaults** and **global defaults**:

- **`button-variant`** - Button variant for button-style checkboxes/radios (default: `'secondary'`)
- **`size`** - Size of the checkbox/radio (default: `'md'`)
- **`state`** - Validation state (default: `null`)

### Default Value Precedence

When using these components, default values are resolved in this order (highest priority first):

1. **Explicit prop on component instance** - Value you provide directly
2. **Component-specific defaults** - Set via `<BApp :defaults="{ BFormCheckboxGroup: {...} }">` or `createBootstrap({ components: { BFormCheckboxGroup: {...} } })`
3. **Global defaults** - Set via `createBootstrap({ components: { global: {...} } })` (plugin pattern only)
4. **Hardcoded default** - Component's built-in fallback value

**Example:**

<!--@include: ./_global-defaults-example.md-->

::: tip
When checkboxes or radios are used within their group component (`BFormCheckboxGroup` or `BFormRadioGroup`), the group's defaults automatically cascade to all child checkboxes/radios. You don't need to set defaults on individual `BFormCheckbox` or `BFormRadio` components.
:::
