---
title: Getting Started
description: Get started with BootstrapVueNext and Bootstrap `v5`, the world's most popular framework for building responsive, mobile-first sites.
---

## Why BootstrapVueNext?

BootstrapVueNext is an attempt to have the [BootstrapVue](https://bootstrap-vue.github.io/bootstrap-vue/) components in Vue3, Bootstrap 5, and typescript. Another goal is to have the components written in a simple and readable way for a better developer experience.

## Migrating from BootstrapVue

If you are migrating from BootstrapVue, please refer to our [migration knowledge base](/docs/migration-data/)

## Contribute and Support 🙌

Your contributions are always welcome. If you're interested in contributing, here's how you can help:

- submit an [issue](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues)
- or better, a [pull request](https://github.com/bootstrap-vue-next/bootstrap-vue-next/pulls)

Read our [Contribution Guide](https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md) on how to start helping.

## Install

### Installation - Vue.js

- First install the package

::: code-group

```bash [PNPM]
pnpm add bootstrap bootstrap-vue-next
```

```bash [BUN]
bun add bootstrap bootstrap-vue-next
```

```bash [YARN]
yarn add bootstrap bootstrap-vue-next
```

```bash [NPM]
npm i bootstrap bootstrap-vue-next
```

:::

## Setup

Bootstrap-vue-next **requires** one of the following setup methods for the library to function properly. The new **BApp component approach** is recommended for new projects, while the **plugin approach** is still supported for backward compatibility. Both approaches work for application mounting and unit testing.

::: info Required Step
You **must** use either the `BApp` component or the `createBootstrap` plugin. Without one of these, the library's internal services (orchestrators, registries, RTL support, etc.) will not be available and components that depend on them will not work correctly.
:::

### BApp Component (Recommended)

The modern way to setup bootstrap-vue-next using the `BApp` component:

See the [BApp component documentation](/docs/components/app) for complete configuration options.

<HighlightCard>

```vue
<!-- App.vue -->
<template>
  <BApp>
    <!-- Your application content -->
    <router-view />
  </BApp>
</template>

<script setup lang="ts">
import {BApp} from 'bootstrap-vue-next'
</script>
```

```typescript
// main.ts
import {createApp} from 'vue'
import App from './App.vue'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.mount('#app')
```

</HighlightCard>

::: warning Vue Provide/Inject Limitation
Composables like `useToast()`, `useModal()`, and `usePopover()` **cannot** be called in the same component that declares `<BApp>`. They rely on values provided by `BApp`, and Vue's `inject` only works in child components — not in the component that calls `provide` itself.

To use these composables, place `<BApp>` at least one component level above where the composables are called. See the [BApp documentation](/docs/components/app#working-with-composables) for more details.
:::

### Plugin Approach (Legacy)

The traditional plugin-based setup is still supported:

<HighlightCard class="mt-3">

```typescript
// main.js/ts
import {createApp} from 'vue'
import {createBootstrap} from 'bootstrap-vue-next/plugins/createBootstrap'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(createBootstrap()) // Important
app.mount('#app')
```

</HighlightCard>

Now, you can begin importing and using components

::: warning

If you are using individual plugins such as `modalControllerPlugin`, `toastControllerPlugin`, or
`popoverControllerPlugin`, please see the [`BApp` documentation](/docs/components/app#backward-compatibility) for additional details.

:::

### Automatic Registering of Components

::: info In Addition to Setup
This step is **optional** and is used **in addition to** the [BApp](#bapp-component-recommended) or [Plugin](#plugin-approach-legacy) setup above. Its sole purpose is to allow automatic importing of components — you still need the BApp or plugin setup for the library to function.
:::

To have components automatically registered **and** tree-shaken, we recommend [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components). Read their docs for additional details. We supply a resolver

::: code-group

```bash [PNPM]
pnpm add unplugin-vue-components -D
```

```bash [BUN]
bun add unplugin-vue-components -D
```

```bash [YARN]
yarn add unplugin-vue-components -D
```

```bash [NPM]
npm i unplugin-vue-components -D
```

:::

The following is an example of a basic `vite.config.js/ts`. All you need to do is add **Components** to the Vite **plugins** option, with the additional imports:

<HighlightCard>

```ts
// vite.config.js/ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'bootstrap-vue-next/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
})
```

</HighlightCard>

#### Aliasing

With the `BootstrapVueNextResolver` we also have an option for aliasing components like so:

```ts
import {Components} from 'unplugin-vue-components'
import {BootstrapVueNextResolver} from 'bootstrap-vue-next/resolvers'

Components({
  resolvers: [
    BootstrapVueNextResolver({
      aliases: {
        BInput: 'BFormInput',
      },
    }),
  ],
})
```

### Installation - Nuxt.js 3

See the dedicated [Nuxt documentation](/docs/nuxt) for full setup, configuration options, and built-in integrations.

For Nuxt projects, install the Nuxt module package:

::: code-group

```bash [PNPM]
pnpm add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt
```

```bash [BUN]
bun add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt
```

```bash [YARN]
yarn add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt
```

```bash [NPM]
npm i bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt
```

:::

### Installation - TypeScript

::: info In Addition to Setup
This step is **optional** and is used **in addition to** the setup above. These peer dependencies add proper type definitions to the package. Without them, the affected types default to `any`. If you are not using the components or features that rely on these packages, you are unlikely to encounter any issues.
:::

This package uses optional peer dependencies to generate type definitions for enhanced functionality. These dependencies are not installed by default to avoid unnecessary bloat in projects that don't require these features. However, if you want full type support, you need to manually install the required packages.

::: code-group

```bash [PNPM]
pnpm add @floating-ui/vue @vueuse/core vue-router
```

```bash [BUN]
bun add @floating-ui/vue @vueuse/core vue-router
```

```bash [YARN]
yarn add @floating-ui/vue @vueuse/core vue-router
```

```bash [NPM]
npm i @floating-ui/vue @vueuse/core vue-router
```

:::

### Installation - CDN

BootstrapVueNext is available through `jsdelivr`. You can add the package by using the following

<HighlightCard>

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap-vue-next@{{version}}/dist/bootstrap-vue-next.umd.min.js"></script>
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap-vue-next@{{version}}/dist/bootstrap-vue-next.min.css"
  rel="stylesheet"
/>
```

</HighlightCard>

- **NOTE** Do not forget to set the version!

<NoteAlert>
Links should be loaded after Bootstrap and Vue
</NoteAlert>

Alternatively the ESM package is available as well

<HighlightCard>

```html
<script type="module">
  import bootstrapVueNext from 'https://cdn.jsdelivr.net/npm/bootstrap-vue-next@{{version}}/+esm'
</script>
```

</HighlightCard>

## Tree-shaking

If you are concerned about the size of your application, you should utilize
[tree-shaking](https://vuejs.org/guide/best-practices/performance#bundle-size-and-tree-shaking).
Below are some pointers on optimizing tree-shaking in the context of BootstrapVueNext.

### Tree-shake CSS

If you are using one of the preferred installation methods, JS will be tree-shaken by default. The one thing
we are not able to do automatically is optimize CSS. Methods like PurgeCSS are not ideal because of a limitation
with the dynamic nature of class renderings and Vue (Problematic code like: `[btn-${props.variant}]: props.variant !== undefined`).
With that being said, BootstrapVueNext does not handle CSS imports from Bootstrap, we only add some
additional CSS ourselves. So, using a method such as
[Lean Sass Imports](https://getbootstrap.com/docs/5.3/customize/optimize/#lean-sass-imports) from the
Bootstrap documentation is likely the best way to achieve the tiniest possible application size.
Though it is not automatic, it should prove the safest bet for minifying your application.

BootstrapVueNext also marks JavaScript modules as side-effect-free at the package level while explicitly
preserving style assets (`*.css`, `*.scss`) through package metadata. This allows bundlers to aggressively
remove unused JavaScript while keeping required stylesheet imports intact.

### Tree-shaking with BApp

When using the **BApp component approach**, you automatically get optimal tree-shaking as only the
components and composables you actually use are included in your bundle.

When using the **plugin approach**, `createBootstrap` is a utility that provides everything required for
the library to work. However, some plugins may not be needed and can be individually imported. All plugins
are appended with `Plugin` (`registryPlugin`, `orchestratorPlugin`, etc.), so you can select only what is needed.

The `createBootstrap` plugin is approximately ~20kb gzipped, with orchestrator functionality accounting for the majority.
Use individual plugin imports if you want the tiniest possible bundle size.

<BootstrapPluginWarning />

### Exposed methods and tree-shaking

In order to correctly type exposed methods, you need to explicitly import them from BootstrapVueNext. When doing this,
import the component (not just the type) and use the full path to improve tree-shaking.

<HighlightCard>

```vue
<script setup lang="ts">
import {BTab} from 'bootstrap-vue-next/components/BTabs'
</script>
```

</HighlightCard>

## Comparison with BootstrapVue

BootstrapVue is the parent project for which this is based on. We consider BootstrapVue as the best implementation
of Bootstrap `v4`. We strive for a full compatibility list for BootstrapVue. However, due to the nature of the rewrite,
some features may be missing or changed. If anyone has spotted a missing compatibility feature, we request that you
submit a GitHub issue or contribute to the
[parity report](https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md#help-verify-bootstrapvue-and-bootstrap-v5-parity).

If you are migrating from BootstrapVue, please refer to our [migration knowledge base](/docs/migration-data/)
