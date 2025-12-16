# Type-Safe Form Components Implementation

## Overview

The type-safe form components (`BFormSelect`, `BFormRadioGroup`, `BFormCheckboxGroup`) provide complete TypeScript type safety through generic type parameters. This implementation achieves two key type safety goals:

1. **Type-safe options array** - TypeScript knows the structure of items in the array
2. **Type-safe field name props** - Field names are validated against the actual object keys

This results in:

- Strongly typed options arrays
- Field name validation with IDE autocomplete
- Automatic v-model type inference
- Compile-time error detection
- Zero runtime overhead

## Implementation Details

### Generic Type Parameters

The components use two generic type parameters:

- **`Item`** - The type of objects in the `options` array (default: `Record<string, unknown>`)
- **`ValueKey`** - The specific key of `Item` used for the value field (default: `keyof Item`)

```typescript
// ComponentProps.ts
export interface BFormSelectProps<
  Item = Record<string, unknown>,
  ValueKey extends keyof Item = keyof Item,
> {
  options?: readonly Item[]
  modelValue?: Item[ValueKey] | readonly Item[ValueKey][]
  valueField?: ValueKey & string
  textField?: keyof Item & string
  disabledField?: keyof Item & string
  labelField?: keyof Item & string
  optionsField?: keyof Item & string
}
```

### How It Works

1. User provides typed options: `const users: User[] = [...]`
2. Component infers `Item = User`
3. User specifies `value-field="id"`
4. Component infers `ValueKey = 'id'`
5. Component sets `modelValue` type to `User['id']`
6. v-model gets proper type automatically

### Component Declaration

Components use Vue 3.3+ generic script syntax:

```vue
<script
  setup
  lang="ts"
  generic="Item = Record<string, unknown>, ValueKey extends keyof Item = keyof Item"
>
const props = defineProps<BFormSelectProps<Item, ValueKey>>()
const modelValue = defineModel<Item[ValueKey] | readonly Item[ValueKey][]>()
</script>
```

## Type Safety Goal #1: Typed Options Array

### What This Achieves

The `options` prop is strongly typed, so TypeScript:

- Knows the exact structure of items in the array
- Can infer the `modelValue` type from the selected field
- Preserves types through normalization
- Validates type compatibility between options and v-model

### Examples

#### ✅ Type-Safe Usage

```typescript
interface User {
  name: string
  userId: number
  isInactive: boolean
}

const users: User[] = [
  { name: 'John Doe', userId: 1, isInactive: false },
  { name: 'Jane Smith', userId: 2, isInactive: true }
]

const selectedUserId = ref<number>(1)

// TypeScript infers:
// - Item = User
// - ValueKey = "userId"
// - modelValue type = number
<BFormSelect
  :options="users"
  text-field="name"
  value-field="userId"
  disabled-field="isInactive"
  v-model="selectedUserId"
/>
```

**What TypeScript knows:**

- `options` is `User[]` (not `unknown[]`)
- `selectedUserId` must be `number` (from `User["userId"]`)
- After normalization: `SelectOption<number>[]` (preserves the value type)

#### ✅ Works with Simple Arrays

```typescript
const colors = ['red', 'green', 'blue']
const selectedColor = ref<string>('red')

// TypeScript infers:
// - Item = string
// - modelValue type = string
<BFormSelect
  :options="colors"
  v-model="selectedColor"
/>
```

#### ✅ Works with Default Shape

```typescript
const options = [
  { text: 'Option 1', value: 1 },
  { text: 'Option 2', value: 2 }
]

const selected = ref<number>(1)

// TypeScript infers:
// - Item = { text: string, value: number }
// - ValueKey = "value" (default)
// - modelValue type = number
<BFormSelect
  :options="options"
  v-model="selected"
/>
```

#### ❌ Type Error: Wrong modelValue Type

```typescript
interface User {
  name: string
  userId: number
}

const users: User[] = [...]
const selectedId = ref<string>('wrong')  // Should be number!

<BFormSelect
  :options="users"
  value-field="userId"
  v-model="selectedId"
/>
// ❌ TypeScript Error:
// Type 'string' is not assignable to type 'number | readonly number[] | undefined'
```

#### ❌ Type Error: Non-existent Field

```typescript
interface User {
  name: string
  userId: number
}

const users: User[] = [...]
const selected = ref<string>()

<BFormSelect
  :options="users"
  value-field="email"  // Field doesn't exist!
  v-model="selected"
/>
// ❌ TypeScript Error:
// Type '"email"' is not assignable to type '"name" | "userId" | undefined'
```

