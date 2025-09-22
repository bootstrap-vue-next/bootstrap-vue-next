import {describe, expect, it, afterEach, vi} from 'vitest'
import {markRaw, defineComponent, ref} from 'vue'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import {useModal} from '../../src/composables/useModal'
import BOrchestrator from '../../src/components/BApp/BOrchestrator.vue'
import {orchestratorRegistryKey} from '../../src/utils/keys'

// Mock custom component
const TestModalComponent = defineComponent({
  name: 'TestModalComponent',
  template: '<div>Test Modal Content</div>',
})

describe('useModal', () => {
  enableAutoUnmount(afterEach)
  
  let warn: ReturnType<typeof vi.spyOn>

  afterEach(() => {
    warn?.mockRestore()
  })

  it('should not create reactive component warning when using custom component (bug fixed)', () => {
    // Spy on console.warn to catch Vue warnings
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    // Mock registry
    const store = ref([])
    const registry = {
      store,
      _isOrchestratorInstalled: ref(true),
      _isToastAppend: ref(false),
    }

    const TestComponent = defineComponent({
      template: '<BOrchestrator />',
      components: { BOrchestrator },
      setup() {
        const {create} = useModal()
        
        // This should NO LONGER produce a reactive component warning with the fix
        create({
          component: TestModalComponent,
          title: 'Test Modal'
        })
        
        return {}
      }
    })

    mount(TestComponent, {
      global: {
        provide: {
          [orchestratorRegistryKey]: registry,
        },
      },
    })

    // Check that NO warning about reactive components was logged (issue is fixed)
    const reactiveWarnings = warn.mock.calls.filter(call => 
      call[0] && typeof call[0] === 'string' && call[0].includes('Vue received a Component that was made a reactive object')
    )
    expect(reactiveWarnings.length).toBe(0)
  })

  it('should not create reactive component warning when using markRaw component', () => {
    // Spy on console.warn to catch Vue warnings
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    // Mock registry
    const store = ref([])
    const registry = {
      store,
      _isOrchestratorInstalled: ref(true),
      _isToastAppend: ref(false),
    }

    const TestComponent = defineComponent({
      template: '<BOrchestrator />',
      components: { BOrchestrator },
      setup() {
        const {create} = useModal()
        
        // Using markRaw should definitely not produce a warning
        create({
          component: markRaw(TestModalComponent),
          title: 'Test Modal'
        })
        
        return {}
      }
    })

    mount(TestComponent, {
      global: {
        provide: {
          [orchestratorRegistryKey]: registry,
        },
      },
    })

    // Check that no warning about reactive components was logged
    const reactiveWarnings = warn.mock.calls.filter(call => 
      call[0] && typeof call[0] === 'string' && call[0].includes('Vue received a Component that was made a reactive object')
    )
    expect(reactiveWarnings.length).toBe(0)
  })
})