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
            <BCol cols="4" class="text-md-right"
              ><StyleExtension :name="component.component" :style-spec="component.styleSpec" />
            </BCol>
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
                      :items="
                        component.props
                          .find((el) => el.name === defaultPropSectionSymbol)
                          ?._data.map((el) => ({
                            prop: el[0],
                            ...el[1],
                          }))
                      "
                      :fields="tableFieldDefinitions.props"
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
                        {{ d.item.description }}
                      </template>
                    </BTable>
                    <template
                      v-if="component.props.some((el) => el.name !== defaultPropSectionSymbol)"
                    >
                      <span
                        id="extension-info"
                        :style="{cursor: 'help'}"
                        class="text-decoration-underline text-info cursor-help"
                      >
                        Extensions:
                      </span>
                      <BTooltip
                        target="extension-info"
                        title="Extensions are selected properties from another component, integrated here. It may not include all original properties"
                      />
                      <BAccordion free>
                        <BAccordionItem
                          v-for="(table, index) in component.props.filter(
                            (el) => el.name !== defaultPropSectionSymbol
                          )"
                          :key="index"
                          header-tag="span"
                          body-class="p-0 m-0"
                        >
                          <template #title>
                            <!-- using :to was causing a full page refresh. Don't know why. Super odd -->
                            <BLink
                              v-if="table._opts?.linkTo"
                              @click.stop="goToLink(table._opts.linkTo)"
                            >
                              {{ table.name }}
                            </BLink>
                            <template v-else>
                              {{ table.name }}
                            </template>
                          </template>
                          <BTable
                            :items="table._data.map((el) => ({prop: el[0], ...el[1]}))"
                            :fields="tableFieldDefinitions.props"
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
          <BRow class="my-3">
            <BCol v-if="component.emits.length">
              <BContainer fluid>
                <BRow>
                  <BCol>
                    <h5>
                      <BLink
                        :id="buildCompReferenceLink(`${component.component}-Events`).slice(1)"
                        variant="info"
                        :to="buildCompReferenceLink(`${component.component}-Events`)"
                      >
                        Events
                      </BLink>
                    </h5>
                  </BCol>
                </BRow>
                <BRow>
                  <BCol>
                    <BTable
                      :items="component.emits"
                      :fields="tableFieldDefinitions.emits"
                      hover
                      small
                      responsive
                      bordered
                      striped
                    >
                      <template #cell(args)="d">
                        <!-- eslint-disable-next-line prettier/prettier -->
                        <div
                          v-for="[argName, arg] in Object.entries(d.item.args ?? {})"
                          :key="argName"
                        >
                          <code>{{ kebabCase(argName) }}</code>
                          <code>: {{ arg.type }}</code>
                          <span v-if="!!arg.description"> - {{ arg.description }}</span>
                        </div>
                      </template>
                    </BTable>
                  </BCol>
                </BRow>
              </BContainer>
            </BCol>
          </BRow>
          <BRow v-if="component.slots.length" class="my-3">
            <BCol>
              <BContainer fluid>
                <BRow>
                  <BCol>
                    <h5>
                      <BLink
                        :id="buildCompReferenceLink(`${component.component}-Slots`).slice(1)"
                        variant="info"
                        :to="buildCompReferenceLink(`${component.component}-Slots`)"
                      >
                        Slots
                      </BLink>
                    </h5>
                  </BCol>
                </BRow>
                <BRow>
                  <BCol>
                    <BTable
                      :items="component.slots"
                      :fields="tableFieldDefinitions.slots"
                      hover
                      small
                      responsive
                      bordered
                      striped
                    >
                      <template #cell(scope)="d">
                        <!-- eslint-disable-next-line prettier/prettier -->
                        <div
                          v-for="[scopeName, scope] in Object.entries(d.item.scope ?? {})"
                          :key="scopeName"
                        >
                          <code>{{ kebabCase(scopeName) }}</code>
                          <code>: {{ scope.type }}</code>
                          <span v-if="!!scope.description"> - {{ scope.description }}</span>
                        </div>
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
import type {TableFieldRaw} from 'bootstrap-vue-next'
import {
  type ComponentItem,
  type ComponentReference,
  type ComponentSection,
  defaultPropSectionSymbol,
  type PropRecord,
  type PropRecordWithMultipleSections,
  type PropRecordWithOptions,
  type PropReference,
} from '../types'
import {kebabCase} from '../utils/objectUtils'
import {useRouter, withBase} from 'vitepress'
import {appInfoKey} from '../../.vitepress/theme/keys'

