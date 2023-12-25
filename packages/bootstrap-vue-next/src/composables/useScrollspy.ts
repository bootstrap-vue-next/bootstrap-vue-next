import {syncRef, useIntersectionObserver, useMutationObserver} from '@vueuse/core'
import {
  type ComponentPublicInstance,
  computed,
  getCurrentInstance,
  type MaybeRefOrGetter,
  nextTick,
  onMounted,
  readonly,
  type Ref,
  ref,
  toRef,
  watch,
} from 'vue'
import {getElement} from '../utils'

type ScrollspyList = {
  id: string | null
  el: HTMLElement | null
  visible: boolean
  text: string | null
}[]

interface ScrollspyReturn {
  current: Readonly<Ref<string | null>>
  list: Readonly<Ref<ScrollspyList>>
  content: Ref<HTMLElement | undefined>
  target: Ref<HTMLElement | undefined>
  scrollIntoView: (event: MouseEvent) => void
  updateList: () => void
  cleanup: () => void
}

interface ScrollspyOptions {
  contentQuery: string
  targetQuery: string
  manual: boolean
  root: string | ComponentPublicInstance | HTMLElement | null
  rootMargin: string
  threshold: number | number[]
  watchChanges: boolean
}

export default (
  content: MaybeRefOrGetter<string | ComponentPublicInstance | HTMLElement | null>,
  target: MaybeRefOrGetter<string | ComponentPublicInstance | HTMLElement | null>,
  options: Readonly<Partial<ScrollspyOptions>> = {}
): ScrollspyReturn => {
  const cont = toRef(content)
  const tar = toRef(target)

  const resolvedContent = ref(getElement(cont.value))
  const resolvedTarget = ref(getElement(tar.value))

  watch([cont, tar], () => {
    updateList()
  })
  const {
    contentQuery = ':scope > [id]',
    targetQuery = '[href]',
    manual = false,
    root,
    rootMargin = '0px 0px -25%',
    threshold = [0.1, 0.5, 1],
    watchChanges = true,
  } = options
  const current = ref<string | null>(null)
  const list = ref<ScrollspyList>([])
  const nodeList = ref<HTMLElement[]>([])

  // are we called in directive?
  const ctx = getCurrentInstance()
  if (!ctx) {
    nextTick(() => {
      updateList()
    })
  } else {
    onMounted(() => {
      syncRef(cont, resolvedContent, {
        transform: {
          ltr: (v) => getElement(v),
        },
        direction: 'ltr',
        immediate: true,
      })
      syncRef(tar, resolvedTarget, {
        transform: {
          ltr: (v) => getElement(v),
        },
        direction: 'ltr',
        immediate: true,
      })
      updateList()
    })
  }

  const updateList = () => {
    nodeList.value = resolvedContent.value
      ? (Array.from(resolvedContent.value.querySelectorAll(contentQuery)) as HTMLElement[])
      : []
    list.value = nodeList.value.map((el) => ({
      id: el.id,
      el,
      visible: false,
      text: el.textContent,
    }))
  }

  let isScrollingDown = true
  let previousScrollTop = 0
  const scrollRoot = computed(() =>
    resolvedContent.value && getComputedStyle(resolvedContent.value).overflowY === 'visible'
      ? null
      : resolvedContent.value
  )

  const iobs = useIntersectionObserver(
    nodeList,
    (entries) => {
      const scrollTop = (scrollRoot.value || document?.documentElement)?.scrollTop
      isScrollingDown = scrollTop > previousScrollTop
      previousScrollTop = scrollTop
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          list.value.forEach((node) => {
            if (node.el === entry.target) {
              node.visible = true
            }
          })
          return
        }
        list.value.forEach((node) => {
          if (node.el === entry.target) {
            node.visible = false
          }
        })
      })
      let newId: string | null = null
      if (isScrollingDown) {
        newId = [...list.value].reverse().find((node) => node.visible)?.id || null
      } else {
        newId = list.value.find((node) => node.visible)?.id || null
      }
      if (newId !== null) {
        current.value = newId
      }
      if (!current.value) {
        current.value = list.value[0]?.id || null
      }
    },
    {
      root: root ? getElement(root) : scrollRoot,
      rootMargin,
      threshold,
    }
  )
  watch(current, (newId) => {
    if (manual) return
    const nodes = resolvedTarget.value?.querySelectorAll(targetQuery)
    if (nodes === undefined) return
    let foundParent = false
    let activeElement: HTMLElement | null = null
    nodes.forEach((node) => {
      const parentDropdown = node.closest('.dropdown')

      if (node.getAttribute('href')?.includes(`#${newId}`)) {
        activeElement = node as HTMLElement
        node.classList.add('active')
        if (parentDropdown) {
          parentDropdown?.querySelector('.dropdown-toggle')?.classList.add('active')
          foundParent = true
        }
        let parentNav = node.closest('.nav')?.previousSibling as HTMLElement
        while (parentNav?.classList?.contains('nav-item')) {
          foundParent = true
          parentNav.querySelector('.nav-link')?.classList.add('active')
          parentNav = parentNav.closest('.nav')?.previousSibling as HTMLElement
        }
      } else {
        node.classList.remove('active')
        if (parentDropdown && !foundParent) {
          parentDropdown?.querySelector('.dropdown-toggle')?.classList.remove('active')
        }

        if (!foundParent) {
          let parentNav = node.closest('.nav')?.previousSibling as HTMLElement
          while (parentNav?.classList?.contains('nav-item')) {
            foundParent = true
            parentNav.querySelector('.nav-link') !== activeElement &&
              parentNav.querySelector('.nav-link')?.classList.remove('active')
            parentNav = parentNav.closest('.nav')?.previousSibling as HTMLElement
          }
        }
      }
    })
  })

  const mobs = !watchChanges
    ? {stop: () => {}}
    : useMutationObserver(
        resolvedContent,
        () => {
          updateList()
        },
        {
          childList: true,
        }
      )
  const scrollIntoView = (event: Readonly<MouseEvent>, smooth: boolean = false) => {
    event.preventDefault()
    const href = (event.target as HTMLElement)?.getAttribute?.('href')
    const el: HTMLElement | null = href ? document?.querySelector(href) : null
    // console.log('scrollIntoView', event, el, content.value.$el)
    if (el && resolvedContent.value) {
      resolvedContent.value.scrollTo
        ? resolvedContent.value.scrollTo({top: el.offsetTop, behavior: smooth ? 'smooth' : 'auto'})
        : (resolvedContent.value.scrollTop = el.offsetTop)
    }
  }
  const cleanup = () => {
    iobs.stop()
    mobs.stop()
  }
  return {
    current: readonly(current),
    list,
    content: resolvedContent,
    target: resolvedTarget,
    scrollIntoView,
    updateList,
    cleanup,
  }
}
