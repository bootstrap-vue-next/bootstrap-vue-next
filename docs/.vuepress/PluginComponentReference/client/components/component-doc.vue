<template>
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

// type definitions
const SORT_THRESHOLD: number = 10

export default defineComponent({
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
    }
  },
})
</script>

})
