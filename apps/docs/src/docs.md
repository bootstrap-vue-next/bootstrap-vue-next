# Introduction

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead">

Get started with BootstrapVueNext and Bootstrap `v5`, the world’s most popular framework for building responsive, mobile-first sites.

</div>

<BAlert variant="danger" :model-value="true" class="my-5">

NOT PRODUCTION READY

This project is still in **alpha version**. There is a lot of work to do and the documentation may be out of date, if you want to contribute you can use it and submit an [issue](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues) or even better, a [pull request](https://github.com/bootstrap-vue-next/bootstrap-vue-next/pulls) 😄

</BAlert>

## Why BootstrapVueNext?

BootstrapVueNext is an attempt to have the [BootstrapVue](https://bootstrap-vue.org/) components in Vue3, Bootstrap 5, and typescript. Another goal is to have the components written in a simple and readable way for a better developer experience.

## Contribute and Support 🙌

This project is still in **alpha version** so there is a lot of work to do. If you want to contribute you can:

- submit an [issue](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues)
- or better, a [pull request](https://github.com/bootstrap-vue-next/bootstrap-vue-next/pulls)

Read our [Contribution Guide](https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md) on how to start helping.

## Install

### Installation - Vue.js

#### Preferred Installation

- BootstrapVueNext recommends using [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) for automatic tree-shaking. The following installation method is recommended
- `unplugin-vue-components` may have the side effect feature of also automatically importing _your_ components for ease of use. If you are uncomfortable with this, you can manually adjust the [dirs option](https://github.com/antfu/unplugin-vue-components#configuration) (set dirs to an empty array) or you may prefer the [**legacy**](#legacy-installation) installation without automatic tree-shaking entirely. It is preferred that you choose the unplugin-vue-components with an empty dirs option, that way your app can be as performant as possible

Install the necessary packages for `BootstrapVueNext`:

<ClientOnly>
<BTabs v-model="codePreference">
  <BTab title="PNPM">

  <BCard class="bg-body-tertiary">

```bash
pnpm add bootstrap bootstrap-vue-next

pnpm add unplugin-vue-components -D
```

  </BCard>

  </BTab>
  <BTab title="BUN">

  <BCard class="bg-body-tertiary">

```bash
bun add bootstrap bootstrap-vue-next

bun add unplugin-vue-components -D
```

  </BCard>

  </BTab>
  <BTab title="YARN">

  <BCard class="bg-body-tertiary">

```bash
yarn add bootstrap bootstrap-vue-next

yarn add unplugin-vue-components -D
```

  </BCard>

  </BTab>
  <BTab title="NPM">

  <BCard class="bg-body-tertiary">

```bash
npm i bootstrap bootstrap-vue-next

npm i unplugin-vue-components -D
```

  </BCard>

  </BTab>
</BTabs>
</ClientOnly>

The following is an example of a basic `vite.config.js/ts`. All you need to do is add **Components** to the Vite **plugins** option, with the additional imports:

<BCard class="bg-body-tertiary">

```ts
// vite.config.js/ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
})
```

</BCard>

Finally, in your `main.js/ts` import the CSS:

<BCard class="bg-body-tertiary">

```ts
// main.js/ts
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
```

</BCard>

##### Typescript Features

If using TypeScript you will want to add `components.d.ts` to the `include` array in your tsconfig.json:

<BCard class="bg-body-tertiary">

```json
// tsconfig.json
{
  "include": ["components.d.ts"]
}
```

</BCard>

#### Legacy Installation

- This is the old installation method. It is recommended to use the [**preferred**](#preferred-installation) installation as it will automatically remove unused components, resulting in a lower bundle size. You can, however, still use this installation method. Note, the preferred installation automatically tree-shakes all components, both installation methods should have the same final dist size.

Install the necessary packages for `bootstrap-vue-next`:

<ClientOnly>
<BTabs v-model="codePreference">
  <BTab title="PNPM">

  <BCard class="bg-body-tertiary">

```bash
pnpm add bootstrap bootstrap-vue-next
```

  </BCard>

  </BTab>
  <BTab title="BUN">

  <BCard class="bg-body-tertiary">

```bash
bun add bootstrap bootstrap-vue-next
```

  </BCard>

  </BTab>
  <BTab title="YARN">

  <BCard class="bg-body-tertiary">

```bash
yarn add bootstrap bootstrap-vue-next
```

  </BCard>

  </BTab>
  <BTab title="NPM">

  <BCard class="bg-body-tertiary">

```bash
npm i bootstrap bootstrap-vue-next
```

  </BCard>

  </BTab>
</BTabs>
</ClientOnly>

Then, add to your `main.js/ts`:

<BCard class="bg-body-tertiary">

```typescript
// main.js/ts
import App from './App.vue' // Can be a different place

import {createApp} from 'vue'
import BootstrapVueNext from 'bootstrap-vue-next'

// Optional, since every component imports their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(BootstrapVueNext)
app.mount('#app')
```

</BCard>

### Installation - Nuxt.js 3

In your Nuxt3 application, install the necessary packages for `bootstrap-vue-next`.

<ClientOnly>
<BTabs v-model="codePreference">
  <BTab title="PNPM">

  <BCard class="bg-body-tertiary">

```bash
pnpm add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </BCard>

  </BTab>
  <BTab title="BUN">

  <BCard class="bg-body-tertiary">

```bash
bun add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </BCard>

  </BTab>
  <BTab title="YARN">

  <BCard class="bg-body-tertiary">

```bash
yarn add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </BCard>

  </BTab>
  <BTab title="NPM">

  <BCard class="bg-body-tertiary">

```bash
npm i bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </BCard>

  </BTab>
</BTabs>
</ClientOnly>

Open your `nuxt.config.js/ts` file and configure your application to use `bootstrap-vue-next`. The components will be imported automatically as needed.

<BCard class="bg-body-tertiary">

```ts
// nuxt.config.js/ts
export default defineNuxtConfig({
  modules: ['@bootstrap-vue-next/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
})
```

</BCard>

Enjoy it in your app without manual imports, and automatic tree-shaking.

<BCard class="bg-body-tertiary">

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

</BCard>

You can customize the options with the bootstrapVueNext key in your nuxt.config.

<BCard class="bg-body-tertiary">

```ts
// nuxt.config.js/ts
export default defineNuxtConfig({
  modules: ['@bootstrap-vue-next/nuxt'],
  bootstrapVueNext: {
    composables: true, // Will include all composables
    // composables: {useBreadcrumb: true, useColorMode: true, all: false}, // Will include only useBreadcrumb & useColorMode
    // composables: {useBreadcrumb: false, useColorMode: false, all: true} // Will include everything except useBreadcrumb & useColorMode
  },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
})
```

</BCard>

The practical difference between manually including an item and not is null as Nuxt should tree-shake out anything that is not used in the final build.

#### Nuxt and Directives

Directives should be imported directly from the `bootstrap-vue-next` package.

<BCard class="bg-body-tertiary">

```ts
import {vBColorMode} from 'bootstrap-vue-next'
```

</BCard>

### Installation - CDN

BootstrapVueNext is available through `jsdelivr`. You can add the package by using the following

<BCard class="bg-body-tertiary">

```html-vue
<script src="https://cdn.jsdelivr.net/npm/bootstrap-vue-next@{{data.latestVersion}}/dist/bootstrap-vue-next.umd.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap-vue-next@{{data.latestVersion}}/dist/bootstrap-vue-next.min.css" rel="stylesheet">
```

</BCard>

<BAlert :model-value="true" variant="info">
Links should be loaded after Bootstrap and Vue
</BAlert>

Alternatively the ESM package is available as well

<BCard class="bg-body-tertiary">

```html-vue
<script type="module">
import bootstrapVueNext from 'https://cdn.jsdelivr.net/npm/bootstrap-vue-next@{{data.latestVersion}}/+esm'
</script>
```

</BCard>

## Tree-shake CSS

If you are using one of the preferred installation methods, JS will be tree-shaken by default. The one thing we are not able to do automatically is optimize CSS. Methods like PurgeCSS are not ideal because of a limitation with the dynamic nature of class renderings and Vue (Problematic code like: `[btn-${props.variant}]: props.variant !== undefined`). With that being said, BootstrapVueNext does not handle CSS imports from Bootstrap, we only add some additional CSS ourselves. So, using a method such as [Lean Sass Imports](https://getbootstrap.com/docs/5.3/customize/optimize/#lean-sass-imports) from the Bootstrap documentation is likely the best way to achieve the tiniest possible application size. Though it is not automatic, it should prove the safest bet for minifying your application.

## Comparison with BootstrapVue

BootstrapVue is the parent project for which this is based on. We consider BootstrapVue as the best implementation of Bootstrap `v4`. We strive for a full compatibility list for BootstrapVue. However, due to the nature of the rewrite, some features may be missing or changed. If anyone has spotted a missing compatibility feature, we request that you submit a GitHub issue.

<script setup lang="ts">
import {BCard, BCardBody, BAlert, BTab, BTabs} from 'bootstrap-vue-next'
import {useLocalStorage} from '@vueuse/core'
import {data} from './data/package.data'

const codePreference = useLocalStorage('code-group-preference', 0)
</script>
