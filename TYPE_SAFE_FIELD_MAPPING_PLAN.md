# Type-Safe Field Mapping Plan for Bootstrap-Vue-Next

## TL;DR - Answering Your Question

**You asked about two types of type-safety:**

1. **Type safety for the `options` array** ⭐ (Your primary interest)
   - Making `options` be `User[]` instead of `unknown[]`
   - Having TypeScript know the structure of items
   - Getting proper type inference for `modelValue`

2. **Type safety for field name props** (Secondary)
   - Validating that `text-field="name"` refers to an actual field
   - Getting autocomplete for field names

**My original plan focused too much on #2, but the good news:**

- Option 1 achieves **both goals** with a single solution
- The generic type parameter `Item` types the array (Goal #1)
- The generic type parameter `ValueKey` enables inferring modelValue type (Goal #1)
- As a bonus, we can constrain field names with `keyof Item` (Goal #2)

**Your primary concern (#1) is absolutely achievable and is the main benefit!**

---

## Problem Statement

Several components in Bootstrap-Vue-Next accept arrays of objects with configurable field mappings:

- **BFormSelect** - `textField`, `valueField`, `disabledField`, `labelField`, `optionsField`
- **BFormSelectOptionGroup** - `textField`, `valueField`, `disabledField`
- **BFormCheckboxGroup** - `textField`, `valueField`, `disabledField`
- **BFormRadioGroup** - `textField`, `valueField`, `disabledField`
- **BFormDatalist** - `textField`, `valueField`, `disabledField`

These props allow users to specify which fields in their data objects should be used for rendering and value binding. However, this flexibility comes at the cost of type safety.

### Two Distinct Type Safety Concerns

**Type Safety Goal #1: The `options` Array Type** ⭐ PRIMARY FOCUS

```typescript
// Current - no type safety on the array itself
interface BFormSelectProps {
  options?: readonly (unknown | Record<string, unknown>)[]  // Too generic!
}

const users = [
  { name: 'John', id: 1, inactive: false }
]

// Problem: TypeScript doesn't know what's in the array
<BFormSelect :options="users" />
// After normalization, we get { value: unknown, text: string, disabled: boolean }
// But we want { value: number, text: string, disabled: boolean }
```

This is the **primary concern** - we want the `options` prop to be strongly typed so that:

- TypeScript knows the structure of items in the array
- The normalized options maintain proper types
- The `modelValue` type can be inferred from the array item type

**Type Safety Goal #2: Field Name Props** (Secondary benefit)

```typescript
// Current - no validation that field names exist
interface BFormSelectProps {
  textField?: string     // Could be any string, even "nonExistentField"
  valueField?: string
}

// Would be nice to catch this error:
<BFormSelect
  :options="users"
  text-field="nam"      // Typo - would be caught if type-safe
  value-field="userId"  // Field doesn't exist - would be caught
/>
```

This is a **secondary benefit** - validating that the field name props actually exist on the option items.

### Current Implementation Problems

```typescript
// Current ComponentProps.ts
export interface BFormSelectProps {
  options?: readonly (unknown | Record<string, unknown>)[]  // ❌ Too loose
  textField?: string                                        // ❌ Any string accepted
  valueField?: string                                       // ❌ Any string accepted
  modelValue?: SelectValue                                  // ❌ Too generic
}

// Current usage - everything is `unknown` or loosely typed
const options = [
  { name: 'John', id: 1, inactive: false }
]
<BFormSelect
  :options="options"
  text-field="name"
  value-field="id"
  v-model="selectedId"  // Type is SelectValue (too generic)
/>

// What happens internally:
// 1. options is (unknown | Record<string, unknown>)[]
// 2. After normalization: SelectOption<unknown>[]
// 3. modelValue is SelectValue (string | number | object | ...)
//
// We lose all type information about the actual data!
```

## Solution Options

### Option 1: Generic Type Parameter for Options Array (Recommended) ⭐

**Primary Goal**: Make the `options` array strongly typed so TypeScript knows the shape of the data.

**Approach**: Add a generic type parameter to represent the option item type, which flows through to normalize the options and infer the model value type.

#### Pros

- ✅ **Strong typing for options array** - TypeScript knows the item structure
- ✅ **Type inference for modelValue** - Can infer the value type from the array
- ✅ **Preserves type information** - Types flow through normalization
- ✅ **Backwards compatible** - Defaults to `Record<string, unknown>`
- ✅ **Zero breaking changes** - Existing code continues to work
- ✅ **Bonus: Field name validation** - Can also constrain field name props
- ✅ **Validates field types** - Can ensure text fields are strings, etc.

#### Cons

- ⚠️ **Requires explicit types** - Users need to type their option arrays for full benefit
- ⚠️ **Type inference challenges** - May need explicit type parameters in some cases
- ⚠️ **Learning curve** - Users need to understand how to leverage generics

#### Implementation Example - Focus on Goal #1 (Array Typing)

```typescript
// Type definitions - ComponentProps.ts

// Helper to extract the value type from an item based on a field name
type ExtractFieldType<T, K extends keyof T> = T[K]

// Make the interface generic over the option item type
export interface BFormSelectProps<
  Item = Record<string, unknown>,  // The type of items in the options array
  ValueKey extends keyof Item = keyof Item  // Which field is used for the value
> {
  // Strongly type the options array - THIS IS THE KEY IMPROVEMENT
  options?: readonly Item[]

  // The field names (can optionally be constrained, but primary goal is array typing)
  textField?: keyof Item & string
  valueField?: ValueKey & string
  disabledField?: keyof Item & string

  // Infer modelValue type from the value field
  modelValue?: Item[ValueKey] | (Item[ValueKey])[]  // Handle multiple

  // Other props remain the same
  multiple?: boolean
  // ...
}

// Component implementation - BFormSelect.vue
<script setup lang="ts" generic="Item = Record<string, unknown>, ValueKey extends keyof Item = keyof Item">
import type {BFormSelectProps} from '../../types/ComponentProps'

const props = withDefaults(
  defineProps<BFormSelectProps<Item, ValueKey>>(),
  {
    textField: 'text' as any,
    valueField: 'value' as any,
    disabledField: 'disabled' as any,
    // ...
  }
)

// modelValue is now strongly typed based on Item[ValueKey]
const modelValue = defineModel<Item[ValueKey]>()
</script>
```

#### Usage Examples - Demonstrating Goal #1

```typescript
// Example 1: ⭐ MAIN BENEFIT - Strongly typed options array
interface User {
  name: string
  userId: number
  isInactive: boolean
}

const users: User[] = [
  { name: 'John', userId: 1, isInactive: false },
  { name: 'Jane', userId: 2, isInactive: true }
]

// ✅ TypeScript knows the structure of items in the array
<BFormSelect
  :options="users"
  text-field="name"
  value-field="userId"
  v-model="selectedUserId"
/>
// - options is User[]
// - After normalization: SelectOption<number>[] (not SelectOption<unknown>!)
// - selectedUserId is inferred as number (not SelectValue!)

// Example 2: Type inference for modelValue
const selectedId = ref<number>()  // ✅ Correctly typed

<BFormSelect
  :options="users"
  value-field="userId"
  v-model="selectedId"  // ✅ Type-safe: number matches User['userId']
/>

const selectedName = ref<string>()
<BFormSelect
  :options="users"
  value-field="name"
  v-model="selectedName"  // ✅ Type-safe: string matches User['name']
/>

// Example 3: Catch type mismatches
const wrongType = ref<string>()
<BFormSelect
  :options="users"
  value-field="userId"
  v-model="wrongType"  // ❌ ERROR: Type 'number' is not assignable to 'string'
/>

// Example 4: BONUS - Field name validation (Goal #2)
<BFormSelect
  :options="users"
  text-field="fullName"  // ❌ ERROR: 'fullName' is not a key of User
  value-field="userId"
/>

// Example 5: Still works with simple arrays
<BFormSelect :options="['red', 'green', 'blue']" />
// - Item is inferred as string
// - modelValue is string

// Example 6: Works with default shape
const options = [
  { text: 'Option 1', value: 1 },
  { text: 'Option 2', value: 2 }
]
<BFormSelect :options="options" />
// - Item is inferred as { text: string, value: number }
// - modelValue is number
```

#### What This Achieves

**For Goal #1 (Primary):**

- ✅ `options` prop is `readonly User[]` instead of `readonly unknown[]`
- ✅ TypeScript tracks the structure through normalization
- ✅ `modelValue` type is inferred as `number` (from `User['userId']`) instead of `SelectValue`
- ✅ The internal `SelectOption<T>` preserves the actual value type
- ✅ Type safety flows from input (options) to output (v-model)

**For Goal #2 (Bonus):**

- ✅ Field names like `text-field="name"` are validated against `keyof User`
- ✅ Autocomplete suggests available fields
- ✅ Typos in field names are caught at compile time

---

### Option 2: Simpler Generic (Array Type Only, No Field Validation)

**Focus**: Only achieve Goal #1 (typed options array), skip Goal #2 (field validation).

**Approach**: Add a generic just for the options array type, but keep field names as simple strings.

#### Pros

- ✅ **Achieves Goal #1** - Options array is strongly typed
- ✅ **Simpler implementation** - No complex keyof constraints
- ✅ **Easier to understand** - Less generic complexity

#### Cons

- ❌ **Doesn't achieve Goal #2** - No field name validation
- ❌ **ModelValue type is tricky** - Can't infer it without knowing which field is the value
- ❌ **User must specify types manually** - Less convenient

#### Implementation Example

```typescript
// Simpler version - just type the array
export interface BFormSelectProps<
  Item = Record<string, unknown>,
  ValueType = unknown  // User must specify this manually
> {
  // Type the array - ACHIEVES GOAL #1
  options?: readonly Item[]

  // Keep field names simple - doesn't achieve Goal #2
  textField?: string
  valueField?: string
  disabledField?: string

  // Can't infer this without ValueKey
  modelValue?: ValueType
}

// Usage - user must manually specify both types
<BFormSelect<User, number>  // Must specify: User for options, number for modelValue
  :options="users"
  value-field="userId"
  v-model="selectedId"
/>
```

**Verdict**: This is less convenient than Option 1 because the user has to manually specify the value type. With Option 1, TypeScript can infer it from the `valueField`.

---

### Option 3: Discriminated Union with Mode Selection

**Approach**: Use a discriminated union to switch between "simple" mode (strings/numbers) and "object" mode (with field mapping).

#### Pros

- ✅ **Clear separation** - Simple vs complex options are distinct types
- ✅ **Type safety** - Each mode has appropriate constraints
- ✅ **Easier to understand** - Less generic complexity

#### Cons

- ❌ **Breaking change** - Requires API changes
- ❌ **More verbose** - Users must specify mode
- ❌ **Less flexible** - Can't mix simple and complex options easily
- ❌ **Duplicated props** - Different props for each mode

#### Implementation Example

```typescript
// Simple mode - just strings or numbers
interface BFormSelectPropsSimple {
  mode: 'simple'
  options?: readonly (string | number)[]
  modelValue?: string | number
}

// Object mode - with field mapping
interface BFormSelectPropsObject<Item = Record<string, unknown>> {
  mode: 'object'
  options?: readonly Item[]
  textField?: keyof Item & string
  valueField?: keyof Item & string
  disabledField?: keyof Item & string
  modelValue?: Item[keyof Item]
}

type BFormSelectProps<Item = Record<string, unknown>> =
  | BFormSelectPropsSimple
  | BFormSelectPropsObject<Item>
```

#### Usage Example

```typescript
// Simple mode
<BFormSelect
  mode="simple"
  :options="['red', 'green', 'blue']"
/>

// Object mode
<BFormSelect
  mode="object"
  :options="users"
  text-field="name"
  value-field="userId"
/>
```

### Option 3: Builder Pattern with Type Inference

**Approach**: Provide a type-safe builder/helper function to create properly typed option configurations.

#### Pros

- ✅ **Non-intrusive** - Doesn't change component API
- ✅ **Gradual adoption** - Can be used alongside existing code
- ✅ **Full type safety** - When using the helper

#### Cons

- ❌ **Extra step** - Requires calling a helper function
- ❌ **Not enforced** - Users can bypass and lose type safety
- ❌ **Limited value** - Doesn't provide autocomplete in templates

#### Implementation Example

```typescript
// Helper function
export function createSelectOptions<Item>(config: {
  items: readonly Item[]
  textField: keyof Item & string
  valueField: keyof Item & string
  disabledField?: keyof Item & string
}) {
  return {
    options: config.items,
    textField: config.textField,
    valueField: config.valueField,
    disabledField: config.disabledField,
  }
}

// Usage
const selectConfig = createSelectOptions({
  items: users,
  textField: 'name',      // Autocomplete works here
  valueField: 'userId',
  disabledField: 'isInactive'
})

<BFormSelect v-bind="selectConfig" />
```

### Option 4: TypeScript Template Literal Types

**Approach**: Use template literal types to validate field paths as strings.

#### Pros

- ✅ **String-based** - Works with Vue's string props
- ✅ **Type checking** - Validates field names

#### Cons

- ❌ **Complex types** - Very difficult to implement correctly
- ❌ **Poor error messages** - Hard to debug type errors
- ❌ **Limited support** - Doesn't work well with nested paths
- ❌ **Performance** - Can slow down TypeScript compilation

#### Implementation Example

```typescript
type PathsToStringProps<T> = {
  [K in keyof T]: T[K] extends string ? K : never
}[keyof T]

interface BFormSelectProps<Item> {
  options?: readonly Item[]
  textField?: PathsToStringProps<Item> | string
  // ...
}
```

## Concrete Before/After Comparison

### Before (Current) - Goal #1 NOT Achieved

```typescript
// ComponentProps.ts
interface BFormSelectProps {
  options?: readonly (unknown | Record<string, unknown>)[]
  modelValue?: SelectValue  // string | number | object | ...
}

// Usage
interface User {
  name: string
  userId: number
}

const users: User[] = [...]
const selectedId = ref<number>()

<BFormSelect
  :options="users"
  value-field="userId"
  v-model="selectedId"
/>

// What TypeScript sees:
// - options: (unknown | Record<string, unknown>)[] ❌
// - modelValue: SelectValue ❌
// - No connection between options and modelValue ❌
// - TypeScript doesn't know users are User[] ❌
// - After normalization: SelectOption<unknown>[] ❌
```

### After (Option 1) - Goal #1 ACHIEVED ✅

```typescript
// ComponentProps.ts
interface BFormSelectProps<Item, ValueKey extends keyof Item> {
  options?: readonly Item[]
  modelValue?: Item[ValueKey]
}

// Usage - EXACT SAME CODE
interface User {
  name: string
  userId: number
}

const users: User[] = [...]
const selectedId = ref<number>()

<BFormSelect
  :options="users"
  value-field="userId"
  v-model="selectedId"
/>

// What TypeScript sees:
// - Item is inferred as User ✅
// - options: User[] ✅
// - ValueKey is inferred as "userId" ✅
// - modelValue: User["userId"] which is number ✅
// - selectedId matches number ✅
// - After normalization: SelectOption<number>[] ✅
// - Full type safety from input to output! ✅
```

### Key Differences

| Aspect                          | Before (Current)                         | After (Option 1)                          | Goal #1 Achieved? |
| ------------------------------- | ---------------------------------------- | ----------------------------------------- | ----------------- |
| `options` type                  | `(unknown \| Record<string, unknown>)[]` | `User[]`                                  | ✅ YES            |
| TypeScript knows item structure | ❌ No                                    | ✅ Yes                                    | ✅ YES            |
| `modelValue` type               | `SelectValue` (too generic)              | `number` (inferred from `User["userId"]`) | ✅ YES            |
| Normalized options type         | `SelectOption<unknown>[]`                | `SelectOption<number>[]`                  | ✅ YES            |
| Type flows through              | ❌ No                                    | ✅ Yes                                    | ✅ YES            |
| Field name validation           | ❌ No                                    | ✅ Yes (bonus)                            | N/A (Goal #2)     |

---

## Recommended Implementation Strategy

### Phase 1: Core Type Infrastructure

1. **Update type definitions** in `src/types/ComponentProps.ts`:
   - Make `BFormSelectProps` generic over the option item type
   - Add constraints for `textField`, `valueField`, `disabledField`
   - Ensure backwards compatibility with `= Record<string, unknown>`

2. **Update SelectTypes.ts**:

   ```typescript
   export interface SelectOption<T = unknown> {
     value: T
     text?: string
     disabled?: boolean
   }

   // Keep existing types for backwards compatibility
   export type SelectOptionRaw<T = unknown> =
     | string
     | number
     | SelectOption<T>
     | (Record<string, unknown> & Partial<SelectOption<T>>)
   ```

3. **Create helper types** for field constraints:

   ```typescript
   // Helper to get keys of T that extend string
   export type StringKeyOf<T> = {
     [K in keyof T]: T[K] extends string ? K : never
   }[keyof T]

   // Helper to get keys of T that extend boolean
   export type BooleanKeyOf<T> = {
     [K in keyof T]: T[K] extends boolean ? K : never
   }[keyof T]
   ```

### Phase 2: Component Updates

1. **Update BFormSelect** to use generics:

   ```vue
   <script setup lang="ts" generic="Item = Record<string, unknown>, ValueType = unknown">
   import type {BFormSelectProps} from '../../types/ComponentProps'

   const props = withDefaults(defineProps<BFormSelectProps<Item, ValueType>>(), {
     textField: 'text',
     valueField: 'value',
     disabledField: 'disabled',
     // ...
   })

   const modelValue = defineModel<ValueType>()
   </script>
   ```

2. **Update useFormSelect composable** to preserve types:

   ```typescript
   export const useFormSelect = <Item = unknown>(
     options: MaybeRefOrGetter<ReadonlyArray<Item>>,
     props: MaybeRefOrGetter<{
       textField?: string
       valueField?: string
       disabledField?: string
       // ...
     }>
   ) => {
     // Implementation stays mostly the same
     // But return types are better preserved
   }
   ```

3. **Apply same pattern to**:
   - BFormSelectOptionGroup
   - BFormCheckboxGroup
   - BFormRadioGroup
   - BFormDatalist

### Phase 3: Documentation and Migration

1. **Update component documentation** (`.data.ts` files) to show:
   - Type-safe usage examples
   - How to use with custom types
   - Migration guide for existing code

2. **Add TypeScript examples** to docs:

   ```typescript
   // Type-safe example
   interface Product {
     productName: string
     sku: string
     inStock: boolean
   }

   const products: Product[] = [...]

   <BFormSelect
     :options="products"
     text-field="productName"
     value-field="sku"
     disabled-field="inStock"
   />
   ```

3. **Create migration guide** explaining:
   - How existing code continues to work
   - Benefits of adding type parameters
   - Common patterns and best practices

### Phase 4: Testing

1. **Add type tests** to verify:
   - Correct type inference
   - Error detection for invalid fields
   - Backwards compatibility

2. **Update unit tests** to use typed options

3. **Test with real-world scenarios**

## Impact Analysis

### Breaking Changes

- **None for JavaScript users** - All changes are TypeScript-only
- **None for existing TypeScript users** - Default generic parameters preserve current behavior
- **Optional opt-in** - Users can choose to add type parameters for better safety

### Migration Path

```typescript
// Before (still works)
const options = [{ text: 'A', value: 1 }]
<BFormSelect :options="options" />

// After (enhanced type safety)
interface Option {
  text: string
  value: number
}
const options: Option[] = [{ text: 'A', value: 1 }]
<BFormSelect<Option, number> :options="options" />

// Or with inference
const options = [{ label: 'A', id: 1 }] as const
<BFormSelect
  :options="options"
  text-field="label"   // Autocomplete!
  value-field="id"     // Type-safe!
/>
```

### Benefits

1. **Immediate**: Better autocomplete in IDEs
2. **Short-term**: Catch field name typos at compile time
3. **Long-term**: More maintainable codebases, self-documenting APIs

### Risks

1. **Complexity**: Generics can be intimidating to some users
2. **Type inference**: May require explicit type parameters in some cases
3. **Documentation**: Need clear examples for users to understand

## Recommendation

**Implement Option 1 (Generic Type with Constrained Keys)** because:

1. **Best balance** of type safety and usability
2. **Zero breaking changes** - fully backwards compatible
3. **Industry standard** - Similar to how libraries like React Hook Form, TanStack Table, etc. handle this
4. **Vue 3.3+ support** - Vue's `generic` attribute makes this ergonomic
5. **Gradual adoption** - Users can adopt incrementally

## Next Steps

1. **Prototype** the solution with BFormSelect only
2. **Validate** with real-world usage scenarios
3. **Get feedback** from maintainers and community
4. **Iterate** based on feedback
5. **Roll out** to other components
6. **Document** thoroughly with examples

## Alternative: Minimal Change Approach

If the full generic solution is too complex, a minimal improvement would be:

```typescript
// Just add a generic parameter to the options prop
export interface BFormSelectProps<Item = Record<string, unknown>> {
  options?: readonly Item[]
  textField?: string // Keep as string for simplicity
  valueField?: string
  disabledField?: string
  // ...
}
```

This gives some type safety for the options array without constraining the field names. It's a stepping stone toward full type safety.

## Conclusion

The generic approach (Option 1) provides the best developer experience while maintaining full backwards compatibility. It aligns with modern TypeScript practices and Vue 3's capabilities. The implementation can be rolled out incrementally, starting with BFormSelect as a proof of concept.
