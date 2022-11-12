import {kebabCase, pascalCase} from '../../../utils/string'
import BVIconBase from '../../BIcon/BIconBase.vue'
import {defineComponent, h} from 'vue'

/**
 * Icon component generator function
 *
 * @param {string} icon name (minus the leading `BIcon`)
 * @param {string} raw `innerHTML` for SVG
 * @return {VueComponent}
 */
export const makeIcon = (name: string, content: string) =>
  // For performance reason we pre-compute some values, so that
  // they are not computed on each render of the icon component

  defineComponent({
    name,
    extends: BVIconBase,
    setup() {
      const kebabName = kebabCase(name)
      const iconName = `BIcon${pascalCase(name)}`
      const iconNameClass = `bi-${kebabName}`
      const iconTitle = kebabName.replace(/-/g, ' ')
      const svgContent = (content || '').trim()

      return () =>
        h(BVIconBase, {
          'title': iconTitle,
          'aria-label': iconTitle,
          'class': [iconNameClass],
          'content': svgContent,
        })
    },
  })
