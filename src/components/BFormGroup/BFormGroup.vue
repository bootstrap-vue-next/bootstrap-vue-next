<script lang="ts">
import {RX_SPACE_SPLIT} from '../../constants/regex'
import {arrayIncludes} from '../../utils/array'

import {cssEscape} from '../../utils/css-escape'
import {
  attemptFocus,
  getAttr,
  isVisible,
  removeAttr,
  select,
  selectAll,
  setAttr,
} from '../../utils/dom'
import {IS_BROWSER} from '../../utils/env'
import {isBoolean} from '../../utils/inspect'
import {stringToInteger} from '../../utils/number'
import {suffixPropName} from '../../utils/props'
import {computed, defineComponent, h, nextTick, onMounted, ref, watch} from 'vue'
import useId from '../../composables/useId'
import {normalizeSlot} from '../../utils/normalize-slot'
import getID from '../../utils/getID'
import BCol from '../BCol.vue'
import BFormValidFeedback from '../BForm/BFormValidFeedback.vue'
import BFormInvalidFeedback from '../BForm/BFormInvalidFeedback.vue'
import BFormRow from '../BForm/BFormRow.vue'
import BFormText from '../BForm/BFormText.vue'

const INPUTS = ['input', 'select', 'textarea']
// Selector for finding first input in the form group
const INPUT_SELECTOR = INPUTS.map((v) => `${v}:not([disabled])`).join()

// A list of interactive elements (tag names) inside `<b-form-group>`'s legend
const LEGEND_INTERACTIVE_ELEMENTS = [...INPUTS, 'a', 'button', 'label']

export const SLOT_NAME_LABEL = 'label'
export const SLOT_NAME_INVALID_FEEDBACK = 'invalid-feedback'
export const SLOT_NAME_VALID_FEEDBACK = 'valid-feedback'
export const SLOT_NAME_DESCRIPTION = 'description'
export const SLOT_NAME_DEFAULT = 'default'

