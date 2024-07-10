import type {ComponentReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormGroup',
      props: {
        '': {
          contentCols: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Number of columns for the content width 'xs' screens and up",
          },
          contentColsLg: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Number of columns for the content width 'lg' screens and up",
          },
          contentColsMd: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Number of columns for the content width 'md' screens and up",
          },
          contentColsSm: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Number of columns for the content width 'sm' screens and up",
          },
          contentColsXl: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Number of columns for the content width 'xl' screens and up",
          },
          description: {
            type: 'string',
            default: 'undefined',
            description: 'Text to place in the help text area of the form group',
          },
          feedbackAriaLive: {
            type: 'string',
            default: "'assertive'",
            description: 'Value to use for the `aria-live` attribute on the feedback text',
          },
          floating: {
            type: 'boolean',
            default: 'undefined',
            description: 'When set renders the lablel in the floating style',
          },
          invalidFeedback: {
            type: 'string',
            default: 'undefined',
            description: 'Text to show when the form group has an invalid state',
          },
          label: {
            type: 'string',
            default: 'undefined',
            description: 'Text to place in the label/legend of the form group',
          },
          labelAlign: {
            type: 'string',
            default: 'undefined',
            description:
              "Text alignment 'left', 'center', 'right' for the label 'xs' screens and up",
          },
          labelAlignLg: {
            type: 'string',
            default: 'undefined',
            description:
              "Text alignment 'left', 'center', 'right' for the label 'lg' screens and up",
          },
          labelAlignMd: {
            type: 'string',
            default: 'undefined',
            description:
              "Text alignment 'left', 'center', 'right' for the label 'md' screens and up",
          },
          labelAlignSm: {
            type: 'string',
            default: 'undefined',
            description:
              "Text alignment 'left', 'center', 'right' for the label 'sm' screens and up",
          },
          labelAlignXl: {
            type: 'string',
            default: 'undefined',
            description:
              "Text alignment 'left', 'center', 'right' for the label 'xl' screens and up",
          },
          labelClass: {
            type: 'string[] | Record<string, unknown> | string',
            default: 'undefined',
            description: 'CSS class (or classes) to add to the label/legend element',
          },
          labelCols: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Number of columns for the label width 'xs' screens and up",
          },
          labelColsLg: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Number of columns for the label width 'lg' screens and up",
          },
          labelColsMd: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Number of columns for the label width 'md' screens and up",
          },
          labelColsSm: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Number of columns for the label width 'sm' screens and up",
          },
          labelColsXl: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Number of columns for the label width 'xl' screens and up",
          },
          labelFor: {
            type: 'string',
            default: 'undefined',
            description:
              'Set to the ID of the singular form control in the form group. Do not set a value if there is more than one form control in the group',
          },
          labelSize: {
            type: 'string',
            default: 'undefined',
            description:
              "Sets the text size of the label: 'sm', 'md' (default) or 'lg'. Use this prop to have the label size match the form control size",
          },
          labelVisuallyHidden: {
            type: 'boolean',
            default: 'false',
            description:
              'Visually hides the label content, but makes it available to screen reader users',
          },
          validFeedback: {
            type: 'string',
            default: 'undefined',
            description: 'Text to show when the form group has a valid state',
          },
          validated: {
            type: 'boolean',
            default: 'undefined',
            description:
              "When set, adds the Bootstrap validation trigger class 'was-validated' on the component",
          },
          ...pick(
            buildCommonProps(
              buildCommonProps({
                disabled: {
                  description:
                    'Disables the fieldset element, which in turn disables the form controls (on browsers that support disabled fieldsets). Has no effect if `label-for` is set',
                },
              })
            ),
            ['ariaInvalid', 'disabled', 'id', 'state', 'tooltip']
          ),
        },
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Content (form checkboxes) to place in the form checkbox group',
          scope: [
            {
              prop: 'ariaDescribedby',
              type: 'string',
              description:
                'The value for the `aria-describedby` attribute for input elements in the form group. Will be auto-assigned when `label-for` prop is given',
            },
            {
              prop: 'id',
              type: 'string',
              description: 'The ID of the form group. Will equal `id` prop, when provided',
            },
            {
              prop: 'descriptionId ',
              type: 'string',
              description:
                'The ID of the description element. Will be `null` when no description content given',
            },
            {
              prop: 'labelId',
              type: 'string',
              description:
                'The ID of the label element. Will be `null` when no description content given',
            },
          ],
        },
        {
          name: 'description',
          description: 'Content to place in the description area. Overrides the `description` prop',
        },
        {
          name: 'invalid-feedback',
          description:
            'Content to place in the invalid feedback area. Overrides the `invalid-feedback` prop',
        },
        {
          name: 'label',
          description: 'Content to place inside the label element. Overrides the `label` prop',
        },
        {
          name: 'valid-feedback',
          description:
            'Content to place in the valid feedback area. Overrides the `valid-feedback` prop',
        },
      ],
    },
  ],
}
