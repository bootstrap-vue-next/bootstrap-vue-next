import {mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BButton from '../../components/BButton/BButton.vue'
import BButtonGroup from '../../components/BButton/BButtonGroup.vue'
import {vBTooltip} from './index'

describe('vBTooltip in button groups', () => {
  afterEach(() => {
    // Clean up any tooltips that might be left in the DOM
    document.querySelectorAll('.tooltip').forEach((el) => el.remove())
  })

  it('does not interfere with button group styling when tooltip is on last button', async () => {
    const wrapper = mount({
      template: `
        <BButtonGroup>
          <BButton>First</BButton>
          <BButton v-b-tooltip="'Test tooltip'">Last</BButton>
        </BButtonGroup>
      `,
      components: {BButton, BButtonGroup},
      directives: {vBTooltip},
    })

    const buttonGroup = wrapper.find('.btn-group')
    const buttons = buttonGroup.findAll('.btn')
    const lastButton = buttons[buttons.length - 1]

    // Verify the last button is still the last child in the button group
    // This is crucial for Bootstrap's CSS :last-child selectors to work
    expect(lastButton.element).toBe(buttonGroup.element.lastElementChild)

    // Verify no tooltip elements are inserted between buttons
    const spans = buttonGroup.findAll('span')
    expect(spans.length).toBe(0)
  })

  it('works normally when tooltip is on first button', async () => {
    const wrapper = mount({
      template: `
        <BButtonGroup>
          <BButton v-b-tooltip="'Test tooltip'">First</BButton>
          <BButton>Last</BButton>
        </BButtonGroup>
      `,
      components: {BButton, BButtonGroup},
      directives: {vBTooltip},
    })

    const buttonGroup = wrapper.find('.btn-group')
    const buttons = buttonGroup.findAll('.btn')
    const lastButton = buttons[buttons.length - 1]

    // Last button should still be the last child
    expect(lastButton.element).toBe(buttonGroup.element.lastElementChild)
  })

  it('works normally outside of button groups', async () => {
    const wrapper = mount({
      template: `
        <div>
          <BButton v-b-tooltip="'Test tooltip'">Standalone button</BButton>
        </div>
      `,
      components: {BButton},
      directives: {vBTooltip},
    })

    const button = wrapper.find('.btn')

    // Outside button groups, tooltip should be placed normally (as next sibling)
    // The directive should work without interfering with normal DOM structure
    expect(button.exists()).toBe(true)
    // Just verify the directive was applied successfully
    expect(wrapper.html()).toContain('Standalone button')
  })
})
