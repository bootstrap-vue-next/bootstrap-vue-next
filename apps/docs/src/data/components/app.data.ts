import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BApp',
      sourcePath: '/BApp/BApp.vue',
      props: {
        '': {
          defaults: {
            type: 'object |  Partial<BvnComponentProps> | Ref<Partial<BvnComponentProps>>',
            default: undefined,
            description: 'Default props for components. Can be an object or a ref.',
          },
          mergeDefaults: {
            type: 'boolean | ((defaults: Partial<BvnComponentProps>, newDefaults: Partial<BvnComponentProps>) => Partial<BvnComponentProps>)',
            default: true,
            description:
              'If `true`, merges defaults with existing defaults. If a function, it will be called with the current defaults and the new defaults',
          },
          noOrchestrator: {
            type: 'boolean',
            default: false,
            description:
              'If `true`, disables the orchestrator plugin. This is useful if you want to use the app without the orchestrator functionality',
          },
          appendToast: {
            type: 'boolean',
            default: false,
            description: 'Appends toast notifications to the end of the list instead of beginning.',
          },
          teleportTo: {
            type: 'string | HTMLElement | null',
            default: null,
            description:
              'Specifies the element to which the toasts, modals and popovers should be teleported. This is useful if you want to move them to a different part of the DOM.',
          },
          rtl: {
            type: 'boolean | { rtlInitial?: boolean; localeInitial?: string }',
            default: false,
            description:
              'If an object, it can specify initial RTL state and locale. If `false`, disables RTL mode.',
          },
        } satisfies Record<keyof BvnComponentProps['BApp'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: '',
          scope: [],
        },
      ],
    },
  ],
}
