import {describe, expect, it} from 'vitest'
import {computed, defineComponent, h, nextTick, ref, watchEffect} from 'vue'
import {mount} from '@vue/test-utils'
import BApp from '../../components/BApp/BApp.vue'
import BCollapse from '../../components/BCollapse/BCollapse.vue'
import BToast from '../../components/BToast/BToast.vue'
import type {BvTriggerableEvent} from '../../utils'
import {useToast} from './index'

// BOrchestrator binds the create payload's `onHide` on the component and re-invokes it from its
// own `@hide` handler, so an orchestrated toast reports the same event object twice. Compare
// events by identity to count hide cycles rather than listener calls
const uniqueEvents = (events: readonly BvTriggerableEvent[]) => [...new Set(events)]

describe('useToast', () => {
  it('create accepts a plain object and reads back the initial props', async () => {
    let toastRef: ReturnType<ReturnType<typeof useToast>['create']> | undefined
    const TestComponent = defineComponent({
      setup() {
        const {create} = useToast()
        toastRef = create({title: 'Plain Object Title'})
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    expect(toastRef?.get()?.value.props.title).toBe('Plain Object Title')
  })

  it('create accepts a ref and stays reactive both ways (external ref -> internal state)', async () => {
    let toastRef: ReturnType<ReturnType<typeof useToast>['create']> | undefined
    const myToast = ref({title: 'Initial Title'})
    const TestComponent = defineComponent({
      setup() {
        const {create} = useToast()
        toastRef = create(myToast)
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    expect(toastRef?.get()?.value.props.title).toBe('Initial Title')

    myToast.value = {...myToast.value, title: 'Updated From External Ref'}
    await nextTick()

    expect(toastRef?.get()?.value.props.title).toBe('Updated From External Ref')
  })

  it('create accepts a ref and stays reactive both ways (controller.set -> external ref)', async () => {
    let toastRef: ReturnType<ReturnType<typeof useToast>['create']> | undefined
    const myToast = ref({title: 'Initial Title'})
    const TestComponent = defineComponent({
      setup() {
        const {create} = useToast()
        toastRef = create(myToast)
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    toastRef?.set({title: 'Updated Via Controller'})
    await nextTick()

    expect(myToast.value.title).toBe('Updated Via Controller')
  })

  it('supports the computed + watchEffect + ref pattern for derived reactive values', async () => {
    let toastRef: ReturnType<ReturnType<typeof useToast>['create']> | undefined
    const title = ref('Hello')
    const TestComponent = defineComponent({
      setup() {
        const {create} = useToast()
        const derivedTitle = computed(() => title.value)
        const myToast = ref({title: derivedTitle.value})
        watchEffect(() => {
          myToast.value.title = derivedTitle.value
        })
        toastRef = create(myToast)
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    expect(toastRef?.get()?.value.props.title).toBe('Hello')

    title.value = 'World'
    await nextTick()

    expect(toastRef?.get()?.value.props.title).toBe('World')
  })

  it('preserves numeric modelValue when show is called immediately after create', async () => {
    let toastRef: ReturnType<ReturnType<typeof useToast>['create']> | undefined
    const TestComponent = defineComponent({
      setup() {
        const {create} = useToast()
        toastRef = create({title: 'Countdown Toast', modelValue: 10000})
        void toastRef.show()
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    expect(toastRef?.get()?.value.props.modelValue).toBe(10000)
    toastRef?.hide('test')
  })

  it('keeps instances in the store after hide and removes them only on destroy', async () => {
    let toastRef: ReturnType<ReturnType<typeof useToast>['create']> | undefined
    let toastStore: ReturnType<typeof useToast>['store'] | undefined
    const toastId = 'lifecycle-toast'
    const TestComponent = defineComponent({
      setup() {
        const {create, store} = useToast()
        toastStore = store
        toastRef = create({id: toastId, title: 'Lifecycle Toast'})
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    expect(toastStore?.value.toast.has(toastId)).toBe(true)

    toastRef?.hide()
    await nextTick()
    expect(toastStore?.value.toast.has(toastId)).toBe(true)

    await toastRef?.destroy()
    expect(toastStore?.value.toast.has(toastId)).toBe(false)
  })

  describe('hide', () => {
    it('hides a toast by id and passes the trigger along', async () => {
      const hideEvents: BvTriggerableEvent[] = []
      let toastHide: ReturnType<typeof useToast>['hide'] | undefined
      const TestComponent = defineComponent({
        setup() {
          const {create, hide} = useToast()
          toastHide = hide
          create({
            id: 'hide-by-id',
            title: 'Hide By Id',
            modelValue: true,
            onHide: (e: BvTriggerableEvent) => {
              hideEvents.push(e)
            },
          })
          return () => h('div')
        },
      })

      mount(BApp, {slots: {default: () => h(TestComponent)}})
      await nextTick()

      toastHide?.('clear', 'hide-by-id')
      await nextTick()

      expect(uniqueEvents(hideEvents)).toHaveLength(1)
      expect(hideEvents[0].trigger).toBe('clear')
    })

    it('hides a toast created without an id through its store entry', async () => {
      let toastRef: ReturnType<ReturnType<typeof useToast>['create']> | undefined
      let toastHide: ReturnType<typeof useToast>['hide'] | undefined
      const TestComponent = defineComponent({
        setup() {
          const {create, hide} = useToast()
          toastHide = hide
          toastRef = create({title: 'Symbol Keyed Toast', modelValue: true})
          return () => h('div')
        },
      })

      mount(BApp, {slots: {default: () => h(TestComponent)}})
      await nextTick()

      expect(toastRef?.get()?.value.props.modelValue).toBe(true)

      toastHide?.('clear', toastRef?.id)
      await nextTick()

      expect(toastRef?.get()?.value.props.modelValue).toBe(false)
    })

    it('hides a toast declared in a template', async () => {
      const hideEvents: BvTriggerableEvent[] = []
      let toastHide: ReturnType<typeof useToast>['hide'] | undefined
      const TestComponent = defineComponent({
        setup() {
          const {hide} = useToast()
          toastHide = hide
          return () =>
            h(BToast, {
              id: 'template-toast',
              modelValue: true,
              title: 'Template Toast',
              onHide: (e: BvTriggerableEvent) => {
                hideEvents.push(e)
              },
            })
        },
      })

      mount(BApp, {slots: {default: () => h(TestComponent)}})
      await nextTick()

      toastHide?.('clear', 'template-toast')
      await nextTick()

      expect(hideEvents).toHaveLength(1)
      expect(hideEvents[0].trigger).toBe('clear')
    })

    it('leaves other show/hide components that share the id alone', async () => {
      const collapseHideEvents: BvTriggerableEvent[] = []
      let toastHide: ReturnType<typeof useToast>['hide'] | undefined
      const TestComponent = defineComponent({
        setup() {
          const {hide} = useToast()
          toastHide = hide
          return () =>
            h(BCollapse, {
              id: 'shared-id',
              modelValue: true,
              onHide: (e: BvTriggerableEvent) => {
                collapseHideEvents.push(e)
              },
            })
        },
      })

      mount(BApp, {slots: {default: () => h(TestComponent)}})
      await nextTick()

      toastHide?.('clear', 'shared-id')
      await nextTick()

      expect(collapseHideEvents).toHaveLength(0)
    })

    it('hides the toast, not the component that shares its id', async () => {
      const hideEvents: BvTriggerableEvent[] = []
      const collapseHideEvents: BvTriggerableEvent[] = []
      let toastHide: ReturnType<typeof useToast>['hide'] | undefined
      const TestComponent = defineComponent({
        setup() {
          const {create, hide} = useToast()
          toastHide = hide
          create({
            id: 'shared-id',
            title: 'Shared Id Toast',
            modelValue: true,
            onHide: (e: BvTriggerableEvent) => {
              hideEvents.push(e)
            },
          })
          return () =>
            h(BCollapse, {
              id: 'shared-id',
              modelValue: true,
              onHide: (e: BvTriggerableEvent) => {
                collapseHideEvents.push(e)
              },
            })
        },
      })

      mount(BApp, {slots: {default: () => h(TestComponent)}})
      await nextTick()

      toastHide?.('clear', 'shared-id')
      await nextTick()

      expect(uniqueEvents(hideEvents)).toHaveLength(1)
      expect(hideEvents[0].trigger).toBe('clear')
      expect(collapseHideEvents).toHaveLength(0)
    })

    it('does nothing when no toast matches the id', async () => {
      let toastHide: ReturnType<typeof useToast>['hide'] | undefined
      const TestComponent = defineComponent({
        setup() {
          const {hide} = useToast()
          toastHide = hide
          return () => h('div')
        },
      })

      mount(BApp, {slots: {default: () => h(TestComponent)}})
      await nextTick()

      expect(() => toastHide?.('clear', 'not-a-toast')).not.toThrow()
    })
  })

  describe('hideAll', () => {
    it('hides every toast in the store', async () => {
      const hideEvents: BvTriggerableEvent[] = []
      let toastHideAll: ReturnType<typeof useToast>['hideAll'] | undefined
      const TestComponent = defineComponent({
        setup() {
          const {create, hideAll} = useToast()
          toastHideAll = hideAll
          const onHide = (e: BvTriggerableEvent) => {
            hideEvents.push(e)
          }
          create({id: 'hide-all-1', title: 'One', modelValue: true, onHide})
          create({id: 'hide-all-2', title: 'Two', modelValue: true, onHide})
          return () => h('div')
        },
      })

      mount(BApp, {slots: {default: () => h(TestComponent)}})
      await nextTick()

      toastHideAll?.('route-change')
      await nextTick()

      expect(uniqueEvents(hideEvents)).toHaveLength(2)
      expect(uniqueEvents(hideEvents).map((e) => e.trigger)).toEqual([
        'route-change',
        'route-change',
      ])
    })

    it('is what hide falls back to when no id is given', async () => {
      const hideEvents: BvTriggerableEvent[] = []
      let toastHide: ReturnType<typeof useToast>['hide'] | undefined
      const TestComponent = defineComponent({
        setup() {
          const {create, hide} = useToast()
          toastHide = hide
          const onHide = (e: BvTriggerableEvent) => {
            hideEvents.push(e)
          }
          create({id: 'hide-no-id-1', title: 'One', modelValue: true, onHide})
          create({id: 'hide-no-id-2', title: 'Two', modelValue: true, onHide})
          return () => h('div')
        },
      })

      mount(BApp, {slots: {default: () => h(TestComponent)}})
      await nextTick()

      toastHide?.('route-change')
      await nextTick()

      expect(uniqueEvents(hideEvents)).toHaveLength(2)
    })

    it('hides toasts the orchestrator has not rendered yet', async () => {
      let toastRef: ReturnType<ReturnType<typeof useToast>['create']> | undefined
      const TestComponent = defineComponent({
        setup() {
          const {create, hideAll} = useToast()
          toastRef = create({id: 'not-rendered-yet', title: 'Pending Toast', modelValue: true})
          hideAll('route-change')
          return () => h('div')
        },
      })

      mount(BApp, {slots: {default: () => h(TestComponent)}})
      await nextTick()

      expect(toastRef?.get()?.value.props.modelValue).toBe(false)
    })
  })
})
