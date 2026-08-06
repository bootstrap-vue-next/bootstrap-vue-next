---
title: Nuxt
description: Install and configure the BootstrapVueNext Nuxt module, including built-in automations and integrations.
---

## Installation

::: info In Addition to Setup
The Nuxt module handles component auto-registration and tree-shaking automatically, so you do **not** need the Automatic Registering of Components step from Getting Started.

You still need to set up BootstrapVueNext in your Nuxt app using [BApp](./components/app.md) or the plugin approach so internal services are available.
:::

Install the required packages:

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

Then configure `nuxt.config.ts`:

<HighlightCard>

```ts
export default defineNuxtConfig({
  modules: ['@bootstrap-vue-next/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
})
```

</HighlightCard>

## Configuration options

Configure the module with the `bootstrapVueNext` key:

<HighlightCard>

```ts
export default defineNuxtConfig({
  modules: ['@bootstrap-vue-next/nuxt'],
  bootstrapVueNext: {
    composables: true,
    directives: true,
    css: true,
    autoUseNuxtImage: true,
    autoConfigureNuxtColorMode: true,
    plugin: {
      components: {
        // Example override:
        // BLink: {routerComponentName: 'RouterLink'},
      },
    },
  },
})
```

</HighlightCard>

## Integrations and automations

### Automatic NuxtLink consumption

`BLink` defaults to `NuxtLink` in the Nuxt module, and `NuxtLink` is marked global so dynamic link resolution works consistently (including for components that consume `BLink` internally).

Override via `bootstrapVueNext.plugin.components.BLink.routerComponentName` if needed.

### Automatic `@nuxtjs/color-mode` integration

When `@nuxtjs/color-mode` is detected:

- BootstrapVueNext avoids auto-importing its own `useColorMode` composable to prevent naming conflicts.
- By default, BootstrapVueNext provides module defaults for `@nuxtjs/color-mode` with `dataValue: 'bs-theme'`.

Disable defaults injection with:

<HighlightCard>

```ts
export default defineNuxtConfig({
  bootstrapVueNext: {
    autoConfigureNuxtColorMode: false,
  },
})
```

</HighlightCard>

### Automatic NuxtImg consumption

When `@nuxt/image` is installed and `autoUseNuxtImage` is enabled, `BImg` automatically renders with `NuxtImg`. This also applies to components that use `BImg` internally (for example `BCardImg`).
