import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

const optionSlot = {
  name: 'option',
  description:
    'Use this slot to have finer control over the content render inside each select item',
  scope: [
    {
      prop: 'value',
      type: 'any (T)',
      description: 'The value of the option',
    },
    {
      prop: 'text',
      type: 'string',
      description: 'The text of the option',
    },
    {
      prop: 'disabled',
      type: 'boolean',
      description: 'Is the option disabled',
    },
  ],
}

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormSelect',
      styleSpec: {kind: StyleKind.Tag, value: 'select'},
      sourcePath: '/BFormSelect/BFormSelect.vue',
      props: {
        '': {
          labelField: {
            type: 'string',
            default: 'label',
            description: 'The key to use from the option object to get the label',
          },
          modelValue: {
            type: `SelectValue`,
            default: '',
            description: 'The value of the select control',
          },
          multiple: {
            type: 'boolean',
            default: false,
            description: 'When set, allows multiple options to be selected (multi-select)',
          },
          optionsAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
            description: 'Attributes to be applied to the option item',
          },
          optionsField: {
            type: 'string',
            default: 'options',
            description: 'The key to use from the option object to get the options',
          },
          selectSize: {
            type: 'Numberish',
            default: 0,
            description:
              'When set to a number larger than 0, will set the number of display option rows. Note not all browser will respect this setting',
          },
          ...pick(
            buildCommonProps({
              options: {type: 'unknown[] | Record<string, unknown>'},
            }),
            [
              'ariaInvalid',
              'autofocus',
              'disabled',
              'disabledField',
              'form',
              'id',
              'name',
              'options',
              'plain',
              'required',
              'size',
              'state',
              'textField',
              'valueField',
            ]
          ),
        } satisfies Record<keyof BvnComponentProps['BFormSelect'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          args: [
            {
              arg: 'value',
              description: 'Currently selected value of the select control.',
              type: 'SelectValue',
            },
          ],
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:model-value` instead.',
        },
      ],
      slots: [
        {
          description: 'Content to place in the form select',
          name: 'default',
        },
        {
          description:
            "Slot to place options or option groups above options provided via the 'options' prop",
          name: 'first',
        },
        optionSlot,
      ],
    },
    {
      component: 'BFormSelectOption',
      styleSpec: {kind: StyleKind.Tag, value: 'option'},
      sourcePath: '/BFormSelect/BFormSelectOption.vue',
      props: {
        '': {
          value: {
            type: 'any',
            default: undefined,
            description: 'The value of the option',
          },
          disabled: {
            type: 'boolean',
            default: false,
            description: 'The disabled state of the option',
          },
          optionsAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
            description: 'Attributes to be applied to the option item',
          },
        } satisfies Record<keyof BvnComponentProps['BFormSelectOption'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the form select option',
        },
      ],
    },
    {
      component: 'BFormSelectOptionGroup',
      styleSpec: {kind: StyleKind.Tag, value: 'optgroup'},
      sourcePath: '/BFormSelect/BFormSelectOptionGroup.vue',
      props: {
        '': {
          label: {
            type: 'string',
            default: undefined,
            description: 'The label for the option group',
          },
          ...pick(
            buildCommonProps({
              options: {type: 'readonly (unknown | Record<string, unknown>)[]'},
            }),
            ['disabledField', 'options', 'textField', 'valueField']
          ),
        } satisfies Record<keyof BvnComponentProps['BFormSelectOptionGroup'], PropertyReference>,
      },
      slots: [
        {
          name: 'first',
          description: 'Content to place in the form select option group',
        },
        {
          name: 'default',
          description: "Slot to place options above options provided via the 'options' prop",
        },
        optionSlot,
      ],
    },
  ],
}
