## Backward Compatibility

Type safety is completely opt-in and maintains 100% backward compatibility. Existing code without explicit types continues to work exactly as before:

```vue
<!-- Works without type annotations -->
<ComponentName v-model="selected" :options="items" />
```

To enable type safety, simply provide explicit types for your data:

```typescript
interface MyItem {
  id: number
  name: string
}

const items: MyItem[] = [...]
```
