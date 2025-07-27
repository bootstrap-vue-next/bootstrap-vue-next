import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, omit, pick} from '../../utils'
import {linkProps, linkTo} from '../../utils/link-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BNavbar',
      sourcePath: '/BNavbar/BNavbar.vue',
      props: {
        '': {
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
            default: false,
            description:
              'Navbars are hidden by default when printing. When this prop is set it will be printed',
          },
          sticky: {
            type: "'top' | 'bottom'",
            default: undefined,
            description:
              "Set to true to make the navbar stick to the top of the viewport (or parent container that has 'position: relative' set) when scrolled",
          },
          toggleable: {
            type: 'boolean | Breakpoint',
            default: false,
            description:
              "Set to 'true' for an always collapsed navbar, or to a specific breakpoint at which point the navbar will be expanded: 'sm', 'md', 'lg', 'xl', or 'xxl'",
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'nav',
              },
              autoClose: {
                default: 'undefined',
              },
            }),
            ['autoClose', 'tag', 'variant']
          ),
        } satisfies Record<keyof BvnComponentProps['BNavbar'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the navbar',
        },
      ],
    },
    {
      component: 'BNavbarBrand',
      sourcePath: '/BNavbar/BNavbarBrand.vue',
      props: {
        '': {
          ...pick(
            buildCommonProps({
              tag: {
                default: 'ul',
              },
            }),
            ['tag']
          ),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BNavbarBrand'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...omit(linkProps, ['routerTag']),
        },
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the navbar brand',
        },
      ],
    },
    {
      component: 'BNavbarNav',
      sourcePath: '/BNavbar/BNavbarNav.vue',
      props: {
        '': {
          align: {
            type: 'AlignmentJustifyContent',
            default: undefined,
            description:
              "Align the nav items in the nav: 'start', 'end', 'center', 'between', 'around', or 'evenly'",
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
          small: {
            type: 'boolean',
            default: false,
            description: 'Makes the nav smaller',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'ul',
              },
            }),
            ['tag']
          ),
        } satisfies Record<keyof BvnComponentProps['BNavbarNav'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the navbar nav',
        },
      ],
    },
    {
      component: 'BNavbarToggle',
      sourcePath: '/BNavbar/BNavbarToggle.vue',
      props: {
        '': {
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
          ...pick(
            buildCommonProps({
              tag: {
                default: 'ul',
              },
            }),
            ['disabled']
          ),
        } satisfies Record<keyof BvnComponentProps['BNavbarToggle'], PropertyReference>,
      },
      emits: [
        {
          event: 'click',
          description: 'Emitted when the toggle is clicked',
          args: [
            {
              arg: 'click',
              description: 'Native mouse event object',
              type: 'MouseEvent',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Alternate content to replace the default Bootstrap hamburger',
          scope: [
            {
              prop: 'expanded',
              type: 'boolean',
              description: '`true` if the collapse is expanded, `false` otherwise',
              notYetImplemented: true,
            },
          ],
        },
      ],
    },
  ],
}
