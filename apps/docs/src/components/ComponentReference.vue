<template>
  <BContainer fluid class="p-0 component-reference">
    <BRow>
      <BCol>
        <h2>Component Reference</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BContainer v-for="component in sortData" :key="component.component" fluid class="p-0">
          <BRow>
            <BCol>
              <code class="display-6">{{ `<` + component.component + `>` }}</code>
            </BCol>
          </BRow>
          <BRow>
            <BCol>
              <ul>
                <li v-for="section in sections" :key="section">
                  <BLink :to="buildCompReferenceLink(`${component.component}-${section}`)">
                    &lt;{{ component.component }}&gt; {{ section }}
                  </BLink>
                </li>
              </ul>
            </BCol>
          </BRow>
          <BRow v-for="section in sections" :key="section" class="my-3">
            <BCol>
              <BContainer fluid>
                <BRow>
                  <BCol>
                    <h5>
                      <BLink
                        :id="buildCompReferenceLink(`${component.component}-${section}`).slice(1)"
                        variant="info"
                        :href="buildCompReferenceLink(`${component.component}-${section}`)"
                      >
                        {{ section }}
                      </BLink>
                    </h5>
                  </BCol>
                </BRow>
                <BRow>
                  <BCol>
                    <BTable
                      :items="component[sectionToComponentItem(section)]"
                      hover
                      small
                      responsive
                      bordered
                      striped
                    />
                  </BCol>
                </BRow>
              </BContainer>
            </BCol>
          </BRow>
        </BContainer>
      </BCol>
    </BRow>
  </BContainer>
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
          type: inner.type,
          default: inner.default,
          description: inner.description,
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
