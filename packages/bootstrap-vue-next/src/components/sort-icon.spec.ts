import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import SortIcon from './SortIcon.vue'

const ascPath =
  'M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z'
const descPath =
  'M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z'

describe('sort-icon', () => {
  enableAutoUnmount(afterEach)

  it('renders an svg element', () => {
    const wrapper = mount(SortIcon, {
      props: {fieldInfo: {key: 'name'}},
    })
    expect(wrapper.element.tagName).toBe('svg')
  })

  it('has aria-hidden="true"', () => {
    const wrapper = mount(SortIcon, {
      props: {fieldInfo: {key: 'name'}},
    })
    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })

  it('has correct viewBox', () => {
    const wrapper = mount(SortIcon, {
      props: {fieldInfo: {key: 'name'}},
    })
    expect(wrapper.attributes('viewBox')).toBe('0 0 16 16')
  })

  it('has width and height of 24', () => {
    const wrapper = mount(SortIcon, {
      props: {fieldInfo: {key: 'name'}},
    })
    expect(wrapper.attributes('width')).toBe('24')
    expect(wrapper.attributes('height')).toBe('24')
  })

  it('has fill="currentColor"', () => {
    const wrapper = mount(SortIcon, {
      props: {fieldInfo: {key: 'name'}},
    })
    expect(wrapper.attributes('fill')).toBe('currentColor')
  })

  it('renders a path element inside svg', () => {
    const wrapper = mount(SortIcon, {
      props: {fieldInfo: {key: 'name'}},
    })
    const $path = wrapper.find('path')
    expect($path.exists()).toBe(true)
    expect($path.attributes('fill-rule')).toBe('evenodd')
  })

  it('defaults to ascending icon class when not sorted', () => {
    const wrapper = mount(SortIcon, {
      props: {fieldInfo: {key: 'name'}},
    })
    expect(wrapper.classes()).toContain('bi')
    expect(wrapper.classes()).toContain('bi-arrow-up-short')
  })

  it('defaults to ascending path when not sorted', () => {
    const wrapper = mount(SortIcon, {
      props: {fieldInfo: {key: 'name'}},
    })
    const $path = wrapper.find('path')
    expect($path.attributes('d')).toBe(ascPath)
  })

  it('has opacity 0.4 when field is not currently sorted', () => {
    const wrapper = mount(SortIcon, {
      props: {fieldInfo: {key: 'name'}},
    })
    expect(wrapper.attributes('style')).toContain('opacity: 0.4')
  })

  it('has opacity 1 when field is currently sorted ascending', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
        sortBy: [{key: 'name', order: 'asc'}],
      },
    })
    expect(wrapper.attributes('style')).toContain('opacity: 1')
  })

  it('has opacity 1 when field is currently sorted descending', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
        sortBy: [{key: 'name', order: 'desc'}],
      },
    })
    expect(wrapper.attributes('style')).toContain('opacity: 1')
  })

  it('shows ascending icon when sorted ascending', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
        sortBy: [{key: 'name', order: 'asc'}],
      },
    })
    expect(wrapper.classes()).toContain('bi-arrow-up-short')
    expect(wrapper.find('path').attributes('d')).toBe(ascPath)
  })

  it('shows descending icon when sorted descending', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
        sortBy: [{key: 'name', order: 'desc'}],
      },
    })
    expect(wrapper.classes()).toContain('bi-arrow-down-short')
    expect(wrapper.find('path').attributes('d')).toBe(descPath)
  })

  it('has opacity 0.4 when sortBy references a different field', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
        sortBy: [{key: 'age', order: 'asc'}],
      },
    })
    expect(wrapper.attributes('style')).toContain('opacity: 0.4')
  })

  it('defaults to ascending when sortBy has no order', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
        sortBy: [{key: 'name', order: undefined as unknown as string}],
      },
    })
    expect(wrapper.classes()).toContain('bi-arrow-up-short')
    expect(wrapper.find('path').attributes('d')).toBe(ascPath)
    expect(wrapper.attributes('style')).toContain('opacity: 0.4')
  })

  it('uses initialSortDirection desc from props', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
        initialSortDirection: 'desc',
      },
    })
    expect(wrapper.classes()).toContain('bi-arrow-down-short')
    expect(wrapper.find('path').attributes('d')).toBe(descPath)
  })

  it('uses initialSortDirection asc from props', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
        initialSortDirection: 'asc',
      },
    })
    expect(wrapper.classes()).toContain('bi-arrow-up-short')
    expect(wrapper.find('path').attributes('d')).toBe(ascPath)
  })

  it('field-level initialSortDirection takes precedence over prop', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name', initialSortDirection: 'desc'},
        initialSortDirection: 'asc',
      },
    })
    expect(wrapper.classes()).toContain('bi-arrow-down-short')
    expect(wrapper.find('path').attributes('d')).toBe(descPath)
  })

  it('uses initialSortDirection "last" to use last sorted column direction', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
        initialSortDirection: 'last',
        sortBy: [{key: 'age', order: 'desc'}],
      },
    })
    // "last" mode looks for the last column with an order and uses that direction
    expect(wrapper.classes()).toContain('bi-arrow-down-short')
    expect(wrapper.find('path').attributes('d')).toBe(descPath)
  })

  it('uses initialSortDirection "last" defaults to asc when no previous sort', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
        initialSortDirection: 'last',
        sortBy: [],
      },
    })
    expect(wrapper.classes()).toContain('bi-arrow-up-short')
    expect(wrapper.find('path').attributes('d')).toBe(ascPath)
  })

  it('active sort order overrides initialSortDirection', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
        initialSortDirection: 'desc',
        sortBy: [{key: 'name', order: 'asc'}],
      },
    })
    // When the field is actively sorted, the order from sortBy takes priority
    expect(wrapper.classes()).toContain('bi-arrow-up-short')
    expect(wrapper.find('path').attributes('d')).toBe(ascPath)
    expect(wrapper.attributes('style')).toContain('opacity: 1')
  })

  it('reacts to sortBy prop changes', async () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
        sortBy: [{key: 'name', order: 'asc'}],
      },
    })
    expect(wrapper.classes()).toContain('bi-arrow-up-short')
    expect(wrapper.attributes('style')).toContain('opacity: 1')

    await wrapper.setProps({sortBy: [{key: 'name', order: 'desc'}]})
    expect(wrapper.classes()).toContain('bi-arrow-down-short')
    expect(wrapper.attributes('style')).toContain('opacity: 1')

    await wrapper.setProps({sortBy: []})
    expect(wrapper.classes()).toContain('bi-arrow-up-short')
    expect(wrapper.attributes('style')).toContain('opacity: 0.4')
  })

  it('handles sortBy with multiple entries', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
        sortBy: [
          {key: 'age', order: 'asc'},
          {key: 'name', order: 'desc'},
        ],
      },
    })
    expect(wrapper.classes()).toContain('bi-arrow-down-short')
    expect(wrapper.attributes('style')).toContain('opacity: 1')
  })

  it('handles undefined sortBy', () => {
    const wrapper = mount(SortIcon, {
      props: {
        fieldInfo: {key: 'name'},
      },
    })
    expect(wrapper.classes()).toContain('bi-arrow-up-short')
    expect(wrapper.attributes('style')).toContain('opacity: 0.4')
  })
})
