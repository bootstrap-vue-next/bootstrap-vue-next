import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BModal from './BModal.vue'
import BTransition from './BTransition/BTransition.vue'

describe('modal', () => {
  enableAutoUnmount(afterEach)
  // Having issues getting the 'body' from the VDOM
  it('has body element', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
  })

  it('div has class modal', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('modal')
  })

  it('div has attr id to be prop id', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {id: 'foo'},
    })
    const $div = wrapper.get('div')
    expect($div.attributes('id')).toBe('foo')
  })

  it('div has attr id is defined by default', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.get('div')
    expect($div.attributes('id')).toBeDefined()
  })

  it('div has attr tabindex to be -1', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.get('div')
    expect($div.attributes('tabindex')).toBe('-1')
  })

  it('div has class from prop modalClass', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {modalClass: ['foo']},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('foo')
  })

  it('div has class fade when not prop noFade', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {noFade: false},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('fade')
  })

  it('div has class fade when prop noFade', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {noFade: true},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).not.toContain('fade')
  })

  it('div has class show when prop show', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {show: false},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).not.toContain('show')
  })

  it('div has attrs from attrs', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      attrs: {role: 'foo'},
    })
    const $div = wrapper.get('div')
    expect($div.attributes('role')).toBe('foo')
  })

  it('div has child div', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.find('div')
    expect($div2.exists()).toBe(true)
  })

  it('div child div has static class modal-dialog', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('modal-dialog')
  })

  it('div child div has class modal-fullscreen when prop fullscreen', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {fullscreen: true},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('modal-fullscreen')
  })

  it('div child div does not have class modal-fullscreen when not prop fullscreen', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {fullscreen: false},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).not.toContain('modal-fullscreen')
  })

  it('div child div has class modal-fullscreen-{type}-down when prop fullscreen is string', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {fullscreen: 'string'},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('modal-fullscreen-string-down')
  })

  it('div child div has class modal-{type} when prop size', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {size: 'sm'},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('modal-sm')
  })

  it('div child div has class modal-dialog-centered when prop centered', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {centered: true},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('modal-dialog-centered')
  })

  it('div child div does not have class modal-dialog-centered when not prop centered', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {centered: false},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).not.toContain('modal-dialog-centered')
  })

  it('div child div has class modal-dialog-scrollable when prop scrollable', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {scrollable: true},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).toContain('modal-dialog-scrollable')
  })

  it('div child div does not have class modal-dialog-scrollable when not prop scrollable', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {scrollable: false},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    expect($div2.classes()).not.toContain('modal-dialog-scrollable')
  })

  it('does not have element with class modal-backdrop when hideBackdrop is true', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {hideBackdrop: true},
    })
    const $div = wrapper.find('.modal-backdrop')
    expect($div.exists()).toBe(false)
  })

  it('has an element with class modal-backdrop by default', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.find('.modal-backdrop')
    expect($div.exists()).toBe(true)
  })

  it('element with class modal-backdrop is tag DIV', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.get('.modal-backdrop')
    expect($div.element.tagName).toBe('DIV')
  })

  it('element with class modal-backdrop has static class fade', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.get('.modal-backdrop')
    expect($div.classes()).toContain('fade')
  })

  it('element with class modal-backdrop has static class show', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.get('.modal-backdrop')
    expect($div.classes()).toContain('show')
  })

  it('element with class modal-backdrop text is empty', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.get('.modal-backdrop')
    expect($div.text()).toBe('')
  })

  it('second div has another div by default', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    const $div3 = $div2.find('div')
    expect($div3.exists()).toBe(true)
  })

  it('third nested div has static class modal-content', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    const $div3 = $div2.get('div')
    expect($div3.classes()).toContain('modal-content')
  })

  it('third nested div has class from prop contentClass', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {contentClass: ['foo']},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    const $div3 = $div2.get('div')
    expect($div3.classes()).toContain('foo')
  })

  it('second div has nested div when not prop lazy', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
      props: {lazy: false},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    const $div3 = $div2.find('div')
    expect($div3.exists()).toBe(true)
  })

  it('third nested div has another div', () => {
    const wrapper = mount(BModal, {
      global: {stubs: {teleport: true}},
    })
    const $div = wrapper.get('div')
    const $div2 = $div.get('div')
    const $div3 = $div2.find('div')
    expect($div3.exists()).toBe(true)
  })

  // Test isActive states

  // Test emit states
})
