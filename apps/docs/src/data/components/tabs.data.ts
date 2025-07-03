import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'
import {showHideProps} from '../../utils/showHideData'

export default {
  load: (): ComponentReference => ({
    BTab: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.tab-pane'},
      sourcePath: '/BTabs/BTab.vue',
      props: {
        ...pick(showHideProps, ['lazy']),
        ...pick(buildCommonProps(), ['active', 'disabled', 'id', 'tag', 'title']),
        buttonId: {
          type: 'string',
          default: undefined,
          description:
            'Specifies a custom ID for the tab control button. If not provided, an ID is automatically generated.',
        },
        unmountLazy: {
          type: 'boolean',
          default: undefined,
          description: 'When set with `lazy`, unmounts the tab content when the tab is inactive.',
        },
        noBody: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Prevents rendering a card-body wrapper when the parent `BTabs` has the `card` prop set.',
        },
        titleItemClass: {
          type: 'ClassValue',
          default: undefined,
          description: "Sets the CSS class(es) for the tab control button's `li` element.",
        },
        titleLinkAttrs: {
          type: 'AttrsValue',
          default: undefined,
          description: "Sets attributes for the tab control button's inner link element.",
        },
        titleLinkClass: {
          type: 'ClassValue',
          default: undefined,
          description: "Sets the CSS class(es) for the tab control button's inner link element.",
        },
      } satisfies Record<keyof BvnComponentProps['BTab'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content for the tab.',
        },
        title: {
          description: 'Custom title for the tab.',
        },
      },
    },
    BTabs: {
      sourcePath: '/BTabs/BTabs.vue',
      props: {
        ...pick(buildCommonProps(), ['id', 'tag']),
        index: {
          type: 'number',
          default: -1, // TODO item not in string format
          description:
            'Sets the zero-based index of the active tab. The `modelValue` (tab ID) takes priority over `index`.',
        },
        activeNavItemClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Sets the CSS class(es) for the active nav item tab control.',
        },
        activeTabClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Sets the CSS class(es) for the active tab.',
        },
        align: {
          type: 'AlignmentJustifyContent',
          default: undefined,
          description:
            "Aligns the nav items: 'start', 'end', 'center', 'between', 'around', or 'evenly'.",
        },
        card: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Applies styles for tabs placed within a `BCard` component.',
        },
        contentClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Sets the CSS class(es) for the tab-content wrapper.',
        },
        end: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Positions tab controls at the bottom (horizontal tabs) or right (vertical tabs).',
        },
        fill: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Proportionately fills horizontal space with nav items, with varying widths.',
        },
        inactiveNavItemClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Sets the CSS class(es) for inactive nav item tab controls.',
        },
        inactiveTabClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Sets the CSS class(es) for inactive tabs.',
        },
        justified: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Fills horizontal space with nav items, each having equal width.',
        },
        lazy: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Lazily renders tab contents when shown.',
        },
        modelValue: {
          type: 'string',
          default: undefined,
          description: 'Sets the ID of the active tab.',
        },
        navClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Sets the CSS class(es) for the tablist (nav) wrapper.',
        },
        navItemClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Sets the CSS class(es) for the tab item element.',
        },
        navWrapperClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Sets the CSS class(es) for the tab controls wrapper element.',
        },
        noFade: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Disables the fade animation for tab transitions.',
        },
        noKeyNav: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Disables keyboard navigation for the tab controls.',
        },
        noNavStyle: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Disables tab styling for the tab controls.',
        },
        pills: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Renders nav items as pill buttons.',
        },
        small: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Renders the nav with a smaller size.',
        },
        underline: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Renders the active nav item with an underline.',
        },
        tabClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Sets the CSS class(es) for the tab element.',
        },
        vertical: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Renders the tab controls vertically.',
        },
      } satisfies Record<keyof BvnComponentProps['BTabs'], PropertyReference>,
      emits: {
        'update:model-value': {
          description: 'Emitted when the active tab changes, providing the ID of the active tab.', // TODO similar content to BAlert/update:model-value (similar purpose)
          args: {
            value: {
              type: 'string',
              description: 'The ID of the currently active tab.',
            },
          },
        },
        'update:index': {
          description:
            'Emitted when the active tab changes, providing the zero-based index of the active tab.',
          args: {
            value: {
              type: 'number',
              description: 'The zero-based index of the currently active tab.',
            },
          },
        },
        'activate-tab': {
          description: 'Emitted before a tab is shown or activated. Cancelable.',
          args: {
            newTabId: {
              type: 'string',
              description: 'ID of the tab being activated.',
            },
            prevTabId: {
              type: 'string',
              description: 'ID of the currently active tab.',
            },
            newTabIndex: {
              type: 'number',
              description: 'Zero-based index of the tab being activated.',
            },
            prevTabIndex: {
              type: 'number',
              description:
                'Zero-based index of the currently active tab, or -1 if no tab is active.',
            },
            event: {
              type: 'BvEvent',
              description: 'BvEvent object. Call `bvEvent.preventDefault()` to cancel activation.',
            },
          },
        },
      },
      slots: {
        'default': {
          description: 'Content (tabs) for the tabs element.',
        },
        'empty': {
          description: 'Content to render when no tabs are present.',
        },
        'tabs-end': {
          description: 'Additional tab buttons without content, placed after content tab buttons.',
        },
        'tabs-start': {
          description: 'Additional tab buttons without content, placed before content tab buttons.',
        },
      },
    },
  }),
}
