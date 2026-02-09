---
description: >
  Type-safe `options` prop patterns for BFormSelect, BFormRadioGroup, BFormCheckboxGroup, and
  BFormDatalist. Learn how TypeScript generics provide compile-time safety for option values and
  v-model inference.
---

## Overview

Several form components accept an `options` prop to generate their entries from data:

- [`BFormSelect`](/docs/components/form-select)
- [`BFormRadioGroup`](/docs/components/form-radio)
- [`BFormCheckboxGroup`](/docs/components/form-checkbox)
- [`BFormDatalist`](/docs/components/form#datalist-helper)

All of these components use TypeScript generics to provide type safety. The level of type safety
depends on how you provide your options.

## How it works

`BFormSelect`, `BFormRadioGroup`, and `BFormCheckboxGroup` use an **Options array generic** that
captures the full type of the array you pass to the `options` prop. The component then extracts
the union of possible values from that array to type the `v-model`.

The extraction rules are:

1. **Primitive items** (`string`, `number`, `boolean`) — the item itself is a possible value
2. **Object items** with a `value` field — the type of the `value` field is a possible value
3. **Other objects** — the value type falls back to `unknown`

This means you get the strongest typing when your options use the standard `{value, text}` format
or when they are simple primitives.

## Primitive options

When options are primitives, the `v-model` type is inferred as the union of those primitives:

```vue
<template>
  <BFormRadioGroup v-model="color" :options="colors" />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const colors = ['Red', 'Green', 'Blue'] as const

// TypeScript infers: Ref<'Red' | 'Green' | 'Blue'>
const color = ref<'Red' | 'Green' | 'Blue'>('Red')
</script>
```

Without `as const`, the array type is `string[]` and the `v-model` type will be `string` —
still type-safe, just less specific.

## Object options with standard fields

When options use `{value, text}` format, the `v-model` type is inferred from the `value` fields:

```vue
<template>
  <BFormSelect v-model="userId" :options="userOptions" />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const userOptions = [
  {value: 1, text: 'Alice'},
  {value: 2, text: 'Bob'},
  {value: 3, text: 'Charlie'},
] as const

// TypeScript infers: Ref<1 | 2 | 3>
const userId = ref<number>(1)
</script>
```

## Mapping domain objects

When your data doesn't use `{value, text}` format, use `computed` to map it. This is the
recommended pattern for working with API responses, database records, or any typed interfaces:

```vue
<template>
  <BFormCheckboxGroup v-model="selectedIds" :options="userOptions" />
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

interface User {
  user_id: number
  display_name: string
  is_active: boolean
}

const users: User[] = [
  {user_id: 1, display_name: 'Alice', is_active: true},
  {user_id: 2, display_name: 'Bob', is_active: true},
  {user_id: 3, display_name: 'Charlie', is_active: false},
]

const userOptions = computed(() =>
  users.map((u) => ({
    value: u.user_id,
    text: u.display_name,
    disabled: !u.is_active,
  }))
)

const selectedIds = ref<number[]>([])
</script>
```

The `computed` mapping approach gives you:

- Full TypeScript safety on the mapping itself (typos in `u.user_id` etc. are caught)
- Standard `{value, text, disabled}` format that the component understands natively
- Clean separation between your domain model and the component's expected format

## Using `as const` for literal types

Adding `as const` to your options array enables TypeScript to infer **literal types** rather than
widened types. This is the key to getting the most precise `v-model` typing:

```typescript
// Without as const: type is { value: string; text: string }[]
const options = [
  {value: 'sm', text: 'Small'},
  {value: 'md', text: 'Medium'},
]

// With as const: type is readonly [{ readonly value: 'sm'; ... }, ...]
const options = [
  {value: 'sm', text: 'Small'},
  {value: 'md', text: 'Medium'},
] as const
```

With `as const`, the inferred `v-model` type is `'sm' | 'md'` rather than just `string`.

## Enums

TypeScript enums work naturally as option values:

```vue
<template>
  <BFormRadioGroup v-model="priority" :options="priorityOptions" />
</template>

<script setup lang="ts">
import {ref} from 'vue'

enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

const priorityOptions = [
  {value: Priority.Low, text: 'Low'},
  {value: Priority.Medium, text: 'Medium'},
  {value: Priority.High, text: 'High'},
]

const priority = ref<Priority>(Priority.Medium)
</script>
```

## Custom field names

`BFormSelect`, `BFormRadioGroup`, and `BFormCheckboxGroup` accept `value-field`, `text-field`,
and `disabled-field` props to tell the component which properties of your objects to use as the
value, text, and disabled state. These are convenience props for simple cases where your objects
already have descriptive field names:

```vue
<BFormRadioGroup
  v-model="selected"
  :options="items"
  value-field="id"
  text-field="name"
  disabled-field="inactive"
/>
```

::: info NOTE
When using custom field names, the `v-model` type inference is based on the `value` field of
your objects (if present). If your objects use a different field name for values
(like `id` above), the component will still work correctly at runtime, but TypeScript's
`v-model` inference won't narrow to the specific field type.

For the strongest typing, map your data to `{value, text}` format using `computed` as shown in
[Mapping domain objects](#mapping-domain-objects) above.
:::

## BFormDatalist

`BFormDatalist` uses a different generic approach (`Item`/`ValueKey`) that provides compile-time
validation of field names. When you pass typed options, TypeScript will ensure that `value-field`,
`text-field`, and `disabled-field` are valid keys of your option type:

```vue
<BFormDatalist
  id="user-list"
  :options="users"
  value-field="id"
  text-field="name"
  disabled-field="inactive"
/>
```

TypeScript will report an error if `value-field` references a property that doesn't exist on
the option type. Since `BFormDatalist` doesn't have a `v-model` (it's a
[`<datalist>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)
backing an `<input>`), the type safety focus is on field name validation rather than value inference.

## Backward compatibility

Type safety is fully opt-in. Existing code without explicit types continues to work:

```vue
<!-- No types needed — works exactly as before -->
<BFormSelect v-model="selected" :options="items" />
```

The generic defaults to a broad union type, so untyped usage has no restrictions. To enable
stronger typing, provide explicit types for your data or use `as const`.

## Multiple select

For `BFormSelect` with `multiple`, the `v-model` is an array of the inferred value type:

```vue
<template>
  <BFormSelect v-model="selectedTags" :options="tagOptions" multiple />
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

interface Tag {
  tagId: string
  tagName: string
}

const tags: Tag[] = [
  {tagId: 'vue', tagName: 'Vue.js'},
  {tagId: 'ts', tagName: 'TypeScript'},
  {tagId: 'bs', tagName: 'Bootstrap'},
]

const tagOptions = computed(() => tags.map((tag) => ({value: tag.tagId, text: tag.tagName})))

const selectedTags = ref<string[]>([])
</script>
```

For `BFormCheckboxGroup`, the `v-model` is always an array of the inferred value type.
