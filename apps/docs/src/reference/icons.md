# Icons

<b-alert variant="danger" :model-value="true" class="my-5">

The icon components from BootstrapVue are deprecated. While migrating to BootstrapVueNext the icon components will not be supported as there are better, more modern solutions to incorporating icon packages into your application. Continue reading BootstrapVueNext's suggestion on how to incorporate Bootstrap-icons into your application! This documentation only serves as a reference, BootstrapVueNext has no part in the mentioned libraries and some content may be out of date

</b-alert>

## [Unplugin Icons](https://github.com/antfu/unplugin-icons)

> In this section you will learn how to incorporate [unplugin-icons](https://github.com/antfu/unplugin-icons) into your app. unplugin-icons allows you to use icons from multiple icon sets, such as [Bootstrap Icons](https://icon-sets.iconify.design/bi/), [Material Design Icons](https://icon-sets.iconify.design/mdi/), [Font Awesome 4](https://icon-sets.iconify.design/fa/) and many more all with automatic tree-shaking!

### Installation

To set up unplugin-icons, you can read directly from their documentation [here](https://github.com/antfu/unplugin-icons) or keep reading for a quick start guide

#### Preferred Installation

The preferred installation makes use of [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) as it follows the same principles as the [preferred installation](../getting-started/#preferred-installation) for our core package

To start, install the necessary packages:

<client-only>
<b-tabs v-model="codePreference" class="mb-3">
  <b-tab title="PNPM">

  <b-card class="bg-body-tertiary">

```bash
pnpm add unplugin-icons unplugin-vue-components @vue/compiler-sfc -D
```

  </b-card>

  </b-tab>
  <b-tab title="YARN">

  <b-card class="bg-body-tertiary">

```bash
yarn add unplugin-icons unplugin-vue-components @vue/compiler-sfc -D
```

  </b-card>

  </b-tab>
  <b-tab title="NPM">

  <b-card class="bg-body-tertiary">

```bash
npm i unplugin-icons unplugin-vue-components @vue/compiler-sfc -D
```

  </b-card>

  </b-tab>
</b-tabs>
</client-only>

<b-card class="bg-body-tertiary">

```ts
// vite.config.js/ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolve from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [IconsResolve()],
      dts: true,
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],
})
```

</b-card>

With `autoInstall: true` using any icon set in your app will automatically import and include that icon set in your dependencies! No manual imports are required!

If you are using TypeScript you will want to add the `unplugin-icons/types/vue` to the `compilerOptions.types` array. While there, you should also make sure you included the `components.d.ts` in the `include` array:

<b-card class="bg-body-tertiary">

```json
// tsconfig.json
{
  "include": ["components.d.ts"],
  "compilerOptions": {
    "types": ["unplugin-icons/types/vue"]
  }
}
```

</b-card>

Then to include an icon, follow the format `i-{collection}-{icon-name}` in your template, where the collection is the id on <https://icon-sets.iconify.design/>. For example, to include `0-circle` in your app, simply use the component `<i-bi-0-circle>`, no import is needed. As stated, you can use any icon from any icon set

<b-card class="bg-body-tertiary">

```vue-html
<template>
  <i-bi-0-circle />
  <i-bi-activity color="red" />
  <!-- You can use any icon set, no need to worry about importing -->
  <i-mdi-account-box />
  <!-- fa -->
  <i-fa-angellist />
</template>
```

</b-card>

View the [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) documentation for their extra feature, such as [Global Custom Icon Transformation](https://github.com/antfu/unplugin-icons#global-custom-icon-transformation) and other information

#### Basic Installation

Of course, there is always the ability to slim down. To slim down the installation, you can manually import only the bootstrap-icons icon set, disable auto importing, and not use unplugin-vue-components read below. Note, the preferred installation automatically treeshakes all components, both installation methods should have the same final dist size

<client-only>
<b-tabs v-model="codePreference" class="mb-3">
  <b-tab title="PNPM">

  <b-card class="bg-body-tertiary">

```bash
pnpm add unplugin-icons @vue/compiler-sfc @iconify-json/bi -D
```

  </b-card>

  </b-tab>
  <b-tab title="YARN">

  <b-card class="bg-body-tertiary">

```bash
yarn add unplugin-icons @vue/compiler-sfc @iconify-json/bi -D
```

  </b-card>

  </b-tab>
  <b-tab title="NPM">

  <b-card class="bg-body-tertiary">

```bash
npm i unplugin-icons @vue/compiler-sfc @iconify-json/bi -D
```

  </b-card>

  </b-tab>
</b-tabs>
</client-only>

<b-card class="bg-body-tertiary">

```ts
// vite.config.js/ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      compiler: 'vue3',
    }),
  ],
})
```

</b-card>

Using this method, you will need to manually import each icon:

<b-card class="bg-body-tertiary">

```vue
<template>
  <i-bi-0-circle />
  <i-bi-activity color="red" />
  <!-- Cannot use, is not a dependency -->
  <!-- <i-mdi-account-box /> -->
  <!-- fa -->
  <!-- <i-fa-angellist /> -->
</template>

<script setup lang="ts">
import IBi0Circle from '~icons/bi/0-circle'
import IBiActivity from '~icons/bi/activity'
// import IMdiAccountBox from '~icons/mdi/account-box'
// import IFaAngellist from '~icons/mdi/angellist'
</script>
```

</b-card>

<script setup lang="ts">
import {BCard, BCardBody, BTab, BTabs, BAlert} from 'bootstrap-vue-next'
import {useLocalStorage} from '@vueuse/core'

const codePreference = useLocalStorage('code-group-preference', 0)
</script>
