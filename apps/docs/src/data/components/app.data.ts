import type {BAppProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropRecord} from 'src/types'

export default {
  load: (): ComponentReference => ({
    BApp: {
      sourcePath: '/BApp/BApp.vue',
      props: {
        defaults: {
          type: 'Partial<BvnComponentProps> | Ref<Partial<BvnComponentProps>>',
          default: undefined,
          description: 'Default props for components. Can be a plain object or a ref.',
        },
        mergeDefaults: {
          type: 'boolean | ((oldDefaults: Partial<BvnComponentProps>, newDefaults: Partial<BvnComponentProps>) => Partial<BvnComponentProps>)',
          default: true,
          description:
            'If `true`, performs a shallow merge with existing defaults (if `false`, replaces them). If a function, it receives (oldDefaults, newDefaults) and must return the merged defaults.',
        },
        noOrchestrator: {
          type: 'boolean',
          default: false,
          description:
            'If `true`, disables the orchestration layer (Modal/Toast/Popover controllers) inside BApp.',
        },
        appendToast: {
          type: 'boolean',
          default: false,
          description: 'Appends toast notifications to the end of the list instead of beginning.',
        },
        teleportTo: {
          type: 'string | Element | null | undefined',
          default: null,
          description:
            'Specifies the element to which the toasts, modals and popovers should be teleported. This is useful if you want to move them to a different part of the DOM.',
        },
        rtl: {
          type: 'boolean | { rtlInitial?: boolean; localeInitial?: string }',
          default: false,
          description:
            'If `true`, enables RTL. If an object, you can set initial RTL state and locale. If `false`, disables RTL.',
        },
      } satisfies PropRecord<keyof BAppProps>,
      emits: {},
      slots: {
        default: {
          description: 'App content. Attributes on <BApp> are forwarded to this slot.',
        },
      },
    },
  }),
}
