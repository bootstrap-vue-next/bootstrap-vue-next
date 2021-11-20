import AnchoredHeading from './anchored-heading'
import Compoenentdoc from './component-doc'
import {computed, defineComponent, h, ref, toRefs, resolveComponent} from 'vue'
import {usePageData} from '@vuepress/client'

export default defineComponent({
  name: 'BDVComponents',
  setup(props, {attrs}) {
    const pagedata: any = usePageData()
    return {
      pagedata,
    }
  },
  render() {
    return [
      h(AnchoredHeading, {id: 'component-reference'}, () => 'Component reference'),
      this.pagedata.componentReference.meta.components.map(
        ({component, emits, rootEventListeners, slots, aliases, props: propsMeta, version}) => {
          return h(Compoenentdoc, {
            component,
            emits,
            rootEventListeners,
            slots,
            aliases,
            propsMeta,
            version,
          })
        }
      ),
    ]
  },
})
