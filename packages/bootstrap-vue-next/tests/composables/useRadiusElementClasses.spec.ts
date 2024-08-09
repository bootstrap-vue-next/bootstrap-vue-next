import {useRadiusElementClasses} from '../../src/composables'
import {describe, expect, it} from 'vitest'

// Produced a string array of the rounded properties of the obj that have a truthy value
function findRoundedProperties(obj: Record<string, boolean>, str = ''): string[] {
  return Object.keys(obj).filter((key) => key.startsWith(`${str}rounded`) && obj[key])
}

describe('useRadiusElementClasses blackbox test', () => {
  it('value to contain property value', () => {
    const radiusElementClasses = useRadiusElementClasses(() => ({}))
    expect(radiusElementClasses).toHaveProperty('value')
  })

  describe('when prop rounded=true', () => {
    it('radiusElementClasses contains property rounded-3', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: true,
      }))
      expect(radiusElementClasses.value['rounded']).toEqual(true)
    })

    it('radiusElementClasses contains property rounded=true', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: true,
      }))
      expect(radiusElementClasses.value['rounded']).toEqual(true)
    })
  })

  describe('when prop rounded=false', () => {
    it('radiusElementClasses does not contain any property rounded*=true', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: false,
      }))
      expect(findRoundedProperties(radiusElementClasses.value)).toHaveLength(0)
    })
  })

  describe('when prop rounded=circle', () => {
    it('radiusElementClasses contains property rounded-circle', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'circle',
      }))
      expect(radiusElementClasses.value).toHaveProperty('rounded-circle')
    })

    it('radiusElementClasses property rounded-circle=true', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'circle',
      }))
      expect(radiusElementClasses.value).toHaveProperty('rounded-circle')
    })

    it('radiusElementClasses contains exactly one rounded*=true property', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'circle',
      }))
      expect(findRoundedProperties(radiusElementClasses.value)).toHaveLength(1)
    })
  })

  describe('when prop rounded=pill', () => {
    it('radiusElementClasses contains property rounded-pill', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'pill',
      }))
      expect(radiusElementClasses.value).toHaveProperty('rounded-pill')
    })

    it('radiusElementClasses property rounded-pill=true', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'pill',
      }))
      expect(radiusElementClasses.value).toHaveProperty('rounded-pill')
    })

    it('radiusElementClasses contains exactly one rounded*=true property', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'pill',
      }))
      expect(findRoundedProperties(radiusElementClasses.value)).toHaveLength(1)
    })
  })

  describe('when prop rounded="2" (string)', () => {
    it('radiusElementClasses contains property rounded-2', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: '2',
      }))
      expect(radiusElementClasses.value).toHaveProperty('rounded-2')
    })

    it('radiusElementClasses property rounded-2=true', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: '2',
      }))
      expect(radiusElementClasses.value).toHaveProperty('rounded-2')
    })

    it('radiusElementClasses contains exactly one rounded*=true property', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: '2',
      }))
      expect(findRoundedProperties(radiusElementClasses.value)).toHaveLength(1)
    })
  })

  describe('when prop rounded=4 (number)', () => {
    it('radiusElementClasses contains property rounded-4', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 4,
      }))
      expect(radiusElementClasses.value).toHaveProperty('rounded-4')
    })

    it('radiusElementClasses property rounded-4=true', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 4,
      }))
      expect(radiusElementClasses.value).toHaveProperty('rounded-4')
    })

    it('radiusElementClasses contains exactly one rounded*=true property', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 4,
      }))
      expect(findRoundedProperties(radiusElementClasses.value)).toHaveLength(1)
    })
  })

  describe('when prop rounded="none"', () => {
    it('radiusElementClasses contains property rounded-0', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'none',
      }))
      expect(radiusElementClasses.value).toHaveProperty('rounded-0')
    })

    it('radiusElementClasses property rounded-0=false', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'none',
      }))
      expect(radiusElementClasses.value['rounded-0']).toEqual(true)
    })
  })

  describe('when prop rounded=sm', () => {
    it('radiusElementClasses contains property rounded-1', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'sm',
      }))
      expect(radiusElementClasses.value).toHaveProperty('rounded-1')
    })

    it('radiusElementClasses property rounded-1=true', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'sm',
      }))
      expect(radiusElementClasses.value).toHaveProperty('rounded-1')
    })

    it('radiusElementClasses contains exactly one rounded*=true property', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'sm',
      }))
      expect(findRoundedProperties(radiusElementClasses.value)).toHaveLength(1)
    })
  })

  describe('when prop rounded=lg', () => {
    it('radiusElementClasses contains property rounded-5', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'lg',
      }))
      expect(radiusElementClasses.value).toHaveProperty('rounded-5')
    })

    it('radiusElementClasses property rounded-5=true', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'lg',
      }))
      expect(radiusElementClasses.value).toHaveProperty('rounded-5')
    })

    it('radiusElementClasses contains exactly one rounded*=true property', () => {
      const radiusElementClasses = useRadiusElementClasses(() => ({
        rounded: 'lg',
      }))
      expect(findRoundedProperties(radiusElementClasses.value)).toHaveLength(1)
    })
  })

  it('radiusElementClasses to be correct when all edge properties are specified', () => {
    const radiusElementClasses = useRadiusElementClasses(() => ({
      roundedTop: 'lg',
      roundedBottom: 'sm',
      roundedStart: 2,
      roundedEnd: '4',
    }))

    expect(radiusElementClasses.value).toEqual({
      'rounded': false,
      'rounded-top-5': true,
      'rounded-bottom-1': true,
      'rounded-start-2': true,
      'rounded-end-4': true,
    })
  })
})
