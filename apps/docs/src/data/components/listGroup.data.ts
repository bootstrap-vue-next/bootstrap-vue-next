import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, type linkProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BListGroup',
      sourcePath: '/BListGroup/BListGroup.vue',
      props: {
        '': {
          flush: {
            type: 'boolean',
            default: false,
            description: 'When set, renders a flush list group with no left and right borders',
          },
          horizontal: {
            type: 'boolean | Breakpoint',
            default: false,
            description:
              'When set, renders the list-group horizontally rather than the default of vertical',
          },
          numbered: {
            type: 'boolean',
            default: false,
            description: 'When set, renders the list-group items with a number on the left side',
          },
          ...pick(buildCommonProps({}), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BListGroup'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content (items) to place in the list group',
        },
      ],
    },
    {
      component: 'BListGroupItem',
      sourcePath: '/BListGroup/BListGroupItem.vue',
      props: {
        '': {
          action: {
            type: 'boolean',
            default: false,
          },
          button: {
            type: 'boolean',
            default: false,
          },
          ...pick(buildCommonProps({}), ['tag']),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BListGroupItem'], keyof typeof linkProps>,
          PropertyReference
        >,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the list group item',
        },
      ],
    },
  ],
}
