<script lang="ts">
import {RX_SPACE_SPLIT} from '../../constants/regex'
import {arrayIncludes} from '../../utils/array'

import {cssEscape} from '@/utils/css-escape'
import {attemptFocus, getAttr, isVisible, removeAttr, select, selectAll, setAttr} from '@/utils/dom'
import {IS_BROWSER} from '@/utils/env'
import {isBoolean} from '@/utils/inspect'
import {toInteger} from '@/utils/number'
import {suffixPropName} from '@/utils/props'
import {
  computed,
  defineComponent,
  nextTick,
  onActivated,
  onMounted,
  PropType,
  ref,
  watch,
} from 'vue'

const INPUTS = ['input', 'select', 'textarea']
// Selector for finding first input in the form group
const INPUT_SELECTOR = INPUTS.map((v) => `${v}:not([disabled])`).join()

// A list of interactive elements (tag names) inside `<b-form-group>`'s legend
const LEGEND_INTERACTIVE_ELEMENTS = [...INPUTS, 'a', 'button', 'label']

export default defineComponent({
  name: 'BFormInput',
  props: {
    contentCols: {type: [Boolean, String, Number], required: false},
    contentColsLg: {type: [Boolean, String, Number], required: false},
    contentColsMd: {type: [Boolean, String, Number], required: false},
    contentColsSm: {type: [Boolean, String, Number], required: false},
    contentColsXl: {type: [Boolean, String, Number], required: false},
    description: {type: [String], required: false},
    disabled: {type: Boolean, default: false},
    feedbackAriaLive: {type: String, default: 'assertive'},
    id: {type: String, required: false},
    invalidFeedback: {type: String, required: false},
    label: {type: String, required: false},
    labelAlign: {type: [Boolean, String, Number], required: false},
    labelAlignLg: {type: [Boolean, String, Number], required: false},
    labelAlignMd: {type: [Boolean, String, Number], required: false},
    labelAlignSm: {type: [Boolean, String, Number], required: false},
    labelAlignXl: {type: [Boolean, String, Number], required: false},
    labelClass: {type: [Array, Object, String], required: false},
    labelCols: {type: [Boolean, String, Number], required: false},
    labelColsLg: {type: [Boolean, String, Number], required: false},
    labelColsMd: {type: [Boolean, String, Number], required: false},
    labelColsSm: {type: [Boolean, String, Number], required: false},
    labelColsXl: {type: [Boolean, String, Number], required: false},
    labelFor: {type: String, required: false},
    labelSize: {type: String, required: false},
    labelSrOnly: {type: Boolean, default: false},
    state: {type: Boolean, default: null},
    tooltip: {type: Boolean, default: false},
    validFeedback: {type: String, required: false},
    validated: {type: Boolean, default: false},
  },
  setup(props, {emit}) {
    const ariaDescribedby = ''
    const breakPoints = ['', 'sm', 'md', 'lg', 'xl']

    const getAlignClasses = (props, prefix: string) => {
      const alignClasses = breakPoints.reduce((result: string[], breakpoint) => {
        const propValue: string = props[suffixPropName(breakpoint, `${prefix}Align`)] || null
        if (propValue) {
          result.push(['text', breakpoint, propValue].filter((p) => p).join('-'))
        }

        return result
      }, [])
      return alignClasses
    }
    const getColProps = (props, prefix: string) => {
      const colProps = breakPoints.reduce((result, breakpoint: string) => {
        let propValue = props[suffixPropName(breakpoint, `${prefix}Cols`)]
        // Handle case where the prop's value is an empty string,
        // which represents `true`
        propValue = propValue === '' ? true : propValue || false

        if (!isBoolean(propValue) && propValue !== 'auto') {
          // Convert to column size to number
          propValue = toInteger(propValue, 0)
          // Ensure column size is greater than `0`
          propValue = propValue > 0 ? propValue : false
        }

        // Add the prop to the list of props to give to `<b-col>`
        // If breakpoint is '' (`${prefix}Cols` is `true`), then we use
        // the 'col' prop to make equal width at 'xs'
        if (propValue) {
          result[breakpoint || (isBoolean(propValue) ? 'col' : 'cols')] = propValue
        }
      })
      return colProps
    }

    const content = ref()

    // Sets the `aria-describedby` attribute on the input if `labelFor` is set
    // Optionally accepts a string of IDs to remove as the second parameter
    // Preserves any `aria-describedby` value(s) user may have on input
    const updateAriaDescribedby = (newValue: string, oldValue: string | null = null) => {
      if (IS_BROWSER && props.labelFor) {
        // We need to escape `labelFor` since it can be user-provided
        const $input = select(`#${cssEscape(props.labelFor)}`, content)
        if ($input) {
          const attr = 'aria-describedby'
          const newIds = (newValue || '').split(RX_SPACE_SPLIT)
          const oldIds = (oldValue || '').split(RX_SPACE_SPLIT)

          // Update ID list, preserving any original IDs
          // and ensuring the ID's are unique
          const ids = (getAttr($input, attr) || '')
            .split(RX_SPACE_SPLIT)
            .filter((id) => !arrayIncludes(oldIds, id))
            .concat(newIds)
            .filter((id, index, ids) => ids.indexOf(id) === index)
            .filter((x) => x)
            .join(' ')
            .trim()

          if (ids) {
            setAttr($input, attr, ids)
          } else {
            removeAttr($input, attr)
          }
        }
      }
    }

    const contentColProps = computed(() => getColProps(props, 'content'))
    const labelAlignClasses = computed(() => getAlignClasses(props, 'label'))
    const labelColProps = computed(() => getColProps(props, 'label'))
    const isHorizontal = computed(
      () =>
        // Determine if the form group will be rendered horizontal
        // based on the existence of 'content-col' or 'label-col' props
        Object.keys(contentColProps.value).length > 0 || Object.keys(labelColProps.value).length > 0
    )

    watch(
      () => ariaDescribedby,
      (newValue: string, oldValue: string) => {
        if (newValue !== oldValue) {
          updateAriaDescribedby(newValue, oldValue)
        }
      }
    )

    onMounted(() => {
      nextTick(() => {
        // Set `aria-describedby` on the input specified by `labelFor`
        // We do this in a `$nextTick()` to ensure the children have finished rendering
        updateAriaDescribedby(ariaDescribedby)
      })
    })

    const onLegendClick = (event: MouseEvent) => {
      // Don't do anything if `labelFor` is set
      if (props.labelFor) {
        return
      }

      const {target} = event
      const tagName = target ? (target as HTMLElement).tagName : ''

      // If clicked an interactive element inside legend,
      // we just let the default happen
      /* istanbul ignore next */
      if (LEGEND_INTERACTIVE_ELEMENTS.indexOf(tagName) !== -1) {
        return
      }

      // If only a single input, focus it, emulating label behaviour
      const inputs = selectAll(INPUT_SELECTOR, content).filter(isVisible)
      if (inputs.length === 1) {
        attemptFocus(inputs[0])
      }
    }
  },
})
</script>
