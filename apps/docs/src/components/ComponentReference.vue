<template>
  <b-container fluid class="p-0">
    <b-row>
      <b-col>
        <h2>Component Reference</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-container v-for="component in sortData" :key="component.component" fluid class="p-0">
          <b-row>
            <b-col>
              <h3>
                {{ component.component }}
              </h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <ul>
                <li v-for="section in sections" :key="section">
                  <h4>
                    <b-link :to="buildCompReferenceLink(`${component.component}-${section}`)">
                      &lt;{{ component.component }}&gt; {{ section }}
                    </b-link>
                  </h4>
                </li>
              </ul>
            </b-col>
          </b-row>
          <b-row
            v-for="section in sections"
            :key="section"
            class="border-bottom border-secondary my-3"
          >
            <b-col>
              <b-container fluid>
                <b-row>
                  <b-col>
                    <h5>
                      <b-link
                        :id="buildCompReferenceLink(`${component.component}-${section}`).slice(1)"
                        variant="info"
                        :href="buildCompReferenceLink(`${component.component}-${section}`)"
                      >
                        {{ section }}
                      </b-link>
                    </h5>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-table :items="component[sectionToComponentItem(section)]" />
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {BCol, BContainer, BLink, BRow, BTable} from 'bootstrap-vue-next'
import type {ComponentReference} from '../data/components/ComponentReference'

const props = defineProps<{data: ComponentReference[]}>()

/**
 * Sorts the items inside so they're uniform structure
 */
const sortData = computed(() =>
  [...props.data].map(
    (el: ComponentReference): ComponentReference => ({
      component: el.component,
      props: el.props
        .map((inner) => ({
          prop: inner.prop,
          description: inner.description,
          type: inner.type,
          default: inner.default,
        }))
        .sort((a, b) => a.prop.localeCompare(b.prop)),
      emits: el.emits
        .map((inner) => ({
          event: inner.event,
          description: inner.description,
          // Does not render inner object correctly
          args: inner.args,
        }))
        .sort((a, b) => a.event.localeCompare(b.event)),
      slots: el.slots
        .map((inner) => ({
          name: inner.name,
          description: inner.description,
          // Does not render inner object correctly
          scope: inner.scope,
        }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    })
  )
)

const sections = ['Properties', 'Events', 'Slots'] as const

const buildCompReferenceLink = (str: string): string => `#comp-reference-${str}`.toLowerCase()

const sectionToComponentItem = (
  el: (typeof sections)[number]
): Exclude<keyof ComponentReference, 'component'> =>
  el === 'Properties' ? 'props' : el === 'Events' ? 'emits' : 'slots'
</script>
