# Router link support

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Several BootstrapVue components support rendering `<router-link>` components compatible with Vue Router and Nuxt.js. For more information, see the official [Vue Router docs](https://router.vuejs.org) and official [Nuxt.js docs](https://nuxt.com/docs/api/components/nuxt-link#props).

</div>

## Common router link props

In the following sections, we are using the `<b-link>` component to render router links. `<b-link>` is the building block of most of BootstrapVue's actionable components. You could use any other component that supports link generation such as `<b-link>`, `<b-button>`, `<b-avatar>`, `<b-breadcrumb-item>`, `<b-list-group-item>`, `<b-nav-item>`, `<b-dropdown-item>`, and `<b-pagination-nav>`. Note that not all props are available on all components. Refer to the respective component documentation for details.

### `to`

- type: `string | Location`
- required to generate a `<router-link>`

Denotes the target route of the link. When clicked, the value of the `to` prop will be passed to `router.push()` internally, so the value can be either a string or a location descriptor object.

<b-card class="bg-body-tertiary">

```vue
<!-- Literal string -->
<b-link to="home">Home</b-link>

<!-- Renders to -->
<a href="home">Home</a>

<!-- JavaScript expression using `v-bind` -->
<b-link v-bind:to="'home'">Home</b-link>

<!-- Omitting `v-bind` is fine, just as binding any other prop -->
<b-link :to="'home'">Home</b-link>

<!-- Same as above -->
<b-link :to="{path: 'home'}">Home</b-link>

<!-- Named route -->
<b-link :to="{name: 'user', params: {userId: 123}}">User</b-link>

<!-- With query, resulting in `/register?plan=private` -->
<b-link :to="{path: 'register', query: {plan: 'private'}}">Register</b-link>

<!-- Render a non-router link by omitting `to` and specifying an `href` -->
<b-link href="/home">Home</b-link>
```

</b-card>

### `replace`

- type: `boolean`
- default: `false`

Setting replace prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record.

<b-card class="bg-body-tertiary">

```vue
<b-link :to="{path: '/abc'}" replace></b-link>
```

</b-card>

### `append`

- type: `boolean`
- default: `false`

Setting `append` prop always appends the relative path to the current path. For example, assuming we are navigating from `/a` to a relative link `b`, without `append` we will end up at `/b`, but with `append` we will end up at `/a/b`.

<b-card class="bg-body-tertiary">

```vue
<b-link :to="{path: 'relative/path'}" append></b-link>
```

</b-card>

### `router-tag`

- type: `string`
- default: 'a'

Sometimes we want `<router-link>` to render as another tag, e.g `<li>`. Then we can use `router-tag` prop to specify which tag to render to, and it will still listen to click events for navigation. `router-tag` translates to the `tag` prop on the final rendered `<router-link>`.

<b-card class="bg-body-tertiary">

```vue
<b-link to="/foo" router-tag="li">foo</b-link>

<!-- Renders as -->
<li>foo</li>
```

</b-card>

<b-alert variant="info" :model-value="true" class="my-5">

Note: Changing the tag from anything other than `<a>` is discouraged, as it hinders accessibility of keyboard and/or screen-reader users, and is also not very SEO friendly.

</b-alert>

### `active-class`

- type: `string`
- default: `router-link-active` (`nuxt-link-active` when using Nuxt.js)

Configure the active CSS class applied when the link is active. Note the default value can also be configured globally via the `linkActiveClass` [router constructor option](https://router.vuejs.org/api/#linkactiveclass).

With components that support router links (have a `to` prop), you will want to set this to the class `active` (or a space separated string that includes 'active') to apply Bootstrap's `active` styling on the component when the current route matches the `to` prop.

### `exact`

- type: `boolean`
- default: `false`

The default active class matching behavior is inclusive match. For example, `<b-link to="/a">` will get this class applied as long as the current path starts with `/a/` or is `/a`.

One consequence of this is that `<b-link to="/">` will be active for every route! To force the link into "exact match mode", use the `exact` prop:

<b-card class="bg-body-tertiary">

```vue
<!-- This link will only be active at `/` -->
<b-link to="/" exact></b-link>
```

</b-card>

### `exact-active-class`

- type: `string`
- default: `router-link-exact-active` (`nuxt-link-exact-active` when using Nuxt.js)
- availability: Vue Router 2.5.0+

Configure the active CSS class applied when the link is active with exact match. Note the default value can also be configured globally via the `linkExactActiveClass` [router constructor option](https://router.vuejs.org/api/#linkexactactiveclass).

With components that support router links (have a `to` prop), you will want to set this to the class `active` (or a space separated string that includes `active`) to apply Bootstrap's active styling on the component when the current route matches the `to` prop.

### `exact-path`

- type: `boolean`
- default: `false`
- availability: Vue Router 3.5.0+

Allows matching only using the `path` section of the url, effectively ignoring the `query` and the `hash` sections.

<b-card class="bg-body-tertiary">

```vue
<!-- this link will also be active at `/search?page=2` or `/search#filters` -->
<router-link to="/search" exact-path> </router-link>
```

</b-card>

### `exact-path-active-class`

- type: `string`
- default: `router-link-exact-path-active`
- availability: Vue Router 2.5.0+

Configure the active CSS class applied when the link is active with exact path match. Note the default value can also be configured globally via the `linkExactActiveClass` [router constructor option](https://router.vuejs.org/api/#linkexactactiveclass).

With components that support router links (have a `to` prop), you will want to set this to the class `active` (or a space separated string that includes `active`) to apply Bootstrap's active styling on the component when the current route matches the `to` prop.

## Nuxt.js specific router link props

When BootstrapVue detects that your app is running under [Nuxt.js](https://nuxt.com), it will render a [`<nuxt-link>`](https://nuxt.com/docs/api/components/nuxt-link#nuxtlink) sub component instead of a `<router-link>`. `<nuxt-link>` supports all of the above router link props, plus the following additional Nuxt.js specific props.

### `prefetch`

- type: `boolean`
- default: `null`
- availability: Nuxt.js 3+

To improve the responsiveness of your Nuxt.js applications, when the link will be displayed within the viewport, Nuxt.js will automatically prefetch the code splitted page. Setting `prefetch` to `true` or `false` will overwrite the default value of `router.prefetchLinks` configured in the `nuxt.config.js` configuration file.

### `no-prefetch`

- type: `boolean`
- default: `true`
- availability: Nuxt.js 3+

To improve the responsiveness of your Nuxt.js applications, when the link will be displayed within the viewport, Nuxt.js will automatically prefetch the code splitted page. Setting `no-prefetch` will disabled this feature for the specific link.

<b-card class="bg-body-tertiary">

```vue
router: { prefetchLinks: false }
```

</b-card>

<script setup lang="ts">
import {BCard, BAlert} from 'bootstrap-vue-next'
</script>