### Multiple Select

```typescript
interface Product {
  productName: string
  sku: string
  price: number
}

const products: Product[] = [...]
const selectedSkus = ref<string[]>([])

// TypeScript knows selectedSkus must be string[] (from Product["sku"])
<BFormSelect
  :options="products"
  text-field="productName"
  value-field="sku"
  v-model="selectedSkus"
  multiple
/>
```

## Type Safety Goal #2: Field Name Validation

### What This Achieves

Field name props (`textField`, `valueField`, `disabledField`, etc.) are constrained to actual keys of the `Item` type, so TypeScript:

- Validates that field names exist on the object
- Provides autocomplete for available fields
- Catches typos at compile time

### Examples

#### ✅ Valid Field Names

```typescript
interface Employee {
  fullName: string
  employeeId: number
  isActive: boolean
  department: string
}

const employees: Employee[] = [...]

<BFormSelect
  :options="employees"
  text-field="fullName"      // ✅ Valid: key of Employee
  value-field="employeeId"   // ✅ Valid: key of Employee
  disabled-field="isActive"  // ✅ Valid: key of Employee (will be inverted)
/>
```

**IDE Support:**

- Autocomplete suggests: `"fullName"`, `"employeeId"`, `"isActive"`, `"department"`
- Hover shows the type of each field

#### ❌ Type Error: Invalid Field Name

```typescript
interface Employee {
  fullName: string
  employeeId: number
}

const employees: Employee[] = [...]

<BFormSelect
  :options="employees"
  text-field="name"  // Typo! Should be "fullName"
/>
// ❌ TypeScript Error:
// Type '"name"' is not assignable to type '"fullName" | "employeeId" | undefined'
```

#### ❌ Type Error: Field Doesn't Exist

```typescript
interface Employee {
  fullName: string
  employeeId: number
}

const employees: Employee[] = [...]

<BFormSelect
  :options="employees"
  text-field="fullName"
  value-field="badgeNumber"  // Field doesn't exist!
/>
// ❌ TypeScript Error:
// Type '"badgeNumber"' is not assignable to type '"fullName" | "employeeId" | undefined'
```

### Nested Options (Option Groups)

```typescript
interface Country {
  countryName: string
  code: string
  states: State[]
}

interface State {
  stateName: string
  abbreviation: string
}

const countries: Country[] = [...]

<BFormSelect
  :options="countries"
  text-field="countryName"
  value-field="code"
  options-field="states"     // ✅ Nested options
  label-field="countryName"
/>

// The nested states will use BFormSelectOptionGroup
// which also validates field names against State type
```

## Common Patterns

### Pattern 1: API Response Data

```typescript
// API returns this structure
interface ApiUser {
  display_name: string
  user_id: string
  is_disabled: boolean
}

async function loadUsers() {
  const response = await fetch('/api/users')
  const users: ApiUser[] = await response.json()
  return users
}

const users = ref<ApiUser[]>([])
const selectedUserId = ref<string>()

onMounted(async () => {
  users.value = await loadUsers()
})

// TypeScript validates field names match API structure
<BFormSelect
  :options="users"
  text-field="display_name"    // ✅ Matches API
  value-field="user_id"        // ✅ Matches API
  disabled-field="is_disabled" // ✅ Matches API
  v-model="selectedUserId"
/>
```

### Pattern 2: Transformed Data

```typescript
interface RawData {
  id: number
  label: string
  active: boolean
}

interface SelectableItem {
  text: string
  value: number
  disabled: boolean
}

const rawData: RawData[] = [...]

// Transform to match default field names
const selectOptions = computed<SelectableItem[]>(() =>
  rawData.map(item => ({
    text: item.label,
    value: item.id,
    disabled: !item.active
  }))
)

const selected = ref<number>()

// No need to specify field names - uses defaults
<BFormSelect
  :options="selectOptions"
  v-model="selected"
/>
```

### Pattern 3: Enum-like Options

```typescript
type Status = 'active' | 'inactive' | 'pending'

interface StatusOption {
  label: string
  value: Status
  description: string
}

const statusOptions: StatusOption[] = [
  { label: 'Active', value: 'active', description: 'User is active' },
  { label: 'Inactive', value: 'inactive', description: 'User is inactive' },
  { label: 'Pending', value: 'pending', description: 'Awaiting activation' }
]

const userStatus = ref<Status>('active')

// TypeScript ensures userStatus is Status type
<BFormSelect
  :options="statusOptions"
  text-field="label"
  value-field="value"
  v-model="userStatus"
/>
```

