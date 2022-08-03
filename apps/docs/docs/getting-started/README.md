---
sidebar: auto
---

# Introduction

Get started with BootstrapVue3 and Bootstrap v5, the world’s most popular framework for building responsive, mobile-first sites.

::: danger NOT PRODUCTION READY
This project is still in **alpha version**. There is a lot of work to do, if you want to contribute you can use it and submit an [issue](https://github.com/cdmoro/bootstrap-vue-3/issues) or even better, a [pull request](https://github.com/cdmoro/bootstrap-vue-3/pulls) 😄.
:::

## Why BootstrapVue3?

BootstrapVue3 is an attempt to have the [BootstrapVue](https://bootstrap-vue.org/) components in Vue3, Bootstrap 5, and typescript. Another goal is to have components written in a simple and readable way.

As you may suppose, this library is heavily inspired by [BootstrapVue](https://bootstrap-vue.org/), as well as the components properties, events, slots, directives, etc. We want to make it that way because we want to have compatibility with BootstrapVue, so it will be easy to switch between libraries.

## Contribute & support 🙌

This project is still in **alpha version** so there is a lot of work to do. If you want to contribute you can:

- submit an [issue](https://github.com/cdmoro/bootstrap-vue-3/issues/new)
- or better, a [pull request](https://github.com/cdmoro/bootstrap-vue-3/pulls)
- or even better, visit [my patreon page](https://patreon.com/cdmoro) and support me 😄

### One-time donations

Or if you prefer you can make a one-time donation through these channels:

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/cdmoro)
[![Invitame un café en cafecito.app](https://cdn.cafecito.app/imgs/buttons/button_2.svg)](https://cafecito.app/cdmoro)

## Requisites

In order to use this library you have to install these packages:

- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) `5.x.x`
- [Vue.js](https://v3.vuejs.org/) `3.x.x`

## Install

### Installation - Vue.js

To install this library you can use Yarn or NPM:

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

And in your `main.js/ts`:

```javascript
import {createApp} from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app')
```

### Installation - Nuxt.js 3

As with the Vue.js installation.

In your Nuxt3 application, install `bootstrap-vue-3`

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

Open your `nuxt.config.ts` or `nuxt.config.js` file and configure your application to use `bootstrap-vue-3`. The components will be imported automatically as needed.

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

As we said, we based this project in [BootstrapVue](https://bootstrap-vue.org/). We consider BootstrapVue as the best implementation of Bootstrap `v4`, so a good approach is to replicate every BootstrapVue component, as well their props, events, etc. and add the new features of Bootstrap `v5`.

<!-- To follow this, we'll implement a parity list where you can view the progress of covered components. This section is not ready yet. -->

You can view the full list in the following [section](../reference/parityList.md).

## Types

`BootstrapVue3` born with Typescript in mind. This is a list of types we use in this library and that you can use too:

- Alignment
- BreadcrumbItem
- Breakpoint
- ButtonVariant
- ColorVariant
- InputSize
- InputType
- LinkTarget
- Size
- SpinnerType
- TableField
- TableItem
- VerticalAlign
