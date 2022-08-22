import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BImg from './BImg.vue'

describe('img', () => {
  it('has class img-thumbnail if prop thumbnail', async () => {
    const wrapper = mount(BImg, {
      props: {thumbnail: true},
    })
    expect(wrapper.classes()).toContain('img-thumbnail')
    await wrapper.setProps({thumbnail: false})
    expect(wrapper.classes()).not.toContain('img-thumbnail')

    wrapper.unmount()
  })

  it('has class img-fluid if prop fluid', async () => {
    const wrapper = mount(BImg, {
      props: {fluid: true},
    })
    expect(wrapper.classes()).toContain('img-fluid')
    await wrapper.setProps({fluid: false})
    expect(wrapper.classes()).not.toContain('img-fluid')

    wrapper.unmount()
  })

  it('has class img-fluid if prop fluidGrow', async () => {
    const wrapper = mount(BImg, {
      props: {fluidGrow: true},
    })
    expect(wrapper.classes()).toContain('img-fluid')
    await wrapper.setProps({fluidGrow: false})
    expect(wrapper.classes()).not.toContain('img-fluid')

    wrapper.unmount()
  })

  it('has class w-100 if prop fluidGrow', async () => {
    const wrapper = mount(BImg, {
      props: {fluidGrow: true},
    })
    expect(wrapper.classes()).toContain('w-100')
    await wrapper.setProps({fluidGrow: false})
    expect(wrapper.classes()).not.toContain('w-100')

    wrapper.unmount()
  })

  it('has class rounded if prop rounded true', async () => {
    const wrapper = mount(BImg, {
      props: {rounded: true},
    })
    expect(wrapper.classes()).toContain('rounded')
    await wrapper.setProps({rounded: false})
    expect(wrapper.classes()).not.toContain('rounded')

    wrapper.unmount()
  })

  it('has class rounded if prop rounded empty string', async () => {
    const wrapper = mount(BImg, {
      props: {rounded: ''},
    })
    expect(wrapper.classes()).toContain('rounded')
    await wrapper.setProps({rounded: false})
    expect(wrapper.classes()).not.toContain('rounded')

    wrapper.unmount()
  })

  it('has class rounded-{type} if prop rounded string', async () => {
    const wrapper = mount(BImg, {
      props: {rounded: 'abc'},
    })
    expect(wrapper.classes()).toContain('rounded-abc')
    await wrapper.setProps({rounded: false})
    expect(wrapper.classes()).not.toContain('rounded-abc')

    wrapper.unmount()
  })

  it('has class d-block if prop block', async () => {
    const wrapper = mount(BImg, {
      props: {block: true},
    })
    expect(wrapper.classes()).toContain('d-block')
    await wrapper.setProps({block: false})
    expect(wrapper.classes()).not.toContain('d-block')

    wrapper.unmount()
  })

  it('has class d-block if prop centerBoolean', async () => {
    const wrapper = mount(BImg, {
      props: {center: true},
    })
    expect(wrapper.classes()).toContain('d-block')
    await wrapper.setProps({center: false})
    expect(wrapper.classes()).not.toContain('d-block')

    wrapper.unmount()
  })

  it('has class float-start if prop left', async () => {
    const wrapper = mount(BImg, {
      props: {left: true},
    })
    expect(wrapper.classes()).toContain('float-start')
    await wrapper.setProps({left: false})
    expect(wrapper.classes()).not.toContain('float-start')

    wrapper.unmount()
  })

  it('has class float-end if prop right', async () => {
    const wrapper = mount(BImg, {
      props: {right: true},
    })
    expect(wrapper.classes()).toContain('float-end')
    await wrapper.setProps({right: false})
    expect(wrapper.classes()).not.toContain('float-end')

    wrapper.unmount()
  })

  it('has class mx-auto if prop center', async () => {
    const wrapper = mount(BImg, {
      props: {center: true},
    })
    expect(wrapper.classes()).toContain('mx-auto')
    await wrapper.setProps({center: false})
    expect(wrapper.classes()).not.toContain('mx-auto')

    wrapper.unmount()
  })

  it('has class float-start takes priority over prop right/center', async () => {
    const wrapper = mount(BImg, {
      props: {left: true, right: true, center: true},
    })
    expect(wrapper.classes()).toContain('float-start')
    await wrapper.setProps({left: false})
    expect(wrapper.classes()).toContain('float-end')

    wrapper.unmount()
  })

  it('has class float-end takes priority over prop center', async () => {
    const wrapper = mount(BImg, {
      props: {right: true, center: true},
    })
    expect(wrapper.classes()).toContain('float-end')
    await wrapper.setProps({right: false})
    expect(wrapper.classes()).toContain('mx-auto')

    wrapper.unmount()
  })

  it('does not have any alignment classes when all props are false', () => {
    const wrapper = mount(BImg, {
      props: {right: false, center: false, left: false},
    })
    expect(wrapper.classes()).not.toContain('float-start')
    expect(wrapper.classes()).not.toContain('float-end')
    expect(wrapper.classes()).not.toContain('mx-auto')

    wrapper.unmount()
  })

  // TODO requires testing of attributes existing on img
})
