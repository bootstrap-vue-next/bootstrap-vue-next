import {Directive, DirectiveBinding} from 'vue'

const observerInstances = new Map()

function destroy(el: HTMLElement) {
  if (observerInstances.has(el)) {
    const observer = observerInstances.get(el)
    if (observer && observer.stop) {
      observer.stop()
    }
    observerInstances.delete(el)
  }
}

function bind(el: HTMLElement, binding: DirectiveBinding) {
  const options = {
    margin: '0px',
    once: false,
    callback: binding.value,
  }
  // Parse modifiers
  Object.keys(binding.modifiers).forEach((mod) => {
    if (Number.isInteger(mod)) {
      options.margin = `${mod}px`
    } else if (mod.toLowerCase() === 'once') {
      options.once = true
    }
  })
  // Destroy any previous observer
  destroy(el)
  // Create new observer
  const observer = new VisibilityObserver(
    el,
    options.margin,
    options.once,
    options.callback,
    binding.instance
  )
  observerInstances.set(el, observer)
}

const BVisible: Directive<HTMLElement> = {
  beforeMount(el, binding) {
    bind(el, binding)
  },
  updated(el, binding) {
    bind(el, binding)
  },
  unmounted(el) {
    destroy(el)
  },
}

class VisibilityObserver {
  private element: HTMLElement
  private margin: string
  private once: boolean
  private callback: any
  private instance: any
  private observer: any

  private doneOnce!: boolean
  private visible!: boolean

  constructor(element: HTMLElement, margin: string, once: boolean, callback: any, instance: any) {
    this.element = element
    this.margin = margin
    this.once = once
    this.callback = callback
    this.instance = instance
    this.createObserver()
  }

  createObserver() {
    if (this.observer) {
      this.stop()
    }

    if (this.doneOnce || typeof this.callback !== 'function') {
      return
    }

    try {
      this.observer = new IntersectionObserver(this.handler.bind(this), {
        root: null,
        rootMargin: this.margin,
        threshold: 0,
      })
    } catch (e) {
      console.error('Intersection Observer not supported')
      this.doneOnce = true
      this.observer = undefined
      this.callback(null)
      return
    }

    this.instance.$nextTick(() => {
      if (this.observer) {
        this.observer.observe(this.element)
      }
    })
  }

  handler(entries: IntersectionObserverEntry[]) {
    const [entry] = entries
    const isIntersecting = Boolean(entry.isIntersecting || entry.intersectionRatio > 0.0)
    if (isIntersecting !== this.visible) {
      this.visible = isIntersecting
      this.callback(isIntersecting)
      if (this.once && this.visible) {
        this.doneOnce = true
        this.stop()
      }
    }
  }

  stop() {
    this.observer && this.observer.disconnect()
    this.observer = null
  }
}

export default BVisible
