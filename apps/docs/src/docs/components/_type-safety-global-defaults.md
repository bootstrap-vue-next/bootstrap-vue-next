Due to technical limitations with TypeScript generic components, this component cannot fully participate in the global defaults system provided by `createBootstrap({ defaults: {...} })` or `BApp`. However:

- ✅ **Commonly-customized props** like `buttonVariant`, `size`, and `state` **DO** support global defaults
- ⚠️ **Other props** will use their hardcoded default values only
- ✅ You can still override any prop on individual component instances

This trade-off enables full type safety with IDE autocomplete and compile-time validation.
