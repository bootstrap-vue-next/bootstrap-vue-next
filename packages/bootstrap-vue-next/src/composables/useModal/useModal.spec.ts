import {describe, expect, it} from 'vitest'
import {computed, defineComponent, h, nextTick, ref, watchEffect} from 'vue'
import {mount} from '@vue/test-utils'
import BApp from '../../components/BApp/BApp.vue'
import {useModal} from './index'

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
})
