# Directives

<div class="lead mb-5">

'Vue3` supports using custom directives, here you can find a list of directives from this package.

</div>

Depending on the installation method, directives may be automatically registered globally. However, if they are not automatically imported, you will want to import them manually. Every directive is exposed using the v- prefix. For example, for directive `BToggle`, it is imported under `vBToggle`. When using the composition api, it will function as expected. However, if you are using the options api you will want to manually remove the v- prefix during registry. For more information, visit the [vue docs](https://vuejs.org/guide/reusability/custom-directives.html#introduction)

<table-of-contents-card v-for="composable in computedComposablesList" :key="composable.name" class="my-3" :name="composable.name" :description="composable.description" :route="composable.route" />

<script setup lang="ts">
import {withBase} from 'vitepress'
import {computed} from 'vue'
import TableOfContentsCard from '../components/TableOfContentsCard.vue'

const routeLocation = (name: string): string => withBase(`/reference/directives/${name}`).trim()

const composablesList: {name: string; description: string}[] = [
  {
    name: 'BColorMode',
    description: 'The BColorMode directive has a similar result to the useColorMode utility, but provides more low level access than the composable',
  },
  {
    name: 'BModal',
    description: 'Similar to the BToggle directive, the BModal directive is used to trigger the state of a modal through directive',
  },
  {
    name: 'BPopover',
    description: 'Add popovers to any element on your site, using Bootstrap v4 CSS for styling and animations',
  },
  {
    name: 'BToggle',
    description: 'A light-weight directive for toggling visibility state for collapses and sidebars by ID. It automatically handles the accessibility attributes on the trigger element',
  },
  {
    name: 'BTooltip',
    description: 'Add custom tooltips to any element. Tooltips can be triggered by hovering, focusing, or clicking an element',
  }
]

const computedComposablesList = computed(() =>
  [...composablesList]
    .map((el) => ({
      name: el.name,
      description: el.description,
      route: routeLocation(el.name),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
)
</script>