### Pattern 4: Readonly/Const Arrays

```typescript
const PRIORITY_LEVELS = [
  { name: 'Low', level: 1, color: 'green' },
  { name: 'Medium', level: 2, color: 'yellow' },
  { name: 'High', level: 3, color: 'red' }
] as const

type PriorityLevel = typeof PRIORITY_LEVELS[number]['level']  // 1 | 2 | 3

const selectedPriority = ref<PriorityLevel>(2)

<BFormSelect
  :options="PRIORITY_LEVELS"
  text-field="name"
  value-field="level"
  v-model="selectedPriority"
/>
```

## Backward Compatibility

- **100% backward compatible** - No breaking changes
- **Opt-in type safety** - Only works when users provide explicit types
- **Graceful degradation** - Works with untyped data using defaults

### Existing Code Continues to Work

The generic type parameters have defaults, so existing code works without changes:

```typescript
// Before (still works)
const options = [
  { text: 'Option 1', value: 1 }
]

<BFormSelect :options="options" />
```

### Gradual Migration

Users can gradually adopt type safety:

```typescript
// Step 1: Add type to options array
const users: User[] = [...]
<BFormSelect :options="users" />  // Now Item = User

// Step 2: Get field name validation for free
<BFormSelect
  :options="users"
  text-field="name"  // Now validated!
/>

// Step 3: Type the v-model
const selected = ref<number>()
<BFormSelect
  :options="users"
  value-field="userId"
  v-model="selected"  // Fully type-safe!
/>
```

## Type Inference Rules

TypeScript infers the generic types in this order:

1. **From `options` prop type** - If options has a known type, `Item` is inferred
2. **From `value-field` prop** - If provided as a literal, `ValueKey` is inferred
3. **From `modelValue`** - If explicitly typed, can help with inference
4. **Defaults** - Falls back to `Record<string, unknown>` and `keyof Item`

### Explicit Type Parameters (Rare)

In rare cases, you may need to provide explicit type parameters:

```typescript
// When TypeScript can't infer (e.g., empty array initialization)
const options = ref<User[]>([])

// Later...
loadUsers().then(data => options.value = data)

<BFormSelect<User, 'userId'>
  :options="options"
  value-field="userId"
  v-model="selectedId"
/>
```

However, this is rarely needed with proper typing of the `options` array.

## Related Components

The same type safety pattern is applied to:

- **BFormSelect** - Dropdown selection with single or multiple values
- **BFormSelectOptionGroup** - Nested option groups within select
- **BFormRadioGroup** - Radio button groups with options
- **BFormCheckboxGroup** - Checkbox groups with options
- **BFormDatalist** - Datalist suggestions with options

Each uses the same `Item` generic parameter for consistent type safety across the component library.

## Benefits Summary

### For Developers

1. **Catch errors at compile time** - Not at runtime
2. **Better IDE support** - Autocomplete, inline docs, navigation
3. **Self-documenting code** - Types show what data is expected
4. **Refactoring safety** - Rename a field, find all usages
5. **Less debugging** - TypeScript catches mistakes before testing

### For Teams

1. **API contract enforcement** - Options match API response structure
2. **Consistent data shapes** - All components use same type patterns
3. **Easier code review** - Types are explicit and validated
4. **Better onboarding** - New developers see what's expected
5. **Type-driven development** - Design types first, implement second

## Technical Notes

### Type Constraints

- Field name props use `keyof Item & string` to ensure:
  - The key exists on `Item`
  - The key is a string (not a symbol)

- The `ValueKey extends keyof Item` ensures:
  - The value field is a valid key
  - Can be used to index `Item` for type inference

### Type Defaults

Props use type assertions to provide sensible defaults while maintaining type safety:

```typescript
const props = withDefaults(defineProps<BFormSelectProps<Item, ValueKey>>(), {
  valueField: 'value' as ValueKey & string,
  textField: 'text' as keyof Item & string,
  disabledField: 'disabled' as keyof Item & string,
})
```

This is necessary because the defaults may not match all possible `Item` types.

### Normalization

Options are normalized to a consistent shape while preserving value types:

```typescript
// Input: Item[]
// Output: SelectOption<Item[ValueKey]>[] | RadioOption<Item[ValueKey]>[]

// Where SelectOption<T> = { value: T, text: string, disabled: boolean, html?: string }
// Where RadioOption<T> = { value: T, text: string, disabled: boolean }
```

