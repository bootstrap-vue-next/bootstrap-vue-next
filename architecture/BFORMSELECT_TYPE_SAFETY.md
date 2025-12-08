# BFormSelect Type Safety

## Overview

BFormSelect now provides complete TypeScript type safety through generic type parameters, enabling:

1. **Strongly typed options arrays** - TypeScript knows the exact structure of items
2. **Field name validation** - Field props are constrained to actual object keys
3. **Automatic type inference** - v-model type is inferred from the value field

## Implementation

### Generic Parameters

```typescript
BFormSelect<Item = Record<string, unknown>, ValueKey extends keyof Item = keyof Item>
```

- `Item`: The type of objects in the options array (defaults to `Record<string, unknown>`)
- `ValueKey`: The specific key used for values (defaults to any key of `Item`)

### How It Works

1. User provides typed options: `const users: User[] = [...]`
2. Component infers `Item = User`
3. User specifies `value-field="id"`
4. Component infers `ValueKey = 'id'`
5. Component sets `modelValue` type to `User['id']`
6. v-model gets proper type automatically

### Type Constraints

```typescript
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

## Backward Compatibility

- **100% backward compatible** - No breaking changes
- **Opt-in type safety** - Only works when users provide explicit types
- **Graceful degradation** - Works with untyped data using defaults

## Examples

See `/apps/docs/src/docs/components/form-select.md` section "TypeScript type safety" for user-facing examples.

Demo files:

- `SelectTypeSafeBasic.vue` - Basic typed usage
- `SelectTypeSafeValidation.vue` - Field validation
- `SelectTypeSafeMultiple.vue` - Multiple select
- `SelectTypeSafeAPI.vue` - API response pattern
- `SelectTypeSafeEnum.vue` - Enum values

## Technical Details

### Component Implementation

Both `BFormSelect.vue` and `BFormSelectOptionGroup.vue` use Vue 3.3+ generic script syntax:

```vue
<script
  setup
  lang="ts"
  generic="Item = Record<string, unknown>, ValueKey extends keyof Item = keyof Item"
>
```

### Type Defaults

Props use type assertions to provide sensible defaults while maintaining type safety:

```typescript
const props = withDefaults(defineProps<BFormSelectProps<Item, ValueKey>>(), {
  valueField: 'value' as ValueKey & string,
  textField: 'text' as keyof Item & string,
  disabledField: 'disabled' as keyof Item & string,
})
```

### Known Limitations

- `useDefaults` composable is incompatible with generic props (removed from generic components)
- Type casts required when passing props between generic components with different constraints
- Generic constraints only work at compile-time, no runtime validation

## Maintenance Notes

When modifying BFormSelect:

1. Maintain generic type parameters on both `BFormSelect` and `BFormSelectOptionGroup`
2. Keep type constraints consistent across all field props
3. Update documentation examples if adding new field props
4. Ensure backward compatibility - defaults should work without type annotations

## Related Files

- `packages/bootstrap-vue-next/src/types/ComponentProps.ts` - Type definitions
- `packages/bootstrap-vue-next/src/components/BFormSelect/BFormSelect.vue` - Main component
- `packages/bootstrap-vue-next/src/components/BFormSelect/BFormSelectOptionGroup.vue` - Option group component
- `apps/docs/src/docs/components/form-select.md` - User documentation
- `apps/docs/src/docs/components/demo/SelectTypeSafe*.vue` - Demo examples
