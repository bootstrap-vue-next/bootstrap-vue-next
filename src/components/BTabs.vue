<template>
  <div
    class="tabs"
    :class="classes"
    :id="id"
  >
    <div :class="{ 'card-header': card }">
      <ul
        class="nav nav-tabs"
        :class="navTabsClasses"
        role="tablist"
      >
        <li
          class="nav-item"
          v-for="({tab, id, navClasses, active, target}, i) in tabs"
          :key="i"
        >
          <button
            :id="`${id}-tab`"
            class="nav-link"
            :class="navClasses"
            data-bs-toggle="tab"
            :data-bs-target="target"
            type="button"
            role="tab"
            :aria-controls="id"
            :aria-selected="active"
          >
            {{ tab.props.title }}
          </button>
        </li>
      </ul>
    </div>
    <div class="tab-content" :class="contentClass">
      <template
        v-for="({tab, id, tabClasses}, i) in tabs"
        :key="i"
      >
        <component
          :is="tab"
          :id="id"
          :class="tabClasses"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue';
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
        pills: { type: Boolean, default: false },
        vertical: { type: Boolean, default: false },

    },
  setup(props, { slots }) {
    const tabs = computed(() => {
      let tabs: any[] = [];

      if (slots.default) {
        tabs = slots
          .default()
          .filter((child: any) => child.type.name === "BTab")
          .map((tab: any) => {
            const id = tab.props.id || getID('tab');
            const active = tab.props.active === '';

            return {
              id,
              active,
              navClasses: [
                  {
                    active,
                    disabled: tab.props.disabled === ''
                  },
                (active && props.activeNavItemClass) ? props.activeNavItemClass : null
              ],
              tabClasses: (active && props.activeTabClass) ? props.activeTabClass : null,
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
        'nav-justified': props.justified
    }));

    return {
      tabs,
      classes,
      navTabsClasses,
    };
  },
});
</script>
