<template>
  <BContainer>
    <BRow>
      <BCol>
        <h1>Introduction</h1>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Get started with BootstrapVueNext and Bootstrap <HighlightedText>v5</HighlightedText>, the
        world's most popular framework for building responsive, mobile-first sites
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        ::: danger NOT PRODUCTION READY This project is still in **alpha version**. There is a lot
        of work to do and the documentation may be out of date, if you want to contribute you can
        use it and submit an [issue](https://github.com/bootstrap-vue/bootstrap-vue-next/issues) or
        even better, a [pull request](https://github.com/bootstrap-vue/bootstrap-vue-next/pulls) 😄
        :::
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2>
          BootstrapVueNext is an attempt to have the [BootstrapVue](https://bootstrap-vue.org/)
          components in Vue3, Bootstrap 5, and typescript. Another goal is to have the components
          written in a simple and readable way for a better developer experience
        </h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2>Contribute and Support 🙌</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        This project is still in <b>alpha version</b> so there is a lot of work to do. If you want
        to contribute you can:
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <ul>
          <li>
            submit an
            <ExternalLink :href="links.issues">issue</ExternalLink>
          </li>
          <li>or better, a <ExternalLink :href="links.pulls">pull request</ExternalLink></li>
        </ul>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Read our
        <ExternalLink :href="links.contributing">Contribution Guide</ExternalLink> on how to start
        helping
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2>Install</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h3>Installation - Vue.js</h3>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4>Preferred Installation</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <ul>
          <li>
            BootstrapVueNext recommends using
            <ExternalLink href="https://github.com/antfu/unplugin-vue-components"
              >unplugin-vue-components</ExternalLink
            >
            for automatic tree-shaking. The following installation method is recommended
          </li>
          <li>
            <HighlightedText>unplugin-vue-components</HighlightedText> may have the side effect
            feature of also automatically importing _your_ components for ease of use. If you are
            uncomfortable with this, you can manually adjust the
            <ExternalLink href="https://github.com/antfu/unplugin-vue-components#configuration">
              dirs option
            </ExternalLink>
            (set dirs to an empty array) or you may prefer the
            <BLink href="#legacy-installation"><b>legacy</b></BLink>
            installation without automatic tree-shaking entirely. It is preferred that you choose
            the unplugin-vue-components with an empty dirs option, that way your app can be as
            performant as possible
          </li>
        </ul>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Install the necessary packages for <HighlightedText>BootstrapVueNext</HighlightedText>:
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <b-tabs>
          <b-tab title="PNPM" active>
            <CodeBlock>
              pnpm add bootstrap bootstrap-vue-next pnpm add unplugin-vue-components -D
            </CodeBlock>
          </b-tab>
          <b-tab title="YARN">
            <CodeBlock>
              yarn add bootstrap bootstrap-vue-next yarn add unplugin-vue-components -D
            </CodeBlock>
          </b-tab>
          <b-tab title="NPM">
            <CodeBlock>
              npm i bootstrap bootstrap-vue-next npm i unplugin-vue-components -D
            </CodeBlock>
          </b-tab>
        </b-tabs>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        The following is an example of a basic <HighlightedText>vite.config.js/ts</HighlightedText>.
        All you need to do is add <b>Components</b> to the Vite <b>plugins</b> option, with the
        additional imports:
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <CodeBlock>
          // vite.config.js/ts import { defineConfig } from 'vite' import vue from
          '@vitejs/plugin-vue' import Components from 'unplugin-vue-components/vite' import {
          BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers' export default
          defineConfig({ plugins: [ vue(), Components({ resolvers: [BootstrapVueNextResolver()] }) ]
          })
        </CodeBlock>
      </BCol>
    </BRow>
    <BRow>
      <BCol> Finally, in your <HighlightedText>main.js/ts</HighlightedText> import the CSS: </BCol>
    </BRow>
    <BRow>
      <BCol>
        <CodeBlock>
          // main.js/ts import 'bootstrap/dist/css/bootstrap.css' import
          'bootstrap-vue-next/dist/bootstrap-vue-next.css'
        </CodeBlock>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h5>TypeScript Features</h5>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        If using TypeScript you will want to add
        <HighlightedText>components.d.ts</HighlightedText> to the
        <HighlightedText>include</HighlightedText> array in your tsconfig.json:
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <CodeBlock> // tsconfig.json { "include": ["components.d.ts"], } </CodeBlock>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4>Legacy Installation</h4>
      </BCol>
    </BRow>
    <BRow>
      <ul>
        <li>
          This is the old installation method. It is recommended to use the
          <BLink href="#preferred-installation"><b>preferred</b></BLink>
          installation as it will automatically remove unused components, resulting in a lower
          bundle size. You can, however, still use this installation method. Note, the preferred
          installation automatically tree-shakes all components, both installation methods should
          have the same final dist size
        </li>
      </ul>
    </BRow>
    <BRow>
      <BCol>
        Install the necessary packages for <HighlightedText>bootstrap-vue-next</HighlightedText>:
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <b-tabs>
          <b-tab title="PNPM" active>
            <CodeBlock> pnpm add bootstrap bootstrap-vue-next </CodeBlock>
          </b-tab>
          <b-tab title="YARN">
            <CodeBlock> yarn add bootstrap bootstrap-vue-next </CodeBlock>
          </b-tab>
          <b-tab title="NPM">
            <CodeBlock> npm i bootstrap bootstrap-vue-next </CodeBlock>
          </b-tab>
        </b-tabs>
      </BCol>
    </BRow>
    <BRow>
      <BCol> Then, add to your <HighlightedText>main.js/ts</HighlightedText>: </BCol>
    </BRow>
    <BRow>
      <BCol>
        <CodeBlock>
          // main.js/ts import App from './App.vue' // Can be a different place import { createApp }
          from 'vue' import BootstrapVueNext from 'bootstrap-vue-next' // Optional, since every
          component imports their Bootstrap functionality // the following line is not necessary //
          import 'bootstrap' import 'bootstrap/dist/css/bootstrap.css' import
          'bootstrap-vue-next/dist/bootstrap-vue-next.css' const app = createApp(App)
          app.use(BootstrapVueNext) app.mount('#app')
        </CodeBlock>
      </BCol>
    </BRow>
    <BRow>
      <BCol> Installation - Nuxt 3 </BCol>
    </BRow>
    <BRow>
      <BCol>
        In your Nuxt3 application, install the necessary packages for
        <HighlightedText>bootstrap-vue-next</HighlightedText>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <b-tabs>
          <b-tab title="PNPM" active>
            <CodeBlock>
              pnpm add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
            </CodeBlock>
          </b-tab>
          <b-tab title="YARN">
            <CodeBlock>
              yarn add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
            </CodeBlock>
          </b-tab>
          <b-tab title="NPM">
            <CodeBlock> npm i bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D </CodeBlock>
          </b-tab>
        </b-tabs>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Open your <HighlightedText>nuxt.config.js/ts</HighlightedText> file and configure your
        application to use <HighlightedText>bootstrap-vue-next</HighlightedText>. The components
        will be imported automatically as needed
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <CodeBlock>
          // nuxt.config.js/ts export default defineNuxtConfig({ modules:
          ['@bootstrap-vue-next/nuxt'], css: ['bootstrap/dist/css/bootstrap.min.css'], })
        </CodeBlock>
      </BCol>
    </BRow>
    <BRow>
      <BCol> Enjoy building your app with automatic imports and tree-shaking </BCol>
    </BRow>
    <!-- <BRow>
      <BCol>
        <CodeBlock>
          <code>
            <template>
              <div>
                <BButton variant="primary" @click="show = !show">Click me</BButton>
                <BModal v-model="show">Test</BModal>
              </div>
            </template>

            <script setup lang="ts">
              const show = ref(false)
            </script>
          </code>
        </CodeBlock>
      </BCol>
    </BRow> -->
    <BRow>
      <BCol>
        You can customize the options with the bootstrapVueNext key in your nuxt.config. You are
        able to manually toggle to include composables & directives
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <CodeBlock>
          // nuxt.config.js/ts export default defineNuxtConfig({ modules:
          ['@bootstrap-vue-next/nuxt'], bootstrapVueNext: { composables: true, // Will include all
          composables directives: {vBColorMode: true, vBTooltip: true, all: false}, // Will include
          only vBColorMode & vBTooltip // directives: {vBColorMode: false, vBTooltip: false, all:
          true} // Will include everything except vBColorMode & vBTooltip }, css:
          ['bootstrap/dist/css/bootstrap.min.css'], })
        </CodeBlock>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        The practical difference between manually including an item and not is null as Nuxt should
        tree-shake out anything that is not used in the final build
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2>Comparison with BootstrapVue</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        BootstrapVue is the parent project for which this is based on. We consider BootstrapVue as
        the best implementation of Bootstrap <HighlightedText>v4</HighlightedText>. We strive for a
        full compatibility list for BootstrapVue. However, due to the nature of the rewrite, some
        features may be missing or changed. If anyone has spotted a missing compatibility feature,
        we request that you submit a <ExternalLink :href="links.issues">GitHub Issue</ExternalLink>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        You can view the planned compatibility list in the following
        <BLink to="/reference/parity-list"> section </BLink>. It is <i>not</i> a migration guide,
        which will be finalized upon v1.0.0
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
const parentData = inject(appInfoKey, null)

const links = computed(() => ({
  issues: `${parentData?.githubUrl}/issues`,
  pulls: `${parentData?.githubUrl}/pulls`,
  contributing: `${parentData?.githubUrl}/blob/main/CONTRIBUTING.md`,
}))
</script>
