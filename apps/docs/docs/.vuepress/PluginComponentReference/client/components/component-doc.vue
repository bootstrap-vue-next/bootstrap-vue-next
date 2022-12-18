<template>
  <b-row row tag="header" align-v="center">
    <b-col sm="9">
      <anchored-heading level="3">
        <code class="notranslate bigger" translate="no">{{ tag }}</code>
      </anchored-heading>
    </b-col>
    <b-col sm="3">
      <b-button
        v-if="githubURL"
        variant="outline-secondary"
        size="sm"
        :href="githubURL"
        target="_blank"
      >
        View source
      </b-button>
    </b-col>
  </b-row>
  <!-- Componet Ref Quick Links -->
  <ul class="component-ref-mini-toc my-3">
    <li v-if="propsItems && propsItems.length > 0">
      <a :href="`#comp-ref-${componentName}-props`">
        <code class="notranslate" translate="no">{{ tag }}</code> Properties
      </a>
    </li>
    <li v-if="emits && emits.length > 0">
      <a :href="`#comp-ref-${componentName}-emits`">
        <code class="notranslate" translate="no">{{ tag }}</code> Emits
      </a>
    </li>
  </ul>
  <div v-if="propsItems && propsItems.length > 0" class="bd-content">
    <anchored-heading :id="`comp-ref-${componentName}-props`" level="4" class="mb-3">
      Properties
    </anchored-heading>
    <b-table
      :items="propsItems"
      :fields="propFields"
      primary-key="prop"
      table-class="bv-docs-table"
      responsive="sm"
      sort-icon-left
      bordered
      table-striped
    >
      <template #cell(prop)="{value}">
        <code class="text-nowrap notranslate" translate="no">{{ value }}</code
        ><br />
      </template>
      <template #cell(type)="{value}">
        <span v-html="value"></span>
      </template>
      <template #cell(defaultValue)="{value}">
        <code v-if="value" class="word-wrap-normal notranslate" translate="no">{{ value }}</code>
      </template>
    </b-table>
  </div>
  <div v-if="emits && emits.length > 0" class="bd-content">
    <anchored-heading :id="`comp-ref-${componentName}-emits`" level="4" class="mb-3">
      Emits
    </anchored-heading>
    <b-table
      :items="emits"
      :fields="emitsFields"
      primary-key="emit"
      table-class="bv-docs-table"
      responsive="sm"
      bordered
      table-striped
    >
      <template #cell(args)="{value, item}">
        <ol v-if="value && value.length > 0" class="list-unstyled mb-0">
          <li v-for="(arg, idx) in value" :key="`emit-${item.emit}-${arg.arg || idx}`">
            <template v-if="arg.arg">
              <code class="notranslate" translate="no">{{ arg.arg }}</code> -
            </template>
            <span v-if="arg.description">{{ arg.description }}</span>
          </li>
        </ol>
      </template>
    </b-table>
  </div>
  <div v-if="slots && slots.length > 0" class="bd-content">
    <anchored-heading :id="`comp-ref-${componentName}-slots`" level="4" class="mb-3">
      Slots
    </anchored-heading>
    <b-table
        :items="slotsItems"
        :fields="slotsFields"
        primary-key="name"
        table-class="bv-docs-table"
        responsive="sm"
        sort-icon-left
        bordered
        striped
      >
        <template #cell(name)="{ value, item }">
          <code class="text-nowrap notranslate" translate="no">{{ value }}</code>
          <b-badge v-if="item.version" variant="secondary">v{{ item.version }}+</b-badge>
        </template>
        <template #cell(scope)="{ value, detailsShowing, toggleDetails, item }">
        <b-button
            v-if="value"
            variant="outline-info"
            size="sm"
            class="py-0"
            @click="toggleDetails()"
          >
          {{ detailsShowing ? 'Hide scope' : 'Show scope' }}
          </b-button>
        </template>
        <template #row-details="{ item }">
          <b-table
            :items="item.scope"
            :fields="[{ key: 'prop', label: 'Property' }, 'type', 'description']"
            primary-key="prop"
            class="m-0"
            dark
            caption-top
            small
          >
            <template #thead-top>
              <b-tr>
                <b-th colspan="3" class="text-center">
                  <code class="text-nowrap notranslate" translate="no">{{ item.name }}</code>
                  Slot scoped properties
                </b-th>
              </b-tr>
            </template>
            <template #cell(prop)="{ value, item: cellItem }">
              <code class="text-nowrap notranslate" translate="no">{{ value }}</code>
              <b-badge v-if="cellItem.version" variant="secondary">v{{ cellItem.version }}+</b-badge>
            </template>
            <template #cell(type)="{ value }">
              <code class="text-nowrap notranslate" translate="no">{{ value || 'Any' }}</code>
            </template>
          </b-table>
        </template>

      </b-table>

  </div>
</template>
<script lang="ts">
import {resolveComponent, defineComponent, computed, ConcreteComponent, ref} from 'vue'
import AnchoredHeading from './anchored-heading'
import {hyphenate} from '../../../utils'
// type definitions
const SORT_THRESHOLD: number = 10

