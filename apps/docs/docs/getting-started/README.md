---
sidebar: auto
---

# Introduction

Get started with BootstrapVue3 and Bootstrap v5, the world’s most popular framework for building responsive, mobile-first sites.

::: danger NOT PRODUCTION READY
This project is still in **alpha version**. There is a lot of work to do, if you want to contribute you can use it and submit an [issue](https://github.com/cdmoro/bootstrap-vue-3/issues) or even better, a [pull request](https://github.com/cdmoro/bootstrap-vue-3/pulls) 😄.
:::

## Why BootstrapVue3?

BootstrapVue3 is an attempt to have the [BootstrapVue](https://bootstrap-vue.org/) components in Vue3, Bootstrap 5, and typescript. Another goal is to have the components written in a simple and readable way.

As you may suppose, this library is heavily inspired by [BootstrapVue](https://bootstrap-vue.org/), as well as the component properties, events, slots, directives, etc. We want to make it that way because we want to have compatibility with BootstrapVue, so it will be easy to switch between libraries.

## Contribute and Support 🙌

This project is still in **alpha version** so there is much work to do. If you want to contribute you can:

- submit an [issue](https://github.com/cdmoro/bootstrap-vue-3/issues/new)
- or better, a [pull request](https://github.com/cdmoro/bootstrap-vue-3/pulls)
- or even better, visit [my Patreon page](https://patreon.com/cdmoro) and support me 😄

### One-time Donations

Or if you prefer you can make a one-time donation through these channels:

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/cdmoro)
[![Invitame un café en cafecito.app](https://cdn.cafecito.app/imgs/buttons/button_2.svg)](https://cafecito.app/cdmoro)

## Requisites

To use this library you have to install these packages:

- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) `5.x.x`
- [Vue.js](https://v3.vuejs.org/) `3.x.x`

## Install

### Installation - Vue.js

#### Preferred Installation

- Bootstrap-vue-3 recommends using [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) for automatic tree-shaking. The following installation method is recommended
- `unplugin-vue-components` may have the side effect feature of also automatically importing _your_ components for ease of use. If you are uncomfortable with this, you may prefer the [**legacy**](#legacy-installation) installation without automatic tree-shaking

Install the necessary packages for `bootstrap-vue-3`:

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add bootstrap bootstrap-vue-3 @popperjs/core

yarn add unplugin-vue-components -D
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install bootstrap bootstrap-vue-3 @popperjs/core

npm i unplugin-vue-components -D
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash
pnpm add bootstrap bootstrap-vue-3 @popperjs/core

pnpm add unplugin-vue-components -D
```

  </CodeGroupItem>
</CodeGroup>

The following is an example of a basic `vite.config.js/ts`. All you need to do is add **Components** to the Vite **plugins** option, with the additional imports:

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {BootstrapVue3Resolver} from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVue3Resolver()]
    })
  ]
})
```

Finally, in your `main.js/ts` import the CSS:

```ts
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
```

##### Typescript Features

If using TypeScript you will want to add `components.d.ts` to the `include` array in your tsconfig.json:

```json
"include": ["components.d.ts", ...],
```

#### Legacy Installation

- This is the old installation method. It is recommended to use the preferred installation as it will automatically remove unused components, resulting in a lower bundle size. You can, however, still use this installation method

Install the necessary packages for `bootstrap-vue-3`:

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add bootstrap bootstrap-vue-3 @popperjs/core
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install bootstrap bootstrap-vue-3 @popperjs/core
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash
pnpm add bootstrap bootstrap-vue-3 @popperjs/core
```

  </CodeGroupItem>
</CodeGroup>

Then, add to your `main.js/ts`:

```javascript
import {createApp} from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component imports their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app')
```

### Installation - Nuxt.js 3

**Nuxt is not officially supported**. Various Bootstrap JavaScript elements contain references to 'Document' and 'Window', which will cause breaking issues during server-side rendering. Bootstrap-vue-3 is currently working on a fix for this

As with the Vue.js installation

In your Nuxt3 application, install the necessary packages for `bootstrap-vue-3`

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add bootstrap bootstrap-vue-3 @popperjs/core
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install bootstrap bootstrap-vue-3 @popperjs/core
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash
pnpm add bootstrap bootstrap-vue-3 @popperjs/core
```

  </CodeGroupItem>
</CodeGroup>

Open your `nuxt.config.js/ts` file and configure your application to use `bootstrap-vue-3`. The components will be imported automatically as needed

```javascript
import {defineNuxtConfig} from 'nuxt3'

export default defineNuxtConfig({
  modules: ['bootstrap-vue-3/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.css'],
})
```

Enjoy it in your app without import.

```vue
<template>
  <div>
    <BButton variant="primary">Test</BButton>
  </div>
</template>
```

## Comparison with BoostrapVue

As we said, we based this project on [BootstrapVue](https://bootstrap-vue.org/). We consider BootstrapVue as the best implementation of Bootstrap `v4`, so a good approach is to replicate every BootstrapVue component, as well as their props, events, etc., and add the new features of Bootstrap `v5`.

<!-- To follow this, we'll implement a parity list where you can view the progress of covered components. This section is not ready yet. -->

You can view the planned compatibility list in the following [section](../reference/parityList.md). It is _not_ a migration guide, which will be finalized upon v1.0.0
