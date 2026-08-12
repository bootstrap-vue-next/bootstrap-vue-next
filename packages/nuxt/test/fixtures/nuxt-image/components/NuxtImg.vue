<!--
  A stub replacing the real `@nuxt/image` `NuxtImg` component.

  Nuxt gives components defined in the project's own `components/` directory priority over
  module-registered components sharing the same name, so this shadows the real `NuxtImg` for
  the fixture app. This lets the test assert - deterministically, and without depending on the
  real image optimization pipeline - that BootstrapVueNext's `BImg` (and anything using it
  internally, like `BCardImg`) actually resolves to and renders the `NuxtImg` component, rather
  than relying on fragile string matching against SSR output (which would be indistinguishable
  from a plain `<img>` if the real `NuxtImg` were used, since it renders a bare `<img>` tag).
-->
<template>
  <img
    data-stub="nuxt-img"
    v-bind="$attrs"
  >
</template>
