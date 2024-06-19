<template>
  <BContainer fluid class="p-0 component-reference">
    <BRow>
      <BCol>
        <h2 id="component-reference">Component Reference</h2>
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
                <li v-for="section in component.sections" :key="section">
                  <BLink :to="buildCompReferenceLink(`${component.component}-${section}`)">
                    &lt;{{ component.component }}&gt; {{ section }}
                  </BLink>
                </li>
              </ul>
            </BCol>
          </BRow>
          <BRow v-for="section in component.sections" :key="section" class="my-3">
            <BCol>
              <BContainer fluid>
                <BRow>
                  <BCol>
                    <h5>
                      <BLink
                        :id="buildCompReferenceLink(`${component.component}-${section}`).slice(1)"
                        variant="info"
                        :to="buildCompReferenceLink(`${component.component}-${section}`)"
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
                      :fields="fields[sectionToComponentItem(section)]"
                      hover
                      small
                      responsive
                      bordered
                      striped
                    >
                      <template #cell(type)="d">
                        <code>
                          {{ d.item.type }}
                        </code>
                      </template>
                      <template #cell(scope)="d">
                        <!-- eslint-disable-next-line prettier/prettier -->
                        <div
                          v-for="scope in d.item.scope as SlotScopeReference[]"
                          :key="scope.prop"
                        >
                          <code>{{ scope.prop }}</code>
                          <code>: {{ scope.type }}</code>
                          <span v-if="!!scope.description"> - {{ scope.description }}</span>
                        </div>
                      </template>
                      <template #cell(args)="d">
                        <!-- eslint-disable-next-line prettier/prettier -->
                        <div v-for="arg in d.item.args as EmitArgReference[]" :key="arg.arg">
                          <code>{{ arg.arg }}</code>
                          <code>: {{ arg.type }}</code>
                          <span v-if="!!arg.description"> - {{ arg.description }}</span>
                        </div>
                      </template>
                      <template #cell(default)="d">
                        <code>
                          {{ normalizeDefault(d.item.default) }}
                        </code>
                      </template>
                    </BTable>
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
import {BCol, BContainer, BLink, BRow, BTable, type TableFieldRaw} from 'bootstrap-vue-next'
import type {
  ComponentItem,
  ComponentReference,
  ComponentSection,
  EmitArgReference,
  SlotScopeReference,
} from '../data/components/ComponentReference'

const props = defineProps<{data: ComponentReference[]}>()

/**
 * Sorts the items inside so they're uniform structure
 */
const sortData = computed(() =>
  props.data.map((el: ComponentReference): ComponentReference => {
    const data: ComponentReference = {
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
    }

    data.sections = (['Properties', 'Events', 'Slots'] as ComponentSection[]).filter(
      (x) => !!data?.[sectionToComponentItem(x)]?.length
    )

    return data
  })
)

const buildCompReferenceLink = (str: string): string => `#comp-reference-${str}`.toLowerCase()

const sectionToComponentItem = (el: ComponentSection): ComponentItem =>
  el === 'Properties' ? 'props' : el === 'Events' ? 'emits' : 'slots'

const fields: {[P in ComponentItem]: TableFieldRaw[]} = {
  props: ['prop', 'type', 'default', 'description'],
  emits: ['event', 'args', 'description'],
  slots: ['name', 'scope', 'description'],
}

const normalizeDefault = (val: unknown) =>
  val === undefined || val === null ? `${val}` : typeof val === 'string' ? `'${val}'` : val
</script>
