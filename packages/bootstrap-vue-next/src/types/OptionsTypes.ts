/**
 * Shared type utilities for components that work with options arrays
 * and support field mapping (value-field, text-field, disabled-field).
 *
 * This provides a consistent type-safe pattern across:
 * - BFormSelect
 * - BFormRadioGroup
 * - BFormCheckboxGroup
 * - BFormDatalist
 */

/**
 * Base interface for components that work with options arrays
 * and support field name mapping.
 *
 * @template Item - The type of objects in the options array
 * @template ValueKey - The key used for the value field (must be a key of Item)
 *
 * @example
 * ```typescript
 * interface User {
 *   name: string
 *   userId: number
 *   isInactive: boolean
 * }
 *
 * // Component props extending OptionsFieldMappingProps
 * interface MyComponentProps extends OptionsFieldMappingProps<User, 'userId'> {
 *   // ... other props
 * }
 *
 * // TypeScript will validate:
 * // - valueField must be 'userId' (or other User key)
 * // - textField must be a key of User
 * // - disabledField must be a key of User
 * // - options must be User[]
 * ```
 */
export interface OptionsFieldMappingProps<
  Item = Record<string, unknown>,
  ValueKey extends keyof Item = keyof Item,
> {
  /**
   * Field name for the disabled state.
   * Must be a key of the Item type that can be used as a string.
   */
  disabledField?: keyof Item & string

  /**
   * Array of items to display as options.
   * Can be primitives (string/number) or objects with custom field mappings.
   */
  options?: readonly Item[]

  /**
   * Field name for the display text.
   * Must be a key of the Item type that can be used as a string.
   */
  textField?: keyof Item & string

  /**
   * Field name for the option value.
   * Must be a key of the Item type that can be used as a string.
   * The value type will be inferred from this field.
   */
  valueField?: ValueKey & string
}

/**
 * Normalized option type that preserves the value type.
 * Used internally after field mapping is applied.
 *
 * @template T - The type of the value field
 *
 * @example
 * ```typescript
 * // For User interface with userId: number
 * type UserOption = NormalizedOption<number>
 * // Result: { value: number, text: string | undefined, disabled: boolean, ... }
 * ```
 */
export interface NormalizedOption<T = unknown> {
  /**
   * The option value, typed according to the value field
   */
  value: T

  /**
   * Display text for the option
   */
  text: string | undefined

  /**
   * Whether the option is disabled
   */
  disabled: boolean

  /**
   * Allow additional properties from the original object
   */
  [key: string]: unknown
}
