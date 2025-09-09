<template>
  <div
    ref="toolbarRef"
    :class="computedClasses"
    class="btn-toolbar"
    :role="props.role"
    :aria-label="props.ariaLabel"
    @keydown="handleKeyNav"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type {BButtonToolbarSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import type {BButtonToolbarProps} from '../../types/ComponentProps'
import {computed, nextTick, useTemplateRef} from 'vue'
import {CODE_DOWN, CODE_END, CODE_HOME, CODE_LEFT, CODE_RIGHT, CODE_UP} from '../../utils/constants'
import {stopEvent} from '../../utils/event'
import {getActiveElement} from '../../utils/dom'

const _props = withDefaults(defineProps<BButtonToolbarProps>(), {
  ariaLabel: 'Group',
  justify: false,
  keyNav: false,
  role: 'toolbar',
})
const props = useDefaults(_props, 'BButtonToolbar')
defineSlots<BButtonToolbarSlots>()

const toolbarRef = useTemplateRef<HTMLElement>('toolbarRef')

const computedClasses = computed(() => ({
  'justify-content-between': props.justify,
}))

// Get all focusable elements within the toolbar
const getFocusableElements = (): HTMLElement[] => {
  if (!toolbarRef.value) return []

  const selector =
    'button:not(:disabled), [href]:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"]):not(:disabled)'
  const elements = Array.from(toolbarRef.value.querySelectorAll(selector)) as HTMLElement[]

  // Filter out elements that are not visible or have display:none
  return elements.filter((el) => {
    const style = window.getComputedStyle(el)
    return style.display !== 'none' && style.visibility !== 'hidden'
  })
}

const isDisabled = (element: HTMLElement): boolean =>
  element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true'

const focusFirst = () => {
  nextTick(() => {
    const elements = getFocusableElements()
    const firstEnabled = elements.find((el) => !isDisabled(el))
    firstEnabled?.focus()
  })
}

const focusLast = () => {
  nextTick(() => {
    const elements = getFocusableElements()
    const lastEnabled = elements.reverse().find((el) => !isDisabled(el))
    lastEnabled?.focus()
  })
}

const focusPrev = () => {
  nextTick(() => {
    const elements = getFocusableElements()
    const activeElement = getActiveElement() as HTMLElement
    const currentIndex = elements.indexOf(activeElement)

    if (currentIndex > 0) {
      // Look backwards for the first non-disabled element
      for (let i = currentIndex - 1; i >= 0; i--) {
        if (!isDisabled(elements[i])) {
          elements[i]?.focus()
          break
        }
      }
    }
  })
}

const focusNext = () => {
  nextTick(() => {
    const elements = getFocusableElements()
    const activeElement = getActiveElement() as HTMLElement
    const currentIndex = elements.indexOf(activeElement)

    if (currentIndex < elements.length - 1) {
      // Look forwards for the first non-disabled element
      for (let i = currentIndex + 1; i < elements.length; i++) {
        if (!isDisabled(elements[i])) {
          elements[i]?.focus()
          break
        }
      }
    }
  })
}

const handleKeyNav = (event: KeyboardEvent) => {
  if (!props.keyNav) return

  const {code, shiftKey} = event

  if (code === CODE_LEFT || code === CODE_UP) {
    stopEvent(event)
    if (shiftKey) {
      focusFirst()
    } else {
      focusPrev()
    }
  } else if (code === CODE_RIGHT || code === CODE_DOWN) {
    stopEvent(event)
    if (shiftKey) {
      focusLast()
    } else {
      focusNext()
    }
  } else if (code === CODE_HOME) {
    stopEvent(event)
    focusFirst()
  } else if (code === CODE_END) {
    stopEvent(event)
    focusLast()
  }
}
</script>
