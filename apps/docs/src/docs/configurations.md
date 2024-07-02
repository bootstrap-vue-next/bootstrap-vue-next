# Configurations - Table of Contents

<div class="lead mb-5">

BootstrapVueNext provides several configuration options that you can use to customize the behavior of your components.

</div>

<TableOfContentsCard v-for="composable in computedConfigurationsList" :key="composable.name" class="my-3" :name="composable.name" :description="composable.description" :route="composable.route" />

<script setup lang="ts">
import {withBase} from 'vitepress'
import {computed} from 'vue'
import TableOfContentsCard from '../components/TableOfContentsCard.vue'

const routeLocation = (name: string): string => withBase(`/docs/configurations/${name}`).trim()

const configurationsList: {name: string; route: string}[] = [
  {
    name: 'Global Options',
    route: routeLocation('global-options'),
    description: 'Set default prop values for all Vue components.',
  }
]

const computedConfigurationsList = computed(() =>
  configurationsList
    .map((el) => ({
      name: el.name,
      route: el.route,
      description: el.description
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
)
</script>
