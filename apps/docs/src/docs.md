# Introduction

<div class="lead">

Get started with BootstrapVueNext and Bootstrap `v5`, the world’s most popular framework for building responsive, mobile-first sites.

</div>

<b-alert variant="danger" :model-value="true" class="my-5">

NOT PRODUCTION READY

This project is still in **alpha version**. There is a lot of work to do and the documentation may be out of date, if you want to contribute you can use it and submit an [issue](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues) or even better, a [pull request](https://github.com/bootstrap-vue-next/bootstrap-vue-next/pulls) 😄

</b-alert>

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

<client-only>
<b-tabs v-model="codePreference">
  <b-tab title="PNPM">

  <b-card class="bg-body-tertiary">

```bash
pnpm add bootstrap bootstrap-vue-next

pnpm add unplugin-vue-components -D
```

  </b-card>

  </b-tab>
  <b-tab title="YARN">

  <b-card class="bg-body-tertiary">

```bash
yarn add bootstrap bootstrap-vue-next

yarn add unplugin-vue-components -D
```

  </b-card>

  </b-tab>
  <b-tab title="NPM">

  <b-card class="bg-body-tertiary">

```bash
npm i bootstrap bootstrap-vue-next

npm i unplugin-vue-components -D
```

  </b-card>

  </b-tab>
</b-tabs>
</client-only>

The following is an example of a basic `vite.config.js/ts`. All you need to do is add **Components** to the Vite **plugins** option, with the additional imports:

<b-card class="bg-body-tertiary">

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

</b-card>

Finally, in your `main.js/ts` import the CSS:

<b-card class="bg-body-tertiary">

```ts
// main.js/ts
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
```

</b-card>

##### Typescript Features

If using TypeScript you will want to add `components.d.ts` to the `include` array in your tsconfig.json:

<b-card class="bg-body-tertiary">

```json
// tsconfig.json
{
  "include": ["components.d.ts"]
}
```

</b-card>

#### Legacy Installation

- This is the old installation method. It is recommended to use the [**preferred**](#preferred-installation) installation as it will automatically remove unused components, resulting in a lower bundle size. You can, however, still use this installation method. Note, the preferred installation automatically tree-shakes all components, both installation methods should have the same final dist size.

Install the necessary packages for `bootstrap-vue-next`:

<client-only>
<b-tabs v-model="codePreference">
  <b-tab title="PNPM">

  <b-card class="bg-body-tertiary">

```bash
pnpm add bootstrap bootstrap-vue-next
```

  </b-card>

  </b-tab>
  <b-tab title="YARN">

  <b-card class="bg-body-tertiary">

```bash
yarn add bootstrap bootstrap-vue-next
```

  </b-card>

  </b-tab>
  <b-tab title="NPM">

  <b-card class="bg-body-tertiary">

```bash
npm i bootstrap bootstrap-vue-next
```

  </b-card>

  </b-tab>
</b-tabs>
</client-only>

Then, add to your `main.js/ts`:

<b-card class="bg-body-tertiary">

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

</b-card>

### Installation - Nuxt.js 3 <a id="nuxtjs" class="anchorjs-link"></a>

In your Nuxt3 application, install the necessary packages for `bootstrap-vue-next`.

<client-only>
<b-tabs v-model="codePreference">
  <b-tab title="PNPM">

  <b-card class="bg-body-tertiary">

```bash
pnpm add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </b-card>

  </b-tab>
  <b-tab title="YARN">

  <b-card class="bg-body-tertiary">

```bash
yarn add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </b-card>

  </b-tab>
  <b-tab title="NPM">

  <b-card class="bg-body-tertiary">

```bash
npm i bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </b-card>

  </b-tab>
</b-tabs>
</client-only>

Open your `nuxt.config.js/ts` file and configure your application to use `bootstrap-vue-next`. The components will be imported automatically as needed.

<b-card class="bg-body-tertiary">

```ts
// nuxt.config.js/ts
export default defineNuxtConfig({
  modules: ['@bootstrap-vue-next/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
})
```

</b-card>

Enjoy it in your app without manual imports, and automatic tree-shaking.

<b-card class="bg-body-tertiary">

```vue
<template>
  <div>
    <b-button variant="primary" @click="show = !show">Click me</b-button>
    <b-modal v-model="show">Test</b-modal>
  </div>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

</b-card>

You can customize the options with the bootstrapVueNext key in your nuxt.config.

<b-card class="bg-body-tertiary">

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

</b-card>

The practical difference between manually including an item and not is null as Nuxt should tree-shake out anything that is not used in the final build.

#### Nuxt and Directives

Directives should be imported directly from the `bootstrap-vue-next` package.

<b-card class="bg-body-tertiary">

```ts
import {vBColorMode} from 'bootstrap-vue-next'
```

</b-card>

## Tree-shake CSS

If you are using one of the preferred installation methods, JS will be tree-shaken by default. The one thing we are not able to do automatically is optimize CSS. Methods like PurgeCSS are not ideal because of a limitation with the dynamic nature of class renderings and Vue (Problematic code like: `[btn-${props.variant}]: props.variant !== undefined`). With that being said, BootstrapVueNext does not handle CSS imports from Bootstrap, we only add some additional CSS ourselves. So, using a method such as [Lean Sass Imports](https://getbootstrap.com/docs/5.3/customize/optimize/#lean-sass-imports) from the Bootstrap documentation is likely the best way to achieve the tiniest possible application size. Though it is not automatic, it should prove the safest bet for minifying your application.

## Comparison with BootstrapVue

BootstrapVue is the parent project for which this is based on. We consider BootstrapVue as the best implementation of Bootstrap `v4`. We strive for a full compatibility list for BootstrapVue. However, due to the nature of the rewrite, some features may be missing or changed. If anyone has spotted a missing compatibility feature, we request that you submit a GitHub issue.

<!-- To follow this, we'll implement a parity list where you can view the progress of covered components. This section is not ready yet. -->

You can view the planned compatibility list in the following [section](./reference/parityList.md). It is _not_ a migration guide, which will be finalized upon v1.0.0.

<script setup lang="ts">
import {BCard, BCardBody, BAlert, BTab, BTabs} from 'bootstrap-vue-next'
import {useLocalStorage} from '@vueuse/core'

const codePreference = useLocalStorage('code-group-preference', 0)
</script>
