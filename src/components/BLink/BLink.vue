<!-- eslint-disable vue/no-template-shadow -->
<template>
  <component
    :is="tag"
    v-if="tag === 'router-link'"
    v-slot="{href, navigate, isActive, isExactActive}"
    v-bind="routerAttr"
    custom
  >
    <component
      :is="routerTag"
      ref="link"
      :href="href"
      :class="[isActive && activeClass, isExactActive && exactActiveClass]"
      v-bind="$attrs"
      @click="navigate"
    >
      <slot />
    </component>
  </component>
  <component
    :is="tag"
    v-else
    ref="link"
    :class="{active, disabled}"
    v-bind="routerAttr"
    @click="clicked"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import type {LinkTarget} from '../../types'
import {computed, defineComponent, getCurrentInstance, PropType, Ref, ref} from 'vue'

export default defineComponent({
  name: 'BLink',
  props: {
    active: {type: Boolean, default: false},
    activeClass: {type: String, default: 'router-link-active'},
    append: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    event: {type: [String, Array], default: 'click'},
    exact: {type: Boolean, default: false},
    exactActiveClass: {type: String, default: 'router-link-exact-active'},
    href: {type: String},
    // noPrefetch: {type: Boolean, default: false},
    // prefetch: {type: Boolean, default: null},
    rel: {type: String, default: null},
    replace: {type: Boolean, default: false},
    routerComponentName: {type: String, default: 'router-link'},
    routerTag: {type: String, default: 'a'},
    target: {type: String as PropType<LinkTarget>, default: '_self'},
    to: {type: [String, Object], default: null},
  },
  emits: ['click'],
  setup(props, {emit, attrs}) {
    const instance = getCurrentInstance()
    const link: Ref<HTMLElement> = ref(null as unknown as HTMLElement)

    const tag = computed(() => {
      const {to, disabled, routerComponentName} = props
      const routerName = routerComponentName
        .split('-')
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join('')
      const hasRouter = instance.appContext.app.component(routerName) !== undefined
      if (!hasRouter || disabled || !to) {
        return 'a'
      }
      return routerComponentName
    })

    const computedHref = computed(() => {
      const toFallback = '#'
      const {to, href} = props
      if (href) return href

      if (typeof to === 'string') return to || toFallback

      if (
        Object.prototype.toString.call(to) === '[object Object]' &&
        (to.path || to.query || to.hash)
      ) {
        const path = to.path || ''
        const query = to.query
          ? `?${Object.keys(to.query)
              .map((e) => `${e}=${to.query[e]}`)
              .join('=')}`
          : ''
        const hash = !to.hash || to.hash.charAt(0) === '#' ? to.hash || '' : `#${to.hash}`
        return `${path}${query}${hash}` || toFallback
      }

      return toFallback
    })

    const focus = () => {
      if (!props.disabled) link.value.focus()
    }

    const blur = () => {
      if (!props.disabled) {
        link.value.blur()
      }
    }

    const clicked = function (e: PointerEvent) {
      if (props.disabled) {
        e.preventDefault()
        e.stopImmediatePropagation()
        return
      }
      emit('click', e)
    }

    const routerAttr = computed(() => ({
      'to': props.to,
      'href': computedHref.value,
      'target': props.target,
      'rel': props.target === '_blank' && props.rel === null ? 'noopener' : props.rel || null,
      'tabindex': props.disabled
        ? '-1'
        : typeof attrs.tabindex === 'undefined'
        ? null
        : attrs.tabindex,
      'aria-disabled': props.disabled ? 'true' : null,
    }))

    return {
      tag,
      routerAttr,
      link,
      focus,
      blur,
      clicked,
    }
  },
})
</script>
