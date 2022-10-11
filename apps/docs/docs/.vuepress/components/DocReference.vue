<template>
  <h2 id="component-reference" tabindex="-1">
    <a class="header-anchor" href="#component-reference" aria-hidden="true">#</a> Component
    reference
  </h2>

  <template v-for="(component, index) in reference.meta.components" :key="index">
    <h3 :id="component.component" tabindex="-1">
      <a class="header-anchor" :href="`#${component.component}`" aria-hidden="true">#</a>
      <code>&lt;{{ component.component }}&gt;</code>
    </h3>

    <template v-if="component.props">
      <h4 id="properties" tabindex="-1">
        <a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties
      </h4>

      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prop in component.props">
            <td class="text-nowrap">
              <code>{{ prop.prop }}</code>
            </td>
            <td
              v-html="
                Array.isArray(prop.type)
                  ? prop.type.map((item) => `<code>${item}</code>`).join(' or ')
                  : `<code>${prop.type}</code>`
              "
            ></td>
            <td>
              <code>{{
                typeof prop.default === 'string' ? `'${prop.default}'` : prop.default
              }}</code>
            </td>
            <td>{{ prop.description }}</td>
          </tr>
        </tbody>
      </table>
    </template>

    <template v-if="component.events">
      <h4 id="events" tabindex="-1">
        <a class="header-anchor" href="#events" aria-hidden="true">#</a> Events
      </h4>

      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in component.events">
            <td class="text-nowrap">
              <code>{{ event.event }}</code>
            </td>
            <td>{{ event.description }}</td>
          </tr>
        </tbody>
      </table>
    </template>

    <template v-if="component.slots">
      <h4 id="slots" tabindex="-1">
        <a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots
      </h4>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="slot in component.slots">
            <td class="text-nowrap">
              <code>{{ slot.name }}</code>
            </td>
            <td>{{ slot.description }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </template>
</template>

<script setup lang="ts">
defineProps({
  reference: {type: Object, required: true},
})
</script>