//Regex for matching v-model

const VMODEL_REGEX: RegExp = /(\A\w+):update/

export default defineComponent({
  components: {
    AnchoredHeading,
  },
  name: 'BVComponentdoc',
  props: {
    component: {type: String},
    propsMeta: {
      // For getting prop descriptions
      type: Array,
      default: () => [],
    },
    slots: {
      type: Array,
      default: () => [],
    },
    emits: {
      type: Array,
      default: () => [],
    },
    rootEventListeners: {
      type: Array,
      default: () => [],
    },
    aliases: {
      type: Array,
      default: () => [],
    },
    version: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const component: ConcreteComponent = resolveComponent(
      props.component as string
    ) as ConcreteComponent

    const componentPropsMetaObj = computed(() => {
      return props.propsMeta.reduce((obj, propMeta) => {
        if (propMeta.prop) {
          obj[propMeta.prop] = propMeta
        }
        return obj
      }, {})
    })
    const githubURL = computed(() => {
      const name = component.name ?? component.__name ?? ''
      if (name.indexOf('{') !== -1) {
        // Example component (most likely an auto generated component)
        return ''
      }
      const base = 'https://github.com/cdmoro/bootstrap-vue-3/tree/main/packages/bootstrap-vue-3/src/components'
      // const slug = this.$route.params.slug
      // Always point to the `.js` file (which may import a `.vue` file)
      return `${base}/${name}/${name}.vue`
    })

    // component name kebab

    const componentName = computed(() => {
      return hyphenate(component.name ?? component.__name ?? '')
    })
    const tag = computed(() => {
      return `<${componentName.value}>`
    })

    const propsItems = computed(() => {
      const props: any = component.props
      const propsMetaObj = componentPropsMetaObj
      return Object.keys(props)
        .sort()
        .map((prop: string) => {
          const p = props[prop]
          const meta = {
            // ...(commonProps[prop] || {}),
            ...(propsMetaObj.value[prop] || {}),
          }
          // Describe type
          //For Setup Script Syntax prop types are not defined. 
          let type = p?.type 
          let types = []
          
          // Priortize type if defined in Reference 
          if ( meta?.type){
            if (Array.isArray(meta?.type)) {
             types = meta?.type.map((type) => type.name)
          } else {
            types = [meta?.type]
          }
          }
          else if (Array.isArray(type)) {
            types = type.map((type) => type.name)
          } else {
            types = type && type.name ? [type.name] : ['Any']
          }

          type = types
            .map((type) => `<code class="notranslate" translate="no">${type}</code>`)
            .join(' or ')

          //default Value
          let defaultValue = p?.default || null
          if (defaultValue instanceof Function && !Array.isArray(defaultValue)) {
            defaultValue = defaultValue()
          }
          defaultValue =
            typeof defaultValue === 'undefined'
              ? ''
              : String(JSON.stringify(defaultValue, undefined, 1)).replace(/"/g, "'")

          return {
            prop: hyphenate(prop),
            type,
            defaultValue,
            required: p?.required || false,
            description: meta.description || '',
            version: meta.version || '',
            xss: meta.xss || false,
            // isVModel: this.componentVModel && this.componentVModel.prop === prop,
            deprecated: p?.deprecated || false,
            deprecation: p?.deprecation || false,
            _showDetails: typeof p?.deprecated === 'string' || typeof p?.deprecation === 'string',
          }
        })
    })

    const propFields = computed(() => {
      const sortable = propsItems.value.length >= SORT_THRESHOLD

      // TODO define Type for propItems
      const hasDescriptions = propsItems.value.some((p) => {
        return p.description
      })

      return [
        {key: 'prop', label: 'Property', sortable},
        {key: 'type', label: 'Type', sortable},
        {key: 'defaultValue', label: 'Default'},
        ...(hasDescriptions ? [{key: 'description', label: 'Description'}] : []),
      ]
    })

    const emitsFields = computed(() => {
      const sortable = component.emits?.length >= SORT_THRESHOLD
      return [
        {key: 'emit', label: 'Emit', sortable},
        {key: 'args', label: 'Arguments'},
        {key: 'description', label: 'Description'},
      ]
    })

    const slotsFields = computed(() => {
      const sortable = props.slots.length >= SORT_THRESHOLD
      const hasScopedSlots = props.slots.some(s => s.scope)
      return [
        { key: 'name', label: 'Name', sortable },
        ...(hasScopedSlots ? [{ key: 'scope', label: 'Scoped' }] : []),
        { key: 'description', label: 'Description' }
      ]
    })

    const slotsItems = ref(
       props.slots ? props.slots.map(slot => ({ ...slot as any})) : []
    )


    const vmodelItems = computed(() => {
      //TODO loop through props and emits to determine v-model
      // let match = VMODEL_REGEX.exec(myString);
      return []
    })

    const vmodelFields = computed(() => {
      //TODO loop
      return []
    })
    return {
      componentName,
      emitsFields,
      slotsItems,
      slotsFields,
      propsItems,
      propFields,
      githubURL,
      tag,
    }
  },
})
</script>

})
