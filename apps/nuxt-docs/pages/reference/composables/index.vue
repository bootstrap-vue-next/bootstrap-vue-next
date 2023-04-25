<template>
  <BContainer>
    <BRow>
      <BCol>
        <h1>Composables</h1>
      </BCol>
    </BRow>
    <BRow>
      <BCol> BootstrapVueNext exposes a few composables to make various tasks easier </BCol>
    </BRow>
    <BRow v-for="comp in composables" :key="comp.to" class="mt-4">
      <BCol>
        <BCard>
          <template #header>
            <h2>{{ comp.title }}</h2>
          </template>
          <BCardText>
            {{ comp.description }}
          </BCardText>
          <BButton :to="`${composablesBase}/${comp.to}`" variant="primary">View More</BButton>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// TODO read directives todo
const composablesBase = '/reference/composables'

const composables: {title: string; description?: string; to: string}[] = [
  {
    title: 'useColorMode',
    to: 'useColorMode',
    description:
      'useColorMode allows you to cleanly implement different application color modes throughout your app. They can be global styles, or targetted to a specific component branch',
  },
  {
    title: 'useBreadcrumb',
    to: 'useColorMode',
    description:
      "Easily gather and set the current page's location so you can use it from anywhere in the app. Mostly used with the BBreadcrumb component, to modify its navigation hierarchy anywhere in the app",
  },
]
</script>
