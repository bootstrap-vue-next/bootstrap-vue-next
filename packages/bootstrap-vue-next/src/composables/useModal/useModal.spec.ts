import {describe, expect, it, vi} from 'vitest'
import {computed, defineComponent, h, nextTick, ref, watchEffect} from 'vue'
import {mount} from '@vue/test-utils'
import BApp from '../../components/BApp/BApp.vue'
import {useModal} from './index'
import {useToast} from '../useToast'

describe('useModal', () => {
  it('create method accepts custom component props without TypeScript errors', async () => {
    // Define a custom modal component with custom props
    const CustomModal = defineComponent({
      name: 'CustomModal',
      props: {
        customProp: {
          type: String,
          required: true,
        },
        anotherProp: {
          type: Number,
          default: 42,
        },
      },
      setup(props) {
        return () =>
          h('div', {class: 'custom-modal'}, [
            h('p', `Custom Prop: ${props.customProp}`),
            h('p', `Another Prop: ${props.anotherProp}`),
          ])
      },
    })

    const TestComponent = defineComponent({
      setup() {
        const {create} = useModal()

        // This should not cause TypeScript errors
        const modal = create({
          component: CustomModal,
          customProp: 'test value',
          anotherProp: 100,
        })

        return () =>
          h('div', [
            h(
              'button',
              {
                onClick: () => modal.show(),
              },
              'Show Modal'
            ),
          ])
      },
    })

    const wrapper = mount(BApp, {
      slots: {
        default: () => h(TestComponent),
      },
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('create method accepts BModal props', async () => {
    const TestComponent = defineComponent({
      setup() {
        const {create} = useModal()

        // Standard BModal props should still work
        const modal = create({
          title: 'Test Modal',
          body: 'Test body content',
          size: 'lg',
        })

        return () =>
          h('div', [
            h(
              'button',
              {
                onClick: () => modal.show(),
              },
              'Show Modal'
            ),
          ])
      },
    })

    const wrapper = mount(BApp, {
      slots: {
        default: () => h(TestComponent),
      },
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('create method accepts both BModal props and custom props together', async () => {
    const CustomModal = defineComponent({
      name: 'CustomModalWithDefaults',
      props: {
        myCustomField: {
          type: String,
          default: 'default',
        },
      },
      setup(props) {
        return () => h('div', {class: 'custom'}, props.myCustomField)
      },
    })

    const TestComponent = defineComponent({
      setup() {
        const {create} = useModal()

        // Mix of standard and custom props
        const modal = create({
          component: CustomModal,
          title: 'Standard Title',
          myCustomField: 'custom value',
          size: undefined,
        })

        return () =>
          h('div', [
            h(
              'button',
              {
                onClick: () => modal.show(),
              },
              'Show Modal'
            ),
          ])
      },
    })

    const wrapper = mount(BApp, {
      slots: {
        default: () => h(TestComponent),
      },
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('create accepts a plain object and reads back the initial props', async () => {
    let modalRef: ReturnType<ReturnType<typeof useModal>['create']> | undefined
    const TestComponent = defineComponent({
      setup() {
        const {create} = useModal()
        modalRef = create({title: 'Plain Object Title'})
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    expect(modalRef?.get()?.value.props.title).toBe('Plain Object Title')
  })

  it('create accepts a ref and stays reactive both ways (external ref -> internal state)', async () => {
    let modalRef: ReturnType<ReturnType<typeof useModal>['create']> | undefined
    const myModal = ref({title: 'Initial Title', modelValue: false})
    const TestComponent = defineComponent({
      setup() {
        const {create} = useModal()
        modalRef = create(myModal)
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    expect(modalRef?.get()?.value.props.title).toBe('Initial Title')

    // Mutating the external ref should be reflected in the orchestrator's internal state
    myModal.value = {...myModal.value, title: 'Updated From External Ref'}
    await nextTick()

    expect(modalRef?.get()?.value.props.title).toBe('Updated From External Ref')
  })

  it('create accepts a ref and stays reactive both ways (controller.set -> external ref)', async () => {
    let modalRef: ReturnType<ReturnType<typeof useModal>['create']> | undefined
    const myModal = ref({title: 'Initial Title', modelValue: false})
    const TestComponent = defineComponent({
      setup() {
        const {create} = useModal()
        modalRef = create(myModal)
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    modalRef?.set({title: 'Updated Via Controller'})
    await nextTick()

    // Because `create()` uses the identical ref instance passed in, controller.set()
    // mutations are visible on the caller's own ref too
    expect(myModal.value.title).toBe('Updated Via Controller')
  })

  it('supports the computed + watchEffect + ref pattern for derived reactive values', async () => {
    let modalRef: ReturnType<ReturnType<typeof useModal>['create']> | undefined
    const title = ref('Hello')
    const TestComponent = defineComponent({
      setup() {
        const {create} = useModal()
        const derivedTitle = computed(() => title.value)
        const myModal = ref({title: derivedTitle.value, modelValue: false})
        watchEffect(() => {
          myModal.value.title = derivedTitle.value
        })
        modalRef = create(myModal)
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    expect(modalRef?.get()?.value.props.title).toBe('Hello')

    title.value = 'World'
    await nextTick()

    expect(modalRef?.get()?.value.props.title).toBe('World')
  })

  it('keeps instances in the store after hide and removes them only on destroy', async () => {
    let modalRef: ReturnType<ReturnType<typeof useModal>['create']> | undefined
    let modalStore: ReturnType<typeof useModal>['store'] | undefined
    const modalId = 'lifecycle-modal'
    const TestComponent = defineComponent({
      setup() {
        const {create, store} = useModal()
        modalStore = store
        modalRef = create({id: modalId, title: 'Lifecycle Modal'})
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    expect(modalStore?.value.modal.has(modalId)).toBe(true)

    modalRef?.hide()
    await nextTick()
    expect(modalStore?.value.modal.has(modalId)).toBe(true)

    await modalRef?.destroy()
    expect(modalStore?.value.modal.has(modalId)).toBe(false)
  })

  it('keeps the stored modelValue in step when the modal hides itself, so show() opens it again', async () => {
    let modal: ReturnType<ReturnType<typeof useModal>['create']> | undefined
    const TestComponent = defineComponent({
      setup() {
        modal = useModal().create({id: 'sync-modal', title: 'Sync'})
        return () => h('div')
      },
    })
    mount(BApp, {attachTo: document.body, slots: {default: () => h(TestComponent)}})
    await nextTick()
    const stored = () => modal?.get()?.value.props.modelValue

    modal?.show()
    await vi.waitFor(() => expect(stored()).toBe(true))

    // hidden through the component itself, not the controller
    const component = modal?.ref as unknown as {hide: (trigger?: string) => void} | null
    expect(component).not.toBeNull()
    component?.hide('close')
    await vi.waitFor(() => expect(stored()).toBe(false))

    modal?.show()
    await vi.waitFor(() => expect(stored()).toBe(true))
  })

  it('destroy closes an open modal and settles its show()', async () => {
    let modal: ReturnType<ReturnType<typeof useModal>['create']> | undefined
    const TestComponent = defineComponent({
      setup() {
        modal = useModal().create({id: 'destroy-open-modal', title: 'Destroy'})
        return () => h('div')
      },
    })
    mount(BApp, {
      attachTo: document.body,
      // real transitions, so the modal emits hidden
      global: {stubs: {'transition': false, 'transition-group': false}},
      slots: {default: () => h(TestComponent)},
    })
    await nextTick()

    const shown = modal?.show()
    await vi.waitFor(() => expect(modal?.get()?.value.props.modelValue).toBe(true))
    await modal?.destroy()

    expect(modal?.get()).toBeUndefined()
    expect((await shown)?.trigger).toBe('destroy')
  })

  const mountApp = (setup: () => void, realTransitions = false) => {
    const TestComponent = defineComponent({
      setup() {
        setup()
        return () => h('div')
      },
    })
    return mount(BApp, {
      attachTo: document.body,
      global: realTransitions ? {stubs: {'transition': false, 'transition-group': false}} : {},
      slots: {default: () => h(TestComponent)},
    })
  }

  it('settles show() and destroy() when onShow prevents a modal that was not mounted yet', async () => {
    let modal: ReturnType<ReturnType<typeof useModal>['create']> | undefined
    let shown: Promise<unknown> | undefined
    mountApp(() => {
      modal = useModal().create({
        id: 'prevented-before-mount',
        onShow: (e: {preventDefault: () => void}) => e.preventDefault(),
      })
      shown = modal.show() // before the orchestrator mounts it
    })

    expect(((await shown) as {eventType: string}).eventType).toBe('show-prevented')
    await modal?.destroy()
    expect(modal?.get()).toBeUndefined()
  })

  it('destroy() finishes right after a resolveOnHide show() resolved', async () => {
    let modal: ReturnType<ReturnType<typeof useModal>['create']> | undefined
    mountApp(() => {
      modal = useModal().create({id: 'resolve-on-hide-destroy', options: {resolveOnHide: true}})
    }, true)
    await nextTick()

    const shown = modal?.show()
    await vi.waitFor(() => expect(modal?.get()?.value.props.modelValue).toBe(true))
    modal?.hide('ok')
    expect((await shown)?.trigger).toBe('ok')

    await modal?.destroy()
    expect(modal?.get()).toBeUndefined()
  })

  it('syncs the stored modelValue of the emitting item when a modal and a toast share an id', async () => {
    let modal: ReturnType<ReturnType<typeof useModal>['create']> | undefined
    let toast: ReturnType<ReturnType<typeof useToast>['create']> | undefined
    mountApp(() => {
      modal = useModal().create({id: 'shared-id'})
      toast = useToast().create({id: 'shared-id', modelValue: false})
    })
    await nextTick()

    toast?.show()
    await vi.waitFor(() => expect(toast?.get()?.value.props.modelValue).toBe(true))
    expect(modal?.get()?.value.props.modelValue).toBeFalsy()
  })

  it('hides a modal whose mount-time onShow aborts the show signal', async () => {
    let modal: ReturnType<ReturnType<typeof useModal>['create']> | undefined
    let shown: Promise<{trigger: string | null}> | undefined
    const scope = new AbortController()
    mountApp(() => {
      modal = useModal().create({id: 'abort-in-mount-show', onShow: () => scope.abort()})
      shown = modal.show({signal: scope.signal}) // before the orchestrator mounts it
    })

    expect((await shown)?.trigger).toBe('abort')
    await vi.waitFor(() => expect(modal?.get()?.value.props.modelValue).toBeFalsy())
  })

  it('shows again when show() is called right after a resolveOnHide show resolved', async () => {
    let modalRef: ReturnType<ReturnType<typeof useModal>['create']> | undefined
    const hidden: unknown[] = []
    const TestComponent = defineComponent({
      setup() {
        const {create} = useModal()
        modalRef = create({
          title: 'Again',
          noAnimation: true,
          options: {resolveOnHide: true},
          onHidden: (e: unknown) => {
            hidden.push(e)
          },
        })
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    const first = modalRef?.show()
    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(modalRef?.get()?.value.props.modelValue).toBe(true)

    modalRef?.hide('ok')
    expect((await first)?.trigger).toBe('ok')

    let secondSettled = false
    void modalRef?.show().then(() => {
      secondSettled = true
    })
    await new Promise((resolve) => setTimeout(resolve, 100))

    expect(modalRef?.get()?.value.props.modelValue).toBe(true)
    expect(hidden).toHaveLength(0)
    expect(secondSettled).toBe(false)

    modalRef?.hide('cancel')
    await new Promise((resolve) => setTimeout(resolve, 100))
    expect(secondSettled).toBe(true)
    expect(modalRef?.get()?.value.props.modelValue).toBe(false)
  })
})
