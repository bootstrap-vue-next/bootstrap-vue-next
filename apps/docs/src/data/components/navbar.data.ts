import type {
  BNavbarBrandProps,
  BNavbarBrandSlots,
  BNavbarNavProps,
  BNavbarNavSlots,
  BNavbarProps,
  BNavbarSlots,
  BNavbarToggleEmits,
  BNavbarToggleProps,
  BNavbarToggleSlots,
} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type EmitRecord,
  type PropRecord,
  type SlotRecord,
} from '../../types'
import {omit, pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'
import {linkProps, linkTo} from '../../utils/linkProps'

export default {
  load: (): ComponentReference => ({
    BNavbar: {
      sourcePath: '/BNavbar/BNavbar.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'nav',
            },
          }),
          ['tag', 'variant']
        ),
        container: {
          type: "boolean | 'fluid' | Breakpoint",
          default: 'fluid',
          description:
            "Use the container option to change the layout of the navbar. By default, the navbar is a fluid container. Use 'fluid' for a full width navbar, or a responsive breakpoint for a container width navbar.",
        },
        fixed: {
          type: "'top' | 'bottom'",
          default: undefined,
          description:
            "Set to 'top' for fixed to the top of the viewport, or 'bottom' for fixed to the bottom of the viewport",
        },
        print: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Navbars are hidden by default when printing. When this prop is set it will be printed',
        },
        noAutoClose: {
          type: 'boolean',
          default: false,
          description: 'Disable auto-closing of the navbar when a child component is clicked',
        },
        sticky: {
          type: "'top' | 'bottom'",
          default: undefined,
          description:
            "Set to 'true' to make the navbar stick to the top of the viewport (or parent container that has 'position: relative' set) when scrolled",
        },
        toggleable: {
          type: 'boolean | Breakpoint',
          default: false, // TODO item not in string format
          description:
            "Set to 'true' for an always collapsed navbar, or to a specific breakpoint at which point the navbar will be expanded: 'sm', 'md', 'lg', 'xl', or 'xxl'",
        },
      } satisfies PropRecord<keyof BNavbarProps>,
      slots: {
        default: {
          description: 'Content to place in the navbar',
        },
      } satisfies SlotRecord<keyof BNavbarSlots>,
    },
    BNavbarBrand: {
      sourcePath: '/BNavbar/BNavbarBrand.vue',
      props: {
        [defaultPropSectionSymbol]: pick(
          buildCommonProps({
            tag: {
              default: 'ul',
            },
          }),
          ['tag']
        ) satisfies PropRecord<Exclude<keyof BNavbarBrandProps, keyof typeof linkProps>>,
        'BLink props': {
          _opts: {
            linkTo,
          },
          _data: omit(linkProps, ['routerTag']),
        },
      },
      slots: {
        default: {
          description: 'Content to place in the navbar brand',
        },
      } satisfies SlotRecord<keyof BNavbarBrandSlots>,
    },
    BNavbarNav: {
      sourcePath: '/BNavbar/BNavbarNav.vue',
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
          description:
            "Align the nav items in the nav: 'start', 'end', 'center', 'between', 'around', or 'evenly'",
        },
        fill: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Proportionately fills all horizontal space with nav items. All horizontal space is occupied, but not every nav item has the same width',
        },
        justified: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            "Fills all horizontal space with nav items, but unlike 'fill', every nav item will be the same width",
        },
        small: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Makes the nav smaller',
        },
      } satisfies PropRecord<keyof BNavbarNavProps>,
      slots: {
        default: {
          description: 'Content to place in the navbar nav',
        },
      } satisfies SlotRecord<keyof BNavbarNavSlots>,
    },
    BNavbarToggle: {
      sourcePath: '/BNavbar/BNavbarToggle.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'ul',
            },
          }),
          ['disabled']
        ),
        label: {
          type: 'string',
          default: 'Toggle navigation',
          description: "String to place in the toggle's 'aria-label' attribute",
        },
        target: {
          type: 'string | readonly string[]',
          default: undefined,
          description:
            'ID (or array of IDs) of the collapse/sidebar components that should be toggled',
        },
      } satisfies PropRecord<keyof BNavbarToggleProps>,
      emits: {
        click: {
          description: 'Emitted when the toggle is clicked',
          args: {
            click: {
              description: 'Native mouse event object',
              type: 'MouseEvent',
            },
          },
        },
      } satisfies EmitRecord<keyof BNavbarToggleEmits>,
      slots: {
        default: {
          description: 'Alternate content to replace the default Bootstrap hamburger',
          scope: {
            expanded: {
              type: 'boolean',
              description: '`true` if the collapse is expanded, `false` otherwise',
              notYetImplemented: true,
            },
          },
        },
      } satisfies SlotRecord<keyof BNavbarToggleSlots>,
    },
  }),
}
