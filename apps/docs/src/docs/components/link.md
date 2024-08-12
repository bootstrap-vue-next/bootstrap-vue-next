# Link

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">

Use BootstrapVue's custom b-link component for generating a standard `<a>` link or `RouterLink`. `BLink` supports the `disabled` state and `click` event propagation.

</div>

## Links without Router

By defaut links with no options will default to # location.

<HighlightCard>
  <BLink>Link</BLink>
  <template #html>

```vue-html
  <BLink>Link</BLink>
```

  </template>
</HighlightCard>

## Links with Router and External Links

By specifying a value in the `href` prop, a standard link (`<a>`) element will be rendered. To
generate a `<router-link>` instead, specify the route location via the `to` prop.

Router links support various additional props. Refer to the
[Router support](/docs/reference/router-links) reference section for details.

If your app is running under [Nuxt.js](https://nuxtjs.org), the
[`<nuxt-link>`](https://nuxtjs.org/api/components-nuxt-link) component will be used instead of
`<router-link>`. The `<nuxt-link>` component supports all the same features as `<router-link>` (as
it is a wrapper component for `<router-link>`) and more.

<HighlightCard>
  <BLink href="https://getbootstrap.com/docs/5.3" target="_blank" rel="noopener">
    External Link to Bootstrap
  </BLink>
  <BLink to="sample">
    To page sample
  </BLink>
  <BLink href="#comp-ref--props">
    Jump to Properties
  </BLink>
  <template #html>

```vue-html
<BLink href="https://getbootstrap.com/docs/5.3" target="_blank" rel="noopener">
  External Link to Bootstrap
</BLink>

<BLink to="sample">
  To page sample
</BLink>

<BLink href="#comp-ref--props">
  Jump to Properties
</BLink>
```

  </template>
</HighlightCard>

## Styling Links

External Links can be specified with the `href` prop.

<HighlightCard>
  <BLink class="btn btn-primary me-2" href="https://getbootstrap.com/docs/5.3" target="_blank" rel="noopener">
      External Link to Bootstrap
  </BLink>
  <BLink class="btn btn-primary disabled" href="https://getbootstrap.com/docs/5.3" target="_blank" rel="noopener">
      Disabled Link
  </BLink>
  <template #html>

```vue-html
<BLink class="btn btn-primary m-2" href="https://getbootstrap.com/docs/5.3" target="_blank" rel="noopener">
  External Link to Bootstrap
</BLink>

<BLink class="btn btn-primary disabled m-2" href="https://getbootstrap.com/docs/5.3" target="_blank" rel="noopener">
  Disabled Link
</BLink>
```

  </template>
</HighlightCard>

## Link opacity

Change the alpha opacity of the link `rgba()` color value. Please be aware that changes to a color’s opacity can lead to links with [insufficient contrast](https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast).

<HighlightCard>
  <p v-for="opacity in [10, 25, 50, 75, 100]" :key="opacity">
    <BLink :opacity="opacity"> {{ opacity }} link </BLink>
  </p>
  <template #html>

```vue-html
<p v-for="opacity in [10, 25, 50, 75, 100]" :key="opacity">
  <BLink :opacity="opacity"> {{ opacity }} link </BLink>
</p>
```

  </template>
</HighlightCard>

You can even change the opacity level on hover.

<HighlightCard>
  <p v-for="opacity in [10, 25, 50, 75, 100]" :key="opacity">
    <BLink :opacity-hover="opacity"> {{ opacity }} link </BLink>
  </p>
  <template #html>

```vue-html
<p v-for="opacity in [10, 25, 50, 75, 100]" :key="opacity">
  <BLink :opacity-hover="opacity"> {{ opacity }} link </BLink>
</p>
```

  </template>
</HighlightCard>

## Link underlines

### Underline color

Change the underline’s color independent of the link text color.

<HighlightCard>
  <p
    v-for="color in [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ]"
    :key="color"
  >
    <BLink :underline-variant="color"> {{ color }} link </BLink>
  </p>
  <template #html>

```vue-html
<p
  v-for="color in [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]"
  :key="color"
>
  <BLink :underline-variant="color"> {{ color }} link </BLink>
</p>
```

  </template>
</HighlightCard>

### Underline offset

Change the underline’s distance from your text. Offset is set in `em` units to automatically scale with the element’s current `font-size`.

<HighlightCard>
  <p v-for="offset in [1, 2, 3]" :key="offset">
    <BLink :underline-offset="offset"> {{ offset }} link </BLink>
  </p>

<template #html>

```vue-html
<p v-for="offset in [1, 2, 3]" :key="offset">
  <BLink :underline-offset="offset"> {{ offset }} link </BLink>
</p>
```

  </template>
</HighlightCard>

### Underline opacity

Change the underline’s opacity.

<HighlightCard>
  <p v-for="opacity in [0, 10, 25, 50, 75, 100]" :key="opacity">
    <BLink :underline-opacity="opacity"> {{ opacity }} link </BLink>
  </p>
  <template #html>

```vue-html
<p v-for="opacity in [10, 25, 50, 75, 100]" :key="opacity">
  <BLink :underline-opacity="opacity"> {{ opacity }} link </BLink>
</p>
```

  </template>
</HighlightCard>

### Hover variants

Just like the setting `opacity` has a matching `opacity-hover` prop, `underline-offset` and `underline-opacity` have matching
`underline-offset-hover` and `underline-offset-opacity` props. Mix and match to create unique link styles.

<HighlightCard>
  <BLink
    :underline-offset="3"
    underline-opacity="25"
    underline-offset-hover="1"
    underline-opacity-hover="100"
  >
    Mutliple variants
  </BLink>
  <template #html>

```vue-html
<BLink
  :underline-offset="3"
  underline-opacity="0"
  underline-offset-hover="1"
  underline-opacity-hover="100"
>
  Mutliple variants
</BLink>
```

  </template>
</HighlightCard>

## Colored Links

You can use the `variant` prop to colorize links. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.

<HighlightCard>
  <p
    v-for="color in [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ]"
    :key="color"
  >
    <BLink :variant="color"> {{ color }} link </BLink>
  </p>
  <template #html>

```vue-html
<p
  v-for="color in [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]"
  :key="color"
>
  <BLink :variant="color"> {{ color }} link </BLink>
</p>
```

  </template>
</HighlightCard>

## Link disabled state

Disable link functionality by setting the `disabled` prop to true.

<HighlightCard>
  <BLink href="#foo" disabled>Disabled Link</BLink>
  <template #html>

```vue-html
  <BLink href="#foo" disabled>Disabled Link</BLink>
```

  </template>
</HighlightCard>

Disabling a link will set the Bootstrap v5 `.disabled` class on the link as well as handles stopping
event propagation, preventing the default action from occurring, and removing the link from the
document tab sequence (`tabindex="-1"`).

<NoteAlert> Bootstrap v5 CSS currently does not style disabled links differently than non-disabled
links. You can use the following custom CSS to style disabled links (by preventing hover style
changes):
</NoteAlert>

<HighlightCard>

<template #html>

```vue-css
a.disabled {
  pointer-events: none;
}
```

</template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/link.data'
import ComponentReference from '../../components/ComponentReference.vue'
import ComponentSidebar from '../../components/ComponentSidebar.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import NoteAlert from '../../components/NoteAlert.vue'
import {BLink, BCard, BCardBody} from 'bootstrap-vue-next'
</script>
