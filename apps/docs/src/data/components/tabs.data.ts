import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick, showHideProps} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BTab',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.tab-pane'},
      sourcePath: '/BTabs/BTab.vue',
      props: {
        '': {
          buttonId: {
            type: 'string',
            default: undefined,
            description:
              "Use a specific ID for this tab's tab control button. If not provided, one will automatically be generated",
          },
          unmountLazy: {
            type: 'boolean',
            default: undefined,
            description:
              'When set and lazy is also set, the content will be unmounted when the tab is not active',
          },
          noBody: {
            type: 'boolean',
            default: false,
            description:
              "When the parent b-tabs has the 'card' prop set, do not render a card-body wrapper",
          },
          titleItemClass: {
            type: 'ClassValue',
            default: undefined,
            description: "CSS class (or classes) to apply to the tab's control button 'li' element",
          },
          titleLinkAttrs: {
            type: 'AttrsValue',
            default: undefined,
            description: "Attributes to apply to the tab's control button inner link element",
          },
          titleLinkClass: {
            type: 'ClassValue',
            default: undefined,
            description:
              "CSS class (or classes) to apply to the tab's control button inner link element",
          },
          ...pick(showHideProps, ['lazy']),
          ...pick(buildCommonProps(), ['active', 'disabled', 'id', 'tag', 'title']),
        } satisfies Record<keyof BvnComponentProps['BTab'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Slot for custom tab content',
        },
        {
          name: 'title',
          description: 'Slot for custom tab title',
        },
      ],
    },
    {
      component: 'BTabs',
      sourcePath: '/BTabs/BTabs.vue',
      props: {
        '': {
          index: {
            type: 'number',
            default: -1,
            description:
              'The index (zero-based) of the currently active tab. Id (modelValue) takes priority over index.',
          },
          activeNavItemClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to apply to the active nav item tab control',
          },
          activeTabClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to apply to the currently active tab',
          },
          align: {
            type: 'AlignmentJustifyContent',
            default: undefined,
            description:
              "Align the nav items in the nav: 'start' , 'end' , 'center' , 'between' , 'around' or 'evenly'",
          },
          card: {
            type: 'boolean',
            default: false,
            description:
              "When set to true, renders the tabs the the appropriate styles to be placed into a 'b-card'",
          },
          contentClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to apply to the tab-content wrapper',
          },
          end: {
            type: 'boolean',
            default: false,
            description:
              'Place the tab controls at the bottom (horizontal tabs), or right (vertical tabs)',
          },
          fill: {
            type: 'boolean',
            default: false,
            description:
              'Proportionately fills all horizontal space with nav items. All horizontal space is occupied, but not every nav item has the same width',
          },
          inactiveNavItemClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to apply to inactive nav item tab controls',
          },
          inactiveTabClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to apply to inactive tabs',
          },
          justified: {
            type: 'boolean',
            default: false,
            description:
              "Fills all horizontal space with nav items, but unlike 'fill', every nav item will be the same width",
          },
          lazy: {
            type: 'boolean',
            default: false,
            description: 'Lazily render the tab contents when shown',
          },
          modelValue: {
            type: 'string',
            default: undefined,
            description: 'The id of the currently active tab',
          },
          navClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to apply to the tablist (nav) wrapper',
          },
          navItemClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to apply to the tab item element',
          },
          navWrapperClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to apply to the tab controls wrapper element',
          },
          noFade: {
            type: 'boolean',
            default: false,
            description: 'When set, disables the fade animation',
          },
          noKeyNav: {
            type: 'boolean',
            default: false,
            description: 'Disable keyboard navigation of the tab controls',
          },
          noNavStyle: {
            type: 'boolean',
            default: false,
            description: 'Do not render the tab controls with tab styling',
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
          underline: {
            type: 'boolean',
            default: false,
            description: 'Renders the active name item with an underline',
          },
          tabClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to apply to the tab element',
          },
          vertical: {
            type: 'boolean',
            default: false,
            description: 'Renders the tab controls vertically',
          },
          ...pick(buildCommonProps(), ['id', 'tag']),
        } satisfies Record<keyof BvnComponentProps['BTabs'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          args: [
            {
              arg: 'value',
              type: 'string',
              description: 'The id of the currently active tab',
            },
          ],
          description: 'The active tab has changed. The id of the currently active tab',
        },
        {
          event: 'update:index',
          args: [
            {
              arg: 'value',
              type: 'number',
              description: 'The index (zero-based) of the currently active tab',
            },
          ],
          description:
            'The active tab has changed. The index (zero-based) of the currently active tab',
        },
        {
          description: 'Emitted just before a tab is shown/activated. Cancelable',
          event: 'activate-tab',
          args: [
            {
              arg: 'newTabId',
              type: 'string',
              description: 'Tab being activated (id)',
            },
            {
              arg: 'prevTabId',
              type: 'string',
              description: 'Current active tab (id)',
            },
            {
              arg: 'newTabIndex',
              type: 'number',
              description: 'Tab being activated (0-based index)',
            },
            {
              arg: 'prevTabIndex',
              type: 'number',
              description:
                'Tab that is currently active (0-based index). Will be -1 if no current active tab',
            },
            {
              arg: 'event',
              type: 'BvEvent',
              description: 'BvEvent object. Call bvEvent.preventDefault() to cancel',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content (tabs) to place in the tabs element',
        },
        {
          name: 'empty',
          description: 'Renders this slot if no tabs are present',
        },
        {
          name: 'tabs-end',
          description:
            'Additional tab buttons without tab content placed after content tab buttons',
        },
        {
          name: 'tabs-start',
          description:
            'Additional tab buttons without tab content placed before content tab buttons',
        },
      ],
    },
  ],
}
