# Link

## Links without Router

By defaut links with no options will default to # location

<b-link>
  Link
</b-link>

## Links with Router and External Links

External Links can be specified with the `href` prop.

<b-card>
  <b-link href="https://getbootstrap.com/docs/5.0">
    External Link to Bootstrap
  </b-link>
  <b-link to="sample" >
    To page sample
  </b-link>
  <b-link href="#comp-ref--props" >
    Jump to Properties
  </b-link>
</b-card>

```vue-html
<b-link href="https://getbootstrap.com/docs/5.0">
  External Link to Bootstrap
</b-link>
<b-link to="sample" >
  To page sample
</b-link>
<b-link href="#comp-ref--props" >
  Jump to Properties
</b-link>
```

## Styling Links

External Links can be specified with the `href` prop

<b-card>
  <b-link class="btn btn-primary m-2" href="https://getbootstrap.com/docs/5.0">
      External Link to Bootstrap
  </b-link>
   <b-link class="btn btn-primary disabled m-2" href="https://getbootstrap.com/docs/5.0">
      Disabled Link
  </b-link>
</b-card>

```vue-html
<b-link class="btn btn-primary m-2" href="https://getbootstrap.com/docs/5.0">
    External Link to Bootstrap
</b-link>
  <b-link class="btn btn-primary disabled m-2" href="https://getbootstrap.com/docs/5.0">
    Disabled Link
</b-link>
```

## Colored Links

You can use the `variant` prop to colorize links. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast

<b-card>
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
    <b-link :variant="color"> {{ color }} link </b-link>
  </p>
</b-card>

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
  <b-link :variant="color"> {{ color }} link </b-link>
</p>
```

<ComponentReference :data="data"></ComponentReference>

<script setup lang="ts">
import {data} from '../../data/components/link.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {BLink, BCard} from 'bootstrap-vue-next'
</script>
