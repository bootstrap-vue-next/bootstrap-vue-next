# Offcanvas

<PageHeader>

Build hidden sidebars into your project. Sidebars can aid in enhancing user interaction or preventing further interaction.

</PageHeader>

<<< DEMO ./demo/OffcanvasOverview.vue#template{vue-html}

## Customizing Location

Customize location with four standard options `top, bottom, start, end`.

<<< DEMO ./demo/OffcanvasLocations.vue#template{vue-html}

## Responsive

The `responsive` prop in the BOffcanvas component enables adaptive display behavior based on the viewport size. When set, the offcanvas content displays inline for viewports wider than the specified breakpoint, and as a traditional offcanvas for narrower viewports

::: info NOTE
In SSR environments, the BOffcanvas component must be rendered client-side due to its dependency on browser context for responsive behavior. Use client-only directives or components to ensure proper functionality
:::

<<< FRAGMENT ./demo/OffcanvasResponsive.vue#template{vue-html}

## Sidebar

One common use of offcanvas is to create a table of contents sider that is visible on a large screen, but becomes an offcanvas component below a certain breakpoint. This is common for documentation sites like the one you're reading now which includes two such sidebars - a "table of contents" on the left and a "on this page" on the right.

Below is a simple example showing how to set up such a site.

<<< FRAGMENT ./demo/OffcanvasSidebar.vue

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/offcanvas.data'
</script>
