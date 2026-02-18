Type safety is fully opt-in and backward compatible. Existing code without explicit types
continues to work exactly as before:

```vue
<ComponentName v-model="selected" :options="items" />
```

To enable stronger typing, provide explicit types for your data or use `as const` on your
options arrays. See [Type-Safe Options](/docs/reference/type-safe-options) for details.
