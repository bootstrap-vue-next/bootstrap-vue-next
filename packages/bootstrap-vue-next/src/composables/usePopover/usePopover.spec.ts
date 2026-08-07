import {describe, expect, it} from 'vitest'
import {computed, defineComponent, h, nextTick, ref, watchEffect} from 'vue'
import {mount} from '@vue/test-utils'
import BApp from '../../components/BApp/BApp.vue'
import {usePopover} from './index'

describe('usePopover', () => {
  it('create/tooltip/popover accept a plain object and read back the initial props', async () => {
    let popoverRef: ReturnType<ReturnType<typeof usePopover>['popover']> | undefined
    let tooltipRef: ReturnType<ReturnType<typeof usePopover>['tooltip']> | undefined
    const TestComponent = defineComponent({
      setup() {
        const {popover, tooltip} = usePopover()
        popoverRef = popover({title: 'Plain Popover Title'})
        tooltipRef = tooltip({title: 'Plain Tooltip Title'})
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    expect(popoverRef?.get()?.value.props.title).toBe('Plain Popover Title')
    expect(tooltipRef?.get()?.value.props.title).toBe('Plain Tooltip Title')
  })

  it('popover accepts a ref and stays reactive both ways (external ref -> internal state)', async () => {
    let popoverRef: ReturnType<ReturnType<typeof usePopover>['popover']> | undefined
    const myPopover = ref({title: 'Initial Title'})
    const TestComponent = defineComponent({
      setup() {
        const {popover} = usePopover()
        popoverRef = popover(myPopover)
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    expect(popoverRef?.get()?.value.props.title).toBe('Initial Title')

    myPopover.value = {...myPopover.value, title: 'Updated From External Ref'}
    await nextTick()

    expect(popoverRef?.get()?.value.props.title).toBe('Updated From External Ref')
  })

  it('popover accepts a ref and stays reactive both ways (controller.set -> external ref)', async () => {
    let popoverRef: ReturnType<ReturnType<typeof usePopover>['popover']> | undefined
    const myPopover = ref({title: 'Initial Title'})
    const TestComponent = defineComponent({
      setup() {
        const {popover} = usePopover()
        popoverRef = popover(myPopover)
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    popoverRef?.set({title: 'Updated Via Controller'})
    await nextTick()

    expect(myPopover.value.title).toBe('Updated Via Controller')
  })

  it('tooltip supports the computed + watchEffect + ref pattern for derived reactive values', async () => {
    let tooltipRef: ReturnType<ReturnType<typeof usePopover>['tooltip']> | undefined
    const title = ref('Hello')
    const TestComponent = defineComponent({
      setup() {
        const {tooltip} = usePopover()
        const derivedTitle = computed(() => title.value)
        const myTooltip = ref({title: derivedTitle.value})
        watchEffect(() => {
          myTooltip.value.title = derivedTitle.value
        })
        tooltipRef = tooltip(myTooltip)
        return () => h('div')
      },
    })

    mount(BApp, {slots: {default: () => h(TestComponent)}})
    await nextTick()

    expect(tooltipRef?.get()?.value.props.title).toBe('Hello')

    title.value = 'World'
    await nextTick()

    expect(tooltipRef?.get()?.value.props.title).toBe('World')
  })
})
