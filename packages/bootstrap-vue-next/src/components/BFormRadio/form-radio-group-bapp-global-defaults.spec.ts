import {describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'
import {defineComponent, h} from 'vue'
import BFormRadioGroup from './BFormRadioGroup.vue'
import BApp from '../BApp/BApp.vue'

describe('BFormRadioGroup with BApp global defaults', () => {
  describe('buttonVariant', () => {
    it('applies global.buttonVariant from BApp when set', () => {
      // @ts-expect-error - defineComponent with template doesn't satisfy strict slot typing
      const TestComponent = defineComponent({
        components: {BFormRadioGroup},
        setup() {
          return {
            options: [{text: 'A', value: 1}],
          }
        },
        template: '<BFormRadioGroup :options="options" buttons />',
      })

      const wrapper = mount(BApp, {
        props: {
          defaults: {
            global: {
              buttonVariant: 'primary',
            },
          },
        },
        slots: {
          default: () => h(TestComponent),
        },
      })

      const button = wrapper.find('.btn')
      expect(button.classes()).toContain('btn-primary')
      expect(button.classes()).not.toContain('btn-secondary')
    })

    it('applies component-level defaults over global defaults in BApp', () => {
      // @ts-expect-error - defineComponent with template doesn't satisfy strict slot typing
      const TestComponent = defineComponent({
        components: {BFormRadioGroup},
        setup() {
          return {
            options: [{text: 'A', value: 1}],
          }
        },
        template: '<BFormRadioGroup :options="options" buttons />',
      })

      const wrapper = mount(BApp, {
        props: {
          defaults: {
            global: {
              buttonVariant: 'primary',
            },
            BFormRadioGroup: {
              buttonVariant: 'danger',
            },
          },
        },
        slots: {
          default: () => h(TestComponent),
        },
      })

      const button = wrapper.find('.btn')
      expect(button.classes()).toContain('btn-danger')
      expect(button.classes()).not.toContain('btn-primary')
      expect(button.classes()).not.toContain('btn-secondary')
    })

    it('explicit prop overrides BApp global and component defaults', () => {
      // @ts-expect-error - defineComponent with template doesn't satisfy strict slot typing
      const TestComponent = defineComponent({
        components: {BFormRadioGroup},
        setup() {
          return {
            options: [{text: 'A', value: 1}],
          }
        },
        template: '<BFormRadioGroup :options="options" buttons button-variant="success" />',
      })

      const wrapper = mount(BApp, {
        props: {
          defaults: {
            global: {
              buttonVariant: 'primary',
            },
            BFormRadioGroup: {
              buttonVariant: 'danger',
            },
          },
        },
        slots: {
          default: () => h(TestComponent),
        },
      })

      const button = wrapper.find('.btn')
      expect(button.classes()).toContain('btn-success')
      expect(button.classes()).not.toContain('btn-danger')
      expect(button.classes()).not.toContain('btn-primary')
      expect(button.classes()).not.toContain('btn-secondary')
    })
  })

  describe('size', () => {
    it('applies global.size from BApp when set', () => {
      // @ts-expect-error - defineComponent with template doesn't satisfy strict slot typing
      const TestComponent = defineComponent({
        components: {BFormRadioGroup},
        setup() {
          return {
            options: [{text: 'A', value: 1}],
          }
        },
        template: '<BFormRadioGroup :options="options" buttons />',
      })

      const wrapper = mount(BApp, {
        props: {
          defaults: {
            global: {
              size: 'lg',
            },
          },
        },
        slots: {
          default: () => h(TestComponent),
        },
      })

      const buttonGroup = wrapper.find('.btn-group')
      expect(buttonGroup.classes()).toContain('btn-group-lg')
    })

    it('applies component-level size over global size in BApp', () => {
      // @ts-expect-error - defineComponent with template doesn't satisfy strict slot typing
      const TestComponent = defineComponent({
        components: {BFormRadioGroup},
        setup() {
          return {
            options: [{text: 'A', value: 1}],
          }
        },
        template: '<BFormRadioGroup :options="options" buttons />',
      })

      const wrapper = mount(BApp, {
        props: {
          defaults: {
            global: {
              size: 'lg',
            },
            BFormRadioGroup: {
              size: 'sm',
            },
          },
        },
        slots: {
          default: () => h(TestComponent),
        },
      })

      const buttonGroup = wrapper.find('.btn-group')
      expect(buttonGroup.classes()).toContain('btn-group-sm')
      expect(buttonGroup.classes()).not.toContain('btn-group-lg')
    })
  })

  describe('state', () => {
    it('applies global.state from BApp when set', () => {
      // @ts-expect-error - defineComponent with template doesn't satisfy strict slot typing
      const TestComponent = defineComponent({
        components: {BFormRadioGroup},
        setup() {
          return {
            options: [{text: 'A', value: 1}],
          }
        },
        template: '<BFormRadioGroup :options="options" />',
      })

      const wrapper = mount(BApp, {
        props: {
          defaults: {
            global: {
              state: true,
            },
          },
        },
        slots: {
          default: () => h(TestComponent),
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('is-valid')
    })

    it('applies component-level state over global state in BApp', () => {
      // @ts-expect-error - defineComponent with template doesn't satisfy strict slot typing
      const TestComponent = defineComponent({
        components: {BFormRadioGroup},
        setup() {
          return {
            options: [{text: 'A', value: 1}],
          }
        },
        template: '<BFormRadioGroup :options="options" />',
      })

      const wrapper = mount(BApp, {
        props: {
          defaults: {
            global: {
              state: true,
            },
            BFormRadioGroup: {
              state: false,
            },
          },
        },
        slots: {
          default: () => h(TestComponent),
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('is-invalid')
      expect(input.classes()).not.toContain('is-valid')
    })
  })

  describe('combined defaults', () => {
    it('applies multiple global defaults from BApp together (button style)', () => {
      // @ts-expect-error - defineComponent with template doesn't satisfy strict slot typing
      const TestComponent = defineComponent({
        components: {BFormRadioGroup},
        setup() {
          return {
            options: [{text: 'A', value: 1}],
          }
        },
        template: '<BFormRadioGroup :options="options" buttons />',
      })

      const wrapper = mount(BApp, {
        props: {
          defaults: {
            global: {
              buttonVariant: 'warning',
              size: 'lg',
            },
          },
        },
        slots: {
          default: () => h(TestComponent),
        },
      })

      const button = wrapper.find('.btn')
      expect(button.classes()).toContain('btn-warning')

      const buttonGroup = wrapper.find('.btn-group')
      expect(buttonGroup.classes()).toContain('btn-group-lg')
    })

    it('applies multiple global defaults from BApp together (non-button style)', () => {
      // @ts-expect-error - defineComponent with template doesn't satisfy strict slot typing
      const TestComponent = defineComponent({
        components: {BFormRadioGroup},
        setup() {
          return {
            options: [{text: 'A', value: 1}],
          }
        },
        template: '<BFormRadioGroup :options="options" />',
      })

      const wrapper = mount(BApp, {
        props: {
          defaults: {
            global: {
              state: true,
            },
          },
        },
        slots: {
          default: () => h(TestComponent),
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('is-valid')
    })

    it('allows partial override of BApp global defaults with component defaults', () => {
      // @ts-expect-error - defineComponent with template doesn't satisfy strict slot typing
      const TestComponent = defineComponent({
        components: {BFormRadioGroup},
        setup() {
          return {
            options: [{text: 'A', value: 1}],
          }
        },
        template: '<BFormRadioGroup :options="options" buttons />',
      })

      const wrapper = mount(BApp, {
        props: {
          defaults: {
            global: {
              buttonVariant: 'primary',
              size: 'lg',
            },
            BFormRadioGroup: {
              buttonVariant: 'danger', // Override only buttonVariant
            },
          },
        },
        slots: {
          default: () => h(TestComponent),
        },
      })

      const button = wrapper.find('.btn')
      expect(button.classes()).toContain('btn-danger') // Component default

      const buttonGroup = wrapper.find('.btn-group')
      expect(buttonGroup.classes()).toContain('btn-group-lg') // Global default
    })
  })
})
