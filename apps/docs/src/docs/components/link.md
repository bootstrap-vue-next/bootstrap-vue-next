# Link

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Use BootstrapVue's custom b-link component for generating a standard `<a>` link or `<RouterLink>`. `<BLink>` supports the disabled state and click event propagation.

</div>

## Links without Router

By defaut links with no options will default to # location.

<BCard class="bg-body-tertiary mb-4">
  <BLink>
    Link
  </BLink>
</BCard>

## Links with Router and External Links

External Links can be specified with the `href` prop.

<HighlightCard>
  <BLink href="https://getbootstrap.com/docs/5.3">
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
<BLink href="https://getbootstrap.com/docs/5.3">
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
  <BLink class="btn btn-primary me-2" href="https://getbootstrap.com/docs/5.3">
      External Link to Bootstrap
  </BLink>
  <BLink class="btn btn-primary disabled" href="https://getbootstrap.com/docs/5.3">
      Disabled Link
  </BLink>
  <template #html>

```vue-html
<BLink class="btn btn-primary m-2" href="https://getbootstrap.com/docs/5.3">
  External Link to Bootstrap
</BLink>

<BLink class="btn btn-primary disabled m-2" href="https://getbootstrap.com/docs/5.3">
  Disabled Link
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

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/link.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BLink, BCard, BCardBody} from 'bootstrap-vue-next'
</script>