The generic `T` preserves the actual value type through normalization.

**Important:** Normalization extracts only specific fields (`value`, `text`, `disabled`, optionally `html` for select) to prevent prop pollution. Object spreading (`...el`) is NOT used to avoid passing unintended properties to child components, which could cause type conflicts or unexpected behavior.

### Known Limitations

#### 1. useDefaults Composable Incompatibility

**Issue:** The `useDefaults` composable is incompatible with generic props due to runtime Proxy wrapping breaking compile-time type inference.

**Impact:**

- Generic components cannot use the `useDefaults` composable
- Most props cannot participate in the global defaults system from `createBootstrap({ defaults: {...} })`

**Workaround:** Manual global defaults injection for commonly-customized props.

**Implementation Pattern:**

1. **Set defaults to `undefined` in `withDefaults`:**

```typescript
const props = withDefaults(
  defineProps<Omit<BFormCheckboxGroupProps<Item, ValueKey>, 'modelValue'>>(),
  {
    // ... other props with concrete defaults
    buttonVariant: undefined, // Allow injection
    size: undefined, // Allow injection
    state: undefined, // Allow injection
  }
)
```

**Why `undefined`?** Props with concrete default values (e.g., `buttonVariant: 'secondary'`) always have a value, preventing the `??` operator from checking global defaults. By using `undefined`, the prop is truly optional, allowing the computed property to cascade through the precedence chain.

2. **Inject global defaults and create computed properties:**

```typescript
// Inject the global defaults from plugin or BApp
const globalDefaults = inject(defaultsKey, ref({}))
const componentDefaults = computed(() => globalDefaults.value?.BFormCheckboxGroup ?? {})

// Create computed properties that follow precedence order:
// Explicit prop → Component defaults → Global defaults → Hardcoded default
const buttonVariant = computed(
  () =>
    props.buttonVariant ?? // 1. Explicit prop (highest priority)
    componentDefaults.value.buttonVariant ?? // 2. Component-level default
    globalDefaults.value?.global?.buttonVariant ?? // 3. Global default
    'secondary' // 4. Hardcoded fallback (lowest priority)
)

const size = computed(
  () => props.size ?? componentDefaults.value.size ?? globalDefaults.value?.global?.size ?? 'md'
)

const state = computed(
  () => props.state ?? componentDefaults.value.state ?? globalDefaults.value?.global?.state ?? null
)
```

3. **Use computed properties instead of props:**

```typescript
// In component template/computed properties, use the computed values:
const classes = computed(() => ({
  'btn-group': props.buttons,
  [`btn-group-${size.value}`]: props.buttons && size.value !== 'md',
  'is-valid': state.value === true,
  'is-invalid': state.value === false,
}))
```

**Precedence Order (Highest to Lowest):**

1. **Explicit prop** - User provides value directly on component instance
2. **Component defaults** - Set via `createBootstrap({ components: { BFormCheckboxGroup: {...} } })` or `<BApp :defaults="{ BFormCheckboxGroup: {...} }">`
3. **Global defaults** - Set via `createBootstrap({ components: { global: {...} } })` (plugin pattern only, not BApp)
4. **Hardcoded default** - Component's fallback value

**Affected Components:**

- `BFormSelect` - Manually supports: `size`, `state`
- `BFormRadioGroup` - Manually supports: `buttonVariant`, `size`, `state`
- `BFormCheckboxGroup` - Manually supports: `buttonVariant`, `size`, `state`
- `BFormDatalist` - No manual support needed (no style props)

**Testing:** Comprehensive test suites verify the precedence chain:

- `form-checkbox-group-global-defaults.spec.ts` - 15 test cases
- `form-radio-group-global-defaults.spec.ts` - 15 test cases
- Demo component: `GlobalDefaultsDemo.vue` - Visual verification using BApp pattern

**Implementation Detail - Child Component Precedence:**

A critical implementation detail exists for `BFormCheckbox` and `BFormRadio` when used within their respective group components:

**The Challenge:** `BFormCheckbox` and `BFormRadio` use the `useDefaults` composable which automatically injects global defaults directly into component props during setup. This creates a conflict when these components are used within `BFormCheckboxGroup` or `BFormRadioGroup`, which provide component-specific defaults via Vue's provide/inject context.

Without special handling, the precedence would be incorrect:

- ❌ Global defaults (via useDefaults) > Parent context > Hardcoded default

