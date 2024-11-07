import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
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
      component: 'BDropdown',
      sourcePath: '/BDropdown/BDropdown.vue',
      props: {
        '': dropdownProps,
      },
      emits: dropdownEmits,
      slots: dropdownSlots,
    },
    {
      component: 'BDropdownDivider',
      sourcePath: '/BDropdown/BDropdownDivider.vue',
      props: {
        '': {
          dividerClass: {
            default: undefined,
            type: 'ClassValue',
            description: 'CSS class (or classes) to add to the divider component',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'hr',
              },
            }),
            ['tag', 'variant', 'wrapperAttrs']
          ),
        } satisfies Record<keyof BvnComponentProps['BDropdownDivider'], PropertyReference>,
      },
    },
    {
      component: 'BDropdownForm',
      sourcePath: '/BDropdown/BDropdownForm.vue',
      props: {
        '': {
          formClass: {
            default: undefined,
            type: 'ClassValue',
            description: 'CSS class (or classes) to add to the form component',
          },
          novalidate: {notYetImplemented: true},
          validated: {notYetImplemented: true},
          ...pick(buildCommonProps({}), ['wrapperAttrs']),
        } satisfies Record<keyof BvnComponentProps['BDropdownForm'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the dropdown form',
        },
      ],
    },
    {
      component: 'BDropdownGroup',
      sourcePath: '/BDropdown/BDropdownGroup.vue',
      emits: [],
      props: {
        '': {
          header: {
            type: 'string',
            default: undefined,
          },
          ...pick(
            buildCommonProps({
              headerTag: {
                default: 'header',
              },
            }),
            ['ariaDescribedby', 'headerClass', 'headerTag', 'headerVariant', 'id']
          ),
        } satisfies Record<keyof BvnComponentProps['BDropdownGroup'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content (items) to place in the dropdown group',
        },
        {
          name: 'header',
          description: 'Optional header content for the dropdown group',
        },
      ],
    },
    {
      component: 'BDropdownHeader',
      sourcePath: '/BDropdown/BDropdownHeader.vue',
      emits: [],
      props: {
        '': {
          text: {
            default: undefined,
            description: 'Content to place in the dropdown text. Default slot takes precedence',
            type: 'string',
          },
          ...pick(buildCommonProps({}), ['headerClass', 'tag', 'variant', 'wrapperAttrs']),
        } satisfies Record<keyof BvnComponentProps['BDropdownHeader'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the dropdown header',
        },
      ],
    },
    {
      component: 'BDropdownItem',
      sourcePath: '/BDropdown/BDropdownItem.vue',
      props: {
        '': {
          ...pick(buildCommonProps({}), ['linkClass', 'wrapperAttrs']),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BDropdownItem'], keyof typeof linkProps>,
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
          description: 'Emitted when item is clicked',
          args: [
            {
              arg: 'value',
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the dropdown item',
        },
      ],
    },
    {
      component: 'BDropdownItemButton',
      sourcePath: '/BDropdown/BDropdownItemButton.vue',
      props: {
        '': {
          buttonClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class or classes to apply to the inner button element',
          },
          ...pick(buildCommonProps({}), [
            'active',
            'activeClass',
            'disabled',
            'variant',
            'wrapperAttrs',
          ]),
        } satisfies Record<keyof BvnComponentProps['BDropdownItemButton'], PropertyReference>,
      },
      emits: [
        {
          event: 'click',
          description: 'Emitted when item is clicked',
          args: [
            {
              arg: 'value',
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the dropdown item button',
        },
      ],
    },
    {
      component: 'BDropdownText',
      sourcePath: '/BDropdown/BDropdownText.vue',
      emits: [],
      props: {
        '': {
          text: {
            default: undefined,
            description: 'Content to place in the dropdown text. Default slot takes precedence',
            type: 'string',
          },
          textClass: {
            default: undefined,
            type: 'ClassValue',
            description: 'CSS class (or classes) to add to the text component',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'span',
              },
            }),
            ['tag', 'variant', 'wrapperAttrs']
          ),
        } satisfies Record<keyof BvnComponentProps['BDropdownText'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the dropdown text',
        },
      ],
    },
  ],
}
