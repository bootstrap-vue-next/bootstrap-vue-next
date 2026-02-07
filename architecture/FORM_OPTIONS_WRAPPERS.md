# Type-Safe Form Option Components

## Overview

This document covers the architecture, implementation decisions, TypeScript limitations, and user-facing patterns for the form option components: `BFormSelect`, `BFormRadioGroup`, and `BFormCheckboxGroup`.

These components accept an `options` prop of generic type `Item[]` and provide type-safe value extraction. They follow a **base/wrapper architecture** where the wrapper provides generic type safety and option normalization, while the base handles rendering and `useDefaults` support.

---

## Current Architecture (PR #3011)

### Base/Wrapper Pattern

```text
┌─────────────────────────────────┐
│   BFormRadioGroup (Generic)     │  ← User-facing, type-safe
│   - Single generic: <Item>      │
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
- Wrapper components handle type-safe option normalization only
- Base components are not exported from the public API

### Generic Signature (Single Parameter)

All three wrapper components use a single generic parameter:

```typescript
generic="
  Item extends Record<string, unknown> | string | number | boolean =
    | Record<string, unknown>
    | string
    | number
    | boolean
"
```

- `Item` can be a primitive (`string`, `number`, `boolean`) or an object (`Record<string, unknown>`)
- No `ValueKey` parameter — field props (`valueField`, `textField`, etc.) are typed as plain `string`

### modelValue Typing

The `modelValue` on all three components is deliberately typed broadly:

| Component              | modelValue Type               |
| ---------------------- | ----------------------------- |
| `BFormSelect`          | `unknown \| unknown[] \| null` |
| `BFormRadioGroup`      | `unknown \| undefined`         |
| `BFormCheckboxGroup`   | `unknown[] \| undefined`       |

**Why broad types:** Conditional types on `modelValue` (e.g., `Item extends {value: infer V} ? V : Item`) cause Vue's bidirectional v-model inference to **narrow the type to only the first option's value**, producing errors like `Type '"light"' is not assignable to type '"dark"'`. Broad types eliminate this class of errors entirely.

**Trade-off:** Users don't get compile-time v-model type checking from the component itself. They should type their own `ref<T>()` for safety.

### options Prop Typing

```typescript
options?: readonly (Item | Record<string, unknown>)[]
```

The `Record<string, unknown>` union member allows passing objects with any shape without requiring `Item` to match exactly. This is necessary because TypeScript `interface` declarations don't satisfy `Record<string, unknown>` (they lack implicit index signatures).

---

## TypeScript Limitations

### The v-model Narrowing Problem

When `modelValue` uses a conditional type derived from `Item`, Vue's template type inference creates a feedback loop:

1. TypeScript infers `Item` from the `:options` binding
2. It simultaneously infers `Item` from `v-model` (bidirectional)
3. The conditional type on `modelValue` causes TS to pick the **first matching literal** rather than the full union

**Example of the failure:**

```typescript
// options has type: {value: 'dark', text: 'Dark'} | {value: 'light', text: 'Light'} | ...
// TS infers Item from the first element, then:
//   modelValue: Item extends {value: infer V} ? V : ... → resolves to "dark"
// ERROR: Type '"light"' is not assignable to type '"dark"'
```

This affected every component using `as const` arrays, enum options, or string literal unions in docs demos.

**Resolution:** Replace all conditional `modelValue` types with broad types (`unknown`, `unknown[]`).

### Named Interfaces vs Record<string, unknown>

TypeScript interfaces don't have implicit index signatures, so this fails:

```typescript
interface ApiUser {
  userId: string
  username: string
}

// ❌ Type 'ApiUser' is not assignable to type 'Record<string, unknown>'
const options: ApiUser[] = [...]
<BFormSelect :options="options" />
```

**Workaround:** Use `type` instead of `interface`:

```typescript
type ApiUser = {
  userId: string
  username: string
}
// ✅ Works — type aliases have implicit index signatures
```

Or use computed mapping to standard format (see User Patterns below).

### The Two-Generic-Parameter Approach (Abandoned)

An earlier iteration used `<Item, ValueKey>` to provide type-safe `modelValue`:

```typescript
generic="
  Item = Record<string, unknown>,
  ValueKey extends keyof Item = 'value' extends keyof Item ? 'value' : keyof Item
