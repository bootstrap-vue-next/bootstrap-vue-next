import {mount} from '@vue/test-utils'
import {waitNT, waitRAF} from '../../../tests/utils'
import {describe, expect, it} from 'vitest'

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
    const $toast = wrapper.get('.toast')
    expect($toast.element.tagName).toBe('DIV')
    expect($toast.classes()).toContain('toast')

    expect($toast.find('.toast-header').exists()).toBe(true)

    const $header = $toast.get('.toast-header')
    expect($header.get('strong').text()).toEqual('Test')
    expect($header.get('strong').classes()).toContain('me-auto')
    expect($header.find('button').exists()).toBe(true)
    expect($header.get('button').classes()).toContain('btn-close')

    expect($toast.find('.toast-body').exists()).toBe(true)
    const $body = $toast.get('.toast-body')
    expect($body.element.tagName).toBe('DIV')
    expect($body.classes().length).toBe(1)
    expect($body.text()).toEqual('Test Body')
  })
})