const router = useRouter()

const props = defineProps<{data: ComponentReference}>()

/**
 * Derives the base directory name from all components in the data.
 * Uses the first component in the object as the base directory name.
 * This relies on the data files having the primary component listed first.
 *
 * Examples:
 *   {BButton: {...}, BCloseButton: {...}} → BButton
 *   {BFormTags: {...}, BFormTag: {...}} → BFormTags
 *   {BTabs: {...}, BTab: {...}} → BTabs
 */
const deriveBaseDirectory = (): string => {
  const componentNames = Object.keys(props.data)
  return componentNames[0] // First component is the base directory
}

/**
 * Derives the source path for a component.
 *
 * Pattern: /<BaseDirectory>/<ComponentName>.vue
 */
const deriveSourcePath = (componentName: string, baseDirectory: string): string =>
  `/${baseDirectory}/${componentName}.vue`

const goToLink = (link: string) => router.go(withBase(link))
const globalData = inject(appInfoKey)

/**
 * Sorts the items inside so they're uniform structure
 */
const sortData = computed(() => {
  const baseDirectory = deriveBaseDirectory()

  return Object.entries(props.data).map(
    ([component, {props: localProps, sourcePath, emits, slots, styleSpec}]) => {
      const mapProps = () => {
        const isMultiplePropRecord = (
          val: PropRecordWithOptions | PropRecord | PropRecordWithMultipleSections
        ): val is PropRecordWithMultipleSections => defaultPropSectionSymbol in val
        const isPropRecordWithOptions = (
          val: PropRecord | PropRecordWithOptions
        ): val is PropRecordWithOptions => '_data' in val

        // Convert it to a multiple section record for simplicity
        const convertPropRecordToMultiple = (
          val: PropRecord | PropRecordWithOptions
        ): PropRecordWithMultipleSections => ({
          [defaultPropSectionSymbol]: val,
        })
        /**
         * We then attempt to simplify it further by making the flat props into {_data} structure as if it had options.
         *
         * After we make it simplified, we sort the properties alphabetically by their name.
         *
         * It also converts `defaultPropSectionSymbol` to an empty string for appearance above
         */
        const simplifyMultiple = (val: PropRecordWithMultipleSections) =>
          Object.entries(val).reduce(
            (acc, [key, value]) => {
              const current = isPropRecordWithOptions(value)
                ? value
                : ({_data: value} as PropRecordWithOptions)
              const arrayedAndSorted = Object.entries(current._data)
                .map(([key, value]) => [kebabCase(key), value] as [string, PropReference])
                .sort(([a], [b]) => a.localeCompare(b))

              acc[key] = {
                _opts: current._opts,
                _data: arrayedAndSorted,
              }

              return acc
            },
            {} as Record<
              string,
              Omit<PropRecordWithOptions, '_data'> & {
                _data: [propName: string, propReference: PropReference][]
              }
            >
          )

        return simplifyMultiple(
          isMultiplePropRecord(localProps) ? localProps : convertPropRecordToMultiple(localProps)
        )
      }

      const data = {
        component,
        styleSpec,
        // Use provided sourcePath or derive it from component name and base directory
        sourcePath: sourcePath ?? deriveSourcePath(component, baseDirectory),
        props: Object.entries(mapProps()).map(([name, value]) => ({
          name,
          ...value,
        })),
        emits: Object.entries(emits || [])
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([event, value]) => ({
            ...value,
            event,
          })),
        slots: Object.entries(slots || [])
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([name, value]) => ({
            ...value,
            name,
          })),
        sections: [] as ComponentSection[],
      }

      data.sections.push('Properties')
      if (data.emits?.length) {
        data.sections.push('Events')
      }
      if (data.slots?.length) {
        data.sections.push('Slots')
      }

      return data
    }
  )
})

type ComponentItemFree = Exclude<ComponentItem, 'sourcePath' | 'styleSpec'>

const buildCompReferenceLink = (str: string): string => `#comp-reference-${str}`.toLowerCase()

const tableFieldDefinitions = {
  props: ['prop', 'type', 'default', 'description'],
  emits: ['event', 'args', 'description'],
  slots: ['name', 'scope', 'description'],
} as const satisfies {[P in ComponentItemFree]: TableFieldRaw[]}

const normalizeDefault = (val: unknown) =>
  val === undefined || val === null ? `${val}` : typeof val === 'string' ? `'${val}'` : val
</script>
