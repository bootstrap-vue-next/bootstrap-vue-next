<template>
  <BContainer>
    <BRow>
      <BCol>
        <h1>Composables</h1>
      </BCol>
    </BRow>
    <BRow>
      <BCol> BootstrapVueNext exposes a few composables to make various tasks easier </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2>useColorMode</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol> <BAlert :model-value="true"> Requires Bootstrap@5.3.0 </BAlert> </BCol>
    </BRow>
    <BRow>
      <BCol>
        <HighlightedText>useColorMode</HighlightedText> makes creating application color modes easy.
        Bootstrap includes defaults for <HighlightedText>Light</HighlightedText> and
        <HighlightedText>Dark</HighlightedText> modes. To create more modes, you will need to
        manually add <HighlightedText>SCSS</HighlightedText>. Read more
        <ExternalLink
          href="https://getbootstrap.com/docs/5.3/customize/color-modes/#custom-color-modes"
          >here</ExternalLink
        >
      </BCol>
    </BRow>
    <BRow>
      <BCol> After adding your custom sass, you can then do: </BCol>
    </BRow>
    <BRow>
      <BCol>
        <CodeBlock>
          const mode = useColorMode({ attribute: 'theme', modes: { // custom colors dim: 'dim',
          cafe: 'cafe', }, })
        </CodeBlock>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <HighlightedText>useColorMode</HighlightedText> is simply a wrapper for the
        <ExternalLink href="https://vueuse.org/core/useColorMode/#usecolormode"
          >Vueuse utility</ExternalLink
        >. You can read more by viewing their docs. By default, the composable targets the
        <HighlightedText>body</HighlightedText> tag. However, you can adjust this by specifying the
        <HighlightedText>Selector option</HighlightedText>. The selector option can even be a
        <HighlightedText>Template Ref</HighlightedText>! This means you can enable certain modes on
        certain children
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2>Breadcrumbs</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        BootstrapVueNext exposes <HighlightedText>useBreadcrumb</HighlightedText> and
        <HighlightedText>createBreadcrumb</HighlightedText>. This utility makes a global location
        that you can use to store the current breadcrumb location. You can then use this utility to
        use in the <HighlightedText>BBreadcrumb</HighlightedText> items prop. The main use of this
        utility is to be able to modify a parent Breadcrumb in some far off child, or even in a
        different component tree branch and have it react.
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <CodeBlock>
          <!-- <template>
            <BBreadcrumb :items="breadcrumbItems" />
          </template>

          <script setup lang="ts">
            import {useBreadcrumb} from 'bootstrap-vue-next'
            const breadcrumbItems = useBreadcrumb()
          </script> -->
        </CodeBlock>
      </BCol>
    </BRow>
    <BRow>
      <BCol> Then in some faraway child: </BCol>
    </BRow>
    <BRow>
      <BCol>
        <CodeBlock>
          <!-- <template>
            <BButton @click="addItems">Add items</BButton>
          </template>

          <script setup lang="ts">
            import {useBreadcrumb} from 'bootstrap-vue-next'

            const breadcrumbItems = useBreadcrumb()

            const addItems = () => {
              breadcrumbItems.items = ['foo', 'bar', 'baz']
            }
          </script> -->
        </CodeBlock>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Do note, the <HighlightedText>BBreadcrumb</HighlightedText> component automatically detects
        if you are using the composable. If something exists in the useBreadcrumb's global context,
        it will automatically use it. Adding
        <HighlightedText>:items="breadcrumbItems"</HighlightedText> in this context is redundant.
        Manually setting <HighlightedText>props.items</HighlightedText> takes priority over the
        global breacrumb items
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h3>createBreadcrumb</h3>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        Normally, you may not need to manually call createBreadcrumb. If you are following the
        legacy installation, it should already be mounted. Likewise, using @bootstrap-vue-next/nuxt
        should automatically set this value. If you are finding the values for
        <HighlightedText>useBreadcrumb</HighlightedText> to not be accessable, try calling this
        composable in your <HighlightedText>app.vue</HighlightedText>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// TODO read directives todo
</script>
