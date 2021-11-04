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
  <b-table
    :items="propsItems"
    :fields="propFields"
    primary-key="prop"
    table-class="bv-docs-table"
    responsive="sm"
    sort-icon-left
    bordered
    striped
  >
    <template #cell(type)="{value}">
      <span v-html="value"></span>
    </template>
  </b-table>
</template>
<script lang="ts">
import {resolveComponent, defineComponent, computed, ComputedRef, ConcreteComponent} from 'vue'
import AnchoredHeading from './anchored-heading'
import {hyphenate} from '@vue/shared/'
// type definitions
const SORT_THRESHOLD: number = 10

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
    events: {
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

    const componentPropsMetaObj: ComputedRef<any> = computed(() => {
      return props.propsMeta.reduce((obj, propMeta) => {
        if (propMeta.prop) {
          obj[propMeta.prop] = propMeta
        }
        return obj
      }, {})
    })
    const githubURL: ComputedRef<string> = computed(() => {
      const name = component.name ?? ''
      if (name.indexOf('{') !== -1) {
        // Example component (most likely an auto generated component)
        return ''
      }
      const base = 'https://github.com/cdmoro/bootstrap-vue-3/tree/main/src/components'
      // const slug = this.$route.params.slug
      // Always point to the `.js` file (which may import a `.vue` file)
      return `${base}/${name}/${name}.vue`
    })

    // component name kebab

    const componentName: ComputedRef<string> = computed(() => {
      return hyphenate(component.name ?? '')
    })
    const tag: ComputedRef<string> = computed(() => {
      return `<${componentName.value}>`
    })

    const propsItems: ComputedRef<any> = computed(() => {
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
          let type = p.type
          let types = []
          if (Array.isArray(type)) {
            types = type.map((type) => type.name)
          } else {
            types = type && type.name ? [type.name] : ['Any']
          }

          type = types
            .map((type) => `<code class="notranslate" translate="no">${type}</code>`)
            .join(' or ')

          //default Value
          let defaultValue = p.default
          if (defaultValue instanceof Function && !Array.isArray(defaultValue)) {
            defaultValue = defaultValue()
          }
          defaultValue =
            typeof defaultValue === 'undefined'
              ? ''
              : String(JSON.stringify(defaultValue, undefined, 1)).replace(/"/g, "'")

          return {
            prop: prop, // KEBAB case this
            type,
            defaultValue,
            required: p.required || false,
            description: meta.description || '',
            version: meta.version || '',
            xss: meta.xss || false,
            // isVModel: this.componentVModel && this.componentVModel.prop === prop,
            deprecated: p.deprecated || false,
            deprecation: p.deprecation || false,
            _showDetails: typeof p.deprecated === 'string' || typeof p.deprecation === 'string',
          }
        })
    })

    const propFields: ComputedRef<any> = computed(() => {
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

    return {
      propsItems,
      propFields,
      githubURL,
      tag,
    }
  },
})
</script>

})
