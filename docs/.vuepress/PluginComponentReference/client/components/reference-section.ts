import AnchoredHeading from './anchored-heading'
import Compoenentdoc from './component-doc'
import {computed, defineComponent, h, ref, toRefs} from 'vue'
import {usePageData} from '@vuepress/client'

export default defineComponent({
  name: 'BDVComponents',
  setup() {
    const pagedata: any = usePageData()

    return {
      pagedata,
    }
  },
  render() {
    return [
      h(AnchoredHeading, {id: 'component-reference'}, () => 'Component reference'),
      this.pagedata.componentReference.meta.components.map(
        ({component, events, rootEventListeners, slots, aliases, props: propsMeta, version}) => {
          return h(Compoenentdoc, {
            component,
            events,
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
