## Type Safety

provides full TypeScript type safety through generic type parameters. When you provide typed options, TypeScript will:

1. **Validate field names** - Ensure `value-field`, `text-field`, and `disabled-field` props reference actual keys of your option type
2. **Infer v-model type** - Automatically determine the correct type for `v-model` based on your `value-field`
