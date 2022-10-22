import {enableAutoUnmount, mount} from '@vue/test-utils'
import {waitRAF} from '../../../tests/utils'
import {afterEach, describe, expect, it} from 'vitest'
import BToast from './BToast.vue'
import {nextTick} from 'vue'

describe('toast', () => {
  enableAutoUnmount(afterEach)

  it('contains static class b-toast', () => {
    const wrapper = mount(BToast)
    expect(wrapper.classes()).toContain('b-toast')
  })

  it('tag is div', () => {
    const wrapper = mount(BToast)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('child div with toast class exists', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
    const $toast = wrapper.find('.toast')
    expect($toast.exists()).toBe(true)
  })

  it('child element is tag div', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
    const $toast = wrapper.get('.toast')
    expect($toast.element.tagName).toBe('DIV')
  })

  it('child div has static class toast', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
    const $toast = wrapper.get('.toast')
    // Not sure why this is a test, considering it targets whoever has class toast
    expect($toast.classes()).toContain('toast')
  })

  it('child div has child whos class is toast-header', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
    const $toast = wrapper.get('.toast')
    const $toastHeader = $toast.find('.toast-header')
    expect($toastHeader.exists()).toBe(true)
  })

  it('child div whos child has toast-header has element strong', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
    const $toast = wrapper.get('.toast')
    const $toastHeader = $toast.get('.toast-header')
    const $strong = $toastHeader.find('strong')
    expect($strong.exists()).toBe(true)
  })

  it('child divs child header child strong renders text of prop title', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
    const $toast = wrapper.get('.toast')
    const $toastHeader = $toast.get('.toast-header')
    const $strong = $toastHeader.get('strong')
    expect($strong.text()).toBe('Test')
  })

  it('child divs child header child strong has static class me-auto', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
    const $toast = wrapper.get('.toast')
    const $toastHeader = $toast.get('.toast-header')
    const $strong = $toastHeader.get('strong')
    expect($strong.classes()).toContain('me-auto')
  })

  it('child div whos child has toast-header has element button', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
    const $toast = wrapper.get('.toast')
    const $toastHeader = $toast.get('.toast-header')
    const $button = $toastHeader.find('button')
    expect($button.exists()).toBe(true)
  })

  it('child divs child header child button has static class btn-close', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
    const $toast = wrapper.get('.toast')
    const $toastHeader = $toast.get('.toast-header')
    const $button = $toastHeader.find('button')
    expect($button.classes()).toContain('btn-close')
  })

  it('child div has element with class toast-body', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
    const $toast = wrapper.get('.toast')
    const $body = $toast.find('.toast-body')
    expect($body.exists()).toBe(true)
  })

  it('child div child whos class is toast-body is tag div', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
    const $toast = wrapper.get('.toast')
    const $body = $toast.get('.toast-body')
    expect($body.element.tagName).toBe('DIV')
  })

  it('child div child whos class is toast-body has classes length of 1', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
    const $toast = wrapper.get('.toast')
    const $body = $toast.get('.toast-body')
    expect($body.classes().length).toBe(1)
  })

  it('child div child whos class is toast-body div renders text of prop body', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    await nextTick()
    await waitRAF()
    await nextTick()
    await waitRAF()
    const $toast = wrapper.get('.toast')
    const $body = $toast.get('.toast-body')
    expect($body.text()).toEqual('Test Body')
  })

  it('emits destroyed when component is unmounted', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body'},
    })
    wrapper.unmount()
    expect(wrapper.emitted()).toHaveProperty('destroyed')
  })

  it('destroyed emit gives value prop id', async () => {
    const wrapper = mount(BToast, {
      props: {modelValue: true, title: 'Test', body: 'Test Body', id: 'foobar'},
    })
    wrapper.unmount()
    const $emitted = wrapper.emitted('destroyed') ?? []
    expect($emitted[0][0]).toBe('foobar')
  })

  // TODO test when emits to update:modelValue
})
