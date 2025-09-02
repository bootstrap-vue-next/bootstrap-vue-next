import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, beforeEach, describe, expect, it} from 'vitest'
import BOffcanvas from './BOffcanvas.vue'
import {createBootstrap} from '../../plugins'

describe('BOffcanvas headerAttrs', () => {
  enableAutoUnmount(afterEach)

  beforeEach(() => {
    const el = document.createElement('div')
    el.id = 'body-teleports'
    document.body.appendChild(el)
  })

  afterEach(() => {
    const el = document.getElementById('body-teleports')
    if (el) document.body.removeChild(el)
  })

  it('applies headerAttrs to header element', async () => {
    const wrapper = mount(BOffcanvas, {
      attachTo: document.body,
      props: {
        modelValue: false,
        teleportTo: '#body-teleports',
        headerAttrs: {
          'data-bs-theme': 'dark',
          'id': 'test-header',
        },
      },
      global: {plugins: [createBootstrap()]},
    })

    await wrapper.setProps({modelValue: true})

    const teleportContainer = document.getElementById('body-teleports')
    const header = teleportContainer?.querySelector('.offcanvas-header')
    expect(header).not.toBe(null)
    expect(header?.getAttribute('data-bs-theme')).toBe('dark')
    expect(header?.getAttribute('id')).toBe('test-header')
  })

  it('does not apply headerAttrs when headerAttrs is undefined', async () => {
    const wrapper = mount(BOffcanvas, {
      attachTo: document.body,
      props: {
        modelValue: false,
        teleportTo: '#body-teleports',
      },
      global: {plugins: [createBootstrap()]},
    })

    await wrapper.setProps({modelValue: true})

    const teleportContainer = document.getElementById('body-teleports')
    const header = teleportContainer?.querySelector('.offcanvas-header')
    expect(header).not.toBe(null)
    expect(header?.getAttribute('data-bs-theme')).toBe(null)
  })

  it('combines headerAttrs with existing headerClass', async () => {
    const wrapper = mount(BOffcanvas, {
      attachTo: document.body,
      props: {
        modelValue: false,
        teleportTo: '#body-teleports',
        headerClass: 'my-custom-class',
        headerAttrs: {
          'data-bs-theme': 'dark',
        },
      },
      global: {plugins: [createBootstrap()]},
    })

    await wrapper.setProps({modelValue: true})

    const teleportContainer = document.getElementById('body-teleports')
    const header = teleportContainer?.querySelector('.offcanvas-header')
    expect(header).not.toBe(null)
    expect(header?.classList.contains('offcanvas-header')).toBe(true)
    expect(header?.classList.contains('my-custom-class')).toBe(true)
    expect(header?.getAttribute('data-bs-theme')).toBe('dark')
  })

  it('does not render header when noHeader is true', async () => {
    const wrapper = mount(BOffcanvas, {
      attachTo: document.body,
      props: {
        modelValue: false,
        teleportTo: '#body-teleports',
        noHeader: true,
        headerAttrs: {
          'data-bs-theme': 'dark',
        },
      },
      global: {plugins: [createBootstrap()]},
    })

    await wrapper.setProps({modelValue: true})

    const teleportContainer = document.getElementById('body-teleports')
    const header = teleportContainer?.querySelector('.offcanvas-header')
    expect(header).toBe(null)
  })
})
