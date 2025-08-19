import type {
  BNavFormEmits,
  BNavFormProps,
  BNavFormSlots,
  BNavItemEmits,
  BNavItemProps,
  BNavItemSlots,
  BNavProps,
  BNavSlots,
  BNavTextProps,
  BNavTextSlots,
} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type EmitRecord,
  type PropRecord,
  type SlotRecord,
  StyleKind,
} from '../../types'
import {linkProps, linkTo} from '../../utils/linkProps'
import {buildCommonProps} from '../../utils/commonProps'
import {omit, pick} from '../../utils/objectUtils'
import {dropdownEmits, dropdownProps, dropdownSlots} from '../../utils/dropdownCommon'

export default {
  load: (): ComponentReference => ({
    BNav: {
      sourcePath: '/BNav/BNav.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'ul',
            },
          }),
          ['tag']
        ),
        align: {
          type: 'AlignmentJustifyContent',
          default: undefined,
          description: 'Aligns the nav items to any value of AlignmentJustifyContent',
        },
        cardHeader: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Indicates the nav is placed inside a card header',
        },
        fill: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Fills all horizontal space with nav items proportionally, with varying widths',
        },
        justified: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Fills all horizontal space with nav items, each having equal width',
        },
        pills: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Styles nav items as pill buttons',
        },
        small: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Reduces the nav size',
        },
        tabs: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Styles nav items as tabs',
        },
        underline: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Underlines the active nav item',
        },
        vertical: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Stacks nav items vertically',
        },
      } satisfies PropRecord<keyof BNavProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content for the nav',
          scope: {},
        },
      } satisfies SlotRecord<keyof BNavSlots>,
    },
    BNavForm: {
      styleSpec: {kind: StyleKind.Tag, value: 'li > form'},
      sourcePath: '/BNav/BNavForm.vue',
      props: {
        ...pick(buildCommonProps(), [
          'floating',
          'id',
          'novalidate',
          'role',
          'validated',
          'wrapperAttrs',
        ]),
        formClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'CSS class (or classes) to apply to the form element',
        },
      } satisfies PropRecord<keyof BNavFormProps>,
      emits: {
        submit: {
          description: 'Emitted when the form is submitted',
          args: {
            submit: {
              type: 'Event',
              description: 'Native submit event',
            },
          },
        },
      } satisfies EmitRecord<keyof BNavFormEmits>,
      slots: {
        default: {
          description: 'Content for the nav form',
          scope: {},
        },
      } satisfies SlotRecord<keyof BNavFormSlots>,
    },
    BNavItem: {
      sourcePath: '/BNav/BNavItem.vue',
      props: {
        [defaultPropSectionSymbol]: {
          linkAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
            description: 'Additional attributes for the nested link element',
          },
          linkClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) for the nested link element',
          },
        } satisfies PropRecord<Exclude<keyof BNavItemProps, keyof typeof linkProps>>,
        'BLink props': {
          _opts: {
            linkTo,
          },
          _data: omit(linkProps, ['routerTag']),
        },
      },
      emits: {
        click: {
          description: 'Emitted when a non-disabled nav item is clicked',
          args: {
            click: {
              type: 'MouseEvent',
              description: 'Click event details',
            },
          },
        },
      } satisfies EmitRecord<keyof BNavItemEmits>,
      slots: {
        after: {
          description: 'Content placed after the nav item link (useful for nested navs)',
          scope: {},
        },
        default: {
          description: 'Content for the nav item',
          scope: {},
        },
      } satisfies SlotRecord<keyof BNavItemSlots>,
    },
    BNavItemDropdown: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.nav-item.dropdown'},
      sourcePath: '/BNav/BNavItemDropdown.vue',
      props: dropdownProps,
      emits: dropdownEmits,
      slots: dropdownSlots,
    },
    BNavText: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.navbar-text'},
      sourcePath: '/BNav/BNavText.vue',
      props: {
        text: {
          type: 'string',
          default: undefined,
          description: 'Plain text to display in the nav',
        },
      } satisfies PropRecord<keyof BNavTextProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content to display in the nav',
          scope: {},
        },
      } satisfies SlotRecord<keyof BNavTextSlots>,
    },
  }),
}
