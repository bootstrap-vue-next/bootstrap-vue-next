import {describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'
import BTbody from './BTbody.vue'

describe('BTbody transition support', () => {
  it('renders as normal tbody when no transition props are provided', () => {
    const wrapper = mount(BTbody, {
      slots: {
        default: '<tr><td>Test</td></tr>',
      },
    })

    expect(wrapper.find('tbody').exists()).toBe(true)
    expect(wrapper.find('tbody').element.tagName).toBe('TBODY')
    expect(wrapper.find('tbody').text()).toBe('Test')
  })

  it('renders as TransitionGroup when transition props are provided', () => {
    const wrapper = mount(BTbody, {
      props: {
        tbodyTransitionProps: {
          name: 'fade',
          mode: 'out-in',
        },
      },
      slots: {
        default: '<tr><td>Test</td></tr>',
      },
    })

    // In tests, Vue Test Utils stubs TransitionGroup
    expect(wrapper.find('transition-group-stub').exists()).toBe(true)
    expect(wrapper.find('transition-group-stub').attributes('tag')).toBe('tbody')
    expect(wrapper.find('transition-group-stub').attributes('name')).toBe('fade')
    expect(wrapper.find('transition-group-stub').attributes('mode')).toBe('out-in')
    expect(wrapper.find('transition-group-stub').text()).toBe('Test')
  })

  it('renders as TransitionGroup when transition handlers are provided', () => {
    const onEnter = () => {}
    const wrapper = mount(BTbody, {
      props: {
        tbodyTransitionHandlers: {
          enter: onEnter,
        },
      },
      slots: {
        default: '<tr><td>Test</td></tr>',
      },
    })

    expect(wrapper.find('transition-group-stub').exists()).toBe(true)
    expect(wrapper.find('transition-group-stub').attributes('tag')).toBe('tbody')
    expect(wrapper.find('transition-group-stub').text()).toBe('Test')
  })

  it('applies variant class correctly with transitions', () => {
    const wrapper = mount(BTbody, {
      props: {
        variant: 'dark',
        tbodyTransitionProps: {
          name: 'fade',
        },
      },
      slots: {
        default: '<tr><td>Test</td></tr>',
      },
    })

    expect(wrapper.find('transition-group-stub').classes()).toContain('thead-dark')
  })

  it('applies variant class correctly without transitions', () => {
    const wrapper = mount(BTbody, {
      props: {
        variant: 'dark',
      },
      slots: {
        default: '<tr><td>Test</td></tr>',
      },
    })

    expect(wrapper.find('tbody').classes()).toContain('thead-dark')
  })

  it('passes transition props to TransitionGroup', async () => {
    const wrapper = mount(BTbody, {
      props: {
        tbodyTransitionProps: {
          name: 'test-transition',
          mode: 'out-in',
          duration: 300,
        },
      },
      slots: {
        default: '<tr><td>Test content</td></tr>',
      },
    })

    const transitionGroup = wrapper.find('transition-group-stub')
    expect(transitionGroup.exists()).toBe(true)
    expect(transitionGroup.attributes('name')).toBe('test-transition')
    expect(transitionGroup.attributes('mode')).toBe('out-in')
    expect(transitionGroup.attributes('tag')).toBe('tbody')
  })

  it('renders with complex content and transitions', () => {
    const wrapper = mount(BTbody, {
      props: {
        tbodyTransitionProps: {
          name: 'list-move',
        },
      },
      slots: {
        default: `
          <tr><td>Row 1</td></tr>
          <tr><td>Row 2</td></tr>
          <tr><td>Row 3</td></tr>
        `,
      },
    })

    expect(wrapper.find('transition-group-stub').exists()).toBe(true)
    expect(wrapper.findAll('tr')).toHaveLength(3)
    expect(wrapper.text()).toContain('Row 1')
    expect(wrapper.text()).toContain('Row 2')
    expect(wrapper.text()).toContain('Row 3')
  })

  it('hasTransition computed property works correctly', () => {
    // Test false when no props are provided
    const wrapperNoTransition = mount(BTbody, {
      slots: {
        default: '<tr><td>Test</td></tr>',
      },
    })
    expect(wrapperNoTransition.find('tbody').exists()).toBe(true)
    expect(wrapperNoTransition.find('transition-group-stub').exists()).toBe(false)

    // Test true when transition props are provided
    const wrapperWithProps = mount(BTbody, {
      props: {
        tbodyTransitionProps: {name: 'fade'},
      },
      slots: {
        default: '<tr><td>Test</td></tr>',
      },
    })
    expect(wrapperWithProps.find('transition-group-stub').exists()).toBe(true)
    expect(wrapperWithProps.find('tbody').exists()).toBe(false)

    // Test true when transition handlers are provided
    const wrapperWithHandlers = mount(BTbody, {
      props: {
        tbodyTransitionHandlers: {enter: () => {}},
      },
      slots: {
        default: '<tr><td>Test</td></tr>',
      },
    })
    expect(wrapperWithHandlers.find('transition-group-stub').exists()).toBe(true)
    expect(wrapperWithHandlers.find('tbody').exists()).toBe(false)
  })
})
