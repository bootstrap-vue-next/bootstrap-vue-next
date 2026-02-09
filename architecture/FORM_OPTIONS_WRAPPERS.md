# Type-Safe Form Option Components

## Overview

This document covers the architecture, implementation decisions, TypeScript patterns, and user-facing patterns for the form option components: `BFormSelect`, `BFormRadioGroup`, and `BFormCheckboxGroup`.

These components accept an `options` prop and provide **strong type safety for modelValue in core cases** using an Options array generic approach. They follow a **base/wrapper architecture** where the wrapper provides generic type safety and option normalization, while the base handles rendering and `useDefaults` support.

---

## Current Architecture

### Base/Wrapper Pattern

```text
┌─────────────────────────────────┐
│   BFormRadioGroup (Generic)     │  ← User-facing, type-safe
│   - Generic: Options array      │
│   - Extracts value union        │
│   - Normalizes options          │
│   - Forwards to base            │
└──────────────┬──────────────────┘
               │ Normalized data
               ▼
┌─────────────────────────────────┐
│ BFormRadioGroupBase (Concrete)  │  ← Internal, handles rendering
│   - Uses useDefaults            │
│   - Full default support        │
│   - Renders child components    │
└─────────────────────────────────┘
```

Applies identically to `BFormSelect`/`BFormSelectBase` and `BFormCheckboxGroup`/`BFormCheckboxGroupBase`.

**Why this pattern:**

- Generic components can't use `useDefaults` (runtime Proxy breaks compile-time inference)
- Base components get `useDefaults` for free — all props support global defaults
- Wrapper components handle type-safe option normalization and value extraction
- Base components are not exported from the public API

### Generic Signature (Options Array)

All three wrapper components use an Options array generic parameter:

```typescript
generic="
  Options extends readonly (Record<string, unknown> | string | number | boolean)[] =
    readonly (Record<string, unknown> | string | number | boolean)[]
"
```

- `Options` captures the entire options array type
- Allows TypeScript to infer literal types from `as const` arrays
- Components extract value union from the options type

### modelValue Typing - ENHANCED

All three wrapper components use `defineModel` typed with `OptionsValues<Options>`, which provides strong compile-time typing when the `Options` generic can be inferred (e.g., via `as const`).

#### Type-Extraction Utilities

`ExtractItemValue` and `OptionsValues` are internal type helpers (defined in `types/OptionsTypes.ts`) that extract value unions from an options array type:

```typescript
// Extract value from a single option item
type ExtractItemValue<T> =
  T extends string | number | boolean ? T :
  T extends {value: infer V} ? V :
  unknown

// Extract value union from an options array
type OptionsValues<T extends readonly unknown[]> =
  T extends readonly (infer Item)[] ? ExtractItemValue<Item> : unknown
```

These utilities power `defineModel` directly — they are not merely conceptual:

```typescript
// Actual defineModel signatures in each wrapper component
const modelValue = defineModel<OptionsValues<Options> | OptionsValues<Options>[] | null>()  // BFormSelect
const modelValue = defineModel<OptionsValues<Options> | undefined>()                        // BFormRadioGroup
const modelValue = defineModel<OptionsValues<Options>[] | undefined>()                      // BFormCheckboxGroup
```

| Component            | modelValue Type                                              | Strong Typing |
| -------------------- | ------------------------------------------------------------ | ------------- |
| `BFormSelect`        | `OptionsValues<Options> \| OptionsValues<Options>[] \| null` | ✅ Core cases |
| `BFormRadioGroup`    | `OptionsValues<Options> \| undefined`                        | ✅ Core cases |
| `BFormCheckboxGroup` | `OptionsValues<Options>[] \| undefined`                      | ✅ Core cases |

#### When type resolution falls back to `unknown`

When `Options` cannot be narrowed beyond the default constraint (e.g., no `as const`, no explicit generic), `OptionsValues` resolves to `unknown`. This happens because:

