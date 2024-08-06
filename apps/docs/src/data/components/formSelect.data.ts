import type {ComponentReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormSelect',
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
              'htmlField',
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
        },
      },
      emits: [
        {
          event: 'update:modelValue',
          args: [
            {
              arg: 'value',
              description: 'Currently selected value of the select control.',
              type: 'SelectValue',
            },
          ],
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:modelValue` instead.',
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
      ],
    },
    {
      component: 'BFormSelectOption',
      emits: [],
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
        },
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
            ['disabledField', 'htmlField', 'options', 'textField', 'valueField']
          ),
        },
      },
      emits: [],
      slots: [
        {
          name: 'first',
          description: 'Content to place in the form select option group',
        },
        {
          name: 'default',
          description: "Slot to place options above options provided via the 'options' prop",
        },
      ],
    },
  ],
}
