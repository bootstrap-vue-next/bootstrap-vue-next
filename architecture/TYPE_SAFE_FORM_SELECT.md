# Type-Safe Form Select Implementation

## Overview

The `BFormSelect`, `BFormSelectOption`, and `BFormSelectOptionGroup` components have been enhanced with TypeScript generics to provide strong type safety for both the options array and field mapping props. This implementation achieves two key type safety goals:

1. **Type-safe options array** - TypeScript knows the structure of items in the array
2. **Type-safe field name props** - Field names are validated against the actual object keys

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
  textField?: keyof Item & string
  valueField?: ValueKey & string
  disabledField?: keyof Item & string
  modelValue?: Item[ValueKey] | readonly Item[ValueKey][]
  // ... other props
}
```

### Component Declaration

```vue
<!-- BFormSelect.vue -->
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
  text-field="display_name"   // ✅ Matches API
  value-field="user_id"       // ✅ Matches API
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

## Backwards Compatibility

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

- **BFormSelectOptionGroup** - For nested option groups
- **BFormCheckboxGroup** - For checkbox groups with options
- **BFormRadioGroup** - For radio groups with options
- **BFormDatalist** - For datalist suggestions

Each uses the same `Item` generic parameter for consistent type safety.

## Benefits Summary

### For Developers

1. **Catch errors at compile time** - Not at runtime
2. **Better IDE support** - Autocomplete, inline docs, navigation
3. **Self-documenting code** - Types show what data is expected
4. **Refactoring safety** - Rename a field, find all usages
5. **Less debugging** - TypeScript catches mistakes before testing

### For Teams

1. **API contract enforcement** - Options match API response
2. **Consistent data shapes** - All components use same types
3. **Easier code review** - Types are explicit
4. **Better onboarding** - New developers see what's expected
5. **Type-driven development** - Design types first, implement second

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
2. Update the component's `generic` attribute
3. Update `defineProps` to use the generic props type
4. Update `defineModel` to use the inferred value type
5. Update documentation with examples
6. Run tests to ensure backwards compatibility

## Technical Notes

### Type Constraints

- Field name props use `keyof Item & string` to ensure:
  - The key exists on `Item`
  - The key is a string (not a symbol)

- The `ValueKey extends keyof Item` ensures:
  - The value field is a valid key
  - Can be used to index `Item` for type inference

### Default Values

Default values use `as any` to work around TypeScript's strict checking:

```typescript
const props = withDefaults(defineProps<BFormSelectProps<Item, ValueKey>>(), {
  textField: 'text' as any, // May not exist on all Item types
  valueField: 'value' as any,
  // ...
})
```

This is necessary because the defaults may not match all possible `Item` types.

### Normalization

The `useFormSelect` composable normalizes options to a consistent shape:

```typescript
// Input: Item[]
// Output: SelectOption<Item[ValueKey]>[]

// Where SelectOption<T> = { value: T, text: string, disabled: boolean }
```

The generic `T` preserves the actual value type through normalization.

## Future Enhancements

Potential improvements for future versions:

1. **Stricter field type constraints** - Ensure `textField` points to a string field
2. **Support for nested field paths** - e.g., `"user.name"` for nested objects
3. **Computed field values** - Transform values during normalization
4. **Type guards for runtime validation** - Validate data matches types
5. **Better error messages** - Custom TypeScript diagnostics

## Conclusion

The type-safe implementation provides significant benefits with zero breaking changes. Users can gradually adopt type safety at their own pace, while new code gets full type checking from the start.

The combination of typed options arrays (Goal #1) and validated field names (Goal #2) makes `BFormSelect` much safer and more developer-friendly, catching errors at compile time rather than runtime.