- `OptionsValues<readonly (Record<string, unknown> | string | number | boolean)[]>` → `ExtractItemValue<Record<string, unknown> | string | number | boolean>` → includes `unknown` from the `Record` branch, which absorbs the union → `unknown`

**Core cases with strong typing:**

- ✅ Primitive arrays: `['red', 'green', 'blue'] as const` → modelValue is `'red' | 'green' | 'blue'`
- ✅ Standard object arrays: `[{value: 1, text: 'One'}, ...] as const` → modelValue is `1 | 2 | ...`
- ✅ Non-const typed arrays: `string[]` → modelValue is `string` (base type, not `unknown`)

**Edge cases (fallback to `unknown`):**

- ⚠️ Custom field names (valueField/textField): Falls back to `unknown` (no generic tracks the field name)
- ⚠️ Untyped arrays without `as const`: Default generic resolves to `unknown`
- ⚠️ Mixed arrays: Union of extracted types (may include `unknown` from object branches)

#### User-facing type safety

For the strongest guarantees, users should type their `ref<T>()` explicitly rather than relying solely on component inference:

```typescript
const options = ['red', 'green', 'blue'] as const
const selected = ref<'red' | 'green' | 'blue'>('red')  // ← explicit typing on the ref
```

This ensures the variable is correctly typed regardless of how well the component's generic inference works. Component inference provides an additional safety net but is not a substitute for explicit typing on the consuming side.

### options Prop Typing

```typescript
options?: Options  // Captures the specific array type
```

The Options generic parameter captures the exact array type passed by the user, including readonly modifiers and const assertions.

---

## TypeScript Solution - Options Array Generic

### The v-model Narrowing Problem (Solved)

**Previous issue:** When `modelValue` used a conditional type derived from `Item`, Vue's template type inference created a feedback loop that narrowed to only the first matching literal.

**Solution:** Use the Options array as the generic parameter and extract values in the component implementation:

1. Generic captures the entire options array type
2. Type helpers extract the union of all values
3. No conditional types in the props interface itself
4. `defineModel` uses the extracted type

**Example:**

```typescript
// User code
const options = ['red', 'green', 'blue'] as const
<BFormSelect :options="options" v-model="color" />

// TypeScript infers:
// Options = readonly ['red', 'green', 'blue']
// OptionsValues<Options> = 'red' | 'green' | 'blue'
// modelValue type = 'red' | 'green' | 'blue' | ('red' | 'green' | 'blue')[] | null
```

### Implementation Pattern

Each component imports type utilities from `types/OptionsTypes.ts` and applies them to `defineModel`:

```typescript
import {type OptionsValues} from '../../types/OptionsTypes'

// OptionsValues extracts the value union from the Options array generic
const modelValue = defineModel<OptionsValues<Options> | ...>()
```

This approach:

- ✅ Provides strong typing for primitive and standard object arrays
- ✅ Works with `as const` for literal types
- ✅ Avoids v-model narrowing completely
- ⚠️ Falls back to `unknown` for custom field names (acceptable trade-off)

---

## What Works for Users

### ✅ Primitives with `as const` (Strongly Typed)

```typescript
const options = ['red', 'green', 'blue'] as const
const selected = ref<typeof options[number]>('red')
// Type: 'red' | 'green' | 'blue'

<BFormSelect v-model="selected" :options="options" />
// modelValue is strongly typed as 'red' | 'green' | 'blue' | ('red' | 'green' | 'blue')[] | null
```

### ✅ Objects with Standard Format (Strongly Typed)

```typescript
const options = [
  {value: 1, text: 'One'},
  {value: 2, text: 'Two'},
] as const
type OptionValue = typeof options[number]['value']
const selected = ref<OptionValue>(1)
// Type: 1 | 2

<BFormSelect v-model="selected" :options="options" />
// modelValue is strongly typed as 1 | 2 | (1 | 2)[] | null
```

### ✅ Computed Mapping (Recommended for Custom Objects)

