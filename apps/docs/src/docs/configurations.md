# Configurations - Table of Contents

<div class="lead mb-5">

BootstrapVueNext provides several configuration options that you can use to customize the behavior of your components.

</div>

<TableOfContentsCard v-for="configuration in data" :key="configuration.name" class="my-3" :name="configuration.name" :description="configuration.description" :route="configuration.url" />

<script setup lang="ts">
import {data} from '../data/configurations.data'
import TableOfContentsCard from '../components/TableOfContentsCard.vue'
</script>
