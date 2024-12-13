# Introduction

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead">

Get started with BootstrapVueNext and Bootstrap `v5`, the world’s most popular framework for building responsive, mobile-first sites.

</div>

## Why BootstrapVueNext?

BootstrapVueNext is an attempt to have the [BootstrapVue](https://bootstrap-vue.org/) components in Vue3, Bootstrap 5, and typescript. Another goal is to have the components written in a simple and readable way for a better developer experience.

## Contribute and Support 🙌

This project is in the **late stages of alpha version**. While most features are functioning as expected, you may still encounter some issues. Your contributions at this stage can be particularly impactful in shaping the final product. If you're interested in contributing, here's how you can help:

- submit an [issue](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues)
- or better, a [pull request](https://github.com/bootstrap-vue-next/bootstrap-vue-next/pulls)

Read our [Contribution Guide](https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md) on how to start helping.

## Install

### Installation - Vue.js

- First install the package

<ClientOnly>
<BTabs v-model="codePreference">
  <BTab title="PNPM">

  <HighlightCard>

```bash
pnpm add bootstrap bootstrap-vue-next
```

  </HighlightCard>

  </BTab>
  <BTab title="BUN">

  <HighlightCard>

```bash
bun add bootstrap bootstrap-vue-next
```

  </HighlightCard>

  </BTab>
  <BTab title="YARN">

  <HighlightCard>

```bash
yarn add bootstrap bootstrap-vue-next
```

  </HighlightCard>

  </BTab>
  <BTab title="NPM">

  <HighlightCard>

```bash
npm i bootstrap bootstrap-vue-next
```

  </HighlightCard>

  </BTab>
</BTabs>
</ClientOnly>

<HighlightCard>

```typescript
// main.js/ts
import {createApp} from 'vue'
import {createBootstrap} from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(createBootstrap()) // Important
app.mount('#app')
```

</HighlightCard>

Now, you can begin importing and using components

#### Automatic Registering of Components

To have components automatically registered **and** tree-shaken, we recommend [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components). Read their docs for additional details. This is in addition to the above installation steps. We supply a resolver

<ClientOnly>
<BTabs v-model="codePreference">
  <BTab title="PNPM">

  <HighlightCard>

```bash
pnpm add unplugin-vue-components -D
```

  </HighlightCard>

  </BTab>
  <BTab title="BUN">

  <HighlightCard>

```bash
bun add unplugin-vue-components -D
```

  </HighlightCard>

  </BTab>
  <BTab title="YARN">

  <HighlightCard>

```bash
yarn add unplugin-vue-components -D
```

  </HighlightCard>

  </BTab>
  <BTab title="NPM">

  <HighlightCard>

```bash
npm i unplugin-vue-components -D
```

  </HighlightCard>

  </BTab>
</BTabs>
</ClientOnly>

The following is an example of a basic `vite.config.js/ts`. All you need to do is add **Components** to the Vite **plugins** option, with the additional imports:

<HighlightCard>

```ts
// vite.config.js/ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'bootstrap-vue-next'

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
import {BootstrapVueNextResolver} from 'bootstrap-vue-next'

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

<ClientOnly>
<BTabs v-model="codePreference">
  <BTab title="PNPM">

  <HighlightCard>

```bash
pnpm add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </HighlightCard>

  </BTab>
  <BTab title="BUN">

  <HighlightCard>

```bash
bun add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </HighlightCard>

  </BTab>
  <BTab title="YARN">

  <HighlightCard>

```bash
yarn add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </HighlightCard>

  </BTab>
  <BTab title="NPM">

  <HighlightCard>

```bash
npm i bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </HighlightCard>

  </BTab>
</BTabs>
</ClientOnly>

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

This is mainly for the purpose of naming conflicts with other imports. It should not effect tree-shaking

### Installation - TypeScript

This package uses optional peer dependencies to generate type definitions for enhanced functionality. These dependencies are not installed by default to avoid unnecessary bloat in projects that don’t require these features. However, if you want full type support, you need to manually install the required packages.

<ClientOnly>
<BTabs v-model="codePreference">
  <BTab title="PNPM">

  <HighlightCard>

```bash
pnpm add -D @floating-ui/vue @vueuse/core vue-router
```

  </HighlightCard>

  </BTab>
  <BTab title="BUN">

  <HighlightCard>

```bash
bun add -D @floating-ui/vue @vueuse/core vue-router
```

  </HighlightCard>

  </BTab>
  <BTab title="YARN">

  <HighlightCard>

```bash
yarn add -D @floating-ui/vue @vueuse/core vue-router
```

  </HighlightCard>

  </BTab>
  <BTab title="NPM">

  <HighlightCard>

```bash
npm i -D @floating-ui/vue @vueuse/core vue-router
```

  </HighlightCard>

  </BTab>
</BTabs>
</ClientOnly>

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

## Tree-shake CSS

If you are using one of the preferred installation methods, JS will be tree-shaken by default. The one thing we are not able to do automatically is optimize CSS. Methods like PurgeCSS are not ideal because of a limitation with the dynamic nature of class renderings and Vue (Problematic code like: `[btn-${props.variant}]: props.variant !== undefined`). With that being said, BootstrapVueNext does not handle CSS imports from Bootstrap, we only add some additional CSS ourselves. So, using a method such as [Lean Sass Imports](https://getbootstrap.com/docs/5.3/customize/optimize/#lean-sass-imports) from the Bootstrap documentation is likely the best way to achieve the tiniest possible application size. Though it is not automatic, it should prove the safest bet for minifying your application.

### Tree-shake JS plugins

`createBootstrap` is a simple utility that provides everything that is required for the library to work. However, some plugins may not be needed.
One could individually import each needed plugin, they are all appended with `Plugin` (`toastPlugin`, `breadcrumbPlugin`, etc). So, one could pick and choose what is needed
Practically the `createBootstrap` plugin is ~20kb gzipped with `toast` and `modalController` accounting for the majority. Use this if you really want the tiniest possible size.

<BootstrapPluginWarning />

## Comparison with BootstrapVue

BootstrapVue is the parent project for which this is based on. We consider BootstrapVue as the best implementation of Bootstrap `v4`. We strive for a full compatibility list for BootstrapVue. However, due to the nature of the rewrite, some features may be missing or changed. If anyone has spotted a missing compatibility feature, we request that you submit a GitHub issue or contribute to the [parity report](https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md#help-verify-bootstrapvue-and-bootstrap-v5-parity).

<script setup lang="ts">
import {BCard, BCardBody, BTab, BTabs} from 'bootstrap-vue-next'
import {useLocalStorage} from '@vueuse/core'
import HighlightCard from './components/HighlightCard.vue'
import NoteAlert from './components/NoteAlert.vue'
import BootstrapPluginWarning from './components/BootstrapPluginWarning.vue'

const codePreference = useLocalStorage('code-group-preference', 0)
</script>
