<template>
  <component
    :is="tag"
    class="tabs"
    :class="classes"
    :id="id"
  >
    <div :class="[navWrapperClass, { 'card-header': card }]">
      <ul
        class="nav"
        :class="[navTabsClasses, navClass]"
        role="tablist"
      >
        <li
          class="nav-item"
          v-for="({tab, id, navItemClasses, active, target}, i) in tabs"
          :key="i"
        >
          <a
            :id="`${id}-tab`"
            class="nav-link"
            :class="navItemClasses"
            data-bs-toggle="tab"
            :data-bs-target="target"
            href="#"
            role="tab"
            :aria-controls="id"
            :aria-selected="active"
             @click="tabIndex = i"
          >
            {{ tab.props.title }}
          </a>
        </li>
      </ul>
    </div>
    <div class="tab-content" :class="contentClass">
      <template
        v-for="({tab, id, tabClasses, active}, i) in tabs"
        :key="i"
      >
        <component
          :is="tab"
          :id="id"
          :class="tabClasses"
          :active="active"
        />
      </template>
    </div>
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, watch} from 'vue';
import getID from '../utils/getID';
import Alignment from '../types/Alignment';

export default defineComponent({
    name: 'BTabs',
    props: {
        activeNavItemClass: { type: [Array, Object, String], default: null },
        activeTabClass: { type: [Array, Object, String], default: null },
        align:  { type: String  as PropType<Alignment>, default: null },
        card: { type: Boolean, default: false },
        contentClass: { type: [Array, Object, String], default: null },
        // end: { type: Boolean, default: false },
        fill: { type: Boolean, default: false },
        id: { type: String, default: null },
        justified: { type: Boolean, default: false },
        // lazy: { type: Boolean, default: false },
        navClass: { type: [Array, Object, String], default: null },
        navWrapperClass: { type: [Array, Object, String], default: null },
        noFade: { type: Boolean, default: false },
        // noKeyNav: { type: Boolean, default: false },
        noNavStyle: { type: Boolean, default: false },
        pills: { type: Boolean, default: false },
        small: { type: Boolean, default: false },
        tag: { type: String, default: 'div' },
        vertical: { type: Boolean, default: false },
        modelValue: { type: Number, default: 0 },
    },
    setup(props, { slots, emit }) {
      const tabs = computed(() => {
        let tabs: any[] = [];

        if (slots.default) {
          tabs = slots
            .default()
            .filter((child: any) => child.type.name === "BTab")
            .map((tab: any, idx) => {
              const id = tab.props.id || getID('tab');
              const active = idx === props.modelValue

              return {
                id,
                active,
                navItemClasses: [
                    {
                      active,
                      disabled: tab.props.disabled === ''
                    },
                  (active && props.activeNavItemClass) ? props.activeNavItemClass : null
                ],
                tabClasses: [
                    {
                      'fade': !props.noFade
                    },
                    (active && props.activeTabClass) ? props.activeTabClass : null
                ],
                target: `#${id}`,
                tab,
              }
            });
        }

        return tabs;
      });

      const classes = computed(() => ({
          'd-flex align-items-start': props.vertical
      }));

      const navTabsClasses = computed(() => ({
          'nav-pills': props.pills,
          'flex-column me-3': props.vertical,
          [`justify-content-${props.align}`]: !!props.align,
          'nav-fill': props.fill,
          'card-header-tabs': props.card,
          'nav-justified': props.justified,
          'nav-tabs': !props.noNavStyle && !props.pills,
          'small': props.small
      }));

      const tabIndex = computed({
        get: () => props.modelValue,
        set: (value: number) => {
          emit('update:modelValue', value)
        }
      })

      watch(() => props.modelValue, (newValue, oldValue) => {
        const defaultSlots = (slots.default) ? slots.default().filter((child: any) => child.type.name === "BTab") : null
        const disabledSlotsIdx = (defaultSlots) ? defaultSlots.reduce((arr: number[], child: any, idx: number) => {
          if (child.props.disabled === '') arr.push(idx)
          return arr
        }, []) : []

        const maxIdx = (defaultSlots) ? defaultSlots.length - 1 : 0;

        if (disabledSlotsIdx.includes(newValue)) {
          const forward = newValue > oldValue;
          let nextIdx = null;
          let i = newValue

          while (i >= 0 || i <= maxIdx) {
            i += (forward) ? 1 : -1;
            if (!disabledSlotsIdx.includes(i)) {
              nextIdx = i;
              break;
            }
          }
          emit('update:modelValue', (nextIdx !== null) ? nextIdx : oldValue)
        }
        else if (newValue < 0 || newValue > maxIdx) {
          emit('update:modelValue', oldValue)
        }
      })

      return {
        tabs,
        classes,
        navTabsClasses,
        tabIndex
      };
    }
});
</script>
