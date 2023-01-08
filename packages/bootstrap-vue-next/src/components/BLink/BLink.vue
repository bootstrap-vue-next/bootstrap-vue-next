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
      :class="[
        (isActive || activeBoolean) && activeClass,
        (isExactActive || exactBoolean) && exactActiveClass,
      ]"
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
    :class="computedLinkClasses"
    v-bind="routerAttr"
    @click="clicked"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import type {Booleanish, LinkTarget} from '../../types'
import {useBooleanish} from '../../composables'
import {computed, defineComponent, getCurrentInstance, type PropType, ref, toRef} from 'vue'
import type {RouteLocation, RouteLocationRaw} from 'vue-router'

export const BLINK_PROPS = {
  active: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  activeClass: {type: String, default: 'router-link-active'},
  append: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  disabled: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  event: {type: [String, Array], default: 'click'},
  exact: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  exactActiveClass: {type: String, default: 'router-link-exact-active'},
  href: {type: String},
  // noPrefetch: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  // prefetch: {type: [Boolean, String] as PropType<Booleanish>, default: null},
  rel: {type: String, default: null},
  replace: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  routerComponentName: {type: String, default: 'router-link'},
  routerTag: {type: String, default: 'a'},
  target: {type: String as PropType<LinkTarget>, default: '_self'},
  to: {type: [String, Object] as PropType<RouteLocationRaw>, default: null},
}

export default defineComponent({
  props: BLINK_PROPS,
  emits: ['click'],
  setup(props, {emit, attrs}) {
    const activeBoolean = useBooleanish(toRef(props, 'active'))
    const appendBoolean = useBooleanish(toRef(props, 'append'))
    const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
    const exactBoolean = useBooleanish(toRef(props, 'exact'))
    const replaceBoolean = useBooleanish(toRef(props, 'replace'))

    const instance = getCurrentInstance()
    const link = ref<HTMLElement>(null as unknown as HTMLElement)

    const tag = computed<string>(() => {
      const routerName = props.routerComponentName
        .split('-')
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join('')
      const hasRouter = instance?.appContext.app.component(routerName) !== undefined
      if (!hasRouter || disabledBoolean.value || !props.to) {
        return 'a'
      }
      return props.routerComponentName
    })

    const computedHref = computed<string>(() => {
      const toFallback = '#'
      if (props.href) return props.href

      if (typeof props.to === 'string') return props.to || toFallback

      const to = props.to as RouteLocation

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

    const routerAttr = computed(() => ({
      'to': props.to,
      'href': computedHref.value,
      'target': props.target,
      'rel': props.target === '_blank' && props.rel === null ? 'noopener' : props.rel || null,
      'tabindex': disabledBoolean.value
        ? '-1'
        : typeof attrs.tabindex === 'undefined'
        ? null
        : attrs.tabindex,
      'aria-disabled': disabledBoolean.value ? 'true' : null,
    }))

    const computedLinkClasses = computed(() => ({
      active: activeBoolean.value,
      disabled: disabledBoolean.value,
    }))

    const clicked = (e: MouseEvent): void => {
      if (disabledBoolean.value) {
        e.preventDefault()
        e.stopImmediatePropagation()
        return
      }
      emit('click', e)
    }

    return {
      computedLinkClasses,
      tag,
      routerAttr,
      link,
      clicked,
      activeBoolean,
      appendBoolean,
      disabledBoolean,
      replaceBoolean,
      exactBoolean,
    }
  },
})
</script>
