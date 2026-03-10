import {enableAutoUnmount, mount} from '@vue/test-utils'
import BProgressBar from './BProgressBar.vue'
import {afterEach, describe, expect, it} from 'vitest'
import {progressInjectionKey} from '../../utils/keys'
import {ref} from 'vue'

describe('progress-bar', () => {
  enableAutoUnmount(afterEach)

  it('tag is div', () => {
    const wrapper = mount(BProgressBar)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has static class progress-bar', () => {
    const wrapper = mount(BProgressBar)
    expect(wrapper.classes()).toContain('progress-bar')
  })

  it('has class progress-bar-animated when prop animated', async () => {
    const wrapper = mount(BProgressBar, {
      props: {animated: true},
    })
    expect(wrapper.classes()).toContain('progress-bar-animated')
    await wrapper.setProps({animated: false})
    expect(wrapper.classes()).not.toContain('progress-bar-animated')
  })

  it('has class progress-bar-striped when prop striped', async () => {
    const wrapper = mount(BProgressBar, {
      props: {striped: true},
    })
    expect(wrapper.classes()).toContain('progress-bar-striped')
    await wrapper.setProps({striped: false})
    expect(wrapper.classes()).not.toContain('progress-bar-striped')
  })

  it('has class progress-bar-striped when prop animated is true', () => {
    const wrapper = mount(BProgressBar, {
      props: {animated: true},
    })
    expect(wrapper.classes()).toContain('progress-bar-striped')
  })

  it('has class text-bg-{variant} when prop variant', async () => {
    const wrapper = mount(BProgressBar, {
      props: {variant: 'success'},
    })
    expect(wrapper.classes()).toContain('text-bg-success')
    await wrapper.setProps({variant: 'danger'})
    expect(wrapper.classes()).toContain('text-bg-danger')
    expect(wrapper.classes()).not.toContain('text-bg-success')
  })

  it('does not have text-bg-* class when variant is null', () => {
    const wrapper = mount(BProgressBar)
    const classes = wrapper.classes()
    expect(classes.some((c) => c.startsWith('text-bg-'))).toBe(false)
  })

  it('has class bg-{bgVariant} when prop bgVariant', async () => {
    const wrapper = mount(BProgressBar, {
      props: {bgVariant: 'primary'},
    })
    expect(wrapper.classes()).toContain('bg-primary')
    await wrapper.setProps({bgVariant: 'warning'})
    expect(wrapper.classes()).toContain('bg-warning')
    expect(wrapper.classes()).not.toContain('bg-primary')
  })

  it('has class text-{textVariant} when prop textVariant', async () => {
    const wrapper = mount(BProgressBar, {
      props: {textVariant: 'dark'},
    })
    expect(wrapper.classes()).toContain('text-dark')
    await wrapper.setProps({textVariant: 'light'})
    expect(wrapper.classes()).toContain('text-light')
    expect(wrapper.classes()).not.toContain('text-dark')
  })

  it('width style is value% when value is number and no max', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 50},
    })
    expect(wrapper.attributes('style')).toContain('width: 50%')
  })

  it('width style is string value when value is string and no max', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: '75%'},
    })
    expect(wrapper.attributes('style')).toContain('width: 75%')
  })

  it('width style accounts for max prop', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 50, max: 200},
    })
    expect(wrapper.attributes('style')).toContain('width: 25%')
  })

  it('width style is reactive to value changes', async () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 25, max: 100},
    })
    expect(wrapper.attributes('style')).toContain('width: 25%')
    await wrapper.setProps({value: 75})
    expect(wrapper.attributes('style')).toContain('width: 75%')
  })

  it('width style is reactive to max changes', async () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 50, max: 100},
    })
    expect(wrapper.attributes('style')).toContain('width: 50%')
    await wrapper.setProps({max: 200})
    expect(wrapper.attributes('style')).toContain('width: 25%')
  })

  it('shows value when prop showValue is true', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 33, showValue: true},
    })
    expect(wrapper.text()).toBe('33')
  })

  it('shows progress percentage when prop showProgress is true', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 50, max: 100, showProgress: true},
    })
    expect(wrapper.text()).toBe('50')
  })

  it('showProgress with custom max computes percentage', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 50, max: 200, showProgress: true},
    })
    expect(wrapper.text()).toBe('25')
  })

  it('shows label when prop label is set', () => {
    const wrapper = mount(BProgressBar, {
      props: {label: 'Loading...'},
    })
    expect(wrapper.text()).toBe('Loading...')
  })

  it('showValue takes precedence over showProgress', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 50, max: 200, showValue: true, showProgress: true},
    })
    expect(wrapper.text()).toBe('50')
  })

  it('showValue takes precedence over label', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 25, showValue: true, label: 'foo'},
    })
    expect(wrapper.text()).toBe('25')
  })

  it('showProgress takes precedence over label', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 50, max: 100, showProgress: true, label: 'foo'},
    })
    expect(wrapper.text()).toBe('50')
  })

  it('precision controls decimal places for showValue', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 33.3333, showValue: true, precision: 2},
    })
    expect(wrapper.text()).toBe('33.33')
  })

  it('precision controls decimal places for showProgress', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 33.3333, max: 100, showProgress: true, precision: 2},
    })
    expect(wrapper.text()).toBe('33.33')
  })

  it('precision defaults to 0', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 33.6789, showValue: true},
    })
    expect(wrapper.text()).toBe('34')
  })

  it('renders empty text when no label/showValue/showProgress', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 50},
    })
    expect(wrapper.text()).toBe('')
  })

  it('renders default slot content', () => {
    const wrapper = mount(BProgressBar, {
      slots: {default: 'custom content'},
    })
    expect(wrapper.text()).toBe('custom content')
  })

  it('default slot overrides computed label', () => {
    const wrapper = mount(BProgressBar, {
      props: {showValue: true, value: 50},
      slots: {default: 'slot content'},
    })
    expect(wrapper.text()).toBe('slot content')
  })

  it('renders HTML in default slot', () => {
    const wrapper = mount(BProgressBar, {
      slots: {default: '<strong>bold</strong>'},
    })
    const $strong = wrapper.find('strong')
    expect($strong.exists()).toBe(true)
    expect($strong.text()).toBe('bold')
  })

  it('uses parent injection for animated class', () => {
    const wrapper = mount(BProgressBar, {
      global: {
        provide: {
          [progressInjectionKey as unknown as symbol]: {
            animated: ref(true),
            max: ref(100),
            showProgress: ref(false),
            showValue: ref(false),
            striped: ref(false),
          },
        },
      },
    })
    expect(wrapper.classes()).toContain('progress-bar-animated')
  })

  it('uses parent injection for striped class', () => {
    const wrapper = mount(BProgressBar, {
      global: {
        provide: {
          [progressInjectionKey as unknown as symbol]: {
            animated: ref(false),
            max: ref(100),
            showProgress: ref(false),
            showValue: ref(false),
            striped: ref(true),
          },
        },
      },
    })
    expect(wrapper.classes()).toContain('progress-bar-striped')
  })

  it('parent animated injection also adds striped class', () => {
    const wrapper = mount(BProgressBar, {
      global: {
        provide: {
          [progressInjectionKey as unknown as symbol]: {
            animated: ref(true),
            max: ref(100),
            showProgress: ref(false),
            showValue: ref(false),
            striped: ref(false),
          },
        },
      },
    })
    expect(wrapper.classes()).toContain('progress-bar-striped')
    expect(wrapper.classes()).toContain('progress-bar-animated')
  })

  it('uses parent injection for max in width calculation', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 50},
      global: {
        provide: {
          [progressInjectionKey as unknown as symbol]: {
            animated: ref(false),
            max: ref(200),
            showProgress: ref(false),
            showValue: ref(false),
            striped: ref(false),
          },
        },
      },
    })
    expect(wrapper.attributes('style')).toContain('width: 25%')
  })

  it('uses parent injection for showValue in label', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 42},
      global: {
        provide: {
          [progressInjectionKey as unknown as symbol]: {
            animated: ref(false),
            max: ref(100),
            showProgress: ref(false),
            showValue: ref(true),
            striped: ref(false),
          },
        },
      },
    })
    expect(wrapper.text()).toBe('42')
  })

  it('uses parent injection for showProgress in label', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 50},
      global: {
        provide: {
          [progressInjectionKey as unknown as symbol]: {
            animated: ref(false),
            max: ref(100),
            showProgress: ref(true),
            showValue: ref(false),
            striped: ref(false),
          },
        },
      },
    })
    expect(wrapper.text()).toBe('50')
  })

  it('prop animated overrides parent injection animated=false', () => {
    const wrapper = mount(BProgressBar, {
      props: {animated: true},
      global: {
        provide: {
          [progressInjectionKey as unknown as symbol]: {
            animated: ref(false),
            max: ref(100),
            showProgress: ref(false),
            showValue: ref(false),
            striped: ref(false),
          },
        },
      },
    })
    expect(wrapper.classes()).toContain('progress-bar-animated')
  })

  it('prop striped overrides parent injection striped=false', () => {
    const wrapper = mount(BProgressBar, {
      props: {striped: true},
      global: {
        provide: {
          [progressInjectionKey as unknown as symbol]: {
            animated: ref(false),
            max: ref(100),
            showProgress: ref(false),
            showValue: ref(false),
            striped: ref(false),
          },
        },
      },
    })
    expect(wrapper.classes()).toContain('progress-bar-striped')
  })

  it('prop showValue overrides parent injection showValue=false', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 30, showValue: true},
      global: {
        provide: {
          [progressInjectionKey as unknown as symbol]: {
            animated: ref(false),
            max: ref(100),
            showProgress: ref(false),
            showValue: ref(false),
            striped: ref(false),
          },
        },
      },
    })
    expect(wrapper.text()).toBe('30')
  })

  it('works without parent injection (standalone usage)', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 60, max: 100},
    })
    expect(wrapper.attributes('style')).toContain('width: 60%')
    expect(wrapper.classes()).not.toContain('progress-bar-animated')
    expect(wrapper.classes()).not.toContain('progress-bar-striped')
  })

  it('showValue is reactive', async () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 50, showValue: false},
    })
    expect(wrapper.text()).toBe('')
    await wrapper.setProps({showValue: true})
    expect(wrapper.text()).toBe('50')
  })

  it('label is reactive', async () => {
    const wrapper = mount(BProgressBar, {
      props: {label: 'Loading'},
    })
    expect(wrapper.text()).toBe('Loading')
    await wrapper.setProps({label: 'Done'})
    expect(wrapper.text()).toBe('Done')
  })

  it('precision is reactive', async () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 33.456, showValue: true, precision: 0},
    })
    expect(wrapper.text()).toBe('33')
    await wrapper.setProps({precision: 2})
    expect(wrapper.text()).toBe('33.46')
  })

  it('value 0 shows 0% width', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 0, max: 100},
    })
    expect(wrapper.attributes('style')).toContain('width: 0%')
  })

  it('value equal to max shows 100% width', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 100, max: 100},
    })
    expect(wrapper.attributes('style')).toContain('width: 100%')
  })

  it('supports string value for max', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: 50, max: '200'},
    })
    expect(wrapper.attributes('style')).toContain('width: 25%')
  })

  it('supports string value for value', () => {
    const wrapper = mount(BProgressBar, {
      props: {value: '50', max: 100},
    })
    expect(wrapper.attributes('style')).toContain('width: 50%')
  })
})
