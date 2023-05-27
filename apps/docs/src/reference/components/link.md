# Link

## Links without Router

By defaut links with no options will default to # location

<b-card no-body class="mb-4">
  <b-card-body class="bg-body-tertiary">
    <b-link>
      Link
    </b-link>
  </b-card-body>
</b-card>

## Links with Router and External Links

External Links can be specified with the `href` prop.

<b-card no-body class="mb-5">
  <b-card-body>
    <b-link href="https://getbootstrap.com/docs/5.0">
      External Link to Bootstrap
    </b-link>
    <b-link to="sample">
      To page sample
    </b-link>
    <b-link href="#comp-ref--props">
      Jump to Properties
    </b-link>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-link href="https://getbootstrap.com/docs/5.0">
  External Link to Bootstrap
</b-link>

<b-link to="sample">
  To page sample
</b-link>

<b-link href="#comp-ref--props">
  Jump to Properties
</b-link>
```

  </b-card-body>

</b-card>

## Styling Links

External Links can be specified with the `href` prop

<b-card no-body class="mb-5">
  <b-card-body>
    <b-link class="btn btn-primary me-2" href="https://getbootstrap.com/docs/5.0">
        External Link to Bootstrap
    </b-link>
    <b-link class="btn btn-primary disabled" href="https://getbootstrap.com/docs/5.0">
        Disabled Link
    </b-link>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-link class="btn btn-primary m-2" href="https://getbootstrap.com/docs/5.0">
  External Link to Bootstrap
</b-link>

<b-link class="btn btn-primary disabled m-2" href="https://getbootstrap.com/docs/5.0">
  Disabled Link
</b-link>
```

  </b-card-body>

</b-card>

## Colored Links

You can use the `variant` prop to colorize links. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast

<b-card no-body class="mb-5">
  <b-card-body>
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
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

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

  </b-card-body>

</b-card>

<ComponentReference :data="data"></ComponentReference>

<script setup lang="ts">
import {data} from '../../data/components/link.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {BLink, BCard, BCardBody} from 'bootstrap-vue-next'
</script>
