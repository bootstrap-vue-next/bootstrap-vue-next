/**
 * Shared type utilities for Options array generics.
 * Used by BFormSelect, BFormRadioGroup, and BFormCheckboxGroup
 * to extract typed values from options arrays.
 */

/**
 * Extracts the value type from a single option item.
 * - Primitives (string/number/boolean): returns the type as-is
 * - Objects with `value` key: infers and returns the type of `value`
 * - Other objects: falls back to `unknown`
 *
 * NOTE: This type statically assumes the value key is `"value"`. When a custom
 * `valueField` prop is used at runtime (e.g., `value-field="id"`), TypeScript
 * cannot track the dynamic key — `modelValue` falls back to `unknown`.
 * Making `valueField` generic would add prohibitive complexity for minimal
 * real-world benefit; users can type their `ref<T>()` explicitly instead.
 */
export type ExtractItemValue<T> = T extends string | number | boolean
  ? T
  : T extends {value: infer V}
    ? V
    : unknown

/**
 * Extracts the union of all possible values from a readonly options array.
 * Maps over each item in the tuple/array using ExtractItemValue.
 */
export type OptionsValues<T extends readonly unknown[]> = T extends readonly (infer Item)[]
  ? ExtractItemValue<Item>
  : unknown