export default defineComponent({
  name: 'BFormGroup',
  components: {BCol, BFormInvalidFeedback, BFormRow, BFormText, BFormValidFeedback},
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
    floating: {type: Boolean, default: false},
  },
  setup(props, {attrs}) {
    const ariaDescribedby: string | null = null as string | null
    const breakPoints = ['xs', 'sm', 'md', 'lg', 'xl']

    const getAlignClasses = (props: any, prefix: string) => {
      const alignClasses = breakPoints.reduce((result: string[], breakpoint) => {
        const propValue: string = props[suffixPropName(breakpoint, `${prefix}Align`)] || null
        if (propValue) {
          result.push(['text', breakpoint, propValue].filter((p) => p).join('-'))
        }

        return result
      }, [])
      return alignClasses
    }

    const getColProps = (props: any, prefix: string) => {
      const colProps: any = breakPoints.reduce((result: any, breakpoint: string) => {
        let propValue = props[suffixPropName(breakpoint, `${prefix}Cols`)]
        // Handle case where the prop's value is an empty string,
        // which represents `true`
        propValue = propValue === '' ? true : propValue || false

        if (!isBoolean(propValue) && propValue !== 'auto') {
          // Convert to column size to number
          propValue = stringToInteger(propValue, 0)
          // Ensure column size is greater than `0`
          propValue = propValue > 0 ? propValue : false
        }

        // Add the prop to the list of props to give to `<b-col>`
        // If breakpoint is '' (`${prefix}Cols` is `true`), then we use
        // the 'col' prop to make equal width at 'xs'
        if (propValue) {
          result[breakpoint || (isBoolean(propValue) ? 'col' : 'cols')] = propValue
        }
        return result
      }, {})
      return colProps
    }

    const content = ref()

    // Sets the `aria-describedby` attribute on the input if `labelFor` is set
    // Optionally accepts a string of IDs to remove as the second parameter
    // Preserves any `aria-describedby` value(s) user may have on input
    const updateAriaDescribedby = (newValue: string | null, oldValue: string | null = null) => {
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
    const computedState = computed(() =>
      // If not a boolean, ensure that value is null
      isBoolean(props.state) ? props.state : null
    )
    const stateClass = computed(() => {
      const state = computedState.value
      return state === true ? 'is-valid' : state === false ? 'is-invalid' : null
    })
    const computedAriaInvalid = computed(() => {
      if (attrs.ariaInvalid === true || attrs.ariaInvalid === 'true' || attrs.ariaInvalid === '') {
        return 'true'
      }
      return computedState.value === false ? 'true' : attrs.ariaInvalid
    })

    watch(
      () => ariaDescribedby,
      (newValue: string | null, oldValue: string | null) => {
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

    return {
      ariaDescribedby,
      computedAriaInvalid,
      contentColProps,
      isHorizontal,
      labelAlignClasses,
      labelColProps,
      onLegendClick,
      stateClass,
    }
  },
  render() {
    const props = this.$props
    const slots = this.$slots

    const id = useId()
    const isFieldset = !props.labelFor

    let $label: any = null
    const labelContent = normalizeSlot(SLOT_NAME_LABEL, {}, slots) || props.label
    const labelId = labelContent ? getID('_BV_label_') : null

    if (labelContent || this.isHorizontal) {
      const labelTag: string = isFieldset ? 'legend' : 'label'
      if (props.labelSrOnly) {
        if (labelContent) {
          $label = h(
            labelTag,
            {
              class: 'visually-hidden',
              id: labelId,
              for: props.labelFor || null,
            },
            labelContent
          )
        }
        if (this.isHorizontal) {
          $label = h(BCol, this.labelColProps, {default: () => $label})
        } else {
          $label = h('div', {}, [$label])
        }
      } else {
        const renderProps = {
          onClick: isFieldset ? this.onLegendClick : null,
          ...(this.isHorizontal ? this.labelColProps : {}),
          tag: this.isHorizontal ? labelTag : null,
          id: labelId,
          for: props.labelFor || null,
          tabIndex: isFieldset ? '-1' : null,
          class: [
            {
              'bv-no-focus-ring': isFieldset,
              'col-form-label': this.isHorizontal || isFieldset,
              'pt-0': !this.isHorizontal && isFieldset,
              'd-block': !this.isHorizontal && !isFieldset,
              [`col-form-label-${props.labelSize}`]: !!props.labelSize,
            },
            this.labelAlignClasses,
            props.labelClass,
          ],
        }
        if (this.isHorizontal) {
          $label = h(BCol, renderProps, {default: () => labelContent})
        } else {
          $label = h(labelTag, renderProps, labelContent)
        }
      }
    }

    let $invalidFeedback = null
    const invalidFeedbackContent =
      normalizeSlot(SLOT_NAME_INVALID_FEEDBACK, {}, slots) || this.invalidFeedback
    const invalidFeedbackId = invalidFeedbackContent ? getID('_BV_feedback_invalid_') : null

    if (invalidFeedbackContent) {
      $invalidFeedback = h(
        BFormInvalidFeedback,
        {
          ariaLive: props.feedbackAriaLive,
          id: invalidFeedbackId,
          state: props.state,
          tooltip: props.tooltip,
          tabindex: invalidFeedbackContent ? '-1' : null,
        },
        {default: () => invalidFeedbackContent}
      )
    }

    let $validFeedback = null
    const validFeedbackContent =
      normalizeSlot(SLOT_NAME_VALID_FEEDBACK, {}, slots) || this.validFeedback
    const validFeedbackId = validFeedbackContent ? getID('_BV_feedback_valid_') : null

    if (validFeedbackContent) {
      $validFeedback = h(
        BFormValidFeedback,
        {
          ariaLive: props.feedbackAriaLive,
          id: validFeedbackId,
          state: props.state,
          tooltip: props.tooltip,
          tabindex: validFeedbackContent ? '-1' : null,
        },
        {default: () => validFeedbackContent}
        // validFeedbackContent
      )
    }

    let $description = null
    const descriptionContent = normalizeSlot(SLOT_NAME_DESCRIPTION, {}, slots) || this.description
    const descriptionId = descriptionContent ? getID('_BV_description_') : null
    if (descriptionContent) {
      $description = h(
        BFormText,
        {
          id: descriptionId,
          tabindex: '-1',
        },
        {default: () => descriptionContent}
      )
    }

    // Update `ariaDescribedby`
    // Screen readers will read out any content linked to by `aria-describedby`
    // even if the content is hidden with `display: none;`, hence we only include
    // feedback IDs if the form group's state is explicitly valid or invalid
    const ariaDescribedby = (this.ariaDescribedby =
      [
        descriptionId,
        props.state === false ? invalidFeedbackId : null,
        props.state === true ? validFeedbackId : null,
      ]
        .filter((x) => x)
        .join(' ') || null)

    const contentBlocks = [
      normalizeSlot(SLOT_NAME_DEFAULT, {ariaDescribedby, descriptionId, id, labelId}, slots) || '',
      $invalidFeedback,
      $validFeedback,
      $description,
    ]
    if (!this.isHorizontal && props.floating) contentBlocks.push($label)

    let $content = h(
      'div',
      {
        ref: 'content',
        class: [
          {
            'form-floating': !this.isHorizontal && props.floating,
          },
        ],
      },
      contentBlocks
    )
    if (this.isHorizontal) {
      $content = h(BCol, {ref: 'content', ...this.contentColProps}, {default: () => contentBlocks})
    }

    // Return it wrapped in a form group
    // Note: Fieldsets do not support adding `row` or `form-row` directly
    // to them due to browser specific render issues, so we move the `form-row`
    // to an inner wrapper div when horizontal and using a fieldset
    const rowProps = {
      'class': [
        'mb-3',
        this.stateClass,
        {
          'was-validated': props.validated,
        },
      ],
      'id': useId(props.id).value,
      'disabled': isFieldset ? props.disabled : null,
      'role': isFieldset ? null : 'group',
      'aria-invalid': this.computedAriaInvalid,
      // Only apply `aria-labelledby` if we are a horizontal fieldset
      // as the legend is no longer a direct child of fieldset
      'aria-labelledby': isFieldset && this.isHorizontal ? labelId : null,
    }

    if (this.isHorizontal && !isFieldset) {
      return h(BFormRow, rowProps, {default: () => [$label, $content]})
    }

    return h(
      isFieldset ? 'fieldset' : 'div',
      rowProps,
      this.isHorizontal && isFieldset
        ? [h(BFormRow, {}, {default: () => [$label, $content]})]
        : this.isHorizontal || !props.floating
        ? [$label, $content]
        : [$content]
    )
  },
})
</script>
