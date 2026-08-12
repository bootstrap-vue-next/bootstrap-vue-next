import {describe, expect, it} from 'vitest'
import {ref} from 'vue'
import {useRadiusElementClasses} from './useRadiusElementClasses'

describe('useRadiusElementClasses', () => {
  it('returns rounded class when rounded is true', () => {
    const result = useRadiusElementClasses({rounded: true})
    expect(result.value['rounded']).toBe(true)
  })

  it('returns rounded-circle when rounded is "circle"', () => {
    const result = useRadiusElementClasses({rounded: 'circle'})
    expect(result.value['rounded-circle']).toBe(true)
  })

  it('returns rounded-pill when rounded is "pill"', () => {
    const result = useRadiusElementClasses({rounded: 'pill'})
    expect(result.value['rounded-pill']).toBe(true)
  })

  it('returns rounded-0 when rounded is "none"', () => {
    const result = useRadiusElementClasses({rounded: 'none'})
    expect(result.value['rounded-0']).toBe(true)
  })

  it('returns rounded-1 when rounded is "sm"', () => {
    const result = useRadiusElementClasses({rounded: 'sm'})
    expect(result.value['rounded-1']).toBe(true)
  })

  it('returns rounded-5 when rounded is "lg"', () => {
    const result = useRadiusElementClasses({rounded: 'lg'})
    expect(result.value['rounded-5']).toBe(true)
  })

  it('returns rounded-{n} for numeric values', () => {
    const result = useRadiusElementClasses({rounded: '3'})
    expect(result.value['rounded-3']).toBe(true)
  })

  it('returns directional classes for roundedTop', () => {
    const result = useRadiusElementClasses({roundedTop: true})
    expect(result.value['rounded-top']).toBe(true)
  })

  it('returns directional classes for roundedBottom', () => {
    const result = useRadiusElementClasses({roundedBottom: 'circle'})
    expect(result.value['rounded-bottom-circle']).toBe(true)
  })

  it('returns directional classes for roundedStart', () => {
    const result = useRadiusElementClasses({roundedStart: 'pill'})
    expect(result.value['rounded-start-pill']).toBe(true)
  })

  it('returns directional classes for roundedEnd', () => {
    const result = useRadiusElementClasses({roundedEnd: 'lg'})
    expect(result.value['rounded-end-5']).toBe(true)
  })

  it('returns all false when no rounded props set', () => {
    const result = useRadiusElementClasses({})
    const values = Object.values(result.value)
    expect(values.every((v) => v === false)).toBe(true)
  })

  it('is reactive to ref changes', () => {
    const props = ref<{rounded?: boolean | string}>({rounded: true})
    const result = useRadiusElementClasses(props)
    expect(result.value['rounded']).toBe(true)

    props.value = {rounded: 'circle'}
    expect(result.value['rounded-circle']).toBe(true)
  })
})
