import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BAlert from './BAlert.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BButton from '../BButton/BButton.vue'
import BLink from '../BLink/BLink.vue'
import BProgress from '../BProgress/BProgress.vue'
import {Transition} from 'vue'

describe('alert', () => {
  enableAutoUnmount(afterEach)

  it('has Transition', () => {
    const wrapper = mount(BAlert)
    const $transition = wrapper.findComponent(Transition)
    expect($transition.exists()).toBe(true)
  })

  it('there is a hidden div by default', () => {
    const wrapper = mount(BAlert)
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
    expect($div.attributes().style).toContain('display: none;')
  })

  it('there is a div when modelValue true', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    await wrapper.vm.$nextTick()
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
    expect($div.attributes().style).toBeUndefined()
  })

  it('there is a nested div when modelValue number > 0', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: 5},
    })
    const $div = wrapper.find('div')
    expect($div.exists()).toBe(true)
    expect($div.attributes().style).toBeUndefined()
  })

  it('nested div has static class alert', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('alert')
  })

  it('nested div has attr role alert', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    await wrapper.vm.$nextTick()
    const $div = wrapper.get('div')
    expect($div.attributes('role')).toBe('alert')
  })

  it('nested div has attr aria-live assertive', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    await wrapper.vm.$nextTick()
    const $div = wrapper.get('div')
    expect($div.attributes('aria-live')).toBe('assertive')
  })
  it('nested div has attr role status when isStatus is true', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, isStatus: true},
    })
    await wrapper.vm.$nextTick()
    const $div = wrapper.get('div')
    expect($div.attributes('role')).toBe('status')
  })

  it('nested div has attr aria-live polite when isStatus is true', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, isStatus: true},
    })
    await wrapper.vm.$nextTick()
    const $div = wrapper.get('div')
    expect($div.attributes('aria-live')).toBe('polite')
  })

  it('nested div has static attr aria-atomic true', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    await wrapper.vm.$nextTick()
    const $div = wrapper.get('div')
    expect($div.attributes('aria-atomic')).toBe('true')
  })

  it('nested div has class alert-info by default', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('alert-info')
  })

  it('nested div has class alert-{type} when prop variant', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, variant: 'danger'},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('alert-danger')
  })

  it('nested div has class alert-dismissible when prop dismissible', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('alert-dismissible')
  })

  it('nested div does not have class alert-dismissible when not prop dismissible', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: false},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).not.toContain('alert-dismissible')
  })

  it('nested div renders default slot', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
      slots: {default: 'foobar'},
    })
    expect(wrapper.text()).toBe('foobar')
  })

  it('nested div has BCloseButton by default when prop dismissible', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.findComponent(BCloseButton)
    expect($bclosebutton.exists()).toBe(true)
  })

  it('nested div does not have BCloseButton when not prop dismissible', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: false},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.findComponent(BCloseButton)
    expect($bclosebutton.exists()).toBe(false)
  })

  it('nested div does not have BCloseButton when prop dismissible but also slot close', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
      slots: {close: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.findComponent(BCloseButton)
    expect($bclosebutton.exists()).toBe(false)
  })

  it('nested div does not have BCloseButton when prop dismissible but also prop closeContent', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true, closeContent: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.findComponent(BCloseButton)
    expect($bclosebutton.exists()).toBe(false)
  })

  it('nested div has BButton when prop dismissible but also prop closeContent', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true, closeContent: 'foobar'},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.findComponent(BButton)
    expect($bbutton.exists()).toBe(true)
  })

  it('nested div has BButton when prop dismissible but also slot close', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
      slots: {close: 'foobar', default: 'content'},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.findComponent(BButton)
    expect($bbutton.exists()).toBe(true)
  })

  it('nested div does not have BButton when prop dismissible and nothing else', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.findComponent(BButton)
    expect($bbutton.exists()).toBe(false)
  })

  it('nested div BButton renders slot close', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
      slots: {close: 'foobar', default: 'content'},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.getComponent(BButton)
    expect($bbutton.text()).toBe('foobar')
  })

  it('nested div BCloseButton has aria-label to be Close by default', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    expect($bclosebutton.attributes('aria-label')).toBe('Close')
  })

  it('nested div BCloseButton has aria-label to be prop closeLabel', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true, closeLabel: 'foobar'},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    expect($bclosebutton.attributes('aria-label')).toBe('foobar')
  })

  // BCloseButton variant
  it('nested div BCloseButton emits update:modelValue when clicked when modelValue boolean', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true, noAnimation: true},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    await $bclosebutton.trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('nested div BCloseButton clicked update:modelValue emits arg false when modelValue boolean', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true, noAnimation: true},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    await $bclosebutton.trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))

    const emitted = wrapper.emitted('update:modelValue') ?? []
    expect(emitted[0][0]).toBe(false)
  })

  it('nested div BCloseButton emits update:modelValue when clicked when modelValue number > 0', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: 5, dismissible: true},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    await $bclosebutton.trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('nested div BCloseButton clicked update:modelValue emits arg 0 when modelValue number > 0', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: 5, dismissible: true},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    await $bclosebutton.trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    const emitted = wrapper.emitted('update:modelValue') ?? []
    expect(emitted[0][0]).toBe(0)
  })

  it('nested div BCloseButton clicked emits close', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: 5, dismissible: true},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    await $bclosebutton.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('nested div BCloseButton has class when prop closeClass', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true, closeClass: 'foobar'},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    expect($bclosebutton.classes()).toContain('foobar')
  })

  it('nested div BCloseButton has no class when no slot close', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    expect($bclosebutton.classes()).not.toContain('btn-close-custom')
  })

  it('nested div BCloseButton has no variant class when closeVariant', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true, closeVariant: 'warning'},
      slots: {default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bclosebutton = $div.getComponent(BCloseButton)
    expect($bclosebutton.classes()).not.toContain('btn-warning')
  })
  // BButton variant
  it('nested div BButton emits update:modelValue when clicked when modelValue boolean', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
      slots: {close: 'foobar', default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.getComponent(BButton)
    await $bbutton.trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('nested div BButton clicked update:modelValue emits arg false when modelValue boolean', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
      slots: {close: 'foobar', default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.getComponent(BButton)
    await $bbutton.trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    const emitted = wrapper.emitted('update:modelValue') ?? []
    expect(emitted[0][0]).toBe(false)
  })

  it('nested div BButton emits update:modelValue when clicked when modelValue number > 0', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: 5, dismissible: true},
      slots: {close: 'foobar', default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.getComponent(BButton)
    await $bbutton.trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('nested div BButton clicked update:modelValue emits arg 0 when modelValue number > 0', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: 5, dismissible: true},
      slots: {close: 'foobar', default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.getComponent(BButton)
    await $bbutton.trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    const emitted = wrapper.emitted('update:modelValue') ?? []
    expect(emitted[0][0]).toBe(0)
  })

  it('nested div BButton clicked emits close', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: 5, dismissible: true},
      slots: {close: 'foobar', default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.getComponent(BButton)
    await $bbutton.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('nested div BButton has class when prop closeClass', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true, closeClass: 'foobar'},
      slots: {close: 'foobar', default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.getComponent(BButton)
    expect($bbutton.classes()).toContain('foobar')
  })

  it('nested div BButton has class when slot close', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
      slots: {close: 'foobar', default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.getComponent(BButton)
    expect($bbutton.classes()).toContain('btn-close-custom')
  })

  it('nested div BButton has variant class when closeVariant', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true, closeVariant: 'warning'},
      slots: {close: 'foobar', default: 'foobar'},
    })
    const $div = wrapper.get('div')
    const $bbutton = $div.getComponent(BButton)
    expect($bbutton.classes()).toContain('btn-warning')
  })

  // id prop
  it('nested div has id when prop id is set', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, id: 'my-alert'},
    })
    const $div = wrapper.get('div')
    expect($div.attributes('id')).toBe('my-alert')
  })

  it('nested div does not have explicit id when prop id is not set', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    const $div = wrapper.get('div')
    // When id is not provided, it should not be set (or auto-generated)
    expect($div.attributes('id')).toBeUndefined()
  })

  // alertClass prop
  it('nested div has alertClass when prop alertClass is set', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, alertClass: 'custom-alert-class'},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('custom-alert-class')
  })

  it('nested div does not have extra class when alertClass not set', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('alert')
    expect($div.classes()).toContain('alert-info')
  })

  // tabindex
  it('nested div has tabindex 0', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    const $div = wrapper.get('div')
    expect($div.attributes('tabindex')).toBe('0')
  })

  // variant null
  it('nested div does not have alert-variant class when variant is null', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, variant: null},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('alert')
    expect($div.classes()).not.toContain('alert-null')
    expect($div.classes()).not.toContain('alert-info')
  })

  // noFade prop
  it('nested div does not have class fade when prop noFade is true', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, noFade: true},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).not.toContain('fade')
  })

  // noAnimation prop
  it('nested div does not have class fade when prop noAnimation is true', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, noAnimation: true},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).not.toContain('fade')
  })

  // body prop
  it('renders body prop text when no default slot', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, body: 'Alert body text'},
    })
    expect(wrapper.text()).toContain('Alert body text')
  })

  it('default slot overrides body prop', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, body: 'body prop'},
      slots: {default: 'slot content'},
    })
    expect(wrapper.text()).toContain('slot content')
    expect(wrapper.text()).not.toContain('body prop')
  })

  // bodyClass prop
  it('body element has bodyClass when prop bodyClass is set', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, bodyClass: 'custom-body'},
      slots: {default: 'content'},
    })
    const $body = wrapper.find('.alert-body')
    expect($body.exists()).toBe(true)
    expect($body.classes()).toContain('custom-body')
  })

  // alert-body class
  it('body element has static class alert-body', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
      slots: {default: 'content'},
    })
    const $body = wrapper.find('.alert-body')
    expect($body.exists()).toBe(true)
  })

  // title prop
  it('renders title when prop title is set', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, title: 'Alert Title'},
      slots: {default: 'content'},
    })
    expect(wrapper.text()).toContain('Alert Title')
  })

  it('title header has class alert-heading', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, title: 'Alert Title'},
      slots: {default: 'content'},
    })
    const $heading = wrapper.find('.alert-heading')
    expect($heading.exists()).toBe(true)
  })

  // title slot
  it('renders title slot content', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
      slots: {title: 'Custom Title', default: 'content'},
    })
    expect(wrapper.text()).toContain('Custom Title')
  })

  it('title slot overrides title prop', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, title: 'Prop Title'},
      slots: {title: 'Slot Title', default: 'content'},
    })
    expect(wrapper.text()).toContain('Slot Title')
    expect(wrapper.text()).not.toContain('Prop Title')
  })

  // headerTag prop
  it('title header uses headerTag prop', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, title: 'Title', headerTag: 'h4'},
      slots: {default: 'content'},
    })
    const $heading = wrapper.find('h4.alert-heading')
    expect($heading.exists()).toBe(true)
  })

  it('title header defaults to div tag', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, title: 'Title'},
      slots: {default: 'content'},
    })
    const $heading = wrapper.find('div.alert-heading')
    expect($heading.exists()).toBe(true)
  })

  // headerClass prop
  it('title header has headerClass when prop headerClass is set', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, title: 'Title', headerClass: 'custom-header'},
      slots: {default: 'content'},
    })
    const $heading = wrapper.find('.alert-heading')
    expect($heading.classes()).toContain('custom-header')
  })

  // closeContent prop rendering
  it('renders closeContent text in BButton', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true, closeContent: 'X'},
      slots: {default: 'content'},
    })
    const $bbutton = wrapper.getComponent(BButton)
    expect($bbutton.text()).toBe('X')
  })

  // close button in header (with title)
  it('shows close button in header when both title and dismissible', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, title: 'Title', dismissible: true},
      slots: {default: 'content'},
    })
    const $heading = wrapper.find('.alert-heading')
    const $closeBtn = $heading.findComponent(BCloseButton)
    expect($closeBtn.exists()).toBe(true)
  })

  it('shows BButton close in header when title, dismissible, and close slot', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, title: 'Title', dismissible: true},
      slots: {default: 'content', close: 'close text'},
    })
    const $heading = wrapper.find('.alert-heading')
    const $btn = $heading.findComponent(BButton)
    expect($btn.exists()).toBe(true)
    expect($btn.text()).toBe('close text')
  })

  it('close button in header emits update:modelValue when clicked', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, title: 'Title', dismissible: true, noAnimation: true},
      slots: {default: 'content'},
    })
    const $heading = wrapper.find('.alert-heading')
    const $closeBtn = $heading.getComponent(BCloseButton)
    await $closeBtn.trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 30))
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  // BProgress
  it('does not render BProgress when modelValue is boolean', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, progressProps: {}},
      slots: {default: 'content'},
    })
    const $progress = wrapper.findComponent(BProgress)
    expect($progress.exists()).toBe(false)
  })

  it('renders BProgress when modelValue is number and progressProps provided', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: 5000, progressProps: {}},
      slots: {default: 'content'},
    })
    const $progress = wrapper.findComponent(BProgress)
    expect($progress.exists()).toBe(true)
  })

  it('does not render BProgress when modelValue is number but no progressProps', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: 5000},
      slots: {default: 'content'},
    })
    const $progress = wrapper.findComponent(BProgress)
    expect($progress.exists()).toBe(false)
  })

  // close-countdown emit
  it('emits close-countdown', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: 5000},
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()).toHaveProperty('close-countdown')
  })

  // show prop
  it('has show prop available', () => {
    const wrapper = mount(BAlert, {
      props: {show: true},
    })
    expect(wrapper.vm).toBeDefined()
  })

  // visible prop
  it('has visible prop available', () => {
    const wrapper = mount(BAlert, {
      props: {visible: true},
    })
    expect(wrapper.vm).toBeDefined()
  })

  // exposed methods
  it('exposes show method', () => {
    const wrapper = mount(BAlert)
    expect(wrapper.vm.show).toBeDefined()
    expect(typeof wrapper.vm.show).toBe('function')
  })

  it('exposes hide method', () => {
    const wrapper = mount(BAlert)
    expect(wrapper.vm.hide).toBeDefined()
    expect(typeof wrapper.vm.hide).toBe('function')
  })

  it('exposes toggle method', () => {
    const wrapper = mount(BAlert)
    expect(wrapper.vm.toggle).toBeDefined()
    expect(typeof wrapper.vm.toggle).toBe('function')
  })

  it('exposes pause method', () => {
    const wrapper = mount(BAlert)
    expect(wrapper.vm.pause).toBeDefined()
    expect(typeof wrapper.vm.pause).toBe('function')
  })

  it('exposes restart method', () => {
    const wrapper = mount(BAlert)
    expect(wrapper.vm.restart).toBeDefined()
    expect(typeof wrapper.vm.restart).toBe('function')
  })

  it('exposes resume method', () => {
    const wrapper = mount(BAlert)
    expect(wrapper.vm.resume).toBeDefined()
    expect(typeof wrapper.vm.resume).toBe('function')
  })

  it('exposes stop method', () => {
    const wrapper = mount(BAlert)
    expect(wrapper.vm.stop).toBeDefined()
    expect(typeof wrapper.vm.stop).toBe('function')
  })

  // d-flex wrapper around body content
  it('body content is wrapped in d-flex div', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
      slots: {default: 'content'},
    })
    const $flex = wrapper.find('.d-flex')
    expect($flex.exists()).toBe(true)
  })

  // alert-dismissible class not added when close slot or closeContent is provided
  it('does not have alert-dismissible class when dismissible with close slot', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true},
      slots: {default: 'content', close: 'X'},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).not.toContain('alert-dismissible')
  })

  it('does not have alert-dismissible class when dismissible with closeContent', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, dismissible: true, closeContent: 'X'},
      slots: {default: 'content'},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).not.toContain('alert-dismissible')
  })

  // show class behavior
  it('nested div has class show when visible', async () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
    })
    await wrapper.vm.$nextTick()
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('show')
  })

  // BLink rendering
  it('renders BLink when href prop is provided', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, href: 'https://example.com'},
      slots: {default: 'link content'},
    })
    const $link = wrapper.findComponent(BLink)
    expect($link.exists()).toBe(true)
  })

  it('renders div instead of BLink when no href or to prop', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true},
      slots: {default: 'content'},
    })
    const $link = wrapper.findComponent(BLink)
    expect($link.exists()).toBe(false)
    const $body = wrapper.find('.alert-body')
    expect($body.element.tagName).toBe('DIV')
  })

  // Multiple variants
  it('nested div has class alert-success when variant is success', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, variant: 'success'},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('alert-success')
  })

  it('nested div has class alert-warning when variant is warning', () => {
    const wrapper = mount(BAlert, {
      props: {modelValue: true, variant: 'warning'},
    })
    const $div = wrapper.get('div')
    expect($div.classes()).toContain('alert-warning')
  })
})