"
```

This was abandoned because:

1. **ValueKey widening**: With named interfaces, TS widens `ValueKey` from literal `'value'` to the full `keyof Item` union, breaking `modelValue` type specificity
2. **InferDefault incompatibility**: Vue's `withDefaults()` can't prove `'value'` satisfies all branches of the conditional default, requiring `@ts-expect-error` suppressions
3. **v-model narrowing**: Even when ValueKey resolved correctly, the conditional `modelValue` type still caused the narrowing problem described above
4. **Complexity**: Two generic parameters doubled the surface area for inference failures

The single-parameter approach with broad `modelValue` is simpler and avoids all these issues.

---

## What Works for Users

### ✅ Primitives (Always Works)

```typescript
const options = ['red', 'green', 'blue']
const selected = ref<string>('red')

<BFormSelect v-model="selected" :options="options" />
```

### ✅ Objects with Standard Format

```typescript
const options = [
  {value: 1, text: 'One'},
  {value: 2, text: 'Two'},
]
const selected = ref<number>(1)

<BFormSelect v-model="selected" :options="options" />
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
```

### ✅ Explicit Field Props

```typescript
const users = [
  {userId: 1, displayName: 'Alice'},
  {userId: 2, displayName: 'Bob'},
]
const selected = ref<number>(1)

<BFormSelect
  v-model="selected"
  :options="users"
  value-field="userId"
  text-field="displayName"
/>
```

Works at runtime. Note: since `modelValue` is `unknown`, there's no compile-time check that `selected` matches `userId`'s type.

### ✅ Boolean Primitives

```typescript
const options = [true, false]
const selected = ref<boolean>(true)

<BFormCheckboxGroup v-model="selected" :options="options" />
```

Booleans display as `"true"` / `"false"` strings.

### ✅ Inline Object Types

```typescript
const options: {value: string; text: string}[] = [
  {value: 'admin', text: 'Administrator'},
  {value: 'user', text: 'User'},
]

<BFormSelect v-model="selected" :options="options" />
```

### ⚠️ Named Interfaces (Requires `type` Instead of `interface`)

```typescript
// ❌ interface — no implicit index signature
interface Role { value: string; text: string }

// ✅ type alias — works
type Role = { value: string; text: string }
```

### ⚠️ Mixed Object/Primitive Arrays

Mixing objects and primitives in the same `options` array is uncommon. It works at runtime but may need `as any` on v-model depending on the types involved.

---

## Decision Tree for Users

```text
What kind of options do you have?
│
├── Primitives (['a', 'b', 'c'] or [1, 2, 3])
│   └── Just pass them directly → ✅ Works
│
├── Objects with {value, text} fields
│   └── Pass directly → ✅ Works
│
├── Objects with custom field names (e.g., {userId, displayName})
│   ├── Can you map to {value, text}?
│   │   └── YES → computed(() => items.map(...)) → ✅ Recommended
│   │
│   └── Prefer field props?
│       └── Use value-field="userId" text-field="displayName" → ✅ Works at runtime
│
└── Named TypeScript interface?
    └── Use `type` instead of `interface` → ✅ Works
