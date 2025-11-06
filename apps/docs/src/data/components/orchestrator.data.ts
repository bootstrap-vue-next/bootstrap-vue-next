import type {BOrchestratorProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropRecord} from 'src/types'

export default {
  load: (): ComponentReference => ({
    BOrchestrator: {
      sourcePath: '/BApp/BOrchestrator.vue',

      props: {
        noPopovers: {
          type: 'boolean',
          default: false,
          description: 'If `true`, prevents popover components from being rendered.',
        },
        noToasts: {
          type: 'boolean',
          default: false,
          description: 'If `true`, prevents toast components from being rendered.',
        },
        noModals: {
          type: 'boolean',
          default: false,
          description: 'If `true`, prevents modal components from being rendered.',
        },
        appendToast: {
          type: 'boolean',
          default: false,
          description:
            'If `true`, new toasts are appended to the end of the list instead of the beginning.',
        },
        filter: {
          type: '(item: OrchestratorArrayValue) => boolean',
          default: '() => true',
          description: 'Custom filter function to control which orchestrator items are rendered.',
        },
        teleportTo: {
          type: 'string | Element | null | undefined',
          default: null,
          description:
            'Specifies the element to which the orchestrator components should be teleported. This is useful if you want to move them to a different part of the DOM.',
        },
      } satisfies PropRecord<keyof BOrchestratorProps>,
      emits: {},
      slots: {},
    },
  }),
}
