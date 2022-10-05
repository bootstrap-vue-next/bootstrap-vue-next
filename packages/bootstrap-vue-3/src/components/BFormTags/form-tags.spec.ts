import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormTags from './BFormTags.vue'
import {afterEach, describe, expect, it} from 'vitest'

describe('form-tags', () => {
  enableAutoUnmount(afterEach)

  it('has proper root element', () => {
    const wrapper = mount(BFormTags)

    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.classes()).toContain('b-form-tags')
    expect(wrapper.classes()).toContain('form-control')
  })

  it('has proper input element', () => {
    const wrapper = mount(BFormTags)

    const $input = wrapper.find('input')

    expect($input.exists()).toBe(true)
    expect($input.classes()).toContain('b-form-tags-input')
  })

  it('adds new tag', async () => {
    const wrapper = mount(BFormTags)

    const $input = wrapper.get('input')
    $input.element.value = 'test'
    await $input.trigger('input')

    const $tagStateEmitted = wrapper.emitted('tag-state') as unknown[][]

    expect($tagStateEmitted).toBeDefined()
    expect($tagStateEmitted[0][0]).toEqual(['test'])

    await $input.trigger('keydown', {key: 'Enter'})

    expect(wrapper.emitted('update:modelValue')).toBeDefined()
  })

  it('renders tag slot', async () => {
    const wrapper = mount(BFormTags, {
      props: {
        modelValue: ['foo', 'bar'],
      },
      slots: {
        tag: `
        <template #tag="params">
          <button class="custom-tag" @click="params.removeTag">{{ params.tag }}</button>
        </template>
        `,
      },
    })

    const $tags = wrapper.findAll('.custom-tag')
    expect($tags.length).toBe(2)

    expect($tags[0].text()).toBe('foo')
    expect($tags[1].text()).toBe('bar')

    await $tags[1].trigger('click')

    const $emitted = wrapper.emitted('update:modelValue') as unknown[][]

    expect($emitted.length).toBe(1)
    expect($emitted).toBeDefined()
    expect($emitted[0][0]).toEqual(['foo'])
  })
})
