# Global options

Global configurations allow you to set default prop values for all Vue components in your application. This is achieved using the createBootstrap plugin. Here's an example:

```ts
createBootstrap({
  components: {
    global: {
      type: 'grow', // Caution: This impacts BFormInput, which does not support this value!
    },
    BAccordion: {
      flush: true,
    },
    BFormText: {
      text: 'foobar!',
    },
    BSpinner: {
      type: 'grow',
    },
  },
})
```

In the above example, each key of the components object corresponds to a Vue component name, and the value is an object that defines the default prop values for that component.

The special key `global` can be used to set a default value for a prop across all components. For example, if you set type: 'grow' under global, all components that have a type prop will default to 'grow', regardless of whether the component's prop definition accepts it.

Please note that using global is a significant decision that can have wide-ranging effects on your application, so use it judiciously. For example, one use case is the Nuxt plugin, which sets `teleportsTo` to the Nuxt `#teleports` target, providing a designated area for teleporting components.

## Limitations with `modelValues`

Please note that global configurations do not apply to `modelValues`. This is due to the fact that we cannot accurately target when a value is "passive" (i.e., when its prop is not bound).

In Vue, a prop is considered "passive" if it's not bound to a parent component's data property or computed property. Since global configurations work by setting default prop values, they cannot be applied to "passive" props as there's no way to determine when these props are being used.

Therefore, while global configurations can be a powerful tool for managing default prop values across your application, they should be used with caution and understanding of their limitations.
