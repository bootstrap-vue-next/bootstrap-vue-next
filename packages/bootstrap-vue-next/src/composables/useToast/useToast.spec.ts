import {describe, expect, it} from 'vitest'
import {computed, defineComponent, h, nextTick, ref, watchEffect} from 'vue'
import {mount} from '@vue/test-utils'
import BApp from '../../components/BApp/BApp.vue'
import {useToast} from './index'

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
})
