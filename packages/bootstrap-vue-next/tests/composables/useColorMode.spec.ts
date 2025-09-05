import {useColorMode} from '../../src/composables/useColorMode'
import {describe, expect, it, vi, beforeEach} from 'vitest'

// Mock @vueuse/core to test our wrapper behavior
vi.mock('@vueuse/core', () => ({
  useColorMode: vi.fn((options) => {
    // Return a mock that captures the options for testing
    return {
      value: 'light',
      _options: options,
    }
  }),
}))

describe('useColorMode', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('uses html as default selector', async () => {
    const {useColorMode: mockUseColorMode} = await import('@vueuse/core')
    
    useColorMode()
    
    expect(mockUseColorMode).toHaveBeenCalledWith({
      attribute: 'data-bs-theme',
      selector: 'html',
      storageKey: null,
    })
  })

  it('uses data-bs-theme as default attribute', async () => {
    const {useColorMode: mockUseColorMode} = await import('@vueuse/core')
    
    useColorMode()
    
    expect(mockUseColorMode).toHaveBeenCalledWith(
      expect.objectContaining({
        attribute: 'data-bs-theme',
      })
    )
  })

  it('allows overriding selector', async () => {
    const {useColorMode: mockUseColorMode} = await import('@vueuse/core')
    
    useColorMode({selector: 'body'})
    
    expect(mockUseColorMode).toHaveBeenCalledWith(
      expect.objectContaining({
        selector: 'body',
      })
    )
  })

  it('allows overriding attribute', async () => {
    const {useColorMode: mockUseColorMode} = await import('@vueuse/core')
    
    useColorMode({attribute: 'data-theme'})
    
    expect(mockUseColorMode).toHaveBeenCalledWith(
      expect.objectContaining({
        attribute: 'data-theme',
      })
    )
  })

  it('generates storage key when persist is true', async () => {
    const {useColorMode: mockUseColorMode} = await import('@vueuse/core')
    
    useColorMode({persist: true})
    
    expect(mockUseColorMode).toHaveBeenCalledWith(
      expect.objectContaining({
        storageKey: 'bv-color-data-bs-theme-html',
      })
    )
  })

  it('uses custom storage key components when provided', async () => {
    const {useColorMode: mockUseColorMode} = await import('@vueuse/core')
    
    useColorMode({
      persist: true,
      attribute: 'data-theme',
      selector: 'body',
    })
    
    expect(mockUseColorMode).toHaveBeenCalledWith(
      expect.objectContaining({
        storageKey: 'bv-color-data-theme-body',
      })
    )
  })

  it('does not generate storage key when persist is false', async () => {
    const {useColorMode: mockUseColorMode} = await import('@vueuse/core')
    
    useColorMode({persist: false})
    
    expect(mockUseColorMode).toHaveBeenCalledWith(
      expect.objectContaining({
        storageKey: null,
      })
    )
  })

  it('passes through additional options', async () => {
    const {useColorMode: mockUseColorMode} = await import('@vueuse/core')
    
    useColorMode({
      initialValue: 'dark',
      modes: {
        light: 'light',
        dark: 'dark',
      },
    })
    
    expect(mockUseColorMode).toHaveBeenCalledWith(
      expect.objectContaining({
        initialValue: 'dark',
        modes: {
          light: 'light',
          dark: 'dark',
        },
      })
    )
  })
})