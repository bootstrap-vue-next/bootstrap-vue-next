# Introduction

<div class="lead">

Get started with BootstrapVueNext and Bootstrap `v5`, the world's most popular framework for building responsive, mobile-first sites.

</div>

## Why BootstrapVueNext?

BootstrapVueNext is an attempt to have the [BootstrapVue](https://bootstrap-vue.github.io/bootstrap-vue/) components in Vue3, Bootstrap 5, and typescript. Another goal is to have the components written in a simple and readable way for a better developer experience.

## Migrating from BootstrapVue

If you are migrating from BootstrapVue, please refer to our [migration guide](/docs/migration-guide)

## Contribute and Support 🙌

This project is in the **late stages of alpha version**. While most features are functioning as expected, you may still encounter some issues. Your contributions at this stage can be particularly impactful in shaping the final product. If you're interested in contributing, here's how you can help:

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

Bootstrap-vue-next offers two ways to configure your application. The new **BApp component approach** is recommended for new projects, while the plugin approach is still supported for backward compatibility.

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

And you must put BOrchestrator in your app:
<HighlightCard>

```vue
<!-- App.vue -->
<template>
  <BOrchestrator />
  <router-view />
</template>
<script setup lang="ts">
import {BOrchestrator} from 'bootstrap-vue-next'
</script>
```

</HighlightCard>

Now, you can begin importing and using components

::: warning

If you are using individual plugins such as `modalControllerPlugin`, `toastControllerPlugin`, or
`popoverControllerPlugin`, please see the [`BApp` documentation](/docs/components/app#backward-compatibility) for additional details.

:::

### Automatic Registering of Components

To have components automatically registered **and** tree-shaken, we recommend [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components). Read their docs for additional details. This is in addition to the above installation steps. We supply a resolver

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

<NoteAlert>
The resolver import is from `bootstrap-vue-next`, not `unplugin-vue-components`
</NoteAlert>

##### Aliasing

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

In your Nuxt3 application, install the necessary packages for `bootstrap-vue-next`.

::: code-group

```bash [PNPM]
pnpm add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

```bash [BUN]
bun add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

```bash [YARN]
yarn add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

```bash [NPM]
npm i bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

:::

Open your `nuxt.config.js/ts` file and configure your application to use `bootstrap-vue-next`. The components will be imported automatically as needed.

<HighlightCard>

```ts
// nuxt.config.js/ts
export default defineNuxtConfig({
  modules: ['@bootstrap-vue-next/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
})
```

</HighlightCard>

Enjoy it in your app without manual imports, and automatic tree-shaking.

<HighlightCard>

```vue
<template>
  <div>
    <BButton variant="primary" @click="show = !show">Click me</BButton>
    <BModal v-model="show">Test</BModal>
  </div>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

</HighlightCard>

You can customize the options with the bootstrapVueNext key in your nuxt.config.

<HighlightCard>

```ts
// nuxt.config.js/ts
export default defineNuxtConfig({
  modules: ['@bootstrap-vue-next/nuxt'],
  bootstrapVueNext: {
    composables: true, // Will include all composables
    // composables: {useBreadcrumb: true, useColorMode: true, all: false}, // Will include only useBreadcrumb & useColorMode
    // composables: {useBreadcrumb: false, useColorMode: false, all: true} // Will include everything except useBreadcrumb & useColorMode
    directives: {all: true}, // Will include all directives
    css: true, // Will include the module's CSS. If set to false, you can add the CSS manually in the 'css' property below
  },
  css: [
    // 'bootstrap/dist/css/bootstrap.min.css' // Not necessary if `css: true`
  ],
})
```

</HighlightCard>

This is mainly for the purpose of naming conflicts with other imports. It should not affect tree-shaking

### Installation - TypeScript

This package uses optional peer dependencies to generate type definitions for enhanced functionality. These dependencies are not installed by default to avoid unnecessary bloat in projects that don't require these features. However, if you want full type support, you need to manually install the required packages.

::: code-group

```bash [PNPM]
pnpm add -D @floating-ui/vue @vueuse/core vue-router
```

```bash [BUN]
bun add -D @floating-ui/vue @vueuse/core vue-router
```

```bash [YARN]
yarn add -D @floating-ui/vue @vueuse/core vue-router
```

```bash [NPM]
npm i -D @floating-ui/vue @vueuse/core vue-router
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

If you are using one of the preferred installation methods, JS will be tree-shaken by default. The one thing we are not able to do automatically is optimize CSS. Methods like PurgeCSS are not ideal because of a limitation with the dynamic nature of class renderings and Vue (Problematic code like: `[btn-${props.variant}]: props.variant !== undefined`). With that being said, BootstrapVueNext does not handle CSS imports from Bootstrap, we only add some additional CSS ourselves. So, using a method such as [Lean Sass Imports](https://getbootstrap.com/docs/5.3/customize/optimize/#lean-sass-imports) from the Bootstrap documentation is likely the best way to achieve the tiniest possible application size. Though it is not automatic, it should prove the safest bet for minifying your application.

### Tree-shaking with BApp

When using the **BApp component approach**, you automatically get optimal tree-shaking as only the components and composables you actually use are included in your bundle.

When using the **plugin approach**, `createBootstrap` is a utility that provides everything required for the library to work. However, some plugins may not be needed and can be individually imported. All plugins are appended with `Plugin` (`registryPlugin`, `orchestratorPlugin`, etc.), so you can select only what is needed.

The `createBootstrap` plugin is approximately ~20kb gzipped, with orchestrator functionality accounting for the majority. Use individual plugin imports if you want the tiniest possible bundle size.

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

BootstrapVue is the parent project for which this is based on. We consider BootstrapVue as the best implementation of Bootstrap `v4`. We strive for a full compatibility list for BootstrapVue. However, due to the nature of the rewrite, some features may be missing or changed. If anyone has spotted a missing compatibility feature, we request that you submit a GitHub issue or contribute to the [parity report](https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md#help-verify-bootstrapvue-and-bootstrap-v5-parity).

If you are migrating from BootstrapVue, please refer to our [migration guide](/docs/migration-guide)
