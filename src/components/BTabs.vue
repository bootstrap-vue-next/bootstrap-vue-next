<template>
  <component :is="tag" :id="id" class="tabs" :class="classes">
    <div :class="[navWrapperClass, {'card-header': card}]">
      <ul class="nav" :class="[navTabsClasses, navClass]" role="tablist">
        <li
          v-for="({tab, buttonId, contentId, navItemClasses, active, target}, i) in tabs"
          :key="i"
          class="nav-item"
          :class="tab.props['title-item-class']"
        >
          <a
            :id="buttonId"
            class="nav-link"
            :class="navItemClasses"
            data-bs-toggle="tab"
            :data-bs-target="target"
            href="#"
            role="tab"
            :aria-controls="contentId"
            :aria-selected="active"
            v-bind="tab.props['title-link-attributes']"
            @click.stop="
              (e) => {
                $emit('click', e)
                tabIndex = i
              }
            "
          >
            {{ tab.props.title }}
          </a>
        </li>
      </ul>
    </div>
    <div class="tab-content" :class="contentClass">
      <template v-for="({tab, contentId, tabClasses, active}, i) in tabs" :key="i">
        <component :is="tab" :id="contentId" :class="tabClasses" :active="active" />
      </template>
    </div>
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, watch} from 'vue'
import getID from '../utils/getID'
import Alignment from '../types/Alignment'

const getTabs = (slots: any): any[] => {
  if (!slots || !slots.default) return []

  return slots
    .default()
    .reduce((arr: number[], slot: any) => {
      if (typeof slot.type === 'symbol') {
        arr = arr.concat(slot.children)
      } else {
        arr.push(slot)
      }
      return arr
    }, [])
    .filter((child: any) => child.type.name === 'BTab')
}

export default defineComponent({
  name: 'BTabs',
  props: {
    activeNavItemClass: {type: [Array, Object, String], default: null},
    activeTabClass: {type: [Array, Object, String], default: null},
    align: {type: String as PropType<Alignment>, default: null},
    card: {type: Boolean, default: false},
    contentClass: {type: [Array, Object, String], default: null},
    // end: { type: Boolean, default: false },
    fill: {type: Boolean, default: false},
    id: {type: String, default: null},
    justified: {type: Boolean, default: false},
    // lazy: { type: Boolean, default: false },
    navClass: {type: [Array, Object, String], default: null},
    navWrapperClass: {type: [Array, Object, String], default: null},
    noFade: {type: Boolean, default: false},
    // noKeyNav: { type: Boolean, default: false },
    noNavStyle: {type: Boolean, default: false},
    pills: {type: Boolean, default: false},
    small: {type: Boolean, default: false},
    tag: {type: String, default: 'div'},
    vertical: {type: Boolean, default: false},
    modelValue: {type: Number, default: -1},
  },
  emits: ['update:modelValue', 'click'],
  setup(props, {slots, emit}) {
    const tabs = computed(() => {
      let tabs: any[] = []

      if (slots.default) {
        tabs = getTabs(slots).map((tab: any, idx) => {
          const buttonId = tab.props['button-id'] || getID('tab')
          const contentId = tab.props.id || getID()
          const active = props.modelValue > -1 ? idx === props.modelValue : tab.props.active === ''

          return {
            buttonId,
            contentId,
            active,
            navItemClasses: [
              {
                active,
                disabled: tab.props.disabled === '',
              },
              active && props.activeNavItemClass ? props.activeNavItemClass : null,
              tab.props['title-link-class'],
            ],
            tabClasses: [
              {
                fade: !props.noFade,
              },
              active && props.activeTabClass ? props.activeTabClass : null,
            ],
            target: `#${contentId}`,
            tab,
          }
        })
      }

      return tabs
    })

    const classes = computed(() => ({
      'd-flex align-items-start': props.vertical,
    }))

    const navTabsClasses = computed(() => ({
      'nav-pills': props.pills,
      'flex-column me-3': props.vertical,
      [`justify-content-${props.align}`]: !!props.align,
      'nav-fill': props.fill,
      'card-header-tabs': props.card,
      'nav-justified': props.justified,
      'nav-tabs': !props.noNavStyle && !props.pills,
      'small': props.small,
    }))

    const tabIndex = computed({
      get: () => props.modelValue,
      set: (value: number) => {
        emit('update:modelValue', value)
      },
    })

    watch(
      () => props.modelValue,
      (newValue, oldValue) => {
        const tabs = slots.default ? getTabs(slots) : null
        const disabledSlotsIdx = tabs
          ? tabs.reduce((arr: number[], child: any, idx: number) => {
              if (child.props.disabled === '') arr.push(idx)
              return arr
            }, [])
          : []

        const maxIdx = tabs ? tabs.length - 1 : 0

        if (disabledSlotsIdx.includes(newValue)) {
          const forward = newValue > oldValue
          let nextIdx = null
          let i = newValue

          while (i >= 0 || i <= maxIdx) {
            i += forward ? 1 : -1
            if (!disabledSlotsIdx.includes(i)) {
              nextIdx = i
              break
            }
          }
          emit('update:modelValue', nextIdx !== null ? nextIdx : oldValue)
        } else if (newValue < 0 || newValue > maxIdx) {
          emit('update:modelValue', oldValue)
        }
      }
    )

    return {
      tabs,
      classes,
      navTabsClasses,
      tabIndex,
    }
  },
})
</script>
