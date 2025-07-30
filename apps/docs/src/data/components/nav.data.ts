import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {
  buildCommonProps,
  dropdownEmits,
  dropdownProps,
  dropdownSlots,
  omit,
  pick,
} from '../../utils'
import {linkProps, linkTo} from '../../utils/link-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BNav',
      sourcePath: '/BNav/BNav.vue',
      props: {
        '': {
          align: {
            type: 'AlignmentJustifyContent',
            default: undefined,
            description: 'Align the nav items in the nav to any value of AlignmentJustifyContent',
          },
          cardHeader: {
            type: 'boolean',
            default: false,
            description: 'Set this prop when the nav is placed inside a card header',
          },
          fill: {
            type: 'boolean',
            default: false,
            description:
              'Proportionately fills all horizontal space with nav items. All horizontal space is occupied, but not every nav item has the same width',
          },
          justified: {
            type: 'boolean',
            default: false,
            description:
              "Fills all horizontal space with nav items, but unlike 'fill', every nav item will be the same width",
          },
          pills: {
            type: 'boolean',
            default: false,
            description: 'Renders the nav items with the appearance of pill buttons',
          },
          small: {
            type: 'boolean',
            default: false,
            description: 'Makes the nav smaller',
          },
          tabs: {
            type: 'boolean',
            default: false,
            description: 'Renders the nav items with the appearance of tabs',
          },
          underline: {
            type: 'boolean',
            default: false,
            description: 'Adds an underline to the active nav item',
          },
          vertical: {
            type: 'boolean',
            default: false,
            description: 'Stacks the nav items vertically',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'ul',
              },
            }),
            ['autoCloseDropdowns', 'tag']
          ),
        } satisfies Record<keyof BvnComponentProps['BNav'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the nav',
        },
      ],
    },
    {
      component: 'BNavForm',
      styleSpec: {kind: StyleKind.Tag, value: 'li > form'},
      sourcePath: '/BNav/BNavForm.vue',
      props: {
        '': {
          formClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the form element',
          },
          ...pick(buildCommonProps(), [
            'floating',
            'id',
            'novalidate',
            'role',
            'validated',
            'wrapperAttrs',
          ]),
        } satisfies Record<keyof BvnComponentProps['BNavForm'], PropertyReference>,
      },
      emits: [
        {
          event: 'submit',
          description: 'Emitted when the form is submitted',
          args: [
            {
              arg: 'submit',
              type: 'Event',
              description: 'Native submit event',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the nav form',
        },
      ],
    },
    {
      component: 'BNavItem',
      sourcePath: '/BNav/BNavItem.vue',
      props: {
        '': {
          linkAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
            description: 'Additional attributes to place on the nested link element',
          },
          linkClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to place on the nested link element',
          },
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BNavItem'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...omit(linkProps, ['routerTag']),
        },
      },
      emits: [
        {
          event: 'click',
          description: 'Emitted when non-disabled nav item clicked',
          args: [
            {
              arg: 'click',
              description: 'On click event',
              type: 'MouseEvent',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'after',
          description: 'Content to place after the nav item link (useful for nested navs)',
        },
        {
          name: 'default',
          description: 'Content to place in the nav item',
        },
      ],
    },
    {
      component: 'BNavItemDropdown',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.nav-item.dropdown'},
      sourcePath: '/BNav/BNavItemDropdown.vue',
      props: {
        '': dropdownProps,
      },
      emits: dropdownEmits,
      slots: dropdownSlots,
    },
    {
      component: 'BNavText',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.navbar-text'},
      sourcePath: '/BNav/BNavText.vue',
      props: {
        '': {
          text: {
            description: 'Plain text to display in the nav',
            type: 'string',
            default: undefined,
          },
        } satisfies Record<keyof BvnComponentProps['BNavText'], PropertyReference>,
      },
      slots: [
        {
          description: 'Content to display in the nav',
          name: 'default',
        },
      ],
    },
  ],
}
