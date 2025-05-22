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
              <h3 :id="kebabCase(component.component)">
                <code class="display-6">{{ `<` + component.component + `>` }}</code>
              </h3>
            </BCol>
            <BCol v-if="globalData && component.sourcePath !== null" cols="4" class="text-md-right">
              <ViewSourceButton
                :href="
                  component.sourcePath
                    ? `${globalData.githubComponentsDirectory}${component.sourcePath}`
                    : globalData.githubPackageDirectory
                "
              />
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
            <BCol cols="4" class="text-md-right"><StyleExtension :component="component" /> </BCol>
          </BRow>
          <BRow class="my-3">
            <BCol>
              <BContainer fluid>
                <BRow>
                  <BCol>
                    <h5>
                      <BLink
                        :id="buildCompReferenceLink(`${component.component}-Properties`).slice(1)"
                        variant="info"
                        :to="buildCompReferenceLink(`${component.component}-Properties`)"
                      >
                        Properties
                      </BLink>
                    </h5>
                  </BCol>
                </BRow>
                <BRow>
                  <BCol>
                    <BTable
                      :items="component.props.find((el) => el.name.trim() === '')?.ref"
                      :fields="fields.props"
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
                      <template #cell(default)="d">
                        <code>
                          {{ normalizeDefault(d.item.default) }}
                        </code>
                      </template>
                      <template #cell(description)="d">
                        <NotYetImplemented v-if="d.item.notYetImplemented" />
                        {{ d.item.description }}
                      </template>
                    </BTable>
                    <template v-if="component.props.some((el) => el.name.trim() !== '')">
                      <span
                        id="extension-info"
                        :style="{cursor: 'help'}"
                        class="text-decoration-underline text-info cursor-help"
                      >
                        Extensions:
                      </span>
                      <b-tooltip
                        target="extension-info"
                        title="Extensions are selected properties from another component, integrated here. It may not include all original properties"
                      />
                      <BAccordion free>
                        <BAccordionItem
                          v-for="(table, index) in component.props.filter(
                            (el) => el.name.trim() !== ''
                          )"
                          :key="index"
                          header-tag="span"
                          body-class="p-0 m-0"
                        >
                          <template #title>
                            <!-- using :to was causing a full page refresh. Don't know why. Super odd -->
                            <BLink v-if="table.linkTo" @click.stop="goToLink(table.linkTo)">
                              {{ table.name }}
                            </BLink>
                            <template v-else>
                              {{ table.name }}
                            </template>
                          </template>
                          <BTable
                            :items="table.ref"
                            :fields="fields.props"
                            table-class="m-0 p-0"
                            class="m-0 p-0"
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
                            <template #cell(default)="d">
                              <code>
                                {{ normalizeDefault(d.item.default) }}
                              </code>
                            </template>
                          </BTable>
                        </BAccordionItem>
                      </BAccordion>
                    </template>
                  </BCol>
                </BRow>
              </BContainer>
            </BCol>
          </BRow>
          <BRow
            v-for="section in component.sections?.filter((el) => el !== 'Properties')"
            :key="section"
            class="my-3"
          >
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
                          <span v-if="scope.notYetImplemented"><NotYetImplemented />: </span>
                          <code>{{ kebabCase(scope.prop) }}</code>
                          <code>: {{ scope.type }}</code>
                          <span v-if="!!scope.description"> - {{ scope.description }}</span>
                        </div>
                      </template>
                      <template #cell(args)="d">
                        <!-- eslint-disable-next-line prettier/prettier -->
                        <div v-for="arg in d.item.args as EmitArgReference[]" :key="arg.arg">
                          <code>{{ kebabCase(arg.arg) }}</code>
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
import {computed, inject} from 'vue'
import {
  BAccordion,
  BAccordionItem,
  BCol,
  BContainer,
  BLink,
  BRow,
  BTable,
  BTooltip,
  type TableFieldRaw,
} from 'bootstrap-vue-next'
import type {
  ComponentItem,
  ComponentReference,
  ComponentSection,
  EmitArgReference,
  MappedComponentReference,
  SlotScopeReference,
} from '../types'
import {kebabCase} from '../utils'
import {useRouter, withBase} from 'vitepress'
import {appInfoKey} from '../../.vitepress/theme/keys'
import ViewSourceButton from './ViewSourceButton.vue'

const router = useRouter()

const props = defineProps<{data: ComponentReference[]}>()

const goToLink = (link: string) => router.go(withBase(link))
const globalData = inject(appInfoKey)

/**
 * Sorts the items inside so they're uniform structure
 */
const sortData = computed(() =>
  props.data.map((el: ComponentReference): MappedComponentReference => {
    const data: MappedComponentReference = {
      component: el.component,
      styleSpec: el.styleSpec,
      sourcePath: el.sourcePath,
      props: Object.entries(el.props).map(([name, {_linkTo, ...rest}]) => ({
        name,
        linkTo: _linkTo?.type || undefined,
        ref: Object.entries(rest)
          .map(([key, value]) => ({prop: kebabCase(key), ...value}))
          .sort((a, b) => a.prop.localeCompare(b.prop)),
      })),
      emits: el.emits?.sort((a, b) => a.event.localeCompare(b.event)),
      slots: el.slots?.sort((a, b) => a.name.localeCompare(b.name)),
    }

    data.sections = (['Properties', 'Events', 'Slots'] as ComponentSection[]).filter(
      (x) => !!data?.[sectionToComponentItem(x)]?.length
    )

    return data
  })
)

type ComponentItemFree = Exclude<ComponentItem, 'sourcePath' | 'styleSpec'>

const buildCompReferenceLink = (str: string): string => `#comp-reference-${str}`.toLowerCase()

const sectionToComponentItem = (el: ComponentSection): ComponentItemFree =>
  el === 'Properties' ? 'props' : el === 'Events' ? 'emits' : 'slots'

const fields: {[P in ComponentItemFree]: TableFieldRaw[]} = {
  props: ['prop', 'type', 'default', 'description'],
  emits: ['event', 'args', 'description'],
  slots: ['name', 'scope', 'description'],
}

const normalizeDefault = (val: unknown) =>
  val === undefined || val === null ? `${val}` : typeof val === 'string' ? `'${val}'` : val
</script>
