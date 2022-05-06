import {mount} from '@vue/test-utils'
import {waitNT, waitRAF} from '../../../tests/utils'
import {describe, expect, it, vitest} from 'vitest'

import BToast from './BToast.vue'

describe('b-Toast', () => {
  it('has expected structure', async () => {
    const wrapper = mount(BToast, {
      props: {
        modelValue: true,
        title: 'Test',
        body: 'Test Body',
      },
    })

    expect(wrapper.attributes('class')).toBe('b-toast')
    expect(wrapper).toBeDefined()
    expect(wrapper.element.tagName).toBe('DIV')

    await waitNT(wrapper.vm)
    await waitRAF()
    await waitNT(wrapper.vm)
    await waitRAF()

    expect(wrapper.find('.toast').exists()).toBe(true)
    const $toast = wrapper.find('.toast')
    expect($toast.element.tagName).toBe('DIV')
    expect($toast.classes()).toContain('toast')

    expect($toast.find('.toast-header').exists()).toBe(true)

    const $header = $toast.find('.toast-header')
    expect($header.find('strong').text()).toEqual('Test')
    expect($header.find('strong').classes()).toContain('me-auto')
    expect($header.find('button').exists()).toBe(true)
    expect($header.find('button').classes()).toContain('btn-close')

    expect($toast.find('.toast-body').exists()).toBe(true)
    const $body = $toast.find('.toast-body')
    expect($body.element.tagName).toBe('DIV')
    expect($body.classes().length).toBe(1)
    expect($body.text()).toEqual('Test Body')
  })
})
