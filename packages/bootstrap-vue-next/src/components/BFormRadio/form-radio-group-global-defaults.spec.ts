import {afterEach, beforeEach, describe, expect, it} from 'vitest'
import {createBootstrap} from '../../plugins/createBootstrap'
import {mount} from '@vue/test-utils'
import BFormRadioGroup from './BFormRadioGroup.vue'
import type {App} from 'vue'

describe('BFormRadioGroup global defaults', () => {
  let app: App<Element>

  beforeEach(() => {
    app = {
      use: () => app,
    } as unknown as App<Element>
  })

  afterEach(() => {
    app = null as unknown as App<Element>
  })

  describe('buttonVariant', () => {
    it('uses default "secondary" when no global defaults set', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
          buttons: true,
        },
      })
      const buttonGroup = wrapper.find('.btn-group')
      expect(buttonGroup.exists()).toBe(true)
      const button = wrapper.find('.btn')
      expect(button.classes()).toContain('btn-secondary')
    })

    it('applies global.buttonVariant when set', () => {
      const plugin = createBootstrap({
        global: {
          buttonVariant: 'primary',
        },
      })

      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
          buttons: true,
        },
        global: {
          plugins: [plugin],
        },
      })

      const button = wrapper.find('.btn')
      expect(button.classes()).toContain('btn-primary')
      expect(button.classes()).not.toContain('btn-secondary')
    })

    it('applies component-level defaults over global defaults', () => {
      const plugin = createBootstrap({
        global: {
          buttonVariant: 'primary',
        },
        BFormRadioGroup: {
          buttonVariant: 'danger',
        },
      })

      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
          buttons: true,
        },
        global: {
          plugins: [plugin],
        },
      })

      const button = wrapper.find('.btn')
      expect(button.classes()).toContain('btn-danger')
      expect(button.classes()).not.toContain('btn-primary')
    })

    it('applies explicit prop over all defaults', () => {
      const plugin = createBootstrap({
        global: {
          buttonVariant: 'primary',
        },
        BFormRadioGroup: {
          buttonVariant: 'danger',
        },
      })

      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
          buttons: true,
          buttonVariant: 'success',
        },
        global: {
          plugins: [plugin],
        },
      })

      const button = wrapper.find('.btn')
      expect(button.classes()).toContain('btn-success')
      expect(button.classes()).not.toContain('btn-danger')
      expect(button.classes()).not.toContain('btn-primary')
    })
  })

  describe('size', () => {
    it('uses default "md" when no global defaults set', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
          buttons: true,
        },
      })
      const buttonGroup = wrapper.find('.btn-group')
      expect(buttonGroup.exists()).toBe(true)
      // Default size 'md' does not add a class (btn-group is standard size)
      expect(buttonGroup.classes()).not.toContain('btn-group-sm')
      expect(buttonGroup.classes()).not.toContain('btn-group-lg')
    })

    it('applies global.size when set', () => {
      const plugin = createBootstrap({
        global: {
          size: 'lg',
        },
      })

      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
          buttons: true,
        },
        global: {
          plugins: [plugin],
        },
      })

      const buttonGroup = wrapper.find('.btn-group')
      expect(buttonGroup.classes()).toContain('btn-group-lg')
    })

    it('applies component-level defaults over global defaults', () => {
      const plugin = createBootstrap({
        global: {
          size: 'lg',
        },
        BFormRadioGroup: {
          size: 'sm',
        },
      })

      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
          buttons: true,
        },
        global: {
          plugins: [plugin],
        },
      })

      const buttonGroup = wrapper.find('.btn-group')
      expect(buttonGroup.classes()).toContain('btn-group-sm')
      expect(buttonGroup.classes()).not.toContain('btn-group-lg')
    })

    it('applies explicit prop over all defaults', () => {
      const plugin = createBootstrap({
        global: {
          size: 'lg',
        },
        BFormRadioGroup: {
          size: 'sm',
        },
      })

      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
          buttons: true,
          size: 'lg',
        },
        global: {
          plugins: [plugin],
        },
      })

      const buttonGroup = wrapper.find('.btn-group')
      expect(buttonGroup.classes()).toContain('btn-group-lg')
      expect(buttonGroup.classes()).not.toContain('btn-group-sm')
    })
  })

  describe('state', () => {
    it('uses default null when no global defaults set', () => {
      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
        },
      })
      const radios = wrapper.findAll('.form-check')
      expect(radios.length).toBe(1)
      const input = wrapper.find('input')
      // No validation classes when state is null
      expect(input.classes()).not.toContain('is-valid')
      expect(input.classes()).not.toContain('is-invalid')
    })

    it('applies global.state when set to true', () => {
      const plugin = createBootstrap({
        global: {
          state: true,
        },
      })

      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
        },
        global: {
          plugins: [plugin],
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('is-valid')
      expect(input.classes()).not.toContain('is-invalid')
    })

    it('applies global.state when set to false', () => {
      const plugin = createBootstrap({
        global: {
          state: false,
        },
      })

      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
        },
        global: {
          plugins: [plugin],
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('is-invalid')
      expect(input.classes()).not.toContain('is-valid')
    })

    it('applies component-level defaults over global defaults', () => {
      const plugin = createBootstrap({
        global: {
          state: true,
        },
        BFormRadioGroup: {
          state: false,
        },
      })

      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
        },
        global: {
          plugins: [plugin],
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('is-invalid')
      expect(input.classes()).not.toContain('is-valid')
    })

    it('applies explicit prop over all defaults', () => {
      const plugin = createBootstrap({
        global: {
          state: false,
        },
        BFormRadioGroup: {
          state: false,
        },
      })

      const wrapper = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
          state: true,
        },
        global: {
          plugins: [plugin],
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('is-valid')
      expect(input.classes()).not.toContain('is-invalid')
    })
  })

  describe('precedence order', () => {
    it('follows correct precedence: explicit prop > component defaults > global defaults > hardcoded default', () => {
      // Test all three props at once with full precedence chain
      const plugin = createBootstrap({
        global: {
          buttonVariant: 'primary',
          size: 'lg',
          state: true,
        },
        BFormRadioGroup: {
          buttonVariant: 'danger',
          size: 'sm',
          state: false,
        },
      })

      // No explicit props - should use component defaults
      const wrapper1 = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
          buttons: true,
        },
        global: {
          plugins: [plugin],
        },
      })

      expect(wrapper1.find('.btn').classes()).toContain('btn-danger')
      expect(wrapper1.find('.btn-group').classes()).toContain('btn-group-sm')
      expect(wrapper1.find('input').classes()).toContain('is-invalid')

      // With explicit props - should override everything
      const wrapper2 = mount(BFormRadioGroup, {
        props: {
          options: [{text: 'A', value: 1}],
          buttons: true,
          buttonVariant: 'success',
          size: 'lg',
          state: true,
        },
        global: {
          plugins: [plugin],
        },
      })

      expect(wrapper2.find('.btn').classes()).toContain('btn-success')
      expect(wrapper2.find('.btn-group').classes()).toContain('btn-group-lg')
      expect(wrapper2.find('input').classes()).toContain('is-valid')
    })
  })
})
