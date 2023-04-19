<template>
  <BContainer>
    <BRow>
      <BCol>
        <h1>Icons</h1>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        The icon components from Bootstrap-vue are deprecated. While migrating to bootstrap-vue-next
        the icon components will not be supported as there are better, more modern solutions to
        incorporating icon packages into your application. Continue reading bootstrap-vue-next's
        suggestion on how to incorporate Bootstrap-icons into your application! This documentation
        only serves as a reference, Bootstrap-vue has no part in the mentioned libraries
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2>
          <ExternalLink href="https://github.com/antfu/unplugin-icons">
            Unplugin Icons
          </ExternalLink>
        </h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <ul>
          <li>
            In this section you will learn how to incorporate
            <ExternalLink href="https://github.com/antfu/unplugin-icons">
              unplugin-icons
            </ExternalLink>
            into your app. unplugin-icons allows you to use icons from multiple icon sets, such as
            <ExternalLink href="https://icon-sets.iconify.design/bi/">
              Bootstrap Icons </ExternalLink
            >,
            <ExternalLink href="https://icon-sets.iconify.design/mdi/">
              Material Design Icons </ExternalLink
            >,
            <ExternalLink href="https://icon-sets.iconify.design/fa/">
              Font Awesome 4
            </ExternalLink>
            and many more all with automatic tree-shaking!
          </li>
        </ul>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h3>Installation</h3>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        To set up unplugin-icons, you can read directly from their documentation
        <ExternalLink href="https://github.com/antfu/unplugin-icons">here</ExternalLink> or keep
        reading for a quick start guide
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4>Preferred Installation</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        The preferred installation makes use of
        <ExternalLink href="https://github.com/antfu/unplugin-vue-components"
          >unplugin-vue-components</ExternalLink
        >
        as it follows the same principles as the
        <BLink to="/getting-started/#preferred-installation">preferred installation</BLink> for our
        core package
      </BCol>
    </BRow>
    <BRow>
      <BCol> To start, install the necessary packages: </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BTabs>
          <BTab title="PNPM" active>
            <CodeBlock>
              pnpm add unplugin-icons unplugin-vue-components @vue/compiler-sfc -D
            </CodeBlock>
          </BTab>
          <BTab title="YARN">
            <CodeBlock>
              yarn add unplugin-icons unplugin-vue-components @vue/compiler-sfc -D
            </CodeBlock>
          </BTab>
          <BTab title="NPM">
            <CodeBlock>
              npm i unplugin-icons unplugin-vue-components @vue/compiler-sfc -D
            </CodeBlock>
          </BTab>
        </BTabs>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <CodeBlock>
          // vite.config.js/ts import { defineConfig } from 'vite' import vue from
          '@vitejs/plugin-vue' import Icons from 'unplugin-icons/vite' import Components from
          'unplugin-vue-components/vite' import IconsResolve from 'unplugin-icons/resolver' //
          https://vitejs.dev/config/ export default defineConfig({ plugins: [ vue(), Components({
          resolvers: [IconsResolve()], dts: true }), Icons({ compiler: 'vue3', autoInstall: true })
          ], })
        </CodeBlock>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        With <HighlightedText>autoInstall: true</HighlightedText> using any icon set in your app
        will automatically import and include that icon set in your dependencies! No manual imports
        are required!
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        If you are using TypeScript you will want to add the
        <HighlightedText>unplugin-icons/types/vue</HighlightedText> to the
        <HighlightedText>compilerOptions.types</HighlightedText>
        array. While there, you should also make sure you included the
        <HighlightedText>components.d.ts</HighlightedText> in the
        <HighlightedText>include</HighlightedText> array:
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <CodeBlock>
          // tsconfig.json { "include": ["components.d.ts"], "compilerOptions": { "types": [
          "unplugin-icons/types/vue", ] } }
        </CodeBlock>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <!-- Then to include an icon, follow the format `i-{collection}-{icon-name}` in your template, where the collection is the id on <https://icon-sets.iconify.design/>. For example, to include `0-circle` in your app, simply use the component `<i-bi-0-circle>`, no import is needed. As stated, you can use any icon from any icon set -->
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <CodeBlock>
          <!-- <template>
  <i-bi-0-circle />
  <i-bi-activity color="red" />
  You can use any icon set, no need to worry about importing -->
          <!-- <i-mdi-account-box /> -->
          <!-- fa -->
          <!-- <i-fa-angellist /> -->
          <!-- </template> -->
        </CodeBlock>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        View the
        <ExternalLink href="https://github.com/antfu/unplugin-vue-components"
          >unplugin-vue-components</ExternalLink
        >
        documentation for their extra feature, such as
        <ExternalLink
          href="https://github.com/antfu/unplugin-icons#global-custom-icon-transformation"
          >Global Custom Icon Transformation</ExternalLink
        >
        and other information
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4>Basic Installation</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Of course, there is always the ability to slim down. To slim down the installation, you can
        manually import only the bootstrap-icons icon set, disable auto importing, and not use
        unplugin-vue-components read below. Note, the preferred installation automatically
        treeshakes all components, both installation methods should have the same final dist size
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BTabs>
          <BTab title="PNPM" active>
            <CodeBlock> pnpm add unplugin-icons @vue/compiler-sfc @iconify-json/bi -D </CodeBlock>
          </BTab>
          <BTab title="YARN">
            <CodeBlock> yarn add unplugin-icons @vue/compiler-sfc @iconify-json/bi -D </CodeBlock>
          </BTab>
          <BTab title="NPM">
            <CodeBlock> npm i unplugin-icons @vue/compiler-sfc @iconify-json/bi -D </CodeBlock>
          </BTab>
        </BTabs>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <CodeBlock>
          // vite.config.ts import { defineConfig } from 'vite' import vue from '@vitejs/plugin-vue'
          import Icons from 'unplugin-icons/vite' // https://vitejs.dev/config/ export default
          defineConfig({ plugins: [ vue(), Icons({ compiler: 'vue3' }) ], })
        </CodeBlock>
      </BCol>
    </BRow>
    <BRow>
      <BCol> Using this method, you will need to manually import each icon: </BCol>
    </BRow>
    <BRow>
      <BCol>
        <!-- <template>
          <i-bi-0-circle />
          <i-bi-activity color="red" />
          Cannot use, is not a dependency -->
        <!-- <i-mdi-account-box /> -->
        <!-- fa -->
        <!-- <i-fa-angellist /> -->
        <!-- </template> -->

        <!-- <script setup lang="ts">
          import IBi0Circle from '~icons/bi/0-circle'
          import IBiActivity from '~icons/bi/activity'
          // import IMdiAccountBox from '~icons/mdi/account-box'
          // import IFaAngellist from '~icons/mdi/angellist'
        </script> -->
      </BCol>
    </BRow>
  </BContainer>
</template>