But the correct precedence should be:

- ✅ Parent context (component defaults) > Global defaults > Hardcoded default

**The Solution:** In `BFormCheckbox` and `BFormRadio`, the `classesObject` computed prioritizes parent-provided values **before** checking props for `buttonVariant`, `size`, and `state`:

```typescript
// BFormCheckbox.vue and BFormRadio.vue
const classesObject = computed(() => {
  // When in a group, prioritize parent-provided values to respect
  // component-level defaults from BFormCheckboxGroup/BFormRadioGroup
  const bv = parentData?.buttonVariant.value ?? props.buttonVariant ?? 'secondary'
  const sz = parentData?.size.value ?? props.size ?? 'md'
  const st =
    parentData?.state.value !== undefined
      ? parentData.state.value
      : props.state === true || props.state === false
        ? props.state
        : null

  return {
    // ...
    buttonVariant: bv,
    size: sz,
    state: st,
  }
})
```

This ensures that when a checkbox/radio is within a group:

1. Parent context values (from BFormCheckboxGroup/BFormRadioGroup) take precedence
2. If no parent context, fall back to props (which may include global defaults from useDefaults)
3. Finally fall back to hardcoded defaults

**Why This Matters:** Users expect component-specific defaults to override global defaults. For example:

```typescript
createBootstrap({
  components: {
    global: {buttonVariant: 'primary'},
    BFormCheckboxGroup: {buttonVariant: 'danger'},
  },
})
```

Without the parent-first precedence, all checkboxes would incorrectly render as 'primary' instead of 'danger' because `useDefaults` would inject 'primary' into the checkbox props before the group context could provide 'danger'.

**Trade-off Justification:**
Type safety benefits (IDE autocomplete, compile-time validation, refactoring safety) outweigh the loss of global defaults for less commonly-customized props. Users can still override any prop per-instance.

#### 2. Other Limitations

- Type casts required when passing props between generic components with different constraints
- Generic constraints only work at compile-time, no runtime validation
- Field name validation doesn't enforce field value types (e.g., `textField` could point to a number field)

## Maintenance Notes

When modifying type-safe form components:

1. Maintain generic type parameters on both parent components and child option components
2. Keep type constraints consistent across all field props
3. Update documentation examples if adding new field props
4. Ensure backward compatibility - defaults should work without type annotations
5. When normalizing options, only extract specific fields - never spread entire objects

## User-Facing Documentation

See user documentation in `/apps/docs/src/docs/components/`:

- `form-select.md` - BFormSelect TypeScript type safety section
- `form-radio.md` - BFormRadioGroup TypeScript type safety section
- `form-checkbox.md` - BFormCheckboxGroup TypeScript type safety section
- `form.md` - BFormDatalist TypeScript type safety section

Demo files follow naming pattern: `{Component}TypeSafe{Scenario}.vue`

Examples:

- `SelectTypeSafeBasic.vue` - Basic typed usage
- `SelectTypeSafeValidation.vue` - Field validation errors
- `SelectTypeSafeMultiple.vue` - Multiple select
- `SelectTypeSafeAPI.vue` - API response pattern
- `SelectTypeSafeEnum.vue` - Enum value constraints
- `RadioTypeSafeBasic.vue` - Radio group basic usage
- `RadioTypeSafeValidation.vue` - Radio field validation
- `RadioTypeSafeAPI.vue` - Radio with API data
- `RadioTypeSafeEnum.vue` - Radio with enum values
- `CheckboxTypeSafeBasic.vue` - Checkbox group basic usage
- `CheckboxTypeSafeValidation.vue` - Checkbox field validation
- `CheckboxTypeSafeAPI.vue` - Checkbox with API data
- `CheckboxTypeSafeEnum.vue` - Checkbox with enum values
- `DatalistTypeSafeBasic.vue` - Datalist basic usage
- `DatalistTypeSafeAPI.vue` - Datalist with API data
- `DatalistTypeSafeEnum.vue` - Datalist with enum values

## Migration Guide

### For Library Users

**No breaking changes!** Existing code continues to work:

```typescript
// This still works exactly as before
<BFormSelect
  :options="options"
  text-field="text"
  value-field="value"
/>
```

To get type safety benefits:

1. **Type your options array:**

   ```typescript
   const users: User[] = [...]  // Add type annotation
   ```

2. **Type your v-model:**

   ```typescript
   const selected = ref<number>() // Add type
   ```

3. **Enjoy autocomplete and type checking!**

