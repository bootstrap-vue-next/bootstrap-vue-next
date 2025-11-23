import {describe, expect, it} from 'vitest'
import {defineComponent, h} from 'vue'
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
          size: 'md',
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
})