```typescript
interface User {
  id: number
  name: string
  inactive: boolean
}

const users: User[] = [...]
const selected = ref<number>(1)

const options = computed(() =>
  users.map(u => ({value: u.id, text: u.name, disabled: u.inactive}))
)

<BFormSelect v-model="selected" :options="options" />
// modelValue is typed as number | number[] | null
```

### ⚠️ Explicit Field Props (Fallback to unknown)

```typescript
const users = [
  {userId: 1, displayName: 'Alice'},
  {userId: 2, displayName: 'Bob'},
] as const
const selected = ref<number>(1)

<BFormSelect
  v-model="selected"
  :options="users"
  value-field="userId"
  text-field="displayName"
/>
// Works at runtime
// modelValue is typed as unknown - user should type their ref
```

### ✅ Boolean Primitives

```typescript
const options = [true, false] as const
const selected = ref<boolean>(true)

<BFormCheckboxGroup v-model="selected" :options="options" />
```

Booleans display as `"true"` / `"false"` strings.

### ✅ Inline Object Types

```typescript
const options: {value: string; text: string}[] = [
  {value: 'admin', text: 'Administrator'},
  {value: 'user', text: 'User'},
] as const

<BFormSelect v-model="selected" :options="options" />
// modelValue typed as string | string[] | null
```

### ⚠️ Mixed Object/Primitive Arrays

Mixing objects and primitives in the same `options` array is uncommon:

```typescript
const options = ['string', {value: 1, text: 'Number'}] as const
// modelValue will be: string | number | (string | number)[] | null
```

Works at runtime, type extraction produces union of all value types.

---

## Decision Tree for Users

```text
What kind of options do you have?
│
├── Primitives (['a', 'b', 'c'] or [1, 2, 3])
│   ├── Use 'as const' for literals → ✅ Strongly typed
│   └── Without 'as const' → ✅ Base type (string | number)
│
├── Objects with {value, text} fields
│   ├── Use 'as const' → ✅ Strongly typed value union
│   └── Without 'as const' → ✅ Typed as value field type
│
├── Objects with custom field names (e.g., {userId, displayName})
│   ├── Can you map to {value, text}?
│   │   └── YES → computed(() => items.map(...)) → ✅ Recommended, strongly typed
│   │
│   └── Prefer field props?
│       └── Use value-field="userId" text-field="displayName" → ⚠️ Works at runtime, weakly typed
│
└── Non-const runtime arrays?
    └── Type extraction works with base types → ✅ Typed as string, number, etc.
```

Key principle: **Use `as const` for literal type inference. Type your `ref<T>()` explicitly for compile-time safety.**

---

## Component API (Options-Related Props)

All three components share these props:

| Prop             | Type                                     | Default      | Description                            |
| ---------------- | ---------------------------------------- | ------------ | -------------------------------------- |
| `options`        | `(Options \| Record<string, unknown>)[]` | `[]`         | Available options                      |
| `value-field`    | `string`                                 | `'value'`    | Object field containing the value      |
| `text-field`     | `string`                                 | `'text'`     | Object field containing display text   |
| `disabled-field` | `string`                                 | `'disabled'` | Object field indicating disabled state |

`BFormSelect` additionally has:

| Prop            | Type     | Default     | Description                                  |
| --------------- | -------- | ----------- | -------------------------------------------- |
| `label-field`   | `string` | `'label'`   | Label for option groups                      |
| `options-field` | `string` | `'options'` | Field containing nested options (for groups) |

---

## Internal Implementation Notes

### Option Normalization (Wrapper Components)

Each wrapper normalizes the generic `Options` array into the base component's expected format:

```typescript
// Primitives → {value: el, text: String(el)}
// Objects → {value: el[valueField], text: el[textField], disabled: el[disabledField]}
```

The runtime code uses `typeof` guards before accessing object properties, then casts to `Record<string, unknown>` for property access:

```typescript
if (typeof el === 'string' || typeof el === 'number' || typeof el === 'boolean') {
  return {value: el, text: String(el)}
}
// Safe to index — runtime guard ensures el is an object
const value = (el as Record<string, unknown>)[props.valueField as string]
```

### defineModel Typing

Each wrapper uses `defineModel` with `OptionsValues<Options>` to carry the generic through:

```typescript
// BFormSelect
const modelValue = defineModel<OptionsValues<Options> | OptionsValues<Options>[] | null>({default: '' as any})

// BFormRadioGroup
const modelValue = defineModel<OptionsValues<Options> | undefined>({default: undefined as any})

// BFormCheckboxGroup
const modelValue = defineModel<OptionsValues<Options>[] | undefined>({default: () => []})
```

When `Options` uses its default constraint, `OptionsValues` resolves to `unknown`, so the effective type for unparameterized usage is still broad (e.g., `unknown | unknown[] | null`).

### Generated .d.ts Files

The `.d.ts` output preserves the `OptionsValues<Options>` types. After a **clean build** (delete `dist/` first), the generated types should show:

```typescript
modelValue?: OptionsValues<Options> | OptionsValues<Options>[] | null  // BFormSelect
modelValue?: OptionsValues<Options> | undefined                       // BFormRadioGroup
modelValue?: OptionsValues<Options>[] | undefined                     // BFormCheckboxGroup
```

When `Options` is not narrowed (default generic), these resolve to `unknown`-based unions at the call site.

**Important:** If you see raw conditional types (e.g. `T extends {value: infer V} ? V : ...`) inlined in the `.d.ts` output, the build used stale cache. Delete `dist/` and rebuild.

---

## Future Considerations

### Base/Wrapper Benefits Beyond Types

The base/wrapper split was primarily motivated by `useDefaults` incompatibility with generics:

| Aspect            | Base Component         | Wrapper Component         |
| ----------------- | ---------------------- | ------------------------- |
| **Generics**      | ❌ No                  | ✅ Yes                    |
| **useDefaults**   | ✅ Works               | N/A (delegates)           |
| **Rendering**     | ✅ Handles all         | ❌ No (delegates)         |
| **Normalization** | ❌ Receives normalized | ✅ Performs normalization |

This means ALL props on the base component get global defaults support via `createBootstrap()`, without manual computed chains.

### Potential Improvement: Typed modelValue

If Vue/TypeScript improve conditional type handling in v-model inference, the `modelValue` types could be tightened. The broad types are a pragmatic workaround, not a permanent design goal. Watch for:

- Vue RFC on improved generic component inference
- TypeScript improvements to bidirectional type inference in template expressions

### Performance

The wrapper pattern has negligible overhead. At typical scales (1-100 form groups per page), benchmarks show the wrapper is actually **faster** than a monolithic component due to simpler computed dependency graphs. Only at unrealistic scales (1000+ instances) does a small per-instance overhead appear (~0.04ms each).

---

## Summary

| Scenario                         | Works? | Type-Safe? | Notes                         |
| -------------------------------- | ------ | ---------- | ----------------------------- |
| Primitives                       | ✅     | ✅ (ref)   | Simplest case                 |
| Standard `{value, text}` objects | ✅     | ✅ (ref)   | Recommended format            |
| Computed mapping to standard     | ✅     | ✅ (ref)   | Best for custom objects       |
| Explicit field props             | ✅     | ⚠️ runtime | No compile-time v-model check |
| Inline type aliases              | ✅     | ✅ (ref)   | Use `type`, not `interface`   |
| Named `interface` in options     | ⚠️     | ⚠️         | Use `type` alias instead      |
| Boolean primitives               | ✅     | ✅ (ref)   | Displays as "true"/"false"    |
| Mixed object + primitive array   | ⚠️     | ❌         | May need `as any` on v-model  |

**Key principle:** Type your `ref<T>()` for compile-time safety. The component's `modelValue` is `unknown` to avoid inference narrowing, so the type safety lives in your own code.