### For Library Maintainers

When updating other components to use this pattern:

1. Add generic parameters to the props interface
2. Update the component's `generic` attribute in script tag
3. Update `defineProps` to use the generic props type
4. Update `defineModel` to use the inferred value type
5. Update documentation with TypeScript examples
6. Add demo files showing type safety features
7. Run tests to ensure backwards compatibility
8. Update architecture docs to track implementation status

## Future Enhancements

Potential improvements for future versions:

### Planned

1. **Stricter field type constraints** - Ensure `textField` points to a string/number field, not boolean or object
2. **attrs field for option objects** - Allow passing additional props to individual options without polluting the normalized shape:
   ```typescript
   interface User {
     id: number
     name: string
     attrs?: Record<string, any> // Custom attributes for this option
   }
   ```
   This would provide a type-safe way to pass additional data to slots or customize individual option rendering without relying on object spreading.

### Under Consideration

3. **Support for nested field paths** - e.g., `"user.profile.name"` for deeply nested objects
4. **Computed field values** - Transform values during normalization with type preservation
5. **Type guards for runtime validation** - Validate that data at runtime matches declared types
6. **Better error messages** - Custom TypeScript diagnostics with actionable suggestions
7. **Field value type constraints** - Type-level validation that ensures field types are compatible (e.g., `valueField` must point to serializable type)

## Related Files

### Type Definitions

- `packages/bootstrap-vue-next/src/types/ComponentProps.ts` - Component props interfaces
- `packages/bootstrap-vue-next/src/types/ComponentSlots.ts` - Component slot interfaces
- `packages/bootstrap-vue-next/src/types/RadioTypes.ts` - Radio-specific types
- `packages/bootstrap-vue-next/src/types/SelectTypes.ts` - Select-specific types

### Components

- `packages/bootstrap-vue-next/src/components/BFormSelect/BFormSelect.vue`
- `packages/bootstrap-vue-next/src/components/BFormSelect/BFormSelectOptionGroup.vue`
- `packages/bootstrap-vue-next/src/components/BFormRadio/BFormRadioGroup.vue`
- `packages/bootstrap-vue-next/src/components/BFormRadio/BFormRadio.vue`
- `packages/bootstrap-vue-next/src/components/BFormCheckbox/BFormCheckboxGroup.vue`
- `packages/bootstrap-vue-next/src/components/BFormCheckbox/BFormCheckbox.vue`
- `packages/bootstrap-vue-next/src/components/BForm/BFormDatalist.vue`

### Composables

- `packages/bootstrap-vue-next/src/composables/useFormSelect.ts` - Select normalization logic
- `packages/bootstrap-vue-next/src/composables/useFormCheck.ts` - Shared form check logic

### Documentation

- `apps/docs/src/docs/components/form-select.md` - BFormSelect user docs
- `apps/docs/src/docs/components/form-radio.md` - BFormRadioGroup user docs
- `apps/docs/src/docs/components/form-checkbox.md` - BFormCheckboxGroup user docs
- `apps/docs/src/docs/components/form.md` - BFormDatalist user docs
- `apps/docs/src/docs/components/_type-safety-*.md` - Shared type safety documentation fragments
- `apps/docs/src/docs/components/demo/SelectTypeSafe*.vue` - Select demos
- `apps/docs/src/docs/components/demo/RadioTypeSafe*.vue` - Radio demos
- `apps/docs/src/docs/components/demo/CheckboxTypeSafe*.vue` - Checkbox demos
- `apps/docs/src/docs/components/demo/DatalistTypeSafe*.vue` - Datalist demos

### Tests

- `packages/bootstrap-vue-next/src/components/BFormSelect/form-select.spec.ts`
- `packages/bootstrap-vue-next/src/components/BFormRadio/form-radio-group.spec.ts`
- `packages/bootstrap-vue-next/src/components/BFormCheckbox/form-checkbox-group.spec.ts`
- `packages/bootstrap-vue-next/src/components/BForm/form-datalist.spec.ts`
- `packages/bootstrap-vue-next/tests/utils/type-safety-helpers.ts` - Shared test utilities

## Conclusion

The type-safe implementation provides significant benefits with zero breaking changes. Users can gradually adopt type safety at their own pace, while new code gets full type checking from the start.

The combination of typed options arrays (Goal #1) and validated field names (Goal #2) makes form components much safer and more developer-friendly, catching errors at compile time rather than runtime. The pattern is consistent across all option-based form components, providing a unified developer experience.