```

---

## Component API (Options-Related Props)

All three components share these props:

| Prop             | Type                 | Default      | Description                          |
| ---------------- | -------------------- | ------------ | ------------------------------------ |
| `options`        | `(Item \| Record<string, unknown>)[]` | `[]`  | Available options |
| `value-field`    | `string`             | `'value'`    | Object field containing the value    |
| `text-field`     | `string`             | `'text'`     | Object field containing display text |
| `disabled-field` | `string`             | `'disabled'` | Object field indicating disabled state |

`BFormSelect` additionally has:

| Prop             | Type     | Default      | Description                             |
| ---------------- | -------- | ------------ | ----------------------------------------------- |
| `label-field`    | `string` | `'label'`    | Label for option groups                          |
| `options-field`  | `string` | `'options'`  | Field containing nested options (for groups)     |

---

## Internal Implementation Notes

### Option Normalization (Wrapper Components)

Each wrapper normalizes generic `Item[]` into the base component's expected format:

```typescript
// Primitives → {value: el, text: String(el)}
// Objects → {value: el[valueField], text: el[textField], disabled: el[disabledField]}
```

The runtime code uses `typeof` guards before accessing object properties, then casts to `Record<string, unknown>` for property access:

```typescript
if (typeof el === 'string' || typeof el === 'number' || typeof el === 'boolean') {
  return { value: el, text: String(el) }
}
// Safe to index — runtime guard ensures el is an object
const value = (el as Record<string, unknown>)[props.valueField as string]
```

### defineModel Typing

Each wrapper uses `defineModel` with the broad type:

```typescript
// BFormSelect
const modelValue = defineModel<unknown | unknown[] | null>({ default: '' as any })

// BFormRadioGroup
const modelValue = defineModel<unknown | undefined>({ default: undefined as any })

// BFormCheckboxGroup
const modelValue = defineModel<unknown[] | undefined>({ default: () => [] })
```

### Generated .d.ts Files

The `.d.ts` output reflects the broad `modelValue` types. After a **clean build** (delete `dist/` first), the generated types should show:

```typescript
modelValue?: unknown | unknown[] | null   // BFormSelect
modelValue?: unknown | undefined          // BFormRadioGroup
modelValue?: unknown[] | undefined        // BFormCheckboxGroup
```

**Important:** If you see conditional types (`Item extends {value: infer V} ? V : ...`) in the `.d.ts` output, the build used stale cache. Delete `dist/` and rebuild.

---

## Future Considerations

### Base/Wrapper Benefits Beyond Types

The base/wrapper split was primarily motivated by `useDefaults` incompatibility with generics:

| Aspect            | Base Component           | Wrapper Component          |
| ----------------- | ------------------------ | -------------------------- |
| **Generics**      | ❌ No                    | ✅ Yes                     |
| **useDefaults**   | ✅ Works                 | N/A (delegates)            |
| **Rendering**     | ✅ Handles all           | ❌ No (delegates)          |
| **Normalization** | ❌ Receives normalized   | ✅ Performs normalization  |

This means ALL props on the base component get global defaults support via `createBootstrap()`, without manual computed chains.

### Potential Improvement: Typed modelValue

If Vue/TypeScript improve conditional type handling in v-model inference, the `modelValue` types could be tightened. The broad types are a pragmatic workaround, not a permanent design goal. Watch for:

- Vue RFC on improved generic component inference
- TypeScript improvements to bidirectional type inference in template expressions

### Performance

The wrapper pattern has negligible overhead. At typical scales (1-100 form groups per page), benchmarks show the wrapper is actually **faster** than a monolithic component due to simpler computed dependency graphs. Only at unrealistic scales (1000+ instances) does a small per-instance overhead appear (~0.04ms each).

---

## Summary

| Scenario                        | Works? | Type-Safe? | Notes                              |
| ------------------------------- | ------ | ---------- | ---------------------------------- |
| Primitives                      | ✅     | ✅ (ref)   | Simplest case                      |
| Standard `{value, text}` objects | ✅    | ✅ (ref)   | Recommended format                 |
| Computed mapping to standard    | ✅     | ✅ (ref)   | Best for custom objects            |
| Explicit field props            | ✅     | ⚠️ runtime | No compile-time v-model check      |
| Inline type aliases             | ✅     | ✅ (ref)   | Use `type`, not `interface`        |
| Named `interface` in options    | ⚠️     | ⚠️         | Use `type` alias instead           |
| Boolean primitives              | ✅     | ✅ (ref)   | Displays as "true"/"false"         |
| Mixed object + primitive array  | ⚠️     | ❌         | May need `as any` on v-model       |

**Key principle:** Type your `ref<T>()` for compile-time safety. The component's `modelValue` is `unknown` to avoid inference narrowing, so the type safety lives in your own code.
