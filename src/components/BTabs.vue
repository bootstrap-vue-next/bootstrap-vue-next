<template>
  <div
    class="tabs"
    :class="classes"
  >
    <div :class="{ 'card-header': card }">
      <ul
        class="nav nav-tabs"
        :class="navTabsClasses"
        role="tablist"
      >
        <li
          v-for="(tab, i) in tabs"
          :key="i"
        >
          <button
            :id="`${tab.tab.props.id || tab.id}-tab`"
            class="nav-link"
            :class="{ active: tab.tab.props.active === '' }"
            data-bs-toggle="tab"
            :data-bs-target="tab.tab.props.id || tab.id"
            type="button"
            role="tab"
            :aria-controls="tab.tab.props.id || tab.id"
            aria-selected="true"
          >
            {{ tab.tab.props.title }}
          </button>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <template
        v-for="(tab, i) in tabs"
        :key="i"
      >
        <component
          :is="tab.tab"
          :id="tab.tab.props.id || tab.id"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import getID from '../utils/getID';

export default defineComponent({
    name: 'BTabs',
    props: {
        card: { type: Boolean, default: false },
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
          .map((tab) => ({
            id: getID('tab'),
            tab,
          }));
      }

      return tabs;
    });

    const classes = computed(() => ({
        'd-flex align-items-start': props.vertical,
    }));

    const navTabsClasses = computed(() => ({
        'nav-pills': props.pills,
        'flex-column me-3': props.vertical,
    }));

    return {
      tabs,
      classes,
      navTabsClasses,
    };
  },
});
</script>
