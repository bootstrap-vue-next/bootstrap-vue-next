# Reference - Table of Contents

<div class="lead mb-5">

BootstrapVueNext and Bootstrap reference, and additional resources documentation.

</div>

<TableOfContentsCard v-for="component in computedComponentsList" :key="component.name" class="my-3" :name="component.name" :description="component.description" :route="component.route" />

<script setup lang="ts">
import {withBase} from 'vitepress'
import {computed} from 'vue'
import TableOfContentsCard from '../components/TableOfContentsCard.vue'

const routeLocation = (name: string): string => withBase(`/docs/reference/${name.toLowerCase()}`).trim().replaceAll(/\s+/g, '-')

const componentList: {name: string; description: string}[] = [
  {
    name: 'Accessibility',
    description:
      `A brief overview of BootstrapVueNext's features and limitations for the creation of accessible content`,
  },
  {
    name: 'Color Variants',
    description:
      'Color variants available when using the default Bootstrap v5 CSS and their mappings to CSS classes',
  },
  {
    name: 'Contributing',
    description:
      'Information on contributing to the BootstrapVueNext project',
  },
  {
    name: 'Router Links',
    description: 'Several BootstrapVueNext components support rendering `RouterLink` components compatible with Vue Router and Nuxt.js',
  },
  {
    name: 'Settings',
    description: 'BootstrapVue provides a few options for customizing component default values, and more',
  },
  {
    name: 'Size props and classes',
    description: 'Bootstrap v5 CSS provides several classes that control the sizing of elements, of which some of these have been translated into props on components',
  },
  {
    name: 'Spacing classes',
    description: `Bootstrap v5 CSS includes a wide range of shorthand responsive margin and padding utility classes to modify an element's appearance`,
  },
  {
    name: 'Starter Templates',
    description:
      'There are several ways you can create your app, from basic client side HTML all the way up to using a build system and compilers',
  },
  {
    name: 'Theming Bootstrap',
    description:
      `Theming is accomplished by SASS variables, SASS maps, and custom CSS. There is no dedicated theme stylesheet; instead, you can enable the built-in theme to add gradients, shadows, and more.`,
  },
  {
    name: 'Third party libraries',
    description:
      'There are several 3rd party libraries that you can use to add additional functionality and features to your BootstrapVue project',
  },
  {
    name: 'Utility Classes',
    description:
      'Bootstrap v5 CSS provides various utility classes to control color, spacing, flex-box, text alignment, floating, position, responsive display/hiding and much more',
  },
  {
    name: 'Form Validation',
    description:
      'BootstrapVueNext does not include form validation by default; we leave that up to the many existing form validation plugins. Included here are some examples of validation plugins and how they may be integrated',
  },
]

const computedComponentsList = computed(() =>
  componentList
    .map((el) => ({
      name: el.name,
      description: el.description,
      route: routeLocation(el.name),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
)
</script>
