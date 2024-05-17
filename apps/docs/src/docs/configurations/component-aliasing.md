# Component Aliasing

Our system provides the flexibility to create aliases for components. This feature can be particularly beneficial when you prefer to use a more intuitive name or a name that aligns better with your project's naming conventions.

To establish an alias, you need to define a mapping between the alias and the actual component name within the `componentAliasMapping` object. Here's an example:

```ts
createBootstrap({
  aliases: {
    BInput: 'BFormInput',
  },
})
```

- Note: This library extends the GlobalComponents interface, enabling TypeScript to provide type inference without the need for importing. However, since we can not predict the aliases you will provide, we can not add these to the GlobalComponents. If you wish, you can add it like so:

```ts
import type {BFormInput} from 'bootstrap-vue-next'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BInput: typeof BFormInput
  }
}
```

- Note: It is important to remember that this process registers the component globally. This means it will not be tree-shaken. The usage of this feature is independent from the tree-shaken installation method in the getting started docs, and any components added to the alias will be registered in the global components registry.
