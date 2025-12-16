```typescript
// Set up defaults
const app = createApp(App)
app.use(
  createBootstrap({
    components: {
      global: {
        buttonVariant: 'primary', // Applied to all components
        size: 'lg',
      },
      BFormCheckboxGroup: {
        buttonVariant: 'danger', // Specific to checkbox groups
        size: 'sm',
      },
    },
  })
)
```

```vue
<template>
  <!-- Uses component defaults: danger variant, sm size -->
  <BFormCheckboxGroup :options="options" buttons />

  <!-- Explicit prop overrides everything: success variant -->
  <BFormCheckboxGroup :options="options" buttons button-variant="success" />

  <!-- Individual checkboxes outside a group use global defaults: primary variant -->
  <BFormCheckbox button value="a">Option A</BFormCheckbox>
</template>
```
